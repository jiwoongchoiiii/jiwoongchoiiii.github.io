DC.define("Jelly", "\n\u003clink rel=\"preconnect\" href=\"https://fonts.googleapis.com\"\u003e\n\u003clink href=\"https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700\u0026amp;family=Archivo:wght@400;500;600\u0026amp;display=swap\" rel=\"stylesheet\"\u003e\n\u003cstyle\u003e\nbody{margin:0}\n/* 프로젝트 소개글 · About 소개글: GT America Mono / KR 버전은 이전처럼 Pretendard */\n.pf-mono{font-family:\u0027GT America Mono\u0027,\u0027Archivo\u0027,\u0027Noto Sans KR\u0027,monospace!important}\nhtml.pf-kr .pf-mono{font-family:\u0027Archivo\u0027,\u0027Noto Sans KR\u0027,sans-serif!important}\n@font-face{font-family:\u0027GT America Mono\u0027;src:url(\u0027assets/648a0a7e464315ad89fd338b7396db0c.woff\u0027) format(\u0027woff\u0027);font-weight:400;font-style:normal;font-display:swap}\n@font-face{font-family:\u0027Book Jacket\u0027;src:url(\u0027assets/8473032eff0bf31a2e9a2e9a6ba055bb.woff\u0027) format(\u0027woff\u0027);font-weight:400;font-style:normal;font-display:swap}\na{color:inherit;text-decoration:none}\n@keyframes pf-dim-in{from{background-color:#ffffff}to{background-color:#666666}}\n@keyframes pf-dim-out{from{background-color:#666666}to{background-color:#ffffff}}\n@keyframes pf-sheet-in{from{opacity:0}to{opacity:1}}\n@keyframes pf-sheet-out{from{opacity:1;scale:1}to{opacity:0;scale:.93}}\n@keyframes pf-pop-up{0%{opacity:0;translate:0 32px}70%{opacity:1;translate:0 -4px}100%{opacity:1;translate:0 0}}\n.pf-root{animation:pf-dim-in .5s ease both}\n.pf-sheet{transform-origin:50% 420px;animation:pf-sheet-in .6s cubic-bezier(.22,1,.36,1) both}\n.pf-root.pf-leaving{animation:pf-dim-out .4s ease forwards}\n.pf-leaving .pf-sheet{animation:pf-sheet-out .36s cubic-bezier(.4,0,.7,.2) forwards}\n.pf-close{transition:transform .25s ease,background .25s ease}\n.pf-close:hover{transform:scale(1.08) rotate(90deg);background:#dcdcdc}\n.pf-turn{position:absolute;top:0;bottom:0;width:50%;border:none;padding:0;background:transparent}\n.pf-turn.prev{left:0;cursor:default}\n.pf-turn.next{right:0;cursor:default}\n.pf-turn:disabled{cursor:default}\n@keyframes pf-disA{from{opacity:0}to{opacity:1}}\n@keyframes pf-disB{from{opacity:0}to{opacity:1}}\n@keyframes pf-outA{from{opacity:1}to{opacity:0}}\n@keyframes pf-outB{from{opacity:1}to{opacity:0}}\n.pf-turn:focus,.pf-turn:focus-visible{outline:none;box-shadow:none}\n.pf-turn::-moz-focus-inner{border:0}\n/* 페이지 넘김 안내: 우측 하단 화살표 버튼 + 아래 안내 문구 */\n.pf-pg{position:absolute;bottom:16px;z-index:6;width:44px;height:44px;padding:0;border:1px solid rgba(255,255,255,.55);border-radius:50%;background:rgba(255,255,255,.28);-webkit-backdrop-filter:blur(10px) saturate(1.3);backdrop-filter:blur(10px) saturate(1.3);color:rgba(30,30,30,.72);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.08);transition:transform .2s ease,background .2s ease,color .2s ease,opacity .2s ease}\n.pf-pg svg{mix-blend-mode:multiply}\n.pf-pg:hover{transform:scale(1.08);background:rgba(255,255,255,.55);color:rgba(20,20,20,.9)}\n.pf-pg:disabled{opacity:.25;cursor:default;transform:none}\n@keyframes pf-nudge{0%,100%{translate:0 0}50%{translate:5px 0}}\n.pf-pg.next.pf-hint{animation:pf-nudge 1.2s ease-in-out infinite}\n@media (prefers-reduced-motion:reduce){.pf-sheet{animation:none}}\n/* 한글 소개글: Pretendard */\n@font-face{font-family:\u0027Pretendard\u0027;src:url(assets/94e9dcbf7a120dbf4a1dc68a359aab17.woff2) format(\u0027woff2\u0027);font-weight:400;font-display:swap}\n@font-face{font-family:\u0027Pretendard\u0027;src:url(assets/2971e76d455b9943e02ead31c35fff31.woff2) format(\u0027woff2\u0027);font-weight:500 600;font-display:swap}\n@font-face{font-family:\u0027Pretendard\u0027;src:url(assets/22786dc572d41931623c4e8617d52a1f.woff2) format(\u0027woff2\u0027);font-weight:700 900;font-display:swap}\nhtml.pf-kr .pf-desc,.pf-mono.pf-kr-txt{font-family:\u0027Pretendard\u0027,\u0027Archivo\u0027,sans-serif!important;letter-spacing:0!important}\n/* 소개글: EN·KR 글을 각각 직접 편집 (EN/KR 버튼에 따라 하나만 보임) */\nhtml:not(.pf-kr) .pf-desc .pf-ko,html.pf-kr .pf-desc .pf-en,html:not(.pf-kr) .pf-desc.pf-ko,html.pf-kr .pf-desc.pf-en{display:none}\n\u003c/style\u003e\n", "\n\n\u003cdiv class=\"pf-root\" style=\"background: #666666; color: #2b2b2b; font-family: \u0027Archivo\u0027, system-ui, sans-serif; overflow-x: hidden\"\u003e\n  \u003cdiv style=\"position: relative; width: 1440px; height: 1121px; margin: 0 auto\"\u003e\n    \u003cdiv class=\"pf-sheet\" style=\"position: absolute; left: 22px; top: 22px; width: 1396px; height: 1077px; background: #ffffff; border-radius: 22px; overflow: hidden\"\u003e\n\n      \u003ca class=\"pf-close\" href=\"index.html\" aria-label=\"Close and go home\" style=\"position: absolute; left: 1324px; top: 24px; width: 48px; height: 48px; border-radius: 50%; background: #e9e9e9; box-shadow: 0 6px 18px rgba(0,0,0,.12); display: flex; align-items: center; justify-content: center; color: #2b2b2b\"\u003e\n        \u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M6 6l12 12\"\u003e\u003c/path\u003e\u003cpath d=\"M18 6L6 18\"\u003e\u003c/path\u003e\u003c/svg\u003e\n      \u003c/a\u003e\n\n      \u003ch1 style=\"position: absolute; left: 48px; top: 72px; width: 1300px; margin: 0; text-align: center; white-space: nowrap; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 700; font-size: 76px; line-height: 1; text-transform: uppercase; letter-spacing: -.01em\"\u003eJelly\u003c/h1\u003e\n      \u003cdiv style=\"position: absolute; left: 398px; top: 166px; width: 600px; text-align: center; font-size: 10px; letter-spacing: .14em; color: #767676; text-transform: uppercase\"\u003eCARTOON\u003c/div\u003e\n      \u003cp class=\"pf-desc pf-en\" data-en=\"\" style=\"position: absolute; left: 188px; top: 282px; transform: translateY(-50%); width: 1020px; margin: 0; text-align: center; font-size: 16px; line-height: 1.6; color: #555555\"\u003eJelly is a short comic exploring the small ways we give and receive affection.\u003cbr\u003eIn a fairy village where tossing and catching hearts is a cherished tradition,\u003cbr\u003eJelly stumbles upon a damaged red book that sparks curiosity about the village\u0027s legends.\u003cbr\u003eOne cold night, something mysterious wakes Jelly, drawing Jelly and a snail friend, Grand Duke Charlos, beyond the village.\u003cimg src=\"assets/cece54819c5ede2eab5022db2df24af5.png\" alt=\"\" aria-hidden=\"true\" style=\"position: absolute; left: -8px; top: 28px; width: 42px; height: 73px\"\u003e\u003c/p\u003e\n      \u003cp class=\"pf-desc pf-ko\" data-en=\"\" style=\"position: absolute; left: 188px; top: 282px; transform: translateY(-50%); width: 1020px; margin: 0; text-align: center; font-size: 16px; line-height: 1.6; color: #555555\"\u003e\"Jelly\"는 마음을 주고받는 작은 방식들을 탐구하는 단편 만화입니다.\u003cbr\u003e하트를 던지고 받는 전통이 있는 요정 마을에서, 젤리는 우연히 발견한 훼손된 빨간 책을 읽으며 마을의 전설에 호기심을 품습니다.\u003cbr\u003e어느 차가운 밤, 자신을 깨운 무언가에 이끌려 달팽이 친구 샤를로스 대공과 함께 마을 밖으로 향합니다.\u003c/p\u003e\n\n      \n\n      \u003c!-- 책: 표지 → 속표지 → 본문, 오른쪽 클릭으로 디졸브 넘김 --\u003e\n      \u003cdiv style=\"position: absolute; left: 105px; top: 414px; width: 1186px; height: 580px; border-radius: 16px; overflow: hidden; background: transparent; user-select: none\"\u003e\n        \u003csc-for list=\"{{pages}}\" as=\"pg\" hint-placeholder-count=\"29\"\u003e\n          \u003cimg src=\"{{pg.src}}\" alt=\"{{pg.alt}}\" draggable=\"false\" style=\"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: {{pg.fit}}; background: transparent; opacity: {{pg.op}}; z-index: {{pg.z}}; animation: {{pg.anim}}; pointer-events: none\"\u003e\n        \u003c/sc-for\u003e\n        \u003cbutton class=\"pf-turn prev\" tabindex=\"-1\" onClick=\"{{prevPage}}\" onKeyUp=\"{{noSpace}}\" aria-label=\"Previous page\"\u003e\u003c/button\u003e\n        \u003cbutton class=\"pf-turn next\" tabindex=\"-1\" onClick=\"{{nextPage}}\" onKeyUp=\"{{noSpace}}\" aria-label=\"Next page\"\u003e\u003c/button\u003e\n        \u003cbutton class=\"pf-pg prev\" tabindex=\"-1\" onClick=\"{{prevPage}}\" aria-label=\"Previous page\" style=\"right: 72px; opacity: {{prevOp}}\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M15 6l-6 6 6 6\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\n        \u003cbutton class=\"pf-pg next {{hintCls}}\" tabindex=\"-1\" onClick=\"{{nextPage}}\" aria-label=\"Next page\" style=\"right: 16px; opacity: {{nextOp}}\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M9 6l6 6-6 6\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\n      \u003c/div\u003e\n      \u003cdiv style=\"position: absolute; left: 248px; top: 385px; width: 900px; text-align: center; font-size: 11px; letter-spacing: .08em; color: #9a9a9a\"\u003e{{pageCount}}\u003cspan style=\"margin-left: 12px; color: #b0b0b0\"\u003eClick the → button to turn pages\u003c/span\u003e\u003c/div\u003e\n\n      \u003c!-- 컬러 캐릭터: 사이드 그래픽 요소 --\u003e\n      \n      \n\n      \u003c!-- 초기 캐릭터 스케치 --\u003e\n      \n      \n    \u003c/div\u003e\n  \u003c/div\u003e\n\u003c/div\u003e\n", function (DCLogic) {
class Component extends DCLogic {
  componentDidMount() {
    // EN / KR 번역: 메인 상단 EN·KR 버튼과 연동. 영어 원문 → 한글 사전으로 화면 글자를 바꿈 (제목 h1은 영어 유지)
    if (!window.__pfT) {
      const T = window.__pfT = { dict: {}, busy: false, raf: 0 };
      T.lang = () => { try { return localStorage.getItem('pf-lang') === 'kr' ? 'kr' : 'en'; } catch (e) { return 'en'; } };
      T.apply = () => {
        T.raf = 0; const kr = T.lang() === 'kr'; document.documentElement.classList.toggle('pf-kr', kr); T.busy = true;
        const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n;
        while ((n = w.nextNode())) {
          const p = n.parentElement; if (!p || p.closest('h1, script, style, textarea, [data-en]')) continue;
          if (n.__pfSet !== undefined && n.nodeValue !== n.__pfSet) n.__pfEn = undefined;
          if (n.__pfEn === undefined) n.__pfEn = n.nodeValue;
          const en = n.__pfEn, key = en.trim(); let out = en;
          if (kr && key && Object.prototype.hasOwnProperty.call(T.dict, key)) out = en.replace(key, T.dict[key]);
          if (n.nodeValue !== out) n.nodeValue = out; n.__pfSet = out;
        }
        T.busy = false;
      };
      T.queue = () => { if (!T.raf) T.raf = requestAnimationFrame(T.apply); };
      T.add = (d) => { Object.assign(T.dict, d); T.queue(); };
      try { new MutationObserver(() => { if (!T.busy) T.queue(); }).observe(document.body, { childList: true, subtree: true, characterData: true }); } catch (e) {}
      window.addEventListener('pf-lang', T.queue); window.addEventListener('storage', T.queue);
    }
    window.__pfT.add({});
    this._esc = (e) => { if (e.key !== 'Escape' || this._leaving) return; if (this.state && this.state.view != null) { this.setState({ view: null }); return; } if (document.querySelector('.pf-modal')) return; const a = document.querySelector('.pf-close'); if (a) a.click(); };
    this._leave = (e) => {
      const a = e.target && e.target.closest ? e.target.closest('.pf-close') : null;
      if (!a || this._leaving || a.closest('.pf-modal')) return;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation();
      this._leaving = true;
      const r = document.querySelector('.pf-root'); if (r) r.classList.add('pf-leaving');
      this._lt = setTimeout(() => { a.click(); this._lt2 = setTimeout(() => { this._leaving = false; if (r) r.classList.remove('pf-leaving'); }, 1200); }, 380);
    };
    window.addEventListener('keydown', this._esc);
    // 책 넘기기: 스페이스바는 무시, ← → 방향키로 넘김
    this._keys = (e) => {
      if (e.target && e.target.closest && e.target.closest('input, textarea, [contenteditable]')) return;
      if (e.key === ' ' || e.code === 'Space') { if (e.target && e.target.closest && e.target.closest('.pf-turn')) e.preventDefault(); return; }
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      if (document.querySelector('.pf-modal') && !document.querySelector('.pf-modal .pf-turn')) return;
      e.preventDefault();
      const n = this._n || 1, p = this.state.page;
      const np = e.key === 'ArrowRight' ? Math.min(n - 1, p + 1) : Math.max(0, p - 1);
      if (np !== p) this.setState({ page: np, prev: p, flip: !this.state.flip }); this._clr();
      if (document.activeElement && document.activeElement.blur && document.activeElement.closest && document.activeElement.closest('.pf-turn')) document.activeElement.blur();
    };
    window.addEventListener('keydown', this._keys, true);
    window.addEventListener('click', this._leave, true);
  }
  componentWillUnmount() { window.removeEventListener('keydown', this._keys, true); window.removeEventListener('keydown', this._esc); window.removeEventListener('click', this._leave, true); clearTimeout(this._lt); clearTimeout(this._lt2); clearTimeout(this._pt); }
  constructor(props) { super(props); this.state = { page: 0, prev: -1 }; this._clr = () => { clearTimeout(this._pt); this._pt = setTimeout(() => this.setState({ prev: -1 }), 750); }; }
  renderVals() {
    const PAGES = [
      ['assets/1b40c6e4938d2d946d0de65eff6ecc5a.jpg', 'Jelly, cover', 'cover'],
      ['assets/1352c5a8be8f1130b9508dec86a5a42a.jpg', 'Jelly, page 1', 'contain'],
      ['assets/06c23698398aba8e7efc4d5d9d8bdc95.jpg', 'Jelly, page 2', 'contain'],
      ['assets/f91b3d6d2db5625683cfdbc1a108c474.jpg', 'Jelly, page 3', 'contain'],
      ['assets/08b9dc533282c792ce413d48289c0c16.jpg', 'Jelly, page 4', 'contain'],
      ['assets/4e45c01b57b82b253f3bcab15dc853c3.jpg', 'Jelly, page 5', 'contain'],
      ['assets/80b2901e9dc2ee4901a703d9a4530769.jpg', 'Jelly, page 6', 'contain'],
      ['assets/ff6d8837b8ea17524240660970a39f12.jpg', 'Jelly, page 7', 'contain'],
      ['assets/3ae33d40a9aa78a62f86e8fcb21fcc71.jpg', 'Jelly, page 8', 'contain'],
      ['assets/e79211148e8c52480b680c61f0727fe4.jpg', 'Jelly, page 9', 'contain'],
      ['assets/b769dfc66f2a4dfbd1b62d57da9f06bc.jpg', 'Jelly, page 10', 'contain'],
      ['assets/8b43f80bc1cc607c2b1abc0796c147f4.jpg', 'Jelly, page 11', 'contain'],
      ['assets/31217769f7eb4991b39b401442798da3.jpg', 'Jelly, page 12', 'contain'],
      ['assets/7bf0d390e212f7774eed9bdd3e72c309.jpg', 'Jelly, page 13', 'contain'],
      ['assets/5495c5c8e4c86b1f306af5fb0a9e21d2.jpg', 'Jelly, page 14', 'contain'],
      ['assets/5345716877cf12c50af561ca8de4f8c7.jpg', 'Jelly, page 15', 'contain'],
      ['assets/91a276c4ab3b121864372b64aba05f8a.jpg', 'Jelly, page 16', 'contain'],
      ['assets/e8c3bc39b9653a350a1e3958da95113a.jpg', 'Jelly, page 17', 'contain'],
      ['assets/a56afe741806bb3d76b018da548f6c88.jpg', 'Jelly, page 18', 'contain'],
      ['assets/c904dc79b70d3468dd062728978c9385.jpg', 'Jelly, page 19', 'contain'],
      ['assets/04889cbd2a2ec8ab786ad05580a1fe8e.jpg', 'Jelly, page 20', 'contain'],
      ['assets/6aa82cc92719e929795433a20e6e2f31.jpg', 'Jelly, page 21', 'contain'],
      ['assets/922e7fe134cafca5f27e5e56319315bf.jpg', 'Jelly, page 22', 'contain'],
      ['assets/fd94531c9117eea2d051b9d688fa21be.jpg', 'Jelly, page 23', 'contain'],
      ['assets/07e3ec841b2aeb1fed6f990a99778019.jpg', 'Jelly, page 24', 'contain'],
      ['assets/e2c34fe3311b4d87872b485a598dedd6.jpg', 'Jelly, page 25', 'contain'],
      ['assets/2e5c37d890932a462403b3f99597aec6.jpg', 'Jelly, page 26', 'contain'],
      ['assets/6fb5c9409b4a5b6f10f861b26904d052.jpg', 'Jelly, page 27', 'contain'],
      ['assets/dcba23b8795ba34719894b52199e595c.jpg', 'Jelly, page 28', 'contain']
    ];
    const n = PAGES.length, p = this.state.page;
    this._n = n;
    return {
      // 디졸브: 새 장이 나타나는 동안 이전 장은 함께 사라짐 (여백이 있는 장에서 이전 장이 비쳐 보이지 않게)
      pages: PAGES.map(([src, alt, fit], i) => ({ src, alt, fit,
        op: i === p || i === this.state.prev ? 1 : 0,
        z: i === p ? 3 : (i === this.state.prev ? 2 : 1),
        anim: i === p && this.state.prev >= 0 ? `pf-dis${this.state.flip ? 'A' : 'B'} .7s ease both`
          : (i === this.state.prev ? `pf-out${this.state.flip ? 'A' : 'B'} .4s ease both` : 'none') })),
      pageCount: `${p + 1} / ${n}`,
      prevOp: p === 0 ? .2 : .75, nextOp: p === n - 1 ? .2 : .75, hintCls: p === 0 ? 'pf-hint' : '',
      noSpace: (e) => { if (e.key === ' ' || e.code === 'Space') e.preventDefault(); },
      prevPage: (e) => { if (e && e.currentTarget && e.currentTarget.blur) e.currentTarget.blur(); if (p > 0) this.setState({ page: p - 1, prev: p, flip: !this.state.flip }); this._clr(); },
      nextPage: (e) => { if (e && e.currentTarget && e.currentTarget.blur) e.currentTarget.blur(); if (p < n - 1) this.setState({ page: p + 1, prev: p, flip: !this.state.flip }); this._clr(); }
    };
  }
}
return Component;
});
