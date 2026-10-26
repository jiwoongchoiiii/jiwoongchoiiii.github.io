/* Claude Design(.dc.html) 컴포넌트를 일반 브라우저에서 그대로 실행하는 작은 엔진.
   {{ }} 바인딩, sc-if / sc-for, dc-import, <helmet>, class Component extends DCLogic 를 지원한다.
   화면 갱신(diff)은 Preact가 맡는다. */
(function () {
  var P = window.preact, h = P.h, Fragment = P.Fragment;
  var defs = {}, classes = {}, helmets = {};

  // 값 없이 쓰인 HTML 불리언 속성 (예: muted="") → true
  var BOOL = { autoplay: 1, muted: 1, loop: 1, controls: 1, disabled: 1, hidden: 1, checked: 1, selected: 1, readonly: 1, required: 1, multiple: 1, open: 1, novalidate: 1, formnovalidate: 1, allowfullscreen: 1, reversed: 1, inert: 1 };

  // ── {{ 식 }} ──────────────────────────────────────────────
  var exprCache = {};
  function evalExpr(src, scope) {
    var f = exprCache[src];
    if (!f) {
      try { f = new Function('$s', 'with($s){return (' + src + ');}'); }
      catch (e) { console.warn('[dc] 잘못된 식:', src); f = function () {}; }
      exprCache[src] = f;
    }
    try { return f(scope); } catch (e) { return undefined; }
  }
  function parseInterp(str) {
    if (!str || str.indexOf('{{') < 0) return null;
    var m = /^\{\{([\s\S]+?)\}\}$/.exec(str);
    if (m && m[1].indexOf('}}') < 0) return { whole: m[1] };
    var parts = [], last = 0;
    str.replace(/\{\{([\s\S]+?)\}\}/g, function (all, e, i) {
      if (i > last) parts.push(str.slice(last, i));
      parts.push({ e: e });
      last = i + all.length;
    });
    if (last < str.length) parts.push(str.slice(last));
    return { parts: parts };
  }
  function interpStr(ip, scope) {
    if (ip.whole) { var v = evalExpr(ip.whole, scope); return v == null ? '' : String(v); }
    var out = '';
    for (var i = 0; i < ip.parts.length; i++) {
      var p = ip.parts[i];
      if (typeof p === 'string') out += p;
      else { var x = evalExpr(p.e, scope); if (x != null) out += x; }
    }
    return out;
  }
  function interpVal(ip, scope) { return ip.whole ? evalExpr(ip.whole, scope) : interpStr(ip, scope); }

  // ── style="a: b; c: d" → { a: 'b', c: 'd' } (React처럼 바뀐 속성만 갱신되게) ──
  function parseStyle(s) {
    var o = {}, depth = 0, q = '', start = 0;
    function decl(d) {
      var k = d.indexOf(':'); if (k < 0) return;
      var name = d.slice(0, k).trim(), val = d.slice(k + 1).trim();
      if (!name || !val) return;
      // 사이트 전체가 --pf-s 배율로 축소되면 vw·vh도 같이 줄어드므로 되돌려 줌 (site.css 참고)
      if (val.indexOf('v') >= 0) val = val.replace(/(\d*\.?\d+)(vw|vh)\b/g, 'calc($1$2 / var(--pf-s, 1))');
      o[name.indexOf('--') === 0 ? name : name.toLowerCase()] = val;
    }
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (q) { if (c === q) q = ''; }
      else if (c === '"' || c === "'") q = c;
      else if (c === '(') depth++;
      else if (c === ')') depth--;
      else if (c === ';' && depth <= 0) { decl(s.slice(start, i)); start = i + 1; }
    }
    decl(s.slice(start));
    return o;
  }

  // ── 템플릿 DOM → 렌더용 설명 트리 ─────────────────────────────
  function compileKids(parent) {
    var out = [];
    for (var n = parent.firstChild; n; n = n.nextSibling) { var d = compile(n); if (d) out.push(d); }
    return out;
  }
  function compile(node) {
    if (node.nodeType === 3) {
      var ip = parseInterp(node.nodeValue);
      return ip ? { t: 'x', ip: ip } : { t: 's', v: node.nodeValue };
    }
    if (node.nodeType !== 1) return null;
    var tag = node.localName;
    if (tag === 'helmet') return null;
    if (tag === 'sc-if') return { t: 'if', ip: parseInterp(node.getAttribute('value')), k: compileKids(node) };
    if (tag === 'sc-for') return { t: 'for', ip: parseInterp(node.getAttribute('list')), as: node.getAttribute('as') || 'item', k: compileKids(node) };
    if (tag === 'dc-import') return { t: 'imp', name: node.getAttribute('name') };
    var attrs = [];
    for (var i = 0; i < node.attributes.length; i++) {
      var a = node.attributes[i];
      if (a.name.indexOf('hint-') === 0) continue;
      attrs.push({ n: a.name, v: a.value, ip: parseInterp(a.value) });
    }
    var raw = tag === 'style' || tag === 'script';
    return { t: 'el', tag: tag, a: attrs, k: raw ? null : compileKids(node), text: raw ? node.textContent : null };
  }

  // ── 렌더 ──────────────────────────────────────────────────
  function renderKids(list, scope, out) {
    out = out || [];
    for (var i = 0; i < list.length; i++) out.push(renderNode(list[i], scope));
    return out;
  }
  function renderNode(d, scope) {
    switch (d.t) {
      case 's': return d.v;
      case 'x': return interpStr(d.ip, scope);
      case 'if': return d.ip && interpVal(d.ip, scope) ? h(Fragment, null, renderKids(d.k, scope)) : null;
      case 'for': {
        var list = d.ip ? interpVal(d.ip, scope) : null, out = [];
        if (list && list.length) {
          for (var i = 0; i < list.length; i++) {
            var s = Object.create(scope); s[d.as] = list[i];
            renderKids(d.k, s, out); // 한 배열로 펼쳐서 key가 항목 사이에서 동작하게
          }
        }
        return h(Fragment, null, out);
      }
      case 'imp': { var C = getClass(d.name); return C ? h(C, null) : null; }
      case 'el': {
        var props = {};
        for (var j = 0; j < d.a.length; j++) {
          var a = d.a[j], n = a.n, v = a.ip ? interpVal(a.ip, scope) : a.v;
          if (n === 'style') { if (v != null && v !== false && v !== '') props.style = parseStyle(String(v)); continue; }
          if (n === 'ref') { if (typeof v === 'function') props.ref = v; continue; }
          if (n === 'key') { props.key = v; continue; }
          if (n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110) { if (typeof v === 'function') props[n] = v; continue; } // on*
          if (!a.ip) {
            if (BOOL[n]) v = true;
            else if (n === 'draggable') v = v === 'true';
          }
          if (v == null) continue;
          props[n] = v;
        }
        if (d.text != null) return h(d.tag, props, d.text);
        return h(d.tag, props, renderKids(d.k, scope));
      }
    }
    return null;
  }

  // ── <helmet>: 컴포넌트가 화면에 있는 동안 <head>에 넣어 둠 ─────────
  function acquireHelmet(name) {
    var hm = helmets[name] || (helmets[name] = { n: 0, nodes: null });
    if (hm.n++ > 0) return;
    var html = defs[name].helmet; if (!html) return;
    var t = document.createElement('template'); t.innerHTML = html;
    hm.nodes = Array.prototype.slice.call(t.content.childNodes);
    hm.nodes.forEach(function (x) { document.head.appendChild(x); });
  }
  function releaseHelmet(name) {
    var hm = helmets[name]; if (!hm || --hm.n > 0) return;
    (hm.nodes || []).forEach(function (x) { if (x.parentNode) x.parentNode.removeChild(x); });
    hm.nodes = null;
  }

  class DCLogic extends P.Component {
    render() {
      var vals = (this.renderVals && this.renderVals()) || {};
      return h(Fragment, null, renderKids(this.__dcTpl(), vals));
    }
  }

  function getClass(name) {
    if (classes[name]) return classes[name];
    var def = defs[name];
    if (!def) { console.warn('[dc] 컴포넌트 없음:', name); return null; }
    var tpl = null;
    class Base extends DCLogic {
      constructor(props) { super(props); acquireHelmet(name); }
      __dcTpl() {
        if (!tpl) { var t = document.createElement('template'); t.innerHTML = def.tpl; tpl = compileKids(t.content); }
        return tpl;
      }
    }
    var C = def.factory(Base);
    var wu = C.prototype.componentWillUnmount;
    C.prototype.componentWillUnmount = function () { try { if (wu) wu.call(this); } finally { releaseHelmet(name); } };
    C.displayName = name;
    return (classes[name] = C);
  }

  window.DC = {
    define: function (name, helmet, tpl, factory) { defs[name] = { helmet: helmet, tpl: tpl, factory: factory }; },
    mount: function (name, el) { P.render(h(getClass(name), null), el || document.getElementById('dc-root')); }
  };
})();
