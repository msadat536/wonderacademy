/* Wonder Academy - export every spoken line to content.json for the voice library generator.
   Run from the app folder:   node voice-library/export-content.js
   Keys are the raw text; the app hashes the same raw text at playback, so the two always match. */
var fs = require('fs');
var path = require('path');
var root = path.join(__dirname, '..');
var w = {}; global.window = w;
var cats = ['science','islamic-history','story-time','math','physics','biology','geography','technology','inventors','character','analytical','reasoning','iq'];
cats.forEach(function (c) {
  var f = path.join(root, 'content', c + '.js');
  if (fs.existsSync(f)) { require(f); }
});

var lines = [];
var seen = {};
function add(kind, cat, con, tier, text) {
  var t = String(text || '').trim();
  if (!t || seen[t]) { return; }
  seen[t] = 1;
  lines.push({ kind: kind, category: cat, concept: con, tier: tier, text: t });
}

/* Generic phrases the app plays between clips */
['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Yes! Great job!', 'Good try!', 'The answer was',
 'Amazing! You finished the activity!', 'Not that one. What happened first?',
 'Wow!', 'Did you know?', 'Try it at home.', 'New words.'].forEach(function (p) { add('phrase', '', '', '', p); });

Object.keys(w.CONTENT).forEach(function (catId) {
  var cat = w.CONTENT[catId];
  cat.concepts.forEach(function (con) {
    ['young', 'older'].forEach(function (tier) {
      var b = con[tier];
      if (!b || !b.questions || !b.questions.length) { return; }
      var young = tier === 'young';
      if (b.pages && b.pages.length) { b.pages.forEach(function (p) { add('page', catId, con.id, tier, p.text); }); }
      else if (b.story) { add('page', catId, con.id, tier, b.story); }
      /* extras page, built exactly as the app builds it */
      var t = [];
      if (b.funFact) { t.push((young ? 'Wow! ' : 'Did you know? ') + b.funFact); }
      if (b.tryThis) { t.push('Try it at home. ' + b.tryThis); }
      if (b.words && b.words.length) { t.push('New words. ' + b.words.map(function (x) { return x.word + ' means ' + x.meaning; }).join(' ')); }
      if (t.length) { add('extras', catId, con.id, tier, t.join(' ')); }
      add('video', catId, con.id, tier, 'Here is a video about ' + con.title + '.');
      b.questions.forEach(function (q) {
        add('question', catId, con.id, tier, q.q);
        q.choices.forEach(function (c) { add('choice', catId, con.id, tier, c); });
      });
    });
  });
});

fs.writeFileSync(path.join(__dirname, 'content.json'), JSON.stringify(lines, null, 1));
var chars = lines.reduce(function (a, l) { return a + l.text.length; }, 0);
var byKind = {};
lines.forEach(function (l) { byKind[l.kind] = (byKind[l.kind] || 0) + 1; });
console.log('wrote content.json:', lines.length, 'lines,', chars, 'characters');
console.log(byKind);
