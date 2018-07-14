/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});
/*!
 * smoothState.js is jQuery plugin that progressively enhances
 * page loads to behave more like a single-page application.
 *
 * @author  Miguel Ángel Pérez   reachme@miguel-perez.com
 * @see     http://smoothstate.com
 *
 */
!function(t,n,e,o){"use strict";if(!n.history.pushState)return t.fn.smoothState=function(){return this},void(t.fn.smoothState.options={});if(!t.fn.smoothState){var r=t("html, body"),a=n.console,i={debug:!1,anchors:"a",hrefRegex:"",forms:"form",allowFormCaching:!1,repeatDelay:500,blacklist:".no-smoothState",prefetch:!1,prefetchOn:"mouseover touchstart",cacheLength:0,loadingClass:"is-loading",alterRequest:function(t){return t},onBefore:function(){},onStart:{duration:0,render:function(){}},onProgress:{duration:0,render:function(){}},onReady:{duration:0,render:function(t,n){t.html(n)}},onAfter:function(){}},s={isExternal:function(t){var e=t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof e[1]&&e[1].length>0&&e[1].toLowerCase()!==n.location.protocol?!0:"string"==typeof e[2]&&e[2].length>0&&e[2].replace(new RegExp(":("+{"http:":80,"https:":443}[n.location.protocol]+")?$"),"")!==n.location.host?!0:!1},stripHash:function(t){return t.replace(/#.*/,"")},isHash:function(t,e){e=e||n.location.href;var o=t.indexOf("#")>-1?!0:!1,r=s.stripHash(t)===s.stripHash(e)?!0:!1;return o&&r},translate:function(n){var e={dataType:"html",type:"GET"};return n="string"==typeof n?t.extend({},e,{url:n}):t.extend({},e,n)},shouldLoadAnchor:function(t,n,e){var o=t.prop("href");return!(s.isExternal(o)||s.isHash(o)||t.is(n)||t.prop("target")||""!==e&&-1===t.prop("href").search(e))},clearIfOverCapacity:function(t,n){return Object.keys||(Object.keys=function(t){var n,e=[];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),Object.keys(t).length>n&&(t={}),t},storePageIn:function(n,e,o,r){var a=t("<html></html>").append(t(o));return n[e]={status:"loaded",title:a.find("title").first().text(),html:a.find("#"+r)},n},triggerAllAnimationEndEvent:function(n,e){e=" "+e||"";var o=0,r="animationstart webkitAnimationStart oanimationstart MSAnimationStart",a="animationend webkitAnimationEnd oanimationend MSAnimationEnd",i="allanimationend",l=function(e){t(e.delegateTarget).is(n)&&(e.stopPropagation(),o++)},u=function(e){t(e.delegateTarget).is(n)&&(e.stopPropagation(),o--,0===o&&n.trigger(i))};n.on(r,l),n.on(a,u),n.on("allanimationend"+e,function(){o=0,s.redraw(n)})},redraw:function(t){t.height()}},l=function(e){if(null!==e.state){var o=n.location.href,r=t("#"+e.state.id),a=r.data("smoothState");a.href===o||s.isHash(o,a.href)||a.load(o,!1)}},u=function(i,l){var u=t(i),c=u.prop("id"),h=null,f=!1,d={},p=n.location.href,g=function(t){t=t||!1,t&&d.hasOwnProperty(t)?delete d[t]:d={},u.data("smoothState").cache=d},m=function(n,e){e=e||t.noop;var o=s.translate(n);if(d=s.clearIfOverCapacity(d,l.cacheLength),!d.hasOwnProperty(o.url)||"undefined"!=typeof o.data){d[o.url]={status:"fetching"};var r=t.ajax(o);r.success(function(t){s.storePageIn(d,o.url,t,c),u.data("smoothState").cache=d}),r.error(function(){d[o.url].status="error"}),e&&r.complete(e)}},y=function(){if(h){var n=t(h,u);if(n.length){var e=n.offset().top;r.scrollTop(e)}h=null}},v=function(o){var i="#"+c,s=d[o]?t(d[o].html.html()):null;s.length?(e.title=d[o].title,u.data("smoothState").href=o,l.loadingClass&&r.removeClass(l.loadingClass),l.onReady.render(u,s),u.one("ss.onReadyEnd",function(){f=!1,l.onAfter(u,s),y()}),n.setTimeout(function(){u.trigger("ss.onReadyEnd")},l.onReady.duration)):!s&&l.debug&&a?a.warn("No element with an id of "+i+" in response from "+o+" in "+d):n.location=o},S=function(t,e,o){var i=s.translate(t);"undefined"==typeof e&&(e=!0),"undefined"==typeof o&&(o=!0);var h=!1,f=!1,p={loaded:function(){var t=h?"ss.onProgressEnd":"ss.onStartEnd";f&&h?f&&v(i.url):u.one(t,function(){v(i.url),o||g(i.url)}),e&&n.history.pushState({id:c},d[i.url].title,i.url),f&&!o&&g(i.url)},fetching:function(){h||(h=!0,u.one("ss.onStartEnd",function(){l.loadingClass&&r.addClass(l.loadingClass),l.onProgress.render(u),n.setTimeout(function(){u.trigger("ss.onProgressEnd"),f=!0},l.onProgress.duration)})),n.setTimeout(function(){d.hasOwnProperty(i.url)&&p[d[i.url].status]()},10)},error:function(){l.debug&&a?a.log("There was an error loading: "+i.url):n.location=i.url}};d.hasOwnProperty(i.url)||m(i),l.onStart.render(u),n.setTimeout(function(){r.scrollTop(0),u.trigger("ss.onStartEnd")},l.onStart.duration),p[d[i.url].status]()},w=function(n){var e,o=t(n.currentTarget);s.shouldLoadAnchor(o,l.blacklist,l.hrefRegex)&&!f&&(n.stopPropagation(),e=s.translate(o.prop("href")),e=l.alterRequest(e),m(e))},E=function(n){var e=t(n.currentTarget);if(!n.metaKey&&!n.ctrlKey&&s.shouldLoadAnchor(e,l.blacklist,l.hrefRegex)&&(n.stopPropagation(),n.preventDefault(),!C())){T();var o=s.translate(e.prop("href"));f=!0,h=e.prop("hash"),o=l.alterRequest(o),l.onBefore(e,u),S(o)}},b=function(n){var e=t(n.currentTarget);if(!e.is(l.blacklist)&&(n.preventDefault(),n.stopPropagation(),!C())){T();var r={url:e.prop("action"),data:e.serialize(),type:e.prop("method")};f=!0,r=l.alterRequest(r),"get"===r.type.toLowerCase()&&(r.url=r.url+"?"+r.data),l.onBefore(e,u),S(r,o,l.allowFormCaching)}},P=0,C=function(){var t=null===l.repeatDelay,n=parseInt(Date.now())>P;return!(t||n)},T=function(){P=parseInt(Date.now())+parseInt(l.repeatDelay)},A=function(t){l.anchors&&(t.on("click",l.anchors,E),l.prefetch&&t.on(l.prefetchOn,l.anchors,w)),l.forms&&t.on("submit",l.forms,b)},O=function(){var t=u.prop("class");u.removeClass(t),s.redraw(u),u.addClass(t)};return l=t.extend({},t.fn.smoothState.options,l),null===n.history.state&&n.history.replaceState({id:c},e.title,p),s.storePageIn(d,p,e.documentElement.outerHTML,c),s.triggerAllAnimationEndEvent(u,"ss.onStartEnd ss.onProgressEnd ss.onEndEnd"),A(u),{href:p,cache:d,clear:g,load:S,fetch:m,restartCSSAnimations:O}},c=function(n){return this.each(function(){var e=this.tagName.toLowerCase();this.id&&"body"!==e&&"html"!==e&&!t.data(this,"smoothState")?t.data(this,"smoothState",new u(this,n)):!this.id&&a?a.warn("Every smoothState container needs an id but the following one does not have one:",this):"body"!==e&&"html"!==e||!a||a.warn("The smoothstate container cannot be the "+this.tagName+" tag")})};n.onpopstate=l,t.smoothStateUtility=s,t.fn.smoothState=c,t.fn.smoothState.options=i}}(jQuery,window,document);
/*!
 * Materialize v0.97.1 (http://materializecss.com)
 * Copyright 2014-2015 Materialize
 * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
 */
jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin(2*(b*e-f)*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=.3*e*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)+c:h*Math.pow(2,-10*(b-=1))*Math.sin(2*(b*e-f)*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?7.5625*d*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}}),jQuery.extend(jQuery.easing,{easeInOutMaterial:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:d/4*((b-=2)*b*b+2)+c}}),!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;h=c(h||i,g),j.push(1+h.x),k+=16,Math.abs(h.x)>l&&Math.abs(h.v)>l;);return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(a){function l(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function n(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function r(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(u){setTimeout(function(){throw u},1)}if("scroll"===C){var w,z,A,D=/^x$/i.test(h.axis)?"Left":"Top",E=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,w=h.container["scroll"+D],A=w+m(f).position()[D.toLowerCase()]+E):h.container=null:(w=t.State.scrollAnchor[t.State["scrollProperty"+D]],z=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===D?"Top":"Left")]],A=m(f).offset()[D.toLowerCase()]+E),i={scroll:{rootPropertyValue:!1,startValue:w,currentValue:w,endValue:A,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:D,alternateValue:z}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var F=m.extend(!0,{},g(f).tweensContainer);for(var G in F)if("element"!==G){var H=F[G].startValue;F[G].startValue=F[G].currentValue=F[G].endValue,F[G].endValue=H,p.isEmptyObject(s)||(F[G].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+G+"): "+JSON.stringify(F[G]),f)}i=F}else if("start"===C){var F;g(f).tweensContainer&&g(f).isAnimating===!0&&(F=g(f).tweensContainer),m.each(q,function(a,b){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(a)){var c=l(b,!0),e=c[0],f=c[1],g=c[2];if(v.RegEx.isHex.test(e)){for(var h=["Red","Green","Blue"],i=v.Values.hexToRgb(e),j=g?v.Values.hexToRgb(g):d,k=0;k<h.length;k++){var m=[i[k]];f&&m.push(f),j!==d&&m.push(j[k]),q[a+h[k]]=m}delete q[a]}}});for(var K in q){var L=l(q[K]),M=L[0],N=L[1],O=L[2];K=v.Names.camelCase(K);var P=v.Hooks.getRoot(K),Q=!1;if(g(f).isSVG||"tween"===P||v.Names.prefixCheck(P)[1]!==!1||v.Normalizations.registered[P]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(K)&&!O&&0!==M&&(O=0),h._cacheValues&&F&&F[K]?(O===d&&(O=F[K].endValue+F[K].unitType),Q=g(f).rootPropertyValueCache[P]):v.Hooks.registered[K]?O===d?(Q=v.getPropertyValue(f,P),O=v.getPropertyValue(f,K,Q)):Q=v.Hooks.templates[P][1]:O===d&&(O=v.getPropertyValue(f,K));var R,S,T,U=!1;if(R=n(K,O),O=R[0],T=R[1],R=n(K,M),M=R[0].replace(/^([+-\/*])=/,function(a,b){return U=b,""}),S=R[1],O=parseFloat(O)||0,M=parseFloat(M)||0,"%"===S&&(/^(fontSize|lineHeight)$/.test(K)?(M/=100,S="em"):/^scale/.test(K)?(M/=100,S=""):/(Red|Green|Blue)$/i.test(K)&&(M=M/100*255,S="")),/[\/*]/.test(U))S=T;else if(T!==S&&0!==O)if(0===M)S=T;else{e=e||r();var V=/margin|padding|left|right|width|text|word|letter/i.test(K)||/X$/.test(K)||"x"===K?"x":"y";switch(T){case"%":O*="x"===V?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:O*=e[T+"ToPx"]}switch(S){case"%":O*=1/("x"===V?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:
O*=1/e[S+"ToPx"]}}switch(U){case"+":M=O+M;break;case"-":M=O-M;break;case"*":M=O*M;break;case"/":M=O/M}i[K]={rootPropertyValue:Q,startValue:O,currentValue:O,endValue:M,unitType:S,easing:N},t.debug&&console.log("tweensContainer ("+K+"): "+JSON.stringify(i[K]),f)}else t.debug&&console.log("Skipping ["+P+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer)});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):"finish"===q&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)}),!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==ka?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ia.length;){if(c=ia[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return oa++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:ra?N:sa?Q:qa?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&ya&&0===d-e,g=b&(Aa|Ba)&&0===d-e;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=na(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===ya||f.eventType===Aa)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ba&&(i>xa||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=ma(l.x)>ma(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:la(a.pointers[c].clientX),clientY:la(a.pointers[c].clientY)},c++;return{timeStamp:na(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:la(a[0].clientX),y:la(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:la(c/b),y:la(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Ca:ma(a)>=ma(b)?a>0?Da:Ea:b>0?Fa:Ga}function I(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Ka);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],La)-J(a[1],a[0],La)}function L(a,b){return I(b[0],b[1],La)/I(a[0],a[1],La)}function M(){this.evEl=Na,this.evWin=Oa,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Ra,this.evWin=Sa,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ua,this.evWin=Va,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Aa|Ba)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xa,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(ya|za)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===ya)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Aa|Ba)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bb))return bb;var b=q(a,cb),c=q(a,db);return b&&c?cb+" "+db:b||c?b?cb:db:q(a,ab)?ab:_a}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=eb,this.simultaneous={},this.requireFail=[]}function W(a){return a&jb?"cancel":a&hb?"end":a&gb?"move":a&fb?"start":""}function X(a){return a==Ga?"down":a==Fa?"up":a==Da?"left":a==Ea?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function aa(){V.apply(this,arguments),this._timer=null,this._input=null}function ba(){Z.apply(this,arguments)}function ca(){Z.apply(this,arguments)}function da(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ea(a,b){return b=b||{},b.recognizers=m(b.recognizers,ea.defaults.preset),new fa(a,b)}function fa(a,b){b=b||{},this.options=i(b,ea.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),ga(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ga(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function ha(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ia=["","webkit","moz","MS","ms","o"],ja=b.createElement("div"),ka="function",la=Math.round,ma=Math.abs,na=Date.now,oa=1,pa=/mobile|tablet|ip(ad|hone|od)|android/i,qa="ontouchstart"in a,ra=v(a,"PointerEvent")!==d,sa=qa&&pa.test(navigator.userAgent),ta="touch",ua="pen",va="mouse",wa="kinect",xa=25,ya=1,za=2,Aa=4,Ba=8,Ca=1,Da=2,Ea=4,Fa=8,Ga=16,Ha=Da|Ea,Ia=Fa|Ga,Ja=Ha|Ia,Ka=["x","y"],La=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Ma={mousedown:ya,mousemove:za,mouseup:Aa},Na="mousedown",Oa="mousemove mouseup";j(M,y,{handler:function(a){var b=Ma[a.type];b&ya&&0===a.button&&(this.pressed=!0),b&za&&1!==a.which&&(b=Aa),this.pressed&&this.allow&&(b&Aa&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:va,srcEvent:a}))}});var Pa={pointerdown:ya,pointermove:za,pointerup:Aa,pointercancel:Ba,pointerout:Ba},Qa={2:ta,3:ua,4:va,5:wa},Ra="pointerdown",Sa="pointermove pointerup pointercancel";a.MSPointerEvent&&(Ra="MSPointerDown",Sa="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pa[d],f=Qa[a.pointerType]||a.pointerType,g=f==ta,h=s(b,a.pointerId,"pointerId");e&ya&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Aa|Ba)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Ta={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Ua="touchstart",Va="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Ta[a.type];if(b===ya&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Aa|Ba)&&0===c[0].length-c[1].length&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}});var Wa={touchstart:ya,touchmove:za,touchend:Aa,touchcancel:Ba},Xa="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wa[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:ta,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==ta,e=c.pointerType==va;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Aa|Ba)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Ya=v(ja.style,"touchAction"),Za=Ya!==d,$a="compute",_a="auto",ab="manipulation",bb="none",cb="pan-x",db="pan-y";T.prototype={set:function(a){a==$a&&(a=this.compute()),Za&&(this.manager.element.style[Ya]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Za){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bb),f=q(d,db),g=q(d,cb);return e||f&&c&Ha||g&&c&Ia?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var eb=1,fb=2,gb=4,hb=8,ib=hb,jb=16,kb=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hb>d&&b(!0),b(),d>=hb&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kb|eb)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ib|jb|kb)&&(this.state=eb),this.state=this.process(b),void(this.state&(fb|gb|hb|jb)&&this.tryEmit(b))):(this.reset(),void(this.state=kb))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fb|gb),e=this.attrTest(a);return d&&(c&Ba||!e)?b|jb:d||e?c&Aa?b|hb:b&fb?b|gb:fb:kb}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ja},getTouchAction:function(){var a=this.options.direction,b=[];return a&Ha&&b.push(db),a&Ia&&b.push(cb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Ha?(e=0===f?Ca:0>f?Da:Ea,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ca:0>g?Fa:Ga,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fb||!(this.state&fb)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fb)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(aa,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_a]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Aa|Ba)&&!f)this.reset();else if(a.eventType&ya)this.reset(),this._timer=e(function(){this.state=ib,this.tryEmit()},b.time,this);else if(a.eventType&Aa)return ib;return kb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ib&&(a&&a.eventType&Aa?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=na(),this.manager.emit(this.options.event,this._input)))}}),j(ba,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fb)}}),j(ca,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Ha|Ia,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Ha|Ia)?b=a.velocity:c&Ha?b=a.velocityX:c&Ia&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&ma(b)>this.options.velocity&&a.eventType&Aa},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(da,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ab]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&ya&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Aa)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ib,this.tryEmit()},b.interval,this),fb):ib}return kb},failTimeout:function(){return this._timer=e(function(){this.state=kb},this.options.interval,this),kb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ib&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ea.VERSION="2.0.4",ea.defaults={domEvents:!1,touchAction:$a,enable:!0,inputTarget:null,inputClass:null,preset:[[ba,{enable:!1}],[_,{enable:!1},["rotate"]],[ca,{direction:Ha}],[$,{direction:Ha},["swipe"]],[da],[da,{event:"doubletap",taps:2},["tap"]],[aa]],cssProps:{userSelect:"default",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lb=1,mb=2;fa.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mb:lb},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ib)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fb|gb|hb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&ha(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ga(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(ea,{INPUT_START:ya,INPUT_MOVE:za,INPUT_END:Aa,INPUT_CANCEL:Ba,STATE_POSSIBLE:eb,STATE_BEGAN:fb,STATE_CHANGED:gb,STATE_ENDED:hb,STATE_RECOGNIZED:ib,STATE_CANCELLED:jb,STATE_FAILED:kb,DIRECTION_NONE:Ca,DIRECTION_LEFT:Da,DIRECTION_RIGHT:Ea,DIRECTION_UP:Fa,DIRECTION_DOWN:Ga,DIRECTION_HORIZONTAL:Ha,DIRECTION_VERTICAL:Ia,DIRECTION_ALL:Ja,Manager:fa,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:da,Pan:$,Swipe:ca,Pinch:_,Rotate:ba,Press:aa,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==ka&&define.amd?define(function(){return ea}):"undefined"!=typeof module&&module.exports?module.exports=ea:a[c]=ea}(window,document,"Hammer"),function(a){"function"==typeof define&&define.amd?define(["jquery","hammerjs"],a):"object"==typeof exports?a(require("jquery"),require("hammerjs")):a(jQuery,Hammer)}(function(a,b){function c(c,d){var e=a(c);e.data("hammer")||e.data("hammer",new b(e[0],d))}a.fn.hammer=function(a){return this.each(function(){c(this,a)})},b.Manager.prototype.emit=function(b){return function(c,d){b.call(this,c,d),a(this.element).trigger({type:c,gesture:d})}}(b.Manager.prototype.emit)}),window.Materialize={},Materialize.guid=function(){function a(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return function(){return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()}}(),Materialize.elementOrParentIsFixed=function(a){var b=$(a),c=b.add(b.parents()),d=!1;return c.each(function(){return"fixed"===$(this).css("position")?(d=!0,!1):void 0}),d};var Vel;Vel=$?$.Velocity:Velocity,function(a){a.fn.collapsible=function(b){var c={accordion:void 0};return b=a.extend(c,b),this.each(function(){function c(b){h=g.find("> li > .collapsible-header"),b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}),h.not(b).removeClass("active").parent().removeClass("active"),h.not(b).parent().children(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function d(b){b.hasClass("active")?b.parent().addClass("active"):b.parent().removeClass("active"),b.parent().hasClass("active")?b.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}}):b.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){a(this).css("height","")}})}function e(a){var b=f(a);return b.length>0}function f(a){return a.closest("li > .collapsible-header")}var g=a(this),h=a(this).find("> li > .collapsible-header"),i=g.data("collapsible");g.off("click.collapse",".collapsible-header"),h.off("click.collapse"),b.accordion||"accordion"===i||void 0===i?(h=g.find("> li > .collapsible-header"),h.on("click.collapse",function(b){var d=a(b.target);e(d)&&(d=f(d)),d.toggleClass("active"),c(d)}),c(h.filter(".active").first())):h.each(function(){a(this).on("click.collapse",function(b){var c=a(b.target);e(c)&&(c=f(c)),c.toggleClass("active"),d(c)}),a(this).hasClass("active")&&d(a(this))})})},a(document).ready(function(){a(".collapsible").collapsible()})}(jQuery),function(a){a.fn.scrollTo=function(b){return a(this).scrollTop(a(this).scrollTop()-a(this).offset().top+a(b).offset().top),this},a.fn.dropdown=function(b){var c={inDuration:300,outDuration:225,constrain_width:!0,hover:!1,gutter:0,belowOrigin:!1,alignment:"left"};this.each(function(){function d(){void 0!==g.data("induration")&&(h.inDuration=g.data("inDuration")),void 0!==g.data("outduration")&&(h.outDuration=g.data("outDuration")),void 0!==g.data("constrainwidth")&&(h.constrain_width=g.data("constrainwidth")),void 0!==g.data("hover")&&(h.hover=g.data("hover")),void 0!==g.data("gutter")&&(h.gutter=g.data("gutter")),void 0!==g.data("beloworigin")&&(h.belowOrigin=g.data("beloworigin")),void 0!==g.data("alignment")&&(h.alignment=g.data("alignment"))}function e(){d(),i.addClass("active"),h.constrain_width===!0?i.css("width",g.outerWidth()):i.css("white-space","nowrap");var b=0;h.belowOrigin===!0&&(b=g.height());var c,e,f,j=g.offset().left;if(j+i.innerWidth()>a(window).width()?h.alignment="right":j-i.innerWidth()+g.innerWidth()<0&&(h.alignment="left"),"left"===h.alignment)e=0,f=h.gutter,c=g.position().left+e+f,i.css({left:c});else if("right"===h.alignment){a(window).width()-j-g.innerWidth();e=0,f=h.gutter,c=a(window).width()-g.position().left-g.innerWidth()+f,i.css({right:c})}i.css({position:"absolute",top:g.position().top+b}),i.stop(!0,!0).css("opacity",0).slideDown({queue:!1,duration:h.inDuration,easing:"easeOutCubic",complete:function(){a(this).css("height","")}}).animate({opacity:1},{queue:!1,duration:h.inDuration,easing:"easeOutSine"})}function f(){i.fadeOut(h.outDuration),i.removeClass("active")}var g=a(this),h=a.extend({},c,b),i=a("#"+g.attr("data-activates"));if(d(),g.after(i),h.hover){var j=!1;g.unbind("click."+g.attr("id")),g.on("mouseenter",function(a){j===!1&&(e(),j=!0)}),g.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-content").is(i)||(i.stop(!0,!0),f(),j=!1)}),i.on("mouseleave",function(b){var c=b.toElement||b.relatedTarget;a(c).closest(".dropdown-button").is(g)||(i.stop(!0,!0),f(),j=!1)})}else g.unbind("click."+g.attr("id")),g.bind("click."+g.attr("id"),function(b){g[0]==b.currentTarget&&0===a(b.target).closest(".dropdown-content").length?(b.preventDefault(),e()):g.hasClass("active")&&(f(),a(document).unbind("click."+i.attr("id"))),i.hasClass("active")&&a(document).bind("click."+i.attr("id"),function(b){!i.is(b.target)&&!g.is(b.target)&&!g.find(b.target).length>0&&(f(),a(document).unbind("click."+i.attr("id")))})});g.on("open",e),g.on("close",f)})},a(document).ready(function(){a(".dropdown-button").dropdown()})}(jQuery),function(a){var b=0,c=0,d=function(){return c++,"materialize-lean-overlay-"+c};a.fn.extend({openModal:function(c){a("body").css("overflow","hidden");var e={opacity:.5,in_duration:350,out_duration:250,ready:void 0,complete:void 0,dismissible:!0,starting_top:"4%"},f=d(),g=a(this),h=a('<div class="lean-overlay"></div>'),i=++b;h.attr("id",f).css("z-index",1e3+2*i),g.data("overlay-id",f).css("z-index",1e3+2*i+1),a("body").append(h),c=a.extend(e,c),c.dismissible&&(h.click(function(){g.closeModal(c)}),a(document).on("keyup.leanModal"+f,function(a){27===a.keyCode&&g.closeModal(c)})),g.find(".modal-close").on("click.close",function(a){g.closeModal(c)}),h.css({display:"block",opacity:0}),g.css({display:"block",opacity:0}),h.velocity({opacity:c.opacity},{duration:c.in_duration,queue:!1,ease:"easeOutCubic"}),g.data("associated-overlay",h[0]),g.hasClass("bottom-sheet")?g.velocity({bottom:"0",opacity:1},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready()}}):(a.Velocity.hook(g,"scaleX",.7),g.css({top:c.starting_top}),g.velocity({top:"10%",opacity:1,scaleX:"1"},{duration:c.in_duration,queue:!1,ease:"easeOutCubic",complete:function(){"function"==typeof c.ready&&c.ready()}}))}}),a.fn.extend({closeModal:function(c){var d={out_duration:250,complete:void 0},e=a(this),f=e.data("overlay-id"),g=a("#"+f);c=a.extend(d,c),a("body").css("overflow",""),e.find(".modal-close").off("click.close"),a(document).off("keyup.leanModal"+f),g.velocity({opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutQuart"}),e.hasClass("bottom-sheet")?e.velocity({bottom:"-100%",opacity:0},{duration:c.out_duration,queue:!1,ease:"easeOutCubic",complete:function(){g.css({display:"none"}),"function"==typeof c.complete&&c.complete(),g.remove(),b--}}):e.velocity({top:c.starting_top,opacity:0,scaleX:.7},{duration:c.out_duration,complete:function(){a(this).css("display","none"),"function"==typeof c.complete&&c.complete(),g.remove(),b--}})}}),a.fn.extend({leanModal:function(b){return this.each(function(){var c={starting_top:"4%"},d=a.extend(c,b);a(this).click(function(b){d.starting_top=(a(this).offset().top-a(window).scrollTop())/1.15;var c=a(this).attr("href")||"#"+a(this).data("target");a(c).openModal(d),b.preventDefault()})})}})}(jQuery),function(a){a.fn.materialbox=function(){return this.each(function(){function b(){
d=!1;var b=g.parent(".material-placeholder"),e=(window.innerWidth,window.innerHeight,g.data("width")),h=g.data("height");g.velocity("stop",!0),a("#materialbox-overlay").velocity("stop",!0),a(".materialbox-caption").velocity("stop",!0),a("#materialbox-overlay").velocity({opacity:0},{duration:f,queue:!1,easing:"easeOutQuad",complete:function(){c=!1,a(this).remove()}}),g.velocity({width:e,height:h,left:0,top:0},{duration:f,queue:!1,easing:"easeOutQuad"}),a(".materialbox-caption").velocity({opacity:0},{duration:f,queue:!1,easing:"easeOutQuad",complete:function(){b.css({height:"",width:"",position:"",top:"",left:""}),g.css({height:"",top:"",left:"",width:"","max-width":"",position:"","z-index":""}),g.removeClass("active"),d=!0,a(this).remove()}})}if(!a(this).hasClass("initialized")){a(this).addClass("initialized");var c=!1,d=!0,e=275,f=200,g=a(this),h=a("<div></div>").addClass("material-placeholder");g.wrap(h),g.on("click",function(){var f=g.parent(".material-placeholder"),h=window.innerWidth,i=window.innerHeight,j=g.width(),k=g.height();if(d===!1)return b(),!1;if(c&&d===!0)return b(),!1;d=!1,g.addClass("active"),c=!0,f.css({width:f[0].getBoundingClientRect().width,height:f[0].getBoundingClientRect().height,position:"relative",top:0,left:0}),g.css({position:"absolute","z-index":1e3}).data("width",j).data("height",k);var l=a('<div id="materialbox-overlay"></div>').css({opacity:0}).click(function(){d===!0&&b()});if(a("body").append(l),l.velocity({opacity:1},{duration:e,queue:!1,easing:"easeOutQuad"}),""!==g.data("caption")){var m=a('<div class="materialbox-caption"></div>');m.text(g.data("caption")),a("body").append(m),m.css({display:"inline"}),m.velocity({opacity:1},{duration:e,queue:!1,easing:"easeOutQuad"})}var n=0,o=j/h,p=k/i,q=0,r=0;o>p?(n=k/j,q=.9*h,r=.9*h*n):(n=j/k,q=.9*i*n,r=.9*i),g.hasClass("responsive-img")?g.velocity({"max-width":q,width:j},{duration:0,queue:!1,complete:function(){g.css({left:0,top:0}).velocity({height:r,width:q,left:a(document).scrollLeft()+h/2-g.parent(".material-placeholder").offset().left-q/2,top:a(document).scrollTop()+i/2-g.parent(".material-placeholder").offset().top-r/2},{duration:e,queue:!1,easing:"easeOutQuad",complete:function(){d=!0}})}}):g.css("left",0).css("top",0).velocity({height:r,width:q,left:a(document).scrollLeft()+h/2-g.parent(".material-placeholder").offset().left-q/2,top:a(document).scrollTop()+i/2-g.parent(".material-placeholder").offset().top-r/2},{duration:e,queue:!1,easing:"easeOutQuad",complete:function(){d=!0}})}),a(window).scroll(function(){c&&b()}),a(document).keyup(function(a){27===a.keyCode&&d===!0&&c&&b()})}})},a(document).ready(function(){a(".materialboxed").materialbox()})}(jQuery),function(a){a.fn.parallax=function(){var b=a(window).width();return this.each(function(c){function d(c){var d;d=601>b?e.height()>0?e.height():e.children("img").height():e.height()>0?e.height():500;var f=e.children("img").first(),g=f.height(),h=g-d,i=e.offset().top+d,j=e.offset().top,k=a(window).scrollTop(),l=window.innerHeight,m=k+l,n=(m-j)/(d+l),o=Math.round(h*n);c&&f.css("display","block"),i>k&&k+l>j&&f.css("transform","translate3D(-50%,"+o+"px, 0)")}var e=a(this);e.addClass("parallax"),e.children("img").one("load",function(){d(!0)}).each(function(){this.complete&&a(this).load()}),a(window).scroll(function(){b=a(window).width(),d(!1)}),a(window).resize(function(){b=a(window).width(),d(!1)})})}}(jQuery),function(a){var b={init:function(){return this.each(function(){var b=a(this);a(window).width();b.width("100%");var c,d,e=b.find("li.tab a"),f=b.width(),g=b.find("li").first().outerWidth(),h=0;c=a(e.filter('[href="'+location.hash+'"]')),0===c.length&&(c=a(this).find("li.tab a.active").first()),0===c.length&&(c=a(this).find("li.tab a").first()),c.addClass("active"),h=e.index(c),0>h&&(h=0),d=a(c[0].hash),b.append('<div class="indicator"></div>');var i=b.find(".indicator");b.is(":visible")&&(i.css({right:f-(h+1)*g}),i.css({left:h*g})),a(window).resize(function(){f=b.width(),g=b.find("li").first().outerWidth(),0>h&&(h=0),0!==g&&0!==f&&(i.css({right:f-(h+1)*g}),i.css({left:h*g}))}),e.not(c).each(function(){a(this.hash).hide()}),b.on("click","a",function(j){if(a(this).parent().hasClass("disabled"))return void j.preventDefault();f=b.width(),g=b.find("li").first().outerWidth(),c.removeClass("active"),d.hide(),c=a(this),d=a(this.hash),e=b.find("li.tab a"),c.addClass("active");var k=h;h=e.index(a(this)),0>h&&(h=0),d.show(),h-k>=0?(i.velocity({right:f-(h+1)*g},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({left:h*g},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})):(i.velocity({left:h*g},{duration:300,queue:!1,easing:"easeOutQuad"}),i.velocity({right:f-(h+1)*g},{duration:300,queue:!1,easing:"easeOutQuad",delay:90})),j.preventDefault()})})},select_tab:function(a){this.find('a[href="#'+a+'"]').trigger("click")}};a.fn.tabs=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments)},a(document).ready(function(){a("ul.tabs").tabs()})}(jQuery),function(a){a.fn.tooltip=function(b){var c=null,d=!1,e=null,f=5,g={delay:350};return"remove"===b?(this.each(function(){a("#"+a(this).attr("data-tooltip-id")).remove()}),!1):(b=a.extend(g,b),this.each(function(){var g=Materialize.guid(),h=a(this);h.attr("data-tooltip-id",g);var i=a("<span></span>").text(h.attr("data-tooltip")),j=a("<div></div>");j.addClass("material-tooltip").append(i).appendTo(a("body")).attr("id",g);var k=a("<div></div>").addClass("backdrop");k.appendTo(j),k.css({top:0,left:0}),h.off("mouseenter.tooltip mouseleave.tooltip"),h.on({"mouseenter.tooltip":function(a){var g=h.data("delay");g=void 0===g||""===g?b.delay:g,c=0,e=setInterval(function(){if(c+=10,c>=g&&d===!1){d=!0,j.css({display:"block",left:"0px",top:"0px"}),j.children("span").text(h.attr("data-tooltip"));var a=h.outerWidth(),b=h.outerHeight(),e=h.attr("data-position"),i=j.outerHeight(),l=j.outerWidth(),m="0px",n="0px",o=8;"top"===e?(j.css({top:h.offset().top-i-f,left:h.offset().left+a/2-l/2}),m="-10px",k.css({borderRadius:"14px 14px 0 0",transformOrigin:"50% 90%",marginTop:i,marginLeft:l/2-k.width()/2})):"left"===e?(j.css({top:h.offset().top+b/2-i/2,left:h.offset().left-l-f}),n="-10px",k.css({width:"14px",height:"14px",borderRadius:"14px 0 0 14px",transformOrigin:"95% 50%",marginTop:i/2,marginLeft:l})):"right"===e?(j.css({top:h.offset().top+b/2-i/2,left:h.offset().left+a+f}),n="+10px",k.css({width:"14px",height:"14px",borderRadius:"0 14px 14px 0",transformOrigin:"5% 50%",marginTop:i/2,marginLeft:"0px"})):(j.css({top:h.offset().top+h.outerHeight()+f,left:h.offset().left+a/2-l/2}),m="+10px",k.css({marginLeft:l/2-k.width()/2})),o=l/8,8>o&&(o=8),("right"===e||"left"===e)&&(o=l/10,6>o&&(o=6)),j.velocity({marginTop:m,marginLeft:n},{duration:350,queue:!1}).velocity({opacity:1},{duration:300,delay:50,queue:!1}),k.css({display:"block"}).velocity({opacity:1},{duration:55,delay:0,queue:!1}).velocity({scale:o},{duration:300,delay:0,queue:!1,easing:"easeInOutQuad"})}},10)},"mouseleave.tooltip":function(){clearInterval(e),c=0,j.velocity({opacity:0,marginTop:0,marginLeft:0},{duration:225,queue:!1,delay:225}),k.velocity({opacity:0,scale:1},{duration:225,delay:275,queue:!1,complete:function(){k.css("display","none"),j.css("display","none"),d=!1}})}})}))},a(document).ready(function(){a(".tooltipped").tooltip()})}(jQuery),function(a){"use strict";function b(a){return null!==a&&a===a.window}function c(a){return b(a)?a:9===a.nodeType&&a.defaultView}function d(a){var b,d,e={top:0,left:0},f=a&&a.ownerDocument;return b=f.documentElement,"undefined"!=typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect()),d=c(f),{top:e.top+d.pageYOffset-b.clientTop,left:e.left+d.pageXOffset-b.clientLeft}}function e(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(b+=c+":"+a[c]+";");return b}function f(a){if(k.allowEvent(a)===!1)return null;for(var b=null,c=a.target||a.srcElement;null!==c.parentElement;){if(!(c instanceof SVGElement||-1===c.className.indexOf("waves-effect"))){b=c;break}if(c.classList.contains("waves-effect")){b=c;break}c=c.parentElement}return b}function g(b){var c=f(b);null!==c&&(j.show(b,c),"ontouchstart"in a&&(c.addEventListener("touchend",j.hide,!1),c.addEventListener("touchcancel",j.hide,!1)),c.addEventListener("mouseup",j.hide,!1),c.addEventListener("mouseleave",j.hide,!1))}var h=h||{},i=document.querySelectorAll.bind(document),j={duration:750,show:function(a,b){if(2===a.button)return!1;var c=b||this,f=document.createElement("div");f.className="waves-ripple",c.appendChild(f);var g=d(c),h=a.pageY-g.top,i=a.pageX-g.left,k="scale("+c.clientWidth/100*10+")";"touches"in a&&(h=a.touches[0].pageY-g.top,i=a.touches[0].pageX-g.left),f.setAttribute("data-hold",Date.now()),f.setAttribute("data-scale",k),f.setAttribute("data-x",i),f.setAttribute("data-y",h);var l={top:h+"px",left:i+"px"};f.className=f.className+" waves-notransition",f.setAttribute("style",e(l)),f.className=f.className.replace("waves-notransition",""),l["-webkit-transform"]=k,l["-moz-transform"]=k,l["-ms-transform"]=k,l["-o-transform"]=k,l.transform=k,l.opacity="1",l["-webkit-transition-duration"]=j.duration+"ms",l["-moz-transition-duration"]=j.duration+"ms",l["-o-transition-duration"]=j.duration+"ms",l["transition-duration"]=j.duration+"ms",l["-webkit-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-moz-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["-o-transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",l["transition-timing-function"]="cubic-bezier(0.250, 0.460, 0.450, 0.940)",f.setAttribute("style",e(l))},hide:function(a){k.touchup(a);var b=this,c=(1.4*b.clientWidth,null),d=b.getElementsByClassName("waves-ripple");if(!(d.length>0))return!1;c=d[d.length-1];var f=c.getAttribute("data-x"),g=c.getAttribute("data-y"),h=c.getAttribute("data-scale"),i=Date.now()-Number(c.getAttribute("data-hold")),l=350-i;0>l&&(l=0),setTimeout(function(){var a={top:g+"px",left:f+"px",opacity:"0","-webkit-transition-duration":j.duration+"ms","-moz-transition-duration":j.duration+"ms","-o-transition-duration":j.duration+"ms","transition-duration":j.duration+"ms","-webkit-transform":h,"-moz-transform":h,"-ms-transform":h,"-o-transform":h,transform:h};c.setAttribute("style",e(a)),setTimeout(function(){try{b.removeChild(c)}catch(a){return!1}},j.duration)},l)},wrapInput:function(a){for(var b=0;b<a.length;b++){var c=a[b];if("input"===c.tagName.toLowerCase()){var d=c.parentNode;if("i"===d.tagName.toLowerCase()&&-1!==d.className.indexOf("waves-effect"))continue;var e=document.createElement("i");e.className=c.className+" waves-input-wrapper";var f=c.getAttribute("style");f||(f=""),e.setAttribute("style",f),c.className="waves-button-input",c.removeAttribute("style"),d.replaceChild(e,c),e.appendChild(c)}}}},k={touches:0,allowEvent:function(a){var b=!0;return"touchstart"===a.type?k.touches+=1:"touchend"===a.type||"touchcancel"===a.type?setTimeout(function(){k.touches>0&&(k.touches-=1)},500):"mousedown"===a.type&&k.touches>0&&(b=!1),b},touchup:function(a){k.allowEvent(a)}};h.displayEffect=function(b){b=b||{},"duration"in b&&(j.duration=b.duration),j.wrapInput(i(".waves-effect")),"ontouchstart"in a&&document.body.addEventListener("touchstart",g,!1),document.body.addEventListener("mousedown",g,!1)},h.attach=function(b){"input"===b.tagName.toLowerCase()&&(j.wrapInput([b]),b=b.parentElement),"ontouchstart"in a&&b.addEventListener("touchstart",g,!1),b.addEventListener("mousedown",g,!1)},a.Waves=h,document.addEventListener("DOMContentLoaded",function(){h.displayEffect()},!1)}(window),Materialize.toast=function(a,b,c,d){function e(a){var b=document.createElement("div");if(b.classList.add("toast"),c)for(var e=c.split(" "),f=0,g=e.length;g>f;f++)b.classList.add(e[f]);("object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&null!==a&&1===a.nodeType&&"string"==typeof a.nodeName)?b.appendChild(a):a instanceof jQuery?b.appendChild(a[0]):b.innerHTML=a;var h=new Hammer(b,{prevent_default:!1});return h.on("pan",function(a){var c=a.deltaX,d=80;b.classList.contains("panning")||b.classList.add("panning");var e=1-Math.abs(c/d);0>e&&(e=0),Vel(b,{left:c,opacity:e},{duration:50,queue:!1,easing:"easeOutQuad"})}),h.on("panend",function(a){var c=a.deltaX,e=80;Math.abs(c)>e?Vel(b,{marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),b.parentNode.removeChild(b)}}):(b.classList.remove("panning"),Vel(b,{left:0,opacity:1},{duration:300,easing:"easeOutExpo",queue:!1}))}),b}c=c||"";var f=document.getElementById("toast-container");null===f&&(f=document.createElement("div"),f.id="toast-container",document.body.appendChild(f));var g=e(a);a&&f.appendChild(g),g.style.top="35px",g.style.opacity=0,Vel(g,{top:"0px",opacity:1},{duration:300,easing:"easeOutCubic",queue:!1});var h=b,i=setInterval(function(){null===g.parentNode&&window.clearInterval(i),g.classList.contains("panning")||(h-=20),0>=h&&(Vel(g,{opacity:0,marginTop:"-40px"},{duration:375,easing:"easeOutExpo",queue:!1,complete:function(){"function"==typeof d&&d(),this[0].parentNode.removeChild(this[0])}}),window.clearInterval(i))},20)},function(a){var b={init:function(b){var c={menuWidth:240,edge:"left",closeOnClick:!1};b=a.extend(c,b),a(this).each(function(){function c(c){g=!1,h=!1,a("body").css("overflow",""),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),"left"===b.edge?(f.css({width:"",right:"",left:"0"}),e.velocity({left:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}})):(f.css({width:"",right:"0",left:""}),e.velocity({right:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutCubic",complete:function(){c===!0&&(e.removeAttr("style"),e.css("width",b.menuWidth))}}))}var d=a(this),e=a("#"+d.attr("data-activates"));240!=b.menuWidth&&e.css("width",b.menuWidth);var f=a('<div class="drag-target"></div>');a("body").append(f),"left"==b.edge?(e.css("left",-1*(b.menuWidth+10)),f.css({left:0})):(e.addClass("right-aligned").css("right",-1*(b.menuWidth+10)).css("left",""),f.css({right:0})),e.hasClass("fixed")&&window.innerWidth>992&&e.css("left",0),e.hasClass("fixed")&&a(window).resize(function(){window.innerWidth>992?0!==a("#sidenav-overlay").css("opacity")&&h?c(!0):(e.removeAttr("style"),e.css("width",b.menuWidth)):h===!1&&("left"===b.edge?e.css("left",-1*(b.menuWidth+10)):e.css("right",-1*(b.menuWidth+10)))}),b.closeOnClick===!0&&e.on("click.itemclick","a:not(.collapsible-header)",function(){c()});var g=!1,h=!1;f.on("click",function(){c()}),f.hammer({prevent_default:!1}).bind("pan",function(d){if("touch"==d.gesture.pointerType){var f=(d.gesture.direction,d.gesture.center.x);d.gesture.center.y,d.gesture.velocityX;if(a("body").css("overflow","hidden"),0===a("#sidenav-overlay").length){var g=a('<div id="sidenav-overlay"></div>');g.css("opacity",0).click(function(){c()}),a("body").append(g)}if("left"===b.edge&&(f>b.menuWidth?f=b.menuWidth:0>f&&(f=0)),"left"===b.edge)f<b.menuWidth/2?h=!1:f>=b.menuWidth/2&&(h=!0),e.css("left",f-b.menuWidth);else{f<window.innerWidth-b.menuWidth/2?h=!0:f>=window.innerWidth-b.menuWidth/2&&(h=!1);var i=-1*(f-b.menuWidth/2);i>0&&(i=0),e.css("right",i)}var j;"left"===b.edge?(j=f/b.menuWidth,a("#sidenav-overlay").velocity({opacity:j},{duration:50,queue:!1,easing:"easeOutQuad"})):(j=Math.abs((f-window.innerWidth)/b.menuWidth),a("#sidenav-overlay").velocity({opacity:j},{duration:50,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(c){if("touch"==c.gesture.pointerType){var d=c.gesture.velocityX;g=!1,"left"===b.edge?h&&.3>=d||-.5>d?(e.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:0,left:""})):(!h||d>.3)&&(a("body").css("overflow",""),e.velocity({left:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:"",left:0})):h&&d>=-.3||d>.5?(e.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:1},{duration:50,queue:!1,easing:"easeOutQuad"}),f.css({width:"50%",right:"",left:0})):(!h||-.3>d)&&(a("body").css("overflow",""),e.velocity({right:-1*(b.menuWidth+10)},{duration:200,queue:!1,easing:"easeOutQuad"}),a("#sidenav-overlay").velocity({opacity:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}}),f.css({width:"10px",right:0,left:""}))}}),d.click(function(){if(h===!0)h=!1,g=!1,c();else{a("body").css("overflow","hidden"),a("body").append(f),"left"===b.edge?(f.css({width:"50%",right:0,left:""}),e.velocity({left:0},{duration:300,queue:!1,easing:"easeOutQuad"})):(f.css({width:"50%",right:"",left:0}),e.velocity({right:0},{duration:300,queue:!1,easing:"easeOutQuad"}),e.css("left",""));var d=a('<div id="sidenav-overlay"></div>');d.css("opacity",0).click(function(){h=!1,g=!1,c(),d.velocity({opacity:0},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){a(this).remove()}})}),a("body").append(d),d.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){h=!0,g=!1}})}return!1})})},show:function(){this.trigger("click")},hide:function(){a("#sidenav-overlay").trigger("click")}};a.fn.sideNav=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.sideNav"):b.init.apply(this,arguments)}}(jQuery),function(a){function b(b,c,d,e){var f=a();return a.each(g,function(a,g){if(g.height()>0){var h=g.offset().top,i=g.offset().left,j=i+g.width(),k=h+g.height(),l=!(i>c||e>j||h>d||b>k);l&&f.push(g)}}),f}function c(){++j;var c=f.scrollTop(),d=f.scrollLeft(),e=d+f.width(),g=c+f.height(),i=b(c+k.top+200,e+k.right,g+k.bottom,d+k.left);a.each(i,function(a,b){var c=b.data("scrollSpy:ticks");"number"!=typeof c&&b.triggerHandler("scrollSpy:enter"),b.data("scrollSpy:ticks",j)}),a.each(h,function(a,b){var c=b.data("scrollSpy:ticks");"number"==typeof c&&c!==j&&(b.triggerHandler("scrollSpy:exit"),b.data("scrollSpy:ticks",null))}),h=i}function d(){f.trigger("scrollSpy:winSize")}function e(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:l(),g=null,f=a.apply(d,e),d=e=null};return function(){var j=l();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k?(clearTimeout(g),g=null,h=j,f=a.apply(d,e),d=e=null):g||c.trailing===!1||(g=setTimeout(i,k)),f}}var f=a(window),g=[],h=[],i=!1,j=0,k={top:0,right:0,bottom:0,left:0},l=Date.now||function(){return(new Date).getTime()};a.scrollSpy=function(b,d){var h=[];b=a(b),b.each(function(b,c){g.push(a(c)),a(c).data("scrollSpy:id",b),a("a[href=#"+a(c).attr("id")+"]").click(function(b){b.preventDefault();var c=a(this.hash).offset().top+1;a("html, body").animate({scrollTop:c-200},{duration:400,queue:!1,easing:"easeOutCubic"})})}),d=d||{throttle:100},k.top=d.offsetTop||0,k.right=d.offsetRight||0,k.bottom=d.offsetBottom||0,k.left=d.offsetLeft||0;var j=e(c,d.throttle||100),l=function(){a(document).ready(j)};return i||(f.on("scroll",l),f.on("resize",l),i=!0),setTimeout(l,0),b.on("scrollSpy:enter",function(){h=a.grep(h,function(a){return 0!=a.height()});var b=a(this);h[0]?(a("a[href=#"+h[0].attr("id")+"]").removeClass("active"),b.data("scrollSpy:id")<h[0].data("scrollSpy:id")?h.unshift(a(this)):h.push(a(this))):h.push(a(this)),a("a[href=#"+h[0].attr("id")+"]").addClass("active")}),b.on("scrollSpy:exit",function(){if(h=a.grep(h,function(a){return 0!=a.height()}),h[0]){a("a[href=#"+h[0].attr("id")+"]").removeClass("active");var b=a(this);h=a.grep(h,function(a){return a.attr("id")!=b.attr("id")}),h[0]&&a("a[href=#"+h[0].attr("id")+"]").addClass("active")}}),b},a.winSizeSpy=function(b){return a.winSizeSpy=function(){return f},b=b||{throttle:100},f.on("resize",e(d,b.throttle||100))},a.fn.scrollSpy=function(b){return a.scrollSpy(a(this),b)}}(jQuery),function(a){a(document).ready(function(){function b(b){var c=b.css("font-family"),e=b.css("font-size");e&&d.css("font-size",e),c&&d.css("font-family",c),"off"===b.attr("wrap")&&d.css("overflow-wrap","normal").css("white-space","pre"),d.text(b.val()+"\n");var f=d.html().replace(/\n/g,"<br>");d.html(f),b.is(":visible")?d.css("width",b.width()):d.css("width",a(window).width()/2),b.css("height",d.height())}Materialize.updateTextFields=function(){var b="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a(b).each(function(b,c){a(c).val().length>0||void 0!==a(this).attr("placeholder")||a(c)[0].validity.badInput===!0?a(this).siblings("label").addClass("active"):a(this).siblings("label, i").removeClass("active")})};var c="input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";a("input[autofocus]").siblings("label, i").addClass("active"),a(document).on("change",c,function(){(0!==a(this).val().length||void 0!==a(this).attr("placeholder"))&&a(this).siblings("label").addClass("active"),validate_field(a(this))}),a(document).ready(function(){Materialize.updateTextFields()}),a(document).on("reset",function(b){var d=a(b.target);d.is("form")&&(d.find(c).removeClass("valid").removeClass("invalid"),d.find(c).each(function(){""===a(this).attr("value")&&a(this).siblings("label, i").removeClass("active")}),d.find("select.initialized").each(function(){var a=d.find("option[selected]").text();d.siblings("input.select-dropdown").val(a)}))}),a(document).on("focus",c,function(){a(this).siblings("label, i").addClass("active")}),a(document).on("blur",c,function(){var b=a(this);0===b.val().length&&b[0].validity.badInput!==!0&&void 0===b.attr("placeholder")&&b.siblings("label, i").removeClass("active"),0===b.val().length&&b[0].validity.badInput!==!0&&void 0!==b.attr("placeholder")&&b.siblings("i").removeClass("active"),validate_field(b)}),window.validate_field=function(a){var b=void 0!==a.attr("length"),c=parseInt(a.attr("length")),d=a.val().length;0===a.val().length&&a[0].validity.badInput===!1?a.hasClass("validate")&&(a.removeClass("valid"),a.removeClass("invalid")):a.hasClass("validate")&&(a.is(":valid")&&b&&c>=d||a.is(":valid")&&!b?(a.removeClass("invalid"),a.addClass("valid")):(a.removeClass("valid"),a.addClass("invalid")))};var d=a(".hiddendiv").first();d.length||(d=a('<div class="hiddendiv common"></div>'),a("body").append(d));var e=".materialize-textarea";a(e).each(function(){var c=a(this);c.val().length&&b(c)}),a("body").on("keyup keydown autoresize",e,function(){b(a(this))}),a(document).on("change",'.file-field input[type="file"]',function(){for(var b=a(this).closest(".file-field"),c=b.find("input.file-path"),d=a(this)[0].files,e=[],f=0;f<d.length;f++)e.push(d[f].name);c.val(e.join(", ")),c.trigger("change")});var f,g="input[type=range]",h=!1;a(g).each(function(){var b=a('<span class="thumb"><span class="value"></span></span>');a(this).after(b)});var i=".range-field";a(document).on("change",g,function(b){var c=a(this).siblings(".thumb");c.find(".value").html(a(this).val())}),a(document).on("input mousedown touchstart",g,function(b){var c=a(this).siblings(".thumb");c.length<=0&&(c=a('<span class="thumb"><span class="value"></span></span>'),a(this).append(c)),c.find(".value").html(a(this).val()),h=!0,a(this).addClass("active"),c.hasClass("active")||c.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),f=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left;var d=a(this).outerWidth();0>f?f=0:f>d&&(f=d),c.addClass("active").css("left",f),c.find(".value").html(a(this).val())}),a(document).on("mouseup touchend",i,function(){h=!1,a(this).removeClass("active")}),a(document).on("mousemove touchmove",i,function(b){var c,d=a(this).children(".thumb");if(h){d.hasClass("active")||d.velocity({height:"30px",width:"30px",top:"-20px",marginLeft:"-15px"},{duration:300,easing:"easeOutExpo"}),c=void 0===b.pageX||null===b.pageX?b.originalEvent.touches[0].pageX-a(this).offset().left:b.pageX-a(this).offset().left;var e=a(this).outerWidth();0>c?c=0:c>e&&(c=e),d.addClass("active").css("left",c),d.find(".value").html(d.siblings(g).val())}}),a(document).on("mouseout touchleave",i,function(){if(!h){var b=a(this).children(".thumb");b.hasClass("active")&&b.velocity({height:"0",width:"0",top:"10px",marginLeft:"-6px"},{duration:100}),b.removeClass("active")}})}),a.fn.material_select=function(b){a(this).each(function(){if($select=a(this),!$select.hasClass("browser-default")){var c=$select.data("select-id");if(c&&($select.parent().find("span.caret").remove(),$select.parent().find("input").remove(),$select.unwrap(),a("ul#select-options-"+c).remove()),"destroy"===b)return void $select.data("select-id",null).removeClass("initialized");var d=Materialize.guid();$select.data("select-id",d);var e=a('<div class="select-wrapper"></div>');e.addClass($select.attr("class"));var f,g=a('<ul id="select-options-'+d+'" class="dropdown-content select-dropdown"></ul>'),h=$select.children("option");f=void 0!==$select.find("option:selected")?$select.find("option:selected"):g.first(),h.each(function(){g.append(a('<li class="'+(a(this).is(":disabled")?"disabled":"")+'"><span>'+a(this).html()+"</span></li>"))}),g.find("li").each(function(c){var d=$select;a(this).click(function(){a(this).hasClass("disabled")||(d.find("option").eq(c).prop("selected",!0),d.trigger("change"),d.siblings("input.select-dropdown").val(a(this).text()),"undefined"!=typeof b&&b())})}),$select.wrap(e);var i=a('<span class="caret">&#9660;</span>');$select.is(":disabled")&&i.addClass("disabled");var j=f.html().replace(/"/g,"&quot;"),k=a('<input type="text" class="select-dropdown" readonly="true" '+($select.is(":disabled")?"disabled":"")+' data-activates="select-options-'+d+'" value="'+j+'"/>');$select.before(k),k.before(i),a("body").append(g),$select.is(":disabled")||k.dropdown({hover:!1}),$select.attr("tabindex")&&a(k[0]).attr("tabindex",$select.attr("tabindex")),$select.addClass("initialized"),k.on("focus",function(){a(this).trigger("open"),f=a(this).val(),selectedOption=g.find("li").filter(function(){return a(this).text().toLowerCase()===f.toLowerCase()})[0],activateOption(g,selectedOption)}),k.on("blur",function(){a(this).trigger("close")}),activateOption=function(b,c){b.find("li.active").removeClass("active"),a(c).addClass("active"),b.scrollTo(c)},filterQuery=[],onKeyDown=function(b){if(9==b.which)return void k.trigger("close");if(40==b.which&&!g.is(":visible"))return void k.trigger("open");if(13!=b.which||g.is(":visible")){b.preventDefault(),letter=String.fromCharCode(b.which).toLowerCase();var c=[9,13,27,38,40];letter&&-1===c.indexOf(b.which)&&(filterQuery.push(letter),string=filterQuery.join(""),newOption=g.find("li").filter(function(){return 0===a(this).text().toLowerCase().indexOf(string)})[0],newOption&&activateOption(g,newOption)),13==b.which&&(activeOption=g.find("li.active:not(.disabled)")[0],activeOption&&(a(activeOption).trigger("click"),k.trigger("close"))),40==b.which&&(newOption=g.find("li.active").next("li:not(.disabled)")[0],newOption&&activateOption(g,newOption)),27==b.which&&k.trigger("close"),38==b.which&&(newOption=g.find("li.active").prev("li:not(.disabled)")[0],newOption&&activateOption(g,newOption)),setTimeout(function(){filterQuery=[]},1e3)}},k.on("keydown",onKeyDown)}})}}(jQuery),function(a){var b={init:function(b){var c={indicators:!0,height:400,transition:500,interval:6e3};return b=a.extend(c,b),this.each(function(){function c(a,b){a.hasClass("center-align")?a.velocity({opacity:0,translateY:-100},{duration:b,queue:!1}):a.hasClass("right-align")?a.velocity({opacity:0,translateX:100},{duration:b,queue:!1}):a.hasClass("left-align")&&a.velocity({opacity:0,translateX:-100},{duration:b,queue:!1})}function d(a){a>=h.length?a=0:0>a&&(a=h.length-1),i=g.find(".active").index(),i!=a&&(e=h.eq(i),$caption=e.find(".caption"),e.removeClass("active"),e.velocity({opacity:0},{duration:b.transition,queue:!1,easing:"easeOutQuad",complete:function(){h.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),c($caption,b.transition),b.indicators&&j.eq(i).removeClass("active"),h.eq(a).velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),h.eq(a).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,delay:b.transition,queue:!1,easing:"easeOutQuad"}),h.eq(a).addClass("active"),b.indicators&&j.eq(a).addClass("active"))}var e,f=a(this),g=f.find("ul.slides").first(),h=g.find("li"),i=g.find(".active").index();if(-1!=i&&(e=h.eq(i)),f.hasClass("fullscreen")||(b.indicators?f.height(b.height+40):f.height(b.height),g.height(b.height)),h.find(".caption").each(function(){c(a(this),0)}),h.find("img").each(function(){a(this).css("background-image","url("+a(this).attr("src")+")"),a(this).attr("src","data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")}),b.indicators){var j=a('<ul class="indicators"></ul>');h.each(function(c){var e=a('<li class="indicator-item"></li>');e.click(function(){var c=g.parent(),e=c.find(a(this)).index();d(e),clearInterval($interval),$interval=setInterval(function(){i=g.find(".active").index(),h.length==i+1?i=0:i+=1,d(i)},b.transition+b.interval)}),j.append(e)}),f.append(j),j=f.find("ul.indicators").find("li.indicator-item")}e?e.show():(h.first().addClass("active").velocity({opacity:1},{duration:b.transition,queue:!1,easing:"easeOutQuad"}),i=0,e=h.eq(i),b.indicators&&j.eq(i).addClass("active")),e.find("img").each(function(){e.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:b.transition,queue:!1,easing:"easeOutQuad"})}),$interval=setInterval(function(){i=g.find(".active").index(),d(i+1)},b.transition+b.interval);var k=!1,l=!1,m=!1;f.hammer({prevent_default:!1}).bind("pan",function(a){if("touch"===a.gesture.pointerType){clearInterval($interval);var b=a.gesture.direction,c=a.gesture.deltaX,d=a.gesture.velocityX;$curr_slide=g.find(".active"),$curr_slide.velocity({translateX:c},{duration:50,queue:!1,easing:"easeOutQuad"}),4===b&&(c>f.innerWidth()/2||-.65>d)?m=!0:2===b&&(c<-1*f.innerWidth()/2||d>.65)&&(l=!0);var e;l&&(e=$curr_slide.next(),0===e.length&&(e=h.first()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),m&&(e=$curr_slide.prev(),0===e.length&&(e=h.last()),e.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(a){"touch"===a.gesture.pointerType&&($curr_slide=g.find(".active"),k=!1,curr_index=g.find(".active").index(),m||l?l?(d(curr_index+1),$curr_slide.velocity({translateX:-1*f.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):m&&(d(curr_index-1),$curr_slide.velocity({translateX:f.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}),l=!1,m=!1,clearInterval($interval),$interval=setInterval(function(){i=g.find(".active").index(),h.length==i+1?i=0:i+=1,d(i)},b.transition+b.interval))}),f.on("sliderPause",function(){clearInterval($interval)}),f.on("sliderStart",function(){clearInterval($interval),$interval=setInterval(function(){i=g.find(".active").index(),h.length==i+1?i=0:i+=1,d(i)},b.transition+b.interval)})})},pause:function(){a(this).trigger("sliderPause")},start:function(){a(this).trigger("sliderStart")}};a.fn.slider=function(c){return b[c]?b[c].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.tooltip"):b.init.apply(this,arguments);
}}(jQuery),function(a){a(document).ready(function(){a(document).on("click.card",".card",function(b){a(this).find("> .card-reveal").length&&(a(b.target).is(a(".card-reveal .card-title"))||a(b.target).is(a(".card-reveal .card-title i"))?a(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){a(this).css({display:"none"})}}):(a(b.target).is(a(".card .activator"))||a(b.target).is(a(".card .activator i")))&&a(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"}))})})}(jQuery),function(a){a(document).ready(function(){a(document).on("click.chip",".chip .material-icons",function(b){a(this).parent().remove()})})}(jQuery),function(a){a(document).ready(function(){a.fn.pushpin=function(b){var c={top:0,bottom:1/0,offset:0};return b=a.extend(c,b),$index=0,this.each(function(){function c(a){a.removeClass("pin-top"),a.removeClass("pinned"),a.removeClass("pin-bottom")}function d(d,e){d.each(function(){b.top<=e&&b.bottom>=e&&!a(this).hasClass("pinned")&&(c(a(this)),a(this).css("top",b.offset),a(this).addClass("pinned")),e<b.top&&!a(this).hasClass("pin-top")&&(c(a(this)),a(this).css("top",0),a(this).addClass("pin-top")),e>b.bottom&&!a(this).hasClass("pin-bottom")&&(c(a(this)),a(this).addClass("pin-bottom"),a(this).css("top",b.bottom-g))})}var e=Materialize.guid(),f=a(this),g=a(this).offset().top;d(f,a(window).scrollTop()),a(window).on("scroll."+e,function(){var c=a(window).scrollTop()+b.offset;d(f,c)})})}})}(jQuery),function(a){a(document).ready(function(){a.fn.reverse=[].reverse,a(document).on("mouseenter.fixedActionBtn",".fixed-action-btn",function(c){var d=a(this);b(d)}),a(document).on("mouseleave.fixedActionBtn",".fixed-action-btn",function(b){var d=a(this);c(d)})}),a.fn.extend({openFAB:function(){var c=a(this);b(c)},closeFAB:function(){c($this)}});var b=function(b){if($this=b,$this.hasClass("active")===!1){$this.addClass("active"),$this.find("ul .btn-floating").velocity({scaleY:".4",scaleX:".4",translateY:"40px"},{duration:0});var c=0;$this.find("ul .btn-floating").reverse().each(function(){a(this).velocity({opacity:"1",scaleX:"1",scaleY:"1",translateY:"0"},{duration:80,delay:c}),c+=40})}},c=function(a){$this=a,$this.removeClass("active");$this.find("ul .btn-floating").velocity("stop",!0),$this.find("ul .btn-floating").velocity({opacity:"0",scaleX:".4",scaleY:".4",translateY:"40px"},{duration:80})}}(jQuery),function(a){Materialize.fadeInImage=function(b){var c=a(b);c.css({opacity:0}),a(c).velocity({opacity:1},{duration:650,queue:!1,easing:"easeOutSine"}),a(c).velocity({opacity:1},{duration:1300,queue:!1,easing:"swing",step:function(b,c){c.start=100;var d=b/100,e=150-(100-b)/1.75;100>e&&(e=100),b>=0&&a(this).css({"-webkit-filter":"grayscale("+d+")brightness("+e+"%)",filter:"grayscale("+d+")brightness("+e+"%)"})}})},Materialize.showStaggeredList=function(b){var c=0;a(b).find("li").velocity({translateX:"-100px"},{duration:0}),a(b).find("li").each(function(){a(this).velocity({opacity:"1",translateX:"0"},{duration:800,delay:c,easing:[60,10]}),c+=120})},a(document).ready(function(){var b=!1,c=!1;a(".dismissable").each(function(){a(this).hammer({prevent_default:!1}).bind("pan",function(d){if("touch"===d.gesture.pointerType){var e=a(this),f=d.gesture.direction,g=d.gesture.deltaX,h=d.gesture.velocityX;e.velocity({translateX:g},{duration:50,queue:!1,easing:"easeOutQuad"}),4===f&&(g>e.innerWidth()/2||-.75>h)&&(b=!0),2===f&&(g<-1*e.innerWidth()/2||h>.75)&&(c=!0)}}).bind("panend",function(d){if(Math.abs(d.gesture.deltaX)<a(this).innerWidth()/2&&(c=!1,b=!1),"touch"===d.gesture.pointerType){var e=a(this);if(b||c){var f;f=b?e.innerWidth():-1*e.innerWidth(),e.velocity({translateX:f},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){e.css("border","none"),e.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){e.remove()}})}})}else e.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});b=!1,c=!1}})})})}(jQuery),function(a){Materialize.scrollFire=function(a){var b=!1;window.addEventListener("scroll",function(){b=!0}),setInterval(function(){if(b){b=!1;for(var c=window.pageYOffset+window.innerHeight,d=0;d<a.length;d++){var e=a[d],f=e.selector,g=e.offset,h=e.callback,i=document.querySelector(f);if(null!==i){var j=i.getBoundingClientRect().top+window.pageYOffset;if(c>j+g&&e.done!==!0){var k=new Function(h);k(),e.done=!0}}}}},100)}}(jQuery),function(a){"function"==typeof define&&define.amd?define("picker",["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):this.Picker=a(jQuery)}(function(a){function b(f,g,i,l){function m(){return b._.node("div",b._.node("div",b._.node("div",b._.node("div",y.component.nodes(t.open),v.box),v.wrap),v.frame),v.holder)}function n(){w.data(g,y).addClass(v.input).attr("tabindex",-1).val(w.data("value")?y.get("select",u.format):f.value),u.editable||w.on("focus."+t.id+" click."+t.id,function(a){a.preventDefault(),y.$root[0].focus()}).on("keydown."+t.id,q),e(f,{haspopup:!0,expanded:!1,readonly:!1,owns:f.id+"_root"})}function o(){y.$root.on({keydown:q,focusin:function(a){y.$root.removeClass(v.focused),a.stopPropagation()},"mousedown click":function(b){var c=b.target;c!=y.$root.children()[0]&&(b.stopPropagation(),"mousedown"!=b.type||a(c).is("input, select, textarea, button, option")||(b.preventDefault(),y.$root[0].focus()))}}).on({focus:function(){w.addClass(v.target)},blur:function(){w.removeClass(v.target)}}).on("focus.toOpen",r).on("click","[data-pick], [data-nav], [data-clear], [data-close]",function(){var b=a(this),c=b.data(),d=b.hasClass(v.navDisabled)||b.hasClass(v.disabled),e=h();e=e&&(e.type||e.href),(d||e&&!a.contains(y.$root[0],e))&&y.$root[0].focus(),!d&&c.nav?y.set("highlight",y.component.item.highlight,{nav:c.nav}):!d&&"pick"in c?y.set("select",c.pick):c.clear?y.clear().close(!0):c.close&&y.close(!0)}),e(y.$root[0],"hidden",!0)}function p(){var b;u.hiddenName===!0?(b=f.name,f.name=""):(b=["string"==typeof u.hiddenPrefix?u.hiddenPrefix:"","string"==typeof u.hiddenSuffix?u.hiddenSuffix:"_submit"],b=b[0]+f.name+b[1]),y._hidden=a('<input type=hidden name="'+b+'"'+(w.data("value")||f.value?' value="'+y.get("select",u.formatSubmit)+'"':"")+">")[0],w.on("change."+t.id,function(){y._hidden.value=f.value?y.get("select",u.formatSubmit):""}),u.container?a(u.container).append(y._hidden):w.after(y._hidden)}function q(a){var b=a.keyCode,c=/^(8|46)$/.test(b);return 27==b?(y.close(),!1):void((32==b||c||!t.open&&y.component.key[b])&&(a.preventDefault(),a.stopPropagation(),c?y.clear().close():y.open()))}function r(a){a.stopPropagation(),"focus"==a.type&&y.$root.addClass(v.focused),y.open()}if(!f)return b;var s=!1,t={id:f.id||"P"+Math.abs(~~(Math.random()*new Date))},u=i?a.extend(!0,{},i.defaults,l):l||{},v=a.extend({},b.klasses(),u.klass),w=a(f),x=function(){return this.start()},y=x.prototype={constructor:x,$node:w,start:function(){return t&&t.start?y:(t.methods={},t.start=!0,t.open=!1,t.type=f.type,f.autofocus=f==h(),f.readOnly=!u.editable,f.id=f.id||t.id,"text"!=f.type&&(f.type="text"),y.component=new i(y,u),y.$root=a(b._.node("div",m(),v.picker,'id="'+f.id+'_root" tabindex="0"')),o(),u.formatSubmit&&p(),n(),u.container?a(u.container).append(y.$root):w.after(y.$root),y.on({start:y.component.onStart,render:y.component.onRender,stop:y.component.onStop,open:y.component.onOpen,close:y.component.onClose,set:y.component.onSet}).on({start:u.onStart,render:u.onRender,stop:u.onStop,open:u.onOpen,close:u.onClose,set:u.onSet}),s=c(y.$root.children()[0]),f.autofocus&&y.open(),y.trigger("start").trigger("render"))},render:function(a){return a?y.$root.html(m()):y.$root.find("."+v.box).html(y.component.nodes(t.open)),y.trigger("render")},stop:function(){return t.start?(y.close(),y._hidden&&y._hidden.parentNode.removeChild(y._hidden),y.$root.remove(),w.removeClass(v.input).removeData(g),setTimeout(function(){w.off("."+t.id)},0),f.type=t.type,f.readOnly=!1,y.trigger("stop"),t.methods={},t.start=!1,y):y},open:function(c){return t.open?y:(w.addClass(v.active),e(f,"expanded",!0),setTimeout(function(){y.$root.addClass(v.opened),e(y.$root[0],"hidden",!1)},0),c!==!1&&(t.open=!0,s&&k.css("overflow","hidden").css("padding-right","+="+d()),y.$root[0].focus(),j.on("click."+t.id+" focusin."+t.id,function(a){var b=a.target;b!=f&&b!=document&&3!=a.which&&y.close(b===y.$root.children()[0])}).on("keydown."+t.id,function(c){var d=c.keyCode,e=y.component.key[d],f=c.target;27==d?y.close(!0):f!=y.$root[0]||!e&&13!=d?a.contains(y.$root[0],f)&&13==d&&(c.preventDefault(),f.click()):(c.preventDefault(),e?b._.trigger(y.component.key.go,y,[b._.trigger(e)]):y.$root.find("."+v.highlighted).hasClass(v.disabled)||y.set("select",y.component.item.highlight).close())})),y.trigger("open"))},close:function(a){return a&&(y.$root.off("focus.toOpen")[0].focus(),setTimeout(function(){y.$root.on("focus.toOpen",r)},0)),w.removeClass(v.active),e(f,"expanded",!1),setTimeout(function(){y.$root.removeClass(v.opened+" "+v.focused),e(y.$root[0],"hidden",!0)},0),t.open?(t.open=!1,s&&k.css("overflow","").css("padding-right","-="+d()),j.off("."+t.id),y.trigger("close")):y},clear:function(a){return y.set("clear",null,a)},set:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(d=g&&a.isPlainObject(c)?c:d||{},b){g||(h[b]=c);for(e in h)f=h[e],e in y.component.item&&(void 0===f&&(f=null),y.component.set(e,f,d)),("select"==e||"clear"==e)&&w.val("clear"==e?"":y.get(e,u.format)).trigger("change");y.render()}return d.muted?y:y.trigger("set",h)},get:function(a,c){if(a=a||"value",null!=t[a])return t[a];if("valueSubmit"==a){if(y._hidden)return y._hidden.value;a="value"}if("value"==a)return f.value;if(a in y.component.item){if("string"==typeof c){var d=y.component.get(a);return d?b._.trigger(y.component.formats.toString,y.component,[c,d]):""}return y.component.get(a)}},on:function(b,c,d){var e,f,g=a.isPlainObject(b),h=g?b:{};if(b){g||(h[b]=c);for(e in h)f=h[e],d&&(e="_"+e),t.methods[e]=t.methods[e]||[],t.methods[e].push(f)}return y},off:function(){var a,b,c=arguments;for(a=0,namesCount=c.length;a<namesCount;a+=1)b=c[a],b in t.methods&&delete t.methods[b];return y},trigger:function(a,c){var d=function(a){var d=t.methods[a];d&&d.map(function(a){b._.trigger(a,y,[c])})};return d("_"+a),d(a),y}};return new x}function c(a){var b,c="position";return a.currentStyle?b=a.currentStyle[c]:window.getComputedStyle&&(b=getComputedStyle(a)[c]),"fixed"==b}function d(){if(k.height()<=i.height())return 0;var b=a('<div style="visibility:hidden;width:100px" />').appendTo("body"),c=b[0].offsetWidth;b.css("overflow","scroll");var d=a('<div style="width:100%" />').appendTo(b),e=d[0].offsetWidth;return b.remove(),c-e}function e(b,c,d){if(a.isPlainObject(c))for(var e in c)f(b,e,c[e]);else f(b,c,d)}function f(a,b,c){a.setAttribute(("role"==b?"":"aria-")+b,c)}function g(b,c){a.isPlainObject(b)||(b={attribute:c}),c="";for(var d in b){var e=("role"==d?"":"aria-")+d,f=b[d];c+=null==f?"":e+'="'+b[d]+'"'}return c}function h(){try{return document.activeElement}catch(a){}}var i=a(window),j=a(document),k=a(document.documentElement);return b.klasses=function(a){return a=a||"picker",{picker:a,opened:a+"--opened",focused:a+"--focused",input:a+"__input",active:a+"__input--active",target:a+"__input--target",holder:a+"__holder",frame:a+"__frame",wrap:a+"__wrap",box:a+"__box"}},b._={group:function(a){for(var c,d="",e=b._.trigger(a.min,a);e<=b._.trigger(a.max,a,[e]);e+=a.i)c=b._.trigger(a.item,a,[e]),d+=b._.node(a.node,c[0],c[1],c[2]);return d},node:function(b,c,d,e){return c?(c=a.isArray(c)?c.join(""):c,d=d?' class="'+d+'"':"",e=e?" "+e:"","<"+b+d+e+">"+c+"</"+b+">"):""},lead:function(a){return(10>a?"0":"")+a},trigger:function(a,b,c){return"function"==typeof a?a.apply(b,c||[]):a},digits:function(a){return/\d/.test(a[1])?2:1},isDate:function(a){return{}.toString.call(a).indexOf("Date")>-1&&this.isInteger(a.getDate())},isInteger:function(a){return{}.toString.call(a).indexOf("Number")>-1&&a%1===0},ariaAttr:g},b.extend=function(c,d){a.fn[c]=function(e,f){var g=this.data(c);return"picker"==e?g:g&&"string"==typeof e?b._.trigger(g[e],g,[f]):this.each(function(){var f=a(this);f.data(c)||new b(this,c,d,e)})},a.fn[c].defaults=d.defaults},b}),function(a){"function"==typeof define&&define.amd?define(["picker","jquery"],a):"object"==typeof exports?module.exports=a(require("./picker.js"),require("jquery")):a(Picker,jQuery)}(function(a,b){function c(a,b){var c=this,d=a.$node[0],e=d.value,f=a.$node.data("value"),g=f||e,h=f?b.formatSubmit:b.format,i=function(){return d.currentStyle?"rtl"==d.currentStyle.direction:"rtl"==getComputedStyle(a.$root[0]).direction};c.settings=b,c.$node=a.$node,c.queue={min:"measure create",max:"measure create",now:"now create",select:"parse create validate",highlight:"parse navigate create validate",view:"parse create validate viewset",disable:"deactivate",enable:"activate"},c.item={},c.item.clear=null,c.item.disable=(b.disable||[]).slice(0),c.item.enable=-function(a){return a[0]===!0?a.shift():-1}(c.item.disable),c.set("min",b.min).set("max",b.max).set("now"),g?c.set("select",g,{format:h}):c.set("select",null).set("highlight",c.item.now),c.key={40:7,38:-7,39:function(){return i()?-1:1},37:function(){return i()?1:-1},go:function(a){var b=c.item.highlight,d=new Date(b.year,b.month,b.date+a);c.set("highlight",d,{interval:a}),this.render()}},a.on("render",function(){a.$root.find("."+b.klass.selectMonth).on("change",function(){var c=this.value;c&&(a.set("highlight",[a.get("view").year,c,a.get("highlight").date]),a.$root.find("."+b.klass.selectMonth).trigger("focus"))}),a.$root.find("."+b.klass.selectYear).on("change",function(){var c=this.value;c&&(a.set("highlight",[c,a.get("view").month,a.get("highlight").date]),a.$root.find("."+b.klass.selectYear).trigger("focus"))})},1).on("open",function(){var d="";c.disabled(c.get("now"))&&(d=":not(."+b.klass.buttonToday+")"),a.$root.find("button"+d+", select").attr("disabled",!1)},1).on("close",function(){a.$root.find("button, select").attr("disabled",!0)},1)}var d=7,e=6,f=a._;c.prototype.set=function(a,b,c){var d=this,e=d.item;return null===b?("clear"==a&&(a="select"),e[a]=b,d):(e["enable"==a?"disable":"flip"==a?"enable":a]=d.queue[a].split(" ").map(function(e){return b=d[e](a,b,c)}).pop(),"select"==a?d.set("highlight",e.select,c):"highlight"==a?d.set("view",e.highlight,c):a.match(/^(flip|min|max|disable|enable)$/)&&(e.select&&d.disabled(e.select)&&d.set("select",e.select,c),e.highlight&&d.disabled(e.highlight)&&d.set("highlight",e.highlight,c)),d)},c.prototype.get=function(a){return this.item[a]},c.prototype.create=function(a,c,d){var e,g=this;return c=void 0===c?a:c,c==-(1/0)||c==1/0?e=c:b.isPlainObject(c)&&f.isInteger(c.pick)?c=c.obj:b.isArray(c)?(c=new Date(c[0],c[1],c[2]),c=f.isDate(c)?c:g.create().obj):c=f.isInteger(c)||f.isDate(c)?g.normalize(new Date(c),d):g.now(a,c,d),{year:e||c.getFullYear(),month:e||c.getMonth(),date:e||c.getDate(),day:e||c.getDay(),obj:e||c,pick:e||c.getTime()}},c.prototype.createRange=function(a,c){var d=this,e=function(a){return a===!0||b.isArray(a)||f.isDate(a)?d.create(a):a};return f.isInteger(a)||(a=e(a)),f.isInteger(c)||(c=e(c)),f.isInteger(a)&&b.isPlainObject(c)?a=[c.year,c.month,c.date+a]:f.isInteger(c)&&b.isPlainObject(a)&&(c=[a.year,a.month,a.date+c]),{from:e(a),to:e(c)}},c.prototype.withinRange=function(a,b){return a=this.createRange(a.from,a.to),b.pick>=a.from.pick&&b.pick<=a.to.pick},c.prototype.overlapRanges=function(a,b){var c=this;return a=c.createRange(a.from,a.to),b=c.createRange(b.from,b.to),c.withinRange(a,b.from)||c.withinRange(a,b.to)||c.withinRange(b,a.from)||c.withinRange(b,a.to)},c.prototype.now=function(a,b,c){return b=new Date,c&&c.rel&&b.setDate(b.getDate()+c.rel),this.normalize(b,c)},c.prototype.navigate=function(a,c,d){var e,f,g,h,i=b.isArray(c),j=b.isPlainObject(c),k=this.item.view;if(i||j){for(j?(f=c.year,g=c.month,h=c.date):(f=+c[0],g=+c[1],h=+c[2]),d&&d.nav&&k&&k.month!==g&&(f=k.year,g=k.month),e=new Date(f,g+(d&&d.nav?d.nav:0),1),f=e.getFullYear(),g=e.getMonth();new Date(f,g,h).getMonth()!==g;)h-=1;c=[f,g,h]}return c},c.prototype.normalize=function(a){return a.setHours(0,0,0,0),a},c.prototype.measure=function(a,b){var c=this;return b?"string"==typeof b?b=c.parse(a,b):f.isInteger(b)&&(b=c.now(a,b,{rel:b})):b="min"==a?-(1/0):1/0,b},c.prototype.viewset=function(a,b){return this.create([b.year,b.month,1])},c.prototype.validate=function(a,c,d){var e,g,h,i,j=this,k=c,l=d&&d.interval?d.interval:1,m=-1===j.item.enable,n=j.item.min,o=j.item.max,p=m&&j.item.disable.filter(function(a){if(b.isArray(a)){var d=j.create(a).pick;d<c.pick?e=!0:d>c.pick&&(g=!0)}return f.isInteger(a)}).length;if((!d||!d.nav)&&(!m&&j.disabled(c)||m&&j.disabled(c)&&(p||e||g)||!m&&(c.pick<=n.pick||c.pick>=o.pick)))for(m&&!p&&(!g&&l>0||!e&&0>l)&&(l*=-1);j.disabled(c)&&(Math.abs(l)>1&&(c.month<k.month||c.month>k.month)&&(c=k,l=l>0?1:-1),c.pick<=n.pick?(h=!0,l=1,c=j.create([n.year,n.month,n.date+(c.pick===n.pick?0:-1)])):c.pick>=o.pick&&(i=!0,l=-1,c=j.create([o.year,o.month,o.date+(c.pick===o.pick?0:1)])),!h||!i);)c=j.create([c.year,c.month,c.date+l]);return c},c.prototype.disabled=function(a){var c=this,d=c.item.disable.filter(function(d){return f.isInteger(d)?a.day===(c.settings.firstDay?d:d-1)%7:b.isArray(d)||f.isDate(d)?a.pick===c.create(d).pick:b.isPlainObject(d)?c.withinRange(d,a):void 0});return d=d.length&&!d.filter(function(a){return b.isArray(a)&&"inverted"==a[3]||b.isPlainObject(a)&&a.inverted}).length,-1===c.item.enable?!d:d||a.pick<c.item.min.pick||a.pick>c.item.max.pick},c.prototype.parse=function(a,b,c){var d=this,e={};return b&&"string"==typeof b?(c&&c.format||(c=c||{},c.format=d.settings.format),d.formats.toArray(c.format).map(function(a){var c=d.formats[a],g=c?f.trigger(c,d,[b,e]):a.replace(/^!/,"").length;c&&(e[a]=b.substr(0,g)),b=b.substr(g)}),[e.yyyy||e.yy,+(e.mm||e.m)-1,e.dd||e.d]):b},c.prototype.formats=function(){function a(a,b,c){var d=a.match(/\w+/)[0];return c.mm||c.m||(c.m=b.indexOf(d)+1),d.length}function b(a){return a.match(/\w+/)[0].length}return{d:function(a,b){return a?f.digits(a):b.date},dd:function(a,b){return a?2:f.lead(b.date)},ddd:function(a,c){return a?b(a):this.settings.weekdaysShort[c.day]},dddd:function(a,c){return a?b(a):this.settings.weekdaysFull[c.day]},m:function(a,b){return a?f.digits(a):b.month+1},mm:function(a,b){return a?2:f.lead(b.month+1)},mmm:function(b,c){var d=this.settings.monthsShort;return b?a(b,d,c):d[c.month]},mmmm:function(b,c){var d=this.settings.monthsFull;return b?a(b,d,c):d[c.month]},yy:function(a,b){return a?2:(""+b.year).slice(2)},yyyy:function(a,b){return a?4:b.year},toArray:function(a){return a.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)},toString:function(a,b){var c=this;return c.formats.toArray(a).map(function(a){return f.trigger(c.formats[a],c,[0,b])||a.replace(/^!/,"")}).join("")}}}(),c.prototype.isDateExact=function(a,c){var d=this;return f.isInteger(a)&&f.isInteger(c)||"boolean"==typeof a&&"boolean"==typeof c?a===c:(f.isDate(a)||b.isArray(a))&&(f.isDate(c)||b.isArray(c))?d.create(a).pick===d.create(c).pick:b.isPlainObject(a)&&b.isPlainObject(c)?d.isDateExact(a.from,c.from)&&d.isDateExact(a.to,c.to):!1},c.prototype.isDateOverlap=function(a,c){var d=this,e=d.settings.firstDay?1:0;return f.isInteger(a)&&(f.isDate(c)||b.isArray(c))?(a=a%7+e,a===d.create(c).day+1):f.isInteger(c)&&(f.isDate(a)||b.isArray(a))?(c=c%7+e,c===d.create(a).day+1):b.isPlainObject(a)&&b.isPlainObject(c)?d.overlapRanges(a,c):!1},c.prototype.flipEnable=function(a){var b=this.item;b.enable=a||(-1==b.enable?1:-1)},c.prototype.deactivate=function(a,c){var d=this,e=d.item.disable.slice(0);return"flip"==c?d.flipEnable():c===!1?(d.flipEnable(1),e=[]):c===!0?(d.flipEnable(-1),e=[]):c.map(function(a){for(var c,g=0;g<e.length;g+=1)if(d.isDateExact(a,e[g])){c=!0;break}c||(f.isInteger(a)||f.isDate(a)||b.isArray(a)||b.isPlainObject(a)&&a.from&&a.to)&&e.push(a)}),e},c.prototype.activate=function(a,c){var d=this,e=d.item.disable,g=e.length;return"flip"==c?d.flipEnable():c===!0?(d.flipEnable(1),e=[]):c===!1?(d.flipEnable(-1),e=[]):c.map(function(a){var c,h,i,j;for(i=0;g>i;i+=1){if(h=e[i],d.isDateExact(h,a)){c=e[i]=null,j=!0;break}if(d.isDateOverlap(h,a)){b.isPlainObject(a)?(a.inverted=!0,c=a):b.isArray(a)?(c=a,c[3]||c.push("inverted")):f.isDate(a)&&(c=[a.getFullYear(),a.getMonth(),a.getDate(),"inverted"]);break}}if(c)for(i=0;g>i;i+=1)if(d.isDateExact(e[i],a)){e[i]=null;break}if(j)for(i=0;g>i;i+=1)if(d.isDateOverlap(e[i],a)){e[i]=null;break}c&&e.push(c)}),e.filter(function(a){return null!=a})},c.prototype.nodes=function(a){var b=this,c=b.settings,g=b.item,h=g.now,i=g.select,j=g.highlight,k=g.view,l=g.disable,m=g.min,n=g.max,o=function(a,b){return c.firstDay&&(a.push(a.shift()),b.push(b.shift())),f.node("thead",f.node("tr",f.group({min:0,max:d-1,i:1,node:"th",item:function(d){return[a[d],c.klass.weekdays,'scope=col title="'+b[d]+'"']}})))}((c.showWeekdaysFull?c.weekdaysFull:c.weekdaysLetter).slice(0),c.weekdaysFull.slice(0)),p=function(a){return f.node("div"," ",c.klass["nav"+(a?"Next":"Prev")]+(a&&k.year>=n.year&&k.month>=n.month||!a&&k.year<=m.year&&k.month<=m.month?" "+c.klass.navDisabled:""),"data-nav="+(a||-1)+" "+f.ariaAttr({role:"button",controls:b.$node[0].id+"_table"})+' title="'+(a?c.labelMonthNext:c.labelMonthPrev)+'"')},q=function(d){var e=c.showMonthsShort?c.monthsShort:c.monthsFull;return"short_months"==d&&(e=c.monthsShort),c.selectMonths&&void 0==d?f.node("select",f.group({min:0,max:11,i:1,node:"option",item:function(a){return[e[a],0,"value="+a+(k.month==a?" selected":"")+(k.year==m.year&&a<m.month||k.year==n.year&&a>n.month?" disabled":"")]}}),c.klass.selectMonth+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelMonthSelect+'"'):"short_months"==d?null!=i?f.node("div",e[i.month]):f.node("div",e[k.month]):f.node("div",e[k.month],c.klass.month)},r=function(d){var e=k.year,g=c.selectYears===!0?5:~~(c.selectYears/2);if(g){var h=m.year,i=n.year,j=e-g,l=e+g;if(h>j&&(l+=h-j,j=h),l>i){var o=j-h,p=l-i;j-=o>p?p:o,l=i}if(c.selectYears&&void 0==d)return f.node("select",f.group({min:j,max:l,i:1,node:"option",item:function(a){return[a,0,"value="+a+(e==a?" selected":"")]}}),c.klass.selectYear+" browser-default",(a?"":"disabled")+" "+f.ariaAttr({controls:b.$node[0].id+"_table"})+' title="'+c.labelYearSelect+'"')}return"raw"==d?f.node("div",e):f.node("div",e,c.klass.year)};return createDayLabel=function(){return null!=i?f.node("div",i.date):f.node("div",h.date)},createWeekdayLabel=function(){var a;a=null!=i?i.day:h.day;var b=c.weekdaysFull[a];return b},f.node("div",f.node("div",createWeekdayLabel(),"picker__weekday-display")+f.node("div",q("short_months"),c.klass.month_display)+f.node("div",createDayLabel(),c.klass.day_display)+f.node("div",r("raw"),c.klass.year_display),c.klass.date_display)+f.node("div",f.node("div",(c.selectYears?q()+r():q()+r())+p()+p(1),c.klass.header)+f.node("table",o+f.node("tbody",f.group({min:0,max:e-1,i:1,node:"tr",item:function(a){var e=c.firstDay&&0===b.create([k.year,k.month,1]).day?-7:0;return[f.group({min:d*a-k.day+e+1,max:function(){return this.min+d-1},i:1,node:"td",item:function(a){a=b.create([k.year,k.month,a+(c.firstDay?1:0)]);var d=i&&i.pick==a.pick,e=j&&j.pick==a.pick,g=l&&b.disabled(a)||a.pick<m.pick||a.pick>n.pick,o=f.trigger(b.formats.toString,b,[c.format,a]);return[f.node("div",a.date,function(b){return b.push(k.month==a.month?c.klass.infocus:c.klass.outfocus),h.pick==a.pick&&b.push(c.klass.now),d&&b.push(c.klass.selected),e&&b.push(c.klass.highlighted),g&&b.push(c.klass.disabled),b.join(" ")}([c.klass.day]),"data-pick="+a.pick+" "+f.ariaAttr({role:"gridcell",label:o,selected:d&&b.$node.val()===o?!0:null,activedescendant:e?!0:null,disabled:g?!0:null})),"",f.ariaAttr({role:"presentation"})]}})]}})),c.klass.table,'id="'+b.$node[0].id+'_table" '+f.ariaAttr({role:"grid",controls:b.$node[0].id,readonly:!0})),c.klass.calendar_container)+f.node("div",f.node("button",c.today,"btn-flat picker__today","type=button data-pick="+h.pick+(a&&!b.disabled(h)?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.clear,"btn-flat picker__clear","type=button data-clear=1"+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id}))+f.node("button",c.close,"btn-flat picker__close","type=button data-close=true "+(a?"":" disabled")+" "+f.ariaAttr({controls:b.$node[0].id})),c.klass.footer)},c.defaults=function(a){return{labelMonthNext:"Next month",labelMonthPrev:"Previous month",labelMonthSelect:"Select a month",labelYearSelect:"Select a year",monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdaysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],weekdaysLetter:["S","M","T","W","T","F","S"],today:"Today",clear:"Clear",close:"Close",format:"d mmmm, yyyy",klass:{table:a+"table",header:a+"header",date_display:a+"date-display",day_display:a+"day-display",month_display:a+"month-display",year_display:a+"year-display",calendar_container:a+"calendar-container",navPrev:a+"nav--prev",navNext:a+"nav--next",navDisabled:a+"nav--disabled",month:a+"month",year:a+"year",selectMonth:a+"select--month",selectYear:a+"select--year",weekdays:a+"weekday",day:a+"day",disabled:a+"day--disabled",selected:a+"day--selected",highlighted:a+"day--highlighted",now:a+"day--today",infocus:a+"day--infocus",outfocus:a+"day--outfocus",footer:a+"footer",buttonClear:a+"button--clear",buttonToday:a+"button--today",buttonClose:a+"button--close"}}}(a.klasses().picker+"__"),a.extend("pickadate",c)}),function(a){function b(){var b=+a(this).attr("length"),c=+a(this).val().length,d=b>=c;a(this).parent().find('span[class="character-counter"]').html(c+"/"+b),e(d,a(this))}function c(b){var c=a("<span/>").addClass("character-counter").css("float","right").css("font-size","12px").css("height",1);b.parent().append(c)}function d(){a(this).parent().find('span[class="character-counter"]').html("")}function e(a,b){var c=b.hasClass("invalid");a&&c?b.removeClass("invalid"):a||c||(b.removeClass("valid"),b.addClass("invalid"))}a.fn.characterCounter=function(){return this.each(function(){var e=void 0!==a(this).attr("length");e&&(a(this).on("input",b),a(this).on("focus",b),a(this).on("blur",d),c(a(this)))})},a(document).ready(function(){a("input, textarea").characterCounter()})}(jQuery);
/**
 * Swiper 3.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: February 7, 2016
 */
var ResizeHandler;!function(){"use strict";function e(e){e.fn.swiper=function(a){var r;return e(this).each(function(){var e=new t(this,a);r||(r=e)}),r}}var a,t=function(e,i){function s(e){return Math.floor(e)}function n(){b.autoplayTimeoutId=setTimeout(function(){b.params.loop?(b.fixLoop(),b._slideNext(),b.emit("onAutoplay",b)):b.isEnd?i.autoplayStopOnLast?b.stopAutoplay():(b._slideTo(0),b.emit("onAutoplay",b)):(b._slideNext(),b.emit("onAutoplay",b))},b.params.autoplay)}function o(e,t){var r=a(e.target);if(!r.is(t))if("string"==typeof t)r=r.parents(t);else if(t.nodeType){var i;return r.parents().each(function(e,a){a===t&&(i=t)}),i?t:void 0}return 0===r.length?void 0:r[0]}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){b.onResize(!0),b.emit("onObserverUpdate",b,e)})});r.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),b.observers.push(r)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!b.params.allowSwipeToNext&&(b.isHorizontal()&&39===a||!b.isHorizontal()&&40===a))return!1;if(!b.params.allowSwipeToPrev&&(b.isHorizontal()&&37===a||!b.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(b.container.parents(".swiper-slide").length>0&&0===b.container.parents(".swiper-slide-active").length)return;var r={left:window.pageXOffset,top:window.pageYOffset},i=window.innerWidth,s=window.innerHeight,n=b.container.offset();b.rtl&&(n.left=n.left-b.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+b.width,n.top],[n.left,n.top+b.height],[n.left+b.width,n.top+b.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=r.left&&p[0]<=r.left+i&&p[1]>=r.top&&p[1]<=r.top+s&&(t=!0)}if(!t)return}b.isHorizontal()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!b.rtl||37===a&&b.rtl)&&b.slideNext(),(37===a&&!b.rtl||39===a&&b.rtl)&&b.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&b.slideNext(),38===a&&b.slidePrev())}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=b.mousewheel.event,t=0,r=b.rtl?-1:1;if("mousewheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*r}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*r:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*r}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*r:-e.deltaY;if(0!==t){if(b.params.mousewheelInvert&&(t=-t),b.params.freeMode){var i=b.getWrapperTranslate()+t*b.params.mousewheelSensitivity,s=b.isBeginning,n=b.isEnd;if(i>=b.minTranslate()&&(i=b.minTranslate()),i<=b.maxTranslate()&&(i=b.maxTranslate()),b.setWrapperTransition(0),b.setWrapperTranslate(i),b.updateProgress(),b.updateActiveIndex(),(!s&&b.isBeginning||!n&&b.isEnd)&&b.updateClasses(),b.params.freeModeSticky?(clearTimeout(b.mousewheel.timeout),b.mousewheel.timeout=setTimeout(function(){b.slideReset()},300)):b.params.lazyLoading&&b.lazy&&b.lazy.load(),0===i||i===b.maxTranslate())return}else{if((new window.Date).getTime()-b.mousewheel.lastScrollTime>60)if(0>t)if(b.isEnd&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slideNext();else if(b.isBeginning&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slidePrev();b.mousewheel.lastScrollTime=(new window.Date).getTime()}return b.params.autoplay&&b.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function u(e,t){e=a(e);var r,i,s,n=b.rtl?-1:1;r=e.attr("data-swiper-parallax")||"0",i=e.attr("data-swiper-parallax-x"),s=e.attr("data-swiper-parallax-y"),i||s?(i=i||"0",s=s||"0"):b.isHorizontal()?(i=r,s="0"):(s=r,i="0"),i=i.indexOf("%")>=0?parseInt(i,10)*t*n+"%":i*t*n+"px",s=s.indexOf("%")>=0?parseInt(s,10)*t+"%":s*t+"px",e.transform("translate3d("+i+", "+s+",0px)")}function c(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,i);var m={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},h=i&&i.virtualTranslate;i=i||{};var f={};for(var g in i)if("object"!=typeof i[g]||null===i[g]||(i[g].nodeType||i[g]===window||i[g]===document||"undefined"!=typeof r&&i[g]instanceof r||"undefined"!=typeof jQuery&&i[g]instanceof jQuery))f[g]=i[g];else{f[g]={};for(var v in i[g])f[g][v]=i[g][v]}for(var w in m)if("undefined"==typeof i[w])i[w]=m[w];else if("object"==typeof i[w])for(var y in m[w])"undefined"==typeof i[w][y]&&(i[w][y]=m[w][y]);var b=this;if(b.params=i,b.originalParams=f,b.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof r&&(a=r),("undefined"!=typeof a||(a="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r))&&(b.$=a,b.currentBreakpoint=void 0,b.getActiveBreakpoint=function(){if(!b.params.breakpoints)return!1;var e,a=!1,t=[];for(e in b.params.breakpoints)b.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var r=0;r<t.length;r++)e=t[r],e>=window.innerWidth&&!a&&(a=e);return a||"max"},b.setBreakpoint=function(){var e=b.getActiveBreakpoint();if(e&&b.currentBreakpoint!==e){var a=e in b.params.breakpoints?b.params.breakpoints[e]:b.originalParams,t=b.params.loop&&a.slidesPerView!==b.params.slidesPerView;for(var r in a)b.params[r]=a[r];b.currentBreakpoint=e,t&&b.destroyLoop&&b.reLoop(!0)}},b.params.breakpoints&&b.setBreakpoint(),b.container=a(e),0!==b.container.length)){if(b.container.length>1){var x=[];return b.container.each(function(){x.push(new t(this,i))}),x}b.container[0].swiper=b,b.container.data("swiper",b),b.classNames.push("swiper-container-"+b.params.direction),b.params.freeMode&&b.classNames.push("swiper-container-free-mode"),b.support.flexbox||(b.classNames.push("swiper-container-no-flexbox"),b.params.slidesPerColumn=1),b.params.autoHeight&&b.classNames.push("swiper-container-autoheight"),(b.params.parallax||b.params.watchSlidesVisibility)&&(b.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(b.params.effect)>=0&&(b.support.transforms3d?(b.params.watchSlidesProgress=!0,b.classNames.push("swiper-container-3d")):b.params.effect="slide"),"slide"!==b.params.effect&&b.classNames.push("swiper-container-"+b.params.effect),"cube"===b.params.effect&&(b.params.resistanceRatio=0,b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.centeredSlides=!1,b.params.spaceBetween=0,b.params.virtualTranslate=!0,b.params.setWrapperSize=!1),("fade"===b.params.effect||"flip"===b.params.effect)&&(b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.watchSlidesProgress=!0,b.params.spaceBetween=0,b.params.setWrapperSize=!1,"undefined"==typeof h&&(b.params.virtualTranslate=!0)),b.params.grabCursor&&b.support.touch&&(b.params.grabCursor=!1),b.wrapper=b.container.children("."+b.params.wrapperClass),b.params.pagination&&(b.paginationContainer=a(b.params.pagination),b.params.uniqueNavElements&&"string"==typeof b.params.pagination&&b.paginationContainer.length>1&&1===b.container.find(b.params.pagination).length&&(b.paginationContainer=b.container.find(b.params.pagination)),"bullets"===b.params.paginationType&&b.params.paginationClickable?b.paginationContainer.addClass("swiper-pagination-clickable"):b.params.paginationClickable=!1,b.paginationContainer.addClass("swiper-pagination-"+b.params.paginationType)),(b.params.nextButton||b.params.prevButton)&&(b.params.nextButton&&(b.nextButton=a(b.params.nextButton),b.params.uniqueNavElements&&"string"==typeof b.params.nextButton&&b.nextButton.length>1&&1===b.container.find(b.params.nextButton).length&&(b.nextButton=b.container.find(b.params.nextButton))),b.params.prevButton&&(b.prevButton=a(b.params.prevButton),b.params.uniqueNavElements&&"string"==typeof b.params.prevButton&&b.prevButton.length>1&&1===b.container.find(b.params.prevButton).length&&(b.prevButton=b.container.find(b.params.prevButton)))),b.isHorizontal=function(){return"horizontal"===b.params.direction},b.rtl=b.isHorizontal()&&("rtl"===b.container[0].dir.toLowerCase()||"rtl"===b.container.css("direction")),b.rtl&&b.classNames.push("swiper-container-rtl"),b.rtl&&(b.wrongRTL="-webkit-box"===b.wrapper.css("display")),b.params.slidesPerColumn>1&&b.classNames.push("swiper-container-multirow"),b.device.android&&b.classNames.push("swiper-container-android"),b.container.addClass(b.classNames.join(" ")),b.translate=0,b.progress=0,b.velocity=0,b.lockSwipeToNext=function(){b.params.allowSwipeToNext=!1},b.lockSwipeToPrev=function(){b.params.allowSwipeToPrev=!1},b.lockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!1},b.unlockSwipeToNext=function(){b.params.allowSwipeToNext=!0},b.unlockSwipeToPrev=function(){b.params.allowSwipeToPrev=!0},b.unlockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!0},b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab"),b.imagesToLoad=[],b.imagesLoaded=0,b.loadImage=function(e,a,t,r,i){function s(){i&&i()}var n;e.complete&&r?s():a?(n=new window.Image,n.onload=s,n.onerror=s,t&&(n.srcset=t),a&&(n.src=a)):s()},b.preloadImages=function(){function e(){"undefined"!=typeof b&&null!==b&&(void 0!==b.imagesLoaded&&b.imagesLoaded++,b.imagesLoaded===b.imagesToLoad.length&&(b.params.updateOnImagesReady&&b.update(),b.emit("onImagesReady",b)))}b.imagesToLoad=b.container.find("img");for(var a=0;a<b.imagesToLoad.length;a++)b.loadImage(b.imagesToLoad[a],b.imagesToLoad[a].currentSrc||b.imagesToLoad[a].getAttribute("src"),b.imagesToLoad[a].srcset||b.imagesToLoad[a].getAttribute("srcset"),!0,e)},b.autoplayTimeoutId=void 0,b.autoplaying=!1,b.autoplayPaused=!1,b.startAutoplay=function(){return"undefined"!=typeof b.autoplayTimeoutId?!1:b.params.autoplay?b.autoplaying?!1:(b.autoplaying=!0,b.emit("onAutoplayStart",b),void n()):!1},b.stopAutoplay=function(e){b.autoplayTimeoutId&&(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplaying=!1,b.autoplayTimeoutId=void 0,b.emit("onAutoplayStop",b))},b.pauseAutoplay=function(e){b.autoplayPaused||(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplayPaused=!0,0===e?(b.autoplayPaused=!1,n()):b.wrapper.transitionEnd(function(){b&&(b.autoplayPaused=!1,b.autoplaying?n():b.stopAutoplay())}))},b.minTranslate=function(){return-b.snapGrid[0]},b.maxTranslate=function(){return-b.snapGrid[b.snapGrid.length-1]},b.updateAutoHeight=function(){var e=b.slides.eq(b.activeIndex)[0];if("undefined"!=typeof e){var a=e.offsetHeight;a&&b.wrapper.css("height",a+"px")}},b.updateContainerSize=function(){var e,a;e="undefined"!=typeof b.params.width?b.params.width:b.container[0].clientWidth,a="undefined"!=typeof b.params.height?b.params.height:b.container[0].clientHeight,0===e&&b.isHorizontal()||0===a&&!b.isHorizontal()||(e=e-parseInt(b.container.css("padding-left"),10)-parseInt(b.container.css("padding-right"),10),a=a-parseInt(b.container.css("padding-top"),10)-parseInt(b.container.css("padding-bottom"),10),b.width=e,b.height=a,b.size=b.isHorizontal()?b.width:b.height)},b.updateSlidesSize=function(){b.slides=b.wrapper.children("."+b.params.slideClass),b.snapGrid=[],b.slidesGrid=[],b.slidesSizesGrid=[];var e,a=b.params.spaceBetween,t=-b.params.slidesOffsetBefore,r=0,i=0;if("undefined"!=typeof b.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*b.size),b.virtualSize=-a,b.rtl?b.slides.css({marginLeft:"",marginTop:""}):b.slides.css({marginRight:"",marginBottom:""});var n;b.params.slidesPerColumn>1&&(n=Math.floor(b.slides.length/b.params.slidesPerColumn)===b.slides.length/b.params.slidesPerColumn?b.slides.length:Math.ceil(b.slides.length/b.params.slidesPerColumn)*b.params.slidesPerColumn,"auto"!==b.params.slidesPerView&&"row"===b.params.slidesPerColumnFill&&(n=Math.max(n,b.params.slidesPerView*b.params.slidesPerColumn)));var o,l=b.params.slidesPerColumn,p=n/l,d=p-(b.params.slidesPerColumn*p-b.slides.length);for(e=0;e<b.slides.length;e++){o=0;var u=b.slides.eq(e);if(b.params.slidesPerColumn>1){var c,m,h;"column"===b.params.slidesPerColumnFill?(m=Math.floor(e/l),h=e-m*l,(m>d||m===d&&h===l-1)&&++h>=l&&(h=0,m++),c=m+h*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(h=Math.floor(e/p),m=e-h*p),u.css({"margin-top":0!==h&&b.params.spaceBetween&&b.params.spaceBetween+"px"}).attr("data-swiper-column",m).attr("data-swiper-row",h)}"none"!==u.css("display")&&("auto"===b.params.slidesPerView?(o=b.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),b.params.roundLengths&&(o=s(o))):(o=(b.size-(b.params.slidesPerView-1)*a)/b.params.slidesPerView,b.params.roundLengths&&(o=s(o)),b.isHorizontal()?b.slides[e].style.width=o+"px":b.slides[e].style.height=o+"px"),b.slides[e].swiperSlideSize=o,b.slidesSizesGrid.push(o),b.params.centeredSlides?(t=t+o/2+r/2+a,0===e&&(t=t-b.size/2-a),Math.abs(t)<.001&&(t=0),i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t)):(i%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t),t=t+o+a),b.virtualSize+=o+a,r=o,i++)}b.virtualSize=Math.max(b.virtualSize,b.size)+b.params.slidesOffsetAfter;var f;if(b.rtl&&b.wrongRTL&&("slide"===b.params.effect||"coverflow"===b.params.effect)&&b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),(!b.support.flexbox||b.params.setWrapperSize)&&(b.isHorizontal()?b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}):b.wrapper.css({height:b.virtualSize+b.params.spaceBetween+"px"})),b.params.slidesPerColumn>1&&(b.virtualSize=(o+b.params.spaceBetween)*n,b.virtualSize=Math.ceil(b.virtualSize/b.params.slidesPerColumn)-b.params.spaceBetween,b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),b.params.centeredSlides)){for(f=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<b.virtualSize+b.snapGrid[0]&&f.push(b.snapGrid[e]);b.snapGrid=f}if(!b.params.centeredSlides){for(f=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<=b.virtualSize-b.size&&f.push(b.snapGrid[e]);b.snapGrid=f,Math.floor(b.virtualSize-b.size)-Math.floor(b.snapGrid[b.snapGrid.length-1])>1&&b.snapGrid.push(b.virtualSize-b.size)}0===b.snapGrid.length&&(b.snapGrid=[0]),0!==b.params.spaceBetween&&(b.isHorizontal()?b.rtl?b.slides.css({marginLeft:a+"px"}):b.slides.css({marginRight:a+"px"}):b.slides.css({marginBottom:a+"px"})),b.params.watchSlidesProgress&&b.updateSlidesOffset()}},b.updateSlidesOffset=function(){for(var e=0;e<b.slides.length;e++)b.slides[e].swiperSlideOffset=b.isHorizontal()?b.slides[e].offsetLeft:b.slides[e].offsetTop},b.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=b.translate||0),0!==b.slides.length){"undefined"==typeof b.slides[0].swiperSlideOffset&&b.updateSlidesOffset();var a=-e;b.rtl&&(a=e),b.slides.removeClass(b.params.slideVisibleClass);for(var t=0;t<b.slides.length;t++){var r=b.slides[t],i=(a-r.swiperSlideOffset)/(r.swiperSlideSize+b.params.spaceBetween);if(b.params.watchSlidesVisibility){var s=-(a-r.swiperSlideOffset),n=s+b.slidesSizesGrid[t],o=s>=0&&s<b.size||n>0&&n<=b.size||0>=s&&n>=b.size;o&&b.slides.eq(t).addClass(b.params.slideVisibleClass)}r.progress=b.rtl?-i:i}}},b.updateProgress=function(e){"undefined"==typeof e&&(e=b.translate||0);var a=b.maxTranslate()-b.minTranslate(),t=b.isBeginning,r=b.isEnd;0===a?(b.progress=0,b.isBeginning=b.isEnd=!0):(b.progress=(e-b.minTranslate())/a,b.isBeginning=b.progress<=0,b.isEnd=b.progress>=1),b.isBeginning&&!t&&b.emit("onReachBeginning",b),b.isEnd&&!r&&b.emit("onReachEnd",b),b.params.watchSlidesProgress&&b.updateSlidesProgress(e),b.emit("onProgress",b,b.progress)},b.updateActiveIndex=function(){var e,a,t,r=b.rtl?b.translate:-b.translate;for(a=0;a<b.slidesGrid.length;a++)"undefined"!=typeof b.slidesGrid[a+1]?r>=b.slidesGrid[a]&&r<b.slidesGrid[a+1]-(b.slidesGrid[a+1]-b.slidesGrid[a])/2?e=a:r>=b.slidesGrid[a]&&r<b.slidesGrid[a+1]&&(e=a+1):r>=b.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/b.params.slidesPerGroup),t>=b.snapGrid.length&&(t=b.snapGrid.length-1),e!==b.activeIndex&&(b.snapIndex=t,b.previousIndex=b.activeIndex,b.activeIndex=e,b.updateClasses())},b.updateClasses=function(){b.slides.removeClass(b.params.slideActiveClass+" "+b.params.slideNextClass+" "+b.params.slidePrevClass);var e=b.slides.eq(b.activeIndex);e.addClass(b.params.slideActiveClass);var t=e.next("."+b.params.slideClass).addClass(b.params.slideNextClass);b.params.loop&&0===t.length&&b.slides.eq(0).addClass(b.params.slideNextClass);var r=e.prev("."+b.params.slideClass).addClass(b.params.slidePrevClass);if(b.params.loop&&0===r.length&&b.slides.eq(-1).addClass(b.params.slidePrevClass),b.paginationContainer&&b.paginationContainer.length>0){var i,s=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length;if(b.params.loop?(i=Math.ceil((b.activeIndex-b.loopedSlides)/b.params.slidesPerGroup),i>b.slides.length-1-2*b.loopedSlides&&(i-=b.slides.length-2*b.loopedSlides),i>s-1&&(i-=s),0>i&&"bullets"!==b.params.paginationType&&(i=s+i)):i="undefined"!=typeof b.snapIndex?b.snapIndex:b.activeIndex||0,"bullets"===b.params.paginationType&&b.bullets&&b.bullets.length>0&&(b.bullets.removeClass(b.params.bulletActiveClass),b.paginationContainer.length>1?b.bullets.each(function(){a(this).index()===i&&a(this).addClass(b.params.bulletActiveClass)}):b.bullets.eq(i).addClass(b.params.bulletActiveClass)),"fraction"===b.params.paginationType&&(b.paginationContainer.find("."+b.params.paginationCurrentClass).text(i+1),b.paginationContainer.find("."+b.params.paginationTotalClass).text(s)),"progress"===b.params.paginationType){var n=(i+1)/s,o=n,l=1;b.isHorizontal()||(l=n,o=1),b.paginationContainer.find("."+b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+o+") scaleY("+l+")").transition(b.params.speed)}"custom"===b.params.paginationType&&b.params.paginationCustomRender&&(b.paginationContainer.html(b.params.paginationCustomRender(b,i+1,s)),b.emit("onPaginationRendered",b,b.paginationContainer[0]))}b.params.loop||(b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.isBeginning?(b.prevButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.prevButton)):(b.prevButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.prevButton))),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.isEnd?(b.nextButton.addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(b.nextButton)):(b.nextButton.removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(b.nextButton))))},b.updatePagination=function(){if(b.params.pagination&&b.paginationContainer&&b.paginationContainer.length>0){var e="";if("bullets"===b.params.paginationType){for(var a=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length,t=0;a>t;t++)e+=b.params.paginationBulletRender?b.params.paginationBulletRender(t,b.params.bulletClass):"<"+b.params.paginationElement+' class="'+b.params.bulletClass+'"></'+b.params.paginationElement+">";b.paginationContainer.html(e),b.bullets=b.paginationContainer.find("."+b.params.bulletClass),b.params.paginationClickable&&b.params.a11y&&b.a11y&&b.a11y.initPagination()}"fraction"===b.params.paginationType&&(e=b.params.paginationFractionRender?b.params.paginationFractionRender(b,b.params.paginationCurrentClass,b.params.paginationTotalClass):'<span class="'+b.params.paginationCurrentClass+'"></span> / <span class="'+b.params.paginationTotalClass+'"></span>',b.paginationContainer.html(e)),"progress"===b.params.paginationType&&(e=b.params.paginationProgressRender?b.params.paginationProgressRender(b,b.params.paginationProgressbarClass):'<span class="'+b.params.paginationProgressbarClass+'"></span>',b.paginationContainer.html(e)),"custom"!==b.params.paginationType&&b.emit("onPaginationRendered",b,b.paginationContainer[0])}},b.update=function(e){function a(){r=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate()),b.setWrapperTranslate(r),b.updateActiveIndex(),b.updateClasses()}if(b.updateContainerSize(),b.updateSlidesSize(),b.updateProgress(),b.updatePagination(),b.updateClasses(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),e){var t,r;b.controller&&b.controller.spline&&(b.controller.spline=void 0),b.params.freeMode?(a(),b.params.autoHeight&&b.updateAutoHeight()):(t=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0),t||a())}else b.params.autoHeight&&b.updateAutoHeight()},ResizeHandler=function(e){b.params.breakpoints&&b.setBreakpoint();var a=b.params.allowSwipeToPrev,t=b.params.allowSwipeToNext;b.params.allowSwipeToPrev=b.params.allowSwipeToNext=!0,b.updateContainerSize(),b.updateSlidesSize(),("auto"===b.params.slidesPerView||b.params.freeMode||e)&&b.updatePagination(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),b.controller&&b.controller.spline&&(b.controller.spline=void 0);var r=!1;if(b.params.freeMode){var i=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate());b.setWrapperTranslate(i),b.updateActiveIndex(),b.updateClasses(),b.params.autoHeight&&b.updateAutoHeight()}else b.updateClasses(),r=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0);b.params.lazyLoading&&!r&&b.lazy&&b.lazy.load(),b.params.allowSwipeToPrev=a,b.params.allowSwipeToNext=t},b.onResize=ResizeHandler;var T=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?T=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(T=["MSPointerDown","MSPointerMove","MSPointerUp"]),b.touchEvents={start:b.support.touch||!b.params.simulateTouch?"touchstart":T[0],move:b.support.touch||!b.params.simulateTouch?"touchmove":T[1],end:b.support.touch||!b.params.simulateTouch?"touchend":T[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===b.params.touchEventsTarget?b.container:b.wrapper).addClass("swiper-wp8-"+b.params.direction),b.initEvents=function(e){var a=e?"off":"on",t=e?"removeEventListener":"addEventListener",r="container"===b.params.touchEventsTarget?b.container[0]:b.wrapper[0],s=b.support.touch?r:document,n=b.params.nested?!0:!1;b.browser.ie?(r[t](b.touchEvents.start,b.onTouchStart,!1),s[t](b.touchEvents.move,b.onTouchMove,n),s[t](b.touchEvents.end,b.onTouchEnd,!1)):(b.support.touch&&(r[t](b.touchEvents.start,b.onTouchStart,!1),r[t](b.touchEvents.move,b.onTouchMove,n),r[t](b.touchEvents.end,b.onTouchEnd,!1)),!i.simulateTouch||b.device.ios||b.device.android||(r[t]("mousedown",b.onTouchStart,!1),document[t]("mousemove",b.onTouchMove,n),document[t]("mouseup",b.onTouchEnd,!1))),window[t]("resize",b.onResize),b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.nextButton[a]("click",b.onClickNext),b.params.a11y&&b.a11y&&b.nextButton[a]("keydown",b.a11y.onEnterKey)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.prevButton[a]("click",b.onClickPrev),b.params.a11y&&b.a11y&&b.prevButton[a]("keydown",b.a11y.onEnterKey)),b.params.pagination&&b.params.paginationClickable&&(b.paginationContainer[a]("click","."+b.params.bulletClass,b.onClickIndex),b.params.a11y&&b.a11y&&b.paginationContainer[a]("keydown","."+b.params.bulletClass,b.a11y.onEnterKey)),(b.params.preventClicks||b.params.preventClicksPropagation)&&r[t]("click",b.preventClicks,!0)},b.attachEvents=function(){b.initEvents()},b.detachEvents=function(){b.initEvents(!0)},b.allowClick=!0,b.preventClicks=function(e){b.allowClick||(b.params.preventClicks&&e.preventDefault(),b.params.preventClicksPropagation&&b.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},b.onClickNext=function(e){e.preventDefault(),(!b.isEnd||b.params.loop)&&b.slideNext()},b.onClickPrev=function(e){e.preventDefault(),(!b.isBeginning||b.params.loop)&&b.slidePrev()},b.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*b.params.slidesPerGroup;b.params.loop&&(t+=b.loopedSlides),b.slideTo(t)},b.updateClickedSlide=function(e){var t=o(e,"."+b.params.slideClass),r=!1;if(t)for(var i=0;i<b.slides.length;i++)b.slides[i]===t&&(r=!0);if(!t||!r)return b.clickedSlide=void 0,void(b.clickedIndex=void 0);if(b.clickedSlide=t,b.clickedIndex=a(t).index(),b.params.slideToClickedSlide&&void 0!==b.clickedIndex&&b.clickedIndex!==b.activeIndex){var s,n=b.clickedIndex;if(b.params.loop){if(b.animating)return;s=a(b.clickedSlide).attr("data-swiper-slide-index"),b.params.centeredSlides?n<b.loopedSlides-b.params.slidesPerView/2||n>b.slides.length-b.loopedSlides+b.params.slidesPerView/2?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n):n>b.slides.length-b.params.slidesPerView?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n)}else b.slideTo(n)}};var S,C,z,M,E,P,k,I,L,B,D="input, select, textarea, button",H=Date.now(),A=[];b.animating=!1,b.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var G,O;if(b.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),G="touchstart"===e.type,G||!("which"in e)||3!==e.which){if(b.params.noSwiping&&o(e,"."+b.params.noSwipingClass))return void(b.allowClick=!0);if(!b.params.swipeHandler||o(e,b.params.swipeHandler)){var t=b.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,r=b.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(b.device.ios&&b.params.iOSEdgeSwipeDetection&&t<=b.params.iOSEdgeSwipeThreshold)){if(S=!0,C=!1,z=!0,E=void 0,O=void 0,b.touches.startX=t,b.touches.startY=r,M=Date.now(),b.allowClick=!0,b.updateContainerSize(),b.swipeDirection=void 0,b.params.threshold>0&&(I=!1),"touchstart"!==e.type){var i=!0;a(e.target).is(D)&&(i=!1),document.activeElement&&a(document.activeElement).is(D)&&document.activeElement.blur(),i&&e.preventDefault()}b.emit("onTouchStart",b,e)}}}},b.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!G||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return b.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(b.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(b.params.onlyExternal)return b.allowClick=!1,void(S&&(b.touches.startX=b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.startY=b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,M=Date.now()));if(G&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(D))return C=!0,void(b.allowClick=!1);if(z&&b.emit("onTouchMove",b,e),!(e.targetTouches&&e.targetTouches.length>1)){if(b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof E){var t=180*Math.atan2(Math.abs(b.touches.currentY-b.touches.startY),Math.abs(b.touches.currentX-b.touches.startX))/Math.PI;E=b.isHorizontal()?t>b.params.touchAngle:90-t>b.params.touchAngle}if(E&&b.emit("onTouchMoveOpposite",b,e),"undefined"==typeof O&&b.browser.ieTouch&&(b.touches.currentX!==b.touches.startX||b.touches.currentY!==b.touches.startY)&&(O=!0),S){if(E)return void(S=!1);if(O||!b.browser.ieTouch){b.allowClick=!1,b.emit("onSliderMove",b,e),e.preventDefault(),b.params.touchMoveStopPropagation&&!b.params.nested&&e.stopPropagation(),C||(i.loop&&b.fixLoop(),k=b.getWrapperTranslate(),b.setWrapperTransition(0),b.animating&&b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),b.params.autoplay&&b.autoplaying&&(b.params.autoplayDisableOnInteraction?b.stopAutoplay():b.pauseAutoplay()),B=!1,b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grabbing",b.container[0].style.cursor="-moz-grabbin",b.container[0].style.cursor="grabbing")),C=!0;var r=b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY;r*=b.params.touchRatio,b.rtl&&(r=-r),b.swipeDirection=r>0?"prev":"next",P=r+k;var s=!0;if(r>0&&P>b.minTranslate()?(s=!1,b.params.resistance&&(P=b.minTranslate()-1+Math.pow(-b.minTranslate()+k+r,b.params.resistanceRatio))):0>r&&P<b.maxTranslate()&&(s=!1,
b.params.resistance&&(P=b.maxTranslate()+1-Math.pow(b.maxTranslate()-k-r,b.params.resistanceRatio))),s&&(e.preventedByNestedSwiper=!0),!b.params.allowSwipeToNext&&"next"===b.swipeDirection&&k>P&&(P=k),!b.params.allowSwipeToPrev&&"prev"===b.swipeDirection&&P>k&&(P=k),b.params.followFinger){if(b.params.threshold>0){if(!(Math.abs(r)>b.params.threshold||I))return void(P=k);if(!I)return I=!0,b.touches.startX=b.touches.currentX,b.touches.startY=b.touches.currentY,P=k,void(b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY)}(b.params.freeMode||b.params.watchSlidesProgress)&&b.updateActiveIndex(),b.params.freeMode&&(0===A.length&&A.push({position:b.touches[b.isHorizontal()?"startX":"startY"],time:M}),A.push({position:b.touches[b.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),b.updateProgress(P),b.setWrapperTranslate(P)}}}}}},b.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),z&&b.emit("onTouchEnd",b,e),z=!1,S){b.params.grabCursor&&C&&S&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab");var t=Date.now(),r=t-M;if(b.allowClick&&(b.updateClickedSlide(e),b.emit("onTap",b,e),300>r&&t-H>300&&(L&&clearTimeout(L),L=setTimeout(function(){b&&(b.params.paginationHide&&b.paginationContainer.length>0&&!a(e.target).hasClass(b.params.bulletClass)&&b.paginationContainer.toggleClass(b.params.paginationHiddenClass),b.emit("onClick",b,e))},300)),300>r&&300>t-H&&(L&&clearTimeout(L),b.emit("onDoubleTap",b,e))),H=Date.now(),setTimeout(function(){b&&(b.allowClick=!0)},0),!S||!C||!b.swipeDirection||0===b.touches.diff||P===k)return void(S=C=!1);S=C=!1;var i;if(i=b.params.followFinger?b.rtl?b.translate:-b.translate:-P,b.params.freeMode){if(i<-b.minTranslate())return void b.slideTo(b.activeIndex);if(i>-b.maxTranslate())return void(b.slides.length<b.snapGrid.length?b.slideTo(b.snapGrid.length-1):b.slideTo(b.slides.length-1));if(b.params.freeModeMomentum){if(A.length>1){var s=A.pop(),n=A.pop(),o=s.position-n.position,l=s.time-n.time;b.velocity=o/l,b.velocity=b.velocity/2,Math.abs(b.velocity)<b.params.freeModeMinimumVelocity&&(b.velocity=0),(l>150||(new window.Date).getTime()-s.time>300)&&(b.velocity=0)}else b.velocity=0;A.length=0;var p=1e3*b.params.freeModeMomentumRatio,d=b.velocity*p,u=b.translate+d;b.rtl&&(u=-u);var c,m=!1,h=20*Math.abs(b.velocity)*b.params.freeModeMomentumBounceRatio;if(u<b.maxTranslate())b.params.freeModeMomentumBounce?(u+b.maxTranslate()<-h&&(u=b.maxTranslate()-h),c=b.maxTranslate(),m=!0,B=!0):u=b.maxTranslate();else if(u>b.minTranslate())b.params.freeModeMomentumBounce?(u-b.minTranslate()>h&&(u=b.minTranslate()+h),c=b.minTranslate(),m=!0,B=!0):u=b.minTranslate();else if(b.params.freeModeSticky){var f,g=0;for(g=0;g<b.snapGrid.length;g+=1)if(b.snapGrid[g]>-u){f=g;break}u=Math.abs(b.snapGrid[f]-u)<Math.abs(b.snapGrid[f-1]-u)||"next"===b.swipeDirection?b.snapGrid[f]:b.snapGrid[f-1],b.rtl||(u=-u)}if(0!==b.velocity)p=b.rtl?Math.abs((-u-b.translate)/b.velocity):Math.abs((u-b.translate)/b.velocity);else if(b.params.freeModeSticky)return void b.slideReset();b.params.freeModeMomentumBounce&&m?(b.updateProgress(c),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating=!0,b.wrapper.transitionEnd(function(){b&&B&&(b.emit("onMomentumBounce",b),b.setWrapperTransition(b.params.speed),b.setWrapperTranslate(c),b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))})):b.velocity?(b.updateProgress(u),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))):b.updateProgress(u),b.updateActiveIndex()}return void((!b.params.freeModeMomentum||r>=b.params.longSwipesMs)&&(b.updateProgress(),b.updateActiveIndex()))}var v,w=0,y=b.slidesSizesGrid[0];for(v=0;v<b.slidesGrid.length;v+=b.params.slidesPerGroup)"undefined"!=typeof b.slidesGrid[v+b.params.slidesPerGroup]?i>=b.slidesGrid[v]&&i<b.slidesGrid[v+b.params.slidesPerGroup]&&(w=v,y=b.slidesGrid[v+b.params.slidesPerGroup]-b.slidesGrid[v]):i>=b.slidesGrid[v]&&(w=v,y=b.slidesGrid[b.slidesGrid.length-1]-b.slidesGrid[b.slidesGrid.length-2]);var x=(i-b.slidesGrid[w])/y;if(r>b.params.longSwipesMs){if(!b.params.longSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&(x>=b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w)),"prev"===b.swipeDirection&&(x>1-b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w))}else{if(!b.params.shortSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&b.slideTo(w+b.params.slidesPerGroup),"prev"===b.swipeDirection&&b.slideTo(w)}}},b._slideTo=function(e,a){return b.slideTo(e,a,!0,!0)},b.slideTo=function(e,a,t,r){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),b.snapIndex=Math.floor(e/b.params.slidesPerGroup),b.snapIndex>=b.snapGrid.length&&(b.snapIndex=b.snapGrid.length-1);var i=-b.snapGrid[b.snapIndex];b.params.autoplay&&b.autoplaying&&(r||!b.params.autoplayDisableOnInteraction?b.pauseAutoplay(a):b.stopAutoplay()),b.updateProgress(i);for(var s=0;s<b.slidesGrid.length;s++)-Math.floor(100*i)>=Math.floor(100*b.slidesGrid[s])&&(e=s);return!b.params.allowSwipeToNext&&i<b.translate&&i<b.minTranslate()?!1:!b.params.allowSwipeToPrev&&i>b.translate&&i>b.maxTranslate()&&(b.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=b.params.speed),b.previousIndex=b.activeIndex||0,b.activeIndex=e,b.rtl&&-i===b.translate||!b.rtl&&i===b.translate?(b.params.autoHeight&&b.updateAutoHeight(),b.updateClasses(),"slide"!==b.params.effect&&b.setWrapperTranslate(i),!1):(b.updateClasses(),b.onTransitionStart(t),0===a?(b.setWrapperTranslate(i),b.setWrapperTransition(0),b.onTransitionEnd(t)):(b.setWrapperTranslate(i),b.setWrapperTransition(a),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd(t)}))),!0))},b.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),b.params.autoHeight&&b.updateAutoHeight(),b.lazy&&b.lazy.onTransitionStart(),e&&(b.emit("onTransitionStart",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeStart",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextStart",b):b.emit("onSlidePrevStart",b)))},b.onTransitionEnd=function(e){b.animating=!1,b.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),b.lazy&&b.lazy.onTransitionEnd(),e&&(b.emit("onTransitionEnd",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeEnd",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextEnd",b):b.emit("onSlidePrevEnd",b))),b.params.hashnav&&b.hashnav&&b.hashnav.setHash()},b.slideNext=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)}return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)},b._slideNext=function(e){return b.slideNext(!0,e,!0)},b.slidePrev=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex-1,a,e,t)}return b.slideTo(b.activeIndex-1,a,e,t)},b._slidePrev=function(e){return b.slidePrev(!0,e,!0)},b.slideReset=function(e,a,t){return b.slideTo(b.activeIndex,a,e)},b.setWrapperTransition=function(e,a){b.wrapper.transition(e),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTransition(e),b.params.parallax&&b.parallax&&b.parallax.setTransition(e),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTransition(e),b.params.control&&b.controller&&b.controller.setTransition(e,a),b.emit("onSetTransition",b,e)},b.setWrapperTranslate=function(e,a,t){var r=0,i=0,n=0;b.isHorizontal()?r=b.rtl?-e:e:i=e,b.params.roundLengths&&(r=s(r),i=s(i)),b.params.virtualTranslate||(b.support.transforms3d?b.wrapper.transform("translate3d("+r+"px, "+i+"px, "+n+"px)"):b.wrapper.transform("translate("+r+"px, "+i+"px)")),b.translate=b.isHorizontal()?r:i;var o,l=b.maxTranslate()-b.minTranslate();o=0===l?0:(e-b.minTranslate())/l,o!==b.progress&&b.updateProgress(e),a&&b.updateActiveIndex(),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTranslate(b.translate),b.params.parallax&&b.parallax&&b.parallax.setTranslate(b.translate),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTranslate(b.translate),b.params.control&&b.controller&&b.controller.setTranslate(b.translate,t),b.emit("onSetTranslate",b,b.translate)},b.getTranslate=function(e,a){var t,r,i,s;return"undefined"==typeof a&&(a="x"),b.params.virtualTranslate?b.rtl?-b.translate:b.translate:(i=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(r=i.transform||i.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new window.WebKitCSSMatrix("none"===r?"":r)):(s=i.MozTransform||i.OTransform||i.MsTransform||i.msTransform||i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=s.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?s.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(r=window.WebKitCSSMatrix?s.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),b.rtl&&r&&(r=-r),r||0)},b.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=b.isHorizontal()?"x":"y"),b.getTranslate(b.wrapper[0],e)},b.observers=[],b.initObservers=function(){if(b.params.observeParents)for(var e=b.container.parents(),a=0;a<e.length;a++)l(e[a]);l(b.container[0],{childList:!1}),l(b.wrapper[0],{attributes:!1})},b.disconnectObservers=function(){for(var e=0;e<b.observers.length;e++)b.observers[e].disconnect();b.observers=[]},b.createLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove();var e=b.wrapper.children("."+b.params.slideClass);"auto"!==b.params.slidesPerView||b.params.loopedSlides||(b.params.loopedSlides=e.length),b.loopedSlides=parseInt(b.params.loopedSlides||b.params.slidesPerView,10),b.loopedSlides=b.loopedSlides+b.params.loopAdditionalSlides,b.loopedSlides>e.length&&(b.loopedSlides=e.length);var t,r=[],i=[];for(e.each(function(t,s){var n=a(this);t<b.loopedSlides&&i.push(s),t<e.length&&t>=e.length-b.loopedSlides&&r.push(s),n.attr("data-swiper-slide-index",t)}),t=0;t<i.length;t++)b.wrapper.append(a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));for(t=r.length-1;t>=0;t--)b.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass))},b.destroyLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove(),b.slides.removeAttr("data-swiper-slide-index")},b.reLoop=function(e){var a=b.activeIndex-b.loopedSlides;b.destroyLoop(),b.createLoop(),b.updateSlidesSize(),e&&b.slideTo(a+b.loopedSlides,0,!1)},b.fixLoop=function(){var e;b.activeIndex<b.loopedSlides?(e=b.slides.length-3*b.loopedSlides+b.activeIndex,e+=b.loopedSlides,b.slideTo(e,0,!1,!0)):("auto"===b.params.slidesPerView&&b.activeIndex>=2*b.loopedSlides||b.activeIndex>b.slides.length-2*b.params.slidesPerView)&&(e=-b.slides.length+b.activeIndex+b.loopedSlides,e+=b.loopedSlides,b.slideTo(e,0,!1,!0))},b.appendSlide=function(e){if(b.params.loop&&b.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&b.wrapper.append(e[a]);else b.wrapper.append(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0)},b.prependSlide=function(e){b.params.loop&&b.destroyLoop();var a=b.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&b.wrapper.prepend(e[t]);a=b.activeIndex+e.length}else b.wrapper.prepend(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.slideTo(a,0,!1)},b.removeSlide=function(e){b.params.loop&&(b.destroyLoop(),b.slides=b.wrapper.children("."+b.params.slideClass));var a,t=b.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.params.loop?b.slideTo(t+b.loopedSlides,0,!1):b.slideTo(t,0,!1)},b.removeAllSlides=function(){for(var e=[],a=0;a<b.slides.length;a++)e.push(a);b.removeSlide(e)},b.effects={fade:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var a=b.slides.eq(e),t=a[0].swiperSlideOffset,r=-t;b.params.virtualTranslate||(r-=b.translate);var i=0;b.isHorizontal()||(i=r,r=0);var s=b.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:s}).transform("translate3d("+r+"px, "+i+"px, 0px)")}},setTransition:function(e){if(b.slides.transition(e),b.params.virtualTranslate&&0!==e){var a=!1;b.slides.transitionEnd(function(){if(!a&&b){a=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)b.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var t=b.slides.eq(e),r=t[0].progress;b.params.flip.limitRotation&&(r=Math.max(Math.min(t[0].progress,1),-1));var i=t[0].swiperSlideOffset,s=-180*r,n=s,o=0,l=-i,p=0;if(b.isHorizontal()?b.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(r))+b.slides.length,b.params.flip.slideShadows){var d=b.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=b.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-r,0)),u.length&&(u[0].style.opacity=Math.max(r,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.virtualTranslate&&0!==e){var t=!1;b.slides.eq(b.activeIndex).transitionEnd(function(){if(!t&&b&&a(this).hasClass(b.params.slideActiveClass)){t=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=0;r<e.length;r++)b.wrapper.trigger(e[r])}})}}},cube:{setTranslate:function(){var e,t=0;b.params.cube.shadow&&(b.isHorizontal()?(e=b.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.wrapper.append(e)),e.css({height:b.width+"px"})):(e=b.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.container.append(e))));for(var r=0;r<b.slides.length;r++){var i=b.slides.eq(r),s=90*r,n=Math.floor(s/360);b.rtl&&(s=-s,n=Math.floor(-s/360));var o=Math.max(Math.min(i[0].progress,1),-1),l=0,p=0,d=0;r%4===0?(l=4*-n*b.size,d=0):(r-1)%4===0?(l=0,d=4*-n*b.size):(r-2)%4===0?(l=b.size+4*n*b.size,d=b.size):(r-3)%4===0&&(l=-b.size,d=3*b.size+4*b.size*n),b.rtl&&(l=-l),b.isHorizontal()||(p=l,l=0);var u="rotateX("+(b.isHorizontal()?0:-s)+"deg) rotateY("+(b.isHorizontal()?s:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(t=90*r+90*o,b.rtl&&(t=90*-r-90*o)),i.transform(u),b.params.cube.slideShadows){var c=b.isHorizontal()?i.find(".swiper-slide-shadow-left"):i.find(".swiper-slide-shadow-top"),m=b.isHorizontal()?i.find(".swiper-slide-shadow-right"):i.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),i.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),i.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(b.wrapper.css({"-webkit-transform-origin":"50% 50% -"+b.size/2+"px","-moz-transform-origin":"50% 50% -"+b.size/2+"px","-ms-transform-origin":"50% 50% -"+b.size/2+"px","transform-origin":"50% 50% -"+b.size/2+"px"}),b.params.cube.shadow)if(b.isHorizontal())e.transform("translate3d(0px, "+(b.width/2+b.params.cube.shadowOffset)+"px, "+-b.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+b.params.cube.shadowScale+")");else{var h=Math.abs(t)-90*Math.floor(Math.abs(t)/90),f=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),g=b.params.cube.shadowScale,v=b.params.cube.shadowScale/f,w=b.params.cube.shadowOffset;e.transform("scale3d("+g+", 1, "+v+") translate3d(0px, "+(b.height/2+w)+"px, "+-b.height/2/v+"px) rotateX(-90deg)")}var y=b.isSafari||b.isUiWebView?-b.size/2:0;b.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(b.isHorizontal()?0:t)+"deg) rotateY("+(b.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.cube.shadow&&!b.isHorizontal()&&b.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=b.translate,t=b.isHorizontal()?-e+b.width/2:-e+b.height/2,r=b.isHorizontal()?b.params.coverflow.rotate:-b.params.coverflow.rotate,i=b.params.coverflow.depth,s=0,n=b.slides.length;n>s;s++){var o=b.slides.eq(s),l=b.slidesSizesGrid[s],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*b.params.coverflow.modifier,u=b.isHorizontal()?r*d:0,c=b.isHorizontal()?0:r*d,m=-i*Math.abs(d),h=b.isHorizontal()?0:b.params.coverflow.stretch*d,f=b.isHorizontal()?b.params.coverflow.stretch*d:0;Math.abs(f)<.001&&(f=0),Math.abs(h)<.001&&(h=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var g="translate3d("+f+"px,"+h+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(g),o[0].style.zIndex=-Math.abs(Math.round(d))+1,b.params.coverflow.slideShadows){var v=b.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=b.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(b.browser.ie){var y=b.wrapper[0].style;y.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},b.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==b.slides.length)){var r=b.slides.eq(e),i=r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!r.hasClass("swiper-lazy")||r.hasClass("swiper-lazy-loaded")||r.hasClass("swiper-lazy-loading")||(i=i.add(r[0])),0!==i.length&&i.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var i=e.attr("data-background"),s=e.attr("data-src"),n=e.attr("data-srcset");b.loadImage(e[0],s||i,n,!1,function(){if(i?(e.css("background-image",'url("'+i+'")'),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),s&&(e.attr("src",s),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),r.find(".swiper-lazy-preloader, .preloader").remove(),b.params.loop&&t){var a=r.attr("data-swiper-slide-index");if(r.hasClass(b.params.slideDuplicateClass)){var o=b.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+b.params.slideDuplicateClass+")");b.lazy.loadImageInSlide(o.index(),!1)}else{var l=b.wrapper.children("."+b.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');b.lazy.loadImageInSlide(l.index(),!1)}}b.emit("onLazyImageReady",b,r[0],e[0])}),b.emit("onLazyImageLoad",b,r[0],e[0])})}},load:function(){var e;if(b.params.watchSlidesVisibility)b.wrapper.children("."+b.params.slideVisibleClass).each(function(){b.lazy.loadImageInSlide(a(this).index())});else if(b.params.slidesPerView>1)for(e=b.activeIndex;e<b.activeIndex+b.params.slidesPerView;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);else b.lazy.loadImageInSlide(b.activeIndex);if(b.params.lazyLoadingInPrevNext)if(b.params.slidesPerView>1||b.params.lazyLoadingInPrevNextAmount&&b.params.lazyLoadingInPrevNextAmount>1){var t=b.params.lazyLoadingInPrevNextAmount,r=b.params.slidesPerView,i=Math.min(b.activeIndex+r+Math.max(t,r),b.slides.length),s=Math.max(b.activeIndex-Math.max(r,t),0);for(e=b.activeIndex+b.params.slidesPerView;i>e;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);for(e=s;e<b.activeIndex;e++)b.slides[e]&&b.lazy.loadImageInSlide(e)}else{var n=b.wrapper.children("."+b.params.slideNextClass);n.length>0&&b.lazy.loadImageInSlide(n.index());var o=b.wrapper.children("."+b.params.slidePrevClass);o.length>0&&b.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){b.params.lazyLoading&&(b.params.lazyLoadingOnTransitionStart||!b.params.lazyLoadingOnTransitionStart&&!b.lazy.initialImageLoaded)&&b.lazy.load()},onTransitionEnd:function(){b.params.lazyLoading&&!b.params.lazyLoadingOnTransitionStart&&b.lazy.load()}},b.scrollbar={isTouched:!1,setDragPosition:function(e){var a=b.scrollbar,t=b.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,r=t-a.track.offset()[b.isHorizontal()?"left":"top"]-a.dragSize/2,i=-b.minTranslate()*a.moveDivider,s=-b.maxTranslate()*a.moveDivider;i>r?r=i:r>s&&(r=s),r=-r/a.moveDivider,b.updateProgress(r),b.setWrapperTranslate(r,!0)},dragStart:function(e){var a=b.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),b.params.scrollbarHide&&a.track.css("opacity",1),b.wrapper.transition(100),a.drag.transition(100),b.emit("onScrollbarDragStart",b)},dragMove:function(e){var a=b.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),b.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),b.emit("onScrollbarDragMove",b))},dragEnd:function(e){var a=b.scrollbar;a.isTouched&&(a.isTouched=!1,b.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),b.emit("onScrollbarDragEnd",b),b.params.scrollbarSnapOnRelease&&b.slideReset())},enableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).on(b.touchEvents.start,e.dragStart),a(t).on(b.touchEvents.move,e.dragMove),a(t).on(b.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).off(b.touchEvents.start,e.dragStart),a(t).off(b.touchEvents.move,e.dragMove),a(t).off(b.touchEvents.end,e.dragEnd)},set:function(){if(b.params.scrollbar){var e=b.scrollbar;e.track=a(b.params.scrollbar),b.params.uniqueNavElements&&"string"==typeof b.params.scrollbar&&e.track.length>1&&1===b.container.find(b.params.scrollbar).length&&(e.track=b.container.find(b.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=b.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=b.size/b.virtualSize,e.moveDivider=e.divider*(e.trackSize/b.size),e.dragSize=e.trackSize*e.divider,b.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",b.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(b.params.scrollbar){var e,a=b.scrollbar,t=(b.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*b.progress,b.rtl&&b.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),b.isHorizontal()?(b.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(b.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),b.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){b.params.scrollbar&&b.scrollbar.drag.transition(e)}},b.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,r;this.x.length;this.interpolate=function(e){return e?(r=i(this.x,e),t=r-1,(e-this.x[t])*(this.y[r]-this.y[t])/(this.x[r]-this.x[t])+this.y[t]):0};var i=function(){var e,a,t;return function(r,i){for(a=-1,e=r.length;e-a>1;)r[t=e+a>>1]<=i?a=t:e=t;return e}}()},getInterpolateFunction:function(e){b.controller.spline||(b.controller.spline=b.params.loop?new b.controller.LinearSpline(b.slidesGrid,e.slidesGrid):new b.controller.LinearSpline(b.snapGrid,e.snapGrid))},setTranslate:function(e,a){function r(a){e=a.rtl&&"horizontal"===a.params.direction?-b.translate:b.translate,"slide"===b.params.controlBy&&(b.controller.getInterpolateFunction(a),s=-b.controller.spline.interpolate(-e)),s&&"container"!==b.params.controlBy||(i=(a.maxTranslate()-a.minTranslate())/(b.maxTranslate()-b.minTranslate()),s=(e-b.minTranslate())*i+a.minTranslate()),b.params.controlInverse&&(s=a.maxTranslate()-s),a.updateProgress(s),a.setWrapperTranslate(s,!1,b),a.updateActiveIndex()}var i,s,n=b.params.control;if(b.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&r(n[o]);else n instanceof t&&a!==n&&r(n)},setTransition:function(e,a){function r(a){a.setWrapperTransition(e,b),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){s&&(a.params.loop&&"slide"===b.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var i,s=b.params.control;if(b.isArray(s))for(i=0;i<s.length;i++)s[i]!==a&&s[i]instanceof t&&r(s[i]);else s instanceof t&&a!==s&&r(s)}},b.hashnav={init:function(){if(b.params.hashnav){b.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,r=b.slides.length;r>t;t++){var i=b.slides.eq(t),s=i.attr("data-hash");if(s===e&&!i.hasClass(b.params.slideDuplicateClass)){var n=i.index();b.slideTo(n,a,b.params.runCallbacksOnInit,!0)}}}},setHash:function(){b.hashnav.initialized&&b.params.hashnav&&(document.location.hash=b.slides.eq(b.activeIndex).attr("data-hash")||"")}},b.disableKeyboardControl=function(){b.params.keyboardControl=!1,a(document).off("keydown",p)},b.enableKeyboardControl=function(){b.params.keyboardControl=!0,a(document).on("keydown",p)},b.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},b.params.mousewheelControl){try{new window.WheelEvent("wheel"),b.mousewheel.event="wheel"}catch(N){(window.WheelEvent||b.container[0]&&"wheel"in b.container[0])&&(b.mousewheel.event="wheel")}!b.mousewheel.event&&window.WheelEvent,b.mousewheel.event||void 0===document.onmousewheel||(b.mousewheel.event="mousewheel"),b.mousewheel.event||(b.mousewheel.event="DOMMouseScroll")}b.disableMousewheelControl=function(){return b.mousewheel.event?(b.container.off(b.mousewheel.event,d),!0):!1},b.enableMousewheelControl=function(){return b.mousewheel.event?(b.container.on(b.mousewheel.event,d),!0):!1},b.parallax={setTranslate:function(){b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){u(this,b.progress)}),b.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);u(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=b.params.speed),b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),r=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(r=0),t.transition(r)})}},b._plugins=[];for(var R in b.plugins){var W=b.plugins[R](b,b.params[R]);W&&b._plugins.push(W)}return b.callPlugins=function(e){for(var a=0;a<b._plugins.length;a++)e in b._plugins[a]&&b._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.emitterEventListeners={},b.emit=function(e){b.params[e]&&b.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(b.emitterEventListeners[e])for(a=0;a<b.emitterEventListeners[e].length;a++)b.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);b.callPlugins&&b.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.on=function(e,a){return e=c(e),b.emitterEventListeners[e]||(b.emitterEventListeners[e]=[]),b.emitterEventListeners[e].push(a),b},b.off=function(e,a){var t;if(e=c(e),"undefined"==typeof a)return b.emitterEventListeners[e]=[],b;if(b.emitterEventListeners[e]&&0!==b.emitterEventListeners[e].length){for(t=0;t<b.emitterEventListeners[e].length;t++)b.emitterEventListeners[e][t]===a&&b.emitterEventListeners[e].splice(t,1);return b}},b.once=function(e,a){e=c(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),b.off(e,t)};return b.on(e,t),b},b.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(b.params.nextButton)?(b.onClickNext(e),b.isEnd?b.a11y.notify(b.params.lastSlideMessage):b.a11y.notify(b.params.nextSlideMessage)):a(e.target).is(b.params.prevButton)&&(b.onClickPrev(e),b.isBeginning?b.a11y.notify(b.params.firstSlideMessage):b.a11y.notify(b.params.prevSlideMessage)),a(e.target).is("."+b.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=b.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){b.params.nextButton&&b.nextButton&&b.nextButton.length>0&&(b.a11y.makeFocusable(b.nextButton),b.a11y.addRole(b.nextButton,"button"),b.a11y.addLabel(b.nextButton,b.params.nextSlideMessage)),b.params.prevButton&&b.prevButton&&b.prevButton.length>0&&(b.a11y.makeFocusable(b.prevButton),b.a11y.addRole(b.prevButton,"button"),b.a11y.addLabel(b.prevButton,b.params.prevSlideMessage)),a(b.container).append(b.a11y.liveRegion)},initPagination:function(){b.params.pagination&&b.params.paginationClickable&&b.bullets&&b.bullets.length&&b.bullets.each(function(){var e=a(this);b.a11y.makeFocusable(e),b.a11y.addRole(e,"button"),b.a11y.addLabel(e,b.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){b.a11y.liveRegion&&b.a11y.liveRegion.length>0&&b.a11y.liveRegion.remove()}},b.init=function(){b.params.loop&&b.createLoop(),b.updateContainerSize(),b.updateSlidesSize(),b.updatePagination(),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.set(),b.params.scrollbarDraggable&&b.scrollbar.enableDraggable()),"slide"!==b.params.effect&&b.effects[b.params.effect]&&(b.params.loop||b.updateProgress(),b.effects[b.params.effect].setTranslate()),b.params.loop?b.slideTo(b.params.initialSlide+b.loopedSlides,0,b.params.runCallbacksOnInit):(b.slideTo(b.params.initialSlide,0,b.params.runCallbacksOnInit),0===b.params.initialSlide&&(b.parallax&&b.params.parallax&&b.parallax.setTranslate(),b.lazy&&b.params.lazyLoading&&(b.lazy.load(),b.lazy.initialImageLoaded=!0))),b.attachEvents(),b.params.observer&&b.support.observer&&b.initObservers(),b.params.preloadImages&&!b.params.lazyLoading&&b.preloadImages(),b.params.autoplay&&b.startAutoplay(),
b.params.keyboardControl&&b.enableKeyboardControl&&b.enableKeyboardControl(),b.params.mousewheelControl&&b.enableMousewheelControl&&b.enableMousewheelControl(),b.params.hashnav&&b.hashnav&&b.hashnav.init(),b.params.a11y&&b.a11y&&b.a11y.init(),b.emit("onInit",b)},b.cleanupStyles=function(){b.container.removeClass(b.classNames.join(" ")).removeAttr("style"),b.wrapper.removeAttr("style"),b.slides&&b.slides.length&&b.slides.removeClass([b.params.slideVisibleClass,b.params.slideActiveClass,b.params.slideNextClass,b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),b.paginationContainer&&b.paginationContainer.length&&b.paginationContainer.removeClass(b.params.paginationHiddenClass),b.bullets&&b.bullets.length&&b.bullets.removeClass(b.params.bulletActiveClass),b.params.prevButton&&a(b.params.prevButton).removeClass(b.params.buttonDisabledClass),b.params.nextButton&&a(b.params.nextButton).removeClass(b.params.buttonDisabledClass),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.track&&b.scrollbar.track.length&&b.scrollbar.track.removeAttr("style"),b.scrollbar.drag&&b.scrollbar.drag.length&&b.scrollbar.drag.removeAttr("style"))},b.destroy=function(e,a){b.detachEvents(),b.stopAutoplay(),b.params.scrollbar&&b.scrollbar&&b.params.scrollbarDraggable&&b.scrollbar.disableDraggable(),b.params.loop&&b.destroyLoop(),a&&b.cleanupStyles(),b.disconnectObservers(),b.params.keyboardControl&&b.disableKeyboardControl&&b.disableKeyboardControl(),b.params.mousewheelControl&&b.disableMousewheelControl&&b.disableMousewheelControl(),b.params.a11y&&b.a11y&&b.a11y.destroy(),b.emit("onDestroy"),e!==!1&&(b=null)},b.init(),b}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),i=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||i||r,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var r=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var r=[],i=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var s,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,i=0;i<n.childNodes.length;i++)r.push(n.childNodes[i])}else for(s=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],i=0;i<s.length;i++)s[i]&&r.push(s[i])}else if(a.nodeType||a===window||a===document)r.push(a);else if(a.length>0&&a[0].nodeType)for(i=0;i<a.length;i++)r.push(a[i]);return new e(r)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.remove(a[t]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var r=0;r<this.length;r++)this[r].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var r in e)this[t][r]=e[r],this[t].setAttribute(r,e[r]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if("undefined"==typeof a){if(this[0]){var t=this[0].getAttribute("data-"+e);return t?t:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}return void 0}for(var r=0;r<this.length;r++){var i=this[r];i.dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=a}return this},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,r,i){function s(e){var i=e.target;if(a(i).is(t))r.call(i,e);else for(var s=a(i).parents(),n=0;n<s.length;n++)a(s[n]).is(t)&&r.call(s[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(r=arguments[1],i=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],r,i);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:r,liveListener:s}),this[n].addEventListener(l[o],s,i);return this},off:function(e,a,t,r){for(var i=e.split(" "),s=0;s<i.length;s++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],r=arguments[2]||!1),this[n].removeEventListener(i[s],t,r);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(i[s],this[n].dom7LiveListeners[o].liveListener,r);return this},once:function(e,a,t,r){function i(n){t(n),s.off(e,a,i,r)}var s=this;"function"==typeof a&&(a=!1,t=arguments[1],r=arguments[2]),s.on(e,a,i,r)},trigger:function(e,a){for(var t=0;t<this.length;t++){var r;try{r=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(i){r=document.createEvent("Event"),r.initEvent(e,!0,!0),r.detail=a}this[t].dispatchEvent(r)}return this},transitionEnd:function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<r.length;t++)i.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<r.length;t++)i.on(r[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,r=e.clientTop||t.clientTop||0,i=e.clientLeft||t.clientLeft||0,s=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+s-r,left:a.left+n-i}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var r in e)this[t].style[r]=e[r];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if("undefined"==typeof e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var r,i;if("string"==typeof t){var s=this[0];if(s===document)return t===document;if(s===window)return t===window;if(s.matches)return s.matches(t);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(t);if(s.mozMatchesSelector)return s.mozMatchesSelector(t);if(s.msMatchesSelector)return s.msMatchesSelector(t);for(r=a(t),i=0;i<r.length;i++)if(r[i]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(r=t.nodeType?[t]:t,i=0;i<r.length;i++)if(r[i]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}return void 0},eq:function(a){if("undefined"==typeof a)return this;var t,r=this.length;return a>r-1?new e([]):0>a?(t=r+a,new e(0>t?[]:[this[t]])):new e([this[a]])},append:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a;i.firstChild;)this[t].appendChild(i.firstChild)}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].appendChild(a[r]);else this[t].appendChild(a);return this},prepend:function(a){var t,r;for(t=0;t<this.length;t++)if("string"==typeof a){var i=document.createElement("div");for(i.innerHTML=a,r=i.childNodes.length-1;r>=0;r--)this[t].insertBefore(i.childNodes[r],this[t].childNodes[0])}else if(a instanceof e)for(r=0;r<a.length;r++)this[t].insertBefore(a[r],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0]);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[r].cloneNode(!0),t[i])},insertAfter:function(e){for(var t=a(e),r=0;r<this.length;r++)if(1===t.length)t[0].parentNode.insertBefore(this[r],t[0].nextSibling);else if(t.length>1)for(var i=0;i<t.length;i++)t[i].parentNode.insertBefore(this[r].cloneNode(!0),t[i].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var r=[],i=this[0];if(!i)return new e([]);for(;i.nextElementSibling;){var s=i.nextElementSibling;t?a(s).is(t)&&r.push(s):r.push(s),i=s}return new e(r)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var r=[],i=this[0];if(!i)return new e([]);for(;i.previousElementSibling;){var s=i.previousElementSibling;t?a(s).is(t)&&r.push(s):r.push(s),i=s}return new e(r)},parent:function(e){for(var t=[],r=0;r<this.length;r++)e?a(this[r].parentNode).is(e)&&t.push(this[r].parentNode):t.push(this[r].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],r=0;r<this.length;r++)for(var i=this[r].parentNode;i;)e?a(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],r=0;r<this.length;r++)for(var i=this[r].querySelectorAll(a),s=0;s<i.length;s++)t.push(i[s]);return new e(t)},children:function(t){for(var r=[],i=0;i<this.length;i++)for(var s=this[i].childNodes,n=0;n<s.length;n++)t?1===s[n].nodeType&&a(s[n]).is(t)&&r.push(s[n]):1===s[n].nodeType&&r.push(s[n]);return new e(a.unique(r))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,r=this;for(e=0;e<arguments.length;e++){var i=a(arguments[e]);for(t=0;t<i.length;t++)r[r.length]=i[t],r.length++}return r}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)-1===a.indexOf(e[t])&&a.push(e[t]);return a},a}()),i=["jQuery","Zepto","Dom7"],s=0;s<i.length;s++)window[i[s]]&&e(window[i[s]]);var n;n="undefined"==typeof r?window.Dom7||window.Zepto||window.jQuery:r,n&&("transitionEnd"in n.fn||(n.fn.transitionEnd=function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<r.length;t++)i.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=this;if(e)for(t=0;t<r.length;t++)i.on(r[t],a);return this}),"transform"in n.fn||(n.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in n.fn||(n.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
$(function () {
    'use strict';

    var duration_CONSTANT = 250;
    var options = {
        prefetch: true,
        cacheLength: 20,
        blacklist: '.no-smoothState',
        onStart: {
            duration: duration_CONSTANT,
            render: function ($container) {
                $('#bottom-sheet').closeModal();
                $container.addClass('is-exiting');
                smoothState.restartCSSAnimations();
                setTimeout(function () { }, duration_CONSTANT * 2);
            }
        },
        onReady: {
            duration: 0,
            render: function ($container, $newContent) {
                $container.removeClass('is-exiting');
                $container.html($newContent);
            }
        },
        onAfter: function ($container, $newContent) {
            setTimeout(function () {
                ResizeHandler = ResizeHandler || function () { };
                ResizeHandler();
            }, 500)
            initiate_plugins(); // All onAfter calls goes inside this function
        }
    };
    var smoothState = $('#main').smoothState(options).data('smoothState');
});
////--> Call all function for Ajax <--////
function initiate_plugins() {


    // Left Sidebar
    $('#open-left').sideNav({
        menuWidth: 240, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });


    // Scrolling Floating Action Button
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $(".floating-button").addClass("scrolled-down");
        } else {
            $(".floating-button").removeClass("scrolled-down");
        }
    });

    // Row Height for Drawer
    var grandparent_height = $('#grandparent').height();
    $('.child').height(grandparent_height * 0.25);

    // Swiper Sliders
    var swiper = new Swiper('.slider', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay: 5000,
        loop: true
    });
    var swiper = new Swiper('.slider-sliced', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 5000,
    });

    // Material Layout
    $('.parallax').parallax();
    $(function () {
        var hBanner = $('.h-banner').height();
        var cbHeight = hBanner - 56;
        var hHeight = hBanner - 86; // for Title
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= cbHeight) {
                $(".halo-nav").addClass('h-bg');
            }
            if (scroll <= cbHeight) {
                $(".halo-nav").removeClass('h-bg');
            }
            // For heading Title
            if (scroll >= hHeight) {
                $(".banner-title").hide();
                $(".halo-nav .title").show();
            }
            if (scroll <= hHeight) {
                $(".banner-title").show();
                $(".halo-nav .title").hide();
            }
        });
        // opacity Plush button
        var fadeStart = 50 // 100px scroll or less will equiv to 1 opacity
        fadeUntil = 150 // 150px scroll or more will equiv to 0 opacity
        fading = $('.resize');
        $(window).on('scroll', function () {
            var offset = $(document).scrollTop(),
                opacity = 0;
            if (offset <= fadeStart) {
                opacity = 1;
            } else if (offset <= fadeUntil) {
                opacity = 1 - offset / fadeUntil;
            }
            fading.css({
                'transform': 'scale(' + opacity + ')'
            });
        });
    });


}
////--> End of Call all function for Ajax, now from there recall all the functions <--////


// Left Sidebar
$('#open-left').sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});


// Scrolling Floating Action Button
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 1) {
        $(".floating-button").addClass("scrolled-down");
    } else {
        $(".floating-button").removeClass("scrolled-down");
    }
});

// Row Height for Drawer
var grandparent_height = $('#grandparent').height();
$('.child').height(grandparent_height * 0.25);

// Swiper sliders
var swiper = new Swiper('.slider', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    autoplay: 5000,
    loop: true
});
var swiper = new Swiper('.slider-sliced', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    autoplay: 5000,
});

// Material Layout
$('.parallax').parallax();
$(function () {
    var hBanner = $('.h-banner').height();
    var cbHeight = hBanner - 56;
    var hHeight = hBanner - 86; // for Title
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= cbHeight) {
            $(".halo-nav").addClass('h-bg');
        }
        if (scroll <= cbHeight) {
            $(".halo-nav").removeClass('h-bg');
        }
        // For heading Title
        if (scroll >= hHeight) {
            $(".banner-title").hide();
            $(".halo-nav .title").show();
        }
        if (scroll <= hHeight) {
            $(".banner-title").show();
            $(".halo-nav .title").hide();
        }
    });
    // opacity Plush button
    var fadeStart = 50 // 100px scroll or less will equiv to 1 opacity
    fadeUntil = 150 // 150px scroll or more will equiv to 0 opacity
    fading = $('.resize');
    $(window).on('scroll', function () {
        var offset = $(document).scrollTop(),
            opacity = 0;
        if (offset <= fadeStart) {
            opacity = 1;
        } else if (offset <= fadeUntil) {
            opacity = 1 - offset / fadeUntil;
        }
        fading.css({
            'transform': 'scale(' + opacity + ')'
        });
    });
});

//! moment.js
//! version : 2.7.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {

    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = "2.7.0",
        // the global-scope this is NOT the global object in Node.js
        globalScope = typeof global !== 'undefined' ? global : this,
        oldGlobalMoment,
        round = Math.round,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for language config files
        languages = {},

        // moment internal properties
        momentProperties = {
            _isAMomentObject: null,
            _i : null,
            _f : null,
            _l : null,
            _strict : null,
            _tzm : null,
            _isUTC : null,
            _offset : null,  // optional. Combine with _isUTC
            _pf : null,
            _lang : null  // optional
        },

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenOneToFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenOneToSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO separator)
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        parseTokenOrdinal = /\d{1,2}/,

        //strict parsing regexes
        parseTokenOneDigit = /\d/, // 0 - 9
        parseTokenTwoDigits = /\d\d/, // 00 - 99
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{4}/, // 0000 - 9999
        parseTokenSixDigits = /[+-]?\d{6}/, // -999,999 - 999,999
        parseTokenSignedNumber = /[+-]?\d+/, // -inf - inf

        // iso 8601 regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
        isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
            ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
            ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d{2}/],
            ['YYYY-DDD', /\d{4}-\d{3}/]
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            Q : 'quarter',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // default relative time thresholds
        relativeTimeThresholds = {
          s: 45,   //seconds to minutes
          m: 45,   //minutes to hours
          h: 22,   //hours to days
          dd: 25,  //days to month (month == 1)
          dm: 45,  //days to months (months > 1)
          dy: 345  //days to year
        },

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.lang().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.lang().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.lang().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.lang().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.lang().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            YYYYYY : function () {
                var y = this.year(), sign = y >= 0 ? '+' : '-';
                return sign + leftZeroFill(Math.abs(y), 6);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return leftZeroFill(this.weekYear(), 4);
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 4);
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ":" + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(a / 60), 2) + leftZeroFill(toInt(a) % 60, 2);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            X    : function () {
                return this.unix();
            },
            Q : function () {
                return this.quarter();
            }
        },

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

    // Pick the first defined of two or three arguments. dfl comes from
    // default.
    function dfl(a, b, c) {
        switch (arguments.length) {
            case 2: return a != null ? a : b;
            case 3: return a != null ? a : b != null ? b : c;
            default: throw new Error("Implement me");
        }
    }

    function defaultParsingFlags() {
        // We need to deep clone this object, and es5 standard is not very
        // helpful.
        return {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function deprecate(msg, fn) {
        var firstTime = true;
        function printMsg() {
            if (moment.suppressDeprecationWarnings === false &&
                    typeof console !== 'undefined' && console.warn) {
                console.warn("Deprecation warning: " + msg);
            }
        }
        return extend(function () {
            if (firstTime) {
                printMsg();
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.lang().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Language() {

    }

    // Moment prototype object
    function Moment(config) {
        checkOverflow(config);
        extend(this, config);
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;

        this._data = {};

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i)) {
                a[i] = b[i];
            }
        }

        if (b.hasOwnProperty("toString")) {
            a.toString = b.toString;
        }

        if (b.hasOwnProperty("valueOf")) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function cloneMoment(m) {
        var result = {}, i;
        for (i in m) {
            if (m.hasOwnProperty(i) && momentProperties.hasOwnProperty(i)) {
                result[i] = m[i];
            }
        }

        return result;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength, forceSign) {
        var output = '' + Math.abs(number),
            sign = number >= 0;

        while (output.length < targetLength) {
            output = '0' + output;
        }
        return (sign ? (forceSign ? '+' : '') : '-') + output;
    }

    // helper function for _.addTime and _.subtractTime
    function addOrSubtractDurationFromMoment(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = updateOffset == null ? true : updateOffset;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        if (days) {
            rawSetter(mom, 'Date', rawGetter(mom, 'Date') + days * isAdding);
        }
        if (months) {
            rawMonthSetter(mom, rawGetter(mom, 'Month') + months * isAdding);
        }
        if (updateOffset) {
            moment.updateOffset(mom, days || months);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return  Object.prototype.toString.call(input) === '[object Date]' ||
                input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (inputObject.hasOwnProperty(prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment.fn._lang[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment.fn._lang, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(moment([year, 11, 31 + dow - doy]), dow, doy).week;
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0;
            }
        }
        return m._isValid;
    }

    function normalizeLanguage(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function makeAs(input, model) {
        return model._isUTC ? moment(input).zone(model._offset || 0) :
            moment(input).local();
    }

    /************************************
        Languages
    ************************************/


    extend(Language.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment.utc([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LT : "h:mm A",
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY LT",
            LLLL : "dddd, MMMM D YYYY LT"
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },
        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace("%d", number);
        },
        _ordinal : "%d",

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    // Loads a language definition into the `languages` cache.  The function
    // takes a key and optionally values.  If not in the browser and no values
    // are provided, it will load the language file module.  As a convenience,
    // this function also returns the language values.
    function loadLang(key, values) {
        values.abbr = key;
        if (!languages[key]) {
            languages[key] = new Language();
        }
        languages[key].set(values);
        return languages[key];
    }

    // Remove a language from the `languages` cache. Mostly useful in tests.
    function unloadLang(key) {
        delete languages[key];
    }

    // Determines which language definition to use and returns it.
    //
    // With no parameters, it will return the global language.  If you
    // pass in a language key, such as 'en', it will return the
    // definition for 'en', so long as 'en' has already been loaded using
    // moment.lang.
    function getLangDefinition(key) {
        var i = 0, j, lang, next, split,
            get = function (k) {
                if (!languages[k] && hasModule) {
                    try {
                        require('./lang/' + k);
                    } catch (e) { }
                }
                return languages[k];
            };

        if (!key) {
            return moment.fn._lang;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            lang = get(key);
            if (lang) {
                return lang;
            }
            key = [key];
        }

        //pick the language from the array
        //try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
        //substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
        while (i < key.length) {
            split = normalizeLanguage(key[i]).split('-');
            j = split.length;
            next = normalizeLanguage(key[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                lang = get(split.slice(0, j).join('-'));
                if (lang) {
                    return lang;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return moment.fn._lang;
    }

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {

        if (!m.isValid()) {
            return m.lang().invalidDate();
        }

        format = expandFormat(format, m.lang());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, lang) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return lang.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a, strict = config._strict;
        switch (token) {
        case 'Q':
            return parseTokenOneDigit;
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return strict ? parseTokenFourDigits : parseTokenOneToFourDigits;
        case 'Y':
        case 'G':
        case 'g':
            return parseTokenSignedNumber;
        case 'YYYYYY':
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return strict ? parseTokenSixDigits : parseTokenOneToSixDigits;
        case 'S':
            if (strict) { return parseTokenOneDigit; }
            /* falls through */
        case 'SS':
            if (strict) { return parseTokenTwoDigits; }
            /* falls through */
        case 'SSS':
            if (strict) { return parseTokenThreeDigits; }
            /* falls through */
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return getLangDefinition(config._l)._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'ww':
        case 'WW':
            return strict ? parseTokenTwoDigits : parseTokenOneOrTwoDigits;
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'W':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        case 'Do':
            return parseTokenOrdinal;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), "i"));
            return a;
        }
    }

    function timezoneMinutesFromString(string) {
        string = string || "";
        var possibleTzMatches = (string.match(parseTokenTimezone) || []),
            tzChunk = possibleTzMatches[possibleTzMatches.length - 1] || [],
            parts = (tzChunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // QUARTER
        case 'Q':
            if (input != null) {
                datePartArray[MONTH] = (toInt(input) - 1) * 3;
            }
            break;
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = getLangDefinition(config._l).monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        case 'Do' :
            if (input != null) {
                datePartArray[DATE] = toInt(parseInt(input, 10));
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = moment.parseTwoDigitYear(input);
            break;
        case 'YYYY' :
        case 'YYYYY' :
        case 'YYYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = getLangDefinition(config._l).isPM(input);
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        // WEEKDAY - human
        case 'dd':
        case 'ddd':
        case 'dddd':
            a = getLangDefinition(config._l).weekdaysParse(input);
            // if we didn't get a weekday name, mark the date as invalid
            if (a != null) {
                config._w = config._w || {};
                config._w['d'] = a;
            } else {
                config._pf.invalidWeekday = input;
            }
            break;
        // WEEK, WEEK DAY - numeric
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gggg':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = toInt(input);
            }
            break;
        case 'gg':
        case 'GG':
            config._w = config._w || {};
            config._w[token] = moment.parseTwoDigitYear(input);
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, lang;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = dfl(w.GG, config._a[YEAR], weekOfYear(moment(), 1, 4).year);
            week = dfl(w.W, 1);
            weekday = dfl(w.E, 1);
        } else {
            lang = getLangDefinition(config._l);
            dow = lang._week.dow;
            doy = lang._week.doy;

            weekYear = dfl(w.gg, config._a[YEAR], weekOfYear(moment(), dow, doy).year);
            week = dfl(w.w, 1);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < dow) {
                    ++week;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from begining of week
                weekday = w.e + dow;
            } else {
                // default to begining of week
                weekday = dow;
            }
        }
        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate, yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = dfl(config._a[YEAR], currentDate[YEAR]);

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
        // Apply timezone offset from input. The actual zone can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() + config._tzm);
        }
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {

        if (config._f === moment.ISO_8601) {
            parseISO(config);
            return;
        }

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var lang = getLangDefinition(config._l),
            string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, lang).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0;
        }

        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = extend({}, config);
            tempConfig._pf = defaultParsingFlags();
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function parseISO(config) {
        var i, l,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 0, l = isoDates.length; i < l; i++) {
                if (isoDates[i][1].exec(string)) {
                    // match[5] should be "T" or undefined
                    config._f = isoDates[i][0] + (match[6] || " ");
                    break;
                }
            }
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (string.match(parseTokenTimezone)) {
                config._f += "Z";
            }
            makeDateFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    // date from iso format or fallback
    function makeDateFromString(config) {
        parseISO(config);
        if (config._isValid === false) {
            delete config._isValid;
            moment.createFromInputFallback(config);
        }
    }

    function makeDateFromInput(config) {
        var input = config._i,
            matched = aspNetJsonRegex.exec(input);

        if (input === undefined) {
            config._d = new Date();
        } else if (matched) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = input.slice(0);
            dateFromConfig(config);
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else if (typeof(input) === 'number') {
            // from milliseconds
            config._d = new Date(input);
        } else {
            moment.createFromInputFallback(config);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, language) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = language.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
        return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(milliseconds, withoutSuffix, lang) {
        var seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            years = round(days / 365),
            args = seconds < relativeTimeThresholds.s  && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < relativeTimeThresholds.m && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < relativeTimeThresholds.h && ['hh', hours] ||
                days === 1 && ['d'] ||
                days <= relativeTimeThresholds.dd && ['dd', days] ||
                days <= relativeTimeThresholds.dm && ['M'] ||
                days < relativeTimeThresholds.dy && ['MM', round(days / 30)] ||
                years === 1 && ['y'] || ['yy', years];
        args[2] = withoutSuffix;
        args[3] = milliseconds > 0;
        args[4] = lang;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add('d', daysToDayOfWeek);
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = makeUTCDate(year, 0, 1).getUTCDay(), daysToAdd, dayOfYear;

        d = d === 0 ? 7 : d;
        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        if (input === null || (format === undefined && input === '')) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = getLangDefinition().preparse(input);
        }

        if (moment.isMoment(input)) {
            config = cloneMoment(input);

            config._d = new Date(+input._d);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, lang, strict) {
        var c;

        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._i = input;
        c._f = format;
        c._l = lang;
        c._strict = strict;
        c._isUTC = false;
        c._pf = defaultParsingFlags();

        return makeMoment(c);
    };

    moment.suppressDeprecationWarnings = false;

    moment.createFromInputFallback = deprecate(
            "moment construction falls back to js Date. This is " +
            "discouraged and will be removed in upcoming major " +
            "release. Please refer to " +
            "https://github.com/moment/moment/issues/1407 for more info.",
            function (config) {
        config._d = new Date(config._i);
    });

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return moment();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    moment.min = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    };

    moment.max = function () {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    };

    // creating with utc
    moment.utc = function (input, format, lang, strict) {
        var c;

        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c = {};
        c._isAMomentObject = true;
        c._useUTC = true;
        c._isUTC = true;
        c._l = lang;
        c._i = input;
        c._f = format;
        c._strict = strict;
        c._pf = defaultParsingFlags();

        return makeMoment(c).utc();
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso;

        if (moment.isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months
            };
        } else if (typeof input === 'number') {
            duration = {};
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        }

        ret = new Duration(duration);

        if (moment.isDuration(input) && input.hasOwnProperty('_lang')) {
            ret._lang = input._lang;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // constant that refers to the ISO standard
    moment.ISO_8601 = function () {};

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    moment.momentProperties = momentProperties;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function allows you to set a threshold for relative time strings
    moment.relativeTimeThreshold = function(threshold, limit) {
      if (relativeTimeThresholds[threshold] === undefined) {
        return false;
      }
      relativeTimeThresholds[threshold] = limit;
      return true;
    };

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    moment.lang = function (key, values) {
        var r;
        if (!key) {
            return moment.fn._lang._abbr;
        }
        if (values) {
            loadLang(normalizeLanguage(key), values);
        } else if (values === null) {
            unloadLang(key);
            key = 'en';
        } else if (!languages[key]) {
            getLangDefinition(key);
        }
        r = moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
        return r._abbr;
    };

    // returns language data
    moment.langData = function (key) {
        if (key && key._lang && key._lang._abbr) {
            key = key._lang._abbr;
        }
        return getLangDefinition(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment ||
            (obj != null &&  obj.hasOwnProperty('_isAMomentObject'));
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function () {
        return moment.apply(null, arguments).parseZone();
    };

    moment.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().lang('en').format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            var m = moment(this).utc();
            if (0 < m.year() && m.year() <= 9999) {
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            } else {
                return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
            }
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {

            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function () {
            return this.zone(0);
        },

        local : function () {
            this.zone(0);
            this._isUTC = false;
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.lang().postformat(output);
        },

        add : function (input, val) {
            var dur;
            // switch args to support add('s', 1) and add(1, 's')
            if (typeof input === 'string' && typeof val === 'string') {
                dur = moment.duration(isNaN(+val) ? +input : +val, isNaN(+val) ? val : input);
            } else if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, 1);
            return this;
        },

        subtract : function (input, val) {
            var dur;
            // switch args to support subtract('s', 1) and subtract(1, 's')
            if (typeof input === 'string' && typeof val === 'string') {
                dur = moment.duration(isNaN(+val) ? +input : +val, isNaN(+val) ? val : input);
            } else if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, -1);
            return this;
        },

        diff : function (input, units, asFloat) {
            var that = makeAs(input, this),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                output += ((this - moment(this).startOf('month')) -
                        (that - moment(that).startOf('month'))) / diff;
                // same as above but with zones, to negate all dst
                output -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function (time) {
            // We want to compare the start of today, vs this.
            // Getting start-of-today depends on whether we're zone'd or not.
            var now = time || moment(),
                sod = makeAs(now, this).startOf('day'),
                diff = this.diff(sod, 'days', true),
                format = diff < -6 ? 'sameElse' :
                    diff < -1 ? 'lastWeek' :
                    diff < 0 ? 'lastDay' :
                    diff < 1 ? 'sameDay' :
                    diff < 2 ? 'nextDay' :
                    diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.lang().calendar(format, this));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.lang());
                return this.add({ d : input - day });
            } else {
                return day;
            }
        },

        month : makeAccessor('Month', true),

        startOf: function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'quarter':
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            // quarters are also special
            if (units === 'quarter') {
                this.month(Math.floor(this.month() / 3) * 3);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            return this.startOf(units).add((units === 'isoWeek' ? 'week' : units), 1).subtract('ms', 1);
        },

        isAfter: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) > +moment(input).startOf(units);
        },

        isBefore: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) < +moment(input).startOf(units);
        },

        isSame: function (input, units) {
            units = units || 'ms';
            return +this.clone().startOf(units) === +makeAs(input, this).startOf(units);
        },

        min: deprecate(
                 "moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",
                 function (other) {
                     other = moment.apply(null, arguments);
                     return other < this ? this : other;
                 }
         ),

        max: deprecate(
                "moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",
                function (other) {
                    other = moment.apply(null, arguments);
                    return other > this ? this : other;
                }
        ),

        // keepTime = true means only change the timezone, without affecting
        // the local hour. So 5:31:26 +0300 --[zone(2, true)]--> 5:31:26 +0200
        // It is possible that 5:31:26 doesn't exist int zone +0200, so we
        // adjust the time as needed, to be valid.
        //
        // Keeping the time actually adds/subtracts (one hour)
        // from the actual represented time. That is why we call updateOffset
        // a second time. In case it wants us to change the offset again
        // _changeInProgress == true case, then we have to adjust, because
        // there is no such time in the given timezone.
        zone : function (input, keepTime) {
            var offset = this._offset || 0;
            if (input != null) {
                if (typeof input === "string") {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                this._offset = input;
                this._isUTC = true;
                if (offset !== input) {
                    if (!keepTime || this._changeInProgress) {
                        addOrSubtractDurationFromMoment(this,
                                moment.duration(offset - input, 'm'), 1, false);
                    } else if (!this._changeInProgress) {
                        this._changeInProgress = true;
                        moment.updateOffset(this, true);
                        this._changeInProgress = null;
                    }
                }
            } else {
                return this._isUTC ? offset : this._d.getTimezoneOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? "UTC" : "";
        },

        zoneName : function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },

        parseZone : function () {
            if (this._tzm) {
                this.zone(this._tzm);
            } else if (typeof this._i === 'string') {
                this.zone(this._i);
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).zone();
            }

            return (this.zone() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
        },

        quarter : function (input) {
            return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return input == null ? year : this.add("y", (input - year));
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add("y", (input - year));
        },

        week : function (input) {
            var week = this.lang().week(this);
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.lang()._week.dow) % 7;
            return input == null ? weekday : this.add("d", input - weekday);
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        isoWeeksInYear : function () {
            return weeksInYear(this.year(), 1, 4);
        },

        weeksInYear : function () {
            var weekInfo = this._lang._week;
            return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                this[units](value);
            }
            return this;
        },

        // If passed a language key, it will set the language for this
        // instance.  Otherwise, it will return the language configuration
        // variables for this instance.
        lang : function (key) {
            if (key === undefined) {
                return this._lang;
            } else {
                this._lang = getLangDefinition(key);
                return this;
            }
        }
    });

    function rawMonthSetter(mom, value) {
        var dayOfMonth;

        // TODO: Move this out of here!
        if (typeof value === 'string') {
            value = mom.lang().monthsParse(value);
            // TODO: Another silent failure?
            if (typeof value !== 'number') {
                return mom;
            }
        }

        dayOfMonth = Math.min(mom.date(),
                daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function rawGetter(mom, unit) {
        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
    }

    function rawSetter(mom, unit, value) {
        if (unit === 'Month') {
            return rawMonthSetter(mom, value);
        } else {
            return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }

    function makeAccessor(unit, keepTime) {
        return function (value) {
            if (value != null) {
                rawSetter(this, unit, value);
                moment.updateOffset(this, keepTime);
                return this;
            } else {
                return rawGetter(this, unit);
            }
        };
    }

    moment.fn.millisecond = moment.fn.milliseconds = makeAccessor('Milliseconds', false);
    moment.fn.second = moment.fn.seconds = makeAccessor('Seconds', false);
    moment.fn.minute = moment.fn.minutes = makeAccessor('Minutes', false);
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour he wants. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    moment.fn.hour = moment.fn.hours = makeAccessor('Hours', true);
    // moment.fn.month is defined separately
    moment.fn.date = makeAccessor('Date', true);
    moment.fn.dates = deprecate("dates accessor is deprecated. Use date instead.", makeAccessor('Date', true));
    moment.fn.year = makeAccessor('FullYear', true);
    moment.fn.years = deprecate("years accessor is deprecated. Use year instead.", makeAccessor('FullYear', true));

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;
    moment.fn.quarters = moment.fn.quarter;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);
            data.days = days % 30;

            months += absRound(days / 30);
            data.months = months % 12;

            years = absRound(months / 12);
            data.years = years;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var difference = +this,
                output = relativeTime(difference, !withSuffix, this.lang());

            if (withSuffix) {
                output = this.lang().pastFuture(difference, output);
            }

            return this.lang().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            units = normalizeUnits(units);
            return this['as' + units.charAt(0).toUpperCase() + units.slice(1) + 's']();
        },

        lang : moment.fn.lang,

        toIsoString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        }
    });

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    function makeDurationAsGetter(name, factor) {
        moment.duration.fn['as' + name] = function () {
            return +this / factor;
        };
    }

    for (i in unitMillisecondFactors) {
        if (unitMillisecondFactors.hasOwnProperty(i)) {
            makeDurationAsGetter(i, unitMillisecondFactors[i]);
            makeDurationGetter(i.toLowerCase());
        }
    }

    makeDurationAsGetter('Weeks', 6048e5);
    moment.duration.fn.asMonths = function () {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12;
    };


    /************************************
        Default Lang
    ************************************/


    // Set default language, other languages will inherit from English.
    moment.lang('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LANGUAGES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(shouldDeprecate) {
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        oldGlobalMoment = globalScope.moment;
        if (shouldDeprecate) {
            globalScope.moment = deprecate(
                    "Accessing Moment through the global scope is " +
                    "deprecated, and will be removed in an upcoming " +
                    "release.",
                    moment);
        } else {
            globalScope.moment = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
    } else if (typeof define === "function" && define.amd) {
        define("moment", function (require, exports, module) {
            if (module.config && module.config() && module.config().noGlobal === true) {
                // release the global variable
                globalScope.moment = oldGlobalMoment;
            }

            return moment;
        });
        makeGlobal(true);
    } else {
        makeGlobal();
    }
}).call(this);
var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.LazyLoad=t()}(this,function(){"use strict";function e(e,t){var n=t.data_src,o=h(e,n),i=e.tagName;if("IMG"===i){var s=t.data_srcset,r=h(e,s),l=e.parentNode;return l&&"PICTURE"===l.tagName&&_(l,"srcset",s),p(e,"srcset",r),void p(e,"src",o)}if("IFRAME"!==i)return"VIDEO"===i?(_(e,"src",n),void p(e,"src",o)):void(o&&(e.style.backgroundImage='url("'+o+'")'));p(e,"src",o)}var t=function(){return{elements_selector:"img",container:window,threshold:300,throttle:150,data_src:"src",data_srcset:"srcset",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_initial:"initial",skip_invisible:!0,callback_load:null,callback_error:null,callback_set:null,callback_processed:null,callback_enter:null}},n=!("onscroll"in window)||/glebot/.test(navigator.userAgent),o=function(e,t){e&&e(t)},i=function(e){return e.getBoundingClientRect().top+window.pageYOffset-e.ownerDocument.documentElement.clientTop},s=function(e,t,n){return(t===window?window.innerHeight+window.pageYOffset:i(t)+t.offsetHeight)<=i(e)-n},r=function(e){return e.getBoundingClientRect().left+window.pageXOffset-e.ownerDocument.documentElement.clientLeft},l=function(e,t,n){var o=window.innerWidth;return(t===window?o+window.pageXOffset:r(t)+o)<=r(e)-n},a=function(e,t,n){return(t===window?window.pageYOffset:i(t))>=i(e)+n+e.offsetHeight},c=function(e,t,n){return(t===window?window.pageXOffset:r(t))>=r(e)+n+e.offsetWidth},u=function(e,t,n){return!(s(e,t,n)||a(e,t,n)||l(e,t,n)||c(e,t,n))},d=function(e,t){var n,o=new e(t);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)},h=function(e,t){return e.getAttribute("data-"+t)},f=function(e,t,n){return e.setAttribute("data-"+t,n)},_=function(e,t,n){for(var o,i=0;o=e.children[i];i+=1)if("SOURCE"===o.tagName){var s=h(o,n);s&&o.setAttribute(t,s)}},p=function(e,t,n){n&&e.setAttribute(t,n)},m="undefined"!=typeof window,g=m&&"classList"in document.createElement("p"),v=function(e,t){g?e.classList.add(t):e.className+=(e.className?" ":"")+t},w=function(e,t){g?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},b=function(e){this._settings=_extends({},t(),e),this._queryOriginNode=this._settings.container===window?document:this._settings.container,this._previousLoopTime=0,this._loopTimeout=null,this._boundHandleScroll=this.handleScroll.bind(this),this._isFirstLoop=!0,window.addEventListener("resize",this._boundHandleScroll),this.update()};b.prototype={_reveal:function(t){var n=this._settings,i=function e(){n&&(t.removeEventListener("load",s),t.removeEventListener("error",e),w(t,n.class_loading),v(t,n.class_error),o(n.callback_error,t))},s=function e(){n&&(w(t,n.class_loading),v(t,n.class_loaded),t.removeEventListener("load",e),t.removeEventListener("error",i),o(n.callback_load,t))};o(n.callback_enter,t),["IMG","IFRAME","VIDEO"].indexOf(t.tagName)>-1&&(t.addEventListener("load",s),t.addEventListener("error",i),v(t,n.class_loading)),e(t,n),o(n.callback_set,t)},_loopThroughElements:function(){var e=this._settings,t=this._elements,i=t?t.length:0,s=void 0,r=[],l=this._isFirstLoop;for(s=0;s<i;s++){var a=t[s];e.skip_invisible&&null===a.offsetParent||(n||u(a,e.container,e.threshold))&&(l&&v(a,e.class_initial),this._reveal(a),r.push(s),f(a,"was-processed",!0))}for(;r.length;)t.splice(r.pop(),1),o(e.callback_processed,t.length);0===i&&this._stopScrollHandler(),l&&(this._isFirstLoop=!1)},_purgeElements:function(){var e=this._elements,t=e.length,n=void 0,o=[];for(n=0;n<t;n++){var i=e[n];h(i,"was-processed")&&o.push(n)}for(;o.length>0;)e.splice(o.pop(),1)},_startScrollHandler:function(){this._isHandlingScroll||(this._isHandlingScroll=!0,this._settings.container.addEventListener("scroll",this._boundHandleScroll))},_stopScrollHandler:function(){this._isHandlingScroll&&(this._isHandlingScroll=!1,this._settings.container.removeEventListener("scroll",this._boundHandleScroll))},handleScroll:function(){var e=this._settings.throttle;if(0!==e){var t=Date.now(),n=e-(t-this._previousLoopTime);n<=0||n>e?(this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._previousLoopTime=t,this._loopThroughElements()):this._loopTimeout||(this._loopTimeout=setTimeout(function(){this._previousLoopTime=Date.now(),this._loopTimeout=null,this._loopThroughElements()}.bind(this),n))}else this._loopThroughElements()},update:function(){this._elements=Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)),this._purgeElements(),this._loopThroughElements(),this._startScrollHandler()},destroy:function(){window.removeEventListener("resize",this._boundHandleScroll),this._loopTimeout&&(clearTimeout(this._loopTimeout),this._loopTimeout=null),this._stopScrollHandler(),this._elements=null,this._queryOriginNode=null,this._settings=null}};var y=window.lazyLoadOptions;return m&&y&&function(e,t){var n=t.length;if(n)for(var o=0;o<n;o++)d(e,t[o]);else d(e,t)}(b,y),b});

(function(v){var u="0.3.4",t="hasOwnProperty",s=/[\.\/]/,r="*",q=function(){},p=function(d,c){return d-c},o,n,m={n:{}},l=function(D,C){var B=m,A=n,z=Array.prototype.slice.call(arguments,2),y=l.listeners(D),x=0,w=!1,k,j=[],i={},h=[],g=o,G=[];o=D,n=0;for(var F=0,E=y.length;F<E;F++){"zIndex" in y[F]&&(j.push(y[F].zIndex),y[F].zIndex<0&&(i[y[F].zIndex]=y[F]))}j.sort(p);while(j[x]<0){k=i[j[x++]],h.push(k.apply(C,z));if(n){n=A;return h}}for(F=0;F<E;F++){k=y[F];if("zIndex" in k){if(k.zIndex==j[x]){h.push(k.apply(C,z));if(n){break}do{x++,k=i[j[x]],k&&h.push(k.apply(C,z));if(n){break}}while(k)}else{i[k.zIndex]=k}}else{h.push(k.apply(C,z));if(n){break}}}n=A,o=g;return h.length?h:null};l.listeners=function(F){var E=F.split(s),D=m,C,B,A,z,y,x,w,j,e=[D],d=[];for(z=0,y=E.length;z<y;z++){j=[];for(x=0,w=e.length;x<w;x++){D=e[x].n,B=[D[E[z]],D[r]],A=2;while(A--){C=B[A],C&&(j.push(C),d=d.concat(C.f||[]))}}e=j}return d},l.on=function(f,d){var w=f.split(s),k=m;for(var j=0,i=w.length;j<i;j++){k=k.n,!k[w[j]]&&(k[w[j]]={n:{}}),k=k[w[j]]}k.f=k.f||[];for(j=0,i=k.f.length;j<i;j++){if(k.f[j]==d){return q}}k.f.push(d);return function(b){+b==+b&&(d.zIndex=+b)}},l.stop=function(){n=1},l.nt=function(b){if(b){return(new RegExp("(?:\\.|\\/|^)"+b+"(?:\\.|\\/|$)")).test(o)}return o},l.off=l.unbind=function(D,C){var B=D.split(s),A,z,y,x,w,j,e,d=[m];for(x=0,w=B.length;x<w;x++){for(j=0;j<d.length;j+=y.length-2){y=[j,1],A=d[j].n;if(B[x]!=r){A[B[x]]&&y.push(A[B[x]])}else{for(z in A){A[t](z)&&y.push(A[z])}}d.splice.apply(d,y)}}for(x=0,w=d.length;x<w;x++){A=d[x];while(A.n){if(C){if(A.f){for(j=0,e=A.f.length;j<e;j++){if(A.f[j]==C){A.f.splice(j,1);break}}!A.f.length&&delete A.f}for(z in A.n){if(A.n[t](z)&&A.n[z].f){var c=A.n[z].f;for(j=0,e=c.length;j<e;j++){if(c[j]==C){c.splice(j,1);break}}!c.length&&delete A.n[z].f}}}else{delete A.f;for(z in A.n){A.n[t](z)&&A.n[z].f&&delete A.n[z].f}}A=A.n}}},l.once=function(e,d){var f=function(){var a=d.apply(this,arguments);l.unbind(e,f);return a};return l.on(e,f)},l.version=u,l.toString=function(){return"You are running Eve "+u},typeof module!="undefined"&&module.exports?module.exports=l:typeof define!="undefined"?define("eve",[],function(){return l}):v.eve=l})(this),function(){function cX(d){for(var c=0;c<ab.length;c++){ab[c].el.paper==d&&ab.splice(c--,1)}}function c0(br,bq,bp,bo,bn,bm){bp=c4(bp);var bl,bk,bj,bi=[],bh,bg,be,bb=br.ms,Z={},X={},V={};if(bo){for(Q=0,C=ab.length;Q<C;Q++){var T=ab[Q];if(T.el.id==bq.id&&T.anim==br){T.percent!=bp?(ab.splice(Q,1),bj=1):bk=T,bq.attr(T.totalOrigin);break}}}else{bo=+X}for(var Q=0,C=br.percents.length;Q<C;Q++){if(br.percents[Q]==bp||br.percents[Q]>bo*br.top){bp=br.percents[Q],bg=br.percents[Q-1]||0,bb=bb/br.top*(bp-bg),bh=br.percents[Q+1],bl=br.anim[bp];break}bo&&bq.attr(br.anim[br.percents[Q]])}if(!!bl){if(!bk){for(var bf in bl){if(bl[aV](bf)){if(cS[aV](bf)||bq.paper.customAttributes[aV](bf)){Z[bf]=bq.attr(bf),Z[bf]==null&&(Z[bf]=cV[bf]),X[bf]=bl[bf];switch(cS[bf]){case dv:V[bf]=(X[bf]-Z[bf])/bb;break;case"colour":Z[bf]=a8.getRGB(Z[bf]);var bd=a8.getRGB(X[bf]);V[bf]={r:(bd.r-Z[bf].r)/bb,g:(bd.g-Z[bf].g)/bb,b:(bd.b-Z[bf].b)/bb};break;case"path":var bc=dA(Z[bf],X[bf]),ba=bc[1];Z[bf]=bc[0],V[bf]=[];for(Q=0,C=Z[bf].length;Q<C;Q++){V[bf][Q]=[0];for(var Y=1,W=Z[bf][Q].length;Y<W;Y++){V[bf][Q][Y]=(ba[Q][Y]-Z[bf][Q][Y])/bb}}break;case"transform":var U=bq._,S=aM(U[bf],X[bf]);if(S){Z[bf]=S.from,X[bf]=S.to,V[bf]=[],V[bf].real=!0;for(Q=0,C=Z[bf].length;Q<C;Q++){V[bf][Q]=[Z[bf][Q][0]];for(Y=1,W=Z[bf][Q].length;Y<W;Y++){V[bf][Q][Y]=(X[bf][Q][Y]-Z[bf][Q][Y])/bb}}}else{var N=bq.matrix||new aL,s={_:{transform:U.transform},getBBox:function(){return bq.getBBox(1)}};Z[bf]=[N.a,N.b,N.c,N.d,N.e,N.f],dT(s,X[bf]),X[bf]=s._.transform,V[bf]=[(s.matrix.a-N.a)/bb,(s.matrix.b-N.b)/bb,(s.matrix.c-N.c)/bb,(s.matrix.d-N.d)/bb,(s.matrix.e-N.e)/bb,(s.matrix.f-N.f)/bb]}break;case"csv":var r=aF(bl[bf])[aD](a3),n=aF(Z[bf])[aD](a3);if(bf=="clip-rect"){Z[bf]=n,V[bf]=[],Q=n.length;while(Q--){V[bf][Q]=(r[Q]-Z[bf][Q])/bb}}X[bf]=r;break;default:r=[][aN](bl[bf]),n=[][aN](Z[bf]),V[bf]=[],Q=bq.paper.customAttributes[bf].length;while(Q--){V[bf][Q]=((r[Q]||0)-(n[Q]||0))/bb}}}}}var g=bl.easing,c=a8.easing_formulas[g];if(!c){c=aF(g).match(dc);if(c&&c.length==5){var a=c;c=function(b){return c6(b,+a[1],+a[2],+a[3],+a[4],bb)}}else{c=cU}}be=bl.start||br.start||+(new Date),T={anim:br,percent:bp,timestamp:be,start:be+(br.del||0),status:0,initstatus:bo||0,stop:!1,ms:bb,easing:c,from:Z,diff:V,to:X,el:bq,callback:bl.callback,prev:bg,next:bh,repeat:bm||br.times,origin:bq.attr(),totalOrigin:bn},ab.push(T);if(bo&&!bk&&!bj){T.stop=!0,T.start=new Date-bb*bo;if(ab.length==1){return db()}}bj&&(T.start=new Date-T.ms*bo),ab.length==1&&aa(db)}else{bk.initstatus=bo,bk.start=new Date-bk.ms*bo}eve("raphael.anim.start."+bq.id,bq,br)}}function c3(g,f){var j=[],i={};this.ms=f,this.times=1;if(g){for(var h in g){g[aV](h)&&(i[c4(h)]=g[h],j.push(c4(h)))}j.sort(cZ)}this.anim=i,this.top=j[j.length-1],this.percents=j}function c6(D,C,B,A,z,y){function p(h,g){var E,o,n,m,l,i;for(n=h,i=0;i<8;i++){m=r(n)-h;if(ao(m)<g){return n}l=(3*v*n+2*w)*n+x;if(ao(l)<0.000001){break}n=n-m/l}E=0,o=1,n=h;if(n<E){return E}if(n>o){return o}while(E<o){m=r(n);if(ao(m-h)<g){return n}h>m?E=n:o=n,n=(o-E)/2+E}return n}function q(e,d){var f=p(e,d);return((s*f+t)*f+u)*f}function r(b){return((v*b+w)*b+x)*b}var x=3*C,w=3*(A-C)-x,v=1-x-w,u=3*B,t=3*(z-B)-u,s=1-u-t;return q(D,1/(200*y))}function aj(){return this.x+aH+this.y+aH+this.width+" × "+this.height}function ak(){return this.x+aH+this.y}function aL(h,g,l,k,j,i){h!=null?(this.a=+h,this.b=+g,this.c=+l,this.d=+k,this.e=+j,this.f=+i):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function dK(T,S,R){T=a8._path2curve(T),S=a8._path2curve(S);var Q,P,O,N,M,L,K,J,I,H,G=R?0:[];for(var F=0,E=T.length;F<E;F++){var D=T[F];if(D[0]=="M"){Q=M=D[1],P=L=D[2]}else{D[0]=="C"?(I=[Q,P].concat(D.slice(1)),Q=I[6],P=I[7]):(I=[Q,P,Q,P,M,L,M,L],Q=M,P=L);for(var C=0,B=S.length;C<B;C++){var A=S[C];if(A[0]=="M"){O=K=A[1],N=J=A[2]}else{A[0]=="C"?(H=[O,N].concat(A.slice(1)),O=H[6],N=H[7]):(H=[O,N,O,N,K,J,K,J],O=K,N=J);var z=dL(I,H,R);if(R){G+=z}else{for(var y=0,a=z.length;y<a;y++){z[y].segment1=F,z[y].segment2=C,z[y].bez1=I,z[y].bez2=H}G=G.concat(z)}}}}}return G}function dL(X,W,V){var U=a8.bezierBBox(X),T=a8.bezierBBox(W);if(!a8.isBBoxIntersect(U,T)){return V?0:[]}var S=dQ.apply(0,X),R=dQ.apply(0,W),Q=~~(S/5),P=~~(R/5),O=[],N=[],M={},L=V?0:[];for(var K=0;K<Q+1;K++){var J=a8.findDotsAtSegment.apply(a8,X.concat(K/Q));O.push({x:J.x,y:J.y,t:K/Q})}for(K=0;K<P+1;K++){J=a8.findDotsAtSegment.apply(a8,W.concat(K/P)),N.push({x:J.x,y:J.y,t:K/P})}for(K=0;K<Q;K++){for(var H=0;H<P;H++){var G=O[K],F=O[K+1],E=N[H],D=N[H+1],C=ao(F.x-G.x)<0.001?"y":"x",B=ao(D.x-E.x)<0.001?"y":"x",z=dO(G.x,G.y,F.x,F.y,E.x,E.y,D.x,D.y);if(z){if(M[z.x.toFixed(4)]==z.y.toFixed(4)){continue}M[z.x.toFixed(4)]=z.y.toFixed(4);var a=G.t+ao((z[C]-G[C])/(F[C]-G[C]))*(F.t-G.t),I=E.t+ao((z[B]-E[B])/(D[B]-E[B]))*(D.t-E.t);a>=0&&a<=1&&I>=0&&I<=1&&(V?L++:L.push({x:z.x,y:z.y,t1:a,t2:I}))}}}return L}function dM(d,c){return dL(d,c,1)}function dN(d,c){return dL(d,c)}function dO(D,C,B,A,z,y,x,w){if(!(at(D,B)<aq(z,x)||aq(D,B)>at(z,x)||at(C,A)<aq(y,w)||aq(C,A)>at(y,w))){var v=(D*A-C*B)*(z-x)-(D-B)*(z*w-y*x),u=(D*A-C*B)*(y-w)-(C-A)*(z*w-y*x),t=(D-B)*(y-w)-(C-A)*(z-x);if(!t){return}var s=v/t,r=u/t,q=+s.toFixed(2),p=+r.toFixed(2);if(q<+aq(D,B).toFixed(2)||q>+at(D,B).toFixed(2)||q<+aq(z,x).toFixed(2)||q>+at(z,x).toFixed(2)||p<+aq(C,A).toFixed(2)||p>+at(C,A).toFixed(2)||p<+aq(y,w).toFixed(2)||p>+at(y,w).toFixed(2)){return}return{x:s,y:r}}}function dP(B,A,z,y,x,w,v,u,t){if(!(t<0||dQ(B,A,z,y,x,w,v,u)<t)){var s=1,r=s/2,q=s-r,p,o=0.01;p=dQ(B,A,z,y,x,w,v,u,q);while(ao(p-t)>o){r/=2,q+=(p<t?1:-1)*r,p=dQ(B,A,z,y,x,w,v,u,q)}return q}}function dQ(L,K,J,I,H,G,F,E,D){D==null&&(D=1),D=D>1?1:D<0?0:D;var C=D/2,B=12,A=[-0.1252,0.1252,-0.3678,0.3678,-0.5873,0.5873,-0.7699,0.7699,-0.9041,0.9041,-0.9816,0.9816],z=[0.2491,0.2491,0.2335,0.2335,0.2032,0.2032,0.1601,0.1601,0.1069,0.1069,0.0472,0.0472],y=0;for(var x=0;x<B;x++){var w=C*A[x]+C,v=dR(w,L,J,H,F),u=dR(w,K,I,G,E),t=v*v+u*u;y+=z[x]*av.sqrt(t)}return C*y}function dR(i,h,n,m,l){var k=-3*h+9*n-9*m+3*l,j=i*k+6*h-12*n+6*m;return i*j-3*h+3*n}function aW(h,g){var l=[];for(var k=0,j=h.length;j-2*!g>k;k+=2){var i=[{x:+h[k-2],y:+h[k-1]},{x:+h[k],y:+h[k+1]},{x:+h[k+2],y:+h[k+3]},{x:+h[k+4],y:+h[k+5]}];g?k?j-4==k?i[3]={x:+h[0],y:+h[1]}:j-2==k&&(i[2]={x:+h[0],y:+h[1]},i[3]={x:+h[2],y:+h[3]}):i[0]={x:+h[j-2],y:+h[j-1]}:j-4==k?i[3]=i[2]:k||(i[0]={x:+h[k],y:+h[k+1]}),l.push(["C",(-i[0].x+6*i[1].x+i[2].x)/6,(-i[0].y+6*i[1].y+i[2].y)/6,(i[1].x+6*i[2].x-i[3].x)/6,(i[1].y+6*i[2].y-i[3].y)/6,i[2].x,i[2].y])}return l}function aY(){return this.hex}function a2(f,e,h){function g(){var d=Array.prototype.slice.call(arguments,0),c=d.join("?"),b=g.cache=g.cache||{},a=g.count=g.count||[];if(b[aV](c)){a4(a,c);return h?h(b[c]):b[c]}a.length>=1000&&delete b[a.shift()],a.push(c),b[c]=f[aO](e,d);return h?h(b[c]):b[c]}return g}function a4(f,e){for(var h=0,g=f.length;h<g;h++){if(f[h]===e){return f.push(f.splice(h,1)[0])}}}function b5(e){if(Object(e)!==e){return e}var d=new e.constructor;for(var f in e){e[aV](f)&&(d[f]=b5(e[f]))}return d}function a8(f){if(a8.is(f,"function")){return a6?f():eve.on("raphael.DOMload",f)}if(a8.is(f,dr)){return a8._engine.create[aO](a8,f.splice(0,3+a8.is(f[0],dv))).add(f)}var b=Array.prototype.slice.call(arguments,0);if(a8.is(b[b.length-1],"function")){var a=b.pop();return a6?a.call(a8._engine.create[aO](a8,b)):eve.on("raphael.DOMload",function(){a.call(a8._engine.create[aO](a8,b))})}return a8._engine.create[aO](a8,arguments)}a8.version="2.1.0",a8.eve=eve;var a6,a3=/[, ]+/,a1={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},a0=/\{(\d+)\}/g,aX="prototype",aV="hasOwnProperty",aU={doc:document,win:window},aS={was:Object.prototype[aV].call(aU.win,"Raphael"),is:aU.win.Raphael},aR=function(){this.ca=this.customAttributes={}},aQ,aP="appendChild",aO="apply",aN="concat",aK="createTouch" in aU.doc,aJ="",aH=" ",aF=String,aD="split",aB="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[aD](aH),az={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},ax=aF.prototype.toLowerCase,av=Math,at=av.max,aq=av.min,ao=av.abs,dz=av.pow,dx=av.PI,dv="number",dt="string",dr="array",dp="toString",dm="fill",dk=Object.prototype.toString,di={},dh="push",dg=a8._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,df=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,de={NaN:1,Infinity:1,"-Infinity":1},dc=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,da=av.round,c7="setAttribute",c4=parseFloat,c1=parseInt,cY=aF.prototype.toUpperCase,cV=a8._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},cS=a8._availableAnimAttrs={blur:dv,"clip-rect":"csv",cx:dv,cy:dv,fill:"colour","fill-opacity":dv,"font-size":dv,height:dv,opacity:dv,path:"path",r:dv,rx:dv,ry:dv,stroke:"colour","stroke-opacity":dv,"stroke-width":dv,transform:"transform",width:dv,x:dv,y:dv},cP=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,cM=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,cK={hs:1,rg:1},b9=/,?([achlmqrstvxz]),?/gi,b7=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,dS=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,b1=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,c9=a8._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,c5={},c2=function(d,c){return d.key-c.key},cZ=function(d,c){return c4(d)-c4(c)},cW=function(){},cU=function(b){return b},cR=a8._rectPath=function(g,f,j,i,h){if(h){return[["M",g+h,f],["l",j-h*2,0],["a",h,h,0,0,1,h,h],["l",0,i-h*2],["a",h,h,0,0,1,-h,h],["l",h*2-j,0],["a",h,h,0,0,1,-h,-h],["l",0,h*2-i],["a",h,h,0,0,1,h,-h],["z"]]}return[["M",g,f],["l",j,0],["l",0,i],["l",-j,0],["z"]]},cO=function(f,e,h,g){g==null&&(g=h);return[["M",f,e],["m",0,-g],["a",h,g,0,1,1,0,2*g],["a",h,g,0,1,1,0,-2*g],["z"]]},cL=a8._getPath={path:function(b){return b.attr("path")},circle:function(d){var c=d.attrs;return cO(c.cx,c.cy,c.r)},ellipse:function(d){var c=d.attrs;return cO(c.cx,c.cy,c.rx,c.ry)},rect:function(d){var c=d.attrs;return cR(c.x,c.y,c.width,c.height,c.r)},image:function(d){var c=d.attrs;return cR(c.x,c.y,c.width,c.height)},text:function(d){var c=d._getBBox();return cR(c.x,c.y,c.width,c.height)}},cJ=a8.mapPath=function(r,q){if(!q){return r}var p,o,n,m,l,k,j;r=dA(r);for(n=0,l=r.length;n<l;n++){j=r[n];for(m=1,k=j.length;m<k;m+=2){p=q.x(j[m],j[m+1]),o=q.y(j[m],j[m+1]),j[m]=p,j[m+1]=o}}return r};a8._g=aU,a8.type=aU.win.SVGAngle||aU.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a8.type=="VML"){var b8=aU.doc.createElement("div"),b6;b8.innerHTML='<v:shape adj="1"/>',b6=b8.firstChild,b6.style.behavior="url(#default#VML)";if(!b6||typeof b6.adj!="object"){return a8.type=aJ}b8=null}a8.svg=!(a8.vml=a8.type=="VML"),a8._Paper=aR,a8.fn=aQ=aR.prototype=a8.prototype,a8._id=0,a8._oid=0,a8.is=function(d,c){c=ax.call(c);if(c=="finite"){return !de[aV](+d)}if(c=="array"){return d instanceof Array}return c=="null"&&d===null||c==typeof d&&d!==null||c=="object"&&d===Object(d)||c=="array"&&Array.isArray&&Array.isArray(d)||dk.call(d).slice(8,-1).toLowerCase()==c},a8.angle=function(a,p,o,n,m,l){if(m==null){var k=a-o,j=p-n;if(!k&&!j){return 0}return(180+av.atan2(-j,-k)*180/dx+360)%360}return a8.angle(a,p,m,l)-a8.angle(o,n,m,l)},a8.rad=function(b){return b%360*dx/180},a8.deg=function(b){return b*180/dx%360},a8.snapTo=function(a,j,i){i=a8.is(i,"finite")?i:10;if(a8.is(a,dr)){var h=a.length;while(h--){if(ao(a[h]-j)<=i){return a[h]}}}else{a=+a;var g=j%a;if(g<i){return j-g}if(g>a-i){return j-g+a}}return j};var b4=a8.createUUID=function(d,c){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(d,c).toUpperCase()}}(/[xy]/g,function(e){var d=av.random()*16|0,f=e=="x"?d:d&3|8;return f.toString(16)});a8.setWindow=function(a){eve("raphael.setWindow",a8,aU.win,a),aU.win=a,aU.doc=aU.win.document,a8._engine.initWin&&a8._engine.initWin(aU.win)};var b3=function(a){if(a8.vml){var n=/^\s+|\s+$/g,m;try{var l=new ActiveXObject("htmlfile");l.write("<body>"),l.close(),m=l.body}catch(k){m=createPopup().document.body}var j=m.createTextRange();b3=a2(function(d){try{m.style.color=aF(d).replace(n,aJ);var c=j.queryCommandValue("ForeColor");c=(c&255)<<16|c&65280|(c&16711680)>>>16;return"#"+("000000"+c.toString(16)).slice(-6)}catch(f){return"none"}})}else{var h=aU.doc.createElement("i");h.title="Raphaël Colour Picker",h.style.display="none",aU.doc.body.appendChild(h),b3=a2(function(b){h.style.color=b;return aU.doc.defaultView.getComputedStyle(h,aJ).getPropertyValue("color")})}return b3(a)},b2=function(){return"hsb("+[this.h,this.s,this.b]+")"},b0=function(){return"hsl("+[this.h,this.s,this.l]+")"},a9=function(){return this.hex},a7=function(a,h,g){h==null&&a8.is(a,"object")&&"r" in a&&"g" in a&&"b" in a&&(g=a.b,h=a.g,a=a.r);if(h==null&&a8.is(a,dt)){var f=a8.getRGB(a);a=f.r,h=f.g,g=f.b}if(a>1||h>1||g>1){a/=255,h/=255,g/=255}return[a,h,g]},a5=function(a,j,i,h){a*=255,j*=255,i*=255;var g={r:a,g:j,b:i,hex:a8.rgb(a,j,i),toString:a9};a8.is(h,"finite")&&(g.opacity=h);return g};a8.color=function(a){var d;a8.is(a,"object")&&"h" in a&&"s" in a&&"b" in a?(d=a8.hsb2rgb(a),a.r=d.r,a.g=d.g,a.b=d.b,a.hex=d.hex):a8.is(a,"object")&&"h" in a&&"s" in a&&"l" in a?(d=a8.hsl2rgb(a),a.r=d.r,a.g=d.g,a.b=d.b,a.hex=d.hex):(a8.is(a,"string")&&(a=a8.getRGB(a)),a8.is(a,"object")&&"r" in a&&"g" in a&&"b" in a?(d=a8.rgb2hsl(a),a.h=d.h,a.s=d.s,a.l=d.l,d=a8.rgb2hsb(a),a.v=d.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=a9;return a},a8.hsb2rgb=function(r,q,p,o){this.is(r,"object")&&"h" in r&&"s" in r&&"b" in r&&(p=r.b,q=r.s,r=r.h,o=r.o),r*=360;var n,m,l,k,j;r=r%360/60,j=p*q,k=j*(1-ao(r%2-1)),n=m=l=p-j,r=~~r,n+=[j,k,0,0,k,j][r],m+=[k,j,j,k,0,0][r],l+=[0,0,k,j,j,k][r];return a5(n,m,l,o)},a8.hsl2rgb=function(r,q,p,o){this.is(r,"object")&&"h" in r&&"s" in r&&"l" in r&&(p=r.l,q=r.s,r=r.h);if(r>1||q>1||p>1){r/=360,q/=100,p/=100}r*=360;var n,m,l,k,j;r=r%360/60,j=2*q*(p<0.5?p:1-p),k=j*(1-ao(r%2-1)),n=m=l=p-j/2,r=~~r,n+=[j,k,0,0,k,j][r],m+=[k,j,j,k,0,0][r],l+=[0,0,k,j,j,k][r];return a5(n,m,l,o)},a8.rgb2hsb=function(i,h,n){n=a7(i,h,n),i=n[0],h=n[1],n=n[2];var m,l,k,j;k=at(i,h,n),j=k-aq(i,h,n),m=j==0?null:k==i?(h-n)/j:k==h?(n-i)/j+2:(i-h)/j+4,m=(m+360)%6*60/360,l=j==0?0:j/k;return{h:m,s:l,b:k,toString:b2}},a8.rgb2hsl=function(r,q,p){p=a7(r,q,p),r=p[0],q=p[1],p=p[2];var o,n,m,l,k,j;l=at(r,q,p),k=aq(r,q,p),j=l-k,o=j==0?null:l==r?(q-p)/j:l==q?(p-r)/j+2:(r-q)/j+4,o=(o+360)%6*60/360,m=(l+k)/2,n=j==0?0:m<0.5?j/(2*m):j/(2-2*m);return{h:o,s:n,l:m,toString:b0}},a8._path2string=function(){return this.join(",").replace(b9,"$1")};var aZ=a8._preload=function(e,d){var f=aU.doc.createElement("img");f.style.cssText="position:absolute;left:-9999em;top:-9999em",f.onload=function(){d.call(this),this.onload=null,aU.doc.body.removeChild(this)},f.onerror=function(){aU.doc.body.removeChild(this)},aU.doc.body.appendChild(f),f.src=e};a8.getRGB=a2(function(r){if(!r||!!((r=aF(r)).indexOf("-")+1)){return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:aY}}if(r=="none"){return{r:-1,g:-1,b:-1,hex:"none",toString:aY}}!cK[aV](r.toLowerCase().substring(0,2))&&r.charAt()!="#"&&(r=b3(r));var q,p,o,n,m,l,g,a=r.match(df);if(a){a[2]&&(n=c1(a[2].substring(5),16),o=c1(a[2].substring(3,5),16),p=c1(a[2].substring(1,3),16)),a[3]&&(n=c1((l=a[3].charAt(3))+l,16),o=c1((l=a[3].charAt(2))+l,16),p=c1((l=a[3].charAt(1))+l,16)),a[4]&&(g=a[4][aD](cM),p=c4(g[0]),g[0].slice(-1)=="%"&&(p*=2.55),o=c4(g[1]),g[1].slice(-1)=="%"&&(o*=2.55),n=c4(g[2]),g[2].slice(-1)=="%"&&(n*=2.55),a[1].toLowerCase().slice(0,4)=="rgba"&&(m=c4(g[3])),g[3]&&g[3].slice(-1)=="%"&&(m/=100));if(a[5]){g=a[5][aD](cM),p=c4(g[0]),g[0].slice(-1)=="%"&&(p*=2.55),o=c4(g[1]),g[1].slice(-1)=="%"&&(o*=2.55),n=c4(g[2]),g[2].slice(-1)=="%"&&(n*=2.55),(g[0].slice(-3)=="deg"||g[0].slice(-1)=="°")&&(p/=360),a[1].toLowerCase().slice(0,4)=="hsba"&&(m=c4(g[3])),g[3]&&g[3].slice(-1)=="%"&&(m/=100);return a8.hsb2rgb(p,o,n,m)}if(a[6]){g=a[6][aD](cM),p=c4(g[0]),g[0].slice(-1)=="%"&&(p*=2.55),o=c4(g[1]),g[1].slice(-1)=="%"&&(o*=2.55),n=c4(g[2]),g[2].slice(-1)=="%"&&(n*=2.55),(g[0].slice(-3)=="deg"||g[0].slice(-1)=="°")&&(p/=360),a[1].toLowerCase().slice(0,4)=="hsla"&&(m=c4(g[3])),g[3]&&g[3].slice(-1)=="%"&&(m/=100);return a8.hsl2rgb(p,o,n,m)}a={r:p,g:o,b:n,toString:aY},a.hex="#"+(16777216|n|o<<8|p<<16).toString(16).slice(1),a8.is(m,"finite")&&(a.opacity=m);return a}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:aY}},a8),a8.hsb=a2(function(a,f,e){return a8.hsb2rgb(a,f,e).hex}),a8.hsl=a2(function(a,f,e){return a8.hsl2rgb(a,f,e).hex}),a8.rgb=a2(function(e,d,f){return"#"+(16777216|f|d<<8|e<<16).toString(16).slice(1)}),a8.getColor=function(e){var d=this.getColor.start=this.getColor.start||{h:0,s:1,b:e||0.75},f=this.hsb2rgb(d.h,d.s,d.b);d.h+=0.075,d.h>1&&(d.h=0,d.s-=0.2,d.s<=0&&(this.getColor.start={h:0,s:1,b:d.b}));return f.hex},a8.getColor.reset=function(){delete this.start},a8.parsePathString=function(a){if(!a){return null}var h=aT(a);if(h.arr){return dI(h.arr)}var g={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},f=[];a8.is(a,dr)&&a8.is(a[0],dr)&&(f=dI(a)),f.length||aF(a).replace(b7,function(e,d,k){var j=[],i=d.toLowerCase();k.replace(b1,function(l,c){c&&j.push(+c)}),i=="m"&&j.length>2&&(f.push([d][aN](j.splice(0,2))),i="l",d=d=="m"?"l":"L");if(i=="r"){f.push([d][aN](j))}else{while(j.length>=g[i]){f.push([d][aN](j.splice(0,g[i])));if(!g[i]){break}}}}),f.toString=a8._path2string,h.arr=dI(f);return f},a8.parseTransformString=a2(function(a){if(!a){return null}var f={r:3,s:4,t:2,m:6},e=[];a8.is(a,dr)&&a8.is(a[0],dr)&&(e=dI(a)),e.length||aF(a).replace(dS,function(g,d,j){var i=[],h=ax.call(d);j.replace(b1,function(k,c){c&&i.push(+c)}),e.push([d][aN](i))}),e.toString=a8._path2string;return e});var aT=function(d){var c=aT.ps=aT.ps||{};c[d]?c[d].sleep=100:c[d]={sleep:100},setTimeout(function(){for(var a in c){c[aV](a)&&a!=d&&(c[a].sleep--,!c[a].sleep&&delete c[a])}});return c[d]};a8.findDotsAtSegment=function(X,W,V,U,T,S,R,Q,P){var O=1-P,N=dz(O,3),M=dz(O,2),L=P*P,K=L*P,J=N*X+M*3*P*V+O*3*P*P*T+K*R,I=N*W+M*3*P*U+O*3*P*P*S+K*Q,H=X+2*P*(V-X)+L*(T-2*V+X),G=W+2*P*(U-W)+L*(S-2*U+W),F=V+2*P*(T-V)+L*(R-2*T+V),E=U+2*P*(S-U)+L*(Q-2*S+U),D=O*X+P*V,C=O*W+P*U,B=O*T+P*R,A=O*S+P*Q,w=90-av.atan2(H-F,G-E)*180/dx;(H>F||G<E)&&(w+=180);return{x:J,y:I,m:{x:H,y:G},n:{x:F,y:E},start:{x:D,y:C},end:{x:B,y:A},alpha:w}},a8.bezierBBox=function(r,q,p,o,n,m,l,k){a8.is(r,"array")||(r=[r,q,p,o,n,m,l,k]);var a=dB.apply(null,r);return{x:a.min.x,y:a.min.y,x2:a.max.x,y2:a.max.y,width:a.max.x-a.min.x,height:a.max.y-a.min.y}},a8.isPointInsideBBox=function(e,d,f){return d>=e.x&&d<=e.x2&&f>=e.y&&f<=e.y2},a8.isBBoxIntersect=function(a,f){var e=a8.isPointInsideBBox;return e(f,a.x,a.y)||e(f,a.x2,a.y)||e(f,a.x,a.y2)||e(f,a.x2,a.y2)||e(a,f.x,f.y)||e(a,f.x2,f.y)||e(a,f.x,f.y2)||e(a,f.x2,f.y2)||(a.x<f.x2&&a.x>f.x||f.x<a.x2&&f.x>a.x)&&(a.y<f.y2&&a.y>f.y||f.y<a.y2&&f.y>a.y)},a8.pathIntersection=function(d,c){return dK(d,c)},a8.pathIntersectionNumber=function(d,c){return dK(d,c,1)},a8.isPointInsidePath=function(a,h,g){var f=a8.pathBBox(a);return a8.isPointInsideBBox(f,h,g)&&dK(a,[["M",h,g],["H",f.x2+10]],1)%2==1},a8._removedFactory=function(b){return function(){eve("raphael.log",null,"Raphaël: you are calling to method “"+b+"” of removed object",b)}};var dJ=a8.pathBBox=function(D){var C=aT(D);if(C.bbox){return C.bbox}if(!D){return{x:0,y:0,width:0,height:0,x2:0,y2:0}}D=dA(D);var B=0,A=0,z=[],y=[],x;for(var w=0,v=D.length;w<v;w++){x=D[w];if(x[0]=="M"){B=x[1],A=x[2],z.push(B),y.push(A)}else{var u=dB(B,A,x[1],x[2],x[3],x[4],x[5],x[6]);z=z[aN](u.min.x,u.max.x),y=y[aN](u.min.y,u.max.y),B=x[5],A=x[6]}}var t=aq[aO](0,z),s=aq[aO](0,y),r=at[aO](0,z),n=at[aO](0,y),m={x:t,y:s,x2:r,y2:n,width:r-t,height:n-s};C.bbox=b5(m);return m},dI=function(a){var d=b5(a);d.toString=a8._path2string;return d},dH=a8._pathToRelative=function(H){var G=aT(H);if(G.rel){return dI(G.rel)}if(!a8.is(H,dr)||!a8.is(H&&H[0],dr)){H=a8.parsePathString(H)}var F=[],E=0,D=0,C=0,B=0,A=0;H[0][0]=="M"&&(E=H[0][1],D=H[0][2],C=E,B=D,A++,F.push(["M",E,D]));for(var z=A,y=H.length;z<y;z++){var x=F[z]=[],w=H[z];if(w[0]!=ax.call(w[0])){x[0]=ax.call(w[0]);switch(x[0]){case"a":x[1]=w[1],x[2]=w[2],x[3]=w[3],x[4]=w[4],x[5]=w[5],x[6]=+(w[6]-E).toFixed(3),x[7]=+(w[7]-D).toFixed(3);break;case"v":x[1]=+(w[1]-D).toFixed(3);break;case"m":C=w[1],B=w[2];default:for(var v=1,u=w.length;v<u;v++){x[v]=+(w[v]-(v%2?E:D)).toFixed(3)}}}else{x=F[z]=[],w[0]=="m"&&(C=w[1]+E,B=w[2]+D);for(var t=0,s=w.length;t<s;t++){F[z][t]=w[t]}}var a=F[z].length;switch(F[z][0]){case"z":E=C,D=B;break;case"h":E+=+F[z][a-1];break;case"v":D+=+F[z][a-1];break;default:E+=+F[z][a-2],D+=+F[z][a-1]}}F.toString=a8._path2string,G.rel=dI(F);return F},dG=a8._pathToAbsolute=function(J){var I=aT(J);if(I.abs){return dI(I.abs)}if(!a8.is(J,dr)||!a8.is(J&&J[0],dr)){J=a8.parsePathString(J)}if(!J||!J.length){return[["M",0,0]]}var H=[],G=0,F=0,E=0,D=0,C=0;J[0][0]=="M"&&(G=+J[0][1],F=+J[0][2],E=G,D=F,C++,H[0]=["M",G,F]);var B=J.length==3&&J[0][0]=="M"&&J[1][0].toUpperCase()=="R"&&J[2][0].toUpperCase()=="Z";for(var A,z,y=C,x=J.length;y<x;y++){H.push(A=[]),z=J[y];if(z[0]!=cY.call(z[0])){A[0]=cY.call(z[0]);switch(A[0]){case"A":A[1]=z[1],A[2]=z[2],A[3]=z[3],A[4]=z[4],A[5]=z[5],A[6]=+(z[6]+G),A[7]=+(z[7]+F);break;case"V":A[1]=+z[1]+F;break;case"H":A[1]=+z[1]+G;break;case"R":var w=[G,F][aN](z.slice(1));for(var v=2,u=w.length;v<u;v++){w[v]=+w[v]+G,w[++v]=+w[v]+F}H.pop(),H=H[aN](aW(w,B));break;case"M":E=+z[1]+G,D=+z[2]+F;default:for(v=1,u=z.length;v<u;v++){A[v]=+z[v]+(v%2?G:F)}}}else{if(z[0]=="R"){w=[G,F][aN](z.slice(1)),H.pop(),H=H[aN](aW(w,B)),A=["R"][aN](z.slice(-2))}else{for(var n=0,a=z.length;n<a;n++){A[n]=z[n]}}}switch(A[0]){case"Z":G=E,F=D;break;case"H":G=A[1];break;case"V":F=A[1];break;case"M":E=A[A.length-2],D=A[A.length-1];default:G=A[A.length-2],F=A[A.length-1]}}H.toString=a8._path2string,I.abs=dI(H);return H},dF=function(f,e,h,g){return[f,e,h,g,h,g]},dE=function(j,i,p,o,n,m){var l=1/3,k=2/3;return[l*j+k*p,l*i+k*o,l*n+k*p,l*m+k*o,n,m]},dD=function(bL,bK,bJ,bI,bH,bG,bF,bE,bD,bC){var bB=dx*120/180,bA=dx/180*(+bH||0),bz=[],by,bx=a2(function(g,f,j){var i=g*av.cos(j)-f*av.sin(j),h=g*av.sin(j)+f*av.cos(j);return{x:i,y:h}});if(!bC){by=bx(bL,bK,-bA),bL=by.x,bK=by.y,by=bx(bE,bD,-bA),bE=by.x,bD=by.y;var bw=av.cos(dx/180*bH),bv=av.sin(dx/180*bH),bu=(bL-bE)/2,bt=(bK-bD)/2,bs=bu*bu/(bJ*bJ)+bt*bt/(bI*bI);bs>1&&(bs=av.sqrt(bs),bJ=bs*bJ,bI=bs*bI);var br=bJ*bJ,bq=bI*bI,bp=(bG==bF?-1:1)*av.sqrt(ao((br*bq-br*bt*bt-bq*bu*bu)/(br*bt*bt+bq*bu*bu))),bo=bp*bJ*bt/bI+(bL+bE)/2,bn=bp*-bI*bu/bJ+(bK+bD)/2,bm=av.asin(((bK-bn)/bI).toFixed(9)),bl=av.asin(((bD-bn)/bI).toFixed(9));bm=bL<bo?dx-bm:bm,bl=bE<bo?dx-bl:bl,bm<0&&(bm=dx*2+bm),bl<0&&(bl=dx*2+bl),bF&&bm>bl&&(bm=bm-dx*2),!bF&&bl>bm&&(bl=bl-dx*2)}else{bm=bC[0],bl=bC[1],bo=bC[2],bn=bC[3]}var bk=bl-bm;if(ao(bk)>bB){var bj=bl,bi=bE,bh=bD;bl=bm+bB*(bF&&bl>bm?1:-1),bE=bo+bJ*av.cos(bl),bD=bn+bI*av.sin(bl),bz=dD(bE,bD,bJ,bI,bH,0,bF,bi,bh,[bl,bj,bo,bn])}bk=bl-bm;var bg=av.cos(bm),bf=av.sin(bm),be=av.cos(bl),bd=av.sin(bl),bc=av.tan(bk/4),bb=4/3*bJ*bc,ba=4/3*bI*bc,Z=[bL,bK],Y=[bL+bb*bf,bK-ba*bg],B=[bE+bb*bd,bD-ba*be],z=[bE,bD];Y[0]=2*Z[0]-Y[0],Y[1]=2*Z[1]-Y[1];if(bC){return[Y,B,z][aN](bz)}bz=[Y,B,z][aN](bz).join()[aD](",");var w=[];for(var s=0,n=bz.length;s<n;s++){w[s]=s%2?bx(bz[s-1],bz[s],bA).y:bx(bz[s],bz[s+1],bA).x}return w},dC=function(t,s,r,q,p,o,n,m,l){var k=1-l;return{x:dz(k,3)*t+dz(k,2)*3*l*r+k*3*l*l*p+dz(l,3)*n,y:dz(k,3)*s+dz(k,2)*3*l*q+k*3*l*l*o+dz(l,3)*m}},dB=a2(function(F,E,D,C,B,A,z,y){var x=B-2*D+F-(z-2*B+D),w=2*(D-F)-2*(B-D),v=F-D,u=(-w+av.sqrt(w*w-4*x*v))/2/x,t=(-w-av.sqrt(w*w-4*x*v))/2/x,s=[E,y],r=[F,z],m;ao(u)>"1e12"&&(u=0.5),ao(t)>"1e12"&&(t=0.5),u>0&&u<1&&(m=dC(F,E,D,C,B,A,z,y,u),r.push(m.x),s.push(m.y)),t>0&&t<1&&(m=dC(F,E,D,C,B,A,z,y,t),r.push(m.x),s.push(m.y)),x=A-2*C+E-(y-2*A+C),w=2*(C-E)-2*(A-C),v=E-C,u=(-w+av.sqrt(w*w-4*x*v))/2/x,t=(-w-av.sqrt(w*w-4*x*v))/2/x,ao(u)>"1e12"&&(u=0.5),ao(t)>"1e12"&&(t=0.5),u>0&&u<1&&(m=dC(F,E,D,C,B,A,z,y,u),r.push(m.x),s.push(m.y)),t>0&&t<1&&(m=dC(F,E,D,C,B,A,z,y,t),r.push(m.x),s.push(m.y));return{min:{x:aq[aO](0,r),y:aq[aO](0,s)},max:{x:at[aO](0,r),y:at[aO](0,s)}}}),dA=a8._path2curve=a2(function(F,E){var D=!E&&aT(F);if(!E&&D.curve){return dI(D.curve)}var C=dG(F),B=E&&dG(E),A={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},z={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},y=function(f,e){var h,g;if(!f){return["C",e.x,e.y,e.x,e.y,e.x,e.y]}!(f[0] in {T:1,Q:1})&&(e.qx=e.qy=null);switch(f[0]){case"M":e.X=f[1],e.Y=f[2];break;case"A":f=["C"][aN](dD[aO](0,[e.x,e.y][aN](f.slice(1))));break;case"S":h=e.x+(e.x-(e.bx||e.x)),g=e.y+(e.y-(e.by||e.y)),f=["C",h,g][aN](f.slice(1));break;case"T":e.qx=e.x+(e.x-(e.qx||e.x)),e.qy=e.y+(e.y-(e.qy||e.y)),f=["C"][aN](dE(e.x,e.y,e.qx,e.qy,f[1],f[2]));break;case"Q":e.qx=f[1],e.qy=f[2],f=["C"][aN](dE(e.x,e.y,f[1],f[2],f[3],f[4]));break;case"L":f=["C"][aN](dF(e.x,e.y,f[1],f[2]));break;case"H":f=["C"][aN](dF(e.x,e.y,f[1],e.y));break;case"V":f=["C"][aN](dF(e.x,e.y,e.x,f[1]));break;case"Z":f=["C"][aN](dF(e.x,e.y,e.X,e.Y))}return f},x=function(e,d){if(e[d].length>7){e[d].shift();var f=e[d];while(f.length){e.splice(d++,0,["C"][aN](f.splice(0,6)))}e.splice(d,1),u=at(C.length,B&&B.length||0)}},w=function(e,d,j,i,h){e&&d&&e[h][0]=="M"&&d[h][0]!="M"&&(d.splice(h,0,["M",i.x,i.y]),j.bx=0,j.by=0,j.x=e[h][1],j.y=e[h][2],u=at(C.length,B&&B.length||0))};for(var v=0,u=at(C.length,B&&B.length||0);v<u;v++){C[v]=y(C[v],A),x(C,v),B&&(B[v]=y(B[v],z)),B&&x(B,v),w(C,B,A,z,v),w(B,C,z,A,v);var t=C[v],s=B&&B[v],n=t.length,m=B&&s.length;A.x=t[n-2],A.y=t[n-1],A.bx=c4(t[n-4])||A.x,A.by=c4(t[n-3])||A.y,z.bx=B&&(c4(s[m-4])||z.x),z.by=B&&(c4(s[m-3])||z.y),z.x=B&&s[m-2],z.y=B&&s[m-1]}B||(D.curve=dI(C));return B?[C,B]:C},null,dI),dy=a8._parseDots=a2(function(t){var s=[];for(var r=0,q=t.length;r<q;r++){var p={},o=t[r].match(/^([^:]*):?([\d\.]*)/);p.color=a8.getRGB(o[1]);if(p.color.error){return null}p.color=p.color.hex,o[2]&&(p.offset=o[2]+"%"),s.push(p)}for(r=1,q=s.length-1;r<q;r++){if(!s[r].offset){var n=c4(s[r-1].offset||0),m=0;for(var l=r+1;l<q;l++){if(s[l].offset){m=s[l].offset;break}}m||(m=100,l=q),m=c4(m);var a=(m-n)/(l-r+1);for(;r<l;r++){n+=a,s[r].offset=n+"%"}}}return s}),dw=a8._tear=function(d,c){d==c.top&&(c.top=d.prev),d==c.bottom&&(c.bottom=d.next),d.next&&(d.next.prev=d.prev),d.prev&&(d.prev.next=d.next)},du=a8._tofront=function(d,c){c.top!==d&&(dw(d,c),d.next=null,d.prev=c.top,c.top.next=d,c.top=d)},ds=a8._toback=function(d,c){c.bottom!==d&&(dw(d,c),d.next=c.bottom,d.prev=null,c.bottom.prev=d,c.bottom=d)},dq=a8._insertafter=function(e,d,f){dw(e,f),d==f.top&&(f.top=e),d.next&&(d.next.prev=e),e.next=d.next,e.prev=d,d.next=e},dn=a8._insertbefore=function(e,d,f){dw(e,f),d==f.bottom&&(f.bottom=e),d.prev&&(d.prev.next=e),e.prev=d.prev,d.prev=e,e.next=d},dl=a8.toMatrix=function(f,e){var h=dJ(f),g={_:{transform:aJ},getBBox:function(){return h}};dT(g,e);return g.matrix},dj=a8.transformPath=function(d,c){return cJ(d,dl(d,c))},dT=a8._extractTransform=function(R,Q){if(Q==null){return R._.transform}Q=aF(Q).replace(/\.{3}|\u2026/g,R._.transform||aJ);var P=a8.parseTransformString(Q),O=0,N=0,M=0,L=1,K=1,J=R._,I=new aL;J.transform=P||[];if(P){for(var H=0,G=P.length;H<G;H++){var F=P[H],E=F.length,D=aF(F[0]).toLowerCase(),C=F[0]!=D,B=C?I.invert():0,A,z,r,p,a;D=="t"&&E==3?C?(A=B.x(0,0),z=B.y(0,0),r=B.x(F[1],F[2]),p=B.y(F[1],F[2]),I.translate(r-A,p-z)):I.translate(F[1],F[2]):D=="r"?E==2?(a=a||R.getBBox(1),I.rotate(F[1],a.x+a.width/2,a.y+a.height/2),O+=F[1]):E==4&&(C?(r=B.x(F[2],F[3]),p=B.y(F[2],F[3]),I.rotate(F[1],r,p)):I.rotate(F[1],F[2],F[3]),O+=F[1]):D=="s"?E==2||E==3?(a=a||R.getBBox(1),I.scale(F[1],F[E-1],a.x+a.width/2,a.y+a.height/2),L*=F[1],K*=F[E-1]):E==5&&(C?(r=B.x(F[3],F[4]),p=B.y(F[3],F[4]),I.scale(F[1],F[2],r,p)):I.scale(F[1],F[2],F[3],F[4]),L*=F[1],K*=F[2]):D=="m"&&E==7&&I.add(F[1],F[2],F[3],F[4],F[5],F[6]),J.dirtyT=1,R.matrix=I}}R.matrix=I,J.sx=L,J.sy=K,J.deg=O,J.dx=N=I.e,J.dy=M=I.f,L==1&&K==1&&!O&&J.bbox?(J.bbox.x+=+N,J.bbox.y+=+M):J.dirtyT=1},dd=function(d){var c=d[0];switch(c.toLowerCase()){case"t":return[c,0,0];case"m":return[c,1,0,0,1,0,0];case"r":return d.length==4?[c,0,d[2],d[3]]:[c,0];case"s":return d.length==5?[c,1,1,d[3],d[4]]:d.length==3?[c,1,1]:[c,1]}},aM=a8._equaliseTransform=function(t,s){s=aF(s).replace(/\.{3}|\u2026/g,t),t=a8.parseTransformString(t)||[],s=a8.parseTransformString(s)||[];var r=at(t.length,s.length),q=[],p=[],o=0,n,m,l,a;for(;o<r;o++){l=t[o]||dd(s[o]),a=s[o]||dd(l);if(l[0]!=a[0]||l[0].toLowerCase()=="r"&&(l[2]!=a[2]||l[3]!=a[3])||l[0].toLowerCase()=="s"&&(l[3]!=a[3]||l[4]!=a[4])){return}q[o]=[],p[o]=[];for(n=0,m=at(l.length,a.length);n<m;n++){n in l&&(q[o][n]=l[n]),n in a&&(p[o][n]=a[n])}}return{from:q,to:p}};a8._getContainer=function(a,j,i,h){var g;g=h==null&&!a8.is(a,"object")?aU.doc.getElementById(a):a;if(g!=null){if(g.tagName){return j==null?{container:g,width:g.style.pixelWidth||g.offsetWidth,height:g.style.pixelHeight||g.offsetHeight}:{container:g,width:j,height:i}}return{container:1,x:a,y:j,width:i,height:h}}},a8.pathToRelative=dH,a8._engine={},a8.path2curve=dA,a8.matrix=function(h,g,l,k,j,i){return new aL(h,g,l,k,j,i)},function(a){function e(d){var c=av.sqrt(f(d));d[0]&&(d[0]/=c),d[1]&&(d[1]/=c)}function f(b){return b[0]*b[0]+b[1]*b[1]}a.add=function(z,y,x,w,v,u){var t=[[],[],[]],s=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],r=[[z,x,v],[y,w,u],[0,0,1]],q,p,o,n;z&&z instanceof aL&&(r=[[z.a,z.c,z.e],[z.b,z.d,z.f],[0,0,1]]);for(q=0;q<3;q++){for(p=0;p<3;p++){n=0;for(o=0;o<3;o++){n+=s[q][o]*r[o][p]}t[q][p]=n}}this.a=t[0][0],this.b=t[1][0],this.c=t[0][1],this.d=t[1][1],this.e=t[0][2],this.f=t[1][2]},a.invert=function(){var d=this,c=d.a*d.d-d.b*d.c;return new aL(d.d/c,-d.b/c,-d.c/c,d.a/c,(d.c*d.f-d.d*d.e)/c,(d.b*d.e-d.a*d.f)/c)},a.clone=function(){return new aL(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(d,c){this.add(1,0,0,1,d,c)},a.scale=function(h,g,j,i){g==null&&(g=h),(j||i)&&this.add(1,0,0,1,j,i),this.add(h,0,0,g,0,0),(j||i)&&this.add(1,0,0,1,-j,-i)},a.rotate=function(g,k,j){g=a8.rad(g),k=k||0,j=j||0;var i=+av.cos(g).toFixed(9),h=+av.sin(g).toFixed(9);this.add(i,h,-h,i,k,j),this.add(1,0,0,1,-k,-j)},a.x=function(d,c){return d*this.a+c*this.c+this.e},a.y=function(d,c){return d*this.b+c*this.d+this.f},a.get=function(b){return +this[aF.fromCharCode(97+b)].toFixed(4)},a.toString=function(){return a8.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var c={};c.dx=this.e,c.dy=this.f;var i=[[this.a,this.c],[this.b,this.d]];c.scalex=av.sqrt(f(i[0])),e(i[0]),c.shear=i[0][0]*i[1][0]+i[0][1]*i[1][1],i[1]=[i[1][0]-i[0][0]*c.shear,i[1][1]-i[0][1]*c.shear],c.scaley=av.sqrt(f(i[1])),e(i[1]),c.shear/=c.scaley;var h=-i[0][1],d=i[1][1];d<0?(c.rotate=a8.deg(av.acos(d)),h<0&&(c.rotate=360-c.rotate)):c.rotate=a8.deg(av.asin(h)),c.isSimple=!+c.shear.toFixed(9)&&(c.scalex.toFixed(9)==c.scaley.toFixed(9)||!c.rotate),c.isSuperSimple=!+c.shear.toFixed(9)&&c.scalex.toFixed(9)==c.scaley.toFixed(9)&&!c.rotate,c.noRotation=!+c.shear.toFixed(9)&&!c.rotate;return c},a.toTransformString=function(d){var c=d||this[aD]();if(c.isSimple){c.scalex=+c.scalex.toFixed(4),c.scaley=+c.scaley.toFixed(4),c.rotate=+c.rotate.toFixed(4);return(c.dx||c.dy?"t"+[c.dx,c.dy]:aJ)+(c.scalex!=1||c.scaley!=1?"s"+[c.scalex,c.scaley,0,0]:aJ)+(c.rotate?"r"+[c.rotate,0,0]:aJ)}return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(aL.prototype);var aI=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);navigator.vendor=="Apple Computer, Inc."&&(aI&&aI[1]<4||navigator.platform.slice(0,2)=="iP")||navigator.vendor=="Google Inc."&&aI&&aI[1]<8?aQ.safari=function(){var b=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){b.remove()})}:aQ.safari=cW;var aG=function(){this.returnValue=!1},aE=function(){return this.originalEvent.preventDefault()},aC=function(){this.cancelBubble=!0},aA=function(){return this.originalEvent.stopPropagation()},ay=function(){if(aU.doc.addEventListener){return function(h,g,l,k){var j=aK&&az[g]?az[g]:g,i=function(q){var p=aU.doc.documentElement.scrollTop||aU.doc.body.scrollTop,o=aU.doc.documentElement.scrollLeft||aU.doc.body.scrollLeft,d=q.clientX+o,c=q.clientY+p;if(aK&&az[aV](g)){for(var b=0,a=q.targetTouches&&q.targetTouches.length;b<a;b++){if(q.targetTouches[b].target==h){var r=q;q=q.targetTouches[b],q.originalEvent=r,q.preventDefault=aE,q.stopPropagation=aA;break}}}return l.call(k,q,d,c)};h.addEventListener(j,i,!1);return function(){h.removeEventListener(j,i,!1);return !0}}}if(aU.doc.attachEvent){return function(h,g,l,k){var j=function(d){d=d||aU.win.event;var c=aU.doc.documentElement.scrollTop||aU.doc.body.scrollTop,o=aU.doc.documentElement.scrollLeft||aU.doc.body.scrollLeft,n=d.clientX+o,m=d.clientY+c;d.preventDefault=d.preventDefault||aG,d.stopPropagation=d.stopPropagation||aC;return l.call(k,d,n,m)};h.attachEvent("on"+g,j);var i=function(){h.detachEvent("on"+g,j);return !0};return i}}}(),aw=[],au=function(B){var A=B.clientX,z=B.clientY,y=aU.doc.documentElement.scrollTop||aU.doc.body.scrollTop,x=aU.doc.documentElement.scrollLeft||aU.doc.body.scrollLeft,w,v=aw.length;while(v--){w=aw[v];if(aK){var u=B.touches.length,t;while(u--){t=B.touches[u];if(t.identifier==w.el._drag.id){A=t.clientX,z=t.clientY,(B.originalEvent?B.originalEvent:B).preventDefault();break}}}else{B.preventDefault()}var s=w.el.node,r,q=s.nextSibling,o=s.parentNode,h=s.style.display;aU.win.opera&&o.removeChild(s),s.style.display="none",r=w.el.paper.getElementByPoint(A,z),s.style.display=h,aU.win.opera&&(q?o.insertBefore(s,q):o.appendChild(s)),r&&eve("raphael.drag.over."+w.el.id,w.el,r),A+=x,z+=y,eve("raphael.drag.move."+w.el.id,w.move_scope||w.el,A-w.el._drag.x,z-w.el._drag.y,A,z,B)}},ar=function(a){a8.unmousemove(au).unmouseup(ar);var f=aw.length,e;while(f--){e=aw[f],e.el._drag={},eve("raphael.drag.end."+e.el.id,e.end_scope||e.start_scope||e.move_scope||e.el,a)}aw=[]},ap=a8.el={};for(var an=aB.length;an--;){(function(a){a8[a]=ap[a]=function(e,b){a8.is(e,"function")&&(this.events=this.events||[],this.events.push({name:a,f:e,unbind:ay(this.shape||this.node||aU.doc,a,e,b||this)}));return this},a8["un"+a]=ap["un"+a]=function(b){var f=this.events||[],e=f.length;while(e--){if(f[e].name==a&&f[e].f==b){f[e].unbind(),f.splice(e,1),!f.length&&delete this.events;return this}}return this}})(aB[an])}ap.data=function(a,h){var g=c5[this.id]=c5[this.id]||{};if(arguments.length==1){if(a8.is(a,"object")){for(var f in a){a[aV](f)&&this.data(f,a[f])}return this}eve("raphael.data.get."+this.id,this,g[a],a);return g[a]}g[a]=h,eve("raphael.data.set."+this.id,this,h,a);return this},ap.removeData=function(b){b==null?c5[this.id]={}:c5[this.id]&&delete c5[this.id][b];return this},ap.hover=function(f,e,h,g){return this.mouseover(f,h).mouseout(e,g||h)},ap.unhover=function(d,c){return this.unmouseover(d).unmouseout(c)};var am=[];ap.drag=function(a,n,m,l,k,j){function h(d){(d.originalEvent||d).preventDefault();var c=aU.doc.documentElement.scrollTop||aU.doc.body.scrollTop,b=aU.doc.documentElement.scrollLeft||aU.doc.body.scrollLeft;this._drag.x=d.clientX+b,this._drag.y=d.clientY+c,this._drag.id=d.identifier,!aw.length&&a8.mousemove(au).mouseup(ar),aw.push({el:this,move_scope:l,start_scope:k,end_scope:j}),n&&eve.on("raphael.drag.start."+this.id,n),a&&eve.on("raphael.drag.move."+this.id,a),m&&eve.on("raphael.drag.end."+this.id,m),eve("raphael.drag.start."+this.id,k||l||this,d.clientX+b,d.clientY+c,d)}this._drag={},am.push({el:this,start:h}),this.mousedown(h);return this},ap.onDragOver=function(b){b?eve.on("raphael.drag.over."+this.id,b):eve.unbind("raphael.drag.over."+this.id)},ap.undrag=function(){var a=am.length;while(a--){am[a].el==this&&(this.unmousedown(am[a].start),am.splice(a,1),eve.unbind("raphael.drag.*."+this.id))}!am.length&&a8.unmousemove(au).unmouseup(ar)},aQ.circle=function(a,h,g){var f=a8._engine.circle(this,a||0,h||0,g||0);this.__set__&&this.__set__.push(f);return f},aQ.rect=function(a,l,k,j,i){var h=a8._engine.rect(this,a||0,l||0,k||0,j||0,i||0);this.__set__&&this.__set__.push(h);return h},aQ.ellipse=function(a,j,i,h){var g=a8._engine.ellipse(this,a||0,j||0,i||0,h||0);this.__set__&&this.__set__.push(g);return g},aQ.path=function(a){a&&!a8.is(a,dt)&&!a8.is(a[0],dr)&&(a+=aJ);var d=a8._engine.path(a8.format[aO](a8,arguments),this);this.__set__&&this.__set__.push(d);return d},aQ.image=function(a,l,k,j,i){var h=a8._engine.image(this,a||"about:blank",l||0,k||0,j||0,i||0);this.__set__&&this.__set__.push(h);return h},aQ.text=function(a,h,g){var f=a8._engine.text(this,a||0,h||0,aF(g));this.__set__&&this.__set__.push(f);return f},aQ.set=function(a){!a8.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var d=new cT(a);this.__set__&&this.__set__.push(d);return d},aQ.setStart=function(b){this.__set__=b||this.set()},aQ.setFinish=function(d){var c=this.__set__;delete this.__set__;return c},aQ.setSize=function(a,d){return a8._engine.setSize.call(this,a,d)},aQ.setViewBox=function(a,j,i,h,g){return a8._engine.setViewBox.call(this,a,j,i,h,g)},aQ.top=aQ.bottom=null,aQ.raphael=a8;var al=function(r){var q=r.getBoundingClientRect(),p=r.ownerDocument,o=p.body,n=p.documentElement,m=n.clientTop||o.clientTop||0,l=n.clientLeft||o.clientLeft||0,k=q.top+(aU.win.pageYOffset||n.scrollTop||o.scrollTop)-m,h=q.left+(aU.win.pageXOffset||n.scrollLeft||o.scrollLeft)-l;return{y:k,x:h}};aQ.getElementByPoint=function(j,h){var p=this,o=p.canvas,n=aU.doc.elementFromPoint(j,h);if(aU.win.opera&&n.tagName=="svg"){var m=al(o),l=o.createSVGRect();l.x=j-m.x,l.y=h-m.y,l.width=l.height=1;var k=o.getIntersectionList(l,null);k.length&&(n=k[k.length-1])}if(!n){return null}while(n.parentNode&&n!=o.parentNode&&!n.raphael){n=n.parentNode}n==p.canvas.parentNode&&(n=o),n=n&&n.raphael?p.getById(n.raphaelid):null;return n},aQ.getById=function(d){var c=this.bottom;while(c){if(c.id==d){return c}c=c.next}return null},aQ.forEach=function(e,d){var f=this.bottom;while(f){if(e.call(d,f)===!1){return this}f=f.next}return this},aQ.getElementsByPoint=function(e,d){var f=this.set();this.forEach(function(a){a.isPointInside(e,d)&&f.push(a)});return f},ap.isPointInside=function(a,f){var e=this.realPath=this.realPath||cL[this.type](this);return a8.isPointInsidePath(e,a,f)},ap.getBBox=function(d){if(this.removed){return{}}var c=this._;if(d){if(c.dirty||!c.bboxwt){this.realPath=cL[this.type](this),c.bboxwt=dJ(this.realPath),c.bboxwt.toString=aj,c.dirty=0}return c.bboxwt}if(c.dirty||c.dirtyT||!c.bbox){if(c.dirty||!this.realPath){c.bboxwt=0,this.realPath=cL[this.type](this)}c.bbox=dJ(cJ(this.realPath,this.matrix)),c.bbox.toString=aj,c.dirty=c.dirtyT=0}return c.bbox},ap.clone=function(){if(this.removed){return null}var b=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(b);return b},ap.glow=function(i){if(this.type=="text"){return null}i=i||{};var h={width:(i.width||10)+(+this.attr("stroke-width")||1),fill:i.fill||!1,opacity:i.opacity||0.5,offsetx:i.offsetx||0,offsety:i.offsety||0,color:i.color||"#000"},n=h.width/2,m=this.paper,l=m.set(),k=this.realPath||cL[this.type](this);k=this.matrix?cJ(k,this.matrix):k;for(var j=1;j<n+1;j++){l.push(m.path(k).attr({stroke:h.color,fill:h.fill?h.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(h.width/n*j).toFixed(3),opacity:+(h.opacity/n).toFixed(3)}))}return l.insertBefore(this).translate(h.offsetx,h.offsety)};var ai={},ah=function(r,q,p,o,n,m,l,k,a){return a==null?dQ(r,q,p,o,n,m,l,k):a8.findDotsAtSegment(r,q,p,o,n,m,l,k,dP(r,q,p,o,n,m,l,k,a))},ag=function(a,d){return function(A,z,y){A=dA(A);var x,w,v,u,t="",s={},r,q=0;for(var c=0,b=A.length;c<b;c++){v=A[c];if(v[0]=="M"){x=+v[1],w=+v[2]}else{u=ah(x,w,v[1],v[2],v[3],v[4],v[5],v[6]);if(q+u>z){if(d&&!s.start){r=ah(x,w,v[1],v[2],v[3],v[4],v[5],v[6],z-q),t+=["C"+r.start.x,r.start.y,r.m.x,r.m.y,r.x,r.y];if(y){return t}s.start=t,t=["M"+r.x,r.y+"C"+r.n.x,r.n.y,r.end.x,r.end.y,v[5],v[6]].join(),q+=u,x=+v[5],w=+v[6];continue}if(!a&&!d){r=ah(x,w,v[1],v[2],v[3],v[4],v[5],v[6],z-q);return{x:r.x,y:r.y,alpha:r.alpha}}}q+=u,x=+v[5],w=+v[6]}t+=v.shift()+v}s.end=t,r=a?q:d?s:a8.findDotsAtSegment(x,w,v[0],v[1],v[2],v[3],v[4],v[5],1),r.alpha&&(r={x:r.x,y:r.y,alpha:r.alpha});return r}},af=ag(1),ae=ag(),ad=ag(0,1);a8.getTotalLength=af,a8.getPointAtLength=ae,a8.getSubpath=function(f,e,h){if(this.getTotalLength(f)-h<0.000001){return ad(f,e).end}var g=ad(f,h,1);return e?ad(g,e).end:g},ap.getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength){return this.node.getTotalLength()}return af(this.attrs.path)}},ap.getPointAtLength=function(b){if(this.type=="path"){return ae(this.attrs.path,b)}},ap.getSubpath=function(a,d){if(this.type=="path"){return a8.getSubpath(this.attrs.path,a,d)}};var ac=a8.easing_formulas={linear:function(b){return b},"<":function(b){return dz(b,1.7)},">":function(b){return dz(b,0.48)},"<>":function(j){var i=0.48-j/1.04,p=av.sqrt(0.1734+i*i),o=p-i,n=dz(ao(o),1/3)*(o<0?-1:1),m=-p-i,l=dz(ao(m),1/3)*(m<0?-1:1),k=n+l+0.5;return(1-k)*3*k*k+k*k*k},backIn:function(d){var c=1.70158;return d*d*((c+1)*d-c)},backOut:function(d){d=d-1;var c=1.70158;return d*d*((c+1)*d+c)+1},elastic:function(b){if(b==!!b){return b}return dz(2,-10*b)*av.sin((b-0.075)*2*dx/0.3)+1},bounce:function(f){var e=7.5625,h=2.75,g;f<1/h?g=e*f*f:f<2/h?(f-=1.5/h,g=e*f*f+0.75):f<2.5/h?(f-=2.25/h,g=e*f*f+0.9375):(f-=2.625/h,g=e*f*f+0.984375);return g}};ac.easeIn=ac["ease-in"]=ac["<"],ac.easeOut=ac["ease-out"]=ac[">"],ac.easeInOut=ac["ease-in-out"]=ac["<>"],ac["back-in"]=ac.backIn,ac["back-out"]=ac.backOut;var ab=[],aa=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(b){setTimeout(b,16)},db=function(){var T=+(new Date),S=0;for(;S<ab.length;S++){var R=ab[S];if(R.el.removed||R.paused){continue}var Q=T-R.start,P=R.ms,O=R.easing,N=R.from,M=R.diff,L=R.to,K=R.t,J=R.el,I={},H,F={},E;R.initstatus?(Q=(R.initstatus*R.anim.top-R.prev)/(R.percent-R.prev)*P,R.status=R.initstatus,delete R.initstatus,R.stop&&ab.splice(S--,1)):R.status=(R.prev+(R.percent-R.prev)*(Q/P))/R.anim.top;if(Q<0){continue}if(Q<P){var D=O(Q/P);for(var C in N){if(N[aV](C)){switch(cS[C]){case dv:H=+N[C]+D*P*M[C];break;case"colour":H="rgb("+[c8(da(N[C].r+D*P*M[C].r)),c8(da(N[C].g+D*P*M[C].g)),c8(da(N[C].b+D*P*M[C].b))].join(",")+")";break;case"path":H=[];for(var B=0,q=N[C].length;B<q;B++){H[B]=[N[C][B][0]];for(var n=1,g=N[C][B].length;n<g;n++){H[B][n]=+N[C][B][n]+D*P*M[C][B][n]}H[B]=H[B].join(aH)}H=H.join(aH);break;case"transform":if(M[C].real){H=[];for(B=0,q=N[C].length;B<q;B++){H[B]=[N[C][B][0]];for(n=1,g=N[C][B].length;n<g;n++){H[B][n]=N[C][B][n]+D*P*M[C][B][n]}}}else{var a=function(b){return +N[C][b]+D*P*M[C][b]};H=[["m",a(0),a(1),a(2),a(3),a(4),a(5)]]}break;case"csv":if(C=="clip-rect"){H=[],B=4;while(B--){H[B]=+N[C][B]+D*P*M[C][B]}}break;default:var G=[][aN](N[C]);H=[],B=J.paper.customAttributes[C].length;while(B--){H[B]=+G[B]+D*P*M[C][B]}}I[C]=H}}J.attr(I),function(e,d,f){setTimeout(function(){eve("raphael.anim.frame."+e,d,f)})}(J.id,J,R.anim)}else{(function(e,h,f){setTimeout(function(){eve("raphael.anim.frame."+h.id,h,f),eve("raphael.anim.finish."+h.id,h,f),a8.is(e,"function")&&e.call(h)})})(R.callback,J,R.anim),J.attr(L),ab.splice(S--,1);if(R.repeat>1&&!R.next){for(E in L){L[aV](E)&&(F[E]=R.totalOrigin[E])}R.el.attr(F),c0(R.anim,R.el,R.anim.percents[0],null,R.totalOrigin,R.repeat-1)}R.next&&!R.stop&&c0(R.anim,R.el,R.next,null,R.totalOrigin,R.repeat)}}a8.svg&&J&&J.paper&&J.paper.safari(),ab.length&&aa(db)},c8=function(b){return b>255?255:b<0?0:b};ap.animateWith=function(x,w,v,u,t,s){var r=this;if(r.removed){s&&s.call(r);return r}var q=v instanceof c3?v:a8.animation(v,u,t,s),p,o;c0(q,r,q.percents[0],null,r.attr());for(var n=0,a=ab.length;n<a;n++){if(ab[n].anim==w&&ab[n].el==x){ab[a-1].start=ab[n].start;break}}return r},ap.onAnimation=function(b){b?eve.on("raphael.anim.frame."+this.id,b):eve.unbind("raphael.anim.frame."+this.id);return this},c3.prototype.delay=function(d){var c=new c3(this.anim,this.ms);c.times=this.times,c.del=+d||0;return c},c3.prototype.repeat=function(d){var c=new c3(this.anim,this.ms);c.del=this.del,c.times=av.floor(at(d,0))||1;return c},a8.animation=function(a,n,m,l){if(a instanceof c3){return a}if(a8.is(m,"function")||!m){l=l||m||null,m=null}a=Object(a),n=+n||0;var k={},j,g;for(g in a){a[aV](g)&&c4(g)!=g&&c4(g)+"%"!=g&&(j=!0,k[g]=a[g])}if(!j){return new c3(a,n)}m&&(k.easing=m),l&&(k.callback=l);return new c3({100:k},n)},ap.animate=function(a,l,k,j){var i=this;if(i.removed){j&&j.call(i);return i}var h=a instanceof c3?a:a8.animation(a,l,k,j);c0(h,i,h.percents[0],null,i.attr());return i},ap.setTime=function(d,c){d&&c!=null&&this.status(d,aq(c,d.ms)/d.ms);return this},ap.status=function(h,g){var l=[],k=0,j,i;if(g!=null){c0(h,this,-1,aq(g,1));return this}j=ab.length;for(;k<j;k++){i=ab[k];if(i.el.id==this.id&&(!h||i.anim==h)){if(h){return i.status}l.push({anim:i.anim,status:i.status})}}if(h){return 0}return l},ap.pause=function(d){for(var c=0;c<ab.length;c++){ab[c].el.id==this.id&&(!d||ab[c].anim==d)&&eve("raphael.anim.pause."+this.id,this,ab[c].anim)!==!1&&(ab[c].paused=!0)}return this},ap.resume=function(e){for(var d=0;d<ab.length;d++){if(ab[d].el.id==this.id&&(!e||ab[d].anim==e)){var f=ab[d];eve("raphael.anim.resume."+this.id,this,f.anim)!==!1&&(delete f.paused,this.status(f.anim,f.status))}}return this},ap.stop=function(d){for(var c=0;c<ab.length;c++){ab[c].el.id==this.id&&(!d||ab[c].anim==d)&&eve("raphael.anim.stop."+this.id,this,ab[c].anim)!==!1&&ab.splice(c--,1)}return this},eve.on("raphael.remove",cX),eve.on("raphael.clear",cX),ap.toString=function(){return"Raphaël’s object"};var cT=function(e){this.items=[],this.length=0,this.type="set";if(e){for(var d=0,f=e.length;d<f;d++){e[d]&&(e[d].constructor==ap.constructor||e[d].constructor==cT)&&(this[this.items.length]=this.items[this.items.length]=e[d],this.length++)}}},cQ=cT.prototype;cQ.push=function(){var f,e;for(var h=0,g=arguments.length;h<g;h++){f=arguments[h],f&&(f.constructor==ap.constructor||f.constructor==cT)&&(e=this.items.length,this[e]=this.items[e]=f,this.length++)}return this},cQ.pop=function(){this.length&&delete this[this.length--];return this.items.pop()},cQ.forEach=function(f,e){for(var h=0,g=this.items.length;h<g;h++){if(f.call(e,this.items[h],h)===!1){return this}}return this};for(var cN in ap){ap[aV](cN)&&(cQ[cN]=function(b){return function(){var a=arguments;return this.forEach(function(d){d[b][aO](d,a)})}}(cN))}cQ.attr=function(a,l){if(a&&a8.is(a,dr)&&a8.is(a[0],"object")){for(var k=0,j=a.length;k<j;k++){this.items[k].attr(a[k])}}else{for(var i=0,h=this.items.length;i<h;i++){this.items[i].attr(a,l)}}return this},cQ.clear=function(){while(this.length){this.pop()}},cQ.splice=function(j,i,p){j=j<0?at(this.length+j,0):j,i=at(0,aq(this.length-j,i));var o=[],n=[],m=[],l;for(l=2;l<arguments.length;l++){m.push(arguments[l])}for(l=0;l<i;l++){n.push(this[j+l])}for(;l<this.length-j;l++){o.push(this[j+l])}var k=m.length;for(l=0;l<k+o.length;l++){this.items[j+l]=this[j+l]=l<k?m[l]:o[l-k]}l=this.items.length=this.length-=i-k;while(this[l]){delete this[l++]}return new cT(n)},cQ.exclude=function(e){for(var d=0,f=this.length;d<f;d++){if(this[d]==e){this.splice(d,1);return !0}}},cQ.animate=function(t,s,r,q){(a8.is(r,"function")||!r)&&(q=r||null);var p=this.items.length,o=p,n,m=this,l;if(!p){return this}q&&(l=function(){!--p&&q.call(m)}),r=a8.is(r,dt)?r:l;var a=a8.animation(t,s,r,l);n=this.items[--o].animate(a);while(o--){this.items[o]&&!this.items[o].removed&&this.items[o].animateWith(n,a,a)}return this},cQ.insertAfter=function(d){var c=this.items.length;while(c--){this.items[c].insertAfter(d)}return this},cQ.getBBox=function(){var h=[],g=[],l=[],k=[];for(var j=this.items.length;j--;){if(!this.items[j].removed){var i=this.items[j].getBBox();h.push(i.x),g.push(i.y),l.push(i.x+i.width),k.push(i.y+i.height)}}h=aq[aO](0,h),g=aq[aO](0,g),l=at[aO](0,l),k=at[aO](0,k);return{x:h,y:g,x2:l,y2:k,width:l-h,height:k-g}},cQ.clone=function(e){e=new cT;for(var d=0,f=this.items.length;d<f;d++){e.push(this.items[d].clone())}return e},cQ.toString=function(){return"Raphaël‘s set"},a8.registerFont=function(i){if(!i.face){return i}this.fonts=this.fonts||{};var g={w:i.w,face:{},glyphs:{}},n=i.face["font-family"];for(var m in i.face){i.face[aV](m)&&(g.face[m]=i.face[m])}this.fonts[n]?this.fonts[n].push(g):this.fonts[n]=[g];if(!i.svg){g.face["units-per-em"]=c1(i.face["units-per-em"],10);for(var l in i.glyphs){if(i.glyphs[aV](l)){var k=i.glyphs[l];g.glyphs[l]={w:k.w,k:{},d:k.d&&"M"+k.d.replace(/[mlcxtrv]/g,function(b){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[b]||"M"})+"z"};if(k.k){for(var j in k.k){k[aV](j)&&(g.glyphs[l].k[j]=k.k[j])}}}}}return i},aQ.getFont=function(t,s,r,q){q=q||"normal",r=r||"normal",s=+s||{normal:400,bold:700,lighter:300,bolder:800}[s]||400;if(!!a8.fonts){var p=a8.fonts[t];if(!p){var o=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,aJ)+"(\\s|$)","i");for(var n in a8.fonts){if(a8.fonts[aV](n)&&o.test(n)){p=a8.fonts[n];break}}}var m;if(p){for(var g=0,a=p.length;g<a;g++){m=p[g];if(m.face["font-weight"]==s&&(m.face["font-style"]==r||!m.face["font-style"])&&m.face["font-stretch"]==q){break}}}return m}},aQ.print=function(P,O,N,M,L,K,J){K=K||"middle",J=at(aq(J||0,1),-1);var I=aF(N)[aD](aJ),H=0,G=0,F=aJ,E;a8.is(M,N)&&(M=this.getFont(M));if(M){E=(L||16)/M.face["units-per-em"];var D=M.face.bbox[aD](a3),y=+D[0],s=D[3]-D[1],r=0,p=+D[1]+(K=="baseline"?s+ +M.face.descent:s/2);for(var c=0,a=I.length;c<a;c++){if(I[c]=="\n"){H=0,x=0,G=0,r+=s}else{var C=G&&M.glyphs[I[c-1]]||{},x=M.glyphs[I[c]];H+=G?(C.w||M.w)+(C.k&&C.k[I[c]]||0)+M.w*J:0,G=1}x&&x.d&&(F+=a8.transformPath(x.d,["t",H*E,r*E,"s",E,E,y,p,"t",(P-y)/E,(O-p)/E]))}}return this.path(F).attr({fill:"#000",stroke:"none"})},aQ.add=function(a){if(a8.is(a,"array")){var j=this.set(),i=0,g=a.length,d;for(;i<g;i++){d=a[i]||{},a1[aV](d.type)&&j.push(this[d.type]().attr(d))}}return j},a8.format=function(a,f){var e=a8.is(f,dr)?[0][aN](f):arguments;a&&a8.is(a,dt)&&e.length-1&&(a=a.replace(a0,function(d,c){return e[++c]==null?aJ:e[c]}));return a||aJ},a8.fullfill=function(){var e=/\{([^\}]+)\}/g,d=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,f=function(b,i,h){var g=h;i.replace(d,function(k,j,n,m,l){j=j||m,g&&(j in g&&(g=g[j]),typeof g=="function"&&l&&(g=g()))}),g=(g==null||g==h?b:g)+"";return g};return function(a,c){return String(a).replace(e,function(h,g){return f(h,g,c)})}}(),a8.ninja=function(){aS.was?aU.win.Raphael=aS.is:delete Raphael;return a8},a8.st=cQ,function(a,h,g){function f(){/in/.test(a.readyState)?setTimeout(f,9):a8.eve("raphael.DOMload")}a.readyState==null&&a.addEventListener&&(a.addEventListener(h,g=function(){a.removeEventListener(h,g,!1),a.readyState="complete"},!1),a.readyState="loading"),f()}(document,"DOMContentLoaded"),aS.was?aU.win.Raphael=a8:Raphael=a8,eve.on("raphael.DOMload",function(){a6=!0})}(),window.Raphael.svg&&function(af){var ae="hasOwnProperty",ad=String,ac=parseFloat,ab=parseInt,aa=Math,Z=aa.max,Y=aa.abs,X=aa.pow,W=/[, ]+/,V=af.eve,U="",T=" ",S="http://www.w3.org/1999/xlink",R={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},Q={};af.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var O=function(c,b){if(b){typeof c=="string"&&(c=O(c));for(var a in b){b[ae](a)&&(a.substring(0,6)=="xlink:"?c.setAttributeNS(S,a.substring(6),ad(b[a])):c.setAttribute(a,ad(b[a])))}}else{c=af._g.doc.createElementNS("http://www.w3.org/2000/svg",c),c.style&&(c.style.webkitTapHighlightColor="rgba(0,0,0,0)")}return c},M=function(z,l){var i="linear",h=z.id+l,g=0.5,f=0.5,d=z.node,c=z.paper,a=d.style,ai=af._g.doc.getElementById(h);if(!ai){l=ad(l).replace(af._radial_gradient,function(k,j,n){i="radial";if(j&&n){g=ac(j),f=ac(n);var m=(f>0.5)*2-1;X(g-0.5,2)+X(f-0.5,2)>0.25&&(f=aa.sqrt(0.25-X(g-0.5,2))*m+0.5)&&f!=0.5&&(f=f.toFixed(5)-0.00001*m)}return U}),l=l.split(/\s*\-\s*/);if(i=="linear"){var ah=l.shift();ah=-ac(ah);if(isNaN(ah)){return null}var ag=[0,0,aa.cos(af.rad(ah)),aa.sin(af.rad(ah))],C=1/(Z(Y(ag[2]),Y(ag[3]))||1);ag[2]*=C,ag[3]*=C,ag[2]<0&&(ag[0]=-ag[2],ag[2]=0),ag[3]<0&&(ag[1]=-ag[3],ag[3]=0)}var B=af._parseDots(l);if(!B){return null}h=h.replace(/[\(\)\s,\xb0#]/g,"_"),z.gradient&&h!=z.gradient.id&&(c.defs.removeChild(z.gradient),delete z.gradient);if(!z.gradient){ai=O(i+"Gradient",{id:h}),z.gradient=ai,O(ai,i=="radial"?{fx:g,fy:f}:{x1:ag[0],y1:ag[1],x2:ag[2],y2:ag[3],gradientTransform:z.matrix.invert()}),c.defs.appendChild(ai);for(var A=0,q=B.length;A<q;A++){ai.appendChild(O("stop",{offset:B[A].offset?B[A].offset:A?"100%":"0%","stop-color":B[A].color||"#fff"}))}}}O(d,{fill:"url(#"+h+")",opacity:1,"fill-opacity":1}),a.fill=U,a.opacity=1,a.fillOpacity=1;return 1},K=function(d){var c=d.getBBox(1);O(d.pattern,{patternTransform:d.matrix.invert()+" translate("+c.x+","+c.y+")"})},J=function(ay,ax,aw){if(ay.type=="path"){var av=ad(ax).toLowerCase().split("-"),au=ay.paper,at=aw?"end":"start",ar=ay.node,aq=ay.attrs,ap=aq["stroke-width"],ao=av.length,al="classic",aj,ah,ag,p,l,c=3,b=3,a=5;while(ao--){switch(av[ao]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":al=av[ao];break;case"wide":b=5;break;case"narrow":b=2;break;case"long":c=5;break;case"short":c=2}}al=="open"?(c+=2,b+=2,a+=2,ag=1,p=aw?4:1,l={fill:"none",stroke:aq.stroke}):(p=ag=c/2,l={fill:aq.stroke,stroke:"none"}),ay._.arrows?aw?(ay._.arrows.endPath&&Q[ay._.arrows.endPath]--,ay._.arrows.endMarker&&Q[ay._.arrows.endMarker]--):(ay._.arrows.startPath&&Q[ay._.arrows.startPath]--,ay._.arrows.startMarker&&Q[ay._.arrows.startMarker]--):ay._.arrows={};if(al!="none"){var an="raphael-marker-"+al,am="raphael-marker-"+at+al+c+b;af._g.doc.getElementById(an)?Q[an]++:(au.defs.appendChild(O(O("path"),{"stroke-linecap":"round",d:R[al],id:an})),Q[an]=1);var ak=af._g.doc.getElementById(am),ai;ak?(Q[am]++,ai=ak.getElementsByTagName("use")[0]):(ak=O(O("marker"),{id:am,markerHeight:b,markerWidth:c,orient:"auto",refX:p,refY:b/2}),ai=O(O("use"),{"xlink:href":"#"+an,transform:(aw?"rotate(180 "+c/2+" "+b/2+") ":U)+"scale("+c/a+","+b/a+")","stroke-width":(1/((c/a+b/a)/2)).toFixed(4)}),ak.appendChild(ai),au.defs.appendChild(ak),Q[am]=1),O(ai,l);var q=ag*(al!="diamond"&&al!="oval");aw?(aj=ay._.arrows.startdx*ap||0,ah=af.getTotalLength(aq.path)-q*ap):(aj=q*ap,ah=af.getTotalLength(aq.path)-(ay._.arrows.enddx*ap||0)),l={},l["marker-"+at]="url(#"+am+")";if(ah||aj){l.d=Raphael.getSubpath(aq.path,aj,ah)}O(ar,l),ay._.arrows[at+"Path"]=an,ay._.arrows[at+"Marker"]=am,ay._.arrows[at+"dx"]=q,ay._.arrows[at+"Type"]=al,ay._.arrows[at+"String"]=ax}else{aw?(aj=ay._.arrows.startdx*ap||0,ah=af.getTotalLength(aq.path)-aj):(aj=0,ah=af.getTotalLength(aq.path)-(ay._.arrows.enddx*ap||0)),ay._.arrows[at+"Path"]&&O(ar,{d:Raphael.getSubpath(aq.path,aj,ah)}),delete ay._.arrows[at+"Path"],delete ay._.arrows[at+"Marker"],delete ay._.arrows[at+"dx"],delete ay._.arrows[at+"Type"],delete ay._.arrows[at+"String"]}for(l in Q){if(Q[ae](l)&&!Q[l]){var o=af._g.doc.getElementById(l);o&&o.parentNode.removeChild(o)}}}},I={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},H=function(i,c,n){c=I[ad(c).toLowerCase()];if(c){var m=i.attrs["stroke-width"]||"1",l={round:m,square:m,butt:0}[i.attrs["stroke-linecap"]||n["stroke-linecap"]]||0,k=[],j=c.length;while(j--){k[j]=c[j]*m+(j%2?1:-1)*l}O(i.node,{"stroke-dasharray":k.join(",")})}},G=function(ak,aj){var ai=ak.node,ah=ak.attrs,ag=ai.style.visibility;ai.style.visibility="hidden";for(var y in aj){if(aj[ae](y)){if(!af._availableAttrs[ae](y)){continue}var v=aj[y];ah[y]=v;switch(y){case"blur":ak.blur(v);break;case"href":case"title":case"target":var n=ai.parentNode;if(n.tagName.toLowerCase()!="a"){var h=O("a");n.insertBefore(h,ai),h.appendChild(ai),n=h}y=="target"?n.setAttributeNS(S,"show",v=="blank"?"new":v):n.setAttributeNS(S,y,v);break;case"cursor":ai.style.cursor=v;break;case"transform":ak.transform(v);break;case"arrow-start":J(ak,v);break;case"arrow-end":J(ak,v,1);break;case"clip-rect":var e=ad(v).split(W);if(e.length==4){ak.clip&&ak.clip.parentNode.parentNode.removeChild(ak.clip.parentNode);var a=O("clipPath"),t=O("rect");a.id=af.createUUID(),O(t,{x:e[0],y:e[1],width:e[2],height:e[3]}),a.appendChild(t),ak.paper.defs.appendChild(a),O(ai,{"clip-path":"url(#"+a.id+")"}),ak.clip=t}if(!v){var s=ai.getAttribute("clip-path");if(s){var r=af._g.doc.getElementById(s.replace(/(^url\(#|\)$)/g,U));r&&r.parentNode.removeChild(r),O(ai,{"clip-path":U}),delete ak.clip}}break;case"path":ak.type=="path"&&(O(ai,{d:v?ah.path=af._pathToAbsolute(v):"M0,0"}),ak._.dirty=1,ak._.arrows&&("startString" in ak._.arrows&&J(ak,ak._.arrows.startString),"endString" in ak._.arrows&&J(ak,ak._.arrows.endString,1)));break;case"width":ai.setAttribute(y,v),ak._.dirty=1;if(ah.fx){y="x",v=ah.x}else{break}case"x":ah.fx&&(v=-ah.x-(ah.width||0));case"rx":if(y=="rx"&&ak.type=="rect"){break}case"cx":ai.setAttribute(y,v),ak.pattern&&K(ak),ak._.dirty=1;break;case"height":ai.setAttribute(y,v),ak._.dirty=1;if(ah.fy){y="y",v=ah.y}else{break}case"y":ah.fy&&(v=-ah.y-(ah.height||0));case"ry":if(y=="ry"&&ak.type=="rect"){break}case"cy":ai.setAttribute(y,v),ak.pattern&&K(ak),ak._.dirty=1;break;case"r":ak.type=="rect"?O(ai,{rx:v,ry:v}):ai.setAttribute(y,v),ak._.dirty=1;break;case"src":ak.type=="image"&&ai.setAttributeNS(S,"href",v);break;case"stroke-width":if(ak._.sx!=1||ak._.sy!=1){v/=Z(Y(ak._.sx),Y(ak._.sy))||1}ak.paper._vbSize&&(v*=ak.paper._vbSize),ai.setAttribute(y,v),ah["stroke-dasharray"]&&H(ak,ah["stroke-dasharray"],aj),ak._.arrows&&("startString" in ak._.arrows&&J(ak,ak._.arrows.startString),"endString" in ak._.arrows&&J(ak,ak._.arrows.endString,1));break;case"stroke-dasharray":H(ak,v,aj);break;case"fill":var q=ad(v).match(af._ISURL);if(q){a=O("pattern");var l=O("image");a.id=af.createUUID(),O(a,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),O(l,{x:0,y:0,"xlink:href":q[1]}),a.appendChild(l),function(d){af._preload(q[1],function(){var f=this.offsetWidth,i=this.offsetHeight;O(d,{width:f,height:i}),O(l,{width:f,height:i}),ak.paper.safari()})}(a),ak.paper.defs.appendChild(a),O(ai,{fill:"url(#"+a.id+")"}),ak.pattern=a,ak.pattern&&K(ak);break}var j=af.getRGB(v);if(!j.error){delete aj.gradient,delete ah.gradient,!af.is(ah.opacity,"undefined")&&af.is(aj.opacity,"undefined")&&O(ai,{opacity:ah.opacity}),!af.is(ah["fill-opacity"],"undefined")&&af.is(aj["fill-opacity"],"undefined")&&O(ai,{"fill-opacity":ah["fill-opacity"]})}else{if((ak.type=="circle"||ak.type=="ellipse"||ad(v).charAt()!="r")&&M(ak,v)){if("opacity" in ah||"fill-opacity" in ah){var g=af._g.doc.getElementById(ai.getAttribute("fill").replace(/^url\(#|\)$/g,U));if(g){var c=g.getElementsByTagName("stop");O(c[c.length-1],{"stop-opacity":("opacity" in ah?ah.opacity:1)*("fill-opacity" in ah?ah["fill-opacity"]:1)})}}ah.gradient=v,ah.fill="none";break}}j[ae]("opacity")&&O(ai,{"fill-opacity":j.opacity>1?j.opacity/100:j.opacity});case"stroke":j=af.getRGB(v),ai.setAttribute(y,j.hex),y=="stroke"&&j[ae]("opacity")&&O(ai,{"stroke-opacity":j.opacity>1?j.opacity/100:j.opacity}),y=="stroke"&&ak._.arrows&&("startString" in ak._.arrows&&J(ak,ak._.arrows.startString),"endString" in ak._.arrows&&J(ak,ak._.arrows.endString,1));break;case"gradient":(ak.type=="circle"||ak.type=="ellipse"||ad(v).charAt()!="r")&&M(ak,v);break;case"opacity":ah.gradient&&!ah[ae]("stroke-opacity")&&O(ai,{"stroke-opacity":v>1?v/100:v});case"fill-opacity":if(ah.gradient){g=af._g.doc.getElementById(ai.getAttribute("fill").replace(/^url\(#|\)$/g,U)),g&&(c=g.getElementsByTagName("stop"),O(c[c.length-1],{"stop-opacity":v}));break}default:y=="font-size"&&(v=ab(v,10)+"px");var b=y.replace(/(\-.)/g,function(d){return d.substring(1).toUpperCase()});ai.style[b]=v,ak._.dirty=1,ai.setAttribute(y,v)}}}E(ak,aj),ai.style.visibility=ag},F=1.2,E=function(x,w){if(x.type=="text"&&!!(w[ae]("text")||w[ae]("font")||w[ae]("font-size")||w[ae]("x")||w[ae]("y"))){var v=x.attrs,u=x.node,t=u.firstChild?ab(af._g.doc.defaultView.getComputedStyle(u.firstChild,U).getPropertyValue("font-size"),10):10;if(w[ae]("text")){v.text=w.text;while(u.firstChild){u.removeChild(u.firstChild)}var s=ad(w.text).split("\n"),q=[],l;for(var e=0,c=s.length;e<c;e++){l=O("tspan"),e&&O(l,{dy:t*F,x:v.x}),l.appendChild(af._g.doc.createTextNode(s[e])),u.appendChild(l),q[e]=l}}else{q=u.getElementsByTagName("tspan");for(e=0,c=q.length;e<c;e++){e?O(q[e],{dy:t*F,x:v.x}):O(q[0],{dy:0})}}O(u,{x:v.x,y:v.y}),x._.dirty=1;var b=x._getBBox(),a=v.y-(b.y+b.height/2);a&&af.is(a,"finite")&&O(q[0],{dy:a})}},D=function(a,h){var g=0,f=0;this[0]=this.node=a,a.raphael=!0,this.id=af._oid++,a.raphaelid=this.id,this.matrix=af.matrix(),this.realPath=null,this.paper=h,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!h.bottom&&(h.bottom=this),this.prev=h.top,h.top&&(h.top.next=this),h.top=this,this.next=null},P=af.el;D.prototype=P,P.constructor=D,af._engine.path=function(f,e){var h=O("path");e.canvas&&e.canvas.appendChild(h);var g=new D(h,e);g.type="path",G(g,{fill:"none",stroke:"#000",path:f});return g},P.rotate=function(d,c,h){if(this.removed){return this}d=ad(d).split(W),d.length-1&&(c=ac(d[1]),h=ac(d[2])),d=ac(d[0]),h==null&&(c=h);if(c==null||h==null){var g=this.getBBox(1);c=g.x+g.width/2,h=g.y+g.height/2}this.transform(this._.transform.concat([["r",d,c,h]]));return this},P.scale=function(d,c,j,i){if(this.removed){return this}d=ad(d).split(W),d.length-1&&(c=ac(d[1]),j=ac(d[2]),i=ac(d[3])),d=ac(d[0]),c==null&&(c=d),i==null&&(j=i);if(j==null||i==null){var h=this.getBBox(1)}j=j==null?h.x+h.width/2:j,i=i==null?h.y+h.height/2:i,this.transform(this._.transform.concat([["s",d,c,j,i]]));return this},P.translate=function(d,c){if(this.removed){return this}d=ad(d).split(W),d.length-1&&(c=ac(d[1])),d=ac(d[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",d,c]]));return this},P.transform=function(f){var b=this._;if(f==null){return b.transform}af._extractTransform(this,f),this.clip&&O(this.clip,{transform:this.matrix.invert()}),this.pattern&&K(this),this.node&&O(this.node,{transform:this.matrix});if(b.sx!=1||b.sy!=1){var a=this.attrs[ae]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":a})}return this},P.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this},P.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this},P.remove=function(){if(!this.removed&&!!this.node.parentNode){var a=this.paper;a.__set__&&a.__set__.exclude(this),V.unbind("raphael.*.*."+this.id),this.gradient&&a.defs.removeChild(this.gradient),af._tear(this,a),this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var d in this){this[d]=typeof this[d]=="function"?af._removedFactory(d):null}this.removed=!0}},P._getBBox=function(){if(this.node.style.display=="none"){this.show();var e=!0}var d={};try{d=this.node.getBBox()}catch(f){}finally{d=d||{}}e&&this.hide();return d},P.attr=function(x,w){if(this.removed){return this}if(x==null){var v={};for(var u in this.attrs){this.attrs[ae](u)&&(v[u]=this.attrs[u])}v.gradient&&v.fill=="none"&&(v.fill=v.gradient)&&delete v.gradient,v.transform=this._.transform;return v}if(w==null&&af.is(x,"string")){if(x=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient}if(x=="transform"){return this._.transform}var t=x.split(W),s={};for(var r=0,q=t.length;r<q;r++){x=t[r],x in this.attrs?s[x]=this.attrs[x]:af.is(this.paper.customAttributes[x],"function")?s[x]=this.paper.customAttributes[x].def:s[x]=af._availableAttrs[x]}return q-1?s:s[t[0]]}if(w==null&&af.is(x,"array")){s={};for(r=0,q=x.length;r<q;r++){s[x[r]]=this.attr(x[r])}return s}if(w!=null){var k={};k[x]=w}else{x!=null&&af.is(x,"object")&&(k=x)}for(var j in k){V("raphael.attr."+j+"."+this.id,this,k[j])}for(j in this.paper.customAttributes){if(this.paper.customAttributes[ae](j)&&k[ae](j)&&af.is(this.paper.customAttributes[j],"function")){var b=this.paper.customAttributes[j].apply(this,[].concat(k[j]));this.attrs[j]=k[j];for(var a in b){b[ae](a)&&(k[a]=b[a])}}}G(this,k);return this},P.toFront=function(){if(this.removed){return this}this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var a=this.paper;a.top!=this&&af._tofront(this,a);return this},P.toBack=function(){if(this.removed){return this}var a=this.node.parentNode;a.tagName.toLowerCase()=="a"?a.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):a.firstChild!=this.node&&a.insertBefore(this.node,this.node.parentNode.firstChild),af._toback(this,this.paper);var d=this.paper;return this},P.insertAfter=function(a){if(this.removed){return this}var d=a.node||a[a.length-1].node;d.nextSibling?d.parentNode.insertBefore(this.node,d.nextSibling):d.parentNode.appendChild(this.node),af._insertafter(this,a,this.paper);return this},P.insertBefore=function(a){if(this.removed){return this}var d=a.node||a[0].node;d.parentNode.insertBefore(this.node,d),af._insertbefore(this,a,this.paper);return this},P.blur=function(a){var h=this;if(+a!==0){var g=O("filter"),f=O("feGaussianBlur");h.attrs.blur=a,g.id=af.createUUID(),O(f,{stdDeviation:+a||1.5}),g.appendChild(f),h.paper.defs.appendChild(g),h._blur=g,O(h.node,{filter:"url(#"+g.id+")"})}else{h._blur&&(h._blur.parentNode.removeChild(h._blur),delete h._blur,delete h.attrs.blur),h.node.removeAttribute("filter")}},af._engine.circle=function(h,g,l,k){var j=O("circle");h.canvas&&h.canvas.appendChild(j);var i=new D(j,h);i.attrs={cx:g,cy:l,r:k,fill:"none",stroke:"#000"},i.type="circle",O(j,i.attrs);return i},af._engine.rect=function(j,i,p,o,n,m){var l=O("rect");j.canvas&&j.canvas.appendChild(l);var k=new D(l,j);k.attrs={x:i,y:p,width:o,height:n,r:m||0,rx:m||0,ry:m||0,fill:"none",stroke:"#000"},k.type="rect",O(l,k.attrs);return k},af._engine.ellipse=function(i,h,n,m,l){var k=O("ellipse");i.canvas&&i.canvas.appendChild(k);var j=new D(k,i);j.attrs={cx:h,cy:n,rx:m,ry:l,fill:"none",stroke:"#000"},j.type="ellipse",O(k,j.attrs);return j},af._engine.image=function(j,i,p,o,n,m){var l=O("image");O(l,{x:p,y:o,width:n,height:m,preserveAspectRatio:"none"}),l.setAttributeNS(S,"href",i),j.canvas&&j.canvas.appendChild(l);var k=new D(l,j);k.attrs={x:p,y:o,width:n,height:m,src:i},k.type="image";return k},af._engine.text=function(a,l,k,j){var i=O("text");a.canvas&&a.canvas.appendChild(i);var h=new D(i,a);h.attrs={x:l,y:k,"text-anchor":"middle",text:j,font:af._availableAttrs.font,stroke:"none",fill:"#000"},h.type="text",G(h,h.attrs);return h},af._engine.setSize=function(d,c){this.width=d||this.width,this.height=c||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox);return this},af._engine.create=function(){var r=af._getContainer.apply(0,arguments),q=r&&r.container,p=r.x,o=r.y,n=r.width,m=r.height;if(!q){throw new Error("SVG container not found.")}var l=O("svg"),k="overflow:hidden;",a;p=p||0,o=o||0,n=n||512,m=m||342,O(l,{height:m,version:1.1,width:n,xmlns:"http://www.w3.org/2000/svg"}),q==1?(l.style.cssText=k+"position:absolute;left:"+p+"px;top:"+o+"px",af._g.doc.body.appendChild(l),a=1):(l.style.cssText=k+"position:relative",q.firstChild?q.insertBefore(l,q.firstChild):q.appendChild(l)),q=new af._Paper,q.width=n,q.height=m,q.canvas=l,q.clear(),q._left=q._top=0,a&&(q.renderfix=function(){}),q.renderfix();return q},af._engine.setViewBox=function(t,s,r,q,p){V("raphael.setViewBox",this,this._viewBox,[t,s,r,q,p]);var o=Z(r/this.width,q/this.height),n=this.top,m=p?"meet":"xMinYMin",k,g;t==null?(this._vbSize&&(o=1),delete this._vbSize,k="0 0 "+this.width+T+this.height):(this._vbSize=o,k=t+T+s+T+r+T+q),O(this.canvas,{viewBox:k,preserveAspectRatio:m});while(o&&n){g="stroke-width" in n.attrs?n.attrs["stroke-width"]:1,n.attr({"stroke-width":g}),n._.dirty=1,n._.dirtyT=1,n=n.prev}this._viewBox=[t,s,r,q,!!p];return this},af.prototype.renderfix=function(){var h=this.canvas,g=h.style,l;try{l=h.getScreenCTM()||h.createSVGMatrix()}catch(k){l=h.createSVGMatrix()}var j=-l.e%1,i=-l.f%1;if(j||i){j&&(this._left=(this._left+j)%1,g.left=this._left+"px"),i&&(this._top=(this._top+i)%1,g.top=this._top+"px")}},af.prototype.clear=function(){af.eve("raphael.clear",this);var a=this.canvas;while(a.firstChild){a.removeChild(a.firstChild)}this.bottom=this.top=null,(this.desc=O("desc")).appendChild(af._g.doc.createTextNode("Created with Raphaël "+af.version)),a.appendChild(this.desc),a.appendChild(this.defs=O("defs"))},af.prototype.remove=function(){V("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this){this[a]=typeof this[a]=="function"?af._removedFactory(a):null}};var N=af.st;for(var L in P){P[ae](L)&&!N[ae](L)&&(N[L]=function(b){return function(){var a=arguments;return this.forEach(function(d){d[b].apply(d,a)})}}(L))}}(window.Raphael),window.Raphael.vml&&function(ap){var ao="hasOwnProperty",an=String,am=parseFloat,al=Math,ak=al.round,aj=al.max,ai=al.min,ah=al.abs,ag="fill",af=/[, ]+/,ae=ap.eve,ad=" progid:DXImageTransform.Microsoft",ac=" ",ab="",aa={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},Y=/([clmz]),?([^clmz]*)/gi,W=/ progid:\S+Blur\([^\)]+\)/g,U=/-?[^,\s-]+/g,S="position:absolute;left:0;top:0;width:1px;height:1px",Q=21600,O={path:1,rect:1,image:1},M={circle:1,ellipse:1},K=function(v){var u=/[ahqstv]/ig,t=ap._pathToAbsolute;an(v).match(u)&&(t=ap._path2curve),u=/[clmz]/g;if(t==ap._pathToAbsolute&&!an(v).match(u)){var s=an(v).replace(Y,function(i,h,m){var l=[],k=h.toLowerCase()=="m",j=aa[h];m.replace(U,function(b){k&&l.length==2&&(j+=l+aa[h=="m"?"l":"L"],l=[]),l.push(ak(b*Q))});return j+l});return s}var q=t(v),p,o;s=[];for(var n=0,f=q.length;n<f;n++){p=q[n],o=q[n][0].toLowerCase(),o=="z"&&(o="x");for(var c=1,a=p.length;c<a;c++){o+=ak(p[c]*Q)+(c!=a-1?",":ab)}s.push(o)}return s.join(ac)},J=function(a,h,g){var f=ap.matrix();f.rotate(-a,0.5,0.5);return{dx:f.x(h,g),dy:f.y(h,g)}},I=function(ar,aq,H,G,F,E){var D=ar._,C=ar.matrix,B=D.fillpos,A=ar.node,z=A.style,y=1,x="",w,u=Q/aq,n=Q/H;z.visibility="hidden";if(!!aq&&!!H){A.coordsize=ah(u)+ac+ah(n),z.rotation=E*(aq*H<0?-1:1);if(E){var j=J(E,G,F);G=j.dx,F=j.dy}aq<0&&(x+="x"),H<0&&(x+=" y")&&(y=-1),z.flip=x,A.coordorigin=G*-u+ac+F*-n;if(B||D.fillsize){var i=A.getElementsByTagName(ag);i=i&&i[0],A.removeChild(i),B&&(j=J(E,C.x(B[0],B[1]),C.y(B[0],B[1])),i.position=j.dx*y+ac+j.dy*y),D.fillsize&&(i.size=D.fillsize[0]*ah(aq)+ac+D.fillsize[1]*ah(H)),A.appendChild(i)}z.visibility="visible"}};ap.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var Z=function(t,s,r){var q=an(s).toLowerCase().split("-"),p=r?"end":"start",o=q.length,n="classic",m="medium",l="medium";while(o--){switch(q[o]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":n=q[o];break;case"wide":case"narrow":l=q[o];break;case"long":case"short":m=q[o]}}var c=t.node.getElementsByTagName("stroke")[0];c[p+"arrow"]=n,c[p+"arrowlength"]=m,c[p+"arrowwidth"]=l},X=function(aF,aE){aF.attrs=aF.attrs||{};var aD=aF.node,aC=aF.attrs,aB=aD.style,aA,ay=O[aF.type]&&(aE.x!=aC.x||aE.y!=aC.y||aE.width!=aC.width||aE.height!=aC.height||aE.cx!=aC.cx||aE.cy!=aC.cy||aE.rx!=aC.rx||aE.ry!=aC.ry||aE.r!=aC.r),aw=M[aF.type]&&(aC.cx!=aE.cx||aC.cy!=aE.cy||aC.r!=aE.r||aC.rx!=aE.rx||aC.ry!=aE.ry),av=aF;for(var F in aE){aE[ao](F)&&(aC[F]=aE[F])}ay&&(aC.path=ap._getPath[aF.type](aF),aF._.dirty=1),aE.href&&(aD.href=aE.href),aE.title&&(aD.title=aE.title),aE.target&&(aD.target=aE.target),aE.cursor&&(aB.cursor=aE.cursor),"blur" in aE&&aF.blur(aE.blur);if(aE.path&&aF.type=="path"||ay){aD.path=K(~an(aC.path).toLowerCase().indexOf("r")?ap._pathToAbsolute(aC.path):aC.path),aF.type=="image"&&(aF._.fillpos=[aC.x,aC.y],aF._.fillsize=[aC.width,aC.height],I(aF,1,1,0,0,0))}"transform" in aE&&aF.transform(aE.transform);if(aw){var az=+aC.cx,ax=+aC.cy,au=+aC.rx||+aC.r||0,at=+aC.ry||+aC.r||0;aD.path=ap.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",ak((az-au)*Q),ak((ax-at)*Q),ak((az+au)*Q),ak((ax+at)*Q),ak(az*Q))}if("clip-rect" in aE){var ar=an(aE["clip-rect"]).split(af);if(ar.length==4){ar[2]=+ar[2]+ +ar[0],ar[3]=+ar[3]+ +ar[1];var aq=aD.clipRect||ap._g.doc.createElement("div"),C=aq.style;C.clip=ap.format("rect({1}px {2}px {3}px {0}px)",ar),aD.clipRect||(C.position="absolute",C.top=0,C.left=0,C.width=aF.paper.width+"px",C.height=aF.paper.height+"px",aD.parentNode.insertBefore(aq,aD),aq.appendChild(aD),aD.clipRect=aq)}aE["clip-rect"]||aD.clipRect&&(aD.clipRect.style.clip="auto")}if(aF.textpath){var A=aF.textpath.style;aE.font&&(A.font=aE.font),aE["font-family"]&&(A.fontFamily='"'+aE["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,ab)+'"'),aE["font-size"]&&(A.fontSize=aE["font-size"]),aE["font-weight"]&&(A.fontWeight=aE["font-weight"]),aE["font-style"]&&(A.fontStyle=aE["font-style"])}"arrow-start" in aE&&Z(av,aE["arrow-start"]),"arrow-end" in aE&&Z(av,aE["arrow-end"],1);if(aE.opacity!=null||aE["stroke-width"]!=null||aE.fill!=null||aE.src!=null||aE.stroke!=null||aE["stroke-width"]!=null||aE["stroke-opacity"]!=null||aE["fill-opacity"]!=null||aE["stroke-dasharray"]!=null||aE["stroke-miterlimit"]!=null||aE["stroke-linejoin"]!=null||aE["stroke-linecap"]!=null){var z=aD.getElementsByTagName(ag),x=!1;z=z&&z[0],!z&&(x=z=P(ag)),aF.type=="image"&&aE.src&&(z.src=aE.src),aE.fill&&(z.on=!0);if(z.on==null||aE.fill=="none"||aE.fill===null){z.on=!1}if(z.on&&aE.fill){var w=an(aE.fill).match(ap._ISURL);if(w){z.parentNode==aD&&aD.removeChild(z),z.rotate=!0,z.src=w[1],z.type="tile";var v=aF.getBBox(1);z.position=v.x+ac+v.y,aF._.fillpos=[v.x,v.y],ap._preload(w[1],function(){aF._.fillsize=[this.offsetWidth,this.offsetHeight]})}else{z.color=ap.getRGB(aE.fill).hex,z.src=ab,z.type="solid",ap.getRGB(aE.fill).error&&(av.type in {circle:1,ellipse:1}||an(aE.fill).charAt()!="r")&&V(av,aE.fill,z)&&(aC.fill="none",aC.gradient=aE.fill,z.rotate=!1)}}if("fill-opacity" in aE||"opacity" in aE){var u=((+aC["fill-opacity"]+1||2)-1)*((+aC.opacity+1||2)-1)*((+ap.getRGB(aE.fill).o+1||2)-1);u=ai(aj(u,0),1),z.opacity=u,z.src&&(z.color="none")}aD.appendChild(z);var n=aD.getElementsByTagName("stroke")&&aD.getElementsByTagName("stroke")[0],h=!1;!n&&(h=n=P("stroke"));if(aE.stroke&&aE.stroke!="none"||aE["stroke-width"]||aE["stroke-opacity"]!=null||aE["stroke-dasharray"]||aE["stroke-miterlimit"]||aE["stroke-linejoin"]||aE["stroke-linecap"]){n.on=!0}(aE.stroke=="none"||aE.stroke===null||n.on==null||aE.stroke==0||aE["stroke-width"]==0)&&(n.on=!1);var g=ap.getRGB(aE.stroke);n.on&&aE.stroke&&(n.color=g.hex),u=((+aC["stroke-opacity"]+1||2)-1)*((+aC.opacity+1||2)-1)*((+g.o+1||2)-1);var f=(am(aE["stroke-width"])||1)*0.75;u=ai(aj(u,0),1),aE["stroke-width"]==null&&(f=aC["stroke-width"]),aE["stroke-width"]&&(n.weight=f),f&&f<1&&(u*=f)&&(n.weight=1),n.opacity=u,aE["stroke-linejoin"]&&(n.joinstyle=aE["stroke-linejoin"]||"miter"),n.miterlimit=aE["stroke-miterlimit"]||8,aE["stroke-linecap"]&&(n.endcap=aE["stroke-linecap"]=="butt"?"flat":aE["stroke-linecap"]=="square"?"square":"round");if(aE["stroke-dasharray"]){var d={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};n.dashstyle=d[ao](aE["stroke-dasharray"])?d[aE["stroke-dasharray"]]:ab}h&&aD.appendChild(n)}if(av.type=="text"){av.paper.canvas.style.display=ab;var c=av.paper.span,b=100,a=aC.font&&aC.font.match(/\d+(?:\.\d*)?(?=px)/);aB=c.style,aC.font&&(aB.font=aC.font),aC["font-family"]&&(aB.fontFamily=aC["font-family"]),aC["font-weight"]&&(aB.fontWeight=aC["font-weight"]),aC["font-style"]&&(aB.fontStyle=aC["font-style"]),a=am(aC["font-size"]||a&&a[0])||10,aB.fontSize=a*b+"px",av.textpath.string&&(c.innerHTML=an(av.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var j=c.getBoundingClientRect();av.W=aC.w=(j.right-j.left)/b,av.H=aC.h=(j.bottom-j.top)/b,av.X=aC.x,av.Y=aC.y+av.H/2,("x" in aE||"y" in aE)&&(av.path.v=ap.format("m{0},{1}l{2},{1}",ak(aC.x*Q),ak(aC.y*Q),ak(aC.x*Q)+1));var aG=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var o=0,k=aG.length;o<k;o++){if(aG[o] in aE){av._.dirty=1;break}}switch(aC["text-anchor"]){case"start":av.textpath.style["v-text-align"]="left",av.bbx=av.W/2;break;case"end":av.textpath.style["v-text-align"]="right",av.bbx=-av.W/2;break;default:av.textpath.style["v-text-align"]="center",av.bbx=0}av.textpath.style["v-text-kern"]=!0}},V=function(z,y,x){z.attrs=z.attrs||{};var w=z.attrs,v=Math.pow,u,o,n="linear",e=".5 .5";z.attrs.gradient=y,y=an(y).replace(ap._radial_gradient,function(g,f,h){n="radial",f&&h&&(f=am(f),h=am(h),v(f-0.5,2)+v(h-0.5,2)>0.25&&(h=al.sqrt(0.25-v(f-0.5,2))*((h>0.5)*2-1)+0.5),e=f+ac+h);return ab}),y=y.split(/\s*\-\s*/);if(n=="linear"){var d=y.shift();d=-am(d);if(isNaN(d)){return null}}var c=ap._parseDots(y);if(!c){return null}z=z.shape||z.node;if(c.length){z.removeChild(x),x.on=!0,x.method="none",x.color=c[0].color,x.color2=c[c.length-1].color;var a=[];for(var B=0,A=c.length;B<A;B++){c[B].offset&&a.push(c[B].offset+ac+c[B].color)}x.colors=a.length?a.join():"0% "+x.color,n=="radial"?(x.type="gradientTitle",x.focus="100%",x.focussize="0 0",x.focusposition=e,x.angle=0):(x.type="gradient",x.angle=(270-d)%360),z.appendChild(x)}return 1},T=function(a,d){this[0]=this.node=a,a.raphael=!0,this.id=ap._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=d,this.matrix=ap.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!d.bottom&&(d.bottom=this),this.prev=d.top,d.top&&(d.top.next=this),d.top=this,this.next=null},R=ap.el;T.prototype=R,R.constructor=T,R.transform=function(B){if(B==null){return this._.transform}var A=this.paper._viewBoxShift,z=A?"s"+[A.scale,A.scale]+"-1-1t"+[A.dx,A.dy]:ab,y;A&&(y=B=an(B).replace(/\.{3}|\u2026/g,this._.transform||ab)),ap._extractTransform(this,z+B);var x=this.matrix.clone(),w=this.skew,v=this.node,u,t=~an(this.attrs.fill).indexOf("-"),s=!an(this.attrs.fill).indexOf("url(");x.translate(-0.5,-0.5);if(s||t||this.type=="image"){w.matrix="1 0 0 1",w.offset="0 0",u=x.split();if(t&&u.noRotation||!u.isSimple){v.style.filter=x.toFilter();var o=this.getBBox(),n=this.getBBox(1),c=o.x-n.x,a=o.y-n.y;v.coordorigin=c*-Q+ac+a*-Q,I(this,1,1,c,a,0)}else{v.style.filter=ab,I(this,u.scalex,u.scaley,u.dx,u.dy,u.rotate)}}else{v.style.filter=ab,w.matrix=an(x),w.offset=x.offset()}y&&(this._.transform=y);return this},R.rotate=function(d,c,h){if(this.removed){return this}if(d!=null){d=an(d).split(af),d.length-1&&(c=am(d[1]),h=am(d[2])),d=am(d[0]),h==null&&(c=h);if(c==null||h==null){var g=this.getBBox(1);c=g.x+g.width/2,h=g.y+g.height/2}this._.dirtyT=1,this.transform(this._.transform.concat([["r",d,c,h]]));return this}},R.translate=function(d,c){if(this.removed){return this}d=an(d).split(af),d.length-1&&(c=am(d[1])),d=am(d[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=d,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",d,c]]));return this},R.scale=function(d,c,j,i){if(this.removed){return this}d=an(d).split(af),d.length-1&&(c=am(d[1]),j=am(d[2]),i=am(d[3]),isNaN(j)&&(j=null),isNaN(i)&&(i=null)),d=am(d[0]),c==null&&(c=d),i==null&&(j=i);if(j==null||i==null){var h=this.getBBox(1)}j=j==null?h.x+h.width/2:j,i=i==null?h.y+h.height/2:i,this.transform(this._.transform.concat([["s",d,c,j,i]])),this._.dirtyT=1;return this},R.hide=function(){!this.removed&&(this.node.style.display="none");return this},R.show=function(){!this.removed&&(this.node.style.display=ab);return this},R._getBBox=function(){if(this.removed){return{}}return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},R.remove=function(){if(!this.removed&&!!this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),ap.eve.unbind("raphael.*.*."+this.id),ap._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this){this[a]=typeof this[a]=="function"?ap._removedFactory(a):null}this.removed=!0}},R.attr=function(x,w){if(this.removed){return this}if(x==null){var v={};for(var u in this.attrs){this.attrs[ao](u)&&(v[u]=this.attrs[u])}v.gradient&&v.fill=="none"&&(v.fill=v.gradient)&&delete v.gradient,v.transform=this._.transform;return v}if(w==null&&ap.is(x,"string")){if(x==ag&&this.attrs.fill=="none"&&this.attrs.gradient){return this.attrs.gradient}var t=x.split(af),s={};for(var r=0,l=t.length;r<l;r++){x=t[r],x in this.attrs?s[x]=this.attrs[x]:ap.is(this.paper.customAttributes[x],"function")?s[x]=this.paper.customAttributes[x].def:s[x]=ap._availableAttrs[x]}return l-1?s:s[t[0]]}if(this.attrs&&w==null&&ap.is(x,"array")){s={};for(r=0,l=x.length;r<l;r++){s[x[r]]=this.attr(x[r])}return s}var k;w!=null&&(k={},k[x]=w),w==null&&ap.is(x,"object")&&(k=x);for(var j in k){ae("raphael.attr."+j+"."+this.id,this,k[j])}if(k){for(j in this.paper.customAttributes){if(this.paper.customAttributes[ao](j)&&k[ao](j)&&ap.is(this.paper.customAttributes[j],"function")){var b=this.paper.customAttributes[j].apply(this,[].concat(k[j]));this.attrs[j]=k[j];for(var a in b){b[ao](a)&&(k[a]=b[a])}}}k.text&&this.type=="text"&&(this.textpath.string=k.text),X(this,k)}return this},R.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&ap._tofront(this,this.paper);return this},R.toBack=function(){if(this.removed){return this}this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),ap._toback(this,this.paper));return this},R.insertAfter=function(a){if(this.removed){return this}a.constructor==ap.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),ap._insertafter(this,a,this.paper);return this},R.insertBefore=function(a){if(this.removed){return this}a.constructor==ap.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),ap._insertbefore(this,a,this.paper);return this},R.blur=function(a){var f=this.node.runtimeStyle,e=f.filter;e=e.replace(W,ab),+a!==0?(this.attrs.blur=a,f.filter=e+ac+ad+".Blur(pixelradius="+(+a||1.5)+")",f.margin=ap.format("-{0}px 0 0 -{0}px",ak(+a||1.5))):(f.filter=e,f.margin=0,delete this.attrs.blur)},ap._engine.path=function(h,g){var l=P("shape");l.style.cssText=S,l.coordsize=Q+ac+Q,l.coordorigin=g.coordorigin;var k=new T(l,g),j={fill:"none",stroke:"#000"};h&&(j.path=h),k.type="path",k.path=[],k.Path=ab,X(k,j),g.canvas.appendChild(l);var i=P("skew");i.on=!0,l.appendChild(i),k.skew=i,k.transform(ab);return k},ap._engine.rect=function(r,q,p,o,n,m){var l=ap._rectPath(q,p,o,n,m),k=r.path(l),a=k.attrs;k.X=a.x=q,k.Y=a.y=p,k.W=a.width=o,k.H=a.height=n,a.r=m,a.path=l,k.type="rect";return k},ap._engine.ellipse=function(i,h,n,m,l){var k=i.path(),j=k.attrs;k.X=h-m,k.Y=n-l,k.W=m*2,k.H=l*2,k.type="ellipse",X(k,{cx:h,cy:n,rx:m,ry:l});return k},ap._engine.circle=function(h,g,l,k){var j=h.path(),i=j.attrs;j.X=g-k,j.Y=l-k,j.W=j.H=k*2,j.type="circle",X(j,{cx:g,cy:l,r:k});return j},ap._engine.image=function(v,u,t,s,r,q){var p=ap._rectPath(t,s,r,q),o=v.path(p).attr({stroke:"none"}),n=o.attrs,j=o.node,a=j.getElementsByTagName(ag)[0];n.src=u,o.X=n.x=t,o.Y=n.y=s,o.W=n.width=r,o.H=n.height=q,n.path=p,o.type="image",a.parentNode==j&&j.removeChild(a),a.rotate=!0,a.src=u,a.type="tile",o._.fillpos=[t,s],o._.fillsize=[r,q],j.appendChild(a),I(o,1,1,0,0,0);return o},ap._engine.text=function(t,s,r,q){var p=P("shape"),o=P("path"),n=P("textpath");s=s||0,r=r||0,q=q||"",o.v=ap.format("m{0},{1}l{2},{1}",ak(s*Q),ak(r*Q),ak(s*Q)+1),o.textpathok=!0,n.string=an(q),n.on=!0,p.style.cssText=S,p.coordsize=Q+ac+Q,p.coordorigin="0 0";var f=new T(p,t),c={fill:"#000",stroke:"none",font:ap._availableAttrs.font,text:q};f.shape=p,f.path=o,f.textpath=n,f.type="text",f.attrs.text=an(q),f.attrs.x=s,f.attrs.y=r,f.attrs.w=1,f.attrs.h=1,X(f,c),p.appendChild(n),p.appendChild(o),t.canvas.appendChild(p);var a=P("skew");a.on=!0,p.appendChild(a),f.skew=a,f.transform(ab);return f},ap._engine.setSize=function(a,f){var e=this.canvas.style;this.width=a,this.height=f,a==+a&&(a+="px"),f==+f&&(f+="px"),e.width=a,e.height=f,e.clip="rect(0 "+a+" "+f+" 0)",this._viewBox&&ap._engine.setViewBox.apply(this,this._viewBox);return this},ap._engine.setViewBox=function(t,s,r,q,p){ap.eve("raphael.setViewBox",this,this._viewBox,[t,s,r,q,p]);var o=this.width,n=this.height,m=1/aj(r/o,q/n),g,a;p&&(g=n/q,a=o/r,r*g<o&&(t-=(o-r*g)/2/g),q*a<n&&(s-=(n-q*a)/2/a)),this._viewBox=[t,s,r,q,!!p],this._viewBoxShift={dx:-t,dy:-s,scale:m},this.forEach(function(b){b.transform("...")});return this};var P;ap._engine.initWin=function(e){var d=e.document;d.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!d.namespaces.rvml&&d.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),P=function(b){return d.createElement("<rvml:"+b+' class="rvml">')}}catch(f){P=function(b){return d.createElement("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},ap._engine.initWin(ap._g.win),ap._engine.create=function(){var t=ap._getContainer.apply(0,arguments),s=t.container,r=t.height,q,p=t.width,o=t.x,n=t.y;if(!s){throw new Error("VML container not found.")}var m=new ap._Paper,l=m.canvas=ap._g.doc.createElement("div"),a=l.style;o=o||0,n=n||0,p=p||512,r=r||342,m.width=p,m.height=r,p==+p&&(p+="px"),r==+r&&(r+="px"),m.coordsize=Q*1000+ac+Q*1000,m.coordorigin="0 0",m.span=ap._g.doc.createElement("span"),m.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(m.span),a.cssText=ap.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",p,r),s==1?(ap._g.doc.body.appendChild(l),a.left=o+"px",a.top=n+"px",a.position="absolute"):s.firstChild?s.insertBefore(l,s.firstChild):s.appendChild(l),m.renderfix=function(){};return m},ap.prototype.clear=function(){ap.eve("raphael.clear",this),this.canvas.innerHTML=ab,this.span=ap._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},ap.prototype.remove=function(){ap.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this){this[a]=typeof this[a]=="function"?ap._removedFactory(a):null}return !0};var N=ap.st;for(var L in R){R[ao](L)&&!N[ao](L)&&(N[L]=function(b){return function(){var a=arguments;return this.forEach(function(d){d[b].apply(d,a)})}}(L))}}(window.Raphael);JustGage=function(y){if(!y.id){alert("Missing id parameter for gauge!");return false}if(!document.getElementById(y.id)){alert('No element with id: "'+y.id+'" found!');return false}this.config={id:y.id,title:(y.title)?y.title:"Title",titleFontColor:(y.titleFontColor)?y.titleFontColor:"#999999",value:(y.value)?y.value:0,valueFontColor:(y.valueFontColor)?y.valueFontColor:"#010101",min:(y.min)?y.min:0,max:(y.max)?y.max:100,showMinMax:(y.showMinMax!=null)?y.showMinMax:true,gaugeWidthScale:(y.gaugeWidthScale)?y.gaugeWidthScale:1,gaugeColor:(y.gaugeColor)?y.gaugeColor:"#edebeb",label:(y.label)?y.label:"",showInnerShadow:(y.showInnerShadow!=null)?y.showInnerShadow:true,shadowOpacity:(y.shadowOpacity)?y.shadowOpacity:0.2,shadowSize:(y.shadowSize)?y.shadowSize:5,shadowVerticalOffset:(y.shadowVerticalOffset)?y.shadowVerticalOffset:3,levelColors:(y.levelColors)?y.levelColors:percentColors,levelColorsGradient:(y.levelColorsGradient!=null)?y.levelColorsGradient:true,labelFontColor:(y.labelFontColor)?y.labelFontColor:"#b3b3b3",startAnimationTime:(y.startAnimationTime)?y.startAnimationTime:700,startAnimationType:(y.startAnimationType)?y.startAnimationType:">",refreshAnimationTime:(y.refreshAnimationTime)?y.refreshAnimationTime:700,refreshAnimationType:(y.refreshAnimationType)?y.refreshAnimationType:">"};if(y.value>this.config.max){this.config.value=this.config.max}if(y.value<this.config.min){this.config.value=this.config.min}this.originalValue=y.value;this.canvas=Raphael(this.config.id,"100%","100%");var S=getStyle(document.getElementById(this.config.id),"width").slice(0,-2)*1;var F=getStyle(document.getElementById(this.config.id),"height").slice(0,-2)*1;var T,K;if((S/F)>1.25){T=1.25*F;K=F}else{T=S;K=S/1.25}var N=(S-T)/2;var P=(F-K)/2;var D=((K/8)>10)?(K/10):10;var I=N+T/2;var J=P+K/6.5;var L=((K/6.4)>16)?(K/6.4):16;var E=N+T/2;var G=P+K/1.4;var U=((K/16)>10)?(K/16):10;var Q=N+T/2;var R=G+L/2+6;var M=((K/16)>10)?(K/16):10;var z=N+(T/10)+(T/6.666666666666667*this.config.gaugeWidthScale)/2;var A=P+K/1.126760563380282;var O=((K/16)>10)?(K/16):10;var B=N+T-(T/10)-(T/6.666666666666667*this.config.gaugeWidthScale)/2;var C=P+K/1.126760563380282;this.params={canvasW:S,canvasH:F,widgetW:T,widgetH:K,dx:N,dy:P,titleFontSize:D,titleX:I,titleY:J,valueFontSize:L,valueX:E,valueY:G,labelFontSize:U,labelX:Q,labelY:R,minFontSize:M,minX:z,minY:A,maxFontSize:O,maxX:B,maxY:C};this.canvas.customAttributes.pki=function(f,e,c,n,b,m,o,i){var q=(1-(f-e)/(c-e))*Math.PI,l=n/2-n/10,h=l-n/6.666666666666667*i,p=n/2+m,r=b/1.25+o,k=n/2+m+l*Math.cos(q),a=b-(b-r)+o-l*Math.sin(q),d=n/2+m+h*Math.cos(q),g=b-(b-r)+o-h*Math.sin(q),j;j+="M"+(p-h)+","+r+" ";j+="L"+(p-l)+","+r+" ";j+="A"+l+","+l+" 0 0,1 "+k+","+a+" ";j+="L"+d+","+g+" ";j+="A"+h+","+h+" 0 0,0 "+(p-h)+","+r+" ";j+="z ";return{path:j}};this.gauge=this.canvas.path().attr({stroke:"none",fill:this.config.gaugeColor,pki:[this.config.max,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale]});this.gauge.id=this.config.id+"-gauge";this.level=this.canvas.path().attr({stroke:"none",fill:getColorForPercentage((this.config.value-this.config.min)/(this.config.max-this.config.min),this.config.levelColors,this.config.levelColorsGradient),pki:[this.config.min,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale]});this.level.id=this.config.id+"-level";this.txtTitle=this.canvas.text(this.params.titleX,this.params.titleY,this.config.title);this.txtTitle.attr({"font-size":this.params.titleFontSize,"font-weight":"bold","font-family":"Arial",fill:this.config.titleFontColor,"fill-opacity":"1"});this.txtTitle.id=this.config.id+"-txttitle";this.txtValue=this.canvas.text(this.params.valueX,this.params.valueY,this.originalValue);this.txtValue.attr({"font-size":this.params.valueFontSize,"font-weight":"bold","font-family":"Arial",fill:this.config.valueFontColor,"fill-opacity":"0"});this.txtValue.id=this.config.id+"-txtvalue";this.txtLabel=this.canvas.text(this.params.labelX,this.params.labelY,this.config.label);this.txtLabel.attr({"font-size":this.params.labelFontSize,"font-weight":"normal","font-family":"Arial",fill:this.config.labelFontColor,"fill-opacity":"0"});this.txtLabel.id=this.config.id+"-txtlabel";this.txtMin=this.canvas.text(this.params.minX,this.params.minY,this.config.min);this.txtMin.attr({"font-size":this.params.minFontSize,"font-weight":"normal","font-family":"Arial",fill:this.config.labelFontColor,"fill-opacity":(this.config.showMinMax==true)?"1":"0"});this.txtMin.id=this.config.id+"-txtmin";this.txtMax=this.canvas.text(this.params.maxX,this.params.maxY,this.config.max);this.txtMax.attr({"font-size":this.params.maxFontSize,"font-weight":"normal","font-family":"Arial",fill:this.config.labelFontColor,"fill-opacity":(this.config.showMinMax==true)?"1":"0"});this.txtMax.id=this.config.id+"-txtmax";var V=this.canvas.canvas.childNodes[1];var H="http://www.w3.org/2000/svg";if(ie<9){onCreateElementNsReady(function(){this.generateShadow()})}else{this.generateShadow(H,V)}this.level.animate({pki:[this.config.value,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale]},this.config.startAnimationTime,this.config.startAnimationType);this.txtValue.animate({"fill-opacity":"1"},this.config.startAnimationTime,this.config.startAnimationType);this.txtLabel.animate({"fill-opacity":"1"},this.config.startAnimationTime,this.config.startAnimationType)};JustGage.prototype.refresh=function(c){originalVal=c;if(c>this.config.max){c=this.config.max}if(c<this.config.min){c=this.config.min}var d=getColorForPercentage((c-this.config.min)/(this.config.max-this.config.min),this.config.levelColors,this.config.levelColorsGradient);this.canvas.getById(this.config.id+"-txtvalue").attr({text:originalVal});this.canvas.getById(this.config.id+"-level").animate({pki:[c,this.config.min,this.config.max,this.params.widgetW,this.params.widgetH,this.params.dx,this.params.dy,this.config.gaugeWidthScale],fill:d},this.config.refreshAnimationTime,this.config.refreshAnimationType)};var percentColors=["#a9d70b","#f9c802","#ff0000"];JustGage.prototype.generateShadow=function(m,n){var k=document.createElementNS(m,"filter");k.setAttribute("id",this.config.id+"-inner-shadow");n.appendChild(k);var j=document.createElementNS(m,"feOffset");j.setAttribute("dx",0);j.setAttribute("dy",this.config.shadowVerticalOffset);k.appendChild(j);var l=document.createElementNS(m,"feGaussianBlur");l.setAttribute("result","offset-blur");l.setAttribute("stdDeviation",this.config.shadowSize);k.appendChild(l);var o=document.createElementNS(m,"feComposite");o.setAttribute("operator","out");o.setAttribute("in","SourceGraphic");o.setAttribute("in2","offset-blur");o.setAttribute("result","inverse");k.appendChild(o);var p=document.createElementNS(m,"feFlood");p.setAttribute("flood-color","black");p.setAttribute("flood-opacity",this.config.shadowOpacity);p.setAttribute("result","color");k.appendChild(p);var q=document.createElementNS(m,"feComposite");q.setAttribute("operator","in");q.setAttribute("in","color");q.setAttribute("in2","inverse");q.setAttribute("result","shadow");k.appendChild(q);var r=document.createElementNS(m,"feComposite");r.setAttribute("operator","over");r.setAttribute("in","shadow");r.setAttribute("in2","SourceGraphic");k.appendChild(r);if(this.config.showInnerShadow==true){this.canvas.canvas.childNodes[2].setAttribute("filter","url(#"+this.config.id+"-inner-shadow)");this.canvas.canvas.childNodes[3].setAttribute("filter","url(#"+this.config.id+"-inner-shadow)")}};var getColorForPercentage=function(I,H,G){var J=H.length;if(J===1){return H[0]}var E=(G)?(1/(J-1)):(1/J);var D=new Array();for(var x=0;x<H.length;x++){var C=(G)?(E*x):(E*(x+1));var t=parseInt((cutHex(H[x])).substring(0,2),16);var F=parseInt((cutHex(H[x])).substring(2,4),16);var A=parseInt((cutHex(H[x])).substring(4,6),16);D[x]={pct:C,color:{r:t,g:F,b:A}}}if(I==0){return"rgb("+[D[0].color.r,D[0].color.g,D[0].color.b].join(",")+")"}for(var x=0;x<D.length;x++){if(I<=D[x].pct){if(G==true){var u=D[x-1];var w=D[x];var B=w.pct-u.pct;var y=(I-u.pct)/B;var i=1-y;var v=y;var z={r:Math.floor(u.color.r*i+w.color.r*v),g:Math.floor(u.color.g*i+w.color.g*v),b:Math.floor(u.color.b*i+w.color.b*v)};return"rgb("+[z.r,z.g,z.b].join(",")+")"}else{return"rgb("+[D[x].color.r,D[x].color.g,D[x].color.b].join(",")+")"}}}};function getRandomInt(c,d){return Math.floor(Math.random()*(d-c+1))+c}function cutHex(b){return(b.charAt(0)=="#")?b.substring(1,7):b}function getStyle(e,d){var f="";if(document.defaultView&&document.defaultView.getComputedStyle){f=document.defaultView.getComputedStyle(e,"").getPropertyValue(d)}else{if(e.currentStyle){d=d.replace(/\-(\w)/g,function(b,a){return a.toUpperCase()});f=e.currentStyle[d]}}return f}function onCreateElementNsReady(b){if(document.createElementNS!=undefined){b()}else{setTimeout(function(){onCreateElementNsReady(b)},100)}}var ie=(function(){var h,f=3,g=document.createElement("div"),e=g.getElementsByTagName("i");while(g.innerHTML="<!--[if gt IE "+(++f)+"]><i></i><![endif]-->",e[0]){}return f>4?f:h}());(function(b){window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments))}};b.fn.snippet=function(f,h){if(typeof f=="object"){h=f}if(typeof f=="string"){f=f.toLowerCase()}var g={style:"random",showNum:true,transparent:false,collapse:false,menu:true,showMsg:"Expand Code",hideMsg:"Collapse Code",clipboard:"",startCollapsed:true,startText:false,box:"",boxColor:"",boxFill:""};var a=["acid","berries-dark","berries-light","bipolar","blacknblue","bright","contrast","darkblue","darkness","desert","dull","easter","emacs","golden","greenlcd","ide-anjuta","ide-codewarrior","ide-devcpp","ide-eclipse","ide-kdev","ide-msvcpp","kwrite","matlab","navy","nedit","neon","night","pablo","peachpuff","print","rand01","the","typical","vampire","vim","vim-dark","whatis","whitengrey","zellner"];if(h){b.extend(g,h)}return this.each(function(){var o=g.style.toLowerCase();if(g.style=="random"){var R=Math.floor(Math.random()*(a.length));o=a[R]}var N=b(this);var e=this.nodeName.toLowerCase();if(e=="pre"){if(N.data("orgHtml")==undefined||N.data("orgHtml")==null){var af=N.html();N.data("orgHtml",af)}if(!N.parent().hasClass("snippet-wrap")){if(typeof f!="string"){if(N.attr("class").length>0){var P=' class="'+N.attr("class")+'"'}else{var P=""}if(N.attr("id").length>0){var d=' id="'+N.attr("id")+'"'}else{var d=""}var X="Snippet Error: You must specify a language on inital usage of Snippet. Reference <pre"+P+d+">";console.log(X);return false}N.addClass("sh_"+f).addClass("snippet-formatted").wrap("<div class='snippet-container' style='"+N.attr("style")+";'><div class='sh_"+o+" snippet-wrap'></div></div>");N.removeAttr("style");sh_highlightDocument();if(g.showNum){var L=N.html();L=L.replace(/\n/g,"</li><li>");L="<ol class='snippet-num'><li>"+L+"</li></ol>";while(L.indexOf("<li></li></ol>")!=-1){L=L.replace("<li></li></ol>","</ol>")}}else{var L=N.html();L=L.replace(/\n/g,"</li><li>");L="<ul class='snippet-no-num'><li>"+L+"</li></ul>";while(L.indexOf("<li></li></ul>")!=-1){L=L.replace("<li></li></ul>","</ul>")}}L=L.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;");N.html(L);while(N.find("li").eq(0).html()==""){N.find("li").eq(0).remove()}N.find("li").each(function(){if(b(this).html().length<2){var j=(b(this).html()).replace(/\s/g,"");if(j==""){if(b.browser.opera){b(this).html("&nbsp;")}else{b(this).html("<span style='display:none;'>&nbsp;</span>")}}}});var x="<pre class='snippet-textonly sh_sourceCode' style='display:none;'>"+N.data("orgHtml")+"</pre>";var T="<div class='snippet-menu sh_sourceCode' style='display:none;'><pre><a class='snippet-copy' href='#'>copy</a><a class='snippet-text' href='#'>text</a><a class='snippet-window' href='#'>pop-up</a></pre></div>";N.parent().append(x);N.parent().prepend(T);N.parent().hover(function(){b(this).find(".snippet-menu").fadeIn("fast")},function(){b(this).find(".snippet-menu").fadeOut("fast")});if(g.clipboard!=""&&g.clipboard!=false){var ac=N.parent().find("a.snippet-copy");ac.show();ac.parents(".snippet-menu").show();var Q=N.parents(".snippet-wrap").find(".snippet-textonly").text();ZeroClipboard.setMoviePath(g.clipboard);var K=new ZeroClipboard.Client();K.setText(Q);K.glue(ac[0],ac.parents(".snippet-menu")[0]);K.addEventListener("complete",function(j,k){if(k.length>500){k=k.substr(0,500)+"...\n\n("+(k.length-500)+" characters not shown)"}alert("Copied text to clipboard:\n\n "+k)});ac.parents(".snippet-menu").hide()}else{N.parent().find("a.snippet-copy").hide()}N.parent().find("a.snippet-text").click(function(){var k=b(this).parents(".snippet-wrap").find(".snippet-formatted");var j=b(this).parents(".snippet-wrap").find(".snippet-textonly");k.toggle();j.toggle();if(j.is(":visible")){b(this).html("html")}else{b(this).html("text")}b(this).blur();return false});N.parent().find("a.snippet-window").click(function(){var j=b(this).parents(".snippet-wrap").find(".snippet-textonly").html();snippetPopup(j);b(this).blur();return false});if(!g.menu){N.prev(".snippet-menu").find("pre,.snippet-clipboard").hide()}if(g.collapse){var Y=N.parent().attr("class");var ad="<div class='snippet-reveal "+Y+"'><pre class='sh_sourceCode'><a href='#' class='snippet-toggle'>"+g.showMsg+"</a></pre></div>";var O="<div class='sh_sourceCode snippet-hide'><pre><a href='#' class='snippet-revealed snippet-toggle'>"+g.hideMsg+"</a></pre></div>";N.parents(".snippet-container").append(ad);N.parent().append(O);var c=N.parents(".snippet-container");if(g.startCollapsed){c.find(".snippet-reveal").show();c.find(".snippet-wrap").eq(0).hide()}else{c.find(".snippet-reveal").hide();c.find(".snippet-wrap").eq(0).show()}c.find("a.snippet-toggle").click(function(){c.find(".snippet-wrap").toggle();return false})}if(g.transparent){var ab={"background-color":"transparent","box-shadow":"none","-moz-box-shadow":"none","-webkit-box-shadow":"none"};N.css(ab);N.next(".snippet-textonly").css(ab);N.parents(".snippet-container").find(".snippet-reveal pre").css(ab)}if(g.startText){N.hide();N.next(".snippet-textonly").show();N.parent().find(".snippet-text").html("html")}if(g.box!=""){var Z="<span class='box-sp'>&nbsp;</span>";var S=g.box.split(",");for(var V=0;V<S.length;V++){var i=S[V];if(i.indexOf("-")==-1){i=parseFloat(i)-1;N.find("li").eq(i).addClass("box").prepend(Z)}else{var ae=parseFloat(i.split("-")[0])-1;var aa=parseFloat(i.split("-")[1])-1;if(ae<aa){N.find("li").eq(ae).addClass("box box-top").prepend(Z);N.find("li").eq(aa).addClass("box box-bot").prepend(Z);for(var W=ae+1;W<aa;W++){N.find("li").eq(W).addClass("box box-mid").prepend(Z)}}else{if(ae==aa){N.find("li").eq(ae).addClass("box").prepend(Z)}}}}if(g.boxColor!=""){N.find("li.box").css("border-color",g.boxColor)}if(g.boxFill!=""){N.find("li.box, li.box-top, li.box-mid, li.box-bot").addClass("box-bg").css("background-color",g.boxFill)}if(b.browser.webkit){N.find(".snippet-num li.box").css("margin-left","-3.3em");N.find(".snippet-num li .box-sp").css("width","21px")}}N.parents(".snippet-container").find("a").addClass("sh_url")}else{N.parent().attr("class","sh_"+o+" snippet-wrap");N.parents(".snippet-container").find(".snippet-reveal").attr("class","sh_"+o+" snippet-wrap snippet-reveal");N.find("li.box, li.box-top, li.box-mid, li.box-bot").removeAttr("style").removeAttr("class");N.find("li .box-sp").remove();if(g.transparent){var ab={"background-color":"transparent","box-shadow":"none","-moz-box-shadow":"none","-webkit-box-shadow":"none"};N.css(ab);N.next(".snippet-textonly").css(ab);N.parents(".snippet-container").find(".snippet-hide pre").css(ab)}else{var ab={"background-color":"","box-shadow":"","-moz-box-shadow":"","-webkit-box-shadow":""};N.css(ab);N.next(".snippet-textonly").css(ab);N.parents(".snippet-container").find(".snippet-reveal pre").css(ab)}if(g.showNum){var M=N.find("li").eq(0).parent();if(M.hasClass("snippet-no-num")){M.wrap("<ol class='snippet-num'></ol>");var U=N.find("li").eq(0);U.unwrap()}}else{var M=N.find("li").eq(0).parent();if(M.hasClass("snippet-num")){M.wrap("<ul class='snippet-no-num'></ul>");var U=N.find("li").eq(0);U.unwrap()}}if(g.box!=""){var Z="<span class='box-sp'>&nbsp;</span>";var S=g.box.split(",");for(var V=0;V<S.length;V++){var i=S[V];if(i.indexOf("-")==-1){i=parseFloat(i)-1;N.find("li").eq(i).addClass("box").prepend(Z)}else{var ae=parseFloat(i.split("-")[0])-1;var aa=parseFloat(i.split("-")[1])-1;if(ae<aa){N.find("li").eq(ae).addClass("box box-top").prepend(Z);N.find("li").eq(aa).addClass("box box-bot").prepend(Z);for(var W=ae+1;W<aa;W++){N.find("li").eq(W).addClass("box box-mid").prepend(Z)}}else{if(ae==aa){N.find("li").eq(ae).addClass("box").prepend(Z)}}}}if(g.boxColor!=""){N.find("li.box").css("border-color",g.boxColor)}if(g.boxFill!=""){N.find("li.box").addClass("box-bg").css("background-color",g.boxFill)}if(b.browser.webkit){N.find(".snippet-num li.box").css("margin-left","-3.3em");N.find(".snippet-num li .box-sp").css("width","21px")}}sh_highlightDocument();if(!g.menu){N.prev(".snippet-menu").find("pre,.snippet-clipboard").hide()}else{N.prev(".snippet-menu").find("pre,.snippet-clipboard").show()}}}else{var X="Snippet Error: Sorry, Snippet only formats '<pre>' elements. '<"+e+">' elements are currently unsupported.";console.log(X);return false}})}})(jQuery);function snippetPopup(b){top.consoleRef=window.open("","myconsole","width=600,height=300,left=50,top=50,menubar=0,toolbar=0,location=0,status=0,scrollbars=1,resizable=1");top.consoleRef.document.writeln("<html><head><title>Snippet :: Code View :: "+location.href+'</title></head><body bgcolor=white onLoad="self.focus()"><pre>'+b+"</pre></body></html>");top.consoleRef.document.close()}var ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(b){if(typeof(b)=="string"){b=document.getElementById(b)}if(!b.addClass){b.hide=function(){this.style.display="none"};b.show=function(){this.style.display=""};b.addClass=function(a){this.removeClass(a);this.className+=" "+a};b.removeClass=function(g){var f=this.className.split(/\s+/);var a=-1;for(var h=0;h<f.length;h++){if(f[h]==g){a=h;h=f.length}}if(a>-1){f.splice(a,1);this.className=f.join(" ")}return this};b.hasClass=function(a){return !!this.className.match(new RegExp("\\s*"+a+"\\s*"))}}return b},setMoviePath:function(b){this.moviePath=b},dispatch:function(g,e,h){var f=this.clients[g];if(f){f.receiveEvent(e,h)}},register:function(c,d){this.clients[c]=d},getDOMObjectPosition:function(f,e){var d={left:0,top:0,width:f.width?f.width:f.offsetWidth,height:f.height?f.height:f.offsetHeight};while(f&&(f!=e)){d.left+=f.offsetLeft;d.top+=f.offsetTop;f=f.offsetParent}return d},Client:function(b){this.handlers={};this.id=ZeroClipboard.nextId++;this.movieId="ZeroClipboardMovie_"+this.id;ZeroClipboard.register(this.id,this);if(b){this.glue(b)}}};ZeroClipboard.Client.prototype={id:0,ready:false,movie:null,clipText:"",handCursorEnabled:true,cssEffects:true,handlers:null,glue:function(k,g,j){this.domElement=ZeroClipboard.$(k);var i=99;if(this.domElement.style.zIndex){i=parseInt(this.domElement.style.zIndex,10)+1}if(typeof(g)=="string"){g=ZeroClipboard.$(g)}else{if(typeof(g)=="undefined"){g=document.getElementsByTagName("body")[0]}}var l=ZeroClipboard.getDOMObjectPosition(this.domElement,g);this.div=document.createElement("div");this.div.className="snippet-clipboard";var h=this.div.style;h.position="absolute";h.left=""+l.left+"px";h.top=""+l.top+"px";h.width=""+l.width+"px";h.height=""+l.height+"px";h.zIndex=i;if(typeof(j)=="object"){for(addedStyle in j){h[addedStyle]=j[addedStyle]}}g.appendChild(this.div);this.div.innerHTML=this.getHTML(l.width,l.height)},getHTML:function(i,g){var j="";var f="id="+this.id+"&width="+i+"&height="+g;if(navigator.userAgent.match(/MSIE/)){var h=location.href.match(/^https/i)?"https://":"http://";j+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+h+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+i+'" height="'+g+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+f+'"/><param name="wmode" value="transparent"/></object>'}else{j+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+i+'" height="'+g+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+f+'" wmode="transparent" />'}return j},hide:function(){if(this.div){this.div.style.left="-2000px"}},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML="";var d=document.getElementsByTagName("body")[0];try{d.removeChild(this.div)}catch(c){}this.domElement=null;this.div=null}},reposition:function(f){if(f){this.domElement=ZeroClipboard.$(f);if(!this.domElement){this.hide()}}if(this.domElement&&this.div){var d=ZeroClipboard.getDOMObjectPosition(this.domElement);var e=this.div.style;e.left=""+d.left+"px";e.top=""+d.top+"px"}},setText:function(b){this.clipText=b;if(this.ready){this.movie.setText(b)}},addEventListener:function(d,c){d=d.toString().toLowerCase().replace(/^on/,"");if(!this.handlers[d]){this.handlers[d]=[]}this.handlers[d].push(c)},setHandCursor:function(b){this.handCursorEnabled=b;if(this.ready){this.movie.setHandCursor(b)}},setCSSEffects:function(b){this.cssEffects=!!b},receiveEvent:function(m,l){m=m.toString().toLowerCase().replace(/^on/,"");switch(m){case"load":this.movie=document.getElementById(this.movieId);if(!this.movie){var n=this;setTimeout(function(){n.receiveEvent("load",null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var n=this;setTimeout(function(){n.receiveEvent("load",null)},100);this.ready=true;return}this.ready=true;try{this.movie.setText(this.clipText)}catch(j){}try{this.movie.setHandCursor(this.handCursorEnabled)}catch(j){}break;case"mouseover":if(this.domElement&&this.cssEffects){this.domElement.addClass("hover");if(this.recoverActive){this.domElement.addClass("active")}}break;case"mouseout":if(this.domElement&&this.cssEffects){this.recoverActive=false;if(this.domElement.hasClass("active")){this.domElement.removeClass("active");this.recoverActive=true}this.domElement.removeClass("hover")}break;case"mousedown":if(this.domElement&&this.cssEffects){this.domElement.addClass("active")}break;case"mouseup":if(this.domElement&&this.cssEffects){this.domElement.removeClass("active");this.recoverActive=false}break}if(this.handlers[m]){for(var e=0,i=this.handlers[m].length;e<i;e++){var k=this.handlers[m][e];if(typeof(k)=="function"){k(this,l)}else{if((typeof(k)=="object")&&(k.length==2)){k[0][k[1]](this,l)}else{if(typeof(k)=="string"){window[k](this,l)}}}}}}};if(!this.sh_languages){this.sh_languages={}}var sh_requests={};function sh_isEmailAddress(a){if(/^mailto:/.test(a)){return false}return a.indexOf("@")!==-1}function sh_setHref(d,a,b){var c=b.substring(d[a-2].pos,d[a-1].pos);if(c.length>=2&&c.charAt(0)==="<"&&c.charAt(c.length-1)===">"){c=c.substr(1,c.length-2)}if(sh_isEmailAddress(c)){c="mailto:"+c}d[a-2].node.href=c}function sh_konquerorExec(b){var a=[""];a.index=b.length;a.input=b;return a}function sh_highlightString(d,C){if(/Konqueror/.test(navigator.userAgent)){if(!C.konquered){for(var j=0;j<C.length;j++){for(var m=0;m<C[j].length;m++){var l=C[j][m][0];if(l.source==="$"){l.exec=sh_konquerorExec}}}C.konquered=true}}var N=document.createElement("a");var D=document.createElement("span");var c=[];var x=0;var B=[];var e=0;var y=null;var I=function(P,a){var i=P.length;if(i===0){return}if(!a){var r=B.length;if(r!==0){var s=B[r-1];if(!s[3]){a=s[1]}}}if(y!==a){if(y){c[x++]={pos:e};if(y==="sh_url"){sh_setHref(c,x,d)}}if(a){var p;if(a==="sh_url"){p=N.cloneNode(false)}else{p=D.cloneNode(false)}p.className=a;c[x++]={node:p,pos:e}}}e+=i;y=a};var E=/\r\n|\r|\n/g;E.lastIndex=0;var n=d.length;while(e<n){var G=e;var z;var H;var w=E.exec(d);if(w===null){z=n;H=n}else{z=w.index;H=E.lastIndex}var v=d.substring(G,z);var M=[];for(;;){var o=e-G;var f;var J=B.length;if(J===0){f=0}else{f=B[J-1][2]}var O=C[f];var b=O.length;var A=M[f];if(!A){A=M[f]=[]}var g=null;var F=-1;for(var K=0;K<b;K++){var u;if(K<A.length&&(A[K]===null||o<=A[K].index)){u=A[K]}else{var k=O[K][0];k.lastIndex=o;u=k.exec(v);A[K]=u}if(u!==null&&(g===null||u.index<g.index)){g=u;F=K;if(u.index===o){break}}}if(g===null){I(v.substring(o),null);break}else{if(g.index>o){I(v.substring(o,g.index),null)}var q=O[F];var t=q[1];var h;if(t instanceof Array){for(var L=0;L<t.length;L++){h=g[L+1];I(h,t[L])}}else{h=g[0];I(h,t)}switch(q[2]){case -1:break;case -2:B.pop();break;case -3:B.length=0;break;default:B.push(q);break}}}if(y){c[x++]={pos:e};if(y==="sh_url"){sh_setHref(c,x,d)}y=null}e=H}return c}function sh_getClasses(b){var d=[];var e=b.className;if(e&&e.length>0){var c=e.split(" ");for(var a=0;a<c.length;a++){if(c[a].length>0){d.push(c[a])}}}return d}function sh_addClass(a,c){var b=sh_getClasses(a);for(var d=0;d<b.length;d++){if(c.toLowerCase()===b[d].toLowerCase()){return}}b.push(c);a.className=b.join(" ")}function sh_extractTagsFromNodeList(a,e){var d=a.length;for(var b=0;b<d;b++){var c=a.item(b);switch(c.nodeType){case 1:if(c.nodeName.toLowerCase()==="br"){var f;if(/MSIE/.test(navigator.userAgent)){f="\r"}else{f="\n"}e.text.push(f);e.pos++}else{e.tags.push({node:c.cloneNode(false),pos:e.pos});sh_extractTagsFromNodeList(c.childNodes,e);e.tags.push({pos:e.pos})}break;case 3:case 4:e.text.push(c.data);e.pos+=c.length;break}}}function sh_extractTags(a,c){var b={};b.text=[];b.tags=c;b.pos=0;sh_extractTagsFromNodeList(a.childNodes,b);return b.text.join("")}function sh_mergeTags(d,f){var a=d.length;if(a===0){return f}var c=f.length;if(c===0){return d}var i=[];var e=0;var b=0;while(e<a&&b<c){var h=d[e];var g=f[b];if(h.pos<=g.pos){i.push(h);e++}else{i.push(g);if(f[b+1].pos<=h.pos){b++;i.push(f[b]);b++}else{i.push({pos:h.pos});f[b]={node:g.node.cloneNode(false),pos:h.pos}}}}while(e<a){i.push(d[e]);e++}while(b<c){i.push(f[b]);b++}return i}function sh_insertTags(e,b){var a=document;var f=document.createDocumentFragment();var k=0;var j=e.length;var h=0;var d=b.length;var i=f;while(h<d||k<j){var c;var g;if(k<j){c=e[k];g=c.pos}else{g=d}if(g<=h){if(c.node){var l=c.node;i.appendChild(l);i=l}else{i=i.parentNode}k++}else{i.appendChild(a.createTextNode(b.substring(h,g)));h=g}}return f}function sh_highlightElement(a,d){sh_addClass(a,"sh_sourceCode");var g=[];var b=sh_extractTags(a,g);var c=sh_highlightString(b,d);var f=sh_mergeTags(g,c);var e=sh_insertTags(f,b);while(a.hasChildNodes()){a.removeChild(a.firstChild)}a.appendChild(e)}function sh_getXMLHttpRequest(){if(window.ActiveXObject){return new ActiveXObject("Msxml2.XMLHTTP")}else{if(window.XMLHttpRequest){return new XMLHttpRequest()}}throw"No XMLHttpRequest implementation available"}function sh_load(language,element,prefix,suffix){if(language in sh_requests){sh_requests[language].push(element);return}sh_requests[language]=[element];var request=sh_getXMLHttpRequest();var url=prefix+"sh_"+language+suffix;request.open("GET",url,true);request.onreadystatechange=function(){if(request.readyState===4){try{if(!request.status||request.status===200){eval(request.responseText);var elements=sh_requests[language];for(var i=0;i<elements.length;i++){sh_highlightElement(elements[i],sh_languages[language])}}else{throw"HTTP error: status "+request.status}}finally{request=null}}};request.send(null)}function sh_highlightDocument(n,l){var i=document.getElementsByTagName("pre");for(var o=0;o<i.length;o++){var p=i.item(o);var m=p.className.toLowerCase();var j=m.replace(/sh_sourcecode/g,"");if(j.indexOf("sh_")!=-1){j=j.match(/(\bsh_)\w+\b/g)[0]}if(m.indexOf("sh_sourcecode")!=-1){continue}if(j.substr(0,3)==="sh_"){var k=j.substring(3);if(k in sh_languages){sh_highlightElement(p,sh_languages[k])}else{if(typeof(n)==="string"&&typeof(l)==="string"){sh_load(k,p,n,l)}else{console.log('Found <pre> element with class="'+j+'", but no such language exists');continue}}break}}}if(!this.sh_languages){this.sh_languages={}}sh_languages.c=[[[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/^[ \t]*#(?:[ \t]*include)/g,"sh_preproc",10,1],[/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g,"sh_preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",13],[/'/g,"sh_string",14],[/\b(?:__asm|__cdecl|__declspec|__export|__far16|__fastcall|__fortran|__import|__pascal|__rtti|__stdcall|_asm|_cdecl|__except|_export|_far16|_fastcall|__finally|_fortran|_import|_pascal|_stdcall|__thread|__try|asm|auto|break|case|catch|cdecl|const|continue|default|do|else|enum|extern|for|goto|if|pascal|register|return|sizeof|static|struct|switch|typedef|union|volatile|while)\b/g,"sh_keyword",-1],[/\b(?:bool|char|double|float|int|long|short|signed|unsigned|void|wchar_t)\b/g,"sh_type",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1],[/([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,["sh_usertype","sh_usertype","sh_normal"],-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/$/g,null,-2],[/</g,"sh_string",11],[/"/g,"sh_string",12],[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9]],[[/$/g,null,-2],[/>/g,"sh_string",-2]],[[/$/g,null,-2],[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/"/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/'/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.cpp=[[[/(\b(?:class|struct|typename))([ \t]+)([A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/\b(?:class|const_cast|delete|dynamic_cast|explicit|false|friend|inline|mutable|namespace|new|operator|private|protected|public|reinterpret_cast|static_cast|template|this|throw|true|try|typeid|typename|using|virtual)\b/g,"sh_keyword",-1],[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/^[ \t]*#(?:[ \t]*include)/g,"sh_preproc",10,1],[/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g,"sh_preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",13],[/'/g,"sh_string",14],[/\b(?:__asm|__cdecl|__declspec|__export|__far16|__fastcall|__fortran|__import|__pascal|__rtti|__stdcall|_asm|_cdecl|__except|_export|_far16|_fastcall|__finally|_fortran|_import|_pascal|_stdcall|__thread|__try|asm|auto|break|case|catch|cdecl|const|continue|default|do|else|enum|extern|for|goto|if|pascal|register|return|sizeof|static|struct|switch|typedef|union|volatile|while)\b/g,"sh_keyword",-1],[/\b(?:bool|char|double|float|int|long|short|signed|unsigned|void|wchar_t)\b/g,"sh_type",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1],[/([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,["sh_usertype","sh_usertype","sh_normal"],-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/$/g,null,-2],[/</g,"sh_string",11],[/"/g,"sh_string",12],[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9]],[[/$/g,null,-2],[/>/g,"sh_string",-2]],[[/$/g,null,-2],[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/"/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/'/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.csharp=[[[/\b(?:using)\b/g,"sh_preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))(?:[FfDdMmUulL]+)?\b/g,"sh_number",-1],[/(\b(?:class|struct|typename))([ \t]+)([A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/\b(?:abstract|event|new|struct|as|explicit|null|switch|base|extern|this|false|operator|throw|break|finally|out|true|fixed|override|try|case|params|typeof|catch|for|private|foreach|protected|checked|goto|public|unchecked|class|if|readonly|unsafe|const|implicit|ref|continue|in|return|virtual|default|interface|sealed|volatile|delegate|internal|do|is|sizeof|while|lock|stackalloc|else|static|enum|namespace|get|partial|set|value|where|yield)\b/g,"sh_keyword",-1],[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/^[ \t]*#(?:[ \t]*include)/g,"sh_preproc",10,1],[/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g,"sh_preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",13],[/'/g,"sh_string",14],[/\b(?:bool|byte|sbyte|char|decimal|double|float|int|uint|long|ulong|object|short|ushort|string|void)\b/g,"sh_type",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1],[/([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,["sh_usertype","sh_usertype","sh_normal"],-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/$/g,null,-2],[/</g,"sh_string",11],[/"/g,"sh_string",12],[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9]],[[/$/g,null,-2],[/>/g,"sh_string",-2]],[[/$/g,null,-2],[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/"/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/'/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.css=[[[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/(?:\.|#)[A-Za-z0-9_]+/g,"sh_selector",-1],[/\{/g,"sh_cbracket",10,1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\}/g,"sh_cbracket",-2],[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/[A-Za-z0-9_-]+[ \t]*:/g,"sh_property",-1],[/[.%A-Za-z0-9_-]+/g,"sh_value",-1],[/#(?:[A-Za-z0-9_]+)/g,"sh_string",-1]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.flex=[[[/^%\{/g,"sh_preproc",1,1],[/^%[sx]/g,"sh_preproc",16,1],[/^%option/g,"sh_preproc",17,1],[/^%(?:array|pointer|[aceknopr])/g,"sh_preproc",-1],[/[A-Za-z_][A-Za-z0-9_-]*/g,"sh_preproc",19,1],[/^%%/g,"sh_preproc",20,1]],[[/^%\}/g,"sh_preproc",-2],[/(\b(?:class|struct|typename))([ \t]+)([A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/\b(?:class|const_cast|delete|dynamic_cast|explicit|false|friend|inline|mutable|namespace|new|operator|private|protected|public|reinterpret_cast|static_cast|template|this|throw|true|try|typeid|typename|using|virtual)\b/g,"sh_keyword",-1],[/\/\/\//g,"sh_comment",2],[/\/\//g,"sh_comment",8],[/\/\*\*/g,"sh_comment",9],[/\/\*/g,"sh_comment",10],[/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/^[ \t]*#(?:[ \t]*include)/g,"sh_preproc",11,1],[/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g,"sh_preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",14],[/'/g,"sh_string",15],[/\b(?:__asm|__cdecl|__declspec|__export|__far16|__fastcall|__fortran|__import|__pascal|__rtti|__stdcall|_asm|_cdecl|__except|_export|_far16|_fastcall|__finally|_fortran|_import|_pascal|_stdcall|__thread|__try|asm|auto|break|case|catch|cdecl|const|continue|default|do|else|enum|extern|for|goto|if|pascal|register|return|sizeof|static|struct|switch|typedef|union|volatile|while)\b/g,"sh_keyword",-1],[/\b(?:bool|char|double|float|int|long|short|signed|unsigned|void|wchar_t)\b/g,"sh_type",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1],[/([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,["sh_usertype","sh_usertype","sh_normal"],-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",3,1],[/<!DOCTYPE/g,"sh_preproc",5,1],[/<!--/g,"sh_comment",6],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",7,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",7,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",4]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",4]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",6]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",4]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",3,1],[/<!DOCTYPE/g,"sh_preproc",5,1],[/<!--/g,"sh_comment",6],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",7,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",7,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/$/g,null,-2],[/</g,"sh_string",12],[/"/g,"sh_string",13],[/\/\/\//g,"sh_comment",2],[/\/\//g,"sh_comment",8],[/\/\*\*/g,"sh_comment",9],[/\/\*/g,"sh_comment",10]],[[/$/g,null,-2],[/>/g,"sh_string",-2]],[[/$/g,null,-2],[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/"/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/'/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/$/g,null,-2],[/[A-Za-z_][A-Za-z0-9_-]*/g,"sh_function",-1]],[[/$/g,null,-2],[/[A-Za-z_][A-Za-z0-9_-]*/g,"sh_keyword",-1],[/"/g,"sh_string",18],[/=/g,"sh_symbol",-1]],[[/$/g,null,-2],[/"/g,"sh_string",-2]],[[/$/g,null,-2],[/\{[A-Za-z_][A-Za-z0-9_-]*\}/g,"sh_type",-1],[/"/g,"sh_string",13],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1]],[[/^%%/g,"sh_preproc",21,1],[/<[A-Za-z_][A-Za-z0-9_-]*>/g,"sh_function",-1],[/"/g,"sh_string",13],[/\\./g,"sh_preproc",-1],[/\{[A-Za-z_][A-Za-z0-9_-]*\}/g,"sh_type",-1],[/\/\*/g,"sh_comment",22],[/\{/g,"sh_cbracket",23,1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1]],[[/(\b(?:class|struct|typename))([ \t]+)([A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/\b(?:class|const_cast|delete|dynamic_cast|explicit|false|friend|inline|mutable|namespace|new|operator|private|protected|public|reinterpret_cast|static_cast|template|this|throw|true|try|typeid|typename|using|virtual)\b/g,"sh_keyword",-1],[/\/\/\//g,"sh_comment",2],[/\/\//g,"sh_comment",8],[/\/\*\*/g,"sh_comment",9],[/\/\*/g,"sh_comment",10],[/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/^[ \t]*#(?:[ \t]*include)/g,"sh_preproc",11,1],[/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g,"sh_preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",14],[/'/g,"sh_string",15],[/\b(?:__asm|__cdecl|__declspec|__export|__far16|__fastcall|__fortran|__import|__pascal|__rtti|__stdcall|_asm|_cdecl|__except|_export|_far16|_fastcall|__finally|_fortran|_import|_pascal|_stdcall|__thread|__try|asm|auto|break|case|catch|cdecl|const|continue|default|do|else|enum|extern|for|goto|if|pascal|register|return|sizeof|static|struct|switch|typedef|union|volatile|while)\b/g,"sh_keyword",-1],[/\b(?:bool|char|double|float|int|long|short|signed|unsigned|void|wchar_t)\b/g,"sh_type",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1],[/([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,["sh_usertype","sh_usertype","sh_normal"],-1]],[[/\*\//g,"sh_comment",-2],[/\/\*/g,"sh_comment",22]],[[/\}/g,"sh_cbracket",-2],[/\{/g,"sh_cbracket",23,1],[/\$./g,"sh_variable",-1],[/(\b(?:class|struct|typename))([ \t]+)([A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/\b(?:class|const_cast|delete|dynamic_cast|explicit|false|friend|inline|mutable|namespace|new|operator|private|protected|public|reinterpret_cast|static_cast|template|this|throw|true|try|typeid|typename|using|virtual)\b/g,"sh_keyword",-1],[/\/\/\//g,"sh_comment",2],[/\/\//g,"sh_comment",8],[/\/\*\*/g,"sh_comment",9],[/\/\*/g,"sh_comment",10],[/(\bstruct)([ \t]+)([A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/^[ \t]*#(?:[ \t]*include)/g,"sh_preproc",11,1],[/^[ \t]*#(?:[ \t]*[A-Za-z0-9_]*)/g,"sh_preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",14],[/'/g,"sh_string",15],[/\b(?:__asm|__cdecl|__declspec|__export|__far16|__fastcall|__fortran|__import|__pascal|__rtti|__stdcall|_asm|_cdecl|__except|_export|_far16|_fastcall|__finally|_fortran|_import|_pascal|_stdcall|__thread|__try|asm|auto|break|case|catch|cdecl|const|continue|default|do|else|enum|extern|for|goto|if|pascal|register|return|sizeof|static|struct|switch|typedef|union|volatile|while)\b/g,"sh_keyword",-1],[/\b(?:bool|char|double|float|int|long|short|signed|unsigned|void|wchar_t)\b/g,"sh_type",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1],[/([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,["sh_usertype","sh_usertype","sh_normal"],-1]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.html=[[[/<\?xml/g,"sh_preproc",1,1],[/<!DOCTYPE/g,"sh_preproc",3,1],[/<!--/g,"sh_comment",4],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",5,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",5,1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",4]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.java=[[[/\b(?:import|package)\b/g,"sh_preproc",-1],[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",10],[/'/g,"sh_string",11],[/(\b(?:class|interface))([ \t]+)([$A-Za-z0-9_]+)/g,["sh_keyword","sh_normal","sh_classname"],-1],[/\b(?:abstract|assert|break|case|catch|class|const|continue|default|do|else|extends|false|final|finally|for|goto|if|implements|instanceof|interface|native|new|null|private|protected|public|return|static|strictfp|super|switch|synchronized|throw|throws|true|this|transient|try|volatile|while)\b/g,"sh_keyword",-1],[/\b(?:int|byte|boolean|char|long|float|double|short|void)\b/g,"sh_type",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1],[/([A-Za-z](?:[^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]|[_])*)((?:<.*>)?)(\s+(?=[*&]*[A-Za-z][^`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\s]*\s*[`~!@#$%&*()_=+{}|;:",<.>\/?'\\[\]\^\-\[\]]+))/g,["sh_usertype","sh_usertype","sh_normal"],-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/"/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/'/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.javascript=[[[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/\b(?:abstract|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|final|finally|for|function|goto|if|implements|in|instanceof|interface|native|new|null|private|protected|prototype|public|return|static|super|switch|synchronized|throw|throws|this|transient|true|try|typeof|var|volatile|while|with)\b/g,"sh_keyword",-1],[/(\+\+|--|\)|\])(\s*)(\/=?(?![*\/]))/g,["sh_symbol","sh_normal","sh_symbol"],-1],[/(0x[A-Fa-f0-9]+|(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?)(\s*)(\/(?![*\/]))/g,["sh_number","sh_normal","sh_symbol"],-1],[/([A-Za-z$_][A-Za-z0-9$_]*\s*)(\/=?(?![*\/]))/g,["sh_normal","sh_symbol"],-1],[/\/(?:\\.|[^*\\\/])(?:\\.|[^\\\/])*\/[gim]*/g,"sh_regexp",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",10],[/'/g,"sh_string",11],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/\b(?:Math|Infinity|NaN|undefined|arguments)\b/g,"sh_predef_var",-1],[/\b(?:Array|Boolean|Date|Error|EvalError|Function|Number|Object|RangeError|ReferenceError|RegExp|String|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt)\b/g,"sh_predef_func",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/"/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/'/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.javascript_dom=[[[/\/\/\//g,"sh_comment",1],[/\/\//g,"sh_comment",7],[/\/\*\*/g,"sh_comment",8],[/\/\*/g,"sh_comment",9],[/\b(?:abstract|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|final|finally|for|function|goto|if|implements|in|instanceof|interface|native|new|null|private|protected|prototype|public|return|static|super|switch|synchronized|throw|throws|this|transient|true|try|typeof|var|volatile|while|with)\b/g,"sh_keyword",-1],[/(\+\+|--|\)|\])(\s*)(\/=?(?![*\/]))/g,["sh_symbol","sh_normal","sh_symbol"],-1],[/(0x[A-Fa-f0-9]+|(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?)(\s*)(\/(?![*\/]))/g,["sh_number","sh_normal","sh_symbol"],-1],[/([A-Za-z$_][A-Za-z0-9$_]*\s*)(\/=?(?![*\/]))/g,["sh_normal","sh_symbol"],-1],[/\/(?:\\.|[^*\\\/])(?:\\.|[^\\\/])*\/[gim]*/g,"sh_regexp",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",10],[/'/g,"sh_string",11],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/\b(?:Math|Infinity|NaN|undefined|arguments)\b/g,"sh_predef_var",-1],[/\b(?:Array|Boolean|Date|Error|EvalError|Function|Number|Object|RangeError|ReferenceError|RegExp|String|SyntaxError|TypeError|URIError|decodeURI|decodeURIComponent|encodeURI|encodeURIComponent|eval|isFinite|isNaN|parseFloat|parseInt)\b/g,"sh_predef_func",-1],[/\b(?:applicationCache|closed|Components|content|controllers|crypto|defaultStatus|dialogArguments|directories|document|frameElement|frames|fullScreen|globalStorage|history|innerHeight|innerWidth|length|location|locationbar|menubar|name|navigator|opener|outerHeight|outerWidth|pageXOffset|pageYOffset|parent|personalbar|pkcs11|returnValue|screen|availTop|availLeft|availHeight|availWidth|colorDepth|height|left|pixelDepth|top|width|screenX|screenY|scrollbars|scrollMaxX|scrollMaxY|scrollX|scrollY|self|sessionStorage|sidebar|status|statusbar|toolbar|top|window)\b/g,"sh_predef_var",-1],[/\b(?:alert|addEventListener|atob|back|blur|btoa|captureEvents|clearInterval|clearTimeout|close|confirm|dump|escape|find|focus|forward|getAttention|getComputedStyle|getSelection|home|moveBy|moveTo|open|openDialog|postMessage|print|prompt|releaseEvents|removeEventListener|resizeBy|resizeTo|scroll|scrollBy|scrollByLines|scrollByPages|scrollTo|setInterval|setTimeout|showModalDialog|sizeToContent|stop|unescape|updateCommands|onabort|onbeforeunload|onblur|onchange|onclick|onclose|oncontextmenu|ondragdrop|onerror|onfocus|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmousemove|onmouseout|onmouseover|onmouseup|onpaint|onreset|onresize|onscroll|onselect|onsubmit|onunload)\b/g,"sh_predef_func",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",5]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",3]],[[/$/g,null,-2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",2,1],[/<!DOCTYPE/g,"sh_preproc",4,1],[/<!--/g,"sh_comment",5],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",6,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",6,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/"/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/'/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.perl=[[[/\b(?:import)\b/g,"sh_preproc",-1],[/(s)(\{(?:\\\}|[^}])*\}\{(?:\\\}|[^}])*\})([ixsmogce]*)/g,["sh_keyword","sh_regexp","sh_keyword"],-1],[/(s)(\((?:\\\)|[^)])*\)\((?:\\\)|[^)])*\))([ixsmogce]*)/g,["sh_keyword","sh_regexp","sh_keyword"],-1],[/(s)(\[(?:\\\]|[^\]])*\]\[(?:\\\]|[^\]])*\])([ixsmogce]*)/g,["sh_keyword","sh_regexp","sh_keyword"],-1],[/(s)(<.*><.*>)([ixsmogce]*)/g,["sh_keyword","sh_regexp","sh_keyword"],-1],[/(q(?:q?))(\{(?:\\\}|[^}])*\})/g,["sh_keyword","sh_string"],-1],[/(q(?:q?))(\((?:\\\)|[^)])*\))/g,["sh_keyword","sh_string"],-1],[/(q(?:q?))(\[(?:\\\]|[^\]])*\])/g,["sh_keyword","sh_string"],-1],[/(q(?:q?))(<.*>)/g,["sh_keyword","sh_string"],-1],[/(q(?:q?))([^A-Za-z0-9 \t])(.*\2)/g,["sh_keyword","sh_string","sh_string"],-1],[/(s)([^A-Za-z0-9 \t])(.*\2.*\2)([ixsmogce]*(?=[ \t]*(?:\)|;)))/g,["sh_keyword","sh_regexp","sh_regexp","sh_keyword"],-1],[/(s)([^A-Za-z0-9 \t])(.*\2[ \t]*)([^A-Za-z0-9 \t])(.*\4)([ixsmogce]*(?=[ \t]*(?:\)|;)))/g,["sh_keyword","sh_regexp","sh_regexp","sh_regexp","sh_regexp","sh_keyword"],-1],[/#/g,"sh_comment",1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/(?:m|qr)(?=\{)/g,"sh_keyword",2],[/(?:m|qr)(?=#)/g,"sh_keyword",4],[/(?:m|qr)(?=\|)/g,"sh_keyword",6],[/(?:m|qr)(?=@)/g,"sh_keyword",8],[/(?:m|qr)(?=<)/g,"sh_keyword",10],[/(?:m|qr)(?=\[)/g,"sh_keyword",12],[/(?:m|qr)(?=\\)/g,"sh_keyword",14],[/(?:m|qr)(?=\/)/g,"sh_keyword",16],[/"/g,"sh_string",18],[/'/g,"sh_string",19],[/</g,"sh_string",20],[/\/[^\n]*\//g,"sh_string",-1],[/\b(?:chomp|chop|chr|crypt|hex|i|index|lc|lcfirst|length|oct|ord|pack|q|qq|reverse|rindex|sprintf|substr|tr|uc|ucfirst|m|s|g|qw|abs|atan2|cos|exp|hex|int|log|oct|rand|sin|sqrt|srand|my|local|our|delete|each|exists|keys|values|pack|read|syscall|sysread|syswrite|unpack|vec|undef|unless|return|length|grep|sort|caller|continue|dump|eval|exit|goto|last|next|redo|sub|wantarray|pop|push|shift|splice|unshift|split|switch|join|defined|foreach|last|chop|chomp|bless|dbmclose|dbmopen|ref|tie|tied|untie|while|next|map|eq|die|cmp|lc|uc|and|do|if|else|elsif|for|use|require|package|import|chdir|chmod|chown|chroot|fcntl|glob|ioctl|link|lstat|mkdir|open|opendir|readlink|rename|rmdir|stat|symlink|umask|unlink|utime|binmode|close|closedir|dbmclose|dbmopen|die|eof|fileno|flock|format|getc|print|printf|read|readdir|rewinddir|seek|seekdir|select|syscall|sysread|sysseek|syswrite|tell|telldir|truncate|warn|write|alarm|exec|fork|getpgrp|getppid|getpriority|kill|pipe|qx|setpgrp|setpriority|sleep|system|times|x|wait|waitpid)\b/g,"sh_keyword",-1],[/^\=(?:head1|head2|item)/g,"sh_comment",21],[/(?:\$[#]?|@|%)[\/A-Za-z0-9_]+/g,"sh_variable",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1]],[[/$/g,null,-2]],[[/\{/g,"sh_regexp",3]],[[/[ \t]+#.*/g,"sh_comment",-1],[/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,"sh_variable",-1],[/\\\{|\\\}|\}/g,"sh_regexp",-3]],[[/#/g,"sh_regexp",5]],[[/[ \t]+#.*/g,"sh_comment",-1],[/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,"sh_variable",-1],[/\\#|#/g,"sh_regexp",-3]],[[/\|/g,"sh_regexp",7]],[[/[ \t]+#.*/g,"sh_comment",-1],[/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,"sh_variable",-1],[/\\\||\|/g,"sh_regexp",-3]],[[/@/g,"sh_regexp",9]],[[/[ \t]+#.*/g,"sh_comment",-1],[/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,"sh_variable",-1],[/\\@|@/g,"sh_regexp",-3]],[[/</g,"sh_regexp",11]],[[/[ \t]+#.*/g,"sh_comment",-1],[/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,"sh_variable",-1],[/\\<|\\>|>/g,"sh_regexp",-3]],[[/\[/g,"sh_regexp",13]],[[/[ \t]+#.*/g,"sh_comment",-1],[/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,"sh_variable",-1],[/\\]|\]/g,"sh_regexp",-3]],[[/\\/g,"sh_regexp",15]],[[/[ \t]+#.*/g,"sh_comment",-1],[/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,"sh_variable",-1],[/\\\\|\\/g,"sh_regexp",-3]],[[/\//g,"sh_regexp",17]],[[/[ \t]+#.*/g,"sh_comment",-1],[/\$(?:[A-Za-z0-9_]+|\{[A-Za-z0-9_]+\})/g,"sh_variable",-1],[/\\\/|\//g,"sh_regexp",-3]],[[/$/g,null,-2],[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/$/g,null,-2],[/\\(?:\\|')/g,null,-1],[/'/g,"sh_string",-2]],[[/$/g,null,-2],[/>/g,"sh_string",-2]],[[/\=cut/g,"sh_comment",-2]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.php=[[[/\b(?:include|include_once|require|require_once)\b/g,"sh_preproc",-1],[/\/\//g,"sh_comment",1],[/#/g,"sh_comment",1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",2],[/'/g,"sh_string",3],[/\b(?:and|or|xor|__FILE__|exception|php_user_filter|__LINE__|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|each|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|for|foreach|function|global|if|isset|list|new|old_function|print|return|static|switch|unset|use|var|while|__FUNCTION__|__CLASS__|__METHOD__)\b/g,"sh_keyword",-1],[/\/\/\//g,"sh_comment",4],[/\/\//g,"sh_comment",1],[/\/\*\*/g,"sh_comment",9],[/\/\*/g,"sh_comment",10],[/(?:\$[#]?|@|%)[A-Za-z0-9_]+/g,"sh_variable",-1],[/<\?php|~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\{|\}/g,"sh_cbracket",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1]],[[/$/g,null,-2]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/\\(?:\\|')/g,null,-1],[/'/g,"sh_string",-2]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",5,1],[/<!DOCTYPE/g,"sh_preproc",6,1],[/<!--/g,"sh_comment",7],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",8,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",8,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",7]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",5,1],[/<!DOCTYPE/g,"sh_preproc",6,1],[/<!--/g,"sh_comment",7],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",8,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",8,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.python=[[[/\b(?:import|from)\b/g,"sh_preproc",-1],[/#/g,"sh_comment",1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/\b(?:and|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|global|if|in|is|lambda|not|or|pass|print|raise|return|try|while)\b/g,"sh_keyword",-1],[/^(?:[\s]*'{3})/g,"sh_comment",2],[/^(?:[\s]*\"{3})/g,"sh_comment",3],[/^(?:[\s]*'(?:[^\\']|\\.)*'[\s]*|[\s]*\"(?:[^\\\"]|\\.)*\"[\s]*)$/g,"sh_comment",-1],[/(?:[\s]*'{3})/g,"sh_string",4],[/(?:[\s]*\"{3})/g,"sh_string",5],[/"/g,"sh_string",6],[/'/g,"sh_string",7],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\||\{|\}/g,"sh_symbol",-1],[/(?:[A-Za-z]|_)[A-Za-z0-9_]*(?=[ \t]*\()/g,"sh_function",-1]],[[/$/g,null,-2]],[[/(?:'{3})/g,"sh_comment",-2]],[[/(?:\"{3})/g,"sh_comment",-2]],[[/(?:'{3})/g,"sh_string",-2]],[[/(?:\"{3})/g,"sh_string",-2]],[[/$/g,null,-2],[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/$/g,null,-2],[/\\(?:\\|')/g,null,-1],[/'/g,"sh_string",-2]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.ruby=[[[/\b(?:require)\b/g,"sh_preproc",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1],[/"/g,"sh_string",1],[/'/g,"sh_string",2],[/</g,"sh_string",3],[/\/[^\n]*\//g,"sh_regexp",-1],[/(%r)(\{(?:\\\}|#\{[A-Za-z0-9]+\}|[^}])*\})/g,["sh_symbol","sh_regexp"],-1],[/\b(?:alias|begin|BEGIN|break|case|defined|do|else|elsif|end|END|ensure|for|if|in|include|loop|next|raise|redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield|false|nil|self|true|__FILE__|__LINE__|and|not|or|def|class|module|catch|fail|load|throw)\b/g,"sh_keyword",-1],[/(?:^\=begin)/g,"sh_comment",4],[/(?:\$[#]?|@@|@)(?:[A-Za-z0-9_]+|'|\"|\/)/g,"sh_type",-1],[/[A-Za-z0-9]+(?:\?|!)/g,"sh_normal",-1],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/(#)(\{)/g,["sh_symbol","sh_cbracket"],-1],[/#/g,"sh_comment",5],[/\{|\}/g,"sh_cbracket",-1]],[[/$/g,null,-2],[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/$/g,null,-2],[/\\(?:\\|')/g,null,-1],[/'/g,"sh_string",-2]],[[/$/g,null,-2],[/>/g,"sh_string",-2]],[[/^(?:\=end)/g,"sh_comment",-2]],[[/$/g,null,-2]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.sql=[[[/\b(?:VARCHAR|TINYINT|TEXT|DATE|SMALLINT|MEDIUMINT|INT|BIGINT|FLOAT|DOUBLE|DECIMAL|DATETIME|TIMESTAMP|TIME|YEAR|UNSIGNED|CHAR|TINYBLOB|TINYTEXT|BLOB|MEDIUMBLOB|MEDIUMTEXT|LONGBLOB|LONGTEXT|ENUM|BOOL|BINARY|VARBINARY)\b/gi,"sh_type",-1],[/\b(?:ALL|ASC|AS|ALTER|AND|ADD|AUTO_INCREMENT|BETWEEN|BINARY|BOTH|BY|BOOLEAN|CHANGE|CHECK|COLUMNS|COLUMN|CROSS|CREATE|DATABASES|DATABASE|DATA|DELAYED|DESCRIBE|DESC|DISTINCT|DELETE|DROP|DEFAULT|ENCLOSED|ESCAPED|EXISTS|EXPLAIN|FIELDS|FIELD|FLUSH|FOR|FOREIGN|FUNCTION|FROM|GROUP|GRANT|HAVING|IGNORE|INDEX|INFILE|INSERT|INNER|INTO|IDENTIFIED|IN|IS|IF|JOIN|KEYS|KILL|KEY|LEADING|LIKE|LIMIT|LINES|LOAD|LOCAL|LOCK|LOW_PRIORITY|LEFT|LANGUAGE|MODIFY|NATURAL|NOT|NULL|NEXTVAL|OPTIMIZE|OPTION|OPTIONALLY|ORDER|OUTFILE|OR|OUTER|ON|PROCEDURE|PROCEDURAL|PRIMARY|READ|REFERENCES|REGEXP|RENAME|REPLACE|RETURN|REVOKE|RLIKE|RIGHT|SHOW|SONAME|STATUS|STRAIGHT_JOIN|SELECT|SETVAL|SET|TABLES|TERMINATED|TO|TRAILING|TRUNCATE|TABLE|TEMPORARY|TRIGGER|TRUSTED|UNIQUE|UNLOCK|USE|USING|UPDATE|VALUES|VARIABLES|VIEW|WITH|WRITE|WHERE|ZEROFILL|TYPE|XOR)\b/gi,"sh_keyword",-1],[/"/g,"sh_string",1],[/'/g,"sh_string",2],[/`/g,"sh_string",3],[/#/g,"sh_comment",4],[/\/\/\//g,"sh_comment",5],[/\/\//g,"sh_comment",4],[/\/\*\*/g,"sh_comment",11],[/\/\*/g,"sh_comment",12],[/--/g,"sh_comment",4],[/~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,"sh_symbol",-1],[/\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,"sh_number",-1]],[[/"/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/'/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/`/g,"sh_string",-2],[/\\./g,"sh_specialchar",-1]],[[/$/g,null,-2]],[[/$/g,null,-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",6,1],[/<!DOCTYPE/g,"sh_preproc",8,1],[/<!--/g,"sh_comment",9],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",10,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",10,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",7]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",7]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",9]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",7]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/<\?xml/g,"sh_preproc",6,1],[/<!DOCTYPE/g,"sh_preproc",8,1],[/<!--/g,"sh_comment",9],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",10,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z][A-Za-z0-9]*/g,"sh_keyword",10,1],[/@[A-Za-z]+/g,"sh_type",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]],[[/\*\//g,"sh_comment",-2],[/(?:<?)[A-Za-z0-9_\.\/\-_~]+@[A-Za-z0-9_\.\/\-_~]+(?:>?)|(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_~]+(?:>?)/g,"sh_url",-1],[/(?:TODO|FIXME|BUG)(?:[:]?)/g,"sh_todo",-1]]];if(!this.sh_languages){this.sh_languages={}}sh_languages.url=[[{regex:/(?:<?)[A-Za-z0-9_\.\/\-_]+@[A-Za-z0-9_\.\/\-_]+(?:>?)/g,style:"sh_url"},{regex:/(?:<?)[A-Za-z0-9_]+:\/\/[A-Za-z0-9_\.\/\-_]+(?:>?)/g,style:"sh_url"}]];if(!this.sh_languages){this.sh_languages={}}sh_languages.xml=[[[/<\?xml/g,"sh_preproc",1,1],[/<!DOCTYPE/g,"sh_preproc",3,1],[/<!--/g,"sh_comment",4],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)(?:\/)?>/g,"sh_keyword",-1],[/<(?:\/)?[A-Za-z](?:[A-Za-z0-9_:.-]*)/g,"sh_keyword",5,1],[/&(?:[A-Za-z0-9]+);/g,"sh_preproc",-1]],[[/\?>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/\\(?:\\|")/g,null,-1],[/"/g,"sh_string",-2]],[[/>/g,"sh_preproc",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]],[[/-->/g,"sh_comment",-2],[/<!--/g,"sh_comment",4]],[[/(?:\/)?>/g,"sh_keyword",-2],[/([^=" \t>]+)([ \t]*)(=?)/g,["sh_type","sh_normal","sh_symbol"],-1],[/"/g,"sh_string",2]]];(function(c){var a=c.scrollTo=function(d,f,g){c(window).scrollTo(d,f,g)};a.defaults={axis:"xy",duration:parseFloat(c.fn.jquery)>=1.3?0:1};a.window=function(d){return c(window)._scrollable()};c.fn._scrollable=function(){return this.map(function(){var d=this,f=!d.nodeName||c.inArray(d.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!f){return d}var g=(d.contentWindow||d).document||d.ownerDocument||d;return c.browser.safari||g.compatMode=="BackCompat"?g.body:g.documentElement})};c.fn.scrollTo=function(f,e,d){if(typeof e=="object"){d=e;e=0}if(typeof d=="function"){d={onAfter:d}}if(f=="max"){f=9000000000}d=c.extend({},a.defaults,d);e=e||d.speed||d.duration;d.queue=d.queue&&d.axis.length>1;if(d.queue){e/=2}d.offset=b(d.offset);d.over=b(d.over);return this._scrollable().each(function(){var n=this,l=c(n),m=f,j,k={},h=l.is("html,body");switch(typeof m){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(m)){m=b(m);break}m=c(m,this);case"object":if(m.is||m.style){j=(m=c(m)).offset()}}c.each(d.axis.split(""),function(q,r){var t=r=="x"?"Left":"Top",s=t.toLowerCase(),v="scroll"+t,p=n[v],g=a.max(n,r);if(j){k[v]=j[s]+(h?0:p-l.offset()[s]);if(d.margin){k[v]-=parseInt(m.css("margin"+t))||0;k[v]-=parseInt(m.css("border"+t+"Width"))||0}k[v]+=d.offset[s]||0;if(d.over[s]){k[v]+=m[r=="x"?"width":"height"]()*d.over[s]}}else{var u=m[s];k[v]=u.slice&&u.slice(-1)=="%"?parseFloat(u)/100*g:u}if(/^\d+$/.test(k[v])){k[v]=k[v]<=0?0:Math.min(k[v],g)}if(!q&&d.queue){if(p!=k[v]){i(d.onAfterFirst)}delete k[v]}});i(d.onAfter);function i(g){l.animate(k,e,d.easing,g&&function(){g.call(this,f,d)})}}).end()};a.max=function(g,j){var n=j=="x"?"Width":"Height",k="scroll"+n;if(!c(g).is("html,body")){return g[k]-c(g)[n.toLowerCase()]()}var o="client"+n,f=g.ownerDocument.documentElement,d=g.ownerDocument.body;return Math.max(f[k],d[k])-Math.min(f[o],d[o])};function b(d){return typeof d=="object"?d:{top:d,left:d}}})(jQuery);function initDemos(){var b=new Array();var c=$("#tip");var a=c.css("top").substring(0,2)*1;$("#submenu > ul > li").each(function(d){$(this).bind("click",function(){var g=$(this).css("font-size").substring(0,2)*1;var e=$(this).css("margin-bottom").substring(0,2)*1;var f=(g+e)*d;c.css("top",f+"px");if(!$(this).hasClass("active")){$("#submenu > ul > li").each(function(){$(this).removeClass("active")});$(this).addClass("active")}$("#democontainer > li").each(function(h){$(this).hide();if(d===h){$(this).show();initGauges(h)}});return false})});$("pre.js").snippet("javascript",{style:"matlab",menu:false,showNum:false});$("pre.html").snippet("html",{style:"matlab",menu:false,showNum:false});$(".mainMenu a[rel]").each(function(d){$(this).bind("click",function(){$.scrollTo($("#"+$(this).attr("rel")),500)})});$("#tweet").bind("click",function(){var f=575,d=400,i=($(window).width()-f)/2,h=($(window).height()-d)/2,e=this.href,g="status=1,width="+f+",height="+d+",top="+h+",left="+i;window.open(e,"twitter",g);return false});g1=new JustGage({id:"g1",value:67,min:0,max:100,title:"Visitors",label:"per minute"});g1a=new JustGage({id:"g1a",value:45,min:0,max:100,title:"Errors",label:"average"});g2=new JustGage({id:"g2",value:15,min:0,max:100,title:"Timers",label:""});g2a=new JustGage({id:"g2a",value:7,min:0,max:100,title:"Alerts",label:""});g2b=new JustGage({id:"g2b",value:22,min:0,max:100,title:"Events",label:""});setInterval(function(){g1.refresh(getRandomInt(50,100));g1a.refresh(getRandomInt(50,100));g2.refresh(getRandomInt(0,50));g2a.refresh(getRandomInt(0,50));g2b.refresh(getRandomInt(0,50))},2000)}function initGauges(h){switch(h){case 0:if(loaded[0]===false){var j=new JustGage({id:"g3",value:getRandomInt(0,100),min:0,max:100,title:"Big Fella",label:""});var i=new JustGage({id:"g4",value:getRandomInt(0,100),min:0,max:100,title:"Small Buddy",label:""});var d=new JustGage({id:"g4a",value:getRandomInt(0,100),min:0,max:100,title:"Tiny Lad",label:""});var b=new JustGage({id:"g4b",value:getRandomInt(0,100),min:0,max:100,title:"Little Pal",label:""});$("#r1").bind("click",function(){j.refresh(getRandomInt(0,100));i.refresh(getRandomInt(0,100));d.refresh(getRandomInt(0,100));b.refresh(getRandomInt(0,100))})}loaded[0]=true;break;case 1:if(loaded[1]===false){g5=new JustGage({id:"g5",value:getRandomInt(350,980),min:350,max:980,title:"Lone Ranger",label:"miles traveled"});g6=new JustGage({id:"g6",value:32,min:50,max:100,title:"Empty Tank",label:""});g7=new JustGage({id:"g7",value:120,min:50,max:100,title:"Meltdown",label:""});$("#r2").bind("click",function(){g5.refresh(getRandomInt(350,980));g6.refresh(getRandomInt(0,50));g7.refresh(getRandomInt(100,200))})}loaded[1]=true;break;case 2:if(loaded[2]===false){g8=new JustGage({id:"g8",value:getRandomInt(0,32),min:0,max:100,title:"Green",label:"",levelColorsGradient:false});g9=new JustGage({id:"g9",value:getRandomInt(34,65),min:0,max:100,title:"Yellow",label:"",levelColorsGradient:false});g10=new JustGage({id:"g10",value:getRandomInt(66,100),min:0,max:100,title:"Red",label:"",levelColorsGradient:false});$("#r3").bind("click",function(){g8.refresh(getRandomInt(0,32));g9.refresh(getRandomInt(33,65));g10.refresh(getRandomInt(66,100))})}loaded[2]=true;break;case 3:if(loaded[3]===false){var g=new JustGage({id:"g11",value:getRandomInt(0,100),min:0,max:100,title:"Custom Width",label:"",gaugeWidthScale:0.2});var f=new JustGage({id:"g12",value:getRandomInt(0,100),min:0,max:100,title:"Custom Shadow",label:"",shadowOpacity:1,shadowSize:0,shadowVerticalOffset:10});var e=new JustGage({id:"g13",value:getRandomInt(0,100),min:0,max:100,title:"Custom Colors",label:"",levelColors:["#00fff6","#ff00fc","#1200ff"]});var c=new JustGage({id:"g14",value:getRandomInt(0,100),min:0,max:100,title:"Hide Labels",showMinMax:false});var a=new JustGage({id:"g15",value:getRandomInt(0,100),min:0,max:100,title:"Animation Type",label:"",startAnimationTime:2000,startAnimationType:">",refreshAnimationTime:1000,refreshAnimationType:"bounce"});var k=new JustGage({id:"g16",value:getRandomInt(0,100),min:0,max:100,title:"Minimal",label:"",showMinMax:false,gaugeColor:"#fff",levelColors:["#000"],showInnerShadow:false,startAnimationTime:1,startAnimationType:"linear",refreshAnimationTime:1,refreshAnimationType:"linear"});$("#r4").bind("click",function(){g.refresh(getRandomInt(0,100));f.refresh(getRandomInt(0,100));e.refresh(getRandomInt(0,100));c.refresh(getRandomInt(0,100));a.refresh(getRandomInt(0,100));k.refresh(getRandomInt(0,100))})}loaded[3]=true;break}};
/*
 * Toastr
 * Copyright 2012-2015
 * Authors: John Papa, Hans FjÃ¤llemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
/* global define */
; (function (define) {
    define(['jquery'], function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {},
                subscribe: subscribe,
                success: success,
                version: '2.1.1',
                warning: warning
            };

            var previousToast;

            return toastr;

            ////////////////

            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function getContainer(options, create) {
                if (!options) { options = getOptions(); }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function subscribe(callback) {
                listener = callback;
            }

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }

            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }

            // internal functions

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
                }
            }

            function clearToast ($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); }
                    });
                    return true;
                }
                return false;
            }

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass)
                    .attr('aria-live', 'polite')
                    .attr('role', 'alert');

                $container.appendTo($(options.target));
                return $container;
            }

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false
                };
            }

            function publish(args) {
                if (!listener) { return; }
                listener(args);
            }

            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }

                if (shouldExit(options, map)) { return; }

                toastId++;

                $container = getContainer(options, true);

                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };

                personalizeToast();

                displayToast();

                handleEvents();

                publish(response);

                if (options.debug && console) {
                    console.log(response);
                }

                return $toastElement;

                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setSequence();
                }

                function handleEvents() {
                    $toastElement.hover(stickAround, delayedHideToast);
                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }

                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function (event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }
                            hideToast(true);
                        });
                    }

                    if (options.onclick) {
                        $toastElement.click(function () {
                            options.onclick();
                            hideToast();
                        });
                    }
                }

                function displayToast() {
                    $toastElement.hide();

                    $toastElement[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing, complete: options.onShown}
                    );

                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }

                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }

                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }

                function setTitle() {
                    if (map.title) {
                        $titleElement.append(map.title).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }

                function setMessage() {
                    if (map.message) {
                        $messageElement.append(map.message).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }

                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass('toast-close-button').attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }

                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass('toast-progress');
                        $toastElement.prepend($progressElement);
                    }
                }

                function shouldExit(options, map) {
                    if (options.preventDuplicates) {
                        if (map.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map.message;
                        }
                    }
                    return false;
                }

                function hideToast(override) {
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () {
                            removeToast($toastElement);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing}
                    );
                }

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
                }
            }

            function getOptions() {
                return $.extend({}, getDefaults(), toastr.options);
            }

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }

        })();
    });
}(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
    } else {
        window['toastr'] = factory(window['jQuery']);
    }
}));
toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "2200",
  "timeOut": "2200",
  "extendedTimeOut": "2200",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
