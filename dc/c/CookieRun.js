DC.define("CookieRun", "\n\u003clink rel=\"preconnect\" href=\"https://fonts.googleapis.com\"\u003e\n\u003clink href=\"https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700\u0026amp;family=Archivo:wght@400;500;600\u0026amp;display=swap\" rel=\"stylesheet\"\u003e\n\u003cstyle\u003e\nbody{margin:0}\n@font-face{font-family:\u0027GT America Mono\u0027;src:url(\u0027assets/648a0a7e464315ad89fd338b7396db0c.woff\u0027) format(\u0027woff\u0027);font-weight:400;font-style:normal;font-display:swap}\n/* 프로젝트 소개글 · About 소개글: GT America Mono / KR 버전은 이전처럼 Pretendard */\n.pf-mono{font-family:\u0027GT America Mono\u0027,\u0027Archivo\u0027,\u0027Noto Sans KR\u0027,monospace!important}\nhtml.pf-kr .pf-mono{font-family:\u0027Archivo\u0027,\u0027Noto Sans KR\u0027,sans-serif!important}\na{color:inherit;text-decoration:none}\n@keyframes pf-dim-in{from{background-color:#ffffff}to{background-color:#666666}}\n@keyframes pf-dim-out{from{background-color:#666666}to{background-color:#ffffff}}\n@keyframes pf-sheet-in{from{opacity:0}to{opacity:1}}\n@keyframes pf-sheet-out{from{opacity:1;scale:1}to{opacity:0;scale:.93}}\n@keyframes pf-pop-up{0%{opacity:0;translate:0 32px}70%{opacity:1;translate:0 -4px}100%{opacity:1;translate:0 0}}\n.pf-root{animation:pf-dim-in .5s ease both}\n.pf-sheet{transform-origin:50% 420px;animation:pf-sheet-in .6s cubic-bezier(.22,1,.36,1) both}\n.pf-root.pf-leaving{animation:pf-dim-out .4s ease forwards}\n.pf-leaving .pf-sheet{animation:pf-sheet-out .36s cubic-bezier(.4,0,.7,.2) forwards}\n.pf-close{transition:transform .25s ease,background .25s ease}\n.pf-close:hover{transform:scale(1.08) rotate(90deg);background:#dcdcdc}\n.pf-shot{transition:transform .5s cubic-bezier(.22,1,.36,1);cursor:zoom-in}\n.pf-shot:hover{transform:scale(1.015)}\n.pf-video{transition:transform .3s ease}\n.pf-sbpanel{scrollbar-width:thin;scrollbar-color:#cfcfcf transparent}\n.pf-sbpanel::-webkit-scrollbar{height:6px}.pf-sbpanel::-webkit-scrollbar-thumb{background:#cfcfcf;border-radius:3px}\n.pf-sb{transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .3s ease}\n.pf-sb:hover{transform:translateY(-4px);box-shadow:0 0 0 1px #e6e6e6,0 14px 30px rgba(0,0,0,.12)}\n.pf-thumb{cursor:pointer} .pf-thumb .pf-play{transition:background .2s ease,transform .2s ease} .pf-thumb:hover .pf-play{background:#ff0033;transform:scale(1.06)}\n.pf-video:hover{transform:translateY(-4px)}\n.pf-next{transition:transform .4s cubic-bezier(.22,1,.36,1)}\n.pf-next:hover{transform:translateX(10px)}\n.pf-round{transition:transform .2s ease,background .2s ease}\n.pf-round:hover{transform:scale(1.08);background:#dcdcdc}\n@keyframes pf-fade{from{opacity:0}to{opacity:1}}\n.pf-viewer{animation:pf-fade .35s ease both}\n.pf-track{transition:transform .6s cubic-bezier(.22,1,.36,1)}\n@media (prefers-reduced-motion:reduce){.pf-sheet,.pf-viewer{animation:none}.pf-track{transition:none}}\n.pf-round{transition:transform .2s ease,background .2s ease}\n.pf-round:hover{transform:scale(1.08);background:#dcdcdc}\n.pf-track{transition:transform .6s cubic-bezier(.22,1,.36,1)}\n/* 이미지 크게 보기: 메인 More Work 팝업과 같은 블랙 60% 배경 + 흰 박스(위아래 여백 128) */\n@keyframes pf-vbg-in{from{opacity:0}to{opacity:1}}\n@keyframes pf-vbox-in{0%{opacity:0;scale:.9;translate:0 30px}55%{opacity:1;scale:1.012;translate:0 -3px}100%{opacity:1;scale:1;translate:0 0}}\n.pf-viewer{animation:none!important}\n.pf-vbg{animation:pf-vbg-in .45s ease both}\n.pf-vbox{animation:pf-vbox-in .6s cubic-bezier(.22,1,.36,1) backwards}\n.pf-vclose{transition:transform .25s ease,background .25s ease}\n.pf-vclose:hover{transform:scale(1.08) rotate(90deg);background:#dcdcdc}\n@media (prefers-reduced-motion:reduce){.pf-vbg,.pf-vbox{animation:none}}\n.pf-tab{transition:background .2s ease,color .2s ease,transform .2s ease}\n.pf-tab:hover{transform:translateY(-2px)}\n.pf-pin img{transition:opacity .3s ease}\n.pf-pin.pf-nozoom{cursor:default}\n.pf-tab.pf-drop,.pf-pin.pf-drop{outline:2px dashed #2b2b2b;outline-offset:4px}\n.pf-pin.pf-nozoom.pf-in:active{scale:1}\n/* 자료 박스: 스크롤로 들어오면 작게→통통 튀며 등장, 누르면 가운데 기준으로 눌림 */\n.pf-pin{transition:transform .5s cubic-bezier(.22,1,.36,1),scale 1.8s linear(0,.5737 7.6%,.8382 11.87%,.9463 14.19%,1.0146 16.54%,1.0443 18.97%,1.0629 21.53%,1.0685 22.97%,1.0712 24.48%,1.0712 26.1%,1.0683 27.86%,1.0583 31.01%,1.0253 38.62%,1.0110 42.57%,0.9998 46.99%,0.9936 51.63%,0.9921 58.77%,1.0006 81.26%,1.0000) var(--d,0s),opacity .25s ease var(--d,0s);cursor:zoom-in}\n.pf-pin.pf-in:active{scale:.95;transition:transform .5s cubic-bezier(.22,1,.36,1),scale .15s cubic-bezier(.2,.7,.3,1),opacity .35s ease}\n.pf-tab{transition:background .2s ease,color .2s ease,transform .2s ease,scale .8s linear(0,.5737 7.6%,.8382 11.87%,.9463 14.19%,1.0146 16.54%,1.0443 18.97%,1.0629 21.53%,1.0685 22.97%,1.0712 24.48%,1.0712 26.1%,1.0683 27.86%,1.0583 31.01%,1.0253 38.62%,1.0110 42.57%,0.9998 46.99%,0.9936 51.63%,0.9921 58.77%,1.0006 81.26%,1.0000)}\n.pf-tab:active{scale:.95;transition:background .2s ease,color .2s ease,transform .2s ease,scale .15s cubic-bezier(.2,.7,.3,1)}\n/* 전체화면: 영상 우측 상단 버튼 → 화면 전체를 덮는 검은 플레이어로 크게 재생 */\n.pf-vx{position:absolute;right:12px;top:12px;z-index:6;width:36px;height:36px;padding:0;border:none;border-radius:8px;background:rgba(20,20,20,.55);color:#ffffff;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;transition:opacity .2s ease,background .2s ease}\n.pf-vwrap:hover .pf-vx,.pf-vx:focus-visible{opacity:1}\n.pf-vx:hover{background:rgba(20,20,20,.85)}\n/* KR·EN 영상 링크: 2페이지 넘김 버튼과 같은 유리 질감·컬러·투명도, 마우스를 올리면 스토리보드 카드처럼 살짝 위로 들림 */\n.pf-lnk{opacity:.5;transition:opacity .2s ease}.pf-lnk:hover{opacity:.9}\n.pf-wbtn{display:inline-flex;align-items:center;height:28px;padding:0 12px;box-sizing:border-box;border:1px solid rgba(255,255,255,.55);border-radius:999px;background:rgba(255,255,255,.28);-webkit-backdrop-filter:blur(10px) saturate(1.3);backdrop-filter:blur(10px) saturate(1.3);color:rgba(30,30,30,.72);box-shadow:0 4px 14px rgba(0,0,0,.08);font-family:\u0027Oswald\u0027,sans-serif;font-weight:600;font-size:11px;letter-spacing:.06em;opacity:.75;transform:translate3d(0,0,0);will-change:transform;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-font-smoothing:antialiased;transition:transform .25s ease-out,box-shadow .25s ease-out,opacity .25s ease,background .25s ease,color .25s ease}\n.pf-wbtn:hover{opacity:.92;background:rgba(255,255,255,.5);color:rgba(20,20,20,.9);transform:translate3d(0,-2px,0);box-shadow:0 8px 18px rgba(0,0,0,.12)}\n@media (prefers-reduced-motion:reduce){.pf-wbtn{transition:opacity .25s ease,background .25s ease}}\n/* 한글 소개글: Pretendard */\n@font-face{font-family:\u0027Pretendard\u0027;src:url(assets/94e9dcbf7a120dbf4a1dc68a359aab17.woff2) format(\u0027woff2\u0027);font-weight:400;font-display:swap}\n@font-face{font-family:\u0027Pretendard\u0027;src:url(assets/2971e76d455b9943e02ead31c35fff31.woff2) format(\u0027woff2\u0027);font-weight:500 600;font-display:swap}\n@font-face{font-family:\u0027Pretendard\u0027;src:url(assets/22786dc572d41931623c4e8617d52a1f.woff2) format(\u0027woff2\u0027);font-weight:700 900;font-display:swap}\nhtml.pf-kr .pf-desc,.pf-mono.pf-kr-txt{font-family:\u0027Pretendard\u0027,\u0027Archivo\u0027,sans-serif!important;letter-spacing:0!important}\n/* 소개글: EN·KR 글을 각각 직접 편집 (EN/KR 버튼에 따라 하나만 보임) */\nhtml:not(.pf-kr) .pf-desc .pf-ko,html.pf-kr .pf-desc .pf-en,html:not(.pf-kr) .pf-desc.pf-ko,html.pf-kr .pf-desc.pf-en{display:none}\n\u003c/style\u003e\n", "\n\n\u003cdiv class=\"pf-root\" style=\"background: #666666; color: #2b2b2b; font-family: \u0027Archivo\u0027, system-ui, sans-serif; overflow-x: hidden\"\u003e\n  \u003cdiv style=\"position: relative; width: 1440px; height: {{wrapH}}px; margin: 0 auto\"\u003e\n    \u003cdiv class=\"pf-sheet\" style=\"position: absolute; left: 22px; top: 22px; width: 1396px; height: {{sheetH}}px; background: #ffffff; border-radius: 22px; overflow: hidden\"\u003e\n\n      \u003ca class=\"pf-close\" href=\"index.html\" aria-label=\"Close and go home\" style=\"position: absolute; left: 1324px; top: 24px; width: 48px; height: 48px; border-radius: 50%; background: #e9e9e9; box-shadow: 0 6px 18px rgba(0,0,0,.12); display: flex; align-items: center; justify-content: center; color: #2b2b2b\"\u003e\n        \u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M6 6l12 12\"\u003e\u003c/path\u003e\u003cpath d=\"M18 6L6 18\"\u003e\u003c/path\u003e\u003c/svg\u003e\n      \u003c/a\u003e\n\n      \u003ch1 style=\"position: absolute; left: 48px; top: 72px; width: 1300px; margin: 0; text-align: center; white-space: nowrap; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 700; font-size: 76px; line-height: 1; text-transform: uppercase; letter-spacing: -.01em\"\u003eCookie Run: Kingdom\u003c/h1\u003e\n      \u003cdiv style=\"position: absolute; left: 298px; top: 166px; width: 800px; text-align: center; font-size: 10px; line-height: 14px; letter-spacing: .14em; color: #767676; text-transform: uppercase\"\u003eDevsisters · Update PVs · 2024–2026\u003c/div\u003e\n      \u003cdiv style=\"position: absolute; left: 298px; top: 184px; width: 800px; text-align: center; font-size: 10px; line-height: 14px; letter-spacing: .14em; color: #a3a3a3; text-transform: uppercase\"\u003eDirection · Visual Development · Background Art · 2D Animation\u003c/div\u003e\n      \u003cp class=\"pf-desc pf-en\" data-en=\"\" style=\"position: absolute; left: 198px; top: 280px; transform: translateY(-50%); width: 1000px; margin: 0; text-align: center; font-size: 16px; line-height: 1.6; color: #555555\"\u003eI contributed to twelve update PVs for CookieRun: Kingdom, Devsisters\u0027 live-service mobile RPG.\u003cbr\u003eJoining as a 2D animator, I expanded my role across storyboarding, character artwork, color scripts, backgrounds, and direction.\u003cbr\u003e\u003c/p\u003e\n      \u003cp class=\"pf-desc pf-ko\" data-en=\"\" style=\"position: absolute; left: 198px; top: 280px; transform: translateY(-50%); width: 1000px; margin: 0; text-align: center; font-size: 16px; line-height: 1.6; color: #555555\"\u003e데브시스터즈의 라이브 서비스 모바일 RPG 『쿠키런: 킹덤』 업데이트 PV 12편에 참여했습니다.\u003cbr\u003e2D 애니메이터로 입사한 뒤, 스토리보드와 캐릭터 아트워크, 컬러스크립트와 배경 제작, 연출까지 작업 영역을 넓혔습니다.\u003cbr\u003e\u003c/p\u003e\n\n      \n\n      \u003c!-- 대표 프로젝트: 쿠키런: 킹덤 스토리 영상 — 설명 → 스토리보드 → 애니매틱 → 완성 영상 --\u003e\n      \n      \u003c!-- 스토리 영상 섹션: 회색 패널로 위의 데브시스터즈 소개와 구분 --\u003e\n      \u003cdiv aria-hidden=\"true\" style=\"position: absolute; left: 66px; top: 363px; width: 1264px; height: 1095px; border-radius: 24px; background: #ececec\"\u003e\u003c/div\u003e\n      \u003ch2 style=\"position: absolute; left: 298px; top: 443px; width: 800px; margin: 0; text-align: center; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 26px; line-height: 1; letter-spacing: .02em; text-transform: uppercase; color: #3a3a3a\"\u003eCookie Run: Kingdom Story Film\u003c/h2\u003e\n      \n\n      \u003c!-- 01 스토리보드: 가로 한 줄 (옆으로 스크롤, 마우스 휠도 가로로) / 아래: 02 애니매틱(왼쪽) + 03 완성 영상(오른쪽) --\u003e\n      \u003cdiv style=\"position: absolute; left: 98px; top: 605px; width: 1200px; height: 28px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #e6e6e6\"\u003e\n        \u003cspan style=\"font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 14px; letter-spacing: .08em; text-transform: uppercase; color: #b5b5b5\"\u003e01\u003c/span\u003e\u003cspan style=\"font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 14px; letter-spacing: .08em; text-transform: uppercase\"\u003eStoryboard\u003c/span\u003e\u003cspan style=\"margin-left: auto; font-size: 12px; color: #8a8a8a\"\u003e{{sbNote}}\u003c/span\u003e\n      \u003c/div\u003e\n      \u003cdiv class=\"pf-sbpanel\" style=\"position: absolute; left: 98px; top: 649px; width: 1200px; height: 210px; box-sizing: border-box; padding: 2px 2px 12px; overflow-x: auto; overflow-y: hidden; overscroll-behavior-x: contain; display: grid; grid-auto-flow: column; grid-auto-columns: 262px; gap: 14px\"\u003e\n        \u003csc-for list=\"{{boards}}\" as=\"b\" hint-placeholder-count=\"27\"\u003e\n          \u003cdiv style=\"min-width: 0\"\u003e\n            \u003cbutton class=\"pf-shot pf-sb\" onClick=\"{{b.open}}\" aria-label=\"View storyboard larger\" style=\"position: relative; display: block; width: 100%; aspect-ratio: 16 / 9; padding: 0; border: none; border-radius: 8px; overflow: hidden; background: #f3f3f3; box-shadow: 0 0 0 1px #e6e6e6\"\u003e\u003cimg src=\"{{b.src}}\" alt=\"Storyboard {{b.no}}\" style=\"display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003cspan style=\"position: absolute; left: 6px; bottom: 6px; padding: 1px 6px; border-radius: 999px; background: rgba(43,43,43,.82); color: #ffffff; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 9px; letter-spacing: .06em\"\u003e{{b.no}}\u003c/span\u003e\u003c/button\u003e\n            \u003cdiv style=\"display: {{b.capShow}}; margin-top: 6px; height: {{capH}}px; overflow: hidden; font-size: 12px; line-height: 1.45; color: #555555\"\u003e{{b.line}}\u003c/div\u003e\n          \u003c/div\u003e\n        \u003c/sc-for\u003e\n      \u003c/div\u003e\n\n      \u003c!-- 02 애니매틱(왼쪽, 작게 + 아래 설명) / 03 완성 영상(오른쪽, 크게) --\u003e\n      \u003cdiv style=\"position: absolute; left: 98px; top: 899px; width: 588px; height: 28px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #e6e6e6\"\u003e\u003cspan style=\"font-family: Oswald, sans-serif; font-weight: 600; font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase; color: rgb(181, 181, 181)\"\u003e02\u003c/span\u003e\u003cspan style=\"font-family: Oswald, sans-serif; font-weight: 600; font-size: 14px; letter-spacing: 0.08em; text-transform: uppercase\"\u003eAnimatic\u003c/span\u003e\u003cspan style=\"margin-left: auto; font-size: 12px; color: rgb(138, 138, 138)\"\u003e\u003cbr\u003e\u003c/span\u003e\n      \u003c/div\u003e\n      \u003cdiv style=\"position: absolute; left: 710px; top: 899px; width: 588px; height: 28px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #e6e6e6\"\u003e\n        \u003cspan style=\"font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 14px; letter-spacing: .08em; text-transform: uppercase; color: #b5b5b5\"\u003e03\u003c/span\u003e\u003cspan style=\"font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 14px; letter-spacing: .08em; text-transform: uppercase\"\u003eFinal Film\u003c/span\u003e\n      \u003c/div\u003e\n      \u003cdiv class=\"pf-vwrap\" style=\"position: absolute; left: 98px; top: 943px; width: 588px; height: 331px; border-radius: 12px; overflow: hidden; background: #111111\"\u003e\n        \u003cvideo src=\"assets/2ec8c191cb1ea0bffe6dcc04c57ada9f.mp4\" poster=\"assets/a28fbdade08969e82f1bb6d84c6f7623.jpg\" data-pf-ctl=\"\" disablepictureinpicture=\"\" preload=\"metadata\" playsinline=\"\" style=\"display: block; width: 100%; height: 100%; object-fit: contain; background: #111111\"\u003e\u003c/video\u003e\u003cbutton class=\"pf-vx\" aria-label=\"Full screen\" title=\"Full screen\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M4 9V4h5\"\u003e\u003c/path\u003e\u003cpath d=\"M20 9V4h-5\"\u003e\u003c/path\u003e\u003cpath d=\"M4 15v5h5\"\u003e\u003c/path\u003e\u003cpath d=\"M20 15v5h-5\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\n      \u003c/div\u003e\n      \u003cp class=\"pf-desc pf-en\" data-en=\"\" style=\"position: absolute; left: 278px; top: 485px; width: 840px; margin: 0; text-align: center; font-size: 15px; line-height: 1.6; color: #555555\"\u003eI led the direction and production of this story PV, creating storyboards, style frames, and the ending sequence\u0027s color script. I defined the production scope and coordinated background assets with the marketing illustration team, working closely with the compositor to carry the visual direction through to the final film.\u003c/p\u003e\n      \u003cp class=\"pf-desc pf-ko\" data-en=\"\" style=\"position: absolute; left: 278px; top: 485px; width: 840px; margin: 0; text-align: center; font-size: 15px; line-height: 1.6; color: #555555\"\u003e스토리보드와 스타일 프레임, 엔딩 장면의 컬러스크립트를 제작하고, 영상의 연출과 제작 진행을 주도했습니다. 제작 범위를 정하고 마케팅 일러스트레이션 팀과 배경 에셋 제작을 조율했으며, 컴포지터와 긴밀히 협업해 최종 영상까지 시각적 방향을 구현했습니다.\u003c/p\u003e\n      \u003ca class=\"pf-thumb\" href=\"https://www.youtube.com/watch?v=UagpNlMpR1s\" target=\"_blank\" rel=\"noopener\" aria-label=\"Watch I Will Overcome This on YouTube\" style=\"position: absolute; left: 710px; top: 943px; width: 588px; height: 331px; border-radius: 12px; overflow: hidden; display: block; background: #2d2a4a url(assets/cd83b0859c873a5c967f830403b09de7.png) center / cover no-repeat\"\u003e\n        \u003cspan class=\"pf-play\" style=\"position: absolute; left: 50%; top: 50%; width: 64px; height: 44px; margin: -22px 0 0 -32px; border-radius: 12px; background: rgba(23,23,23,.82); display: flex; align-items: center; justify-content: center\"\u003e\u003csvg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"\u003e\u003cpath d=\"M8 5v14l11-7z\" fill=\"#ffffff\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/span\u003e\n      \u003c/a\u003e\n      \u003c!-- 완성 영상 KR / EN 링크: 영상 오른쪽 아래 --\u003e\n      \u003cdiv style=\"position: absolute; left: 710px; top: 943px; width: 588px; height: 331px; pointer-events: none; z-index: 3\"\u003e\n        \u003cdiv style=\"position: absolute; right: 12px; bottom: 12px; display: flex; gap: 6px\"\u003e\n          \u003ca class=\"pf-lnk\" href=\"https://www.youtube.com/watch?v=UagpNlMpR1s\" target=\"_blank\" rel=\"noopener\" aria-label=\"Watch the Korean version on YouTube\" style=\"padding: 6px 12px; border-radius: 999px; background: #2b2b2b; color: #ffffff; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 11px; letter-spacing: .06em; pointer-events: auto\"\u003eKR ↗\u003c/a\u003e\u003ca class=\"pf-lnk\" href=\"https://www.youtube.com/watch?v=GWJOgCVr2dQ\" target=\"_blank\" rel=\"noopener\" aria-label=\"Watch the English version on YouTube\" style=\"padding: 6px 12px; border-radius: 999px; background: #2b2b2b; color: #ffffff; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 11px; letter-spacing: .06em; pointer-events: auto\"\u003eEN ↗\u003c/a\u003e\n        \u003c/div\u003e\n      \u003c/div\u003e\n\n      \u003c!-- 성과: 퓨어바닐라 · 쉐도우밀크 스토리 영상 --\u003e\n      \u003cdiv style=\"position: absolute; left: 710px; top: 1298px; width: 588px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px\"\u003e\u003cdiv style=\"padding: 16px 0 0; border-top: 2px solid #2b2b2b\"\u003e\u003cdiv style=\"font-family: \u0027Oswald\u0027, sans-serif; font-weight: 700; font-size: 38px; line-height: 1; color: #2b2b2b\"\u003e#3\u003c/div\u003e\u003cdiv style=\"margin-top: 8px; font-size: 12px; line-height: 1.45; color: #767676\"\u003eYouTube Trending, Korea\u003c/div\u003e\u003c/div\u003e\u003cdiv style=\"padding: 16px 0 0; border-top: 2px solid #2b2b2b\"\u003e\u003cdiv style=\"font-family: \u0027Oswald\u0027, sans-serif; font-weight: 700; font-size: 38px; line-height: 1; color: #2b2b2b\"\u003e1M+\u003c/div\u003e\u003cdiv style=\"margin-top: 8px; font-size: 12px; line-height: 1.45; color: #767676\"\u003eTotal views, KR \u0026amp; EN channels\u003c/div\u003e\u003c/div\u003e\u003cdiv style=\"padding: 16px 0 0; border-top: 2px solid #2b2b2b\"\u003e\u003cdiv style=\"font-family: \u0027Oswald\u0027, sans-serif; font-weight: 700; font-size: 38px; line-height: 1; color: #2b2b2b\"\u003e330K\u003c/div\u003e\u003cdiv style=\"margin-top: 8px; font-size: 12px; line-height: 1.45; color: #767676\"\u003eViews in the first day, EN channel\u003c/div\u003e\u003c/div\u003e\u003c/div\u003e\n\n      \u003c!-- 참여한 다른 업데이트 PV (누르면 유튜브 새 탭) --\u003e\n      \u003cdiv style=\"position: absolute; left: 98px; top: {{yOT}}px; width: 1200px; height: 28px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #e6e6e6\"\u003e\n        \u003cspan style=\"font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 14px; letter-spacing: .08em; text-transform: uppercase; color: #b5b5b5\"\u003e—\u003c/span\u003e\u003cspan style=\"font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 14px; letter-spacing: .08em; text-transform: uppercase\"\u003eMore Update PVs\u003c/span\u003e\n      \u003c/div\u003e\n      \u003cdiv style=\"position: absolute; left: 98px; top: {{yOTg}}px; width: 1200px; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 16px\"\u003e\n        \u003csc-for list=\"{{videos}}\" as=\"vd\" hint-placeholder-count=\"11\"\u003e\n          \u003ca class=\"pf-video\" href=\"{{vd.url}}\" target=\"_blank\" rel=\"noopener\" style=\"display: block; min-width: 0\"\u003e\n            \u003cdiv style=\"position: relative; aspect-ratio: 16 / 9; border-radius: 8px; background: {{vd.bg}} url({{vd.thumb}}) center / cover no-repeat; display: flex; align-items: center; justify-content: center\"\u003e\n              \u003cspan style=\"width: 30px; height: 30px; border-radius: 50%; background: rgba(255,255,255,.94); display: flex; align-items: center; justify-content: center; box-shadow: 0 3px 10px rgba(0,0,0,.2)\"\u003e\u003csvg width=\"11\" height=\"11\" viewBox=\"0 0 24 24\" aria-hidden=\"true\"\u003e\u003cpath d=\"M8 5v14l11-7z\" fill=\"#222222\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/span\u003e\n            \u003c/div\u003e\n            \u003cdiv style=\"margin-top: 6px; height: 32px; overflow: hidden; font-size: 12px; font-weight: 600; line-height: 1.35\"\u003e{{vd.title}}\u003c/div\u003e\n            \u003cdiv style=\"margin-top: 1px; font-size: 10px; letter-spacing: .06em; color: #8a8a8a\"\u003e{{vd.date}}\u003c/div\u003e\n          \u003c/a\u003e\n        \u003c/sc-for\u003e\n      \u003c/div\u003e\n\n      \u003c!-- 아트워크: 버튼으로 섹션 전환 + 핀터레스트식 3열 배치 --\u003e\n      \u003cdiv style=\"position: absolute; left: 98px; top: {{yAR}}px; width: 1200px; height: 28px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #e6e6e6\"\u003e\u003cspan style=\"font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 14px; letter-spacing: .08em; text-transform: uppercase; color: #b5b5b5\"\u003e—\u003c/span\u003e\u003cspan style=\"font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 14px; letter-spacing: .08em; text-transform: uppercase\"\u003eArtwork\u003c/span\u003e\u003c/div\u003e\n      \u003cdiv style=\"position: absolute; left: 98px; top: {{yTabs}}px; width: 1200px; display: flex; justify-content: flex-start; gap: 10px\"\u003e\n        \u003csc-for list=\"{{tabs}}\" as=\"t\" hint-placeholder-count=\"3\"\u003e\n          \u003cbutton class=\"pf-tab\" data-key=\"{{t.key}}\" onClick=\"{{t.pick}}\" style=\"height: 44px; padding: 0 22px; border: none; border-radius: 999px; cursor: pointer; font-family: \u0027Oswald\u0027, sans-serif; font-weight: 600; font-size: 13px; letter-spacing: .06em; text-transform: uppercase; background: {{t.bg}}; color: {{t.fg}}\"\u003e{{t.label}}\u003c/button\u003e\n        \u003c/sc-for\u003e\n      \u003c/div\u003e\n      \u003cdiv ref=\"{{galRef}}\" style=\"position: absolute; left: 98px; top: {{yGal}}px; width: 1200px; height: {{galH}}px\"\u003e\n        \u003csc-for list=\"{{gal}}\" as=\"g\" hint-placeholder-count=\"7\"\u003e\n          \u003cbutton class=\"pf-shot pf-pin {{g.cls}}\" data-id=\"{{g.id}}\" draggable=\"false\" onPointerDown=\"{{g.down}}\" aria-label=\"View larger\" style=\"position: absolute; left: {{g.x}}px; top: {{g.y}}px; z-index: {{g.z}}; transition: {{g.tr}}; cursor: {{g.cur}}; touch-action: none; user-select: none; -webkit-user-select: none; width: {{g.w}}px; height: {{g.h}}px; padding: 0; border: none; border-radius: 16px; overflow: hidden; background: #eeeeee\"\u003e\u003cimg src=\"{{g.src}}\" alt=\"{{g.cap}}\" draggable=\"false\" style=\"pointer-events: none; display: block; width: 100%; height: 100%; object-fit: cover\"\u003e\u003c/button\u003e\n        \u003c/sc-for\u003e\n      \u003c/div\u003e\n      \u003csc-if value=\"{{galEmpty}}\" hint-placeholder-val=\"{{ false }}\"\u003e\n        \u003cdiv style=\"position: absolute; left: 98px; top: {{yGal}}px; width: 1200px; height: 120px; border-radius: 16px; background: #f3f3f3; display: flex; align-items: center; justify-content: center; font-size: 12px; letter-spacing: .14em; color: #8a8a8a; text-transform: uppercase\"\u003eDrag an image here from another tab\u003c/div\u003e\n      \u003c/sc-if\u003e\n    \u003c/div\u003e\n\n    \u003csc-if value=\"{{viewing}}\" hint-placeholder-val=\"{{ false }}\"\u003e\n      \u003cdiv class=\"pf-viewer\" ref=\"{{vRef}}\" style=\"position: fixed; left: 0; right: 0; top: {{vTop}}px; height: {{vH}}; visibility: {{vVis}}; z-index: 100; display: flex; align-items: center; justify-content: center\"\u003e\n        \u003cdiv class=\"pf-vbg\" onClick=\"{{vClose}}\" aria-hidden=\"true\" style=\"position: absolute; inset: 0; background: rgba(0,0,0,.6); -webkit-backdrop-filter: blur(24px); backdrop-filter: blur(24px)\"\u003e\u003c/div\u003e\n        \u003cdiv class=\"pf-vbox\" style=\"position: relative; width: 100%; height: 100%; overflow: hidden; pointer-events: none\"\u003e\n          \u003cdiv style=\"position: absolute; inset: 0; overflow: hidden\"\u003e\n            \u003cdiv class=\"pf-track\" style=\"display: flex; width: 100%; height: 100%; transform: {{trackX}}; transition: {{trackTrans}}\"\u003e\n              \u003csc-for list=\"{{items}}\" as=\"it\" hint-placeholder-count=\"9\"\u003e\n                \u003cdiv style=\"flex: 0 0 100%; height: 100%; display: flex; align-items: center; justify-content: center; box-sizing: border-box; padding: 60px 120px\"\u003e\n                  \u003cdiv class=\"pf-vcard\"\u003e\u003cimg src=\"{{it.src}}\" alt=\"{{it.cap}}\" draggable=\"false\"\u003e\u003cbutton class=\"pf-vbtn pf-vx2\" onClick=\"{{vClose}}\" aria-label=\"Close viewer\"\u003e\u003csvg width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M6 6l12 12\"\u003e\u003c/path\u003e\u003cpath d=\"M18 6L6 18\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003cbutton class=\"pf-vbtn pf-vprev\" onClick=\"{{vPrev}}\" aria-label=\"Previous\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M15 6l-6 6 6 6\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003cbutton class=\"pf-vbtn pf-vnext\" onClick=\"{{vNext}}\" aria-label=\"Next\"\u003e\u003csvg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" aria-hidden=\"true\"\u003e\u003cpath d=\"M9 6l6 6-6 6\"\u003e\u003c/path\u003e\u003c/svg\u003e\u003c/button\u003e\u003c/div\u003e\n                \u003c/div\u003e\n              \u003c/sc-for\u003e\n            \u003c/div\u003e\n          \u003c/div\u003e\n        \u003c/div\u003e\n      \u003c/div\u003e\n    \u003c/sc-if\u003e\n  \u003c/div\u003e\n\u003c/div\u003e\n", function (DCLogic) {
class Component extends DCLogic {
  componentDidMount() {
    // 탭 이미지 미리 받기: 페이지가 열리면 뒤에서 2장씩 차례로 받아 둬서 Background Art / Character Animation 탭을 눌렀을 때 바로 보이게
    this._pre = setTimeout(() => { const q = (this._allSrc || []).slice(); const next = () => { const src = q.shift(); if (!src || this._gone) return; const im = new Image(); im.decoding = 'async'; im.onload = im.onerror = next; im.src = src; }; next(); next(); }, 600);
    // 아트워크 순서 바꾸기 (3페이지와 같은 방식): 이미지를 끌어 원하는 자리에 놓기 · 탭 버튼 위에 놓으면 그 섹션으로 이동 — 이 브라우저에 저장
    this._pm = (e) => this.pinMove(e); this._pu = (e) => this.pinUp(e);
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
    // 스토리보드 줄: 마우스 휠을 가로 스크롤로 (양 끝에 닿으면 페이지 스크롤로 넘김)
    if (!window.__pfSbWheel) { window.__pfSbWheel = true; window.addEventListener('wheel', (e) => { const el = e.target && e.target.closest ? e.target.closest('.pf-sbpanel') : null; if (!el || Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return; const max = el.scrollWidth - el.clientWidth; if ((e.deltaY < 0 && el.scrollLeft <= 0) || (e.deltaY > 0 && el.scrollLeft >= max - 1)) return; e.preventDefault(); el.scrollLeft += e.deltaY; }, { passive: false, capture: true }); }
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
  revealScan(reset) {
    const el = this._gEl; if (!el) return;
    const pins = el.querySelectorAll('.pf-pin');
    if (typeof IntersectionObserver === 'undefined') { pins.forEach((p) => p.classList.add('pf-in')); return; }
    if (!this._io) this._io = new IntersectionObserver((es) => { const ins = es.filter((x) => x.isIntersecting); const t0 = Math.min(...ins.map((x) => x.boundingClientRect.top)); es.forEach((x) => { if (x.isIntersecting) { const dy = Math.max(0, x.boundingClientRect.top - t0); x.target.style.setProperty('--d', Math.min(1.4, Math.round(dy / 24) * 24 * 0.00095).toFixed(2) + 's'); } if (x.isIntersecting) { x.target.classList.add('pf-in'); return; } const b = x.boundingClientRect, r = x.rootBounds; if (!r || b.bottom <= r.top || b.top >= r.bottom) x.target.classList.remove('pf-in'); }); }, { threshold: 0.12 });
    pins.forEach((p) => {
      if (reset) { p.classList.remove('pf-in'); this._io.unobserve(p); }
      this._io.observe(p);
    });
  }
  componentWillUnmount() { this._gone = true; clearTimeout(this._pre); window.removeEventListener('pointermove', this._pm); window.removeEventListener('pointerup', this._pu); window.removeEventListener('pointercancel', this._pu); if (this._io) this._io.disconnect(); if (this._mo) this._mo.disconnect(); window.removeEventListener('keydown', this._esc); window.removeEventListener('click', this._leave, true); clearTimeout(this._lt); clearTimeout(this._lt2); }
  // 순서 고정: 브라우저에 저장된 Artwork 배치는 쓰지 않음
  constructor(props) { super(props); this.state = { view: null, vsrc: 'gal', tab: 'vis', art: null }; }
  pinLocal(e) { const el = this._gEl; if (!el) return null; const r = el.getBoundingClientRect(); const k = r.width / 1200 || 1; return { x: (e.clientX - r.left) / k, y: (e.clientY - r.top) / k }; }
  pinDown(id, i, e) {
    if (e.button > 0) return; const p = this.pinLocal(e), sp = (this._pinPos || [])[i]; if (!p || !sp) return;
    this._pd = { id, i, sx: e.clientX, sy: e.clientY, gx: p.x - sp.x, gy: p.y - sp.y, moved: false, ord: this._ord.slice() };
    window.addEventListener('pointermove', this._pm); window.addEventListener('pointerup', this._pu); window.addEventListener('pointercancel', this._pu);
  }
  pinMove(e) {
    const d = this._pd; if (!d) return;
    // 순서 바꾸기 기능 없음: 끌면 크게 보기만 취소
    if (Math.hypot(e.clientX - d.sx, e.clientY - d.sy) >= 6) d.cancel = true;
    return; const p = this.pinLocal(e); if (!p) return;
    const P = this._pinPos || [], cur = d.ord.indexOf(d.id), me = P[cur] || { w: 384, h: 216 };
    const vx = p.x - d.gx, vy = p.y - d.gy, cx = vx + me.w / 2, cy = vy + me.h / 2;
    let best = cur, bd = Infinity; P.forEach((s, j) => { const dd = (s.x + s.w / 2 - cx) ** 2 + (s.y + s.h / 2 - cy) ** 2; if (dd < bd) { bd = dd; best = j; } });
    if (best !== cur && best >= 0) { d.ord.splice(cur, 1); d.ord.splice(best, 0, d.id); }
    this.setState({ drag: { id: d.id, ord: d.ord.slice(), vx, vy } });
  }
  pinUp(e) {
    const d = this._pd; this._pd = null;
    window.removeEventListener('pointermove', this._pm); window.removeEventListener('pointerup', this._pu); window.removeEventListener('pointercancel', this._pu);
    if (!d || d.cancel) return;
    if (!d.moved) { this.setState({ drag: null }); const o = this._opens && this._opens[d.i]; if (o) o(); return; }
    const tab = this.state.tab || 'vis', tb = (document.elementsFromPoint ? document.elementsFromPoint(e.clientX, e.clientY) : []).map((x) => x.closest && x.closest('.pf-tab[data-key]')).find(Boolean) || null;
    const lay = {}; Object.keys(this._lay || {}).forEach((k) => { lay[k] = this._lay[k].slice(); });
    if (tb && tb.getAttribute('data-key') !== tab) { const k = tb.getAttribute('data-key'); Object.keys(lay).forEach((x) => { lay[x] = lay[x].filter((y) => y !== d.id); }); if (lay[k]) lay[k].push(d.id); }
    else lay[tab] = d.ord.slice();
    this.setState({ drag: null }); this.artSave(lay, this._hid || []);
  }
  artSave(lay, hid) { const art = { secs: lay, hidden: hid }; try { localStorage.setItem('pf-cr-art1', JSON.stringify(art)); } catch (e) {} this.setState({ art, view: null }); setTimeout(() => this.revealScan(true), 30); }
  artMove(id, key) { const lay = {}; Object.keys(this._lay || {}).forEach((k) => { lay[k] = this._lay[k].filter((x) => x !== id); }); if (!lay[key]) return; lay[key].push(id); this.artSave(lay, this._hid || []); }
  artReorder(id, target) { if (!id || id === target) return; const lay = {}; Object.keys(this._lay || {}).forEach((k) => { lay[k] = this._lay[k].slice(); }); const k = Object.keys(lay).find((x) => lay[x].includes(target)); if (!k) return; const from = Object.keys(lay).find((x) => lay[x].includes(id)); const fi = from === k ? lay[k].indexOf(id) : -1; if (from) lay[from] = lay[from].filter((x) => x !== id); let ti = lay[k].indexOf(target); if (fi >= 0 && fi <= ti) ti += 1; lay[k].splice(ti, 0, id); this.artSave(lay, this._hid || []); }
  artDel(id) { const lay = {}; Object.keys(this._lay || {}).forEach((k) => { lay[k] = this._lay[k].filter((x) => x !== id); }); this.artSave(lay, [...(this._hid || []), id]); }
  // 이미지 넘기기: 앞뒤에 복제 슬라이드를 둬서 마지막→첫번째도 한 칸만 자연스럽게 이동
  vStep(d, n) {
    const v = this.state.view; if (v == null) return;
    clearTimeout(this._vt);
    if (this.state.vpos != null && this.state.vpos !== v + 1) { this.setState({ vpos: v + 1, vanim: false }); requestAnimationFrame(() => requestAnimationFrame(() => this.vStep(d, n))); return; }
    const nv = (v + d + n) % n, pos = v + 1 + d;
    this.setState({ view: nv, vpos: pos, vanim: true });
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
    // 섹션별 자료: [이미지, 캡션, 세로/가로 비율](추가는 각 배열에 [이미지, 캡션]만 넣으면 됨)
    const SECTIONS = [
      { key: 'vis', label: 'Visual Development', items: [
        ['assets/861e235a29154f895c58f216af38850c.jpg', 'Color script', 0.28795, 'full'],
        ['assets/873ecde7478aa63376f32ed74c604ca2.jpg', 'Color script', 0.36757, 'full'],
        ['assets/ed8ea9fea5579b5dd8bad1db9801e992.jpg', 'Background', 0.5625],
        ['assets/7e357aa6b88454fe6ef4d8bb3b7df3c9.jpg', 'Background', 0.5625],
        ['assets/00ea01df8f6fc27fde4cddd3d7b6c5cc.jpg', 'Background', 0.5625],
        ['assets/84ecf33f2d7da82ddc8ee36f21cbe239.jpg', 'Background', 0.39],
        ['assets/9ffce3be19c00b59c81d3cfbd257a97c.jpg', 'Background', 0.5625],
        ['assets/66584e212736424d4c233d9475cc9be3.jpg', 'Background', 0.5625],
        ['assets/19bdf5176b5655f8ffecd79fc71227cb.jpg', 'Background', 0.568],
        ['assets/744813f11c2d124431bf1a8e85815e3a.jpg', 'Background', 0.5625],
        ['assets/bcd5b4b4e7b3628670b4f25ab5ee2b1d.jpg', 'Background', 0.6],
        ['assets/aa6e6edcd7e8ebb477a10064c233aeea.jpg', 'Background', 0.5625],
        ['assets/c4068dcd4e9d04f006a554163e0edb80.jpg', 'Background', 0.5625],
        ['assets/6114445caa18613381af428e6c13f379.jpg', 'Background', 0.5625],
        ['assets/898728a25584bf097c207bd6ff63047f.jpg', 'Background', 0.6],
        ['assets/cc82848159b5d2ea976c956ab36308a5.jpg', 'Background', 0.6854],
        ['assets/1cbf7207cb9d660bdc394cebd2a62591.jpg', 'Background', 0.5625]
      ] },
      { key: 'bg', label: 'Background Art', items: [
        ['assets/15f94339c21d028982afd8cca8ef5bd6.jpg', 'Background', 0.5627],
        ['assets/54aa00e97e1bf00a0f2cc4b8965eacc4.jpg', 'Background', 0.5627],
        ['assets/a38983d6d1a7f6760e50b5b0cda87560.jpg', 'Background', 0.5626],
        ['assets/0401470a8b3a7c20fb9667739b5a0d57.jpg', 'Background', 0.36],
        ['assets/a54e9c42dd16a437790c927327592d6b.jpg', 'Background', 0.36],
        ['assets/5c9ed0e9fdb91e8e7596e645f62eb4e9.jpg', 'Background', 0.5625],
        ['assets/ba5dacec93fc5fa2359c72b5bb349cd0.jpg', 'Background', 0.5625],
        ['assets/643803214927503a327f313ccf5868a9.jpg', 'Background', 0.5625],
        ['assets/bdbe499bd3d43fa58886642524ecec32.jpg', 'Background', 0.3332],
        ['assets/e21bd53088710348becf6f67f8cfb716.jpg', 'Background', 0.5625],
        ['assets/5c45262133e12bfe3fafb600c3d0503c.jpg', 'Background', 0.3332],
        ['assets/3569f3ef67b878bc503718cc0ab6a5a8.jpg', 'Background', 0.5625],
        ['assets/2d94ea97343c1f1098555ea05e9c7933.jpg', 'Background', 0.8333]
      ] },
      { key: 'anim', label: 'Character Animation', items: [
        ['assets/0355f154c03bf5638af060e28e491c11.webp', 'Character animation', 0.5625],
        ['assets/444815927c44e934fcde78690b0c2d17.webp', 'Character animation', 0.5625],
        ['assets/108f049701c21c080f241707315ade50.webp', 'Character animation', 0.5625],
        ['assets/12b45b199c40f94f9af2d86cc30f4f13.webp', 'Character animation', 0.5625],
        ['assets/8cf0f9da4cdd1b7569c165d8ffa86b1d.webp', 'Character animation', 0.5625],
        ['assets/a4cfce278be224853e928b76fd9c77f2.webp', 'Character animation', 0.5625],
        ['assets/7f6e7e9e24d3c3f078b030de0695b2b2.webp', 'Character animation', 0.5625],
        ['assets/8ffc1f0df2ac521f9f3bf5fbd034e1ae.webp', 'Character animation', 0.5625],
        ['assets/73dc749c461f6149f1951dd201dc353b.webp', 'Character animation', 0.5625],
        ['assets/c3169141acba45fa74a567114fa6c065.webp', 'Character animation', 0.5625],
        ['assets/bc3fd7ca323fe9c14d0f5a33785ec5aa.webp', 'Character animation', 0.5625],
        ['assets/121ef7cccc09228a1d98a0b78df2d697.webp', 'Character animation', 0.5625],
        ['assets/e756aad240cbafec52fefab960021607.webp', 'Character animation', 0.5625],
        ['assets/08c16aecf430a04fea5b859271eccdc8.webp', 'Character animation', 0.5625],
        ['assets/5852bc0e68356464535a9c99d3add400.webp', 'Character animation', 0.5625]
      ] },

    ];
    // 목록용 작은 이미지(가로 900px). 크게 보기에서는 원본 사용
    const THUMB = {'assets/00ea01df8f6fc27fde4cddd3d7b6c5cc.jpg': 'assets/768ab93541c434f208f653724fe11163.jpg', 'assets/0401470a8b3a7c20fb9667739b5a0d57.jpg': 'assets/6695863f09d1cb0b352d80ddbe9e51ae.jpg', 'assets/15f94339c21d028982afd8cca8ef5bd6.jpg': 'assets/f3d4a85c1ffe25e7323ec8fb5713123a.jpg', 'assets/19bdf5176b5655f8ffecd79fc71227cb.jpg': 'assets/0a9ed4f50db00cda07ed3a89eea6a826.jpg', 'assets/1cbf7207cb9d660bdc394cebd2a62591.jpg': 'assets/100ec8b56d6b769783b3947c89661e2d.jpg', 'assets/2d94ea97343c1f1098555ea05e9c7933.jpg': 'assets/2facfdbe0e0a1bbff189de1eb359278e.jpg', 'assets/3569f3ef67b878bc503718cc0ab6a5a8.jpg': 'assets/eab030c66b5f66182cf6ef9fca4af40e.jpg', 'assets/54aa00e97e1bf00a0f2cc4b8965eacc4.jpg': 'assets/2b2326174e99135f4b26268d615bb940.jpg', 'assets/5c45262133e12bfe3fafb600c3d0503c.jpg': 'assets/0b0c6c7870ab8ace99455637548ebcae.jpg', 'assets/5c9ed0e9fdb91e8e7596e645f62eb4e9.jpg': 'assets/0ceeed30434fc8bb9f6857eef7104dd5.jpg', 'assets/6114445caa18613381af428e6c13f379.jpg': 'assets/3d5b2d9ff76660158e69c7c8f179fa84.jpg', 'assets/643803214927503a327f313ccf5868a9.jpg': 'assets/8b6f04d2a3823f9fdc5ace85cbc2a325.jpg', 'assets/66584e212736424d4c233d9475cc9be3.jpg': 'assets/63c28978d0e7610394e595b70152de17.jpg', 'assets/744813f11c2d124431bf1a8e85815e3a.jpg': 'assets/3572168d899f538788dc63703e1139cb.jpg', 'assets/7e357aa6b88454fe6ef4d8bb3b7df3c9.jpg': 'assets/00a53cf202b08e4cdcc2229dfbdc4249.jpg', 'assets/84ecf33f2d7da82ddc8ee36f21cbe239.jpg': 'assets/494f6ec6a63fe9fbf395b4f320f2c98f.jpg', 'assets/898728a25584bf097c207bd6ff63047f.jpg': 'assets/8c110073f2e30f8e9663cdf6257c71fb.jpg', 'assets/9ffce3be19c00b59c81d3cfbd257a97c.jpg': 'assets/87df32c6470ca0d831da49dd3d53a76c.jpg', 'assets/a38983d6d1a7f6760e50b5b0cda87560.jpg': 'assets/520cb0c8cafc744184a7d48459fc37ba.jpg', 'assets/a54e9c42dd16a437790c927327592d6b.jpg': 'assets/4376fbbfa859e8b08cffb3c678f94f07.jpg', 'assets/aa6e6edcd7e8ebb477a10064c233aeea.jpg': 'assets/b6e71430ab279e41c575239aaea8ea00.jpg', 'assets/ba5dacec93fc5fa2359c72b5bb349cd0.jpg': 'assets/ca71a660cedd0d3385ffd6b3d8d65a45.jpg', 'assets/bcd5b4b4e7b3628670b4f25ab5ee2b1d.jpg': 'assets/7bc2e26e2f7aae5155ca577596150b02.jpg', 'assets/bdbe499bd3d43fa58886642524ecec32.jpg': 'assets/f5c923c429ab9b7fdf3c7decea55404f.jpg', 'assets/c4068dcd4e9d04f006a554163e0edb80.jpg': 'assets/d4816ad872051863a9a190fcd3e3d03c.jpg', 'assets/cc82848159b5d2ea976c956ab36308a5.jpg': 'assets/db7713e600ce1f2ab38dbbe6d6c4d192.jpg', 'assets/e21bd53088710348becf6f67f8cfb716.jpg': 'assets/cff4e57c46d3f73b3b9f379b70a7112c.jpg', 'assets/ed8ea9fea5579b5dd8bad1db9801e992.jpg': 'assets/d6dac56bf9a9babada7820eda75242d9.jpg'};
    this._TH = THUMB;
    this._allSrc = SECTIONS.flatMap((x) => x.items.map((it) => THUMB[it[0]] || it[0]));
    // 대표 프로젝트 스토리보드 (애니매틱 순서). 추가할 보드는 이 배열 끝에 넣으면 됨
    // 대표 프로젝트 스토리보드 (애니매틱 순서). [이미지 id, 대사] — 대사가 비어 있으면 캡션 칸이 숨겨짐. 추가 보드는 끝에 이어 넣기
    const SB = [
      ['00faf47d2648a515efa9ac21eda3d55f', '#01 “Did you hear about it?” — cookies whispering'],
      ['afd4938109cc7dd3e3ac679b443f5ba4', '#01 “The rumor about the princess.” — close-ups'],
      ['8fd1ad6482d2c2c9cf43a0b7811354b6', '#02 “Wh… what?!” — an angry Princess Cookie'],
      ['7ea25e2bc4b6d12c3ce31ae564a1c627', '#03 “Here is today’s breaking news.” — Reporter Cookie'],
      ['baa82e1aa13dba8c57820fcb5ec198c0', '#03 “The swindler has escaped!!!”'],
      ['725aadac603b17aeb0effe97ad35015b', '#04 A wizard cookie cuts in, spreading the rumor'],
      ['fb27f790fe41baa8b2561e260af22459', '#05 “Lies become truth…” — the wizard turns to camera'],
      ['12f5fc1673c1c2378e79959028dc1770', '#05 Black Sapphire’s sly grin · 180° camera move'],
      ['ccadd4ef60556a76f705fcbdfd5fa958', '#06 “…and truth becomes lies —” the hermit in the crowd'],
      ['868a582f3edb2ac32867c071f0bd74fd', '#06 The hermit turns away; the crowd stands like statues'],
      ['a3199e272857f774643380b883a388f1', '#07 “— a world like that…”'],
      ['3cd658b63dcc759cf7b16c893e471657', '#07 The statue of Shadow Milk, once the Seer'],
      ['c0b8a20ad6205de2b9e28aee43e0c5f5', '#08 “— would be perfectly chaotic” — a Soul Jam falls'],
      ['cd9c130536dd9289bc25ce4647a373fd', '#08 Swallowed by a darkness deeper than the void'],
      ['04397439f3992ab29e74cfb93713f8dd', '#09 “…and beautiful.” — it becomes Shadow Milk’s Soul Jam'],
      ['f5b0d8d21b68aa3c8e7522e414030444', '#10 “Do you regret it?”'],
      ['2f94cffd5fa3749e1e9ff414265d9a5d', '#18 Awakened Pure Vanilla, slowly revealed in the light'],
      ['6736af179294a1953c87a302e662d5ba', '#11 (thud) Shadow Milk looms — “Every choice you made,”'],
      ['6ee0a7a5f2aefc38f7606489822f23da', '#11 “…your whole journey so far…”'],
      ['6b151e6d20f227d9c57b418566e05ac9', '#12 “All of it!!!” — the darkness swallows the hermit'],
      ['00457879bccad7f62986712361bc4e0b', '#12 The hermit sinking into the dark'],
      ['01cf40f5545bfb7f4c626ac66dbf483f', '#13 Darkness and silence — “Do you regret it?”'],
      ['75e3803e673c235c066eba85c3e010af', '#14 “…Pure Vanilla Cookie. Can we all be happy?” — old camcorder glitch'],
      ['fe5b49969f5f16d844bcddb41bb2d385', '#15 Young Pure Vanilla gazing at the light — “I believe we can.”'],
      ['5e76aa6a9870d2fb7773195f12e6440e', '#16 The light floats up; a hand touches the screen — “So…”'],
      ['844c2e65a6e05b1098405a076a18e6f5', '#16 The hermit’s gentle face in the dark (sparkle)'],
      ['3c1d2955902cc7c0e009675abbf0312e', '#17 “I will overcome this.” — light fills the screen']
    ];
    const BOARDS = SB.map(([id, line], i) => [__blob(id), line || ('Storyboard ' + String(i + 1).padStart(2, '0'))]);
    const FEATURED = 'UagpNlMpR1s';
    const tab = this.state.tab || 'vis';
    // 편집: 이미지 삭제(× 버튼) · 다른 탭으로 끌어다 놓아 이동 — 이 브라우저에 저장
    { const ALL = {}; SECTIONS.forEach((x) => x.items.forEach((it) => { ALL[it[0]] = it; }));
      const art = this.state.art || { secs: {}, hidden: [] }, hid = [], used = {}, lay = {};
      const OLD = art.secs || {}; if (!OLD.vis && (OLD.concept || OLD.color)) OLD.vis = [...(OLD.concept || []), ...(OLD.color || [])];
      SECTIONS.forEach((x) => { const st = OLD[x.key]; lay[x.key] = (Array.isArray(st) ? st : []).filter((id) => ALL[id] && !hid.includes(id) && !used[id] && (used[id] = 1)); });
      SECTIONS.forEach((x) => x.items.forEach((it) => { if (!used[it[0]] && !hid.includes(it[0])) { used[it[0]] = 1; lay[x.key].push(it[0]); } }));
      SECTIONS.forEach((x) => { x.items = lay[x.key].map((id) => ALL[id]); });
      this._lay = lay; this._hid = hid; }
    const GITEMS1 = (SECTIONS.find((x) => x.key === tab) || SECTIONS[0]).items, DR = this.state.drag, GBY = {}; GITEMS1.forEach((it) => { GBY[it[0]] = it; });
    const GITEMS0 = DR && DR.ord ? DR.ord.map((id) => GBY[id]).filter(Boolean) : GITEMS1, GITEMS = [...GITEMS0.filter((x) => x[3] !== 'full'), ...GITEMS0.filter((x) => x[3] === 'full')]; // 가로로 긴 컬러 스크립트는 섹션 맨 뒤
    const ITEMS = this.state.vsrc === 'sb' ? BOARDS : GITEMS;
    const VIDEOS = [
      ['EB-RXMY7Kf4', 'Finally Met', 'Sep 2024'],
      ['ygfAXBUz3Vc', 'My Treasure Shall Not Be Broken', 'Oct 2024'],
      ['-WmaQzIwM4w', 'You… Are Pure Vanilla Cookie?!', 'Jan 2025'],
      ['UagpNlMpR1s', 'I Will Overcome This', 'Feb 2025'],
      ['Kef-8zHGZgE', 'Happy Together, Forever', 'May 2025'],
      ['vgIaHPBv8DE', 'Shields Break, Passion Stays', 'May 2025'],
      ['pNFrGaBGyDY', 'Midsummer Night’s Fireworks', 'Jul 2025'],
      ['qmYGoJldmus', 'Update PV', '2025'],
      ['Qq2P7ltZE2Q', 'Light of the Soul Jam', 'Oct 2025'],
      ['kD5jKxSni1o', 'Update PV', '2025–26'],
      ['YFUX0bOONy4', 'K-Pop Demon Hunters × Cookie Run: Kingdom', 'Apr 2026'],
      ['aPrxkew45og', 'Song of the Dragon', 'Jun 2026']
    ];
    // 유튜브 썸네일 (사이트에 직접 저장)
    const THUMBS = {'EB-RXMY7Kf4': 'assets/f0de1e10200f68c5facabb8470de7bef.jpg', 'ygfAXBUz3Vc': 'assets/f7f32bbdfcebff0dc2855c1ecc919520.jpg', '-WmaQzIwM4w': 'assets/106d10216f1c82955166a66a850a9a89.jpg', 'UagpNlMpR1s': 'assets/7234c3013075949a09668264405bed61.jpg', 'Kef-8zHGZgE': 'assets/081abea74fc909ecaeef7cbb6a868dae.jpg', 'vgIaHPBv8DE': 'assets/e146918b24db0294d2edc9347a18898a.jpg', 'pNFrGaBGyDY': 'assets/9492277923bd2aeff16243b6f7c491cf.jpg', 'qmYGoJldmus': 'assets/db12cfe10c0fceaeb7ed0f66f33534f3.jpg', 'Qq2P7ltZE2Q': 'assets/6be38a29c233a85262969c2e16d9974d.jpg', 'kD5jKxSni1o': 'assets/f100abebc74e9fbbcd0a698432f503c5.jpg', 'YFUX0bOONy4': 'assets/e142fdd78643f3265a14675c36bbdeaa.jpg', 'aPrxkew45og': 'assets/93f36fc4a39ef2195e6b9e362352205b.jpg'};
    const TINTS = ['#2d2a4a', '#3a2f5c', '#4b3f8f', '#5a3d7a', '#8a2f5a', '#a8324a', '#2a3f6e', '#2f5a63', '#6a4a8a', '#3d4a7a', '#7a2f4f', '#2f6a5a'];
    const n = ITEMS.length, v = this.state.view;
    const go = (i) => this.setState({ view: (i + n) % n });
    const opens = {};
    GITEMS.forEach((_, i) => { opens['o' + i] = () => { clearTimeout(this._vt); this.setState({ vsrc: 'gal', view: i, vpos: i + 1, vanim: false }); }; });
    const openSB = (i) => () => { clearTimeout(this._vt); this.setState({ vsrc: 'sb', view: i, vpos: i + 1, vanim: false }); };
    // 핀터레스트식 배치: 3열, 가장 짧은 열에 다음 이미지
    // 빈틈 없는 정렬: 한 줄을 1200px 폭에 꽉 채우고 줄마다 높이를 맞춤 (이미지 비율 유지) — 2:1 넘는 와이드 아트웍은 자연히 약 2칸 폭을 차지
    const GAP = 24, TH = 216, rects = []; let yy = 0;
    const flush = (row) => { if (!row.length) return; const sum = row.reduce((t, k) => t + 1 / (GITEMS[k][2] || .5625), 0); const h = (1200 - GAP * (row.length - 1)) / sum; let x = 0; row.forEach((k, j) => { const w = j === row.length - 1 ? 1200 - x : Math.round(h / (GITEMS[k][2] || .5625)); rects[k] = { x: Math.round(x), y: Math.round(yy), w, h: Math.round(h) }; x += w + GAP; }); yy += Math.round(h) + GAP; };
    let i0 = 0;
    while (i0 < GITEMS.length) {
      if (GITEMS[i0][3] === 'full') { const h = Math.round(1200 * GITEMS[i0][2]); rects[i0] = { x: 0, y: yy, w: 1200, h }; yy += h + GAP; i0++; continue; }
      let j = i0; const run = []; while (j < GITEMS.length && GITEMS[j][3] !== 'full') run.push(j++);
      const rows = []; let row = [], sum = 0;
      run.forEach((k) => { const a = 1 / (GITEMS[k][2] || .5625); const hNo = row.length ? (1200 - GAP * (row.length - 1)) / sum : Infinity, hYes = (1200 - GAP * row.length) / (sum + a);
        if (row.length && hNo <= TH * 1.35 && Math.abs(hNo - TH) <= Math.abs(hYes - TH)) { rows.push(row); row = [k]; sum = a; } else { row.push(k); sum += a; } });
      if (row.length) { const hl = (1200 - GAP * (row.length - 1)) / sum; if (rows.length && hl > TH * 1.6) rows[rows.length - 1] = rows[rows.length - 1].concat(row); else rows.push(row); }
      rows.forEach(flush); i0 = j;
    }
    const TR = !DR ? 'none' : 'left .35s cubic-bezier(.22,1,.36,1), top .35s cubic-bezier(.22,1,.36,1), width .35s cubic-bezier(.22,1,.36,1), height .35s cubic-bezier(.22,1,.36,1)';
    this._ord = GITEMS.map((x) => x[0]); this._opens = tab === 'anim' ? [] : GITEMS.map((_, i) => opens['o' + i]);
    const pins = GITEMS.map(([src, cap], i) => { const still = tab === 'anim', { x, y, w, h } = rects[i]; const on = DR && DR.id === src;
      return { src: (this._TH && this._TH[src]) || src, id: src, x: on ? Math.round(DR.vx) : x, y: on ? Math.round(DR.vy) : y, sx: x, sy: y, w, h, cap, cls: still ? 'pf-nozoom' : '', z: on ? 20 : 1, tr: on ? 'none' : TR, cur: 'zoom-in', down: (e) => this.pinDown(src, i, e) }; });
    this._pinPos = pins.map((p) => ({ x: p.sx, y: p.sy, w: p.w, h: p.h }));
    const galH = GITEMS.length ? yy - GAP : 120;
    // 세로 배치: 스토리보드 줄 수에 맞춰 아래 섹션이 자동으로 내려감
    // 세로 배치(컴팩트): 스토리보드 줄 수·대사 유무에 맞춰 아래 섹션이 자동으로 내려감
    const anyLine = SB.some(([, l]) => l), capH = anyLine ? 36 : 0;
    const OTHER = VIDEOS.filter(([id]) => id !== FEATURED), otRows = Math.ceil(OTHER.length / 6), otH = otRows * 151 + (otRows - 1) * 16;
    const yAR = 1458 + 80, yTabs = yAR + 48, yGal = yTabs + 64, yOT = yGal + Math.max(galH, 120) + 72, yOTg = yOT + 44;
    const sheetH = yOTg + otH + 128;
    return {
      vTop: this.state.vTop || 0, vH: this.state.vH ? this.state.vH + 'px' : '100vh', vHpx: this.state.vH || 800, vVis: this.state.vKey && this.state.vKey === this._vmId ? 'visible' : 'hidden',
      vRef: (el) => { if (!el || this._vm) return; this._vm = true; const id = this._vmId = (this._vmId || 0) + 1; this.pfVis(el.parentElement, (t, h) => { if (this._vmId === id) this.setState({ vTop: t, vH: h, vKey: id }); }); },
      ...opens,
      sheetH, wrapH: sheetH + 44,
      yOT, yOTg, yAR, yTabs, yGal, capH, sbNote: '',
      boards: BOARDS.map(([src], i) => ({ src, no: String(i + 1).padStart(2, '0'), line: SB[i][1], capShow: anyLine ? 'block' : 'none', open: openSB(i) })),
      tabs: SECTIONS.map((x) => ({ key: x.key, label: x.label, bg: x.key === tab ? '#2b2b2b' : '#ececec', fg: x.key === tab ? '#ffffff' : '#2b2b2b', pick: () => { if (x.key !== tab) { this.setState({ tab: x.key, view: null, vsrc: 'gal' }); setTimeout(() => this.revealScan(true), 30); } } })),
      gal: pins, galH,
      galRef: (el) => { if (!el || el === this._gEl) return; this._gEl = el; setTimeout(() => this.revealScan(false), 30); if (typeof MutationObserver !== 'undefined') { this._mo = new MutationObserver(() => this.revealScan(false)); this._mo.observe(el, { childList: true }); } },
      galEmpty: GITEMS.length === 0,
      videos: OTHER.map(([id, title, date], i) => ({ url: 'https://www.youtube.com/watch?v=' + id, title, date, no: String(i + 1).padStart(2, '0'), bg: TINTS[i], thumb: THUMBS[id] })),
      viewing: v !== null,
      items: (n ? [ITEMS[n - 1], ...ITEMS, ITEMS[0]] : []).map(([src, cap]) => ({ src, cap })),
      trackTrans: this.state.vanim ? 'transform .6s cubic-bezier(.22,1,.36,1)' : 'none', trackX: `translateX(-${(this.state.vpos ?? ((v ?? 0) + 1)) * 100}%)`,
      viewCap: v !== null && ITEMS[v] ? ITEMS[v][1] : '',
      viewCount: `${(v ?? 0) + 1} / ${n}`,
      vPrev: () => this.vStep(-1, n),
      vNext: () => this.vStep(1, n),
      vClose: () => this.setState({ view: null })
    };
  }
}
return Component;
});
