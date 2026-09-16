/* Wonder Academy - pronounce.js
   Text is rewritten here just before it is spoken.

   Two important things learned the hard way:
   1. Many speech engines read a hyphen as a short pause, so respellings use
      spaces or plain letters instead of hyphens wherever possible.
   2. No respelling works on every voice. Use the Parent area > Words tab to
      hear any term and save your own spelling. Your saved versions always win.
*/

/* Honorific phrases. The app picks one set based on the Words tab setting. */
window.HONORIFICS = {
  full: {
    saw: ' sallallaahu alayhi wa sallam ',
    as: ' alayhis salaam ',
    ra_m: ' radiyallaahu anhu ',
    ra_f: ' radiyallaahu anhaa '
  },
  short: {
    saw: ' peace be upon him ',
    as: ' peace be upon him ',
    ra_m: ' may Allaah be pleased with him ',
    ra_f: ' may Allaah be pleased with her '
  },
  off: { saw: ' ', as: ' ', ra_m: ' ', ra_f: ' ' }
};

/* Terms shown in the Words tab so you can test and correct them.
   Each entry: [the written word, the spoken spelling]. */
window.PRONOUNCE_TABLE = [
  ['Allah', 'Ahlaah'],
  ['Quran', 'Kuraan'],
  ['Quranic', 'Kuraanic'],
  ['Islam', 'Islaam'],
  ['Muslim', 'Muslim'],
  ['Muslims', 'Muslims'],
  ['Makkah', 'Mekka'],
  ['Makkan', 'Mekkan'],
  ['Madinah', 'Madeena'],
  ['Madinan', 'Madeenan'],
  ['Kaaba', 'Kaaba'],
  ['Hajj', 'Huj'],
  ['Umrah', 'Oomrah'],
  ['Jannah', 'Junnah'],
  ['Zamzam', 'Zumzum'],
  ['Adhan', 'Athaan'],
  ['Muadhin', 'Moo azzin'],
  ['Masjid', 'Musjid'],
  ['Nabawi', 'Nabawee'],
  ['Surah', 'Soorah'],
  ['Ayah', 'Aayah'],
  ['Hafiz', 'Haafiz'],
  ['Tafsir', 'Tafseer'],
  ['Hadith', 'Hadeeth'],
  ['Sabr', 'Sabur'],
  ['Sidq', 'Sidk'],
  ['Tawbah', 'Towbah'],
  ['Tawheed', 'Towheed'],
  ['Tawakkul', 'Tawukkul'],
  ['Tawaf', 'Tawaaf'],
  ['Qiblah', 'Kiblah'],
  ['Kiswah', 'Kiswah'],
  ['Hijrah', 'Hijrah'],
  ['Hijri', 'Hijree'],
  ['Iqra', 'Ikra'],
  ['Riba', 'Ribaa'],
  ['Fitna', 'Fitnah'],
  ['Ridda', 'Riddah'],
  ['Mushaf', 'Mus haf'],
  ['Sadaqah', 'Sadakah'],
  ['Ansar', 'Ansaar'],
  ['Ansari', 'Ansaaree'],
  ['Muhajirun', 'Muhaajiroon'],
  ['Ramadan', 'Ramadaan'],
  ['Muhammad', 'Muhammad'],
  ['Ibrahim', 'Ibraaheem'],
  ['Ismail', 'Ismaaeel'],
  ['Ishaq', 'Is haak'],
  ['Yaqub', 'Yakoob'],
  ['Yusuf', 'Yoosuf'],
  ['Musa', 'Moosa'],
  ['Harun', 'Haaroon'],
  ['Isa', 'Eesa'],
  ['Nuh', 'Nooh'],
  ['Hud', 'Hood'],
  ['Salih', 'Saalih'],
  ['Ayyub', 'Ayoob'],
  ['Dawud', 'Daawood'],
  ['Sulaiman', 'Sulaymaan'],
  ['Yunus', 'Yoonus'],
  ['Adam', 'Aadam'],
  ['Hawwa', 'Hawwaa'],
  ['Hajar', 'Haajar'],
  ['Maryam', 'Maryam'],
  ['Khadijah', 'Khadeejah'],
  ['Aminah', 'Aaminah'],
  ['Fatimah', 'Faatimah'],
  ['Aisha', 'Aaisha'],
  ['Abu Bakr', 'Abu Bakr'],
  ['Abu Talib', 'Abu Taalib'],
  ['Abdul Muttalib', 'Abdul Muttalib'],
  ['Abdullah', 'Abdullaah'],
  ['Umar', 'Oomar'],
  ['Uthman', 'Uthmaan'],
  ['Bilal', 'Bilaal'],
  ['Hamza', 'Hamzah'],
  ['Waraqah', 'Warakah'],
  ['Jibreel', 'Jibreel'],
  ['Mikaeel', 'Meekaaeel'],
  ['Iblees', 'Iblees'],
  ['Firaun', 'Firown'],
  ['Jalut', 'Jaaloot'],
  ['Talut', 'Taaloot'],
  ['Quraysh', 'Kuraysh'],
  ['Thamud', 'Thamood'],
  ['Madyan', 'Madyan'],
  ['Abraha', 'Abrahah'],
  ['Halimah', 'Haleemah'],
  ['Al-Amin', 'Al Ameen'],
  ['As-Sadiq', 'As Saadik'],
  ['Al-Farooq', 'Al Faarook'],
  ['Dhun-Nurayn', 'Dhun Nooraynn'],
  ['Dhun-Nun', 'Dhun Noon'],
  ['Khalilullah', 'Khaleelullaah'],
  ['Kalimullah', 'Kaleemullaah'],
  ['Ulul Azm', 'Oolul Azm'],
  ['Hira', 'Hiraa'],
  ['Thawr', 'Thowr'],
  ['Uhud', 'Oohud'],
  ['Badr', 'Badur'],
  ['Khaybar', 'Khaybar'],
  ['Hudaybiyyah', 'Hudaybeeyah'],
  ['Arafat', 'Arafaat'],
  ['Safa', 'Safaa'],
  ['Marwa', 'Marwah'],
  ['Yathrib', 'Yathrib'],
  ['Kufa', 'Koofah'],
  ['Saba', 'Sabaa'],
  ['Nineveh', 'Nineveh'],
  ['Al-Fil', 'Al Feel'],
  ['Al-Alaq', 'Al Alak'],
  ['Al-Fatiha', 'Al Faatihah'],
  ['Al-Baqarah', 'Al Bakarah'],
  ['Tawrat', 'Towraat'],
  ['Injeel', 'Injeel'],
  ['Zabur', 'Zaboor'],
  ['Nahj al-Balagha', 'Nahj al Balaaghah'],
  ['Ahl as-Suffah', 'Ahl as Suffah'],
  ['al-Khwarizmi', 'al Khwaarizmee'],
  ['Ibn al-Haytham', 'Ibn al Haytham'],
  ['Ibn Sina', 'Ibn Seena'],
  ['al-Jazari', 'al Jazaree'],
  ['Fatima al-Fihri', 'Faatima al Fihree'],
  ['Mu\u2019akhah', 'Mu aakhah'],
  ['Sa\u2019i', 'Saee'],
  ['Eid al-Adha', 'Eed al Adha'],
  ['Eid al-Fitr', 'Eed al Fitr'],
  ['Jinn', 'Jin'],
  ['Ali', 'Alee']
];

/* Build the rules the speech engine actually uses.
   overrides is a plain object of { word: spoken } saved from the Words tab. */
window.buildPronounceRules = function (overrides, honorificMode) {
  var H = window.HONORIFICS[honorificMode] || window.HONORIFICS.full;
  var rules = [];

  rules.push([/\uFDFA|\uFE2A|\u0635\u0644\u0649 \u0627\u0644\u0644\u0647 \u0639\u0644\u064A\u0647 \u0648\u0633\u0644\u0645|ﷺ/g, H.saw]);
  rules.push([/\(\s*AS\s*\)/g, H.as]);
  rules.push([/\(\s*RA\s*\)/g, function (m, offset, str) {
    var before = str.slice(Math.max(0, offset - 44), offset);
    return /(Khadijah|Khadeejah|Maryam|Aisha|Aaisha|Fatimah|Faatimah|Hajar|Haajar|Hawwa|Asiya|Zaynab|Hafsa|Sumayyah)[^A-Za-z]*$/i.test(before)
      ? H.ra_f : H.ra_m;
  }]);

  /* Your own corrections run first so they always win. */
  var k;
  if (overrides) {
    for (k in overrides) {
      if (k && overrides[k]) {
        rules.push([new RegExp('\\b' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'gi'), overrides[k]]);
      }
    }
  }

  var table = window.PRONOUNCE_TABLE, i;
  for (i = 0; i < table.length; i++) {
    var word = table[i][0];
    if (overrides && overrides[word]) { continue; }
    rules.push([new RegExp('\\b' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'g'), table[i][1]]);
  }

  rules.push([/\bCE\b/g, ' C E ']);
  rules.push([/\bAH\b/g, ' A H ']);
  rules.push([/\bT-rex\b/g, 'T rex']);
  rules.push([/\s{2,}/g, ' ']);
  return rules;
};
