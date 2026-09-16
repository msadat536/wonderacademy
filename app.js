/* Wonder Academy - app.js (ES5, React.createElement, no JSX) */
(function () {
  'use strict';

  var h = React.createElement;
  var CFG = window.APP_CONFIG || {};
  var APP_NAME = CFG.APP_NAME || 'Wonder Academy';
  var FAMILY = CFG.FAMILY_CODE || 'our-family';
  var CONTENT = window.CONTENT || {};
  var CAT_ORDER = ['science', 'islamic-history', 'geography', 'analytical', 'reasoning', 'iq', 'physics', 'biology'];
  var AVATARS = ['🦁', '🐼', '🦄', '🐯', '🚀', '🌸', '🐬', '🦖', '🐱', '⚽', '🎨', '🌟'];
  var LS_KEY = 'wonder_academy_v1';

  /* ---------------- storage ---------------- */

  function sbOn() { return !!(CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY); }

  function sbFetch(path, method, body, extraHeaders, cb) {
    var headers = {
      'apikey': CFG.SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + CFG.SUPABASE_ANON_KEY,
      'Content-Type': 'application/json'
    };
    var k;
    if (extraHeaders) { for (k in extraHeaders) { headers[k] = extraHeaders[k]; } }
    fetch(CFG.SUPABASE_URL.replace(/\/$/, '') + '/rest/v1/' + path, {
      method: method || 'GET',
      headers: headers,
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      if (!r.ok) { throw new Error('supabase ' + r.status); }
      return r.text();
    }).then(function (t) {
      cb(null, t ? JSON.parse(t) : null);
    }).catch(function (e) { cb(e, null); });
  }

  function loadLocal() {
    try {
      var raw = localStorage.getItem(LS_KEY);
      if (raw) { return JSON.parse(raw); }
    } catch (e) {}
    return { profiles: [], progress: [] };
  }

  function saveLocal(data) {
    try { localStorage.setItem(LS_KEY, JSON.stringify(data)); } catch (e) {}
  }

  function loadAll(cb) {
    var local = loadLocal();
    if (!sbOn()) { cb(local, false); return; }
    sbFetch('kid_profiles?family_code=eq.' + encodeURIComponent(FAMILY) + '&order=created_at', 'GET', null, null, function (e1, profs) {
      if (e1) { cb(local, false); return; }
      sbFetch('kid_progress?family_code=eq.' + encodeURIComponent(FAMILY), 'GET', null, null, function (e2, rows) {
        if (e2) { cb(local, false); return; }
        var data = { profiles: profs || [], progress: rows || [] };
        saveLocal(data);
        cb(data, true);
      });
    });
  }

  function persistProfile(p, cb) {
    if (!sbOn()) { cb(null, p); return; }
    sbFetch('kid_profiles', 'POST', {
      family_code: FAMILY, name: p.name, age: p.age, avatar: p.avatar
    }, { 'Prefer': 'return=representation' }, function (e, out) {
      if (!e && out && out[0]) { cb(null, out[0]); } else { cb(e, p); }
    });
  }

  function persistProgress(row) {
    if (!sbOn()) { return; }
    sbFetch('kid_progress?on_conflict=profile_id,category,concept_id,cycle', 'POST', {
      family_code: FAMILY, profile_id: row.profile_id, category: row.category,
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

  function hasContentFor(data, pid, cat) {
    var prof = null, i;
    for (i = 0; i < data.profiles.length; i++) { if (data.profiles[i].id === pid) { prof = data.profiles[i]; } }
    var tier = tierOf(prof ? prof.age : 8);
    return function (con) {
      return con[tier] && con[tier].story && con[tier].questions && con[tier].questions.length > 0;
    };
  }

  /* ---------------- speech ---------------- */

  function speak(text, onEnd) {
    if (!window.speechSynthesis) { if (onEnd) { onEnd(); } return; }
    window.speechSynthesis.cancel();
    var u = new SpeechSynthesisUtterance(text);
    u.rate = 0.95; u.pitch = 1.05;
    var voices = window.speechSynthesis.getVoices();
    var i;
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
    var st = React.useState({ screen: 'loading', data: { profiles: [], progress: [] }, synced: false });
    var state = st[0], setState = st[1];
    var pidSt = React.useState(null);
    var pid = pidSt[0], setPid = pidSt[1];
    var navSt = React.useState({ catId: null, conceptId: null });
    var nav = navSt[0], setNav = navSt[1];

    React.useEffect(function () {
      loadAll(function (data, synced) {
        setState({ screen: data.profiles.length ? 'profiles' : 'newProfile', data: data, synced: synced });
      });
      if (window.speechSynthesis) { window.speechSynthesis.getVoices(); }
    }, []);

    function update(patch) {
      setState(function (s) {
        var n = { screen: s.screen, data: s.data, synced: s.synced }, k;
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

    function addProfile(name, age, avatar) {
      var p = { id: 'local-' + Date.now(), family_code: FAMILY, name: name, age: age, avatar: avatar };
      persistProfile(p, function (err, saved) {
        var data = state.data;
        var next = { profiles: data.profiles.concat([saved]), progress: data.progress };
        saveLocal(next);
        setPid(saved.id);
        setState({ screen: 'home', data: next, synced: state.synced });
      });
    }

    function recordResult(catId, conceptId, cycle, correct) {
      var data = state.data;
      var rows = data.progress.slice();
      var found = null, i;
      for (i = 0; i < rows.length; i++) {
        var r = rows[i];
        if (r.profile_id === pid && r.category === catId && r.concept_id === conceptId && r.cycle === cycle) { found = r; }
      }
      if (found) {
        found.best_score = Math.max(found.best_score, correct);
        found.stars = Math.max(found.stars, correct);
      } else {
        found = { profile_id: pid, category: catId, concept_id: conceptId, cycle: cycle, best_score: correct, stars: correct };
        rows.push(found);
      }
      var next = { profiles: data.profiles, progress: rows };
      saveLocal(next);
      persistProgress(found);
      update({ data: next });
    }

    var profile = null, i;
    for (i = 0; i < state.data.profiles.length; i++) { if (state.data.profiles[i].id === pid) { profile = state.data.profiles[i]; } }

    if (state.screen === 'loading') {
      return h('div', { className: 'center-wrap' }, h('div', { className: 'burst' }, '🌟'), h('h1', null, APP_NAME));
    }
    if (state.screen === 'profiles') {
      return h(ProfilePick, {
        profiles: state.data.profiles, data: state.data,
        onPick: function (p) { setPid(p.id); go('home'); },
        onNew: function () { go('newProfile'); }
      });
    }
    if (state.screen === 'newProfile') {
      return h(ProfileNew, { onCreate: addProfile, canBack: state.data.profiles.length > 0, onBack: function () { go('profiles'); } });
    }
    if (!profile) { return h('div', { className: 'center-wrap' }, h('h1', null, '...')); }

    var shell = [
      h(TopBar, { key: 'tb', profile: profile, stars: totalStars(state.data, pid), onSwitch: function () { setPid(null); go('profiles'); } })
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
        onDone: function (correct, cycle) { recordResult(nav.catId, nav.conceptId, cycle, correct); go('results', {}); window.__lastScore = correct; },
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

  /* ---------------- screens ---------------- */

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
      h('div', { className: 'profile-row' },
        props.profiles.map(function (p) {
          return h('button', {
            key: p.id, className: 'tile profile-card', onClick: function () { props.onPick(p); }
          },
            h('div', { className: 'avatar' }, p.avatar),
            h('div', { className: 'pname' }, p.name),
            h('div', { className: 'page' }, 'Age ' + p.age + ' · ⭐ ' + totalStars(props.data, p.id))
          );
        }).concat([
          h('button', { key: 'new', className: 'tile profile-card', onClick: props.onNew },
            h('div', { className: 'avatar' }, '➕'),
            h('div', { className: 'pname' }, 'New explorer'))
        ])
      )
    );
  }

  function ProfileNew(props) {
    var nameSt = React.useState(''); var name = nameSt[0], setName = nameSt[1];
    var ageSt = React.useState(null); var age = ageSt[0], setAge = ageSt[1];
    var avSt = React.useState(AVATARS[0]); var avatar = avSt[0], setAvatar = avSt[1];
    var ages = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return h('div', { className: 'app center-wrap' },
      h('h1', null, 'Make your explorer card!'),
      h('div', { className: 'sub' }, 'What is your name?'),
      h('input', {
        className: 'name-input', value: name, maxLength: 14,
        onChange: function (e) { setName(e.target.value); }, placeholder: 'Type your name'
      }),
      h('div', { className: 'sub', style: { marginTop: '18px' } }, 'How old are you?'),
      h('div', { className: 'age-pick' }, ages.map(function (a) {
        return h('button', { key: a, className: a === age ? 'sel' : '', onClick: function () { setAge(a); } }, a);
      })),
      h('div', { className: 'sub' }, 'Pick your buddy!'),
      h('div', { className: 'avatar-pick' }, AVATARS.map(function (a) {
        return h('button', { key: a, className: a === avatar ? 'sel' : '', onClick: function () { setAvatar(a); } }, a);
      })),
      h('div', { className: 'actionrow' },
        props.canBack ? h('button', { className: 'btn plain', onClick: props.onBack }, 'Back') : null,
        h('button', {
          className: 'btn green', disabled: !name.trim() || !age,
          onClick: function () { props.onCreate(name.trim(), age, avatar); }
        }, "Let's go! 🚀")
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
        var order = shuffle(q.choices.map(function (c, idx) { return idx; }));
        return { order: order };
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
        young ? h('button', { className: 'btn plain small', style: { marginTop: '10px' }, onClick: function () { speak(q.q + '. ' + plan.order.map(function (ri) { return q.choices[ri]; }).join('. ')); } }, '🔊 Read it') : null,
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
