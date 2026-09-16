/* Wonder Academy - app.js (ES5, React.createElement, no JSX) */
(function () {
  'use strict';

  var h = React.createElement;
  var CFG = window.APP_CONFIG || {};
  var APP_NAME = CFG.APP_NAME || 'Wonder Academy';
  var CONTENT = window.CONTENT || {};
  var AUTH = window.WA_AUTH;
  var CAT_ORDER = ['science', 'islamic-history', 'geography', 'analytical', 'reasoning', 'iq', 'physics', 'biology'];
  var AVATARS = ['🦁', '🐼', '🦄', '🐯', '🚀', '🌸', '🐬', '🦖', '🐱', '⚽', '🎨', '🌟'];
  var CACHE_KEY = 'wonder_academy_cache_v2';

  /* ---------------- local cache (so a dropped connection does not stop play) ---------------- */

  function loadCache(userId) {
    try {
      var raw = localStorage.getItem(CACHE_KEY + ':' + userId);
      if (raw) { return JSON.parse(raw); }
    } catch (e) {}
    return { profiles: [], progress: [] };
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
    var out = { profiles: [], progress: [], pinHash: null, loaded: false };
    AUTH.api('parent_settings?select=pin_hash', 'GET', null, null, function (e1, rows) {
      if (e1 && e1.status === 401) { cb('signedout', null); return; }
      if (!e1 && rows && rows[0]) { out.pinHash = rows[0].pin_hash; }
      AUTH.api('kid_profiles?select=*&order=created_at', 'GET', null, null, function (e2, profs) {
        if (e2 && e2.status === 401) { cb('signedout', null); return; }
        AUTH.api('kid_progress?select=*', 'GET', null, null, function (e3, rows2) {
          if (e3 && e3.status === 401) { cb('signedout', null); return; }
          if (e2 || e3) {
            var cached = loadCache(userId);
            out.profiles = cached.profiles;
            out.progress = cached.progress;
            cb(null, out, true);
            return;
          }
          out.profiles = profs || [];
          out.progress = rows2 || [];
          out.loaded = true;
          saveCache(userId, { profiles: out.profiles, progress: out.progress });
          cb(null, out, false);
        });
      });
    });
  }

  function savePin(userId, pinHash, cb) {
    AUTH.api('parent_settings?on_conflict=owner_id', 'POST',
      { owner_id: userId, pin_hash: pinHash },
      { 'Prefer': 'resolution=merge-duplicates' }, cb);
  }

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
      return con[tier] && con[tier].story && con[tier].questions && con[tier].questions.length > 0;
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

  /* ---------------- speech ---------------- */

  function speak(text, onEnd) {
    if (!window.speechSynthesis) { if (onEnd) { onEnd(); } return; }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95; u.pitch = 1.05;
    var voices = window.speechSynthesis.getVoices(), i;
    for (i = 0; i < voices.length; i++) {
      if (voices[i].lang && voices[i].lang.indexOf('en') === 0) { u.voice = voices[i]; break; }
    }
    if (onEnd) { u.onend = onEnd; }
    window.speechSynthesis.speak(u);
  }
  function stopSpeak() { if (window.speechSynthesis) { window.speechSynthesis.cancel(); } }

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
      screen: 'loading', data: { profiles: [], progress: [] },
      pinHash: null, session: null, offline: false, notice: ''
    });
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
        var data = { profiles: out.profiles, progress: out.progress };
        var next = out.pinHash ? (data.profiles.length ? 'profiles' : 'parent') : 'pinSetup';
        setState({
          screen: next, data: data, pinHash: out.pinHash,
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
        screen: 'login', data: { profiles: [], progress: [] },
        pinHash: null, session: null, offline: false, notice: ''
      });
    }

    function onPinCreated(hash) {
      savePin(state.session.user_id, hash, function (err) {
        if (err) { update({ notice: 'Could not save the PIN. Check your connection.' }); return; }
        update({ pinHash: hash, screen: 'parent', notice: '' });
      });
    }

    function onAddProfile(name, age, avatar, done) {
      createProfile(state.session.user_id, { name: name, age: age, avatar: avatar }, function (err, saved) {
        if (err) { done('Could not save. Check your connection.'); return; }
        var next = { profiles: state.data.profiles.concat([saved]), progress: state.data.progress };
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
          progress: state.data.progress.filter(function (r) { return r.profile_id !== id; })
        };
        saveCache(state.session.user_id, next);
        update({ data: next, notice: '' });
      });
    }

    function recordResult(catId, conceptId, cycle, correct) {
      var rows = state.data.progress.slice();
      var found = null, i, r;
      for (i = 0; i < rows.length; i++) {
        r = rows[i];
        if (r.profile_id === pid && r.category === catId && r.concept_id === conceptId && r.cycle === cycle) { found = r; }
      }
      if (found) {
        found.best_score = Math.max(found.best_score, correct);
        found.stars = Math.max(found.stars, correct);
      } else {
        found = { profile_id: pid, category: catId, concept_id: conceptId, cycle: cycle, best_score: correct, stars: correct };
        rows.push(found);
      }
      var next = { profiles: state.data.profiles, progress: rows };
      saveCache(state.session.user_id, next);
      persistProgress(state.session.user_id, found);
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
        onAdd: onAddProfile, onDelete: onDeleteProfile, onSignOut: handleSignOut,
        onPinChange: function (hash) { onPinCreated(hash); },
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
        onDone: function (correct, cycle) { window.__lastScore = correct; recordResult(nav.catId, nav.conceptId, cycle, correct); go('results'); },
        onQuit: function () { go('concept'); }
      }));
    } else if (state.screen === 'results') {
      shell.push(h(ResultsScreen, {
        key: 'res', data: state.data, pid: pid, profile: profile, catId: nav.catId, conceptId: nav.conceptId,
        score: window.__lastScore || 0,
        onCategory: function () { go('category'); },
        onNext: function (nextId) { if (nextId) { go('concept', { conceptId: nextId }); } else { go('category'); } }
      }));
    } else if (state.screen === 'rewards') {
      shell.push(h(RewardsScreen, { key: 'rw', data: state.data, pid: pid, profile: profile }));
    }

    shell.push(h('div', { key: 'nav', className: 'bottomnav' },
      h('button', { className: state.screen === 'home' ? 'on' : '', onClick: function () { go('home'); } }, '🏠 Learn'),
      h('button', { className: state.screen === 'rewards' ? 'on' : '', onClick: function () { go('rewards'); } }, '🏆 My Rewards')
    ));

    return h('div', { className: 'app' }, shell);
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
    var showAddSt = React.useState(props.data.profiles.length === 0);
    var showAdd = showAddSt[0], setShowAdd = showAddSt[1];
    var nameSt = React.useState(''); var name = nameSt[0], setName = nameSt[1];
    var ageSt = React.useState(null); var age = ageSt[0], setAge = ageSt[1];
    var avSt = React.useState(AVATARS[0]); var avatar = avSt[0], setAvatar = avSt[1];
    var busySt = React.useState(false); var busy = busySt[0], setBusy = busySt[1];
    var errSt = React.useState(''); var err = errSt[0], setErr = errSt[1];
    var confirmSt = React.useState(null); var confirmId = confirmSt[0], setConfirmId = confirmSt[1];
    var pinModeSt = React.useState(false); var pinMode = pinModeSt[0], setPinMode = pinModeSt[1];
    var newPinSt = React.useState(''); var newPin = newPinSt[0], setNewPin = newPinSt[1];
    var ages = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    React.useEffect(function () {
      if (!pinMode || newPin.length !== 4) { return; }
      hashPin(newPin, function (hash) { props.onPinChange(hash); setPinMode(false); setNewPin(''); });
    }, [newPin, pinMode]);

    function add() {
      if (!name.trim() || !age || busy) { return; }
      setBusy(true); setErr('');
      props.onAdd(name.trim(), age, avatar, function (e) {
        setBusy(false);
        if (e) { setErr(e); return; }
        setName(''); setAge(null); setAvatar(AVATARS[0]); setShowAdd(false);
      });
    }

    if (pinMode) {
      return h('div', { className: 'app center-wrap' },
        h('h1', null, 'New parent PIN'),
        h('div', { className: 'sub' }, 'Enter 4 digits'),
        h(PinPad, { value: newPin, onChange: setNewPin }),
        h('div', { className: 'actionrow' },
          h('button', { className: 'btn plain small', onClick: function () { setPinMode(false); setNewPin(''); } }, 'Cancel'))
      );
    }

    return h('div', { className: 'app' },
      h('div', { className: 'backrow' },
        h('button', { className: 'btn plain small', onClick: props.onDone }, '← Done'),
        h('div', { className: 'chip' }, '🔧 Parent area')
      ),
      props.offline ? h('div', { className: 'sub', style: { color: '#C0392B' } }, 'Working offline. Changes may not save.') : null,
      props.notice ? h('div', { className: 'sub', style: { color: '#C0392B' } }, props.notice) : null,

      h('h1', { style: { fontSize: '24px', margin: '16px 0 6px' } }, 'Kid profiles'),
      props.data.profiles.length === 0
        ? h('div', { className: 'coming' }, 'No profiles yet. Add your first one below.')
        : h('div', null, props.data.profiles.map(function (p) {
            return h('div', { key: p.id, className: 'reward-cat' },
              h('span', { className: 'em2' }, p.avatar),
              h('span', { className: 'fill' }, p.name + ' · age ' + p.age),
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
              h('input', {
                className: 'name-input', value: name, maxLength: 14, placeholder: 'Name',
                onChange: function (e) { setName(e.target.value); }
              }),
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
                props.data.profiles.length > 0
                  ? h('button', { className: 'btn plain', onClick: function () { setShowAdd(false); setErr(''); } }, 'Cancel') : null,
                h('button', { className: 'btn green', disabled: !name.trim() || !age || busy, onClick: add },
                  busy ? 'Saving...' : 'Save profile')
              ),
              h('div', { className: 'sub', style: { fontSize: '15px', opacity: .7, marginTop: '6px' } },
                'Age 6 and under gets shorter stories and 3 choices. Age 7 and up gets 4 choices.')
            ))
        : h('div', { className: 'actionrow' },
            h('button', { className: 'btn', onClick: function () { setShowAdd(true); } }, '➕ Add a profile')),

      h('h1', { style: { fontSize: '24px', margin: '26px 0 6px' } }, 'Account'),
      h('div', { className: 'reward-cat' },
        h('span', { className: 'em2' }, '📧'),
        h('span', { className: 'fill' }, props.session ? props.session.email : '')
      ),
      h('div', { className: 'actionrow', style: { marginTop: '14px' } },
        h('button', { className: 'btn grape small', onClick: function () { setPinMode(true); } }, 'Change PIN'),
        h('button', { className: 'btn plain small', onClick: props.onSignOut }, 'Sign out')
      )
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
        return h('button', { key: catId, className: 'tile cat-tile', onClick: function () { props.onOpen(catId); } },
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

  function ConceptScreen(props) {
    var cat = CONTENT[props.catId];
    var con = null, i;
    for (i = 0; i < cat.concepts.length; i++) { if (cat.concepts[i].id === props.conceptId) { con = cat.concepts[i]; } }
    var tier = tierOf(props.profile.age);
    var body = con[tier];
    var readSt = React.useState(false); var reading = readSt[0], setReading = readSt[1];
    React.useEffect(function () { return function () { stopSpeak(); }; }, []);
    var vid = ytEmbed(con.video);
    return h('div', null,
      h('div', { className: 'backrow' },
        h('button', { className: 'btn plain small', onClick: props.onBack }, '← Back'),
        h('div', { className: 'chip' }, cat.emoji + ' ' + cat.title)
      ),
      h('div', { className: 'scene', style: { background: cat.tint || '#fff' } }, (con.scene || [con.emoji]).join(' ')),
      h('div', { className: 'story-card' },
        h('h2', null, con.emoji + ' ' + con.title),
        h('p', null, body.story)
      ),
      vid ? h('div', { className: 'video-wrap' }, h('iframe', { src: vid, allowFullScreen: true, title: con.title })) : null,
      h('div', { className: 'actionrow' },
        h('button', {
          className: 'btn grape',
          onClick: function () {
            if (reading) { stopSpeak(); setReading(false); }
            else { setReading(true); speak(con.title + '. ' + body.story, function () { setReading(false); }); }
          }
        }, reading ? '⏹ Stop' : '🔊 Read to me'),
        h('button', { className: 'btn green', onClick: props.onQuiz }, '🎯 Quiz time!')
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

    var ok = hasContentFor(props.data, props.pid, cat);
    var playable = cat.concepts.filter(ok);
    var rows = catRows(props.data, props.pid, props.catId);
    var cyc = currentCycle(rows, playable.length);
    var dm = doneMap(rows, cyc);
    var cycleForSave = dm[con.id] ? dm[con.id].cycle : cyc;

    var q = qs[pos];
    var plan = plans[pos];
    var young = tier === 'young';

    function choose(dispIdx) {
      if (picked !== null) { return; }
      var realIdx = plan.order[dispIdx];
      var correct = realIdx === q.answer;
      setPicked({ dispIdx: dispIdx, correct: correct });
      if (young && window.speechSynthesis) { speak(correct ? 'Yes! Great job!' : 'Good try!'); }
      setTimeout(function () {
        var nextAnswers = answers.concat([correct]);
        setAnswers(nextAnswers);
        setPicked(null);
        if (pos + 1 < qs.length) { setPos(pos + 1); }
        else {
          var score = 0, j;
          for (j = 0; j < nextAnswers.length; j++) { if (nextAnswers[j]) { score++; } }
          props.onDone(score, cycleForSave);
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
      h('div', { className: 'question-card' },
        h('div', { className: 'q' }, q.q),
        young ? h('button', {
          className: 'btn plain small', style: { marginTop: '10px' },
          onClick: function () { speak(q.q + '. ' + plan.order.map(function (ri) { return q.choices[ri]; }).join('. ')); }
        }, '🔊 Read it') : null,
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
    return h('div', { className: 'center-wrap', style: { paddingTop: '20px' } },
      h('div', { className: 'burst' }, s >= 8 ? '🏅' : (s >= 5 ? '🎉' : '💪')),
      h('h1', null, s + ' out of 10!'),
      h('div', { className: 'result-stars' }, starStr),
      h('div', { className: 'sub' }, msg),
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
    return h('div', null,
      h('h1', { style: { textAlign: 'center', margin: '14px 0 6px', fontSize: '26px' } }, props.profile.avatar + ' ' + props.profile.name + "'s treasure"),
      h('div', { className: 'badge-row' },
        h('div', { className: 'tile badge-card' }, h('div', { className: 'n' }, '⭐ ' + stars), h('div', { className: 'lbl' }, 'Stars collected')),
        h('div', { className: 'tile badge-card' }, h('div', { className: 'n' }, '🏅 ' + badges), h('div', { className: 'lbl' }, 'Smarty badges')),
        h('div', { className: 'tile badge-card' }, h('div', { className: 'n' }, '🏆 ' + trophies), h('div', { className: 'lbl' }, 'Trophies'))
      ),
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
