/* 사이트 전체 공통 (모든 페이지에 포함, 컴포넌트보다 먼저 실행) */
(function () {
  var d = document.documentElement;

  // 화면 맞춤 배율 (모든 기기에서 1440px 디자인이 잘리지 않게)
  //  --pf-s : 사이트 전체 배율. 창이 1440px보다 좁으면 창 폭에 맞춰 축소 (컴퓨터·아이패드·휴대폰 공통)
  //  T (window.__pfMix) : 화면 비율(세로/가로)로 정하는 섞는 정도. 1.0 이하 = 0(컴퓨터 배치), 1.9 이상 = 1(휴대폰 배치),
  //                       그 사이는 연속으로 섞음 (아이패드 세로 ≈ 0.5). 창 크기를 바꾸는 내내 끊김 없이 변함
  //  --pf-zh / --pf-zw : 홈 / Works 추가 확대 배율. 화면에 보이는 디자인 폭을 섞어서 정함
  //    · 홈: 컴퓨터 = 화면 전체(큰 화면은 창 폭 1670px을 1배로 확대) ↔ 휴대폰 = 967px 폭이 화면을 채움
  //    · Works: 컴퓨터 = 1440px ↔ 휴대폰 = 650px 폭 (Featured 박스가 화면 폭의 약 80%)
  //  --pf-za : About 확대 배율. About은 두 칸 ↔ 한 줄 배치가 달라 T가 0.4 이상(아이패드 세로부터)이면 한 줄 배치(html.pf-phone, 640px 폭)
  //  --pf-u : 전구·EN/KR·하단 아이콘 배율 (작은 화면에서도 누르기 좋은 크기 유지)
  var HW = 967, AW = 640, WW = 650;
  function mix(a, b, t) { return a + (b - a) * t; }
  // 휴대폰(터치 + 작은 화면): 주소창이 줄었다 늘었다 하며 높이가 바뀌어도 배치가 출렁이지 않게, 높이는 처음(또는 회전했을 때) 값으로 고정
  var isPhone = !!(window.matchMedia && matchMedia('(pointer: coarse)').matches && window.screen && Math.min(screen.width, screen.height) <= 600);
  var fixW = 0, fixH = 0;
  function zoom() {
    var w = window.innerWidth || 1440, h = window.innerHeight || 900;
    if (isPhone) { if (w !== fixW || !fixH) { fixW = w; fixH = h; } h = fixH; }
    window.__pfVH = h;                                          // Main이 화면 높이로 씀
    var s = Math.min(1, w / 1440), rootW = w / s;               // rootW: 사이트 전체 축소 뒤 화면 폭(디자인 단위, 1440 이상)
    var t = Math.max(0, Math.min(1, (h / w - 1.0) / 0.9));
    // 휴대폰 세로: 주소창·하단 막대 때문에 보이는 높이가 줄어도 휴대폰 배치(T=1)로 (화면 자체의 비율로 판단)
    if (isPhone && h > w) t = Math.max(t, Math.min(1, (Math.max(screen.width, screen.height) / Math.min(screen.width, screen.height) - 1.0) / 0.9));
    var zd = s === 1 ? Math.max(1, w / 1670) : 1;              // 컴퓨터 배치의 홈·About 확대
    var hw = mix(rootW / zd, HW, t), zh = rootW / hw;          // 홈: 화면에 보이는 디자인 폭
    // About: 창이 좁아져도 확 작아지지 않게, 양옆 내용(디자인 1440 중 가운데 1300px)이 화면을 채울 때까지 키움 (최대 1440/1300배).
    //        큰 화면의 확대(zd)와 이어지도록 둘 중 큰 값 (창 폭 1850px에서 두 값이 같아짐)
    var zaw = Math.max(zd, Math.min(rootW / 1300, 1440 / 1300));
    var phone = t >= 0.4, za = phone ? rootW / AW : zaw;       // About
    var ww = mix(1440, WW, t), zw = 1440 / ww;                 // Works: 디자인 폭
    var rowW = Math.max(ww, rootW / zw), wl = mix(120, 16, t);  // Works 가로 선반: 화면 끝까지, 첫 박스는 왼쪽 여백 wl부터
    // 컴퓨터: 창 폭이 모니터 폭의 절반이 될 때까지는 위아래 글자·아이콘이 풀스크린 때 크기 그대로 (그보다 좁으면 비례해서 작아짐)
    var sw = Math.max(w, (window.screen && screen.width) || w), keep = Math.min(1, w / (sw / 2));
    var zfull = Math.max(1, sw / 1670);                        // 풀스크린일 때 홈·About 확대 배율
    var tkd = zfull * keep / (s * zh), tkad = zfull * keep / (s * za);
    var tk = mix(tkd, 1.5, t), tka = phone ? 1.05 : tkad;      // 휴대폰: 위아래 작은 글자는 예전의 3/4 크기
    var u = mix(Math.max(keep, 0.6), Math.min(0.9, w / 430), t) / s;
    window.__pfS = s; window.__pfMix = t; window.__pfZh = zh; window.__pfHw = hw; window.__pfWw = ww;
    d.classList.toggle('pf-phone', phone);
    var set = function (k, v) { d.style.setProperty(k, v); };
    set('--pf-s', s.toFixed(5)); set('--pf-u', u.toFixed(5));
    set('--pf-rootw', rootW.toFixed(2) + 'px');
    set('--pf-zh', zh.toFixed(5)); set('--pf-za', za.toFixed(5)); set('--pf-zw', zw.toFixed(5));
    set('--pf-ww', ww.toFixed(2) + 'px'); set('--pf-wl', wl.toFixed(2) + 'px');
    set('--pf-rowl', Math.min(0, (ww - rowW) / 2).toFixed(2) + 'px'); set('--pf-roww', rowW.toFixed(2) + 'px');
    set('--pf-wpad', (wl + Math.max(0, (rowW - ww) / 2)).toFixed(2) + 'px');
    // 홈·About 위아래 작은 글자 크기(tk, tka)와 SEOUL·메일 위치 (메일은 SEOUL 바로 아래, 글자 크기에 맞춰)
    var loct = mix(40, 156, t), aloct = phone ? 110 : 40;     // 휴대폰: 전구·EN/KR 아래 (실제 아이폰에서 겹치지 않는 높이)
    set('--pf-tk', tk.toFixed(4)); set('--pf-tka', tka.toFixed(4));
    set('--pf-loct', loct.toFixed(1) + 'px'); set('--pf-mailt', (loct + 22 * tk).toFixed(1) + 'px');
    set('--pf-aloct', aloct + 'px'); set('--pf-amailt', (aloct + 22 * tka).toFixed(1) + 'px');
    set('--pf-bulbr', mix(152, 128, t).toFixed(1) + 'px');
  }
  zoom();
  addEventListener('resize', zoom);

  // 홈 하단 문구(ILLUSTRATION · …): ILLUSTRATOR와의 간격을 위쪽 메일 주소 ↔ JIWOONG CHOI 간격과 같게 (하단 아이콘과는 겹치지 않게)
  var svcDy = 0;
  function alignSvc() {
    var home = document.getElementById('home'); if (!home || !home.offsetHeight) return;
    var mail = home.querySelector('.pf-mail'), name = home.querySelector('h1'), svc = home.querySelector('.pf-svc'), dock = document.querySelector('.pf-dock');
    var role = null; Array.prototype.forEach.call(home.children, function (e) { if (!role && /ILLUSTRATOR/.test(e.textContent) && e !== name) role = e; });
    if (!mail || !name || !svc || !role) return;
    var k = home.getBoundingClientRect().width / home.offsetWidth || 1;   // 화면 px ÷ 디자인 px
    var m = mail.getBoundingClientRect(), n = name.getBoundingClientRect(), r = role.getBoundingClientRect(), s = svc.getBoundingClientRect();
    var y = window.scrollY || 0;                                         // 페이지 기준 좌표로 계산 (스크롤해도 값이 같게)
    var want = r.bottom + y + (n.top - m.bottom);
    if (dock && dock.offsetHeight) want = Math.min(want, dock.getBoundingClientRect().top - 12 - s.height);   // 맨 위에서 볼 때 하단 아이콘 위
    var dy = svcDy + (want - (s.top + y)) / k;
    if (Math.abs(dy - svcDy) > 0.5) { svcDy = dy; d.style.setProperty('--pf-svcdy', dy.toFixed(1) + 'px'); }
    // 글꼴이 다 들어오고 제자리를 잡은 뒤에 부드럽게 보이게 (기본 글꼴 → Archivo로 바뀌며 글자 폭이 움찔하는 것을 숨김)
    if (!svcShown && (svcFont() || Date.now() - svcT0 > 3000)) { svcShown = true; d.style.setProperty('--pf-svcop', '1'); }   // 글꼴이 늦어도 3초 뒤에는 보임
  }
  var svcShown = false, svcT0 = Date.now();
  function svcFont() {   // 하단 문구 글꼴(Archivo 400)이 실제로 들어왔는지
    if (!document.fonts || !document.fonts.forEach) return true;
    var ok = false; document.fonts.forEach(function (f) { if (!ok && f.family.replace(/["']/g, '') === 'Archivo' && f.status === 'loaded' && /^(400|normal)$/.test(String(f.weight))) ok = true; });
    return ok;
  }
  if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener('loadingdone', function () { requestAnimationFrame(alignSvc); });
  // 처음 3초는 매 화면마다 맞춤 (새로고침 직후 글꼴·배치가 자리 잡는 동안 문구가 뚝뚝 움직이지 않게), 그 뒤로는 0.4초마다
  (function early() { alignSvc(); if (Date.now() - svcT0 < 3000) requestAnimationFrame(early); })();
  setInterval(alignSvc, 400); addEventListener('resize', function () { requestAnimationFrame(alignSvc); });

  // 휴대폰 About(한 줄 배치): 첫 화면에는 요정과 그 아래 검은 여백까지만, EXPERIENCE는 첫 화면 바로 아래부터.
  // 경력 칸(휴대폰에서 글자 2배) 높이에 맞춰 클로징 문구 위치와 About 높이를 정함 (site.css의 --pf-aexpt, --pf-aclt, --pf-ah)
  var abSet = '', abShift = 0;
  function alignAbout() {
    if (!d.classList.contains('pf-phone')) return;
    var ab = document.getElementById('about'); if (!ab || !ab.offsetHeight) return;
    var exp = ab.querySelector('.pf-exp'), clo = ab.querySelector('.pf-closing'); if (!exp || !clo) return;
    var k = ab.getBoundingClientRect().width / ab.offsetWidth || 1;      // 화면 px ÷ 디자인 px
    var first = (window.__pfVH || innerHeight) / k;                        // 첫 화면 높이(디자인 px)
    var expT = Math.round(Math.max(908, first + 40)), cloT = expT + exp.offsetHeight + 140, abH = cloT + 480;
    // ABOUT ~ 요정 덩어리를 위 메일 주소와 아래 아이콘 사이 정중앙에 (홈의 JIWOONG CHOI처럼 무게중심이 화면 가운데)
    var col = ab.querySelector('.pf-aboutcol'), mail = ab.querySelector('.pf-mail'), dock = document.querySelector('.pf-dock'), chs = ab.querySelectorAll('.pf-ch');
    if (col && mail && dock && dock.offsetHeight && chs.length) {
      var abTop = ab.getBoundingClientRect().top + (window.scrollY || 0);
      var gT = col.offsetTop, gB = 0; Array.prototype.forEach.call(chs, function (c) { gB = Math.max(gB, c.offsetTop + c.offsetHeight); });   // 배치 값(춤 동작과 무관)
      var mB = (mail.getBoundingClientRect().bottom + (window.scrollY || 0) - abTop) / k, dT = (dock.getBoundingClientRect().top - abTop) / k;
      var sh = Math.round(abShift + ((mB + dT) / 2 - (gT + gB) / 2));
      if (Math.abs(sh - abShift) > 2) { abShift = sh; d.style.setProperty('--pf-ashift', sh + 'px'); }
    }
    var key = expT + ',' + cloT + ',' + abH; if (key === abSet) return; abSet = key;
    d.style.setProperty('--pf-aexpt', expT + 'px'); d.style.setProperty('--pf-aclt', cloT + 'px'); d.style.setProperty('--pf-ah', abH + 'px');
  }
  setInterval(alignAbout, 400); addEventListener('resize', function () { requestAnimationFrame(alignAbout); });

  // 휴대폰(마우스 없음): 클로징 문구 "Let's make / something / memorable!"을 터치하면 그 줄만 연두빛으로 계속 빛남
  addEventListener('click', function (e) {
    if (!(window.matchMedia && matchMedia('(hover: none)').matches)) return;
    var g = e.target && e.target.closest ? e.target.closest('.pf-cltxt .pf-gl') : null; if (!g) return;
    Array.prototype.forEach.call(g.parentNode.querySelectorAll('.pf-gl'), function (x) { x.classList.toggle('pf-lit', x === g); });
  }, true);

  // 전구 효과음: 감독님이 준 "Light Switch - Sound Effect (4K).mp4" 안의 딸깍 소리 두 곳 (켤 때 2.81초, 끌 때 0.72초)
  var snd = null, sndT = 0;
  function bulbAudio() {
    if (!snd) { try { snd = new Audio('assets/1ca167b6450a471f8d79828a910ab7a6.mp4'); snd.preload = 'auto'; snd.load(); } catch (e) { snd = null; } }
    return snd;
  }
  window.__pfBulbSound = function (on) {
    var a = bulbAudio(); if (!a) return;
    try {
      clearTimeout(sndT); a.currentTime = on ? 2.77 : 0.68; a.volume = on ? 0.10 : 0.12;   // 작게: 켤 때(화이트→블랙) 10%, 끌 때 12%
      var p = a.play(); if (p && p.catch) p.catch(function () {});
      sndT = setTimeout(function () { a.pause(); }, 380);   // 다음 소리 전까지만 재생
    } catch (e) {}
  };
  addEventListener('load', function () { setTimeout(bulbAudio, 800); });   // 처음 누를 때 늦지 않게 미리 받아 둠

  // 우클릭 막기 (이미지 저장 방지)
  addEventListener('contextmenu', function (e) { e.preventDefault(); e.stopPropagation(); }, true);
  // 이미지·영상을 끌어서 저장하는 것도 막기
  addEventListener('dragstart', function (e) {
    var t = e.target;
    if (t && (t.tagName === 'IMG' || t.tagName === 'VIDEO')) e.preventDefault();
  }, true);

  // 메일 주소 글자를 누르면 메일 앱 대신 주소를 복사 (About의 메일 버튼 .pf-mailbtn은 메일 앱을 엶)
  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).catch(function () { fallback(text); });
    fallback(text);
  }
  function fallback(text) {
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); } catch (err) {}
    ta.remove();
  }
  addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a[href^="mailto:"]') : null;
    if (!a || a.classList.contains('pf-mailbtn')) return;
    e.preventDefault();
    copy(a.getAttribute('href').replace(/^mailto:/, '').split('?')[0]);
    // 복사됐다는 표시로 살짝 깜빡임
    if (a.animate) a.animate([{ opacity: 1 }, { opacity: .25 }, { opacity: 1 }], { duration: 450, easing: 'ease' });
  }, true);
})();
