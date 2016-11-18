!function(){function e(e,t){if("undefined"==typeof document)return t;e=e||"";var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");return o.type="text/css",o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),n.appendChild(o),t}function t(e){return e&&e.__esModule?e.default:e}function n(e,t){return t={exports:{}},e(t,t.exports),t.exports}function o(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o),t=n.toString()}return t}function r(){}function i(e,t){for(;e&&e!==document;){if(e.matches(t))return e;e=e.parentNode}}function a(e,t,n,o,r){var i=c.apply(this,arguments);return e.addEventListener(n,i,r),{destroy:function(){e.removeEventListener(n,i,r)}}}function c(e,t,n,o){return function(n){n.delegateTarget=L(n.target,t),n.delegateTarget&&o.call(e,n)}}function l(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!_.string(t))throw new TypeError("Second argument must be a String");if(!_.fn(n))throw new TypeError("Third argument must be a Function");if(_.node(e))return s(e,t,n);if(_.nodeList(e))return u(e,t,n);if(_.string(e))return f(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function s(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}function u(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}function f(e,t,n){return j(document.body,e,t,n)}e('body,\nbody * {\n  display: block;\n  flex: none;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n  font-size: 16px;\n}\n',void 0);var d=(function(){function e(e){this.value=e}function t(t){function n(e,t){return new Promise(function(n,r){var c={key:e,arg:t,resolve:n,reject:r,next:null};a?a=a.next=c:(i=a=c,o(e,t))})}function o(n,i){try{var a=t[n](i),c=a.value;c instanceof e?Promise.resolve(c.value).then(function(e){o("next",e)},function(e){o("throw",e)}):r(a.done?"return":"normal",a.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":i.resolve({value:t,done:!0});break;case"throw":i.reject(t);break;default:i.resolve({value:t,done:!1})}i=i.next,i?o(i.key,i.arg):a=null}var i,a;this._invoke=n,"function"!=typeof t.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)},{wrap:function(e){return function(){return new t(e.apply(this,arguments))}},await:function(t){return new e(t)}}}(),function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}),h={},m=function(e,t){var n=this,o=h[e]||[];return o.map(function(e){return e.apply(n,t||[])})},p=function(e,t){return h[e]||(h[e]=[]),h[e].push(t),[e,t]},y=function(e){return"string"==typeof e?fetch(e).then(function(e){return e.json()}):Promise.resolve(e)},g=function(e){return function(t){return t.map(function(t){var n=document.createRange();n.selectNode(document.body);var o=n.createContextualFragment(e(t).trim());return o.data=t,o})}},v=function(e){return function(t){return function(n){return function(o){return o.forEach(function(o){return[].concat(d(o.querySelectorAll(e))).forEach(function(e){return e.addEventListener(t,n.bind(o))})})?o:o}}}},b=function(e){return function(t){return t.forEach(function(t){return e.appendChild(t)})}},x="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},w=o,k=n(function(e,t){!function(n,o){if("function"==typeof define&&define.amd)define(["module","select"],o);else if("undefined"!=typeof t)o(e,w);else{var r={exports:{}};o(r,n.select),n.clipboardAction=r.exports}}(x,function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(t),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),c=function(){function e(t){o(this,e),this.resolveOptions(t),this.initSelection()}return a(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=document.body.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.addEventListener("focus",window.scrollTo(0,n)),this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=(0,r.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(document.body.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,r.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==("undefined"==typeof e?"undefined":i(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=c})});r.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){function o(){r.off(e,o),t.apply(n,arguments)}var r=this;return o._=t,this.on(e,o,n)},emit:function(e){var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,r=n.length;for(o;o<r;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],r=[];if(o&&t)for(var i=0,a=o.length;i<a;i++)o[i].fn!==t&&o[i].fn._!==t&&r.push(o[i]);return r.length?n[e]=r:delete n[e],this}};var E=r,T=n(function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){var t=Object.prototype.toString.call(e);return"[object Function]"===t}});if(Element&&!Element.prototype.matches){var S=Element.prototype;S.matches=S.matchesSelector||S.mozMatchesSelector||S.msMatchesSelector||S.oMatchesSelector||S.webkitMatchesSelector}var C=i,L=C,A=a,_=T,j=A,O=l,H=n(function(e,t){!function(n,o){if("function"==typeof define&&define.amd)define(["module","./clipboard-action","tiny-emitter","good-listener"],o);else if("undefined"!=typeof t)o(e,k,E,O);else{var r={exports:{}};o(r,n.clipboardAction,n.tinyEmitter,n.goodListener),n.clipboard=r.exports}}(x,function(e,t,n,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}var s=r(t),u=r(n),f=r(o),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),h=function(e){function t(e,n){i(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.resolveOptions(n),o.listenClick(e),o}return c(t,e),d(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,f.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(t),target:this.target(t),text:this.text(t),trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return l("action",e)}},{key:"defaultTarget",value:function(e){var t=l("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return l("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}]),t}(u.default);e.exports=h})}),M=t(H);e('colors- {\n  display: flex;\n  width: calc(100% - 360px);\n  flex-flow: row wrap;\n}\ncolors- color- {\n  flex: 1 1 25%;\n  position: relative;\n  min-width: 10rem;\n}\ncolors- color-:before {\n  display: block;\n  content: "";\n  width: 100%;\n  padding-top: 80%;\n}\ncolors- color-:not(:hover) div {\n  display: none;\n  z-index: 0;\n}\ncolors- color- > div {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  box-shadow: 0 0 .5rem rgba(0,0,0,0.38);\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\ncolors- color- > div *+* {\n  margin-top: .25rem;\n}\ncolors- color- name- {\n  font-size: 1rem;\n  font-weight: bold;\n}\ncolors- color- hex- {\n  font-size: .618rem;\n  cursor: pointer;\n}\ncolors- color- hex-:hover {\n  text-decoration: underline;\n}\ncolors- color-[normal-text] {\n  color: rgba(255, 255, 255, 0.7);\n}\ncolors- color-[dark-text] {\n  color: rgba(0, 0, 0, 0.87);\n}\ncolors- color-[dark-strong-text] {\n  color: #000;\n}\ncolors- color-[light-text] {\n  color: rgba(255, 255, 255, 0.87);\n}\ncolors- color-[light-strong-text] {\n  color: #fff;\n}\n',void 0);var z={picked:function(e){"HEX-"!==e.target.nodeName&&m("color/picked",[this.data])},hovered:function(){m("color/hovered",[this.data])}},R=function(){var e=document.createElement("colors-");return y("colors.json").then(g(function(e){var t=e.base,n=e.shade,o=e.hex,r=e.text;return"\n    <color- "+r+" style='background-color:#"+o+"'>\n      <div>\n        <name->"+t.replace(" ","-")+"-"+n+"</name->\n        <hex->#"+o+"</hex->\n      <div>\n    </color->\n  "})).then(v("color-")("click")(z.picked)).then(v("color-")("mouseenter")(z.hovered)).then(b(e)),e};e("swatch- {\n  position: fixed;\n  right: 0;\n  top: 0;\n  display: flex;\n  height: 100vh;\n  width: 360px;\n  flex-direction: column;\n  border: 2rem solid #fff;\n  box-shadow: 0 0 1rem rgba(0,0,0,0.62);\n  z-index: 2;\n  transition: border 500ms, background 300ms;\n}\n\nswatch-:empty {\n  background-color: #e51c23;\n  border-width: 0;\n}\n\nswatch- color- {\n  flex: 1 1 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  flex: .00001;\n  animation: flexGrow 300ms ease forwards;\n}\n\nswatch- color- *+* {\n  margin-top: .25rem;\n}\n\nswatch- color- name- {\n  font-size: 1rem;\n  font-weight: bold;\n  opacity: 0;\n  animation: fadeIn 1000ms ease forwards;\n}\n\nswatch- color- hex- {\n  font-size: .618rem;\n  opacity: 0;\n  animation: fadeIn 1000ms ease forwards;\n}\n\nswatch- color- hex-:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\nswatch- color-[normal-text] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\nswatch- color-[dark-text] {\n  color: rgba(0, 0, 0, 0.87);\n}\n\nswatch- color-[dark-strong-text] {\n  color: #000;\n}\n\nswatch- color-[light-text] {\n  color: rgba(255, 255, 255, 0.87);\n}\n\nswatch- color-[light-strong-text] {\n  color: #fff;\n}\n\nswatch- color-.remove {\n  flex: 100%;\n  animation: flexShrink 300ms ease forwards;\n}\n\nswatch- color-.remove name-,\n      swatch- color-.remove hex- {\n  opacity: 1;\n  animation: fadeOut 300ms ease forwards;\n}\n\n@-webkit-keyframes fadeIn {\n  to {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeOut {\n  to {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes flexGrow {\n  to {\n    flex: 100%;\n  }\n}\n\n@-webkit-keyframes flexShrink {\n  to {\n    flex: .01;\n    flex: .00001;\n  }\n}\n",void 0);var N=function(){var e=document.createElement("swatch-"),t=function t(n){e.removeChild(n.target),n.target.removeEventListener("animationend",t)};return e.addEventListener("click",function(e){e.target&&"COLOR-"==e.target.nodeName&&(e.target.classList.add("remove"),e.target.addEventListener("animationend",t))}),p("color/hovered",function(t){0==e.children.length&&(e.style.backgroundColor="#"+t.hex)}),p("color/picked",function(t){var n=[].concat(d(e.querySelectorAll("color-"))),o=n.find(function(e){return e.querySelector("hex-").textContent==="#"+t.hex});!o&&n.length<6&&y([t]).then(g(function(e){var t=e.base,n=e.shade,o=e.hex,r=e.text;return"\n        <color- "+r+" style='background-color:#"+o+"'>\n          <name->"+t.replace(" ","-")+"-"+n+"</name->\n          <hex->#"+o+"</hex->\n        </color->\n      "})).then(b(e))}),e};e("swatch-:empty + download- {\n  transform: translate(100%, 100%);\n}\n\ndownload- {\n  position: fixed;\n  width: 5rem;\n  height: 5rem;\n  bottom: 0;\n  right: 0;\n  z-index: 3;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 350ms;\n}\n\ndownload- svg {\n  width: 50%;\n  height: 50%;\n  opacity: .38;\n}\n\ndownload- svg:hover {\n  opacity: .62;\n}\n",void 0);var P={download:function(){var e=document.querySelector("swatch-"),t=("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4).toUpperCase(),n='\n      <!DOCTYPE html>\n      <html>\n      \t<head>\n      \t\t<meta charset="utf-8">\n      \t\t<title>Malette | SWATCH-'+t+"</title>\n          <style>\n            * {\n              box-sizing: border-box;\n            }\n            body {\n              width: 100%;\n              height: 100vh;\n              margin: 0;\n              padding: 2rem;\n              background: #fff;\n              font-family: sans-serif;\n            }\n            swatch- {\n              width: 100%;\n              height: 100%;\n              display: flex;\n              flex-flow: row wrap;\n            }\n            color- {\n              flex: 1 1 15rem;\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              flex-direction: column;\n            }\n            name- {\n              font-size: 1rem;\n              font-weight: bold;\n            }\n            hex- {\n              font-size: .618rem;\n              margin-top: .32rem;\n            }\n            [normal-text] { color: rgba(255, 255, 255, 0.7); }\n            [dark-text] { color: rgba(0, 0, 0, 0.87); }\n            [dark-strong-text] { color: #000; }\n            [light-text] { color: rgba(255, 255, 255, 0.87); }\n            [light-strong-text] { color: #fff; }\n          </style>\n      \t</head>\n      \t<body>"+e.outerHTML+"</body>\n      </html>\n    ",o=new Blob([n],{type:"application/octet-stream"}),r=document.createElement("a");window.URL=window.URL||window.webkitURL,r.href=window.URL.createObjectURL(o),r.download="SWATCH-"+t,document.body.appendChild(r),r.click(),document.body.removeChild(document.body.lastElementChild)}},F=function(){var e=document.createElement("download-");return y([{}]).then(g(function(){return'\n    <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>\n        <path d="M0 0h24v24H0z" fill="none"/>\n    </svg>\n  '})).then(v("svg")("click")(P.download)).then(b(e)),e};e("toast- {\n  position: fixed;\n  top: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  transition: all 300ms;\n  background: #fff;\n  border-radius: .5rem;\n  z-index: 4;\n}\ntoast- span {\n  display: inline-block;\n  width: 1rem;\n  height: 1rem;\n  margin-left: .5rem;\n  margin-right: .25rem;\n}\ntoast- code {\n  display: inline;\n  margin-right: .5rem;\n}\ntoast- p {\n  display: flex;\n  align-items: center;\n  padding: .62rem 1rem;\n  font-size: 1rem;\n  color: rgba(0,0,0,0.5);\n}\ntoast-:empty {\n  top: -5rem;\n}\n",void 0);var I=function(){var e=document.createElement("toast-"),t=void 0;return p("hex/copied",function(n){t&&clearTimeout(t),e.innerHTML="",y([{}]).then(g(function(){return"\n      <p>Copied <span style='background-color:"+n+"'></span><code>"+n+"</code> to clipboard</p>\n    "})).then(b(e)),t=setTimeout(function(){return e.innerHTML=""},3e3)}),e},U=document.body;U.appendChild(R()),U.appendChild(N()),U.appendChild(F()),U.appendChild(I());var q=new M("hex-",{text:function(e){return e.textContent}});q.on("success",function(e){return m("hex/copied",[e.text])})}();
