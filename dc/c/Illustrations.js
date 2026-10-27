DC.define("Illustrations", "\n\u003clink rel=\"preconnect\" href=\"https://fonts.googleapis.com\"\u003e\n\u003clink href=\"https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700\u0026amp;family=Archivo:wght@400;500;600\u0026amp;display=swap\" rel=\"stylesheet\"\u003e\n\u003cstyle\u003e\nbody{margin:0}\na{color:inherit;text-decoration:none}\n@keyframes pf-dim-in{from{background-color:#ffffff}to{background-color:#666666}}\n@keyframes pf-dim-out{from{background-color:#666666}to{background-color:#ffffff}}\n@keyframes pf-sheet-in{from{opacity:0}to{opacity:1}}\n@keyframes pf-sheet-out{from{opacity:1;scale:1}to{opacity:0;scale:.93}}\n@keyframes pf-pop-up{0%{opacity:0;translate:0 32px}70%{opacity:1;translate:0 -4px}100%{opacity:1;translate:0 0}}\n.pf-root{animation:pf-dim-in .5s ease both}\n.pf-sheet{transform-origin:50% 420px;animation:pf-sheet-in .6s cubic-bezier(.22,1,.36,1) both}\n.pf-root.pf-leaving{animation:pf-dim-out .4s ease forwards}\n.pf-leaving .pf-sheet{animation:pf-sheet-out .36s cubic-bezier(.4,0,.7,.2) forwards}\n.pf-close{transition:transform .25s ease,background .25s ease}\n.pf-close:hover{transform:scale(1.08) rotate(90deg);background:#dcdcdc}\n.pf-shot{transition:transform .5s cubic-bezier(.22,1,.36,1);cursor:zoom-in}\n.pf-tab{transition:background .2s ease,color .2s ease,transform .2s ease}\n.pf-tab:hover{transform:translateY(-2px)}\n.pf-card:hover{scale:1.02}\n.pf-shot:hover{transform:translateY(-6px) rotate(-1deg) scale(1.02)}\n.pf-next{transition:transform .4s cubic-bezier(.22,1,.36,1)}\n.pf-next:hover{transform:translateX(10px)}\n.pf-round{transition:transform .2s ease,background .2s ease}\n.pf-round:hover{transform:scale(1.08);background:#dcdcdc}\n@keyframes pf-fade{from{opacity:0}to{opacity:1}}\n.pf-viewer{animation:pf-fade .35s ease both}\n.pf-track{transition:transform .6s cubic-bezier(.22,1,.36,1)}\n@media (prefers-reduced-motion:reduce){.pf-sheet,.pf-viewer{animation:none}.pf-track{transition:none}}\n.pf-round{transition:transform .2s ease,background .2s ease}\n.pf-round:hover{transform:scale(1.08);background:#dcdcdc}\n.pf-track{transition:transform .6s cubic-bezier(.22,1,.36,1)}\n/* 이미지 크게 보기: 메인 More Work 팝업과 같은 블랙 60% 배경 + 흰 박스(위아래 여백 128) */\n@keyframes pf-vbg-in{from{opacity:0}to{opacity:1}}\n@keyframes pf-vbox-in{0%{opacity:0;scale:.9;translate:0 30px}55%{opacity:1;scale:1.012;translate:0 -3px}100%{opacity:1;scale:1;translate:0 0}}\n.pf-viewer{animation:none!important}\n.pf-vbg{animation:pf-vbg-in .45s ease both}\n.pf-vbox{animation:pf-vbox-in .6s cubic-bezier(.22,1,.36,1) backwards}\n.pf-vclose{transition:transform .25s ease,background .25s ease}\n.pf-vclose:hover{transform:scale(1.08) rotate(90deg);background:#dcdcdc}\n@media (prefers-reduced-motion:reduce){.pf-vbg,.pf-vbox{animation:none}}\n/* 영상 카드(Captain Son) 썸네일 오른쪽 위 재생 버튼: Jelly 책 화살표 버튼(.pf-pg)과 같은 반투명 유리 재질 (56px 기준으로 그리고 0.54배) */\n.pf-play{position:absolute;right:12px;top:12px;width:56px;height:56px;scale:.54;transform-origin:100% 0;box-sizing:border-box;border:1px solid rgba(255,255,255,.22);border-radius:50%;background:rgba(0,0,0,.32);-webkit-backdrop-filter:blur(10px) saturate(1.3);backdrop-filter:blur(10px) saturate(1.3);color:#ffffff;box-shadow:0 4px 14px rgba(0,0,0,.08);pointer-events:none;transition:transform .2s ease,background .2s ease}\n.pf-play svg{position:absolute;left:-1px;top:-1px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.12))}\n.pf-card:hover .pf-play{transform:scale(1.08);background:rgba(0,0,0,.48)}\n\u003c/style\u003e\n", "\n\n\u003cdiv class=\"pf-root\" style=\"background: #666666; color: #2b2b2b; font-family: \u0027Archivo\u0027, system-ui, sans-serif; overflow-x: hidden\"\u003e\n  \u003cdiv style=\"position: relative; width: 1440px; height: {{wrapH}}; margin: 0 auto\"\u003e\n    \u003cdiv class=\"pf-sheet\" style=\"position: absolute; left: 22px; top: 22px; width: 1396px; height: {{sheetH}}; background: #ffffff; border-radius: 22px; overflow: hidden\"\u003e\n\n      \u003ca class=\"pf-close\" href=\"index.html\" aria-label=\"Close and go home\" style=\"position: absolute; left: 1324px; top: 24px; width: 48px; height: 48px; border-radius: 50%; background: #e9e9e9; box-shadow: 0 6px 18px rgba(0,0,0,.12); display: flex; align-items: center; justify-content: center; color: #2b2b2b\"\u003e\n        \u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M6 6l12 12\"\u003e\u003c/path\u003e\u003cpath d=\"M18 6L6 18\"\u003e\u003c/path\u003e\u003c/svg\u003e\n      \u003c/a\u003e\n\n      \u003ch1 style=\"position: absolute; left: 48px; top: 72px; width: 1300px; margin: 0; text-align: center; white-space: nowrap; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 700; font-size: 76px; line-height: 1; text-transform: uppercase; letter-spacing: -.01em\"\u003eIllustrations\u003c/h1\u003e\n      \u003cdiv style=\"position: absolute; left: 398px; top: 166px; width: 600px; text-align: center; font-size: 10px; letter-spacing: .14em; color: #767676; text-transform: uppercase\"\u003eIllustration · Personal\u003c/div\u003e\n\n\n      \u003cdiv style=\"position: absolute; left: 98px; top: 242px; width: 1200px; display: flex; justify-content: flex-start; gap: 10px\"\u003e\n        \u003csc-for list=\"{{tabs}}\" as=\"t\" hint-placeholder-count=\"4\"\u003e\n          \u003cbutton class=\"pf-tab\" onClick=\"{{t.pick}}\" style=\"height: 42px; padding: 0 20px; border: none; border-radius: 999px; cursor: pointer; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 13px; letter-spacing: .06em; text-transform: uppercase; background: {{t.bg}}; color: {{t.fg}}\"\u003e{{t.label}} \u003cspan style=\"opacity: .55; margin-left: 4px\"\u003e{{t.n}}\u003c/span\u003e\u003c/button\u003e\n        \u003c/sc-for\u003e\n      \u003c/div\u003e\n      \u003cdiv class=\"pf-grid\" ref=\"{{gridRef}}\" style=\"position: absolute; left: 98px; top: 322px; width: 1200px; height: {{gridH}}\"\u003e\n        \u003csc-for list=\"{{cards}}\" as=\"c\" hint-placeholder-count=\"16\"\u003e\n          \u003cdiv class=\"pf-card\" onPointerDown=\"{{c.down}}\" onContextMenu=\"{{c.ctx}}\" style=\"position: absolute; left: {{c.x}}; top: {{c.y}}; width: {{c.w}}; height: {{c.h}}; border-radius: 16px; overflow: hidden; background: #eeeeee; box-shadow: 0 18px 40px rgba(0,0,0,.14), 0 4px 10px rgba(0,0,0,.06); transform: {{c.tf}}; z-index: {{c.z}}; transition: {{c.tr}}; cursor: {{c.cur}}; touch-action: none; user-select: none; -webkit-user-select: none\"\u003e\n            \u003csc-if value=\"{{c.vid}}\" hint-placeholder-val=\"{{ false }}\"\u003e\u003cvideo src=\"assets/35fd83cdef53241f0a5968bdcd2723f2.mp4\" poster=\"assets/b00b7e8644257ae1eed6f9d564bdb589.jpg\" autoplay=\"\" muted=\"\" loop=\"\" playsinline=\"\" aria-label=\"Animated illustration\" style=\"display: block; width: 100%; height: 100%; object-fit: cover; pointer-events: none\"\u003e\u003c/video\u003e\u003c/sc-if\u003e\n            \u003csc-if value=\"{{c.img}}\" hint-placeholder-val=\"{{ true }}\"\u003e\u003cimg src=\"{{c.src}}\" alt=\"Illustration\" draggable=\"false\" style=\"display: block; width: 100%; height: 100%; object-fit: cover; object-position: {{c.pos}}; pointer-events: none\"\u003e\u003c/sc-if\u003e\n            \u003csc-if value=\"{{c.play}}\" hint-placeholder-val=\"{{ false }}\"\u003e\u003cspan class=\"pf-play\" aria-hidden=\"true\"\u003e\u003csvg width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"currentColor\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"\u003e\u003cpath d=\"M23.5 19L38 28L23.5 37Z\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/span\u003e\u003c/sc-if\u003e\n            \u003csc-if value=\"{{c.gif}}\" hint-placeholder-val=\"{{ false }}\"\u003e\u003cspan class=\"pf-gif\" aria-hidden=\"true\"\u003eGIF\u003c/span\u003e\u003c/sc-if\u003e\n          \u003c/div\u003e\n        \u003c/sc-for\u003e\n      \u003c/div\u003e\n\n    \u003c/div\u003e\n\n    \u003csc-if value=\"{{menuOn}}\" hint-placeholder-val=\"{{ false }}\"\u003e\n      \u003cdiv onClick=\"{{menuClose}}\" onContextMenu=\"{{menuClose}}\" style=\"position: fixed; inset: 0; z-index: 95\"\u003e\u003c/div\u003e\n      \u003cdiv style=\"position: fixed; left: {{menuX}}; top: {{menuY}}; z-index: 96; min-width: 160px; padding: 6px; background: #ffffff; border-radius: 12px; box-shadow: 0 12px 32px rgba(0,0,0,.22), 0 0 0 1px rgba(0,0,0,.06); font-family: \u0027Archivo\u0027, sans-serif; font-size: 13px\"\u003e\n        \u003cbutton onClick=\"{{menuDelete}}\" style=\"display: block; width: 100%; padding: 9px 12px; border: none; border-radius: 8px; background: transparent; color: #d93025; text-align: left; cursor: pointer\"\u003eDelete image\u003c/button\u003e\n      \u003c/div\u003e\n    \u003c/sc-if\u003e\n    \u003csc-if value=\"{{viewing}}\" hint-placeholder-val=\"{{ false }}\"\u003e\n      \u003cdiv class=\"pf-viewer\" ref=\"{{vRef}}\" style=\"position: fixed; left: 0; right: 0; top: {{vTop}}px; height: {{vH}}; visibility: {{vVis}}; z-index: 100; display: flex; align-items: center; justify-content: center\"\u003e\n        \u003cdiv class=\"pf-vbg\" onClick=\"{{vClose}}\" aria-hidden=\"true\" style=\"position: absolute; inset: 0; background: rgba(0,0,0,.6); -webkit-backdrop-filter: blur(24px); backdrop-filter: blur(24px)\"\u003e\u003c/div\u003e\n        \u003cdiv class=\"pf-vbox\" style=\"position: relative; width: 100%; height: 100%; overflow: hidden; pointer-events: none\"\u003e\n          \u003cdiv style=\"position: absolute; inset: 0; overflow: hidden\"\u003e\n            \u003cdiv class=\"pf-track\" style=\"display: flex; width: 100%; height: 100%; transform: {{trackX}}; transition: {{trackTrans}}\"\u003e\n              \u003csc-for list=\"{{items}}\" as=\"it\" hint-placeholder-count=\"34\"\u003e\n                \u003cdiv style=\"flex: 0 0 100%; height: 100%; display: flex; align-items: center; justify-content: center; box-sizing: border-box; padding: 60px 120px\"\u003e\n                  \u003csc-if value=\"{{it.img}}\" hint-placeholder-val=\"{{ true }}\"\u003e\u003cdiv class=\"pf-vcard\"\u003e\u003cimg src=\"{{it.src}}\" alt=\"{{it.cap}}\" draggable=\"false\"\u003e\u003cbutton class=\"pf-vbtn pf-vx2\" onClick=\"{{vClose}}\" aria-label=\"Close viewer\"\u003e\u003csvg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M6 6l12 12\"\u003e\u003c/path\u003e\u003cpath d=\"M18 6L6 18\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003cbutton class=\"pf-vbtn pf-vprev\" onClick=\"{{vPrev}}\" aria-label=\"Previous\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M15 6l-6 6 6 6\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003cbutton class=\"pf-vbtn pf-vnext\" onClick=\"{{vNext}}\" aria-label=\"Next\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M9 6l6 6-6 6\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003c/div\u003e\u003c/sc-if\u003e\u003csc-if value=\"{{it.vid}}\" hint-placeholder-val=\"{{ false }}\"\u003e\u003cdiv style=\"height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px\"\u003e\u003cdiv class=\"pf-vwrap pf-vcard\" style=\"position: relative; height: calc(100% - 60px); aspect-ratio: 1080 / 1920; border-radius: 16px; overflow: hidden; background: transparent\"\u003e\u003cvideo src=\"{{it.vsrc}}\" data-pf-ctl=\"\" data-pf-cs=\"{{it.cur}}\" disablepictureinpicture=\"\" playsinline=\"\" preload=\"auto\" style=\"display: block; width: 100%; height: 100%; object-fit: cover; background: transparent\"\u003e\u003c/video\u003e\u003cbutton class=\"pf-vbtn pf-vx2\" onClick=\"{{vClose}}\" aria-label=\"Close viewer\"\u003e\u003csvg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M6 6l12 12\"\u003e\u003c/path\u003e\u003cpath d=\"M18 6L6 18\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003cbutton class=\"pf-vbtn pf-vprev pf-vup\" onClick=\"{{vPrev}}\" aria-label=\"Previous\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M15 6l-6 6 6 6\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003cbutton class=\"pf-vbtn pf-vnext pf-vup\" onClick=\"{{vNext}}\" aria-label=\"Next\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M9 6l6 6-6 6\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003c/div\u003e\u003cdiv style=\"flex: none; max-width: 680px; text-align: center\"\u003e\u003cdiv style=\"font-size: 10px; line-height: 14px; letter-spacing: .14em; text-transform: uppercase; font-weight: 600; color: rgba(255,255,255,.9)\"\u003e{{it.ttl}}\u003c/div\u003e\u003cdiv style=\"margin-top: 6px; font-size: 11px; line-height: 16px; letter-spacing: .06em; color: rgba(255,255,255,.65)\"\u003e{{it.cap}}\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\u003c/sc-if\u003e\n                \u003c/div\u003e\n              \u003c/sc-for\u003e\n            \u003c/div\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n      \u003c/div\u003e\n    \u003c/sc-if\u003e\n  \u003c/div\u003e\n\u003c/div\u003e\n", function (DCLogic) {
const DEFAULT_ORDER = ["976720c8119c859c127c70a7d65d4e61", "68734f03ce85c1f68a51cabd21a890f4", "b2e4a32303234e8b75fb59f74b3c9cd0", "f7f920ca3e6a237cc31c792a5d2deb6c", "9376c91f73a59cb9952818edf3418a28", "076234fe30507020618b8f198132d5bc", "2927dcc89f550a5d4efda22a991a4948", "1d98721ecb338635682ceb9921a1daa6", "VIDEO", "9e580f70fa7db2426635931302bc946a", "f2e993bff614085294c215e89b51029e", "a419b7b44e236127f8789884172aff60", "5c08549665f6211fb7727efe526e5a3c", "3648ce536a21a2c5f03ceec0da93016c", "f6725c870280ecc24d096b346b08a2ab", "b88ea5b869237501b633294e41fe13e4", "4a81482106b362ab924f3a3cf8d3c5b6", "a746116253a27250fcb46e6c38ed64e3", "1a8a280516e7fc55338c12639073bbbd", "a13deec518914497c1b83cb93d62e9db", "b23e6824068e0cac6f5e480025b17043", "08ad5e2b7e346bb79ab0481accbd7615", "b4f6fcd573e3aa43a4f81b7ee540b498", "e856367bfc4f9f79e0696dd56aa33978", "5392f4510f0263d171e36cd8c24a5a2b", "b142772a290f66839ebe623b02c60103", "0d2c76911d1f96f105a77ece11679c45", "dbfe5bd7d5f20e8f667f87691ca489c2", "75b26cefe11fd9117e25927bfa287af2", "d26b741e70603fefdf1f24d03e448d4b", "3ba5df1429052a1a1fe585d2b70c9e20", "21a0b5ccce789ae4df9f1ab73b5c6b34", "dd446678d07e94b3a5dfd01f04267a72", "0a86fec3518fff3cc2de793c8ca23d10", "c64737976120c95a6cced34b430e4095", "31b7d590591b53c171638c87f451421b", "b4e554d96f49a8eee73942067c764ad2", "5b7cf4464fc9d9f7a8e56241644b37eb", "d91186e77b34b08155f2f32ef7919d26", "555f44c0ced99f69f0effb7890465380", "be7681d3aa34e10d558c0204711efd6b", "64d918960b5d68982427aab8b3d2807d", "164650e947cb772a20f4e88e9f97f6cb", "d7f9a9a42b39f86ae8083441b66d9a52", "7cd0bd6704198ea414059b752b77c749", "011c8781e9ecd1e02396ffadc65b0dc9", "0513ec3d34611b996d3ba328852431b0", "c2118dde2e4f3b3a90fc259693b91db6", "5bb916b34b85151dbcac9ed6dfe9396f", "a61eeebe60db571924feed64f947b07f", "3b57b5dd0eb4dffc9233f0e90a7949d3"];
const DEFAULT_CATS = [];
// 섹션 구성 (탭 순서): Toon / Paint / Cats / Doodles
const R0 = {"9e580f70fa7db2426635931302bc946a": 0.72, "f2e993bff614085294c215e89b51029e": 0.7072, "a419b7b44e236127f8789884172aff60": 0.7072, "3648ce536a21a2c5f03ceec0da93016c": 0.7072, "f6725c870280ecc24d096b346b08a2ab": 1.0, "b88ea5b869237501b633294e41fe13e4": 1.414, "5c08549665f6211fb7727efe526e5a3c": 1.414, "b4f6fcd573e3aa43a4f81b7ee540b498": 1.414, "1a8a280516e7fc55338c12639073bbbd": 1.0, "e856367bfc4f9f79e0696dd56aa33978": 1.0, "5392f4510f0263d171e36cd8c24a5a2b": 1.0, "a13deec518914497c1b83cb93d62e9db": 2.0, "b23e6824068e0cac6f5e480025b17043": 1.0, "08ad5e2b7e346bb79ab0481accbd7615": 1.0, "4a81482106b362ab924f3a3cf8d3c5b6": 0.75, "a746116253a27250fcb46e6c38ed64e3": 1.0, "7cd0bd6704198ea414059b752b77c749": 1.0, "011c8781e9ecd1e02396ffadc65b0dc9": 1.0}; // 미리 잰 이미지 비율 (처음부터 정확한 배치)
// 목록용 작은 이미지 (긴 변 900px). 크게 보기는 원본, 움직이는 GIF는 가벼운 WebP로
const ILL_TH = {'011c8781e9ecd1e02396ffadc65b0dc9': '4ff000ce35fa71b6627cc6e202d55226', '0513ec3d34611b996d3ba328852431b0': 'ff0a9703ec69f019d43d5f70eb8a1fa3', '076234fe30507020618b8f198132d5bc': '1640cb32ca62eacaacb5631ba2c36b55', '08ad5e2b7e346bb79ab0481accbd7615': '93c9f91c92233d6a87bf292aa96d6f2f', '0a86fec3518fff3cc2de793c8ca23d10': '458899a49468b8235a947c06088bb607', '0d2c76911d1f96f105a77ece11679c45': '2bce2869d91fcd194443bcfd1701da87', '164650e947cb772a20f4e88e9f97f6cb': '0b47f677e1a0af2242577e0e068f8c74', '1a8a280516e7fc55338c12639073bbbd': 'd2576f358e38925bff4de9a19b0168a6', '1d98721ecb338635682ceb9921a1daa6': 'a95881755101f9c9d7523549e4f27164', '21a0b5ccce789ae4df9f1ab73b5c6b34': '7d133517a5e797937f148fe1aa7ec00a', '2927dcc89f550a5d4efda22a991a4948': '5b3e542ae9291e5062bbbf3b014d2ae2', '31b7d590591b53c171638c87f451421b': 'e33c6866b7fef4d53d31fa107bc7e256', '3648ce536a21a2c5f03ceec0da93016c': 'b7c181b822cd334bcda03e2e9a09e68b', '3b57b5dd0eb4dffc9233f0e90a7949d3': 'bd9a3489b6e6805e84c8c49438e73f2f', '3ba5df1429052a1a1fe585d2b70c9e20': '6cb16186647b4c157a5503a3ee2f6a4d', '4a81482106b362ab924f3a3cf8d3c5b6': 'c5d5d903515987310d6bf1bd5fefe93e', '5392f4510f0263d171e36cd8c24a5a2b': '4f8483966025988fff174f159ea4fd53', '555f44c0ced99f69f0effb7890465380': 'a51241b892a82689463a79725d8d871d', '5b7cf4464fc9d9f7a8e56241644b37eb': '00af12d44e1dfc6e85b500d4d5f3770e', '5bb916b34b85151dbcac9ed6dfe9396f': '6e2a0b1df063194d9be0a36025f809bb', '5c08549665f6211fb7727efe526e5a3c': 'd7d96060d1a451390410b113286b6001', '64d918960b5d68982427aab8b3d2807d': '3202bfb13bcab4c4fc8a978945beda43', '68734f03ce85c1f68a51cabd21a890f4': 'f8d5d0932f536eca275a8d00047f5f38', '75b26cefe11fd9117e25927bfa287af2': 'cd8d053488927f86366c1314a84b0660', '7cd0bd6704198ea414059b752b77c749': 'e858b937ca83b04c5f0b1fe0873780db', '9376c91f73a59cb9952818edf3418a28': '2c04b7651be03300b5c5a987bef9fefe', '976720c8119c859c127c70a7d65d4e61': 'ed037cdb7a482b6f5eadc8c3eb3a02f4', '9e580f70fa7db2426635931302bc946a': '2ef659305b73559a98a8c300c9a236f7', 'a13deec518914497c1b83cb93d62e9db': '9c78468855f9fc4cef69a465f699d3d2', 'a419b7b44e236127f8789884172aff60': '212a8495833b62caa5ce6745956bed42', 'a61eeebe60db571924feed64f947b07f': 'c6a53ac4357b19e747625205bf790644', 'a746116253a27250fcb46e6c38ed64e3': '6ba5828ff204947461f5f4eb013e16fe', 'b142772a290f66839ebe623b02c60103': 'b026ba26935010354351c6ab074f86c3', 'b23e6824068e0cac6f5e480025b17043': '65c3b2b8868f322c3349e97cd7ccf4d3', 'b2e4a32303234e8b75fb59f74b3c9cd0': '3ebf6af58d5d749aa1011cae8bc51e5b', 'b4e554d96f49a8eee73942067c764ad2': '40862891254cd1d4a52cb72b84aa9694', 'b4f6fcd573e3aa43a4f81b7ee540b498': '668b29d29f9962e57437d7d0ae69191e', 'b88ea5b869237501b633294e41fe13e4': '54a8a5be900b684e74daf48fddf2a6d4', 'be7681d3aa34e10d558c0204711efd6b': 'b043eaef61879624e675bbb8327bd47d', 'c2118dde2e4f3b3a90fc259693b91db6': '3fa8c94e96d3dfbfccdd1b5faf054a89', 'c64737976120c95a6cced34b430e4095': '51163ea632e8930aea1374498eaf51b9', 'd26b741e70603fefdf1f24d03e448d4b': 'e72d3a736a2a03be69eb62b521e149cb', 'd7f9a9a42b39f86ae8083441b66d9a52': 'f9246cac448b5fe3cb4f9deacaa04379', 'd91186e77b34b08155f2f32ef7919d26': '4e2badd8e18820dd80801813f58f1049', 'dbfe5bd7d5f20e8f667f87691ca489c2': '910ed3d0d39e279858fdffdbcd3af0ab', 'dd446678d07e94b3a5dfd01f04267a72': 'deba7b5bc567fddef7103a702d6f3637', 'e856367bfc4f9f79e0696dd56aa33978': '31823e12329da04530e4ac04e2979618', 'f2e993bff614085294c215e89b51029e': '7d15a8b584821b7f17081b30829e37ec', 'f6725c870280ecc24d096b346b08a2ab': '0a79f96090c9f98df85f0ae8e29d48e3', 'f7f920ca3e6a237cc31c792a5d2deb6c': 'c0cdb8714783c3e0b5a05ed974d33525'};
const ILL_ANIM = {'a746116253a27250fcb46e6c38ed64e3': '6ba5828ff204947461f5f4eb013e16fe'};
const SECTIONS = [['line', 'Toon'], ['paint', 'Paint'], ['cats', 'Cats'], ['doodle', 'Doodles']];
const SEC_ITEMS = {"line": ["9e580f70fa7db2426635931302bc946a", "f2e993bff614085294c215e89b51029e", "a419b7b44e236127f8789884172aff60", "3648ce536a21a2c5f03ceec0da93016c", "f6725c870280ecc24d096b346b08a2ab", "b88ea5b869237501b633294e41fe13e4", "5c08549665f6211fb7727efe526e5a3c", "b4f6fcd573e3aa43a4f81b7ee540b498", "1a8a280516e7fc55338c12639073bbbd", "e856367bfc4f9f79e0696dd56aa33978", "5392f4510f0263d171e36cd8c24a5a2b", "a13deec518914497c1b83cb93d62e9db", "b23e6824068e0cac6f5e480025b17043", "08ad5e2b7e346bb79ab0481accbd7615", "4a81482106b362ab924f3a3cf8d3c5b6", "a746116253a27250fcb46e6c38ed64e3", "7cd0bd6704198ea414059b752b77c749", "011c8781e9ecd1e02396ffadc65b0dc9"], "paint": ["976720c8119c859c127c70a7d65d4e61", "68734f03ce85c1f68a51cabd21a890f4", "VIDEO", "f7f920ca3e6a237cc31c792a5d2deb6c", "9376c91f73a59cb9952818edf3418a28", "b4e554d96f49a8eee73942067c764ad2", "b2e4a32303234e8b75fb59f74b3c9cd0", "c2118dde2e4f3b3a90fc259693b91db6", "5bb916b34b85151dbcac9ed6dfe9396f", "a61eeebe60db571924feed64f947b07f", "3b57b5dd0eb4dffc9233f0e90a7949d3", "0513ec3d34611b996d3ba328852431b0"], "cats": ["dbfe5bd7d5f20e8f667f87691ca489c2", "75b26cefe11fd9117e25927bfa287af2", "d26b741e70603fefdf1f24d03e448d4b", "3ba5df1429052a1a1fe585d2b70c9e20", "c64737976120c95a6cced34b430e4095", "31b7d590591b53c171638c87f451421b", "21a0b5ccce789ae4df9f1ab73b5c6b34", "0a86fec3518fff3cc2de793c8ca23d10", "dd446678d07e94b3a5dfd01f04267a72"], "doodle": ["076234fe30507020618b8f198132d5bc", "2927dcc89f550a5d4efda22a991a4948", "1d98721ecb338635682ceb9921a1daa6", "5b7cf4464fc9d9f7a8e56241644b37eb", "d91186e77b34b08155f2f32ef7919d26", "555f44c0ced99f69f0effb7890465380", "be7681d3aa34e10d558c0204711efd6b", "64d918960b5d68982427aab8b3d2807d", "164650e947cb772a20f4e88e9f97f6cb"]};
const CARD_POS = {"976720c8119c859c127c70a7d65d4e61": "58% 50%", "68734f03ce85c1f68a51cabd21a890f4": "50% 50%", "b2e4a32303234e8b75fb59f74b3c9cd0": "45% 50%", "f7f920ca3e6a237cc31c792a5d2deb6c": "50% 50%", "9376c91f73a59cb9952818edf3418a28": "50% 50%", "076234fe30507020618b8f198132d5bc": "45% 50%", "2927dcc89f550a5d4efda22a991a4948": "50% 50%", "1d98721ecb338635682ceb9921a1daa6": "50% 50%", "VIDEO": "50% 50%", "9e580f70fa7db2426635931302bc946a": "50% 50%", "f2e993bff614085294c215e89b51029e": "50% 50%", "a419b7b44e236127f8789884172aff60": "50% 50%", "5c08549665f6211fb7727efe526e5a3c": "45% 50%", "3648ce536a21a2c5f03ceec0da93016c": "50% 50%", "f6725c870280ecc24d096b346b08a2ab": "50% 50%", "b88ea5b869237501b633294e41fe13e4": "50% 50%", "4a81482106b362ab924f3a3cf8d3c5b6": "50% 50%", "a746116253a27250fcb46e6c38ed64e3": "50% 50%", "1a8a280516e7fc55338c12639073bbbd": "50% 50%", "a13deec518914497c1b83cb93d62e9db": "62% 50%", "b23e6824068e0cac6f5e480025b17043": "50% 50%", "08ad5e2b7e346bb79ab0481accbd7615": "50% 50%", "b4f6fcd573e3aa43a4f81b7ee540b498": "50% 50%", "e856367bfc4f9f79e0696dd56aa33978": "50% 50%", "5392f4510f0263d171e36cd8c24a5a2b": "50% 50%"};
class Component extends DCLogic {
  componentDidMount() {
    // 모든 탭의 목록 이미지를 뒤에서 2장씩 미리 받아 둠 → 탭을 바꿔도 바로 보임
    this._pre = setTimeout(() => { const q = Object.values(ILL_TH).map((v) => __blob(v)); const next = () => { const src = q.shift(); if (!src || this._gone) return; const im = new Image(); im.decoding = 'async'; im.onload = im.onerror = next; im.src = src; }; next(); next(); }, 500);
    // 영상 컨트롤: 브라우저 기본 컨트롤 대신 직접 만든 막대 (재생 · 시간 · 진행바 · 음량은 맨 오른쪽). 기본 전체화면 버튼이 아예 없음
    if (!window.__pfCtl1) { window.__pfCtl1 = true;
      const st = document.createElement('style');
      st.textContent = '.pf-ctl{position:absolute;left:0;right:0;bottom:0;z-index:5;display:flex;align-items:center;gap:10px;padding:22px 12px 10px;background:linear-gradient(to top,rgba(0,0,0,.6),rgba(0,0,0,0));color:#ffffff;font:600 12px/1 Archivo,system-ui,sans-serif;opacity:0;transition:opacity .2s ease}'
        + '.pf-vwrap:hover .pf-ctl,.pf-vxo:hover .pf-ctl,.pf-ctl.pf-paused,.pf-ctl:focus-within{opacity:1}'
        + '.pf-ctl button{flex:none;width:30px;height:30px;padding:0;border:none;border-radius:6px;background:transparent;color:#ffffff;display:flex;align-items:center;justify-content:center;cursor:pointer}'
        + '.pf-ctl button:hover{background:rgba(255,255,255,.18)}'
        + '.pf-ctl .pf-c-t{flex:none;min-width:74px;font-variant-numeric:tabular-nums;white-space:nowrap}'
        + '.pf-ctl input[type=range]{margin:0;height:16px;accent-color:#ffffff;cursor:pointer;background:transparent}'
        + '.pf-ctl .pf-c-seek{flex:1;min-width:40px}'
        + '.pf-ctl .pf-c-vol{flex:none;width:0;opacity:0;transition:width .2s ease,opacity .2s ease}'
        + '.pf-ctl .pf-c-vg{display:flex;align-items:center;gap:4px;margin-left:auto}'
        + '.pf-ctl .pf-c-vg:hover .pf-c-vol,.pf-ctl .pf-c-vol:focus{width:72px;opacity:1}'
        + 'video[data-pf-ctl]{cursor:pointer}';
      document.head.appendChild(st);
      const I = (d, f) => '<svg width="18" height="18" viewBox="0 0 24 24" fill="' + (f ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="' + (f ? 0 : 2) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
      const PLAY = I('<path d="M8 5v14l11-7z"></path>', 1), PAUSE = I('<path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"></path>', 1);
      const VOL = I('<path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"></path><path d="M16 9a4 4 0 0 1 0 6"></path><path d="M18.5 6.5a7.5 7.5 0 0 1 0 11"></path>');
      const MUTE = I('<path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"></path><path d="M17 9l5 6"></path><path d="M22 9l-5 6"></path>');
      const fmt = (s) => { s = Math.max(0, Math.floor(s || 0)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
      const enhance = (v, host) => {
        if (!v || v.__pfCtl) return; v.__pfCtl = true;
        v.controls = false; v.removeAttribute('controls');
        host = host || v.parentElement; if (!host) return;
        const bar = document.createElement('div'); bar.className = 'pf-ctl';
        bar.innerHTML = '<button class="pf-c-play" aria-label="Play"></button><span class="pf-c-t">0:00 / 0:00</span><input class="pf-c-seek" type="range" min="0" max="1000" step="1" value="0" aria-label="Seek"><span class="pf-c-vg"><input class="pf-c-vol" type="range" min="0" max="1" step="0.05" aria-label="Volume"><button class="pf-c-mute" aria-label="Mute"></button></span>';
        host.appendChild(bar);
        const bp = bar.querySelector('.pf-c-play'), bt = bar.querySelector('.pf-c-t'), sk = bar.querySelector('.pf-c-seek'), vl = bar.querySelector('.pf-c-vol'), bm = bar.querySelector('.pf-c-mute');
        let seeking = false;
        const upd = () => {
          bp.innerHTML = v.paused ? PLAY : PAUSE; bp.setAttribute('aria-label', v.paused ? 'Play' : 'Pause');
          bar.classList.toggle('pf-paused', v.paused);
          const d = v.duration || 0; bt.textContent = fmt(v.currentTime) + ' / ' + fmt(d);
          if (!seeking) sk.value = d ? Math.round(v.currentTime / d * 1000) : 0;
          const m = v.muted || v.volume === 0; bm.innerHTML = m ? MUTE : VOL; bm.setAttribute('aria-label', m ? 'Unmute' : 'Mute'); vl.value = v.muted ? 0 : v.volume;
        };
        const toggle = () => { if (v.paused) { const p = v.play(); if (p && p.catch) p.catch(() => {}); } else v.pause(); };
        ['play', 'pause', 'timeupdate', 'loadedmetadata', 'durationchange', 'volumechange', 'ended'].forEach((ev) => v.addEventListener(ev, upd));
        bar.addEventListener('click', (e) => e.stopPropagation()); bar.addEventListener('dblclick', (e) => e.stopPropagation()); bar.addEventListener('pointerdown', (e) => e.stopPropagation());
        bp.addEventListener('click', (e) => { e.preventDefault(); toggle(); });
        v.addEventListener('click', (e) => { e.preventDefault(); toggle(); });
        sk.addEventListener('input', () => { seeking = true; const d = v.duration || 0; if (d) { v.currentTime = sk.value / 1000 * d; bt.textContent = fmt(v.currentTime) + ' / ' + fmt(d); } });
        sk.addEventListener('change', () => { seeking = false; upd(); });
        vl.addEventListener('input', () => { v.volume = +vl.value; v.muted = +vl.value === 0; });
        bm.addEventListener('click', (e) => { e.preventDefault(); if (v.muted || v.volume === 0) { v.muted = false; if (v.volume === 0) v.volume = 1; } else v.muted = true; });
        upd();
      };
      window.__pfCtl = enhance;
      const scan = (root) => { (root.querySelectorAll ? root.querySelectorAll('video[data-pf-ctl]') : []).forEach((v) => enhance(v)); };
      scan(document);
      try { new MutationObserver((ms) => { ms.forEach((m) => m.addedNodes.forEach((n) => { if (n.nodeType !== 1) return; if (n.matches && n.matches('video[data-pf-ctl]')) enhance(n); else scan(n); })); }).observe(document.body, { childList: true, subtree: true }); } catch (e) {}
    }
    // 이미지 고유 비율 읽기 (한 번 읽은 값은 저장해 두고 다음부터 바로 사용)
    { let R = {"f7f920ca3e6a237cc31c792a5d2deb6c": 1.0, "b2e4a32303234e8b75fb59f74b3c9cd0": 1.0, "976720c8119c859c127c70a7d65d4e61": 1.33333, "3ba5df1429052a1a1fe585d2b70c9e20": 1.0, "a13deec518914497c1b83cb93d62e9db": 2.0, "be7681d3aa34e10d558c0204711efd6b": 1.0, "21a0b5ccce789ae4df9f1ab73b5c6b34": 1.0, "d7f9a9a42b39f86ae8083441b66d9a52": 1.0, "5392f4510f0263d171e36cd8c24a5a2b": 1.0, "0a86fec3518fff3cc2de793c8ca23d10": 1.0, "b4e554d96f49a8eee73942067c764ad2": 0.70611, "b142772a290f66839ebe623b02c60103": 0.70667, "f2e993bff614085294c215e89b51029e": 0.70722, "d26b741e70603fefdf1f24d03e448d4b": 1.0, "9376c91f73a59cb9952818edf3418a28": 1.0, "a419b7b44e236127f8789884172aff60": 0.70722, "dbfe5bd7d5f20e8f667f87691ca489c2": 1.0, "3b57b5dd0eb4dffc9233f0e90a7949d3": 1.0, "c2118dde2e4f3b3a90fc259693b91db6": 1.0, "5c08549665f6211fb7727efe526e5a3c": 1.41398, "1d98721ecb338635682ceb9921a1daa6": 1.0, "011c8781e9ecd1e02396ffadc65b0dc9": 1.0, "64d918960b5d68982427aab8b3d2807d": 1.0, "2927dcc89f550a5d4efda22a991a4948": 0.99944, "e856367bfc4f9f79e0696dd56aa33978": 1.0, "b23e6824068e0cac6f5e480025b17043": 1.0, "1a8a280516e7fc55338c12639073bbbd": 1.0, "0513ec3d34611b996d3ba328852431b0": 2.99884, "dd446678d07e94b3a5dfd01f04267a72": 1.0, "9e580f70fa7db2426635931302bc946a": 0.72, "68734f03ce85c1f68a51cabd21a890f4": 1.33333, "555f44c0ced99f69f0effb7890465380": 1.0, "0d2c76911d1f96f105a77ece11679c45": 0.75, "c64737976120c95a6cced34b430e4095": 1.0, "3648ce536a21a2c5f03ceec0da93016c": 0.70722, "f6725c870280ecc24d096b346b08a2ab": 1.0, "b88ea5b869237501b633294e41fe13e4": 1.41398, "5bb916b34b85151dbcac9ed6dfe9396f": 1.0, "b4f6fcd573e3aa43a4f81b7ee540b498": 1.41398, "164650e947cb772a20f4e88e9f97f6cb": 1.0, "a61eeebe60db571924feed64f947b07f": 1.0, "08ad5e2b7e346bb79ab0481accbd7615": 1.0, "4a81482106b362ab924f3a3cf8d3c5b6": 0.75, "a746116253a27250fcb46e6c38ed64e3": 1.0, "7cd0bd6704198ea414059b752b77c749": 1.0, "076234fe30507020618b8f198132d5bc": 1.0, "d91186e77b34b08155f2f32ef7919d26": 1.0, "75b26cefe11fd9117e25927bfa287af2": 1.0, "5b7cf4464fc9d9f7a8e56241644b37eb": 1.0, "31b7d590591b53c171638c87f451421b": 1.0}; try { Object.assign(R, JSON.parse(localStorage.getItem('pf-illu-ratio1') || '{}') || {}); } catch (e) {} // 비율 미리 계산해 둠 → 원본 51장을 한꺼번에 받지 않음
      if (Object.keys(R).length) this.setState({ ratios: R });
      const srcs = DEFAULT_ORDER.map((id) => [id, __blob((ILL_TH[id] || id))]).concat([['VIDEO', 'assets/b00b7e8644257ae1eed6f9d564bdb589.jpg']]);
      srcs.forEach(([id, src]) => { if (R[id]) return; const im = new Image(); im.onload = () => { if (!im.naturalWidth) return; R[id] = im.naturalWidth / im.naturalHeight; clearTimeout(this._rt); this._rt = setTimeout(() => { try { localStorage.setItem('pf-illu-ratio1', JSON.stringify(R)); } catch (e) {} this.setState({ ratios: { ...R } }); }, 80); }; im.src = src; });
    }
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
    // 현재 순서를 사이트 공용 저장소(db)에 자동 기록 → Claude가 바로 읽어서 기본값으로 고정할 수 있음
    (async () => { try { this._db = window.claude && window.claude.use ? await window.claude.use('db') : null; } catch (e) { this._db = null; } this.syncDb(); })();
    this._esc = (e) => { if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && this.state && this.state.view != null) { const b = document.querySelector('.pf-viewer [aria-label="' + (e.key === 'ArrowRight' ? 'Next' : 'Previous') + '"]'); if (b) { e.preventDefault(); b.click(); } return; } if (e.key !== 'Escape' || this._leaving) return; if (this.state && this.state.view != null) { this.setState({ view: null }); return; } if (document.querySelector('.pf-modal')) return; const a = document.querySelector('.pf-close'); if (a) a.click(); };
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
    window.addEventListener('click', this._leave, true);
  }
  componentWillUnmount() { this._gone = true; clearTimeout(this._pre); window.removeEventListener('pointermove', this._move); window.removeEventListener('pointerup', this._up); window.removeEventListener('pointercancel', this._up); window.removeEventListener('keydown', this._esc); window.removeEventListener('click', this._leave, true); clearTimeout(this._lt); clearTimeout(this._lt2); }
  constructor(props) {
    super(props);
    // 순서 고정: 브라우저에 저장된 순서·삭제 기록은 쓰지 않고 항상 기본 순서
    const load = (key, def) => def.slice();
    const hidden = [];
    const secs = {}; SECTIONS.forEach(([k]) => { secs[k] = load('pf-illu-sec7-' + k, SEC_ITEMS[k]).filter((id) => !hidden.includes(id)); });
    this.state = { view: null, hidden, menu: null, tab: 'line', secs, order: secs.line, order2: load('pf-illu-order-cats', DEFAULT_CATS), drag: null, copied: false };
    this._grids = {};
    this._move = (e) => this.dragMove(e);
    this._up = (e) => this.dragUp(e);
  }
  syncDb() { const db = this._db; if (!db) return; try { const p = db.doc('illu/order').set({ order: this.state.order, hidden: this.state.hidden, code: this.orderCode(), at: Date.now() }); if (p && p.catch) p.catch(() => {}); } catch (e) {} }
  // 순서 코드: 기본 순서 번호(1부터)로 짧게 표기 — order(보이는 순서) / deleted(지운 것)
  orderCode() { const ix = (id) => DEFAULT_ORDER.indexOf(id) + 1; const secs = { ...this.state.secs, [this.state.tab]: this.state.order }; return SECTIONS.map(([k]) => k + ': ' + (secs[k] || []).map(ix).join(',')).join(' | ') + ' | deleted: ' + (this.state.hidden.map(ix).join(',') || '-'); }
  // 카드 드래그로 순서 바꾸기 (이 브라우저에 저장됨) — g: 'order'(퍼스널) / 'order2'(CATS)
  // 정렬: 이미지 고유 비율 그대로, 한 줄 최대 3장, 사이 간격 일정 (줄마다 높이를 맞춰 1200px 폭을 채움)
  layout(ord) {
    const W = 1200, G = 16, MINH = 340, MAXH = 620, R = this.state.ratios || {};
    const rat = (id) => R[id] || R0[id] || (392 / 553);
    const rects = new Array(ord.length); let y = 0, i = 0;
    while (i < ord.length) {
      let n = 1;
      while (n < 3 && i + n < ord.length) { let s = 0; for (let k = i; k <= i + n; k++) s += rat(ord[k]); if ((W - G * n) / s < MINH) break; n++; }
      let sum = 0; for (let k = i; k < i + n; k++) sum += rat(ord[k]);
      const h = Math.min(MAXH, (W - G * (n - 1)) / sum); let x = (W - (sum * h + G * (n - 1))) / 2;
      for (let k = i; k < i + n; k++) { const w = rat(ord[k]) * h; rects[k] = { x: Math.round(x), y: Math.round(y), w: Math.round(w), h: Math.round(h) }; x += w + G; }
      y += h + G; i += n;
    }
    return { rects, H: Math.max(0, Math.round(y - G)) };
  }
  slotPos(i, n, g) { const L = this._L && this._L[g || 'order']; return (L && L.rects[i]) || { x: 0, y: 0, w: 392, h: 553 }; }
  local(g, e) { const el = this._grids[g]; if (!el) return null; const r = el.getBoundingClientRect(); const k = r.width / 1200 || 1; return { x: (e.clientX - r.left) / k, y: (e.clientY - r.top) / k }; }
  dragDown(g, id, e) {
    if (e.button > 0) return;
    const p = this.local(g, e); if (!p) return;
    const ord = this.state[g], sp = this.slotPos(ord.indexOf(id), ord.length, g);
    this._d = { g, id, sx: e.clientX, sy: e.clientY, gx: p.x - sp.x, gy: p.y - sp.y, moved: false };
    window.addEventListener('pointermove', this._move); window.addEventListener('pointerup', this._up); window.addEventListener('pointercancel', this._up);
  }
  dragMove(e) {
    const d = this._d; if (!d) return;
    // 순서 바꾸기 기능 없음: 끌면 크게 보기만 취소
    if (Math.hypot(e.clientX - d.sx, e.clientY - d.sy) >= 6) d.cancel = true;
    return;
    const p = this.local(d.g, e); if (!p) return;
    const me = this.slotPos(this.state[d.g].indexOf(d.id), 0, d.g), vx = p.x - d.gx, vy = p.y - d.gy, cx = vx + me.w / 2, cy = vy + me.h / 2;
    const order = this.state[d.g].slice(), n = order.length;
    let best = 0, bd = Infinity;
    for (let j = 0; j < n; j++) { const s = this.slotPos(j, n, d.g); const dd = (s.x + s.w / 2 - cx) ** 2 + (s.y + s.h / 2 - cy) ** 2; if (dd < bd) { bd = dd; best = j; } }
    const cur = order.indexOf(d.id);
    if (cur !== best) { order.splice(cur, 1); order.splice(best, 0, d.id); }
    this.setState({ [d.g]: order, drag: { g: d.g, id: d.id, vx, vy } });
  }
  dragUp(e) {
    const d = this._d; this._d = null;
    window.removeEventListener('pointermove', this._move); window.removeEventListener('pointerup', this._up); window.removeEventListener('pointercancel', this._up);
    if (!d || d.cancel) return;
    if (d.moved) { this.setState({ drag: null, copied: false, secs: { ...this.state.secs, [this.state.tab]: this.state.order } }); try { if (d.g === 'order') localStorage.setItem('pf-illu-sec7-' + this.state.tab, JSON.stringify(this.state.order)); } catch (err) {} return; }
    if (d.id === 'VIDEO') return;
    const all = this.state.order.filter((x) => x !== 'VIDEO'), k = all.indexOf(d.id);
    clearTimeout(this._vt); this.setState({ view: k, vpos: k + 1, vanim: false }); this.syncVid();
  }
  // 팝업 영상: 보이는 슬라이드의 영상만 소리와 함께 재생, 나머지는 멈춤
  syncVid() { [120, 700].forEach((t) => setTimeout(() => { document.querySelectorAll('.pf-viewer video[data-pf-cs]').forEach((v) => { if (v.getAttribute('data-pf-cs') === '1') { if (v.paused) { v.muted = false; const p = v.play(); if (p && p.catch) p.catch(() => { v.muted = true; const q = v.play(); if (q && q.catch) q.catch(() => {}); }); } } else if (!v.paused) v.pause(); }); }, t)); }
  // 이미지 넘기기: 앞뒤에 복제 슬라이드를 둬서 마지막→첫번째도 한 칸만 자연스럽게 이동
  vStep(d, n) {
    const v = this.state.view; if (v == null) return;
    clearTimeout(this._vt);
    if (this.state.vpos != null && this.state.vpos !== v + 1) { this.setState({ vpos: v + 1, vanim: false }); requestAnimationFrame(() => requestAnimationFrame(() => this.vStep(d, n))); return; }
    const nv = (v + d + n) % n, pos = v + 1 + d;
    this.setState({ view: nv, vpos: pos, vanim: true }); this.syncVid();
    if (pos === 0 || pos === n + 1) this._vt = setTimeout(() => this.setState({ vpos: nv + 1, vanim: false }), 640);
  }
  // 크게보기 창 위치: 사용자가 지금 실제로 보고 있는 화면 영역을 재서 그 중앙에 띄움 (캔버스·홈 팝업 안에서도)
  pfVis(anchor, cb) {
    const vh = window.innerHeight || 900; let done = false, io = null;
    const H = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, vh), step = 40;
    const box = document.createElement('div');
    box.style.cssText = 'position:absolute;left:0;top:0;width:1px;height:' + H + 'px;opacity:0;pointer-events:none;z-index:-1';
    for (let y = 0; y < H; y += step) { const c = document.createElement('div'); c.style.cssText = 'position:absolute;left:0;width:1px;top:' + y + 'px;height:' + step + 'px'; box.appendChild(c); }
    document.body.appendChild(box);
    const finish = (t, h) => {
      if (done) return; done = true; try { io && io.disconnect(); } catch (e) {} if (box.parentNode) box.parentNode.removeChild(box);
      let cbTop = 0, sc = 1;
      if (anchor) { const p = document.createElement('div'); p.style.cssText = 'position:fixed;left:0;top:0;width:100px;height:100px;visibility:hidden;pointer-events:none'; anchor.appendChild(p); const r = p.getBoundingClientRect(); anchor.removeChild(p); cbTop = r.top; sc = r.height / 100 || 1; }
      cb(Math.round((t - cbTop) / sc), Math.round(h / sc));
    };
    if (typeof IntersectionObserver === 'undefined') { finish(0, vh); return; }
    io = new IntersectionObserver((es) => {
      let t = Infinity, b = -Infinity;
      es.forEach((x) => { if (x.isIntersecting && x.intersectionRect.height > 0) { t = Math.min(t, x.intersectionRect.top); b = Math.max(b, x.intersectionRect.bottom); } });
      if (!(b > t)) { t = 0; b = vh; }
      t = Math.max(0, Math.round(t)); finish(t, Math.max(320, Math.round(Math.min(b - t, vh))));
    });
    Array.prototype.forEach.call(box.children, (c) => io.observe(c));
    setTimeout(() => finish(0, vh), 400);
  }
  renderVals() {
    if (this.state.view == null) this._vm = false;
    clearTimeout(this._st); this._st = setTimeout(() => this.syncDb(), 800);
    const VIDS = { '7cd0bd6704198ea414059b752b77c749': ['assets/db29f88fe9dd7d4aa51aa4e59f391314.mp4', 'A short fan animation made to celebrate the 2022 Qatar World Cup.'] };
    const ITEMS = this.state.order.filter((x) => x !== 'VIDEO').map((id) => VIDS[id] ? [__blob(id), VIDS[id][1], VIDS[id][0], 'Captain Son'] : [__blob((ILL_ANIM[id] || id)), 'Illustration']);
    const n = ITEMS.length, v = this.state.view;
    const go = (i) => this.setState({ view: (i + n) % n });
    const opens = {};
    ITEMS.forEach((_, i) => { opens['o' + i] = () => { clearTimeout(this._vt); this.setState({ view: i, vpos: i + 1, vanim: false }); }; });
    const dr = this.state.drag;
    this._L = { order: this.layout(this.state.order), order2: this.layout(this.state.order2 || []) };
    const mk = (g) => { const ord = this.state[g], nn = ord.length; return ord.map((id, i) => { const p = this.slotPos(i, nn, g), on = dr && dr.g === g && dr.id === id;
      return { num: DEFAULT_ORDER.indexOf(id) + 1, x: p.x + 'px', y: p.y + 'px', w: p.w + 'px', h: p.h + 'px', vid: id === 'VIDEO', img: id !== 'VIDEO', play: !!VIDS[id], gif: !!ILL_ANIM[id] || id === 'VIDEO', src: __blob((ILL_TH[id] || id)), pos: CARD_POS[id] || '50% 50%',
        tf: on ? `translate(${dr.vx - p.x}px, ${dr.vy - p.y}px) scale(1.04)` : 'none', z: on ? 20 : 1,
        tr: on ? 'scale .3s ease' : !dr ? 'none' : 'left .35s cubic-bezier(.22,1,.36,1), top .35s cubic-bezier(.22,1,.36,1), transform .35s cubic-bezier(.22,1,.36,1), scale .4s ease',
        cur: 'zoom-in', down: (e) => this.dragDown(g, id, e), ctx: (e) => { e.preventDefault(); this._d = null; this.setState({ menu: { id, x: Math.min(e.clientX, window.innerWidth - 180), y: Math.min(e.clientY, window.innerHeight - 60) } }); } }; }); };
    const cards = mk('order'), cards2 = mk('order2');
    const gridHpx = Math.max(120, this._L.order.H);
    const custom = this.state.hidden.length > 0 || SECTIONS.some(([k]) => (k === this.state.tab ? this.state.order : (this.state.secs[k] || [])).join() !== SEC_ITEMS[k].join());
    return {
      vTop: this.state.vTop || 0, vH: this.state.vH ? this.state.vH + 'px' : '100vh', vHpx: this.state.vH || 800, vVis: this.state.vKey && this.state.vKey === this._vmId ? 'visible' : 'hidden',
      vRef: (el) => { if (!el || this._vm) return; this._vm = true; const id = this._vmId = (this._vmId || 0) + 1; this.pfVis(el.parentElement, (t, h) => { if (this._vmId === id) this.setState({ vTop: t, vH: h, vKey: id }); }); },
      ...opens,
      cards, cards2, gridRef: (el) => { this._grids.order = el; }, gridRef2: (el) => { this._grids.order2 = el; },
      gridH: gridHpx + 'px', sheetH: (322 + gridHpx + 128) + 'px', wrapH: (322 + gridHpx + 128 + 44) + 'px',
      tabs: SECTIONS.map(([k, label]) => ({ label, n: (this.state.secs[k] || []).length, bg: k === this.state.tab ? '#2b2b2b' : '#ececec', fg: k === this.state.tab ? '#ffffff' : '#2b2b2b',
        pick: () => { if (k === this.state.tab) return; const secs = { ...this.state.secs, [this.state.tab]: this.state.order }; this.setState({ secs, tab: k, order: secs[k], view: null, menu: null }); } })),
      menuOn: !!this.state.menu, menuX: (this.state.menu ? this.state.menu.x : 0) + 'px', menuY: (this.state.menu ? this.state.menu.y : 0) + 'px',
      menuClose: (e) => { if (e && e.preventDefault) e.preventDefault(); this.setState({ menu: null }); },
      menuDelete: () => { const id = this.state.menu && this.state.menu.id; if (!id) return; const hidden = [...this.state.hidden, id], order = this.state.order.filter((x) => x !== id);
        try { localStorage.setItem('pf-illu-hidden2', JSON.stringify(hidden)); localStorage.setItem('pf-illu-sec7-' + this.state.tab, JSON.stringify(order)); } catch (err) {}
        this.setState({ hidden, order, secs: { ...this.state.secs, [this.state.tab]: order }, menu: null, copied: false }); },
      customOrder: custom, copyLabel: this.state.copied ? 'Copied to clipboard ✓' : 'Copy order',
      copyOrder: () => { const t = this.orderCode(); this.setState({ showCode: !this.state.showCode, copied: false }); try { navigator.clipboard.writeText(t).then(() => this.setState({ copied: true }), () => {}); } catch (err) {} },
      orderCode: this.orderCode(), codeOn: !!this.state.showCode, codeClose: () => this.setState({ showCode: false }),
      codeRef: (el) => { if (el && !el.__sel) { el.__sel = true; setTimeout(() => { el.focus(); el.select(); }, 30); } if (!el) {} },
      resetOrder: () => { try { localStorage.removeItem('pf-illu-order'); localStorage.removeItem('pf-illu-order-cats'); localStorage.removeItem('pf-illu-hidden2'); SECTIONS.forEach(([k]) => localStorage.removeItem('pf-illu-sec7-' + k)); } catch (err) {} const secs = {}; SECTIONS.forEach(([k]) => { secs[k] = SEC_ITEMS[k].slice(); }); this.setState({ hidden: [], secs, order: secs[this.state.tab], order2: DEFAULT_CATS.slice(), copied: false }); },
      viewing: v !== null,
      items: (n ? [ITEMS[n - 1], ...ITEMS, ITEMS[0]] : []).map(([src, cap, vsrc, ttl], j) => ({ src, cap, ttl: ttl || '', vsrc: vsrc || '', img: !vsrc, vid: !!vsrc, cur: j === (this.state.vpos ?? ((v ?? 0) + 1)) ? '1' : '0' })),
      trackTrans: this.state.vanim ? 'transform .6s cubic-bezier(.22,1,.36,1)' : 'none', trackX: `translateX(-${(this.state.vpos ?? ((v ?? 0) + 1)) * 100}%)`,
      viewCap: v !== null ? ITEMS[v][1] : '',
      viewCount: `${(v ?? 0) + 1} / ${n}`,
      vPrev: () => this.vStep(-1, n),
      vNext: () => this.vStep(1, n),
      vClose: () => this.setState({ view: null })
    };
  }
}
return Component;
});
