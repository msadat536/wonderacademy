/* Wonder Academy - app.js (ES5, React.createElement, no JSX) */
(function () {
  'use strict';

  var h = React.createElement;
  var CFG = window.APP_CONFIG || {};
  var APP_NAME = CFG.APP_NAME || 'Wonder Academy';
  var CONTENT = window.CONTENT || {};
  var AUTH = window.WA_AUTH;
  var CAT_ORDER = ['science', 'islamic-history', 'story-time', 'math', 'physics', 'biology', 'geography', 'inventors', 'character', 'analytical', 'reasoning', 'iq'];
  var VOICE_KEY = 'wonder_voice_v1';
  var UI_KEY = 'wonder_ui_v1';
  var AVATARS = ['🦁', '🐼', '🦄', '🐯', '🚀', '🌸', '🐬', '🦖', '🐱', '⚽', '🎨', '🌟'];
  var CACHE_KEY = 'wonder_academy_cache_v2';

  /* ---------------- local cache (so a dropped connection does not stop play) ---------------- */

  function loadCache(userId) {
    try {
      var raw = localStorage.getItem(CACHE_KEY + ':' + userId);
      if (raw) { return JSON.parse(raw); }
    } catch (e) {}
    return { profiles: [], progress: [], ledger: [], attempts: [] };
  }

  function saveCache(userId, data) {
    try { localStorage.setItem(CACHE_KEY + ':' + userId, JSON.stringify(data)); } catch (e) {}
  }

  /* ---------------- PIN hashing ---------------- */

  function simpleHash(str) {
    var hash = 5381, i;
    for (i = 0; i < str.length; i++) { hash = ((hash * 33) ^ str.charCodeAt(i)) >>> 0; }
    return 'sh_' + hash.toString(16);
  }

  function hashPin(pin, cb) {
    var salted = 'wonder-academy:' + pin;
    if (window.crypto && window.crypto.subtle && window.TextEncoder) {
      try {
        window.crypto.subtle.digest('SHA-256', new TextEncoder().encode(salted)).then(function (buf) {
          var bytes = new Uint8Array(buf), out = '', i;
          for (i = 0; i < bytes.length; i++) { out += ('0' + bytes[i].toString(16)).slice(-2); }
          cb(out);
        }).catch(function () { cb(simpleHash(salted)); });
        return;
      } catch (e) {}
    }
    cb(simpleHash(salted));
  }

  /* ---------------- data ---------------- */

  function loadEverything(userId, cb) {
    var out = { profiles: [], progress: [], ledger: [], attempts: [], settings: null, loaded: false };
    AUTH.api('parent_settings?select=*', 'GET', null, null, function (e1, rows) {
      if (e1 && e1.status === 401) { cb('signedout', null); return; }
      if (!e1 && rows && rows[0]) { out.settings = rows[0]; }
      AUTH.api('kid_profiles?select=*&order=created_at', 'GET', null, null, function (e2, profs) {
        if (e2 && e2.status === 401) { cb('signedout', null); return; }
        AUTH.api('kid_progress?select=*', 'GET', null, null, function (e3, rows2) {
          if (e3 && e3.status === 401) { cb('signedout', null); return; }
          AUTH.api('kid_ledger?select=*&order=created_at.desc', 'GET', null, null, function (e4, rows3) {
            AUTH.api('kid_attempts?select=*&order=created_at.desc&limit=2000', 'GET', null, null, function (e5, rows4) {
              if (e2 || e3) {
                var cached = loadCache(userId);
                out.profiles = cached.profiles; out.progress = cached.progress;
                out.ledger = cached.ledger || []; out.attempts = cached.attempts || [];
                cb(null, out, true);
                return;
              }
              out.profiles = profs || [];
              out.progress = rows2 || [];
              out.ledger = (!e4 && rows3) ? rows3 : (loadCache(userId).ledger || []);
              out.attempts = (!e5 && rows4) ? rows4 : (loadCache(userId).attempts || []);
              out.loaded = true;
              saveCache(userId, { profiles: out.profiles, progress: out.progress, ledger: out.ledger, attempts: out.attempts });
              cb(null, out, false);
            });
          });
        });
      });
    });
  }

  function saveSettings(userId, patch, cb) {
    var body = { owner_id: userId }, k;
    for (k in patch) { body[k] = patch[k]; }
    AUTH.api('parent_settings?on_conflict=owner_id', 'POST', body,
      { 'Prefer': 'resolution=merge-duplicates,return=representation' }, cb);
  }

  function addLedger(userId, row, cb) {
    AUTH.api('kid_ledger', 'POST',
      { owner_id: userId, profile_id: row.profile_id, kind: row.kind, amount_cents: row.amount_cents, note: row.note },
      { 'Prefer': 'return=representation' },
      function (err, out) {
        if (!err && out && out[0]) { cb(null, out[0]); }
        else { cb(err || { message: 'Could not save' }, null); }
      });
  }

  function addAttempt(userId, row, cb) {
    AUTH.api('kid_attempts', 'POST', {
      owner_id: userId, profile_id: row.profile_id, category: row.category,
      concept_id: row.concept_id, concept_title: row.concept_title, cycle: row.cycle,
      tier: row.tier, score: row.score, total: row.total,
      missed: JSON.stringify(row.missed || []), seconds: row.seconds || 0
    }, { 'Prefer': 'return=representation' }, function (err, out) {
      if (!err && out && out[0]) { cb(null, out[0]); } else { cb(err || { message: 'failed' }, null); }
    });
  }

  function money(cents, cur) {
    var neg = cents < 0; var v = Math.abs(cents);
    return (neg ? '-' : '') + (cur || '$') + (v / 100).toFixed(2);
  }

  function balanceOf(ledger, pid) {
    var s = 0;
    ledger.forEach(function (r) { if (r.profile_id === pid) { s += (r.amount_cents || 0); } });
    return s;
  }

  function savePin(userId, pinHash, cb) { saveSettings(userId, { pin_hash: pinHash }, cb); }

  function createProfile(userId, p, cb) {
    AUTH.api('kid_profiles', 'POST',
      { owner_id: userId, name: p.name, age: p.age, avatar: p.avatar },
      { 'Prefer': 'return=representation' },
      function (err, out) {
        if (err || !out || !out[0]) { cb(err || { message: 'Could not save profile.' }, null); return; }
        cb(null, out[0]);
      });
  }

  function deleteProfile(id, cb) {
    AUTH.api('kid_profiles?id=eq.' + encodeURIComponent(id), 'DELETE', null, null, cb);
  }

  function persistProgress(userId, row) {
    AUTH.api('kid_progress?on_conflict=profile_id,category,concept_id,cycle', 'POST', {
      owner_id: userId, profile_id: row.profile_id, category: row.category,
      concept_id: row.concept_id, cycle: row.cycle,
      best_score: row.best_score, stars: row.stars
    }, { 'Prefer': 'resolution=merge-duplicates' }, function () {});
  }

  /* ---------------- derivations ---------------- */

  function tierOf(age) { return age <= 6 ? 'young' : 'older'; }

  function catRows(data, pid, catId) {
    return data.progress.filter(function (r) { return r.profile_id === pid && r.category === catId; });
  }

  function currentCycle(rows, total) {
    var c = 1;
    function countCycle(n) {
      var seen = {};
      rows.forEach(function (r) { if (r.cycle === n) { seen[r.concept_id] = 1; } });
      return Object.keys(seen).length;
    }
    while (total > 0 && countCycle(c) >= total) { c++; }
    return c;
  }

  function doneMap(rows, cycle) {
    var m = {};
    rows.forEach(function (r) { if (r.cycle === cycle) { m[r.concept_id] = r; } });
    return m;
  }

  function totalStars(data, pid) {
    var s = 0;
    data.progress.forEach(function (r) { if (r.profile_id === pid) { s += (r.stars || 0); } });
    return s;
  }

  function totalBadges(data, pid) {
    var n = 0;
    data.progress.forEach(function (r) { if (r.profile_id === pid && r.best_score >= 8) { n++; } });
    return n;
  }

  function hasContentFor(data, pid, cat) {
    var prof = null, i;
    for (i = 0; i < data.profiles.length; i++) { if (data.profiles[i].id === pid) { prof = data.profiles[i]; } }
    var tier = tierOf(prof ? prof.age : 8);
    return function (con) {
      var b = con[tier];
      if (!b || !b.questions || b.questions.length === 0) { return false; }
      return !!(b.story || (b.pages && b.pages.length > 0));
    };
  }

  function totalTrophies(data, pid) {
    var n = 0;
    CAT_ORDER.forEach(function (catId) {
      var cat = CONTENT[catId];
      if (!cat) { return; }
      var playable = cat.concepts.filter(hasContentFor(data, pid, cat)).length;
      if (playable > 0) { n += currentCycle(catRows(data, pid, catId), playable) - 1; }
    });
    return n;
  }

  /* ---------------- content helpers (format v2 with fallback) ---------------- */

  function pagesFor(con, tier) {
    var b = con[tier];
    if (b && b.pages && b.pages.length) { return b.pages; }
    return [{ art: (con.scene || [con.emoji]).join(' '), text: (b && b.story) || '' }];
  }

  var VIDEO_MAP = {};
  function setVideoMap(m) { VIDEO_MAP = m || {}; }

  function videoFor(con, tier, catId) {
    var key = catId + '/' + con.id + '/' + tier;
    var alt = catId + '/' + con.id + '/both';
    if (VIDEO_MAP[key]) { return VIDEO_MAP[key]; }
    if (VIDEO_MAP[alt]) { return VIDEO_MAP[alt]; }
    if (!con.video) { return null; }
    if (typeof con.video === 'string') { return con.video || null; }
    return con.video[tier] || con.video.both || null;
  }

  /* ---------------- sound effects ---------------- */

  var AC = null;
  function audioCtx() {
    if (AC) { return AC; }
    var Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) { return null; }
    try { AC = new Ctx(); } catch (e) { AC = null; }
    return AC;
  }

  function tone(freq, start, dur, type, vol) {
    var ctx = audioCtx();
    if (!ctx) { return; }
    var osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime + start);
    gain.gain.exponentialRampToValueAtTime(vol || 0.16, ctx.currentTime + start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(ctx.currentTime + start); osc.stop(ctx.currentTime + start + dur + 0.03);
  }

  function sfx(kind) {
    if (kind === 'good') { tone(660, 0, 0.13); tone(880, 0.1, 0.18); }
    else if (kind === 'bad') { tone(280, 0, 0.16, 'triangle'); tone(200, 0.12, 0.2, 'triangle'); }
    else if (kind === 'pop') { tone(520, 0, 0.08, 'square', 0.08); }
    else if (kind === 'page') { tone(440, 0, 0.07, 'sine', 0.07); }
    else if (kind === 'win') { [523, 659, 784, 1047].forEach(function (f, i) { tone(f, i * 0.12, 0.22); }); }
    else if (kind === 'trophy') { [523, 659, 784, 1047, 1319].forEach(function (f, i) { tone(f, i * 0.1, 0.3); }); }
  }

  function reduceMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* ---------------- confetti ---------------- */

  function Confetti(props) {
    var ref = React.useRef(null);
    React.useEffect(function () {
      var canvas = ref.current;
      if (!canvas || reduceMotion()) { return; }
      var ctx = canvas.getContext('2d');
      var w = canvas.width = canvas.offsetWidth;
      var hh = canvas.height = canvas.offsetHeight;
      var colors = ['#FFC93C', '#FF6B6B', '#3FA34D', '#7C5CBF', '#2D9CDB'];
      var bits = [], i, raf = null, frames = 0;
      for (i = 0; i < (props.many ? 90 : 55); i++) {
        bits.push({
          x: Math.random() * w, y: -20 - Math.random() * hh,
          vy: 1.6 + Math.random() * 2.6, vx: -1 + Math.random() * 2,
          s: 5 + Math.random() * 7, c: colors[i % colors.length],
          rot: Math.random() * 6, vr: -0.14 + Math.random() * 0.28
        });
      }
      function frame() {
        frames++;
        ctx.clearRect(0, 0, w, hh);
        bits.forEach(function (b) {
          b.y += b.vy; b.x += b.vx; b.rot += b.vr;
          ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(b.rot);
          ctx.fillStyle = b.c; ctx.fillRect(-b.s / 2, -b.s / 2, b.s, b.s * 0.6);
          ctx.restore();
        });
        if (frames < 190) { raf = window.requestAnimationFrame(frame); }
        else { ctx.clearRect(0, 0, w, hh); }
      }
      raf = window.requestAnimationFrame(frame);
      return function () { if (raf) { window.cancelAnimationFrame(raf); } };
    }, []);
    return h('canvas', { ref: ref, className: 'confetti' });
  }

  /* ---------------- speech ---------------- */

  function getVoicePref() {
    var d = { name: '', rate: 0.95, pitch: 1.05, autoRead: 'young' };
    try { var r = localStorage.getItem(VOICE_KEY); if (r) { var p = JSON.parse(r), k; for (k in p) { d[k] = p[k]; } } } catch (e) {}
    return d;
  }
  function setVoicePref(p) { try { localStorage.setItem(VOICE_KEY, JSON.stringify(p)); } catch (e) {} }

  function getUiPref() {
    var d = { textSize: 'normal' };
    try { var r = localStorage.getItem(UI_KEY); if (r) { var p = JSON.parse(r), k; for (k in p) { d[k] = p[k]; } } } catch (e) {}
    return d;
  }
  function setUiPref(p) { try { localStorage.setItem(UI_KEY, JSON.stringify(p)); } catch (e) {} applyUiPref(); }
  function applyUiPref() {
    var p = getUiPref();
    document.body.className = 'text-' + (p.textSize || 'normal');
  }

  function listVoices() {
    if (!window.speechSynthesis) { return []; }
    return window.speechSynthesis.getVoices() || [];
  }

  function pickVoice(pref) {
    var vs = listVoices(), i;
    if (pref.name) { for (i = 0; i < vs.length; i++) { if (vs[i].name === pref.name) { return vs[i]; } } }
    for (i = 0; i < vs.length; i++) { if (vs[i].lang && vs[i].lang.indexOf('en') === 0 && vs[i].localService) { return vs[i]; } }
    for (i = 0; i < vs.length; i++) { if (vs[i].lang && vs[i].lang.indexOf('en') === 0) { return vs[i]; } }
    return null;
  }

  var PRON_KEY = 'wonder_pron_v1';
  var _pronRules = null, _pronStamp = '';

  function getPronSettings() {
    var d = { overrides: {}, honorific: 'full' };
    try { var r = localStorage.getItem(PRON_KEY); if (r) { var p = JSON.parse(r), k; for (k in p) { d[k] = p[k]; } } } catch (e) {}
    return d;
  }
  function setPronSettings(p) {
    try { localStorage.setItem(PRON_KEY, JSON.stringify(p)); } catch (e) {}
    _pronRules = null;
  }

  function pronounce(text) {
    var ps = getPronSettings();
    var stamp = ps.honorific + '|' + JSON.stringify(ps.overrides);
    if (!_pronRules || _pronStamp !== stamp) {
      _pronRules = window.buildPronounceRules ? window.buildPronounceRules(ps.overrides, ps.honorific) : [];
      _pronStamp = stamp;
    }
    var out = String(text || ''), i;
    for (i = 0; i < _pronRules.length; i++) { out = out.replace(_pronRules[i][0], _pronRules[i][1]); }
    return out;
  }

  var speakToken = 0;

  function speak(text, onEnd) {
    if (!window.speechSynthesis) { if (onEnd) { onEnd(); } return; }
    window.speechSynthesis.cancel();
    var token = ++speakToken;
    var pref = getVoicePref();
    var voice = pickVoice(pref);
    var clean = pronounce(text);
    var parts = clean.match(/[^.!?]+[.!?]+["')]?\s*|[^.!?]+$/g) || [clean];
    var idx = 0;
    function next() {
      if (token !== speakToken) { return; }
      if (idx >= parts.length) { if (onEnd) { onEnd(); } return; }
      var piece = parts[idx++].trim();
      if (!piece) { next(); return; }
      var u = new SpeechSynthesisUtterance(piece);
      u.rate = pref.rate || 0.95; u.pitch = pref.pitch || 1.05;
      if (voice) { u.voice = voice; u.lang = voice.lang; }
      u.onend = function () { setTimeout(next, 120); };
      u.onerror = function () { setTimeout(next, 50); };
      window.speechSynthesis.speak(u);
    }
    next();
  }
  function stopSpeak() { speakToken++; if (window.speechSynthesis) { window.speechSynthesis.cancel(); } }

  function shouldAutoRead(tier) {
    var a = getVoicePref().autoRead || 'young';
    return a === 'all' || (a === 'young' && tier === 'young');
  }

  function shuffle(arr) {
    var a = arr.slice(), i, j, t;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function ytEmbed(url) {
    if (!url) { return null; }
    var m = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{6,})/);
    if (m) { return 'https://www.youtube.com/embed/' + m[1]; }
    return url;
  }

  /* ---------------- app ---------------- */

  function App() {
    var st = React.useState({
      screen: 'loading', data: { profiles: [], progress: [], ledger: [], attempts: [] },
      pinHash: null, settings: {}, session: null, offline: false, notice: ''
    });
    React.useEffect(function () { applyUiPref(); }, []);
    var state = st[0], setState = st[1];
    var pidSt = React.useState(null);
    var pid = pidSt[0], setPid = pidSt[1];
    var navSt = React.useState({ catId: null, conceptId: null });
    var nav = navSt[0], setNav = navSt[1];

    function update(patch) {
      setState(function (s) {
        var n = {}, k;
        for (k in s) { n[k] = s[k]; }
        for (k in patch) { n[k] = patch[k]; }
        return n;
      });
    }

    function go(screen, navPatch) {
      stopSpeak();
      if (navPatch) {
        setNav(function (v) {
          var n = { catId: v.catId, conceptId: v.conceptId }, k;
          for (k in navPatch) { n[k] = navPatch[k]; }
          return n;
        });
      }
      update({ screen: screen });
    }

    function bootWithSession(session) {
      loadEverything(session.user_id, function (err, out, offline) {
        if (err === 'signedout') {
          AUTH.signOut();
          update({ screen: 'login', session: null, notice: 'Please sign in again.' });
          return;
        }
        var data = { profiles: out.profiles, progress: out.progress, ledger: out.ledger || [], attempts: out.attempts || [] };
        var st0 = out.settings || {};
        try { setVideoMap(st0.video_map ? JSON.parse(st0.video_map) : {}); } catch (e) { setVideoMap({}); }
        if (st0.pron_overrides || st0.honorific_mode) {
          var cur = getPronSettings();
          var ov = cur.overrides;
          try { if (st0.pron_overrides) { ov = JSON.parse(st0.pron_overrides); } } catch (e2) {}
          setPronSettings({ overrides: ov, honorific: st0.honorific_mode || cur.honorific });
        }
        var pinHash = out.settings ? out.settings.pin_hash : null;
        var next = pinHash ? (data.profiles.length ? 'profiles' : 'parent') : 'pinSetup';
        setState({
          screen: next, data: data, pinHash: pinHash, settings: out.settings || {},
          session: session, offline: !!offline, notice: ''
        });
      });
    }

    React.useEffect(function () {
      if (!AUTH.configured()) { update({ screen: 'setup' }); return; }
      var s = AUTH.getSession();
      if (!s) { update({ screen: 'login' }); return; }
      bootWithSession(s);
      if (window.speechSynthesis) { window.speechSynthesis.getVoices(); }
    }, []);

    function handleSignedIn(session) {
      update({ screen: 'loading', session: session, notice: '' });
      bootWithSession(session);
    }

    function handleSignOut() {
      AUTH.signOut();
      setPid(null);
      setState({
        screen: 'login', data: { profiles: [], progress: [], ledger: [], attempts: [] },
        pinHash: null, settings: {}, session: null, offline: false, notice: ''
      });
    }

    function onPinCreated(hash) {
      savePin(state.session.user_id, hash, function (err) {
        if (err) { update({ notice: 'Could not save the PIN. Check your connection.' }); return; }
        var st2 = {}, k; for (k in state.settings) { st2[k] = state.settings[k]; } st2.pin_hash = hash;
        update({ pinHash: hash, settings: st2, screen: 'parent', notice: '' });
      });
    }

    function onSaveRates(patch, done) {
      saveSettings(state.session.user_id, patch, function (err, out) {
        if (err) { done('Could not save. Check your connection.'); return; }
        var st2 = {}, k; for (k in state.settings) { st2[k] = state.settings[k]; }
        for (k in patch) { st2[k] = patch[k]; }
        update({ settings: st2 });
        done(null);
      });
    }

    function onLedger(row, done) {
      addLedger(state.session.user_id, row, function (err, saved) {
        if (err) { done('Could not save. Check your connection.'); return; }
        var next = { profiles: state.data.profiles, progress: state.data.progress, attempts: state.data.attempts, ledger: [saved].concat(state.data.ledger) };
        saveCache(state.session.user_id, next);
        update({ data: next });
        done(null);
      });
    }

    function onAddProfile(name, age, avatar, done) {
      createProfile(state.session.user_id, { name: name, age: age, avatar: avatar }, function (err, saved) {
        if (err) { done('Could not save. Check your connection.'); return; }
        var next = { profiles: state.data.profiles.concat([saved]), progress: state.data.progress, ledger: state.data.ledger, attempts: state.data.attempts };
        saveCache(state.session.user_id, next);
        update({ data: next });
        done(null);
      });
    }

    function onDeleteProfile(id) {
      deleteProfile(id, function (err) {
        if (err) { update({ notice: 'Could not remove that profile.' }); return; }
        var next = {
          profiles: state.data.profiles.filter(function (p) { return p.id !== id; }),
          progress: state.data.progress.filter(function (r) { return r.profile_id !== id; }),
          ledger: state.data.ledger.filter(function (r) { return r.profile_id !== id; }),
          attempts: state.data.attempts.filter(function (r) { return r.profile_id !== id; })
        };
        saveCache(state.session.user_id, next);
        update({ data: next, notice: '' });
      });
    }

    function recordResult(catId, conceptId, cycle, correct, detail) {
      var cat = CONTENT[catId];
      var con = null, i, r;
      for (i = 0; i < cat.concepts.length; i++) { if (cat.concepts[i].id === conceptId) { con = cat.concepts[i]; } }
      var okFn = hasContentFor(state.data, pid, cat);
      var playableCount = cat.concepts.filter(okFn).length;
      var rowsBefore = catRows(state.data, pid, catId);
      var cycleBefore = currentCycle(rowsBefore, playableCount);

      var rows = state.data.progress.slice();
      var found = null, prevStars = 0, prevBest = 0;
      for (i = 0; i < rows.length; i++) {
        r = rows[i];
        if (r.profile_id === pid && r.category === catId && r.concept_id === conceptId && r.cycle === cycle) { found = r; }
      }
      if (found) {
        prevStars = found.stars; prevBest = found.best_score;
        found.best_score = Math.max(found.best_score, correct);
        found.stars = Math.max(found.stars, correct);
      } else {
        found = { profile_id: pid, category: catId, concept_id: conceptId, cycle: cycle, best_score: correct, stars: correct };
        rows.push(found);
      }
      var next = { profiles: state.data.profiles, progress: rows, ledger: state.data.ledger, attempts: state.data.attempts };
      saveCache(state.session.user_id, next);
      persistProgress(state.session.user_id, found);

      /* Log this attempt, every time, not just the best one. */
      var att = {
        id: 'local-a-' + Date.now(), profile_id: pid, category: catId, concept_id: conceptId,
        concept_title: (detail && detail.conceptTitle) || con.title, cycle: cycle,
        tier: (detail && detail.tier) || tierOf(profile ? profile.age : 8),
        score: correct, total: (detail && detail.total) || 10,
        missed: JSON.stringify((detail && detail.missed) || []),
        seconds: (detail && detail.seconds) || 0,
        created_at: new Date().toISOString()
      };
      next.attempts = [att].concat(state.data.attempts);
      addAttempt(state.session.user_id, {
        profile_id: pid, category: catId, concept_id: conceptId,
        concept_title: att.concept_title, cycle: cycle, tier: att.tier,
        score: correct, total: att.total, missed: (detail && detail.missed) || [], seconds: att.seconds
      }, function (err, saved) {
        if (!err && saved) {
          setState(function (s2) {
            var list = s2.data.attempts.map(function (x) { return x.id === att.id ? saved : x; });
            var d2 = { profiles: s2.data.profiles, progress: s2.data.progress, ledger: s2.data.ledger, attempts: list };
            var n2 = {}, k; for (k in s2) { n2[k] = s2[k]; } n2.data = d2; return n2;
          });
        }
      });

      /* money: only NEW stars, badges and trophies earn */
      var st = state.settings || {};
      var starC = st.star_cents || 0, badgeC = st.badge_cents || 0, trophyC = st.trophy_cents || 0;
      var newStars = Math.max(0, correct - prevStars);
      var newBadge = prevBest < 8 && correct >= 8;
      var cycleAfter = currentCycle(catRows(next, pid, catId), playableCount);
      var newTrophy = cycleAfter > cycleBefore;
      var earned = newStars * starC + (newBadge ? badgeC : 0) + (newTrophy ? trophyC : 0);
      window.__lastEarned = earned;
      window.__lastTrophy = newTrophy;
      if (earned > 0) {
        var note = cat.title + ': ' + con.title + ' ' + correct + '/10' +
          (newStars ? ', ' + newStars + ' new star' + (newStars > 1 ? 's' : '') : '') +
          (newBadge ? ', badge' : '') + (newTrophy ? ', trophy' : '');
        var localRow = { id: 'local-' + Date.now(), profile_id: pid, kind: 'earn', amount_cents: earned, note: note, created_at: new Date().toISOString() };
        next.ledger = [localRow].concat(state.data.ledger);
        addLedger(state.session.user_id, { profile_id: pid, kind: 'earn', amount_cents: earned, note: note }, function (err, saved) {
          if (!err && saved) {
            setState(function (s2) {
              var led = s2.data.ledger.map(function (x) { return x.id === localRow.id ? saved : x; });
              var d2 = { profiles: s2.data.profiles, progress: s2.data.progress, attempts: s2.data.attempts, ledger: led };
              var n2 = {}, k; for (k in s2) { n2[k] = s2[k]; } n2.data = d2; return n2;
            });
          }
        });
      }
      update({ data: next });
    }

    /* --- screens that do not need a kid profile --- */

    if (state.screen === 'loading') {
      return h('div', { className: 'center-wrap' }, h('div', { className: 'burst' }, '🌟'), h('h1', null, APP_NAME));
    }
    if (state.screen === 'setup') { return h(SetupScreen, null); }
    if (state.screen === 'login') {
      return h(LoginScreen, { notice: state.notice, onSignedIn: handleSignedIn });
    }
    if (state.screen === 'pinSetup') {
      return h(PinSetupScreen, { notice: state.notice, onCreated: onPinCreated, onSignOut: handleSignOut });
    }
    if (state.screen === 'parentPin') {
      return h(PinPromptScreen, {
        pinHash: state.pinHash,
        onOk: function () { go('parent'); },
        onCancel: function () { go('profiles'); }
      });
    }
    if (state.screen === 'parent') {
      return h(ParentScreen, {
        data: state.data, session: state.session, notice: state.notice, offline: state.offline,
        settings: state.settings,
        onAdd: onAddProfile, onDelete: onDeleteProfile, onSignOut: handleSignOut,
        onPinChange: function (hash) { onPinCreated(hash); },
        onSaveRates: onSaveRates, onLedger: onLedger,
        onDone: function () { go('profiles'); }
      });
    }
    if (state.screen === 'profiles') {
      return h(ProfilePick, {
        data: state.data, offline: state.offline,
        onPick: function (p) { setPid(p.id); go('home'); },
        onParent: function () { go('parentPin'); }
      });
    }

    var profile = null, i;
    for (i = 0; i < state.data.profiles.length; i++) { if (state.data.profiles[i].id === pid) { profile = state.data.profiles[i]; } }
    if (!profile) { return h('div', { className: 'center-wrap' }, h('h1', null, '...')); }

    var shell = [
      h(TopBar, {
        key: 'tb', profile: profile, stars: totalStars(state.data, pid),
        onSwitch: function () { setPid(null); go('profiles'); }
      })
    ];

    if (state.screen === 'home') {
      shell.push(h(Home, { key: 'home', data: state.data, pid: pid, profile: profile, onOpen: function (catId) { go('category', { catId: catId }); } }));
    } else if (state.screen === 'category') {
      shell.push(h(CategoryScreen, {
        key: 'cat', data: state.data, pid: pid, profile: profile, catId: nav.catId,
        onBack: function () { go('home'); },
        onConcept: function (conceptId) { go('concept', { conceptId: conceptId }); }
      }));
    } else if (state.screen === 'concept') {
      shell.push(h(ConceptScreen, {
        key: 'con', data: state.data, pid: pid, profile: profile, catId: nav.catId, conceptId: nav.conceptId,
        onBack: function () { go('category'); },
        onQuiz: function () { go('quiz'); }
      }));
    } else if (state.screen === 'quiz') {
      shell.push(h(QuizScreen, {
        key: 'quiz', data: state.data, pid: pid, profile: profile, catId: nav.catId, conceptId: nav.conceptId,
        onDone: function (correct, cycle, detail) { window.__lastScore = correct; recordResult(nav.catId, nav.conceptId, cycle, correct, detail); go('results'); },
        onQuit: function () { go('concept'); }
      }));
    } else if (state.screen === 'results') {
      shell.push(h(ResultsScreen, {
        key: 'res', data: state.data, pid: pid, profile: profile, catId: nav.catId, conceptId: nav.conceptId,
        score: window.__lastScore || 0, earned: window.__lastEarned || 0, currency: (state.settings && state.settings.currency) || '$',
        onCategory: function () { go('category'); },
        onNext: function (nextId) { if (nextId) { go('concept', { conceptId: nextId }); } else { go('category'); } }
      }));
    } else if (state.screen === 'rewards') {
      shell.push(h(RewardsScreen, { key: 'rw', data: state.data, pid: pid, profile: profile, settings: state.settings }));
    }

    shell.push(h('div', { key: 'nav', className: 'bottomnav' },
      h('button', { className: state.screen === 'home' ? 'on' : '', onClick: function () { go('home'); } }, '🏠 Learn'),
      h('button', { className: state.screen === 'rewards' ? 'on' : '', onClick: function () { go('rewards'); } }, '🏆 My Rewards')
    ));

    var activeCat = nav.catId && CONTENT[nav.catId] ? CONTENT[nav.catId] : null;
    var shellStyle = activeCat ? { '--cat': activeCat.color, '--cat-tint': activeCat.tint } : null;
    return h('div', { className: 'app' + (activeCat ? ' themed' : ''), style: shellStyle }, shell);
  }

  /* ---------------- auth screens ---------------- */

  function SetupScreen() {
    return h('div', { className: 'app center-wrap' },
      h('div', { style: { fontSize: '54px' } }, '🔧'),
      h('h1', null, 'One setup step left'),
      h('div', { className: 'story-card', style: { textAlign: 'left', maxWidth: '520px', margin: '16px auto' } },
        h('p', null, 'This app signs in with Supabase, so it needs your project keys before anyone can log in.\n\n1. Create a free project at supabase.com\n2. Run supabase.sql in the SQL editor\n3. Copy the Project URL and the anon public key from Project Settings, API\n4. Paste both into config.js and upload it again\n\nFull steps are in README.md.')
      )
    );
  }

  function LoginScreen(props) {
    var modeSt = React.useState('in'); var mode = modeSt[0], setMode = modeSt[1];
    var emailSt = React.useState(''); var email = emailSt[0], setEmail = emailSt[1];
    var pwSt = React.useState(''); var pw = pwSt[0], setPw = pwSt[1];
    var busySt = React.useState(false); var busy = busySt[0], setBusy = busySt[1];
    var msgSt = React.useState(props.notice || ''); var msg = msgSt[0], setMsg = msgSt[1];

    function submit() {
      if (busy) { return; }
      if (!email.trim() || pw.length < 6) { setMsg('Enter an email and a password of at least 6 characters.'); return; }
      setBusy(true); setMsg('');
      var fn = mode === 'in' ? AUTH.signIn : AUTH.signUp;
      fn(email.trim(), pw, function (err, session) {
        setBusy(false);
        if (err) { setMsg(err); return; }
        if (session && session.needsConfirm) {
          setMsg('Check your email and click the confirmation link, then sign in.');
          setMode('in');
          return;
        }
        props.onSignedIn(session);
      });
    }

    return h('div', { className: 'app center-wrap' },
      h('div', { style: { fontSize: '54px' } }, '🔐'),
      h('h1', null, APP_NAME),
      h('div', { className: 'sub' }, mode === 'in' ? 'Parent sign in' : 'Create your parent account'),
      h('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' } },
        h('input', {
          className: 'name-input', type: 'email', value: email, placeholder: 'Email',
          autoComplete: 'username',
          onChange: function (e) { setEmail(e.target.value); }
        }),
        h('input', {
          className: 'name-input', type: 'password', value: pw, placeholder: 'Password',
          autoComplete: mode === 'in' ? 'current-password' : 'new-password',
          onChange: function (e) { setPw(e.target.value); },
          onKeyDown: function (e) { if (e.key === 'Enter') { submit(); } }
        })
      ),
      msg ? h('div', { className: 'sub', style: { color: '#C0392B', marginTop: '14px', maxWidth: '420px', margin: '14px auto 0' } }, msg) : null,
      h('div', { className: 'actionrow' },
        h('button', { className: 'btn green', disabled: busy, onClick: submit },
          busy ? 'Please wait...' : (mode === 'in' ? 'Sign in' : 'Create account'))
      ),
      h('div', { style: { marginTop: '18px' } },
        h('button', {
          className: 'btn plain small',
          onClick: function () { setMode(mode === 'in' ? 'up' : 'in'); setMsg(''); }
        }, mode === 'in' ? 'First time? Create an account' : 'I already have an account')
      ),
      h('div', { className: 'sub', style: { marginTop: '22px', fontSize: '15px', opacity: .7 } },
        'Kids stay signed in on this device once you sign in.')
    );
  }

  function PinPad(props) {
    var pin = props.value;
    function tap(d) { if (pin.length < 4) { props.onChange(pin + d); } }
    var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return h('div', null,
      h('div', { className: 'pin-dots' }, [0, 1, 2, 3].map(function (i) {
        return h('span', { key: i, className: i < pin.length ? 'on' : '' });
      })),
      h('div', { className: 'pinpad' },
        keys.map(function (k) { return h('button', { key: k, onClick: function () { tap(k); } }, k); }).concat([
          h('button', { key: 'clr', className: 'wide', onClick: function () { props.onChange(''); } }, 'Clear'),
          h('button', { key: '0', onClick: function () { tap('0'); } }, '0'),
          h('button', { key: 'del', className: 'wide', onClick: function () { props.onChange(pin.slice(0, -1)); } }, '⌫')
        ])
      )
    );
  }

  function PinSetupScreen(props) {
    var pinSt = React.useState(''); var pin = pinSt[0], setPin = pinSt[1];
    var confirmSt = React.useState(null); var first = confirmSt[0], setFirst = confirmSt[1];
    var msgSt = React.useState(''); var msg = msgSt[0], setMsg = msgSt[1];

    React.useEffect(function () {
      if (pin.length !== 4) { return; }
      if (first === null) { setFirst(pin); setPin(''); setMsg('Enter the same PIN again.'); return; }
      if (first !== pin) { setFirst(null); setPin(''); setMsg('Those did not match. Start again.'); return; }
      hashPin(pin, function (hash) { props.onCreated(hash); });
    }, [pin]);

    return h('div', { className: 'app center-wrap' },
      h('div', { style: { fontSize: '48px' } }, '🔑'),
      h('h1', null, 'Create a parent PIN'),
      h('div', { className: 'sub' }, first === null ? 'Choose 4 digits. You will use this to manage profiles.' : 'Type it once more.'),
      h(PinPad, { value: pin, onChange: setPin }),
      msg ? h('div', { className: 'sub', style: { marginTop: '10px' } }, msg) : null,
      props.notice ? h('div', { className: 'sub', style: { color: '#C0392B' } }, props.notice) : null,
      h('div', { className: 'actionrow' },
        h('button', { className: 'btn plain small', onClick: props.onSignOut }, 'Sign out')
      )
    );
  }

  function PinPromptScreen(props) {
    var pinSt = React.useState(''); var pin = pinSt[0], setPin = pinSt[1];
    var msgSt = React.useState(''); var msg = msgSt[0], setMsg = msgSt[1];

    React.useEffect(function () {
      if (pin.length !== 4) { return; }
      hashPin(pin, function (hash) {
        if (hash === props.pinHash) { props.onOk(); }
        else { setPin(''); setMsg('Wrong PIN. Try again.'); }
      });
    }, [pin]);

    return h('div', { className: 'app center-wrap' },
      h('div', { style: { fontSize: '48px' } }, '🔒'),
      h('h1', null, 'Parent PIN'),
      h('div', { className: 'sub' }, 'Grown-ups only'),
      h(PinPad, { value: pin, onChange: setPin }),
      msg ? h('div', { className: 'sub', style: { color: '#C0392B', marginTop: '10px' } }, msg) : null,
      h('div', { className: 'actionrow' },
        h('button', { className: 'btn plain small', onClick: props.onCancel }, 'Back')
      )
    );
  }

  /* ---------------- parent area ---------------- */

  function ParentScreen(props) {
    var tabSt = React.useState(props.data.profiles.length === 0 ? 'profiles' : 'profiles');
    var tab = tabSt[0], setTab = tabSt[1];
    var pinModeSt = React.useState(false); var pinMode = pinModeSt[0], setPinMode = pinModeSt[1];
    var newPinSt = React.useState(''); var newPin = newPinSt[0], setNewPin = newPinSt[1];

    React.useEffect(function () {
      if (!pinMode || newPin.length !== 4) { return; }
      hashPin(newPin, function (hash) { props.onPinChange(hash); setPinMode(false); setNewPin(''); });
    }, [newPin, pinMode]);

    if (pinMode) {
      return h('div', { className: 'app center-wrap' },
        h('h1', null, 'New parent PIN'),
        h('div', { className: 'sub' }, 'Enter 4 digits'),
        h(PinPad, { value: newPin, onChange: setNewPin }),
        h('div', { className: 'actionrow' },
          h('button', { className: 'btn plain small', onClick: function () { setPinMode(false); setNewPin(''); } }, 'Cancel'))
      );
    }

    var tabs = [['profiles', '👧 Profiles'], ['scores', '📊 Scores'], ['money', '💰 Rewards'], ['voice', '🎙️ Narrator'], ['words', '🗣️ Words'], ['videos', '🎬 Videos'], ['account', '⚙️ Account']];

    return h('div', { className: 'app' },
      h('div', { className: 'backrow' },
        h('button', { className: 'btn plain small', onClick: props.onDone }, '← Done'),
        h('div', { className: 'chip' }, '🔧 Parent area')
      ),
      props.offline ? h('div', { className: 'sub', style: { color: '#C0392B' } }, 'Working offline. Changes may not save.') : null,
      props.notice ? h('div', { className: 'sub', style: { color: '#C0392B' } }, props.notice) : null,
      h('div', { className: 'tabs' }, tabs.map(function (t) {
        return h('button', { key: t[0], className: tab === t[0] ? 'on' : '', onClick: function () { setTab(t[0]); } }, t[1]);
      })),
      tab === 'profiles' ? h(ProfilesTab, props) : null,
      tab === 'scores' ? h(ScoresTab, props) : null,
      tab === 'money' ? h(MoneyTab, props) : null,
      tab === 'voice' ? h(VoiceTab, null) : null,
      tab === 'words' ? h(WordsTab, { settings: props.settings, onSaveRates: props.onSaveRates }) : null,
      tab === 'videos' ? h(VideosTab, { settings: props.settings, onSaveRates: props.onSaveRates }) : null,
      tab === 'account' ? h('div', null,
        h('h1', { style: { fontSize: '24px', margin: '16px 0 6px' } }, 'Account'),
        h('div', { className: 'reward-cat' },
          h('span', { className: 'em2' }, '📧'),
          h('span', { className: 'fill' }, props.session ? props.session.email : '')
        ),
        h('div', { className: 'actionrow', style: { marginTop: '14px' } },
          h('button', { className: 'btn grape small', onClick: function () { setPinMode(true); } }, 'Change PIN'),
          h('button', { className: 'btn plain small', onClick: props.onSignOut }, 'Sign out')
        )
      ) : null
    );
  }

  function ProfilesTab(props) {
    var showAddSt = React.useState(props.data.profiles.length === 0);
    var showAdd = showAddSt[0], setShowAdd = showAddSt[1];
    var nameSt = React.useState(''); var name = nameSt[0], setName = nameSt[1];
    var ageSt = React.useState(null); var age = ageSt[0], setAge = ageSt[1];
    var avSt = React.useState(AVATARS[0]); var avatar = avSt[0], setAvatar = avSt[1];
    var busySt = React.useState(false); var busy = busySt[0], setBusy = busySt[1];
    var errSt = React.useState(''); var err = errSt[0], setErr = errSt[1];
    var confirmSt = React.useState(null); var confirmId = confirmSt[0], setConfirmId = confirmSt[1];
    var ages = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    function add() {
      if (!name.trim() || !age || busy) { return; }
      setBusy(true); setErr('');
      props.onAdd(name.trim(), age, avatar, function (e) {
        setBusy(false);
        if (e) { setErr(e); return; }
        setName(''); setAge(null); setAvatar(AVATARS[0]); setShowAdd(false);
      });
    }

    return h('div', null,
      h('h1', { style: { fontSize: '24px', margin: '16px 0 6px' } }, 'Kid profiles'),
      props.data.profiles.length === 0
        ? h('div', { className: 'coming' }, 'No profiles yet. Add your first one below.')
        : h('div', null, props.data.profiles.map(function (p) {
            return h('div', { key: p.id, className: 'reward-cat' },
              h('span', { className: 'em2' }, p.avatar),
              h('span', { className: 'fill' }, p.name + ' · age ' + p.age + ' · ⭐ ' + totalStars(props.data, p.id)),
              confirmId === p.id
                ? h('span', { style: { display: 'flex', gap: '8px' } },
                    h('button', { className: 'btn small', style: { background: '#FFB3B3' }, onClick: function () { setConfirmId(null); props.onDelete(p.id); } }, 'Remove'),
                    h('button', { className: 'btn plain small', onClick: function () { setConfirmId(null); } }, 'Keep'))
                : h('button', { className: 'btn plain small', onClick: function () { setConfirmId(p.id); } }, 'Remove')
            );
          })),
      showAdd
        ? h('div', { className: 'story-card', style: { marginTop: '16px' } },
            h('h2', null, 'Add a profile'),
            h('div', { style: { textAlign: 'center' } },
              h('input', { className: 'name-input', value: name, maxLength: 14, placeholder: 'Name', onChange: function (e) { setName(e.target.value); } }),
              h('div', { className: 'sub', style: { marginTop: '14px' } }, 'Age'),
              h('div', { className: 'age-pick' }, ages.map(function (a) {
                return h('button', { key: a, className: a === age ? 'sel' : '', onClick: function () { setAge(a); } }, a);
              })),
              h('div', { className: 'sub' }, 'Avatar'),
              h('div', { className: 'avatar-pick' }, AVATARS.map(function (a) {
                return h('button', { key: a, className: a === avatar ? 'sel' : '', onClick: function () { setAvatar(a); } }, a);
              })),
              err ? h('div', { className: 'sub', style: { color: '#C0392B' } }, err) : null,
              h('div', { className: 'actionrow' },
                props.data.profiles.length > 0 ? h('button', { className: 'btn plain', onClick: function () { setShowAdd(false); setErr(''); } }, 'Cancel') : null,
                h('button', { className: 'btn green', disabled: !name.trim() || !age || busy, onClick: add }, busy ? 'Saving...' : 'Save profile')
              ),
              h('div', { className: 'sub', style: { fontSize: '15px', opacity: .7, marginTop: '6px' } },
                'Age 6 and under gets shorter stories and 3 choices. Age 7 and up gets 4 choices.')
            ))
        : h('div', { className: 'actionrow' },
            h('button', { className: 'btn', onClick: function () { setShowAdd(true); } }, '➕ Add a profile'))
    );
  }

  function ScoresTab(props) {
    var kidSt = React.useState(props.data.profiles.length ? props.data.profiles[0].id : null);
    var kid = kidSt[0], setKid = kidSt[1];
    var catSt = React.useState('all'); var catFilter = catSt[0], setCatFilter = catSt[1];
    var rangeSt = React.useState('all'); var range = rangeSt[0], setRange = rangeSt[1];
    var openSt = React.useState(null); var open = openSt[0], setOpen = openSt[1];
    var viewSt = React.useState('summary'); var view = viewSt[0], setView = viewSt[1];

    var all = (props.data.attempts || []).filter(function (a) { return a.profile_id === kid; });

    var cutoff = 0;
    if (range === '7') { cutoff = Date.now() - 7 * 86400000; }
    else if (range === '30') { cutoff = Date.now() - 30 * 86400000; }

    var rows = all.filter(function (a) {
      if (catFilter !== 'all' && a.category !== catFilter) { return false; }
      if (cutoff && new Date(a.created_at).getTime() < cutoff) { return false; }
      return true;
    });

    function pct(s, t) { return t ? Math.round(s / t * 100) : 0; }

    var totalScore = 0, totalMax = 0, best = null, worst = null, secs = 0;
    rows.forEach(function (a) {
      totalScore += a.score; totalMax += a.total; secs += (a.seconds || 0);
      if (best === null || a.score > best.score) { best = a; }
      if (worst === null || a.score < worst.score) { worst = a; }
    });
    var avg = rows.length ? (totalScore / rows.length) : 0;

    /* per category rollup */
    var byCat = {};
    rows.forEach(function (a) {
      if (!byCat[a.category]) { byCat[a.category] = { n: 0, score: 0, max: 0, first: null, last: null }; }
      var c = byCat[a.category];
      c.n++; c.score += a.score; c.max += a.total;
      var t = new Date(a.created_at).getTime();
      if (c.first === null || t < c.first.t) { c.first = { t: t, s: a.score }; }
      if (c.last === null || t > c.last.t) { c.last = { t: t, s: a.score }; }
    });

    /* weakest concepts by most recent score */
    var latestByConcept = {};
    all.slice().reverse().forEach(function (a) { latestByConcept[a.category + '/' + a.concept_id] = a; });
    var weak = [];
    var kk;
    for (kk in latestByConcept) { if (latestByConcept[kk].score < 7) { weak.push(latestByConcept[kk]); } }
    weak.sort(function (a, b) { return a.score - b.score; });

    function missedText(a) {
      var idx = [];
      try { idx = JSON.parse(a.missed || '[]'); } catch (e) {}
      if (!idx.length) { return null; }
      var cat = CONTENT[a.category];
      if (!cat) { return idx.length + ' missed'; }
      var con = null, i;
      for (i = 0; i < cat.concepts.length; i++) { if (cat.concepts[i].id === a.concept_id) { con = cat.concepts[i]; } }
      if (!con || !con[a.tier] || !con[a.tier].questions) { return idx.length + ' missed'; }
      var qs = con[a.tier].questions;
      return idx.map(function (n) { return qs[n] ? qs[n].q : 'Question ' + (n + 1); });
    }

    function when(a) {
      var d = new Date(a.created_at);
      return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function exportCsv() {
      var head = ['Date', 'Child', 'Category', 'Lesson', 'Round', 'Level', 'Score', 'Out of', 'Percent', 'Seconds'];
      var prof = null, i;
      for (i = 0; i < props.data.profiles.length; i++) { if (props.data.profiles[i].id === kid) { prof = props.data.profiles[i]; } }
      var lines = [head.join(',')];
      rows.forEach(function (a) {
        var cat = CONTENT[a.category];
        lines.push([
          '"' + when(a) + '"',
          '"' + (prof ? prof.name : '') + '"',
          '"' + (cat ? cat.title : a.category) + '"',
          '"' + (a.concept_title || a.concept_id).replace(/"/g, '""') + '"',
          a.cycle, a.tier, a.score, a.total, pct(a.score, a.total), a.seconds || 0
        ].join(','));
      });
      var blob = new Blob([lines.join('\n')], { type: 'text/csv' });
      var url = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = url;
      link.download = 'wonder-scores-' + (prof ? prof.name : 'kid') + '.csv';
      document.body.appendChild(link); link.click(); document.body.removeChild(link);
      setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    }

    var cats = ['all'].concat(CAT_ORDER.filter(function (c) { return CONTENT[c]; }));

    return h('div', null,
      h('h1', { style: { fontSize: '24px', margin: '16px 0 6px' } }, 'Scores'),
      props.data.profiles.length === 0
        ? h('div', { className: 'coming' }, 'Add a profile first.')
        : h('div', null,
          h('div', { className: 'tabs small' }, props.data.profiles.map(function (p) {
            return h('button', { key: p.id, className: kid === p.id ? 'on' : '', onClick: function () { setKid(p.id); setOpen(null); } },
              p.avatar + ' ' + p.name);
          })),
          h('div', { className: 'tabs small', style: { marginTop: '8px' } },
            h('button', { className: range === 'all' ? 'on' : '', onClick: function () { setRange('all'); } }, 'All time'),
            h('button', { className: range === '30' ? 'on' : '', onClick: function () { setRange('30'); } }, 'Last 30 days'),
            h('button', { className: range === '7' ? 'on' : '', onClick: function () { setRange('7'); } }, 'Last 7 days')),
          h('select', { className: 'select', style: { marginTop: '8px' }, value: catFilter, onChange: function (e) { setCatFilter(e.target.value); } },
            cats.map(function (c) {
              return h('option', { key: c, value: c }, c === 'all' ? 'All categories' : (CONTENT[c].emoji + ' ' + CONTENT[c].title));
            })),

          rows.length === 0
            ? h('div', { className: 'coming' }, 'No quizzes taken yet for this filter.')
            : h('div', null,
              h('div', { className: 'badge-row', style: { marginTop: '14px' } },
                h('div', { className: 'tile badge-card' }, h('div', { className: 'n' }, rows.length), h('div', { className: 'lbl' }, 'Quizzes taken')),
                h('div', { className: 'tile badge-card' }, h('div', { className: 'n' }, avg.toFixed(1) + '/10'), h('div', { className: 'lbl' }, 'Average score')),
                h('div', { className: 'tile badge-card' }, h('div', { className: 'n' }, pct(totalScore, totalMax) + '%'), h('div', { className: 'lbl' }, 'Overall correct')),
                h('div', { className: 'tile badge-card' }, h('div', { className: 'n' }, Math.round(secs / 60) + 'm'), h('div', { className: 'lbl' }, 'Time on quizzes'))
              ),

              h('div', { className: 'tabs small', style: { marginTop: '14px' } },
                h('button', { className: view === 'summary' ? 'on' : '', onClick: function () { setView('summary'); } }, 'By category'),
                h('button', { className: view === 'log' ? 'on' : '', onClick: function () { setView('log'); } }, 'Every quiz'),
                h('button', { className: view === 'weak' ? 'on' : '', onClick: function () { setView('weak'); } }, 'Needs practice'),
                h('button', { className: 'plain', onClick: exportCsv }, '⬇ CSV')),

              view === 'summary' ? h('div', { style: { marginTop: '10px' } },
                CAT_ORDER.filter(function (c) { return byCat[c]; }).map(function (c) {
                  var d = byCat[c], cat = CONTENT[c];
                  var p = pct(d.score, d.max);
                  var trend = d.last.s - d.first.s;
                  return h('div', { key: c, className: 'score-row' },
                    h('span', { className: 'em2' }, cat.emoji),
                    h('span', { className: 'fill' },
                      h('span', { className: 'vname' }, cat.title),
                      h('span', { className: 'vmeta' }, d.n + ' quiz' + (d.n === 1 ? '' : 'zes') + ' · avg ' + (d.score / d.n).toFixed(1) + '/10' +
                        (d.n > 1 ? (trend > 0 ? ' · improving' : (trend < 0 ? ' · slipping' : ' · steady')) : '')),
                      h('span', { className: 'bar' }, h('span', { style: { width: p + '%', background: cat.color } }))),
                    h('span', { className: 'pctbig ' + (p >= 80 ? 'good' : (p >= 60 ? 'ok' : 'low')) }, p + '%'));
                })) : null,

              view === 'log' ? h('div', { style: { marginTop: '10px' } },
                rows.map(function (a) {
                  var cat = CONTENT[a.category];
                  var p = pct(a.score, a.total);
                  var miss = missedText(a);
                  var isOpen = open === a.id;
                  return h('div', { key: a.id },
                    h('div', { className: 'score-row clickable', onClick: function () { setOpen(isOpen ? null : a.id); } },
                      h('span', { className: 'em2' }, cat ? cat.emoji : '📘'),
                      h('span', { className: 'fill' },
                        h('span', { className: 'vname' }, a.concept_title || a.concept_id),
                        h('span', { className: 'vmeta' }, when(a) + ' · ' + (cat ? cat.title : a.category) +
                          ' · round ' + a.cycle + ' · ' + (a.tier === 'young' ? 'easy' : 'older') +
                          (a.seconds ? ' · ' + a.seconds + 's' : ''))),
                      h('span', { className: 'pctbig ' + (p >= 80 ? 'good' : (p >= 60 ? 'ok' : 'low')) }, a.score + '/' + a.total)),
                    isOpen && miss ? h('div', { className: 'missed-box' },
                      h('div', { className: 'fact-lbl' }, 'Got wrong:'),
                      (typeof miss === 'string' ? [miss] : miss).map(function (m, mi) {
                        return h('div', { key: mi, className: 'missed-q' }, '• ' + m);
                      })) : null,
                    isOpen && !miss ? h('div', { className: 'missed-box' }, h('div', { className: 'fact-lbl' }, '🎉 Perfect score, nothing missed.')) : null);
                })) : null,

              view === 'weak' ? h('div', { style: { marginTop: '10px' } },
                weak.length === 0
                  ? h('div', { className: 'coming' }, 'Nothing below 7 out of 10. Everything looks solid.')
                  : h('div', null,
                    h('div', { className: 'sub', style: { textAlign: 'left', marginBottom: '6px' } },
                      'Most recent score below 7. Worth revisiting these together.'),
                    weak.map(function (a) {
                      var cat = CONTENT[a.category];
                      var miss = missedText(a);
                      return h('div', { key: a.category + a.concept_id },
                        h('div', { className: 'score-row' },
                          h('span', { className: 'em2' }, cat ? cat.emoji : '📘'),
                          h('span', { className: 'fill' },
                            h('span', { className: 'vname' }, a.concept_title || a.concept_id),
                            h('span', { className: 'vmeta' }, (cat ? cat.title : a.category) + ' · last tried ' + when(a))),
                          h('span', { className: 'pctbig low' }, a.score + '/' + a.total)),
                        miss ? h('div', { className: 'missed-box' },
                          (typeof miss === 'string' ? [miss] : miss).map(function (m, mi) {
                            return h('div', { key: mi, className: 'missed-q' }, '• ' + m);
                          })) : null);
                    }))) : null
            ))
    );
  }

  function MoneyTab(props) {
    var st = props.settings || {};
    var cur = st.currency || '$';
    var starSt = React.useState(((st.star_cents || 0) / 100).toFixed(2)); var star = starSt[0], setStar = starSt[1];
    var badgeSt = React.useState(((st.badge_cents || 0) / 100).toFixed(2)); var badge = badgeSt[0], setBadge = badgeSt[1];
    var trophySt = React.useState(((st.trophy_cents || 0) / 100).toFixed(2)); var trophy = trophySt[0], setTrophy = trophySt[1];
    var curSt = React.useState(cur); var curSym = curSt[0], setCurSym = curSt[1];
    var msgSt = React.useState(''); var msg = msgSt[0], setMsg = msgSt[1];
    var busySt = React.useState(false); var busy = busySt[0], setBusy = busySt[1];
    var kidSt = React.useState(props.data.profiles.length ? props.data.profiles[0].id : null); var kid = kidSt[0], setKid = kidSt[1];
    var amtSt = React.useState(''); var amt = amtSt[0], setAmt = amtSt[1];
    var noteSt = React.useState(''); var note = noteSt[0], setNote = noteSt[1];
    var modeSt = React.useState('redeem'); var mode = modeSt[0], setMode = modeSt[1];

    function toCents(v) { var n = parseFloat(v); return isNaN(n) ? 0 : Math.round(n * 100); }

    function saveRates() {
      setBusy(true); setMsg('');
      props.onSaveRates({ star_cents: toCents(star), badge_cents: toCents(badge), trophy_cents: toCents(trophy), currency: curSym || '$' }, function (e) {
        setBusy(false); setMsg(e || 'Saved.');
      });
    }

    function submitLedger() {
      var c = toCents(amt);
      if (!kid || c <= 0) { setMsg('Enter an amount above zero.'); return; }
      setBusy(true); setMsg('');
      props.onLedger({ profile_id: kid, kind: mode, amount_cents: mode === 'redeem' ? -c : c, note: note.trim() || (mode === 'redeem' ? 'Redeemed' : 'Bonus') }, function (e) {
        setBusy(false); setMsg(e || 'Saved.');
        if (!e) { setAmt(''); setNote(''); }
      });
    }

    var kidProfile = null, i;
    for (i = 0; i < props.data.profiles.length; i++) { if (props.data.profiles[i].id === kid) { kidProfile = props.data.profiles[i]; } }
    var hist = (props.data.ledger || []).filter(function (r) { return r.profile_id === kid; });

    return h('div', null,
      h('h1', { style: { fontSize: '24px', margin: '16px 0 6px' } }, 'Money rewards'),
      h('div', { className: 'story-card' },
        h('div', { className: 'sub', style: { textAlign: 'left', marginBottom: '8px' } }, 'How much each achievement earns. Only new stars count, so replaying a lesson cannot farm money.'),
        h('div', { className: 'rate-row' }, h('span', null, 'Currency symbol'), h('input', { className: 'rate-input', value: curSym, maxLength: 3, onChange: function (e) { setCurSym(e.target.value); } })),
        h('div', { className: 'rate-row' }, h('span', null, '⭐ Per new star'), h('input', { className: 'rate-input', type: 'number', step: '0.01', min: '0', value: star, onChange: function (e) { setStar(e.target.value); } })),
        h('div', { className: 'rate-row' }, h('span', null, '🏅 Per Smarty Badge (8+/10)'), h('input', { className: 'rate-input', type: 'number', step: '0.01', min: '0', value: badge, onChange: function (e) { setBadge(e.target.value); } })),
        h('div', { className: 'rate-row' }, h('span', null, '🏆 Per Trophy (category round)'), h('input', { className: 'rate-input', type: 'number', step: '0.01', min: '0', value: trophy, onChange: function (e) { setTrophy(e.target.value); } })),
        h('div', { className: 'actionrow' }, h('button', { className: 'btn green small', disabled: busy, onClick: saveRates }, 'Save rates'))
      ),

      props.data.profiles.length ? h('div', { className: 'story-card', style: { marginTop: '16px' } },
        h('h2', null, 'Wallets'),
        h('div', { className: 'tabs small' }, props.data.profiles.map(function (p) {
          return h('button', { key: p.id, className: kid === p.id ? 'on' : '', onClick: function () { setKid(p.id); } },
            p.avatar + ' ' + p.name + ' · ' + money(balanceOf(props.data.ledger || [], p.id), cur));
        })),
        kidProfile ? h('div', null,
          h('div', { className: 'wallet', style: { marginTop: '10px' } },
            h('div', { className: 'wallet-lbl' }, kidProfile.avatar + ' ' + kidProfile.name),
            h('div', { className: 'wallet-amt' }, money(balanceOf(props.data.ledger || [], kid), cur))),
          h('div', { className: 'tabs small', style: { marginTop: '12px' } },
            h('button', { className: mode === 'redeem' ? 'on' : '', onClick: function () { setMode('redeem'); } }, '🎁 Redeem (spend)'),
            h('button', { className: mode === 'bonus' ? 'on' : '', onClick: function () { setMode('bonus'); } }, '🎉 Bonus (add)')),
          h('div', { className: 'rate-row' }, h('span', null, 'Amount ' + cur), h('input', { className: 'rate-input', type: 'number', step: '0.01', min: '0', value: amt, placeholder: '0.00', onChange: function (e) { setAmt(e.target.value); } })),
          h('input', { className: 'name-input', style: { width: '100%', marginTop: '8px', fontSize: '17px' }, value: note, maxLength: 60, placeholder: mode === 'redeem' ? 'What did they get? e.g. Lego set' : 'Why? e.g. Helped tidy up', onChange: function (e) { setNote(e.target.value); } }),
          h('div', { className: 'actionrow' },
            h('button', { className: 'btn ' + (mode === 'redeem' ? 'grape' : 'green') + ' small', disabled: busy, onClick: submitLedger }, mode === 'redeem' ? 'Record redemption' : 'Add bonus')),
          h('h2', { style: { fontSize: '18px', margin: '18px 0 6px' } }, 'History (' + hist.length + ')'),
          hist.length === 0 ? h('div', { className: 'sub' }, 'Nothing yet.') :
            hist.map(function (r) {
              var d = r.created_at ? new Date(r.created_at) : null;
              return h('div', { key: r.id, className: 'ledger-row ' + r.kind },
                h('span', { className: 'em2' }, r.kind === 'earn' ? '⭐' : (r.kind === 'redeem' ? '🎁' : '🎉')),
                h('span', { className: 'fill' }, (r.note || r.kind),
                  h('div', { className: 'when' }, d ? d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '')),
                h('span', { className: 'amt' }, (r.amount_cents > 0 ? '+' : '') + money(r.amount_cents, cur))
              );
            })
        ) : null
      ) : null,
      msg ? h('div', { className: 'sub', style: { marginTop: '10px' } }, msg) : null
    );
  }

  /* Known voice names by gender, so the list can be filtered.
     Anything unknown is shown under Other and can still be previewed. */
  var FEMALE_NAMES = ['samantha','karen','moira','tessa','fiona','victoria','allison','ava','susan','zoe','nicky','joanna','salli','kimberly','kendra','ivy','aria','jenny','michelle','ana','sara','serena','catherine','female','woman','google us english','google uk english female','zira','hazel','eva','linda','heather','amy','emma','olivia','samira'];
  var MALE_NAMES = ['daniel','alex','fred','tom','aaron','rishi','oliver','arthur','gordon','matthew','joey','justin','kevin','brian','guy','davis','jason','tony','male','man','google uk english male','david','mark','james','george','ryan','eric','roger','steffan','nathan'];

  function voiceGender(v) {
    var n = (v.name || '').toLowerCase(), i;
    for (i = 0; i < FEMALE_NAMES.length; i++) { if (n.indexOf(FEMALE_NAMES[i]) !== -1) { return 'female'; } }
    for (i = 0; i < MALE_NAMES.length; i++) { if (n.indexOf(MALE_NAMES[i]) !== -1) { return 'male'; } }
    if (/#female|_f\b|\bf\b/.test(n)) { return 'female'; }
    if (/#male|_m\b|\bm\b/.test(n)) { return 'male'; }
    return 'other';
  }

  function voiceQuality(v) {
    var n = (v.name || '').toLowerCase();
    if (n.indexOf('natural') !== -1 || n.indexOf('neural') !== -1 || n.indexOf('premium') !== -1 || n.indexOf('enhanced') !== -1) { return 'Natural'; }
    if (!v.localService) { return 'Online'; }
    return '';
  }

  var VOICE_PRESETS = [
    { id: 'story', label: '📖 Storyteller', rate: 0.88, pitch: 1.0 },
    { id: 'teacher', label: '🎓 Clear teacher', rate: 1.0, pitch: 0.95 },
    { id: 'playful', label: '🎈 Playful', rate: 1.0, pitch: 1.35 },
    { id: 'calm', label: '🌙 Calm and slow', rate: 0.78, pitch: 1.05 }
  ];

  var SAMPLE = 'Once upon a time, in the city of Makkah, a boy looked up at the stars and wondered who had made them.';

  function VoiceTab() {
    var prefSt = React.useState(getVoicePref()); var pref = prefSt[0], setPref = prefSt[1];
    var uiSt = React.useState(getUiPref()); var ui = uiSt[0], setUi = uiSt[1];
    var voicesSt = React.useState(listVoices()); var voices = voicesSt[0], setVoices = voicesSt[1];
    var filterSt = React.useState('us'); var filter = filterSt[0], setFilter = filterSt[1];
    var playingSt = React.useState(''); var playing = playingSt[0], setPlaying = playingSt[1];

    React.useEffect(function () {
      if (!window.speechSynthesis) { return; }
      function refresh() { setVoices(listVoices()); }
      window.speechSynthesis.addEventListener('voiceschanged', refresh);
      refresh();
      var t = setTimeout(refresh, 600);
      return function () { window.speechSynthesis.removeEventListener('voiceschanged', refresh); clearTimeout(t); };
    }, []);

    function setP(k, v) {
      var n = {}, key; for (key in pref) { n[key] = pref[key]; } n[k] = v;
      setPref(n); setVoicePref(n);
    }

    function setU(k, v) {
      var n = {}, key; for (key in ui) { n[key] = ui[key]; } n[k] = v;
      setUi(n); setUiPref(n);
    }

    function preview(v) {
      stopSpeak();
      setPlaying(v ? v.name : 'auto');
      var saved = pref.name;
      setVoicePref({ name: v ? v.name : '', rate: pref.rate, pitch: pref.pitch, autoRead: pref.autoRead });
      speak(SAMPLE, function () { setPlaying(''); });
      setVoicePref({ name: saved, rate: pref.rate, pitch: pref.pitch, autoRead: pref.autoRead });
    }

    function applyPreset(p) {
      var n = {}, key; for (key in pref) { n[key] = pref[key]; } n.rate = p.rate; n.pitch = p.pitch;
      setPref(n); setVoicePref(n);
      stopSpeak(); speak(SAMPLE);
    }

    var us = voices.filter(function (v) { return (v.lang || '').replace('_', '-').toLowerCase().indexOf('en-us') === 0; });
    var otherEn = voices.filter(function (v) { var l = (v.lang || '').toLowerCase(); return l.indexOf('en') === 0 && l.replace('_', '-').indexOf('en-us') !== 0; });
    var shown;
    if (filter === 'us') { shown = us; }
    else if (filter === 'en') { shown = us.concat(otherEn); }
    else if (filter === 'female') { shown = us.concat(otherEn).filter(function (v) { return voiceGender(v) === 'female'; }); }
    else if (filter === 'male') { shown = us.concat(otherEn).filter(function (v) { return voiceGender(v) === 'male'; }); }
    else { shown = voices; }

    shown = shown.slice().sort(function (a, b) {
      var qa = voiceQuality(a) === 'Natural' ? 0 : 1, qb = voiceQuality(b) === 'Natural' ? 0 : 1;
      if (qa !== qb) { return qa - qb; }
      return (a.name || '').localeCompare(b.name || '');
    });

    var filters = [['us', '🇺🇸 US English'], ['en', 'All English'], ['female', '👩 Female'], ['male', '👨 Male'], ['all', 'Every voice']];

    return h('div', null,
      h('h1', { style: { fontSize: '24px', margin: '16px 0 6px' } }, 'Narrator'),

      h('div', { className: 'story-card' },
        h('h2', null, 'Voice style'),
        h('div', { className: 'sub', style: { textAlign: 'left', marginBottom: '8px' } }, 'Quick presets. Each one plays a sample when you tap it.'),
        h('div', { className: 'tabs small' }, VOICE_PRESETS.map(function (p) {
          var on = Math.abs(pref.rate - p.rate) < 0.02 && Math.abs(pref.pitch - p.pitch) < 0.02;
          return h('button', { key: p.id, className: on ? 'on' : '', onClick: function () { applyPreset(p); } }, p.label);
        })),
        h('div', { className: 'rate-row', style: { marginTop: '10px' } }, h('span', null, 'Speed ' + Number(pref.rate).toFixed(2)),
          h('input', { type: 'range', min: '0.6', max: '1.4', step: '0.02', value: pref.rate, onChange: function (e) { setP('rate', parseFloat(e.target.value)); } })),
        h('div', { className: 'rate-row' }, h('span', null, 'Pitch ' + Number(pref.pitch).toFixed(2)),
          h('input', { type: 'range', min: '0.6', max: '1.6', step: '0.02', value: pref.pitch, onChange: function (e) { setP('pitch', parseFloat(e.target.value)); } })),
        h('div', { className: 'actionrow' },
          h('button', { className: 'btn grape small', onClick: function () { stopSpeak(); speak(SAMPLE); } }, '🔊 Hear it'),
          h('button', { className: 'btn plain small', onClick: stopSpeak }, 'Stop'))
      ),

      h('div', { className: 'story-card', style: { marginTop: '16px' } },
        h('h2', null, 'Choose a voice'),
        h('div', { className: 'sub', style: { textAlign: 'left' } },
          voices.length + ' voice' + (voices.length === 1 ? '' : 's') + ' on this device, ' + us.length + ' US English. Tap ▶ to hear one before choosing.'),
        h('div', { className: 'tabs small', style: { marginTop: '8px' } }, filters.map(function (f) {
          return h('button', { key: f[0], className: filter === f[0] ? 'on' : '', onClick: function () { setFilter(f[0]); } }, f[1]);
        })),

        h('div', { className: 'voice-row' + (pref.name === '' ? ' sel' : '') },
          h('button', { className: 'vplay', onClick: function () { preview(null); } }, playing === 'auto' ? '⏸' : '▶'),
          h('span', { className: 'fill' }, h('span', { className: 'vname' }, 'Automatic'),
            h('span', { className: 'vmeta' }, 'Best English voice on this device')),
          h('button', { className: 'btn small ' + (pref.name === '' ? 'green' : 'plain'), onClick: function () { setP('name', ''); } },
            pref.name === '' ? '✓ Using' : 'Use')),

        shown.length === 0
          ? h('div', { className: 'sub', style: { marginTop: '10px' } },
              filter === 'us' ? 'No US English voices installed. See how to add them below.' : 'No voices match this filter.')
          : shown.map(function (v) {
              var g = voiceGender(v), q = voiceQuality(v);
              var sel = pref.name === v.name;
              return h('div', { key: v.name, className: 'voice-row' + (sel ? ' sel' : '') },
                h('button', { className: 'vplay', onClick: function () { preview(v); } }, playing === v.name ? '⏸' : '▶'),
                h('span', { className: 'fill' },
                  h('span', { className: 'vname' }, (g === 'female' ? '👩 ' : (g === 'male' ? '👨 ' : '🗣️ ')) + v.name),
                  h('span', { className: 'vmeta' }, v.lang + (q ? ' · ' + q : '') + (v.localService ? '' : ' · needs internet'))),
                h('button', { className: 'btn small ' + (sel ? 'green' : 'plain'), onClick: function () { setP('name', v.name); } },
                  sel ? '✓ Using' : 'Use'));
            })
      ),

      h('div', { className: 'story-card', style: { marginTop: '16px' } },
        h('h2', null, 'Want better voices?'),
        h('p', { style: { fontSize: '17px' } },
          'Voices come from the phone or tablet, not from this app, so adding them there adds them here.\n\n' +
          'Android: Settings, then Accessibility, then Text-to-speech output. Set the engine to Speech Recognition and Synthesis from Google, tap the gear beside it, then Install voice data, then English (United States). Download the voices marked with the highest quality. Reopen this app afterwards.\n\n' +
          'iPad: Settings, then Accessibility, then Spoken Content, then Voices, then English. Download the Enhanced or Premium versions of voices such as Samantha, Ava, Tom or Aaron. They are a large download but sound far better.')
      ),

      h('div', { className: 'story-card', style: { marginTop: '16px' } },
        h('h2', null, 'When to read aloud'),
        h('div', { className: 'tabs small' },
          h('button', { className: pref.autoRead === 'young' ? 'on' : '', onClick: function () { setP('autoRead', 'young'); } }, 'Age 6 and under'),
          h('button', { className: pref.autoRead === 'all' ? 'on' : '', onClick: function () { setP('autoRead', 'all'); } }, 'Every profile'),
          h('button', { className: pref.autoRead === 'off' ? 'on' : '', onClick: function () { setP('autoRead', 'off'); } }, 'Only when tapped'))
      ),

      h('h1', { style: { fontSize: '24px', margin: '20px 0 6px' } }, 'Text size'),
      h('div', { className: 'story-card' },
        h('div', { className: 'tabs small' },
          h('button', { className: ui.textSize === 'normal' ? 'on' : '', onClick: function () { setU('textSize', 'normal'); } }, 'Normal'),
          h('button', { className: ui.textSize === 'large' ? 'on' : '', onClick: function () { setU('textSize', 'large'); } }, 'Large'),
          h('button', { className: ui.textSize === 'huge' ? 'on' : '', onClick: function () { setU('textSize', 'huge'); } }, 'Huge')),
        h('div', { className: 'sub', style: { marginTop: '8px' } }, 'Saved on this device only.')
      )
    );
  }

  function WordsTab(props) {
    var psSt = React.useState(getPronSettings()); var ps = psSt[0], setPs = psSt[1];
    var qSt = React.useState(''); var q = qSt[0], setQ = qSt[1];
    var editSt = React.useState(null); var edit = editSt[0], setEdit = editSt[1];
    var valSt = React.useState(''); var val = valSt[0], setVal = valSt[1];
    var msgSt = React.useState(''); var msg = msgSt[0], setMsg = msgSt[1];

    var table = window.PRONOUNCE_TABLE || [];

    function persist(next) {
      setPs(next); setPronSettings(next);
      props.onSaveRates({ pron_overrides: JSON.stringify(next.overrides), honorific_mode: next.honorific }, function (e) {
        setMsg(e || 'Saved. All your devices will use this.');
      });
    }

    function saveWord(word) {
      var next = { overrides: {}, honorific: ps.honorific }, k;
      for (k in ps.overrides) { next.overrides[k] = ps.overrides[k]; }
      if (val.trim()) { next.overrides[word] = val.trim(); } else { delete next.overrides[word]; }
      persist(next);
      setEdit(null); setVal('');
    }

    function setHon(mode) {
      var next = { overrides: ps.overrides, honorific: mode };
      persist(next);
      stopSpeak();
      speak('Prophet Muhammad \uFDFA taught his companions.');
    }

    var list = table.filter(function (t) {
      return !q || t[0].toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });

    return h('div', null,
      h('h1', { style: { fontSize: '24px', margin: '16px 0 6px' } }, 'Words and pronunciation'),
      h('div', { className: 'story-card' },
        h('p', { style: { fontSize: '17px' } },
          'Tap a word to hear how the narrator says it. If it sounds wrong, type a spelling that sounds right when read aloud and save it. Your spellings sync to every device.\n\nSpell by sound, not by Arabic. Doubling a vowel lengthens it, so Madeenah is usually better than Madinah. Avoid hyphens; many voices read them as a pause.'),
        h('div', { className: 'rate-row' }, h('span', null, 'Honorifics after names'),
          h('select', { className: 'select', style: { width: 'auto' }, value: ps.honorific, onChange: function (e) { setHon(e.target.value); } },
            h('option', { value: 'full' }, 'Full Arabic'),
            h('option', { value: 'short' }, 'English meaning'),
            h('option', { value: 'off' }, 'Skip them'))),
        h('div', { className: 'actionrow' },
          h('button', { className: 'btn grape small', onClick: function () {
            stopSpeak();
            speak('Prophet Muhammad \uFDFA was born in Makkah. Khadijah (RA) believed him. Ibrahim (AS) built the Kaaba. The Quran teaches sabr.');
          } }, '🔊 Hear a sample'),
          h('button', { className: 'btn plain small', onClick: stopSpeak }, 'Stop'))
      ),
      h('input', { className: 'name-input', style: { width: '100%', marginTop: '14px', fontSize: '17px' },
        value: q, placeholder: 'Search a word', onChange: function (e) { setQ(e.target.value); } }),
      msg ? h('div', { className: 'sub', style: { marginTop: '8px' } }, msg) : null,
      h('div', { style: { marginTop: '10px' } }, list.map(function (t) {
        var word = t[0];
        var spoken = ps.overrides[word] || t[1];
        var mine = !!ps.overrides[word];
        if (edit === word) {
          return h('div', { key: word, className: 'voice-row sel' },
            h('span', { className: 'fill' },
              h('span', { className: 'vname' }, word),
              h('input', { className: 'rate-input', style: { width: '100%', textAlign: 'left', marginTop: '6px' },
                value: val, autoFocus: true, onChange: function (e) { setVal(e.target.value); } })),
            h('button', { className: 'btn small grape', onClick: function () { stopSpeak(); speak(val || spoken); } }, '▶'),
            h('button', { className: 'btn small green', onClick: function () { saveWord(word); } }, 'Save'),
            h('button', { className: 'btn small plain', onClick: function () { setEdit(null); setVal(''); } }, '✕'));
        }
        return h('div', { key: word, className: 'voice-row' + (mine ? ' sel' : '') },
          h('button', { className: 'vplay', onClick: function () { stopSpeak(); speak(spoken); } }, '▶'),
          h('span', { className: 'fill' },
            h('span', { className: 'vname' }, word),
            h('span', { className: 'vmeta' }, 'says: ' + spoken + (mine ? ' · yours' : ''))),
          h('button', { className: 'btn small plain', onClick: function () { setEdit(word); setVal(ps.overrides[word] || t[1]); } }, 'Fix'));
      }))
    );
  }

  function VideosTab(props) {
    var mapSt = React.useState(function () {
      try { return props.settings && props.settings.video_map ? JSON.parse(props.settings.video_map) : {}; } catch (e) { return {}; }
    });
    var map = mapSt[0], setMap = mapSt[1];
    var catSt = React.useState(CAT_ORDER[0]); var catId = catSt[0], setCatId = catSt[1];
    var editSt = React.useState(null); var edit = editSt[0], setEdit = editSt[1];
    var valSt = React.useState(''); var val = valSt[0], setVal = valSt[1];
    var msgSt = React.useState(''); var msg = msgSt[0], setMsg = msgSt[1];

    var cat = CONTENT[catId];

    function save(key, url) {
      var next = {}, k;
      for (k in map) { next[k] = map[k]; }
      if (url) { next[key] = url; } else { delete next[key]; }
      setMap(next); setVideoMap(next);
      props.onSaveRates({ video_map: JSON.stringify(next) }, function (e) { setMsg(e || 'Saved.'); });
      setEdit(null); setVal('');
    }

    function searchUrl(con) {
      return 'https://www.youtube.com/results?search_query=' +
        encodeURIComponent(con.title + ' for kids ' + cat.title);
    }

    return h('div', null,
      h('h1', { style: { fontSize: '24px', margin: '16px 0 6px' } }, 'Videos'),
      h('div', { className: 'story-card' },
        h('p', { style: { fontSize: '17px' } },
          'Add a YouTube link to any lesson and it appears on the last page of that story. Links are saved to your account, so you only add them once and every device gets them.\n\nTap Find to open a YouTube search for that topic, copy the link, then tap Add and paste it.')),
      h('select', { className: 'select', style: { marginTop: '12px' }, value: catId, onChange: function (e) { setCatId(e.target.value); } },
        CAT_ORDER.map(function (id) {
          return CONTENT[id] ? h('option', { key: id, value: id }, CONTENT[id].emoji + ' ' + CONTENT[id].title) : null;
        })),
      msg ? h('div', { className: 'sub', style: { marginTop: '8px' } }, msg) : null,
      h('div', { style: { marginTop: '10px' } }, cat.concepts.map(function (con) {
        var key = catId + '/' + con.id + '/both';
        var have = map[key];
        if (edit === key) {
          return h('div', { key: con.id, className: 'voice-row sel' },
            h('span', { className: 'fill' },
              h('span', { className: 'vname' }, con.emoji + ' ' + con.title),
              h('input', { className: 'rate-input', style: { width: '100%', textAlign: 'left', marginTop: '6px' },
                value: val, autoFocus: true, placeholder: 'Paste YouTube link',
                onChange: function (e) { setVal(e.target.value); } })),
            h('button', { className: 'btn small green', onClick: function () { save(key, val.trim()); } }, 'Save'),
            h('button', { className: 'btn small plain', onClick: function () { setEdit(null); setVal(''); } }, '✕'));
        }
        return h('div', { key: con.id, className: 'voice-row' + (have ? ' sel' : '') },
          h('span', { className: 'fill' },
            h('span', { className: 'vname' }, con.emoji + ' ' + con.title),
            h('span', { className: 'vmeta' }, have ? '🎬 video added' : 'no video yet')),
          h('a', { className: 'btn small plain', href: searchUrl(con), target: '_blank', rel: 'noopener' }, 'Find'),
          h('button', { className: 'btn small ' + (have ? 'grape' : 'plain'), onClick: function () { setEdit(key); setVal(have || ''); } },
            have ? 'Change' : 'Add'),
          have ? h('button', { className: 'btn small plain', onClick: function () { save(key, ''); } }, '✕') : null);
      }))
    );
  }

  /* ---------------- kid screens ---------------- */

  function TopBar(props) {
    return h('div', { className: 'topbar' },
      h('div', { className: 'brand' }, APP_NAME),
      h('div', { style: { display: 'flex', gap: '8px' } },
        h('div', { className: 'chip stars' }, '⭐ ' + props.stars),
        h('button', { className: 'chip', onClick: props.onSwitch }, props.profile.avatar + ' ' + props.profile.name)
      )
    );
  }

  function ProfilePick(props) {
    return h('div', { className: 'app center-wrap' },
      h('div', { style: { fontSize: '54px' } }, '🌈'),
      h('h1', null, 'Who is learning today?'),
      h('div', { className: 'sub' }, 'Tap your picture!'),
      props.offline ? h('div', { className: 'sub', style: { color: '#C0392B' } }, 'Working offline') : null,
      h('div', { className: 'profile-row' },
        props.data.profiles.map(function (p) {
          return h('button', {
            key: p.id, className: 'tile profile-card', onClick: function () { props.onPick(p); }
          },
            h('div', { className: 'avatar' }, p.avatar),
            h('div', { className: 'pname' }, p.name),
            h('div', { className: 'page' }, 'Age ' + p.age + ' · ⭐ ' + totalStars(props.data, p.id))
          );
        })
      ),
      h('div', { style: { marginTop: '30px' } },
        h('button', { className: 'btn plain small', onClick: props.onParent }, '🔒 Parent area')
      )
    );
  }

  function Home(props) {
    var greet = props.profile.age <= 6 ? 'What do you want to learn, ' : 'Pick a subject, ';
    return h('div', null,
      h('h1', { style: { textAlign: 'center', margin: '14px 0 4px', fontSize: '26px' } }, greet + props.profile.name + '?'),
      h('div', { className: 'grid' }, CAT_ORDER.map(function (catId) {
        var cat = CONTENT[catId];
        if (!cat) { return null; }
        var ok = hasContentFor(props.data, props.pid, cat);
        var playable = cat.concepts.filter(ok);
        var rows = catRows(props.data, props.pid, catId);
        var cyc = playable.length ? currentCycle(rows, playable.length) : 1;
        var done = 0, dm = doneMap(rows, cyc);
        playable.forEach(function (c) { if (dm[c.id]) { done++; } });
        var pct = playable.length ? Math.round(done / playable.length * 100) : 0;
        return h('button', {
          key: catId, className: 'tile cat-tile' + (playable.length ? '' : ' soon'),
          style: { background: cat.tint, borderColor: cat.color },
          onClick: function () { props.onOpen(catId); }
        },
          h('div', { className: 'big' }, cat.emoji),
          h('div', { className: 'name' }, cat.title),
          h('div', { className: 'meter' }, h('div', { style: { width: pct + '%', background: cat.color } })),
          h('div', { className: 'count' }, playable.length ? (done + ' of ' + playable.length + (cyc > 1 ? ' · round ' + cyc : '')) : 'Coming soon!')
        );
      }))
    );
  }

  function CategoryScreen(props) {
    var cat = CONTENT[props.catId];
    var ok = hasContentFor(props.data, props.pid, cat);
    var playable = cat.concepts.filter(ok);
    var rows = catRows(props.data, props.pid, props.catId);
    var cyc = playable.length ? currentCycle(rows, playable.length) : 1;
    var dm = doneMap(rows, cyc);
    var nextId = null, i;
    for (i = 0; i < playable.length; i++) { if (!dm[playable[i].id]) { nextId = playable[i].id; break; } }
    return h('div', null,
      h('div', { className: 'backrow' },
        h('button', { className: 'btn plain small', onClick: props.onBack }, '← Back'),
        h('div', { className: 'chip' }, cat.emoji + ' ' + cat.title + (cyc > 1 ? ' · Round ' + cyc : ''))
      ),
      playable.length === 0
        ? h('div', { className: 'coming' }, '🎁 New adventures are being made for you. Check back soon!')
        : h('div', null,
            nextId ? h('div', { style: { textAlign: 'center', marginTop: '8px' } },
              h('button', { className: 'btn', onClick: function () { props.onConcept(nextId); } }, '▶ Continue adventure')) : null,
            h('div', { className: 'path-grid' }, playable.map(function (con, idx) {
              var row = dm[con.id];
              var cls = row ? 'done' : (con.id === nextId ? 'next' : 'todo');
              return h('button', {
                key: con.id, className: 'step ' + cls,
                onClick: function () { props.onConcept(con.id); },
                disabled: !row && con.id !== nextId
              },
                h('span', { className: 'em' }, row ? '⭐' : con.emoji),
                h('span', { className: 'st' }, row ? row.stars + '/10' : (idx + 1)),
                h('span', { className: 'step-label' }, con.title)
              );
            }))
          )
    );
  }

  /* ---------------- animated scene ---------------- */

  function AnimScene(props) {
    var art = String(props.art || '');
    var chars = art.match(/([\uD800-\uDBFF][\uDC00-\uDFFF]|\u200D|[\u0023-\u0039]\u20E3|\S)/g) || [];
    var pieces = [];
    var buf = '', i;
    for (i = 0; i < chars.length; i++) {
      buf += chars[i];
      if (chars[i] !== '\u200D' && (i + 1 >= chars.length || chars[i + 1] !== '\u200D')) {
        if (buf.trim()) { pieces.push(buf); }
        buf = '';
      }
    }
    if (!pieces.length) { pieces = [art]; }

    return h('div', { className: 'anim-scene' + (props.big ? ' big' : ''), style: { background: props.tint || '#fff' } },
      h('div', { className: 'as-sky' }),
      h('div', { className: 'as-ground', style: { background: props.color || '#3FA34D' } }),
      h('div', { className: 'as-sparkles' }, [0, 1, 2, 3, 4, 5].map(function (n) {
        return h('span', { key: n, className: 'as-spark s' + n });
      })),
      h('div', { className: 'as-stage' }, pieces.map(function (p, idx) {
        return h('span', { key: idx, className: 'as-item i' + (idx % 4) }, p);
      }))
    );
  }

  function ConceptScreen(props) {
    var cat = CONTENT[props.catId];
    var con = null, i;
    for (i = 0; i < cat.concepts.length; i++) { if (cat.concepts[i].id === props.conceptId) { con = cat.concepts[i]; } }
    var tier = tierOf(props.profile.age);
    var young = tier === 'young';
    var body = con[tier];
    var pages = pagesFor(con, tier);
    var vid = videoFor(con, tier, props.catId);
    var extras = !!(body.funFact || body.tryThis || (body.words && body.words.length) || vid);
    var last = pages.length + (extras ? 1 : 0) - 1;

    var pageSt = React.useState(0); var page = pageSt[0], setPage = pageSt[1];
    var readSt = React.useState(false); var reading = readSt[0], setReading = readSt[1];
    var readAllRef = React.useRef(shouldAutoRead(tier));
    var onExtras = extras && page === pages.length;

    function textFor(p) {
      if (p < pages.length) { return pages[p].text; }
      var t = [];
      if (body.funFact) { t.push((young ? 'Wow! ' : 'Did you know? ') + body.funFact); }
      if (body.tryThis) { t.push('Try it at home. ' + body.tryThis); }
      if (body.words && body.words.length) {
        t.push('New words. ' + body.words.map(function (w) { return w.word + ' means ' + w.meaning; }).join(' '));
      }
      return t.join(' ');
    }

    function readFrom(p) {
      setReading(true);
      speak(textFor(p), function () {
        setReading(false);
        if (readAllRef.current && p < last) {
          sfx('page');
          setPage(p + 1);
        } else {
          readAllRef.current = false;
        }
      });
    }

    React.useEffect(function () {
      if (readAllRef.current) { readFrom(page); }
      return function () { stopSpeak(); };
    }, [page]);

    function goPage(n) {
      stopSpeak(); setReading(false); readAllRef.current = false; sfx('page'); setPage(n);
    }

    function toggleRead() {
      if (reading) { stopSpeak(); setReading(false); readAllRef.current = false; return; }
      readAllRef.current = true;
      readFrom(page);
    }

    var content;
    if (onExtras) {
      content = h('div', null,
        body.funFact ? h('div', { className: 'fact-card' },
          h('div', { className: 'fact-em' }, '💡'),
          h('div', null, h('div', { className: 'fact-lbl' }, young ? 'Wow!' : 'Did you know?'),
            h('div', { className: 'fact-text' }, body.funFact))) : null,
        body.tryThis ? h('div', { className: 'fact-card try' },
          h('div', { className: 'fact-em' }, '🧪'),
          h('div', null, h('div', { className: 'fact-lbl' }, 'Try it at home'),
            h('div', { className: 'fact-text' }, body.tryThis))) : null,
        body.words && body.words.length ? h('div', { className: 'story-card' },
          h('h2', null, '📚 New words'),
          h('div', null, body.words.map(function (w, wi) {
            return h('div', { key: wi, className: 'word-row' },
              h('span', { className: 'word-w' }, w.word),
              h('span', { className: 'word-m' }, w.meaning));
          }))) : null,
        vid ? h('div', { className: 'video-wrap' }, h('iframe', { src: ytEmbed(vid), allowFullScreen: true, title: con.title })) : null
      );
    } else {
      var p = pages[page];
      content = h('div', { key: 'p' + page, className: 'page-in' },
        h(AnimScene, { art: p.art, big: young, tint: cat.tint, color: cat.color }),
        h('div', { className: 'story-card' + (reading ? ' reading' : '') },
          h('h2', null, con.emoji + ' ' + con.title),
          h('p', { className: young ? 'big-text' : '' }, p.text)
        )
      );
    }

    return h('div', null,
      h('div', { className: 'backrow' },
        h('button', { className: 'btn plain small', onClick: props.onBack }, '← Back'),
        h('div', { className: 'chip' }, cat.emoji + ' ' + cat.title)
      ),
      h('div', { className: 'page-dots' }, pages.map(function (_, idx) {
        return h('span', { key: idx, className: idx === page ? 'cur' : (idx < page ? 'seen' : '') });
      }).concat(extras ? [h('span', { key: 'x', className: onExtras ? 'cur' : '' }, '')] : [])),
      content,
      h('div', { className: 'actionrow' },
        page > 0 ? h('button', { className: 'btn plain', onClick: function () { goPage(page - 1); } }, '◀ Back') : null,
        h('button', { className: 'btn grape', onClick: toggleRead }, reading ? '⏹ Stop reading' : '🔊 Read to me'),
        page < last
          ? h('button', { className: 'btn', onClick: function () { goPage(page + 1); } }, young ? 'Next ▶' : 'Keep going ▶')
          : h('button', { className: 'btn green', onClick: function () { stopSpeak(); sfx('pop'); props.onQuiz(); } }, '🎯 Quiz time!')
      )
    );
  }

  function QuizScreen(props) {
    var cat = CONTENT[props.catId];
    var con = null, i;
    for (i = 0; i < cat.concepts.length; i++) { if (cat.concepts[i].id === props.conceptId) { con = cat.concepts[i]; } }
    var tier = tierOf(props.profile.age);
    var qs = con[tier].questions;
    var initSt = React.useState(function () {
      return qs.map(function (q) {
        return { order: shuffle(q.choices.map(function (c, idx) { return idx; })) };
      });
    });
    var plans = initSt[0];
    var posSt = React.useState(0); var pos = posSt[0], setPos = posSt[1];
    var ansSt = React.useState([]); var answers = ansSt[0], setAnswers = ansSt[1];
    var pickSt = React.useState(null); var picked = pickSt[0], setPicked = pickSt[1];
    var streakSt = React.useState(0); var streak = streakSt[0], setStreak = streakSt[1];
    var missedRef = React.useRef([]);
    var startRef = React.useRef(Date.now());

    var ok = hasContentFor(props.data, props.pid, cat);
    var playable = cat.concepts.filter(ok);
    var rows = catRows(props.data, props.pid, props.catId);
    var cyc = currentCycle(rows, playable.length);
    var dm = doneMap(rows, cyc);
    var cycleForSave = dm[con.id] ? dm[con.id].cycle : cyc;

    var q = qs[pos];
    var plan = plans[pos];
    var young = tier === 'young';

    function readQuestion() {
      speak(q.q + '. ' + plan.order.map(function (ri, di) { return 'Option ' + (di + 1) + ': ' + q.choices[ri]; }).join('. '));
    }
    React.useEffect(function () {
      if (shouldAutoRead(tier)) { readQuestion(); }
      return function () { stopSpeak(); };
    }, [pos]);

    function choose(dispIdx) {
      if (picked !== null) { return; }
      var realIdx = plan.order[dispIdx];
      var correct = realIdx === q.answer;
      setPicked({ dispIdx: dispIdx, correct: correct });
      setStreak(correct ? streak + 1 : 0);
      sfx(correct ? 'good' : 'bad');
      if (shouldAutoRead(tier)) { speak(correct ? 'Yes! Great job!' : 'Good try! The answer was ' + q.choices[q.answer] + '.'); }
      if (!correct) { missedRef.current = missedRef.current.concat([pos]); }
      setTimeout(function () {
        var nextAnswers = answers.concat([correct]);
        setAnswers(nextAnswers);
        setPicked(null);
        if (pos + 1 < qs.length) { setPos(pos + 1); }
        else {
          var score = 0, j;
          for (j = 0; j < nextAnswers.length; j++) { if (nextAnswers[j]) { score++; } }
          props.onDone(score, cycleForSave, {
            missed: missedRef.current,
            seconds: Math.round((Date.now() - startRef.current) / 1000),
            tier: tier, total: qs.length, conceptTitle: con.title
          });
        }
      }, correct ? 900 : 1600);
    }

    var correctDisp = null;
    if (picked !== null && !picked.correct) {
      for (i = 0; i < plan.order.length; i++) { if (plan.order[i] === q.answer) { correctDisp = i; } }
    }

    return h('div', null,
      h('div', { className: 'backrow' },
        h('button', { className: 'btn plain small', onClick: props.onQuit }, '← Back'),
        h('div', { className: 'chip' }, con.emoji + ' Question ' + (pos + 1) + ' of ' + qs.length)
      ),
      h('div', { className: 'qdots' }, qs.map(function (_, idx) {
        var cls = '';
        if (idx < answers.length) { cls = answers[idx] ? 'ok' : 'bad'; }
        else if (idx === pos) { cls = 'cur'; }
        return h('span', { key: idx, className: cls });
      })),
      streak >= 3 ? h('div', { className: 'streak' }, '🔥 ' + streak + ' in a row!') : null,
      h('div', { className: 'question-card' },
        h('div', { className: 'mascot ' + (picked === null ? '' : (picked.correct ? 'happy' : 'oops')) },
          picked === null ? '🦉' : (picked.correct ? '🥳' : '🤔')),
        h('div', { className: 'q' + (young ? ' big-q' : '') }, q.q),
        h('button', { className: 'btn plain small', style: { marginTop: '10px' }, onClick: readQuestion }, '🔊 Read it'),
        h('div', { className: 'choices' + (q.choices.length > 3 ? ' four' : '') },
          plan.order.map(function (realIdx, dispIdx) {
            var cls = 'choice';
            if (picked !== null) {
              if (dispIdx === picked.dispIdx) { cls += picked.correct ? ' correct' : ' wrong'; }
              if (correctDisp !== null && dispIdx === correctDisp) { cls += ' reveal'; }
            }
            return h('button', { key: dispIdx, className: cls, onClick: function () { choose(dispIdx); } }, q.choices[realIdx]);
          })
        ),
        h('div', { className: 'feedback' },
          picked === null ? '' : (picked.correct ? shuffle(['🎉 Yes!', '⭐ Super!', '🙌 You got it!', '🌟 Amazing!'])[0] : '💪 Good try!')
        )
      )
    );
  }

  function ResultsScreen(props) {
    var cat = CONTENT[props.catId];
    var ok = hasContentFor(props.data, props.pid, cat);
    var playable = cat.concepts.filter(ok);
    var rows = catRows(props.data, props.pid, props.catId);
    var cyc = currentCycle(rows, playable.length);
    var dm = doneMap(rows, cyc);
    var nextId = null, i;
    for (i = 0; i < playable.length; i++) { if (!dm[playable[i].id]) { nextId = playable[i].id; break; } }
    var cycleJustDone = nextId === null;
    var s = props.score;
    var msg = s >= 8 ? 'You earned a Smarty Badge! 🏅' : (s >= 5 ? 'Great learning!' : 'Practice makes perfect!');
    var starStr = '', j;
    for (j = 0; j < 10; j++) { starStr += j < s ? '⭐' : '☆'; }
    React.useEffect(function () { sfx(cycleJustDone ? 'trophy' : (s >= 5 ? 'win' : 'pop')); }, []);

    return h('div', { className: 'center-wrap', style: { paddingTop: '20px', position: 'relative' } },
      s >= 5 ? h(Confetti, { many: cycleJustDone }) : null,
      h('div', { className: 'burst' }, s >= 8 ? '🏅' : (s >= 5 ? '🎉' : '💪')),
      h('h1', null, s + ' out of 10!'),
      h('div', { className: 'result-stars' }, starStr),
      h('div', { className: 'sub' }, msg),
      props.earned > 0 ? h('div', { className: 'money-pop' }, '💰 +' + money(props.earned, props.currency) + ' added to your wallet!') : null,
      cycleJustDone ? h('div', { className: 'sub' }, '🏆 WOW! You finished every adventure in ' + cat.title + '! A trophy is yours. A brand new round is open!') : null,
      h('div', { className: 'actionrow' },
        h('button', { className: 'btn plain', onClick: props.onCategory }, 'Back to map'),
        h('button', { className: 'btn green', onClick: function () { props.onNext(nextId); } }, nextId ? 'Next adventure ▶' : 'See the map 🗺')
      )
    );
  }

  function RewardsScreen(props) {
    var stars = totalStars(props.data, props.pid);
    var badges = totalBadges(props.data, props.pid);
    var trophies = totalTrophies(props.data, props.pid);
    var cur = (props.settings && props.settings.currency) || '$';
    var bal = balanceOf(props.data.ledger || [], props.pid);
    var hist = (props.data.ledger || []).filter(function (r) { return r.profile_id === props.pid; }).slice(0, 8);
    var ratesOn = props.settings && (props.settings.star_cents || props.settings.badge_cents || props.settings.trophy_cents);
    return h('div', null,
      h('h1', { style: { textAlign: 'center', margin: '14px 0 6px', fontSize: '26px' } }, props.profile.avatar + ' ' + props.profile.name + "'s treasure"),
      (ratesOn || bal !== 0) ? h('div', { className: 'wallet' },
        h('div', { className: 'wallet-lbl' }, '💰 My wallet'),
        h('div', { className: 'wallet-amt' }, money(bal, cur)),
        h('div', { className: 'wallet-sub' },
          (props.settings.star_cents ? money(props.settings.star_cents, cur) + ' per star' : '') +
          (props.settings.badge_cents ? ' · ' + money(props.settings.badge_cents, cur) + ' per badge' : '') +
          (props.settings.trophy_cents ? ' · ' + money(props.settings.trophy_cents, cur) + ' per trophy' : ''))
      ) : null,
      h('div', { className: 'badge-row' },
        h('div', { className: 'tile badge-card' }, h('div', { className: 'n' }, '⭐ ' + stars), h('div', { className: 'lbl' }, 'Stars collected')),
        h('div', { className: 'tile badge-card' }, h('div', { className: 'n' }, '🏅 ' + badges), h('div', { className: 'lbl' }, 'Smarty badges')),
        h('div', { className: 'tile badge-card' }, h('div', { className: 'n' }, '🏆 ' + trophies), h('div', { className: 'lbl' }, 'Trophies'))
      ),
      hist.length ? h('div', { style: { marginTop: '18px' } },
        h('h2', { style: { fontSize: '20px', margin: '0 0 6px' } }, 'Recent'),
        hist.map(function (r) {
          return h('div', { key: r.id, className: 'ledger-row ' + r.kind },
            h('span', { className: 'em2' }, r.kind === 'earn' ? '⭐' : (r.kind === 'redeem' ? '🎁' : '🎉')),
            h('span', { className: 'fill' }, r.note || r.kind),
            h('span', { className: 'amt' }, (r.amount_cents > 0 ? '+' : '') + money(r.amount_cents, cur))
          );
        })) : null,
      h('div', { style: { marginTop: '18px' } }, CAT_ORDER.map(function (catId) {
        var cat = CONTENT[catId];
        if (!cat) { return null; }
        var ok = hasContentFor(props.data, props.pid, cat);
        var playable = cat.concepts.filter(ok);
        var rows = catRows(props.data, props.pid, catId);
        var cyc = playable.length ? currentCycle(rows, playable.length) : 1;
        var catStars = 0;
        rows.forEach(function (r) { catStars += r.stars || 0; });
        return h('div', { key: catId, className: 'reward-cat' },
          h('span', { className: 'em2' }, cat.emoji),
          h('span', { className: 'fill' }, cat.title),
          h('span', null, '⭐ ' + catStars + ' '),
          cyc > 1 ? h('span', { className: 'tro' }, ' ' + new Array(cyc).join('🏆')) : null
        );
      }))
    );
  }

  var root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(h(App));
})();
