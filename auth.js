/* Wonder Academy - auth.js
   Supabase Auth (email + password) and authenticated REST calls. ES5, no SDK. */
(function () {
  'use strict';

  var CFG = window.APP_CONFIG || {};
  var SKEY = 'wonder_academy_session_v1';

  function configured() { return !!(CFG.SUPABASE_URL && CFG.SUPABASE_ANON_KEY); }
  function base() { return (CFG.SUPABASE_URL || '').replace(/\/$/, ''); }

  function getSession() {
    try {
      var raw = localStorage.getItem(SKEY);
      if (raw) { return JSON.parse(raw); }
    } catch (e) {}
    return null;
  }

  function setSession(s) {
    try {
      if (s) { localStorage.setItem(SKEY, JSON.stringify(s)); }
      else { localStorage.removeItem(SKEY); }
    } catch (e) {}
  }

  function errMessage(obj, status) {
    if (obj) {
      if (obj.error_description) { return obj.error_description; }
      if (obj.msg) { return obj.msg; }
      if (obj.message) { return obj.message; }
      if (typeof obj.error === 'string') { return obj.error; }
    }
    if (status === 400) { return 'Email or password is not correct.'; }
    if (status === 422) { return 'Please check the email and password.'; }
    return 'Something went wrong. Please try again.';
  }

  function authPost(path, body, cb) {
    fetch(base() + '/auth/v1/' + path, {
      method: 'POST',
      headers: { 'apikey': CFG.SUPABASE_ANON_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(function (r) {
      return r.text().then(function (t) {
        var parsed = null;
        try { parsed = t ? JSON.parse(t) : null; } catch (e) {}
        return { ok: r.ok, status: r.status, body: parsed };
      });
    }).then(function (res) {
      if (!res.ok) { cb(errMessage(res.body, res.status), null); return; }
      cb(null, res.body);
    }).catch(function () {
      cb('Cannot reach the server. Check your internet connection.', null);
    });
  }

  function storeFromResponse(out) {
    if (!out || !out.access_token) { return null; }
    var s = {
      access_token: out.access_token,
      refresh_token: out.refresh_token,
      user_id: out.user ? out.user.id : null,
      email: out.user ? out.user.email : null
    };
    setSession(s);
    return s;
  }

  function signIn(email, password, cb) {
    authPost('token?grant_type=password', { email: email, password: password }, function (err, out) {
      if (err) { cb(err, null); return; }
      var s = storeFromResponse(out);
      if (!s) { cb('Sign in failed. Please try again.', null); return; }
      cb(null, s);
    });
  }

  function signUp(email, password, cb) {
    authPost('signup', { email: email, password: password }, function (err, out) {
      if (err) { cb(err, null); return; }
      var s = storeFromResponse(out);
      if (s) { cb(null, s); return; }
      // Email confirmation is switched on for this project.
      cb(null, { needsConfirm: true });
    });
  }

  function signOut() { setSession(null); }

  function refresh(cb) {
    var s = getSession();
    if (!s || !s.refresh_token) { cb('No session', null); return; }
    authPost('token?grant_type=refresh_token', { refresh_token: s.refresh_token }, function (err, out) {
      if (err) { cb(err, null); return; }
      var ns = storeFromResponse(out);
      if (!ns) { cb('Could not refresh session', null); return; }
      cb(null, ns);
    });
  }

  function rawApi(path, method, body, extraHeaders, token, cb) {
    var headers = {
      'apikey': CFG.SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    };
    var k;
    if (extraHeaders) { for (k in extraHeaders) { headers[k] = extraHeaders[k]; } }
    fetch(base() + '/rest/v1/' + path, {
      method: method || 'GET',
      headers: headers,
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      return r.text().then(function (t) {
        var parsed = null;
        try { parsed = t ? JSON.parse(t) : null; } catch (e) {}
        return { ok: r.ok, status: r.status, body: parsed };
      });
    }).then(function (res) {
      cb(res.ok ? null : { status: res.status, message: errMessage(res.body, res.status) }, res.body, res.status);
    }).catch(function () {
      cb({ status: 0, message: 'Cannot reach the server.' }, null, 0);
    });
  }

  /* Authenticated request. Refreshes the token once if it has expired. */
  function api(path, method, body, extraHeaders, cb) {
    var s = getSession();
    if (!s) { cb({ status: 401, message: 'Signed out' }, null); return; }
    rawApi(path, method, body, extraHeaders, s.access_token, function (err, out, status) {
      if (err && (status === 401 || status === 403)) {
        refresh(function (rerr, ns) {
          if (rerr || !ns) { setSession(null); cb({ status: 401, message: 'Session expired' }, null); return; }
          rawApi(path, method, body, extraHeaders, ns.access_token, cb);
        });
        return;
      }
      cb(err, out);
    });
  }

  window.WA_AUTH = {
    configured: configured,
    getSession: getSession,
    signIn: signIn,
    signUp: signUp,
    signOut: signOut,
    api: api
  };
})();
