(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1832:function(e,t,n){
/*! @license DOMPurify 2.5.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.0/LICENSE */
e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return(r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a}).apply(null,arguments)}function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var i=Object.hasOwnProperty,l=Object.setPrototypeOf,c=Object.isFrozen,s=Object.getPrototypeOf,u=Object.getOwnPropertyDescriptor,m=Object.freeze,f=Object.seal,p=Object.create,d="undefined"!=typeof Reflect&&Reflect,h=d.apply,g=d.construct;h||(h=function(e,t,n){return e.apply(t,n)}),m||(m=function(e){return e}),f||(f=function(e){return e}),g||(g=function(e,t){return r(e,o(t))});var y,b=O(Array.prototype.forEach),T=O(Array.prototype.pop),v=O(Array.prototype.push),N=O(String.prototype.toLowerCase),E=O(String.prototype.toString),A=O(String.prototype.match),w=O(String.prototype.replace),S=O(String.prototype.indexOf),_=O(String.prototype.trim),x=O(RegExp.prototype.test),k=(y=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return g(y,t)});function O(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return h(e,t,r)}}function L(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:N,l&&l(e,null);for(var o=t.length;o--;){var a=t[o];if("string"==typeof a){var i=n(a);i!==a&&(c(t)||(t[o]=i),a=i)}e[a]=!0}return e}function C(e){var t,n=p(null);for(t in e)!0===h(i,e,[t])&&(n[t]=e[t]);return n}function R(e,t){for(;null!==e;){var n=u(e,t);if(n){if(n.get)return O(n.get);if("function"==typeof n.value)return O(n.value)}e=s(e)}return function(e){return console.warn("fallback value for",e),null}}var D=m(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),M=m(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),I=m(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),F=m(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),U=m(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),H=m(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),z=m(["#text"]),P=m(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),B=m(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),j=m(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),G=m(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),W=f(/\{\{[\w\W]*|[\w\W]*\}\}/gm),q=f(/<%[\w\W]*|[\w\W]*%>/gm),Y=f(/\${[\w\W]*}/gm),$=f(/^data-[\-\w.\u00B7-\uFFFF]/),K=f(/^aria-[\-\w]+$/),V=f(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),X=f(/^(?:\w+script|data):/i),J=f(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Z=f(/^html$/i),Q=f(/^[a-z][.\w]*(-[.\w]+)+$/i),ee=function(){return"undefined"==typeof window?null:window},te=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null;n.currentScript&&n.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=n.currentScript.getAttribute("data-tt-policy-suffix"));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee(),r=function(e){return t(e)};if(r.version="2.5.0",r.removed=[],!n||!n.document||9!==n.document.nodeType)return r.isSupported=!1,r;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,s=n.Node,u=n.Element,f=n.NodeFilter,p=n.NamedNodeMap,d=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,g=n.DOMParser,y=n.trustedTypes,O=u.prototype,ne=R(O,"cloneNode"),re=R(O,"nextSibling"),oe=R(O,"childNodes"),ae=R(O,"parentNode");if("function"==typeof c){var ie=i.createElement("template");ie.content&&ie.content.ownerDocument&&(i=ie.content.ownerDocument)}var le=te(y,a),ce=le?le.createHTML(""):"",se=i,ue=se.implementation,me=se.createNodeIterator,fe=se.createDocumentFragment,pe=se.getElementsByTagName,de=a.importNode,he={};try{he=C(i).documentMode?i.documentMode:{}}catch(e){}var ge={};r.isSupported="function"==typeof ae&&ue&&void 0!==ue.createHTMLDocument&&9!==he;var ye,be,Te=W,ve=q,Ne=Y,Ee=$,Ae=K,we=X,Se=J,_e=Q,xe=V,ke=null,Oe=L({},[].concat(o(D),o(M),o(I),o(U),o(z))),Le=null,Ce=L({},[].concat(o(P),o(B),o(j),o(G))),Re=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Me=null,Ie=!0,Fe=!0,Ue=!1,He=!0,ze=!1,Pe=!0,Be=!1,je=!1,Ge=!1,We=!1,qe=!1,Ye=!1,$e=!0,Ke=!1,Ve="user-content-",Xe=!0,Je=!1,Ze={},Qe=null,et=L({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,nt=L({},["audio","video","img","source","image","track"]),rt=null,ot=L({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),at="http://www.w3.org/1998/Math/MathML",it="http://www.w3.org/2000/svg",lt="http://www.w3.org/1999/xhtml",ct=lt,st=!1,ut=null,mt=L({},[at,it,lt],E),ft=["application/xhtml+xml","text/html"],pt="text/html",dt=null,ht=i.createElement("form"),gt=function(e){return e instanceof RegExp||e instanceof Function},yt=function(t){dt&&dt===t||(t&&"object"===e(t)||(t={}),t=C(t),ye=ye=-1===ft.indexOf(t.PARSER_MEDIA_TYPE)?pt:t.PARSER_MEDIA_TYPE,be="application/xhtml+xml"===ye?E:N,ke="ALLOWED_TAGS"in t?L({},t.ALLOWED_TAGS,be):Oe,Le="ALLOWED_ATTR"in t?L({},t.ALLOWED_ATTR,be):Ce,ut="ALLOWED_NAMESPACES"in t?L({},t.ALLOWED_NAMESPACES,E):mt,rt="ADD_URI_SAFE_ATTR"in t?L(C(ot),t.ADD_URI_SAFE_ATTR,be):ot,tt="ADD_DATA_URI_TAGS"in t?L(C(nt),t.ADD_DATA_URI_TAGS,be):nt,Qe="FORBID_CONTENTS"in t?L({},t.FORBID_CONTENTS,be):et,De="FORBID_TAGS"in t?L({},t.FORBID_TAGS,be):{},Me="FORBID_ATTR"in t?L({},t.FORBID_ATTR,be):{},Ze="USE_PROFILES"in t&&t.USE_PROFILES,Ie=!1!==t.ALLOW_ARIA_ATTR,Fe=!1!==t.ALLOW_DATA_ATTR,Ue=t.ALLOW_UNKNOWN_PROTOCOLS||!1,He=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,ze=t.SAFE_FOR_TEMPLATES||!1,Pe=!1!==t.SAFE_FOR_XML,Be=t.WHOLE_DOCUMENT||!1,We=t.RETURN_DOM||!1,qe=t.RETURN_DOM_FRAGMENT||!1,Ye=t.RETURN_TRUSTED_TYPE||!1,Ge=t.FORCE_BODY||!1,$e=!1!==t.SANITIZE_DOM,Ke=t.SANITIZE_NAMED_PROPS||!1,Xe=!1!==t.KEEP_CONTENT,Je=t.IN_PLACE||!1,xe=t.ALLOWED_URI_REGEXP||xe,ct=t.NAMESPACE||lt,Re=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&gt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Re.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&gt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Re.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Re.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ze&&(Fe=!1),qe&&(We=!0),Ze&&(ke=L({},o(z)),Le=[],!0===Ze.html&&(L(ke,D),L(Le,P)),!0===Ze.svg&&(L(ke,M),L(Le,B),L(Le,G)),!0===Ze.svgFilters&&(L(ke,I),L(Le,B),L(Le,G)),!0===Ze.mathMl&&(L(ke,U),L(Le,j),L(Le,G))),t.ADD_TAGS&&(ke===Oe&&(ke=C(ke)),L(ke,t.ADD_TAGS,be)),t.ADD_ATTR&&(Le===Ce&&(Le=C(Le)),L(Le,t.ADD_ATTR,be)),t.ADD_URI_SAFE_ATTR&&L(rt,t.ADD_URI_SAFE_ATTR,be),t.FORBID_CONTENTS&&(Qe===et&&(Qe=C(Qe)),L(Qe,t.FORBID_CONTENTS,be)),Xe&&(ke["#text"]=!0),Be&&L(ke,["html","head","body"]),ke.table&&(L(ke,["tbody"]),delete De.tbody),m&&m(t),dt=t)},bt=L({},["mi","mo","mn","ms","mtext"]),Tt=L({},["foreignobject","desc","title","annotation-xml"]),vt=L({},["title","style","font","a","script"]),Nt=L({},M);L(Nt,I),L(Nt,F);var Et=L({},U);L(Et,H);var At=function(e){var t=ae(e);t&&t.tagName||(t={namespaceURI:ct,tagName:"template"});var n=N(e.tagName),r=N(t.tagName);return!!ut[e.namespaceURI]&&(e.namespaceURI===it?t.namespaceURI===lt?"svg"===n:t.namespaceURI===at?"svg"===n&&("annotation-xml"===r||bt[r]):Boolean(Nt[n]):e.namespaceURI===at?t.namespaceURI===lt?"math"===n:t.namespaceURI===it?"math"===n&&Tt[r]:Boolean(Et[n]):e.namespaceURI===lt?!(t.namespaceURI===it&&!Tt[r])&&!(t.namespaceURI===at&&!bt[r])&&!Et[n]&&(vt[n]||!Nt[n]):!("application/xhtml+xml"!==ye||!ut[e.namespaceURI]))},wt=function(e){v(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(t){try{e.outerHTML=ce}catch(t){e.remove()}}},St=function(e,t){try{v(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){v(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Le[e])if(We||qe)try{wt(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},_t=function(e){var t,n;if(Ge)e="<remove></remove>"+e;else{var r=A(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ye&&ct===lt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=le?le.createHTML(e):e;if(ct===lt)try{t=(new g).parseFromString(o,ye)}catch(e){}if(!t||!t.documentElement){t=ue.createDocument(ct,"template",null);try{t.documentElement.innerHTML=st?ce:o}catch(e){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),ct===lt?pe.call(t,Be?"html":"body")[0]:Be?t.documentElement:a},xt=function(e){return me.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null,!1)},kt=function(e){return e instanceof h&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof d)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},Ot=function(t){return"object"===e(s)?t instanceof s:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},Lt=function(e,t,n){ge[e]&&b(ge[e],(function(e){e.call(r,t,n,dt)}))},Ct=function(e){var t;if(Lt("beforeSanitizeElements",e,null),kt(e))return wt(e),!0;if(x(/[\u0080-\uFFFF]/,e.nodeName))return wt(e),!0;var n=be(e.nodeName);if(Lt("uponSanitizeElement",e,{tagName:n,allowedTags:ke}),e.hasChildNodes()&&!Ot(e.firstElementChild)&&(!Ot(e.content)||!Ot(e.content.firstElementChild))&&x(/<[/\w]/g,e.innerHTML)&&x(/<[/\w]/g,e.textContent))return wt(e),!0;if("select"===n&&x(/<template/i,e.innerHTML))return wt(e),!0;if(7===e.nodeType)return wt(e),!0;if(Pe&&8===e.nodeType&&x(/<[/\w]/g,e.data))return wt(e),!0;if(!ke[n]||De[n]){if(!De[n]&&Dt(n)){if(Re.tagNameCheck instanceof RegExp&&x(Re.tagNameCheck,n))return!1;if(Re.tagNameCheck instanceof Function&&Re.tagNameCheck(n))return!1}if(Xe&&!Qe[n]){var o=ae(e)||e.parentNode,a=oe(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(ne(a[i],!0),re(e))}return wt(e),!0}return e instanceof u&&!At(e)?(wt(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!x(/<\/no(script|embed|frames)/i,e.innerHTML)?(ze&&3===e.nodeType&&(t=e.textContent,t=w(t,Te," "),t=w(t,ve," "),t=w(t,Ne," "),e.textContent!==t&&(v(r.removed,{element:e.cloneNode()}),e.textContent=t)),Lt("afterSanitizeElements",e,null),!1):(wt(e),!0)},Rt=function(e,t,n){if($e&&("id"===t||"name"===t)&&(n in i||n in ht))return!1;if(Fe&&!Me[t]&&x(Ee,t));else if(Ie&&x(Ae,t));else if(!Le[t]||Me[t]){if(!(Dt(e)&&(Re.tagNameCheck instanceof RegExp&&x(Re.tagNameCheck,e)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(e))&&(Re.attributeNameCheck instanceof RegExp&&x(Re.attributeNameCheck,t)||Re.attributeNameCheck instanceof Function&&Re.attributeNameCheck(t))||"is"===t&&Re.allowCustomizedBuiltInElements&&(Re.tagNameCheck instanceof RegExp&&x(Re.tagNameCheck,n)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(n))))return!1}else if(rt[t]);else if(x(xe,w(n,Se,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==S(n,"data:")||!tt[e])if(Ue&&!x(we,w(n,Se,"")));else if(n)return!1;return!0},Dt=function(e){return"annotation-xml"!==e&&A(e,_e)},Mt=function(t){var n,o,a,i;Lt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Le};for(i=l.length;i--;){var s=n=l[i],u=s.name,m=s.namespaceURI;if(o="value"===u?n.value:_(n.value),a=be(u),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,Lt("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(St(u,t),c.keepAttr))if(He||!x(/\/>/i,o)){ze&&(o=w(o,Te," "),o=w(o,ve," "),o=w(o,Ne," "));var f=be(t.nodeName);if(Rt(f,a,o)){if(!Ke||"id"!==a&&"name"!==a||(St(u,t),o=Ve+o),le&&"object"===e(y)&&"function"==typeof y.getAttributeType)if(m);else switch(y.getAttributeType(f,a)){case"TrustedHTML":o=le.createHTML(o);break;case"TrustedScriptURL":o=le.createScriptURL(o)}try{m?t.setAttributeNS(m,u,o):t.setAttribute(u,o),T(r.removed)}catch(e){}}}else St(u,t)}Lt("afterSanitizeAttributes",t,null)}},It=function e(t){var n,r=xt(t);for(Lt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Lt("uponSanitizeShadowNode",n,null),Ct(n)||(n.content instanceof l&&e(n.content),Mt(n));Lt("afterSanitizeShadowDOM",t,null)};return r.sanitize=function(t){var o,i,c,u,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((st=!t)&&(t="\x3c!--\x3e"),"string"!=typeof t&&!Ot(t)){if("function"!=typeof t.toString)throw k("toString is not a function");if("string"!=typeof(t=t.toString()))throw k("dirty is not a string, aborting")}if(!r.isSupported){if("object"===e(n.toStaticHTML)||"function"==typeof n.toStaticHTML){if("string"==typeof t)return n.toStaticHTML(t);if(Ot(t))return n.toStaticHTML(t.outerHTML)}return t}if(je||yt(f),r.removed=[],"string"==typeof t&&(Je=!1),Je){if(t.nodeName){var p=be(t.nodeName);if(!ke[p]||De[p])throw k("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof s)1===(i=(o=_t("\x3c!----\x3e")).ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?o=i:o.appendChild(i);else{if(!We&&!ze&&!Be&&-1===t.indexOf("<"))return le&&Ye?le.createHTML(t):t;if(!(o=_t(t)))return We?null:Ye?ce:""}o&&Ge&&wt(o.firstChild);for(var d=xt(Je?t:o);c=d.nextNode();)3===c.nodeType&&c===u||Ct(c)||(c.content instanceof l&&It(c.content),Mt(c),u=c);if(u=null,Je)return t;if(We){if(qe)for(m=fe.call(o.ownerDocument);o.firstChild;)m.appendChild(o.firstChild);else m=o;return(Le.shadowroot||Le.shadowrootmod)&&(m=de.call(a,m,!0)),m}var h=Be?o.outerHTML:o.innerHTML;return Be&&ke["!doctype"]&&o.ownerDocument&&o.ownerDocument.doctype&&o.ownerDocument.doctype.name&&x(Z,o.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+o.ownerDocument.doctype.name+">\n"+h),ze&&(h=w(h,Te," "),h=w(h,ve," "),h=w(h,Ne," ")),le&&Ye?le.createHTML(h):h},r.setConfig=function(e){yt(e),je=!0},r.clearConfig=function(){dt=null,je=!1},r.isValidAttribute=function(e,t,n){dt||yt({});var r=be(e),o=be(t);return Rt(r,o,n)},r.addHook=function(e,t){"function"==typeof t&&(ge[e]=ge[e]||[],v(ge[e],t))},r.removeHook=function(e){if(ge[e])return T(ge[e])},r.removeHooks=function(e){ge[e]&&(ge[e]=[])},r.removeAllHooks=function(){ge={}},r}()}()}}]);
//# sourceMappingURL=4.js.map