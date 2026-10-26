DC.define("Snowman", "\n\u003clink rel=\"preconnect\" href=\"https://fonts.googleapis.com\"\u003e\n\u003clink href=\"https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700\u0026amp;family=Archivo:wght@400;500;600\u0026amp;display=swap\" rel=\"stylesheet\"\u003e\n\u003cstyle\u003e\nbody{margin:0}\n@font-face{font-family:\u0027GT America Mono\u0027;src:url(\u0027assets/648a0a7e464315ad89fd338b7396db0c.woff\u0027) format(\u0027woff\u0027);font-weight:400;font-style:normal;font-display:swap}\n/* 프로젝트 소개글 · About 소개글: GT America Mono / KR 버전은 이전처럼 Pretendard */\n.pf-mono{font-family:\u0027GT America Mono\u0027,\u0027Archivo\u0027,\u0027Noto Sans KR\u0027,monospace!important}\nhtml.pf-kr .pf-mono{font-family:\u0027Archivo\u0027,\u0027Noto Sans KR\u0027,sans-serif!important}\na{color:inherit;text-decoration:none}\n@keyframes pf-dim-in{from{background-color:#ffffff}to{background-color:#666666}}\n@keyframes pf-dim-out{from{background-color:#666666}to{background-color:#ffffff}}\n@keyframes pf-sheet-in{from{opacity:0}to{opacity:1}}\n@keyframes pf-sheet-out{from{opacity:1;scale:1}to{opacity:0;scale:.93}}\n@keyframes pf-pop-up{0%{opacity:0;translate:0 32px}70%{opacity:1;translate:0 -4px}100%{opacity:1;translate:0 0}}\n.pf-root{animation:pf-dim-in .5s ease both}\n.pf-sheet{transform-origin:50% 420px;animation:pf-sheet-in .6s cubic-bezier(.22,1,.36,1) both}\n.pf-root.pf-leaving{animation:pf-dim-out .4s ease forwards}\n.pf-leaving .pf-sheet{animation:pf-sheet-out .36s cubic-bezier(.4,0,.7,.2) forwards}\n.pf-close{transition:transform .25s ease,background .25s ease}\n.pf-close:hover{transform:scale(1.08) rotate(90deg);background:#dcdcdc}\n.pf-shot{transition:transform .5s cubic-bezier(.22,1,.36,1);cursor:zoom-in}\n.pf-shot:hover{transform:scale(1.015)}\n.pf-next{transition:transform .4s cubic-bezier(.22,1,.36,1)}\n.pf-next:hover{transform:translateX(10px)}\n.pf-round{transition:transform .2s ease,background .2s ease}\n.pf-round:hover{transform:scale(1.08);background:#dcdcdc}\n.pf-thumb{cursor:pointer}\n.pf-thumb .pf-play{transition:background .2s ease,transform .2s ease}\n.pf-thumb:hover .pf-play{background:#ff0033;transform:scale(1.06)}\n@keyframes pf-fade{from{opacity:0}to{opacity:1}}\n.pf-viewer{animation:pf-fade .35s ease both}\n.pf-track{transition:transform .6s cubic-bezier(.22,1,.36,1)}\n@media (prefers-reduced-motion:reduce){.pf-sheet,.pf-viewer{animation:none}.pf-track{transition:none}}\n.pf-round{transition:transform .2s ease,background .2s ease}\n.pf-round:hover{transform:scale(1.08);background:#dcdcdc}\n.pf-track{transition:transform .6s cubic-bezier(.22,1,.36,1)}\n/* 이미지 크게 보기: 메인 More Work 팝업과 같은 블랙 60% 배경 + 흰 박스(위아래 여백 128) */\n@keyframes pf-vbg-in{from{opacity:0}to{opacity:1}}\n@keyframes pf-vbox-in{0%{opacity:0;scale:.9;translate:0 30px}55%{opacity:1;scale:1.012;translate:0 -3px}100%{opacity:1;scale:1;translate:0 0}}\n.pf-viewer{animation:none!important}\n.pf-vbg{animation:pf-vbg-in .45s ease both}\n.pf-vbox{animation:pf-vbox-in .6s cubic-bezier(.22,1,.36,1) backwards}\n.pf-vclose{transition:transform .25s ease,background .25s ease}\n.pf-vclose:hover{transform:scale(1.08) rotate(90deg);background:#dcdcdc}\n@media (prefers-reduced-motion:reduce){.pf-vbg,.pf-vbox{animation:none}}\n.pf-hov{transition:transform .5s cubic-bezier(.22,1,.36,1)}\n.pf-hov:hover{transform:scale(1.015)}\n/* 전체화면: 영상 우측 상단 버튼 → 화면 전체를 덮는 검은 플레이어로 크게 재생 */\n.pf-vx{position:absolute;right:12px;top:12px;z-index:6;width:36px;height:36px;padding:0;border:none;border-radius:8px;background:rgba(20,20,20,.55);color:#ffffff;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s ease,background .2s ease}\n.pf-vwrap:hover .pf-vx,.pf-vx:focus-visible{opacity:1}\n.pf-vx:hover{background:rgba(20,20,20,.85)}\n/* 한글 소개글: Pretendard */\n@font-face{font-family:\u0027Pretendard\u0027;src:url(assets/94e9dcbf7a120dbf4a1dc68a359aab17.woff2) format(\u0027woff2\u0027);font-weight:400;font-display:swap}\n@font-face{font-family:\u0027Pretendard\u0027;src:url(assets/2971e76d455b9943e02ead31c35fff31.woff2) format(\u0027woff2\u0027);font-weight:500 600;font-display:swap}\n@font-face{font-family:\u0027Pretendard\u0027;src:url(assets/22786dc572d41931623c4e8617d52a1f.woff2) format(\u0027woff2\u0027);font-weight:700 900;font-display:swap}\nhtml.pf-kr .pf-desc,.pf-mono.pf-kr-txt{font-family:\u0027Pretendard\u0027,\u0027Archivo\u0027,sans-serif!important;letter-spacing:0!important}\n/* 소개글: EN·KR 글을 각각 직접 편집 (EN/KR 버튼에 따라 하나만 보임) */\nhtml:not(.pf-kr) .pf-desc .pf-ko,html.pf-kr .pf-desc .pf-en,html:not(.pf-kr) .pf-desc.pf-ko,html.pf-kr .pf-desc.pf-en{display:none}\n\u003c/style\u003e\n", "\n\n\u003cdiv class=\"pf-root\" style=\"background: #666666; color: #2b2b2b; font-family: \u0027Archivo\u0027, system-ui, sans-serif; overflow-x: hidden\"\u003e\n  \u003cdiv style=\"position: relative; width: 1440px; height: 2768px; margin: 0 auto\"\u003e\n    \u003cdiv class=\"pf-sheet\" style=\"position: absolute; left: 22px; top: 22px; width: 1396px; height: 2724px; background: #ffffff; border-radius: 22px; overflow: hidden\"\u003e\n\n      \u003ca class=\"pf-close\" href=\"index.html\" aria-label=\"Close and go home\" style=\"position: absolute; left: 1324px; top: 24px; width: 48px; height: 48px; border-radius: 50%; background: #e9e9e9; box-shadow: 0 6px 18px rgba(0,0,0,.12); display: flex; align-items: center; justify-content: center; color: #2b2b2b\"\u003e\n        \u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M6 6l12 12\"\u003e\u003c/path\u003e\u003cpath d=\"M18 6L6 18\"\u003e\u003c/path\u003e\u003c/svg\u003e\n      \u003c/a\u003e\n\n      \u003ch1 style=\"position: absolute; left: 48px; top: 72px; width: 1300px; margin: 0; text-align: center; white-space: nowrap; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 700; font-size: 76px; line-height: 1; text-transform: uppercase; letter-spacing: -.01em\"\u003eSnowman in the Pink Hat\u003c/h1\u003e\n      \u003cdiv style=\"position: absolute; left: 398px; top: 166px; width: 600px; text-align: center; font-size: 10px; letter-spacing: .14em; color: #767676; text-transform: uppercase\"\u003eANIMATION · 2023\u003c/div\u003e\n      \u003cp class=\"pf-desc pf-en\" data-en=\"\" style=\"position: absolute; left: 238px; top: 284px; transform: translateY(-50%); width: 920px; margin: 0; text-align: center; font-size: 16px; line-height: 1.6; color: #555555\"\u003eSnowman in the Pink Hat is an animation about loneliness and the joy of companionship.\u003cbr\u003eIn a frozen land lit by stars, a lonely snowman is carried by the sun\u0027s gentle breath into an unfamiliar world.\u003cbr\u003eThere, the snowman meets fantastical friends and shares a moment of warmth as they dance together.\u003c/p\u003e\n      \u003cp class=\"pf-desc pf-ko\" data-en=\"\" style=\"position: absolute; left: 238px; top: 284px; transform: translateY(-50%); width: 920px; margin: 0; text-align: center; font-size: 16px; line-height: 1.6; color: #555555\"\u003e\"Snowman in the Pink Hat\"은 함께하는 즐거움을 담은 애니메이션입니다.\u003cbr\u003e얼음 나라에서 홀로 울던 눈사람은 햇님의 작은 입김에 이끌려 별빛이 비추는 낯선 세계로 떠납니다.\u003cbr\u003e그곳에서 산타와 요정, 뱀파이어와 마녀처럼 환상 속에 존재하는 친구들을 만나 함께 춤추며 따뜻한 순간을 나눕니다.\u003c/p\u003e\n\n\n      \u003c!-- 메인 영상: 썸네일 + 재생 버튼 + 길이 --\u003e\n      \u003cdiv class=\"pf-vwrap\" style=\"position: absolute; left: 312px; top: 389px; width: 773px; height: 580px; border-radius: 16px; overflow: hidden; background: transparent; isolation: isolate; transform: translateZ(0)\"\u003e\n        \u003csc-if value=\"{{mainOff}}\" hint-placeholder-val=\"{{ true }}\"\u003e\n          \u003cbutton class=\"pf-thumb\" onClick=\"{{playMain}}\" aria-label=\"Play final film\" style=\"position: relative; display: block; width: 100%; height: 100%; padding: 0; border: none; background: transparent\"\u003e\n            \u003cimg src=\"assets/7ecd94301fcce59a6251140da399bbc0.jpg\" alt=\"Snowman in the Pink Hat key art\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\n            \u003cspan class=\"pf-play\" style=\"position: absolute; left: 50%; top: 50%; width: 84px; height: 58px; margin: -29px 0 0 -42px; border-radius: 16px; background: rgba(23,23,23,.82); display: flex; align-items: center; justify-content: center\"\u003e\u003csvg width=\"26\" height=\"26\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"\u003e\u003cpath d=\"M8 5v14l11-7z\" fill=\"#ffffff\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/span\u003e\n            \n            \u003cspan style=\"position: absolute; right: 12px; bottom: 12px; padding: 3px 7px; border-radius: 4px; background: rgba(0,0,0,.8); color: #ffffff; font-family: \u0027Archivo\u0027, sans-serif; font-weight: 600; font-size: 13px\"\u003e1:07\u003c/span\u003e\n          \u003c/button\u003e\n        \u003c/sc-if\u003e\n        \u003csc-if value=\"{{mainOn}}\" hint-placeholder-val=\"{{ false }}\"\u003e\n          \u003cvideo ref=\"{{playRef}}\" onClick=\"{{vidClick}}\" src=\"assets/370b1a0da4dc2a79aaff4f7ad2ce84ef.mp4\" data-pf-ctl=\"\" disablepictureinpicture=\"\" playsinline=\"\" style=\"display: block; width: 100%; height: 100%; object-fit: cover; background: transparent;\"\u003e\u003c/video\u003e\u003cbutton class=\"pf-vx\" aria-label=\"Full screen\" title=\"Full screen\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M4 9V4h5\"\u003e\u003c/path\u003e\u003cpath d=\"M20 9V4h-5\"\u003e\u003c/path\u003e\u003cpath d=\"M4 15v5h5\"\u003e\u003c/path\u003e\u003cpath d=\"M20 15v5h-5\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\n        \u003c/sc-if\u003e\n      \u003c/div\u003e\n\n      \u003c!-- PROCESS: 스케치 / 최종 --\u003e\n      \u003cdiv style=\"position: absolute; left: 398px; top: 1065px; width: 600px; text-align: center; font-size: 10px; letter-spacing: .14em; color: #767676; text-transform: uppercase\"\u003ePROCESS\u003c/div\u003e\n      \u003cdiv class=\"pf-vwrap\" style=\"position: absolute; left: 98px; top: 1105px; width: 594px; height: 445px; border-radius: 16px; overflow: hidden; background: #f4f4f4\"\u003e\n        \u003cvideo ref=\"{{autoRef}}\" preload=\"auto\" src=\"assets/2a5c1c724728fd48411fd7817c3cfb46.mp4\" poster=\"assets/5e6663411e43c4c2d3c38b364880c2e5.jpg\" autoplay=\"\" muted=\"\" loop=\"\" playsinline=\"\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/video\u003e\n        \u003cspan style=\"position: absolute; left: 12px; bottom: 12px; padding: 6px 12px; border-radius: 999px; background: #2b2b2b; color: #ffffff; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 11px; letter-spacing: .06em\"\u003e1 · SKETCH MOTION\u003c/span\u003e\n      \u003c/div\u003e\n      \u003cdiv class=\"pf-vwrap\" style=\"position: absolute; left: 704px; top: 1105px; width: 594px; height: 445px; border-radius: 16px; overflow: hidden; background: transparent; isolation: isolate; transform: translateZ(0)\"\u003e\n        \u003cvideo ref=\"{{autoRef}}\" preload=\"auto\" src=\"assets/2577864b5f3e23086b1889a748b4d9e9.mp4\" poster=\"assets/e8316bf43a3af5866709e770ebce4fec.jpg\" autoplay=\"\" muted=\"\" loop=\"\" playsinline=\"\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/video\u003e\n        \u003cspan style=\"position: absolute; left: 12px; bottom: 12px; padding: 6px 12px; border-radius: 999px; background: #2b2b2b; color: #ffffff; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 11px; letter-spacing: .06em\"\u003e2 · FINAL\u003c/span\u003e\n      \u003c/div\u003e\n\n      \u003c!-- 장면 스크린샷 --\u003e\n      \u003cdiv style=\"position: absolute; left: 398px; top: 1650px; width: 600px; text-align: center; font-size: 10px; letter-spacing: .14em; color: #767676; text-transform: uppercase\"\u003eScenes\u003c/div\u003e\n      \u003cbutton class=\"pf-shot\" onClick=\"{{o0}}\" aria-label=\"View larger\" style=\"position: absolute; left: 98px; top: 1690px; width: 392px; height: 294px; padding: 0; border: none; border-radius: 16px; overflow: hidden; background: #eeeeee\"\u003e\u003cimg src=\"assets/b06f5a974e5a3f97404cf5054a9f3460.jpg\" alt=\"Scene\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/button\u003e\n      \u003cbutton class=\"pf-shot\" onClick=\"{{o1}}\" aria-label=\"View larger\" style=\"position: absolute; left: 502px; top: 1690px; width: 392px; height: 294px; padding: 0; border: none; border-radius: 16px; overflow: hidden; background: #eeeeee\"\u003e\u003cimg src=\"assets/837699b055c73166659d27d79c389114.jpg\" alt=\"Scene\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/button\u003e\n      \u003cbutton class=\"pf-shot\" onClick=\"{{o2}}\" aria-label=\"View larger\" style=\"position: absolute; left: 906px; top: 1690px; width: 392px; height: 294px; padding: 0; border: none; border-radius: 16px; overflow: hidden; background: #eeeeee\"\u003e\u003cimg src=\"assets/bff1fd3327b73f364f107b3fa4efdba5.jpg\" alt=\"Scene\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/button\u003e\n      \u003cbutton class=\"pf-shot\" onClick=\"{{o3}}\" aria-label=\"View larger\" style=\"position: absolute; left: 98px; top: 1996px; width: 392px; height: 294px; padding: 0; border: none; border-radius: 16px; overflow: hidden; background: #eeeeee\"\u003e\u003cimg src=\"assets/aa3a357d6583d2b5eed1612d9822f182.jpg\" alt=\"Scene\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/button\u003e\n      \u003cbutton class=\"pf-shot\" onClick=\"{{o4}}\" aria-label=\"View larger\" style=\"position: absolute; left: 502px; top: 1996px; width: 392px; height: 294px; padding: 0; border: none; border-radius: 16px; overflow: hidden; background: #eeeeee\"\u003e\u003cimg src=\"assets/20f510fbced647b64dcfb16faa921507.jpg\" alt=\"Scene\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/button\u003e\n      \u003cbutton class=\"pf-shot\" onClick=\"{{o5}}\" aria-label=\"View larger\" style=\"position: absolute; left: 906px; top: 1996px; width: 392px; height: 294px; padding: 0; border: none; border-radius: 16px; overflow: hidden; background: #eeeeee\"\u003e\u003cimg src=\"assets/b86c843a9544ebd95d46e4cf597f0c07.jpg\" alt=\"Scene\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/button\u003e\n      \u003cbutton class=\"pf-shot\" onClick=\"{{o6}}\" aria-label=\"View larger\" style=\"position: absolute; left: 98px; top: 2302px; width: 392px; height: 294px; padding: 0; border: none; border-radius: 16px; overflow: hidden; background: #eeeeee\"\u003e\u003cimg src=\"assets/4353bb271a64b168c402dc42ee585042.jpg\" alt=\"Scene\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/button\u003e\n      \u003cbutton class=\"pf-shot\" onClick=\"{{o7}}\" aria-label=\"View larger\" style=\"position: absolute; left: 502px; top: 2302px; width: 392px; height: 294px; padding: 0; border: none; border-radius: 16px; overflow: hidden; background: #eeeeee\"\u003e\u003cimg src=\"assets/7c397ab96027becb9cd58a7c659d8e14.jpg\" alt=\"Scene\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/button\u003e\n      \u003cbutton class=\"pf-shot\" onClick=\"{{o8}}\" aria-label=\"View larger\" style=\"position: absolute; left: 906px; top: 2302px; width: 392px; height: 294px; padding: 0; border: none; border-radius: 16px; overflow: hidden; background: #eeeeee\"\u003e\u003cimg src=\"assets/b49385e64709dbbd9abcb2ca40c8540f.jpg\" alt=\"Scene\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/button\u003e\n      \n    \u003c/div\u003e\n\n    \u003csc-if value=\"{{viewing}}\" hint-placeholder-val=\"{{ false }}\"\u003e\n      \u003cdiv class=\"pf-viewer\" style=\"position: fixed; left: 0; right: 0; top: 0; height: 100vh; z-index: 100; display: flex; align-items: center; justify-content: center\"\u003e\n        \u003cdiv class=\"pf-vbg\" onClick=\"{{vClose}}\" aria-hidden=\"true\" style=\"position: absolute; inset: 0; background: rgba(0,0,0,.6); -webkit-backdrop-filter: blur(24px); backdrop-filter: blur(24px)\"\u003e\u003c/div\u003e\n        \u003cdiv class=\"pf-vbox\" style=\"position: relative; width: 100%; height: 100%; overflow: hidden; pointer-events: none\"\u003e\n          \u003cdiv style=\"position: absolute; inset: 0; overflow: hidden\"\u003e\n            \u003cdiv class=\"pf-track\" style=\"display: flex; width: 100%; height: 100%; transform: {{trackX}}; transition: {{trackTrans}}\"\u003e\n              \u003csc-for list=\"{{items}}\" as=\"it\" hint-placeholder-count=\"10\"\u003e\n                \u003cdiv style=\"flex: 0 0 100%; height: 100%; display: flex; align-items: center; justify-content: center; box-sizing: border-box; padding: 60px 120px\"\u003e\n                  \u003cdiv class=\"pf-vcard\"\u003e\u003cimg src=\"{{it.src}}\" alt=\"{{it.cap}}\" draggable=\"false\"\u003e\u003cbutton class=\"pf-vbtn pf-vx2\" onClick=\"{{vClose}}\" aria-label=\"Close viewer\"\u003e\u003csvg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M6 6l12 12\"\u003e\u003c/path\u003e\u003cpath d=\"M18 6L6 18\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003cbutton class=\"pf-vbtn pf-vprev\" onClick=\"{{vPrev}}\" aria-label=\"Previous\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M15 6l-6 6 6 6\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003cbutton class=\"pf-vbtn pf-vnext\" onClick=\"{{vNext}}\" aria-label=\"Next\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M9 6l6 6-6 6\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003c/div\u003e\n                \u003c/div\u003e\n              \u003c/sc-for\u003e\n            \u003c/div\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n      \u003c/div\u003e\n    \u003c/sc-if\u003e\n  \u003c/div\u003e\n\u003c/div\u003e\n", function (DCLogic) {
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
    // 전체화면: 영상 우측 상단 .pf-vx 버튼 → 화면 전체를 덮는 검은 플레이어로 크게 재생 (같은 지점부터 이어서). ×·Esc로 닫으면 원래 영상으로 돌아옴
    if (!window.__pfVx1) { window.__pfVx1 = true;
      const SV = (d) => '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
      const openBig = (v) => {
        if (!v || document.querySelector('.pf-vxo')) return;
        const o = document.createElement('div'); o.className = 'pf-vxo';
        o.style.cssText = 'position:fixed;left:0;top:0;width:100vw;height:100vh;z-index:2147483000;background:#000000;display:flex;align-items:center;justify-content:center';
        const nv = document.createElement('video');
        nv.src = v.currentSrc || v.getAttribute('src'); nv.controls = false; nv.playsInline = true; nv.loop = v.loop; nv.muted = v.muted; nv.volume = v.volume;
        nv.setAttribute('controlslist', 'nofullscreen nodownload noremoteplayback noplaybackrate'); nv.setAttribute('disablepictureinpicture', '');
        nv.style.cssText = 'display:block;width:100%;height:100%;object-fit:contain;background:#000000';
        const x = document.createElement('button'); x.setAttribute('aria-label', 'Exit full screen'); x.title = 'Exit full screen';
        x.innerHTML = SV('<path d="M9 4v5H4"></path><path d="M15 4v5h5"></path><path d="M9 20v-5H4"></path><path d="M15 20v-5h5"></path>');
        x.style.cssText = 'position:absolute;right:20px;top:20px;z-index:2;width:44px;height:44px;padding:0;border:none;border-radius:10px;background:rgba(255,255,255,.18);color:#ffffff;display:flex;align-items:center;justify-content:center;cursor:pointer';
        o.appendChild(nv); o.appendChild(x); document.body.appendChild(o); if (window.__pfCtl) window.__pfCtl(nv, o);
        const t = v.currentTime || 0; v.pause();
        const seek = () => { try { nv.currentTime = t; } catch (err) {} };
        if (nv.readyState >= 1) seek(); else nv.addEventListener('loadedmetadata', seek, { once: true });
        const pr = nv.play(); if (pr && pr.catch) pr.catch(() => {});
        let real = false;
        const close = () => {
          if (!o.parentNode) return;
          const playing = !nv.paused; try { v.currentTime = nv.currentTime; } catch (err) {}
          nv.pause(); o.remove();
          window.removeEventListener('keydown', key, true); document.removeEventListener('fullscreenchange', fsc);
          if (document.fullscreenElement) { const ex = document.exitFullscreen(); if (ex && ex.catch) ex.catch(() => {}); }
          if (playing) { const p = v.play(); if (p && p.catch) p.catch(() => {}); }
        };
        const key = (e) => { if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation(); close(); } };
        const fsc = () => { if (document.fullscreenElement) real = true; else if (real) close(); };
        window.addEventListener('keydown', key, true); document.addEventListener('fullscreenchange', fsc);
        x.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); close(); });
        // 브라우저가 허용하면 모니터 전체화면까지 (막혀 있어도 위 검은 화면은 그대로 크게 보임)
        try { if (document.fullscreenEnabled && o.requestFullscreen) { const r = o.requestFullscreen(); if (r && r.catch) r.catch(() => {}); } } catch (err) {}
      };
      window.addEventListener('click', (e) => {
        const b = e.target && e.target.closest ? e.target.closest('.pf-vx') : null; if (!b) return;
        e.preventDefault(); e.stopPropagation(); if (e.stopImmediatePropagation) e.stopImmediatePropagation();
        const w = b.closest('.pf-vwrap') || b.parentElement; openBig(w && w.querySelector('video'));
      }, true);
      window.addEventListener('dblclick', (e) => { const v = e.target && e.target.tagName === 'VIDEO' ? e.target : null; if (!v || !v.__pfCtl || v.closest('.pf-vxo')) return; const w = v.closest('.pf-vwrap'); if (w && w.querySelector('.pf-vx')) { e.preventDefault(); openBig(v); } }, true);
    }
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
  componentWillUnmount() { window.removeEventListener('keydown', this._esc); window.removeEventListener('click', this._leave, true); clearTimeout(this._lt); clearTimeout(this._lt2); }
  constructor(props) { super(props); this.state = { view: null, playing: {} }; }
  // 이미지 넘기기: 앞뒤에 복제 슬라이드를 둬서 마지막→첫번째도 한 칸만 자연스럽게 이동
  vStep(d, n) {
    const v = this.state.view; if (v == null) return;
    clearTimeout(this._vt);
    if (this.state.vpos != null && this.state.vpos !== v + 1) { this.setState({ vpos: v + 1, vanim: false }); requestAnimationFrame(() => requestAnimationFrame(() => this.vStep(d, n))); return; }
    const nv = (v + d + n) % n, pos = v + 1 + d;
    this.setState({ view: nv, vpos: pos, vanim: true });
    if (pos === 0 || pos === n + 1) this._vt = setTimeout(() => this.setState({ vpos: nv + 1, vanim: false }), 640);
  }
  renderVals() {
    const ITEMS = [
      ['assets/b06f5a974e5a3f97404cf5054a9f3460.jpg', 'Scene'],
      ['assets/837699b055c73166659d27d79c389114.jpg', 'Scene'],
      ['assets/bff1fd3327b73f364f107b3fa4efdba5.jpg', 'Scene'],
      ['assets/aa3a357d6583d2b5eed1612d9822f182.jpg', 'Scene'],
      ['assets/20f510fbced647b64dcfb16faa921507.jpg', 'Scene'],
      ['assets/b86c843a9544ebd95d46e4cf597f0c07.jpg', 'Scene'],
      ['assets/4353bb271a64b168c402dc42ee585042.jpg', 'Scene'],
      ['assets/7c397ab96027becb9cd58a7c659d8e14.jpg', 'Scene'],
      ['assets/b49385e64709dbbd9abcb2ca40c8540f.jpg', 'Scene']
    ];
    const n = ITEMS.length, v = this.state.view, pl = this.state.playing;
    const go = (i) => this.setState({ view: (i + n) % n });
    const opens = {};
    ITEMS.forEach((_, i) => { opens['o' + i] = () => { clearTimeout(this._vt); this.setState({ view: i, vpos: i + 1, vanim: false }); }; });
    const play = (k) => () => this.setState({ playing: { ...pl, [k]: true } });
    return {
      ...opens,
      mainOn: !!pl.main, mainOff: !pl.main,
      sketchOn: !!pl.sketch, sketchOff: !pl.sketch,
      finalOn: !!pl.final, finalOff: !pl.final,
      playMain: play('main'), playSketch: play('sketch'), playFinal: play('final'),
      autoRef: (el) => {
        if (!el) return;
        const go = () => { if (el.paused) { el.muted = true; const pr = el.play(); if (pr && pr.catch) pr.catch(() => {}); } };
        if (!el.__pfAuto) {
          el.__pfAuto = true;
          el.muted = true; el.defaultMuted = true; el.playsInline = true; el.loop = true;
          el.setAttribute('muted', ''); el.setAttribute('playsinline', '');
          ['loadeddata', 'canplay', 'pause'].forEach((ev) => el.addEventListener(ev, () => setTimeout(go, 60)));
          if (typeof IntersectionObserver !== 'undefined') {
            new IntersectionObserver((es) => es.forEach((x) => { if (x.isIntersecting) go(); }), { threshold: 0.1 }).observe(el);
          }
          let tries = 0;
          const t = setInterval(() => { go(); if (!el.paused || ++tries > 30) clearInterval(t); }, 500);
        }
        go();
      },
      vidClick: (e) => { const r = e.currentTarget.getBoundingClientRect(); if (e.clientY < r.bottom - 64) e.preventDefault(); },
      playRef: (el) => { if (el && !el.__pfStarted) { el.__pfStarted = true; const p = el.play(); if (p && p.catch) p.catch(() => {}); } },
      viewing: v !== null,
      items: [ITEMS[n - 1], ...ITEMS, ITEMS[0]].map(([src, cap]) => ({ src, cap })),
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
