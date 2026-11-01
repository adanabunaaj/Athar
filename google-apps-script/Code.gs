/**
 * Saddah video library — Google Sheet backend.
 *
 * Paste this whole file into the Sheet's script editor
 * (Extensions > Apps Script), run `setup` once, then deploy as a Web app.
 * Full steps: VIDEOS_SETUP.md in the website repo.
 *
 * Tabs:
 *   Signups      one row per student (A Date ... G Active ... J Came from)
 *   Visits       one row per visit to the Videos page
 *   Video views  one row per step watched (Started, 25%, 50%, 75%, Finished)
 *   Summary      totals, filled in by formulas
 * To switch off someone's link, change their "Active" cell to "No".
 * After pasting a new version: run `setup` again, then Deploy > Manage deployments >
 * edit > Version: New version > Deploy.
 */

var SIGNUPS_SHEET = 'Signups';
var VISITS_SHEET = 'Visits';
var VIEWS_SHEET = 'Video views';
var SUMMARY_SHEET = 'Summary';
var HEADERS = ['Date', 'Name', 'Email', 'Source', 'Language', 'Key', 'Active', 'Last email sent', 'Country', 'Came from'];
var VISIT_HEADERS = ['Date', 'Came from', 'Country', 'Language', 'Signed up', 'Name', 'Email'];
var VIEW_HEADERS = ['Date', 'Name', 'Email', 'Video', 'Step', 'Key'];
var COL = { date: 1, name: 2, email: 3, source: 4, lang: 5, key: 6, active: 7, lastEmail: 8, country: 9, from: 10 };
var RESEND_COOLDOWN_MINUTES = 10;

/** Run once from the editor. Creates the Signups tab and the shared secret. */
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SIGNUPS_SHEET) || ss.insertSheet(SIGNUPS_SHEET);
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold');
  sheet.setFrozenRows(1);
  var rule = SpreadsheetApp.newDataValidation().requireValueInList(['Yes', 'No'], true).build();
  sheet.getRange(2, COL.active, sheet.getMaxRows() - 1, 1).setDataValidation(rule);

  headerTab_(ss, VISITS_SHEET, VISIT_HEADERS);
  headerTab_(ss, VIEWS_SHEET, VIEW_HEADERS);
  buildSummary_(ss);

  var props = PropertiesService.getScriptProperties();
  var secret = props.getProperty('SECRET');
  if (!secret) {
    secret = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
    props.setProperty('SECRET', secret);
  }
  Logger.log('Copy this into Vercel as APPS_SCRIPT_SECRET:\n' + secret);
}

function doPost(e) {
  var req;
  try {
    req = JSON.parse(e.postData.contents);
  } catch (err) {
    return json_({ ok: false, error: 'bad_json' });
  }
  if (!req.secret || req.secret !== PropertiesService.getScriptProperties().getProperty('SECRET')) {
    return json_({ ok: false, error: 'unauthorized' });
  }

  try {
    switch (req.action) {
      case 'signup': return json_(signup_(req));
      case 'resend': return json_(resend_(req));
      case 'check':  return json_(check_(req));
      case 'visit':  return json_(visit_(req));
      case 'view':   return json_(view_(req));
      default:       return json_({ ok: false, error: 'unknown_action' });
    }
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function signup_(req) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sheet = signupsSheet_();
    var row = findRow_(sheet, COL.email, req.email);
    if (row) {
      // Already signed up: just send their existing link again.
      maybeSendLink_(sheet, row, req.lang, req.linkBase);
      return { ok: true, existing: true };
    }
    var key = Utilities.getUuid().replace(/-/g, '');
    sheet.appendRow([new Date(), req.name, req.email, req.source || 'Videos', req.lang || 'en', key, 'Yes', '',
                     req.country || '', req.from || '']);
    var newRow = sheet.getLastRow();
    maybeSendLink_(sheet, newRow, req.lang, req.linkBase);
    return { ok: true, existing: false };
  } finally {
    lock.releaseLock();
  }
}

function resend_(req) {
  var sheet = signupsSheet_();
  var row = findRow_(sheet, COL.email, req.email);
  if (row) maybeSendLink_(sheet, row, req.lang, req.linkBase);
  return { ok: true }; // same answer either way
}

function check_(req) {
  var sheet = signupsSheet_();
  var row = findRow_(sheet, COL.key, req.key);
  if (!row) return { ok: true, valid: false };
  var active = String(sheet.getRange(row, COL.active).getValue()).trim().toLowerCase();
  var valid = active !== 'no';
  return { ok: true, valid: valid, name: valid ? String(sheet.getRange(row, COL.name).getValue()) : '' };
}

/** A visit to the Videos page. Name/email are filled in only for signed-up visitors. */
function visit_(req) {
  var who = activePerson_(req.key);
  tab_(VISITS_SHEET).appendRow([new Date(), req.from || 'Direct / unknown', req.country || '', req.lang || 'en',
                               who ? 'Yes' : 'No', who ? who.name : '', who ? who.email : '']);
  return { ok: true };
}

/** One step of watching a video (Started, 25%, 50%, 75%, Finished). */
function view_(req) {
  var who = activePerson_(req.key);
  if (!who) return { ok: true };
  tab_(VIEWS_SHEET).appendRow([new Date(), who.name, who.email, req.video, req.event, req.key]);
  return { ok: true };
}

function activePerson_(key) {
  if (!key) return null;
  var sheet = signupsSheet_();
  var row = findRow_(sheet, COL.key, key);
  if (!row) return null;
  var v = sheet.getRange(row, 1, 1, COL.active).getValues()[0];
  if (String(v[COL.active - 1]).trim().toLowerCase() === 'no') return null;
  return { name: String(v[COL.name - 1]), email: String(v[COL.email - 1]) };
}

function headerTab_(ss, name, headers) {
  var sheet = ss.getSheetByName(name) || ss.insertSheet(name);
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
  sheet.setFrozenRows(1);
  return sheet;
}

function tab_(name) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(name);
  if (!sheet) throw new Error(name + ' tab missing: run setup()');
  return sheet;
}

/** (Re)builds the Summary tab. Everything here is formulas, so it updates by itself. */
function buildSummary_(ss) {
  var sh = ss.getSheetByName(SUMMARY_SHEET) || ss.insertSheet(SUMMARY_SHEET, 0);
  sh.clear();
  var V = "'" + VIEWS_SHEET + "'";
  var rows = [
    ['Saddah video library: summary', ''],
    ['', ''],
    ['Total signups', '=COUNTA(Signups!C2:C)'],
    ['Signups in the last 7 days', '=COUNTIF(Signups!A2:A,">="&(TODAY()-7))'],
    ['Visits to the Videos page', '=COUNTA(Visits!A2:A)'],
    ['Visits in the last 7 days', '=COUNTIF(Visits!A2:A,">="&(TODAY()-7))'],
    ['Students who started at least one video', '=IFERROR(COUNTUNIQUE(FILTER(' + V + '!C2:C,' + V + '!E2:E="Started")),0)'],
    ['Students who finished at least one video', '=IFERROR(COUNTUNIQUE(FILTER(' + V + '!C2:C,' + V + '!E2:E="Finished")),0)']
  ];
  sh.getRange(1, 1, rows.length, 2).setValues(rows);
  sh.getRange('A1').setFontWeight('bold').setFontSize(14);

  sh.getRange('A10').setValue('Visits by source').setFontWeight('bold');
  sh.getRange('A11').setFormula('=IFERROR(QUERY(Visits!A1:G,"select B, count(A) where A is not null group by B order by count(A) desc label B \'Came from\', count(A) \'Visits\'",1),"No visits yet")');

  sh.getRange('D10').setValue('Signups by source').setFontWeight('bold');
  sh.getRange('D11').setFormula('=IFERROR(QUERY(Signups!A1:J,"select J, count(A) where A is not null group by J order by count(A) desc label J \'Came from\', count(A) \'Signups\'",1),"No signups yet")');

  sh.getRange('G10').setValue('Video views (number of students reaching each step)').setFontWeight('bold');
  sh.getRange('G11:L11').setValues([['Video', 'Started', '25%', '50%', '75%', 'Finished']]).setFontWeight('bold');
  sh.getRange('G12').setFormula('=IFERROR(SORT(UNIQUE(FILTER(' + V + '!D2:D,' + V + '!D2:D<>""))),"")');
  // Counts each student once per video and step, even if they watched it several times.
  var formulas = [];
  for (var r = 12; r < 42; r++) {
    var row = [];
    for (var c = 0; c < 5; c++) {
      var col = String.fromCharCode(72 + c); // H..L
      row.push('=IF($G' + r + '="","",COUNTUNIQUEIFS(' + V + '!$C$2:$C,' + V + '!$D$2:$D,$G' + r + ',' + V + '!$E$2:$E,' + col + '$11))');
    }
    formulas.push(row);
  }
  sh.getRange(12, 8, 30, 5).setFormulas(formulas);
  sh.setColumnWidth(1, 300);
  sh.setColumnWidth(7, 260);
}

/** Emails the personal link, at most once per cooldown period per person. */
function maybeSendLink_(sheet, row, lang, linkBase) {
  var values = sheet.getRange(row, 1, 1, HEADERS.length).getValues()[0];
  var last = values[COL.lastEmail - 1];
  if (last instanceof Date && (new Date() - last) < RESEND_COOLDOWN_MINUTES * 60 * 1000) return;

  var name = String(values[COL.name - 1]);
  var email = String(values[COL.email - 1]);
  var key = String(values[COL.key - 1]);
  var link = (linkBase || 'https://saddah.vercel.app/videos') + '?key=' + encodeURIComponent(key);
  var msg = lang === 'ar' ? emailAr_(name, link) : emailEn_(name, link);

  MailApp.sendEmail({ to: email, subject: msg.subject, htmlBody: msg.html, body: msg.text, name: 'Saddah' });
  sheet.getRange(row, COL.lastEmail).setValue(new Date());
}

function emailEn_(name, link) {
  var n = escape_(name);
  return {
    subject: 'Your Saddah video library',
    text: 'Hi ' + name + ',\n\nWelcome to the Saddah community! Here is your personal link to our college application video library:\n' +
          link + '\n\nThis link is just for you, so please don\'t share it. You can come back to it anytime.\n' +
          'Questions? Just reply to this email.\n\nThe Saddah team',
    html: '<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#1A1A17">' +
          '<p>Hi ' + n + ',</p>' +
          '<p>Welcome to the Saddah community! Here is your personal link to our college application video library:</p>' +
          '<p><a href="' + link + '" style="display:inline-block;background:#A3AB4B;color:#fff;padding:12px 22px;border-radius:8px;text-decoration:none;font-weight:bold">Open the video library</a></p>' +
          '<p>This link is just for you, so please don\'t share it. You can come back to it anytime.</p>' +
          '<p>Questions? Just reply to this email.</p>' +
          '<p>The Saddah team</p></div>'
  };
}

function emailAr_(name, link) {
  var n = escape_(name);
  return {
    subject: 'مكتبة فيديوهات صدى الخاصة بك',
    text: 'مرحباً ' + name + '،\n\nأهلاً بك في مجتمع صدى! هذا رابطك الشخصي لمكتبة فيديوهات التقديم للجامعات:\n' +
          link + '\n\nهذا الرابط خاص بك، لذا نرجو عدم مشاركته. يمكنك العودة إليه في أي وقت.\n' +
          'لديك سؤال؟ ردّ على هذا البريد.\n\nفريق صدى',
    html: '<div dir="rtl" style="font-family:Arial,sans-serif;font-size:15px;line-height:1.8;color:#1A1A17;text-align:right">' +
          '<p>مرحباً ' + n + '،</p>' +
          '<p>أهلاً بك في مجتمع صدى! هذا رابطك الشخصي لمكتبة فيديوهات التقديم للجامعات:</p>' +
          '<p><a href="' + link + '" style="display:inline-block;background:#A3AB4B;color:#fff;padding:12px 22px;border-radius:8px;text-decoration:none;font-weight:bold">افتح مكتبة الفيديوهات</a></p>' +
          '<p>هذا الرابط خاص بك، لذا نرجو عدم مشاركته. يمكنك العودة إليه في أي وقت.</p>' +
          '<p>لديك سؤال؟ ردّ على هذا البريد.</p>' +
          '<p>فريق صدى</p></div>'
  };
}

function signupsSheet_() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SIGNUPS_SHEET);
  if (!sheet) throw new Error('Signups tab missing: run setup()');
  return sheet;
}

/** Returns the row number whose column `col` equals `value` (case-insensitive), or 0. */
function findRow_(sheet, col, value) {
  var last = sheet.getLastRow();
  if (last < 2 || !value) return 0;
  var target = String(value).trim().toLowerCase();
  var vals = sheet.getRange(2, col, last - 1, 1).getValues();
  for (var i = 0; i < vals.length; i++) {
    if (String(vals[i][0]).trim().toLowerCase() === target) return i + 2;
  }
  return 0;
}

function escape_(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
