(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4398],{95805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(70237).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=a.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){return e.error,e.isLoading,e.pastDelay,null}};if(r(e,Promise)?o.loader=function(){return e}:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=u({},o,e)),(o=u({},o,t)).suspense&&(delete o.ssr,delete o.loading),o.loadableGenerated&&delete(o=u({},o,o.loadableGenerated)).loadableGenerated,"boolean"==typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,i(n,o);delete o.ssr}return n(o)},t.noSSR=i;var u=n(59419).Z,o=n(23903).Z,a=(o(n(2784)),o(n(42060)));function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},46941:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(23903).Z)(n(2784)).default.createContext(null);t.LoadableContext=r},42060:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(60616).Z,u=n(90416).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(59419).Z,a=(0,n(23903).Z)(n(2784)),i=n(46941),l=n(2784).useSyncExternalStore,s=[],c=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(function(e){return n.loading=!1,n.loaded=e,e}).catch(function(e){throw n.loading=!1,n.error=e,e}),n}var v=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return u(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(function(){e._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(function(){e._update({timedOut:!0})},n.timeout))),this._res.promise.then(function(){e._update({}),e._clearTimeouts()}).catch(function(t){e._update({}),e._clearTimeouts()}),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(function(e){return e()})}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function b(e){return function(e,t){var n=function(){if(!b){var t=new v(e,f);b={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return b.promise()},r=function(){n();var e=a.default.useContext(i.LoadableContext);e&&Array.isArray(f.modules)&&f.modules.forEach(function(t){e(t)})},u=function(e,t){r();var n=l(b.subscribe,b.getCurrentValue,b.getCurrentValue);return a.default.useImperativeHandle(t,function(){return{retry:b.retry}},[]),a.default.useMemo(function(){var t;return n.loading||n.error?a.default.createElement(f.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:b.retry}):n.loaded?a.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null},[e,n])},s=function(e,t){return r(),a.default.createElement(f.lazy,o({},e,{ref:t}))},f=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);f.suspense&&(f.lazy=a.default.lazy(f.loader));var b=null;if(!d){var m=f.webpack?f.webpack():f.modules;m&&c.push(function(e){var t=!0,r=!1,u=void 0;try{for(var o,a=m[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){var i=o.value;if(-1!==e.indexOf(i))return n()}}catch(l){r=!0,u=l}finally{try{t||null==a.return||a.return()}finally{if(r)throw u}}})}var p=f.suspense?s:u;return p.preload=function(){return n()},p.displayName="LoadableComponent",a.default.forwardRef(p)}(f,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then(function(){if(e.length)return m(e,t)})}b.preloadAll=function(){return new Promise(function(e,t){m(s).then(e,t)})},b.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(function(t){var n=function(){return d=!0,t()};m(c,e).then(n,n)})},window.__NEXT_PRELOADREADY=b.preloadReady,t.default=b},25237:function(e,t,n){e.exports=n(95805)},72812:function(e,t,n){"use strict";function r(e,t){return e===t||e.contains(t)}n.d(t,{r:function(){return r}})},3185:function(e,t,n){"use strict";n.d(t,{v:function(){return u}});var r=n(87866);function u(e){var t=(0,r.M)(e).activeElement;return null!=t&&t.nodeName?t:null}},2760:function(e,t,n){"use strict";n.d(t,{B:function(){return o}});var r=n(3185),u=n(72812);function o(e){var t=(0,r.v)(e);if(!t)return!1;if((0,u.r)(e,t))return!0;var n=t.getAttribute("aria-activedescendant");return!!n&&(n===e.id||!!e.querySelector("#"+n))}},45938:function(e,t,n){"use strict";n.d(t,{i:function(){return u}});var r=["button","color","file","image","reset","submit"];function u(e){return"BUTTON"===e.tagName||"INPUT"===e.tagName&&-1!==r.indexOf(e.type)}},75248:function(e,t,n){"use strict";function r(e,t){return"matches"in e?e.matches(t):"msMatchesSelector"in e?e.msMatchesSelector(t):e.webkitMatchesSelector(t)}n.d(t,{w:function(){return r}})},19334:function(e,t,n){"use strict";n.d(t,{EB:function(){return o},KE:function(){return s},Wq:function(){return a},YC:function(){return l}});var r=n(75248),u="input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";function o(e){var t;return(0,r.w)(e,u)&&(e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0)}function a(e){var t;return o(e)&&!(0>parseInt(e.getAttribute("tabindex")||"0",10))}function i(e,t){var n=Array.from(e.querySelectorAll(u)),r=n.filter(a);return(a(e)&&r.unshift(e),!r.length&&t)?n:r}function l(e,t){return i(e,t)[0]||null}function s(e,t){var n=i(e,t);return n[n.length-1]||null}},80855:function(e,t,n){"use strict";n.d(t,{z:function(){return w},U:function(){return k}});var r=n(3521),u=n(57607),o=n(13432),a=n(2784),i=n(64042),l=n(45938);n(35053);var s=n(456),c=n(6626),d=n(78226),f=n(2760),v=n(72812),b=n(69416),m=n(19334),p=n(33068),h=(0,b.N)("Mac")&&!(0,b.N)("Chrome")&&((0,b.N)("Safari")||(0,b.N)("Firefox"));function g(e){!(0,f.B)(e)&&(0,m.EB)(e)&&e.focus()}function y(e,t){return(0,a.useCallback)(function(n){var r;null===(r=e.current)||void 0===r||r.call(e,n),!n.defaultPrevented&&t&&(n.stopPropagation(),n.preventDefault())},[e,t])}var _=(0,o.B)({name:"Tabbable",compose:p.q,keys:["disabled","focusable"],useOptions:function(e,t){var n=t.disabled;return(0,r.a)({disabled:n},e)},useProps:function(e,t){var n=t.ref,u=t.tabIndex,o=t.onClickCapture,c=t.onMouseDownCapture,f=t.onMouseDown,b=t.onKeyPressCapture,m=t.style,p=(0,r._)(t,["ref","tabIndex","onClickCapture","onMouseDownCapture","onMouseDown","onKeyPressCapture","style"]),_=(0,a.useRef)(null),E=(0,s.c)(o),k=(0,s.c)(c),w=(0,s.c)(f),C=(0,s.c)(b),O=!!e.disabled&&!e.focusable,S=(0,a.useState)(!0),D=S[0],T=S[1],P=(0,a.useState)(!0),R=P[0],M=P[1],L=e.disabled?(0,r.a)({pointerEvents:"none"},m):m;(0,d.Y)(function(){var e,t,n=_.current;n&&(!["BUTTON","INPUT","SELECT","TEXTAREA","A"].includes((e=n).tagName)&&T(!1),!["BUTTON","INPUT","SELECT","TEXTAREA"].includes((t=n).tagName)&&M(!1))},[]);var A,x,B,N,I=y(E,e.disabled),F=y(k,e.disabled),H=y(C,e.disabled),K=(0,a.useCallback)(function(e){null===(n=w.current)||void 0===n||n.call(w,e);var t,n,r=e.currentTarget;if(!e.defaultPrevented&&h){if((0,v.r)(e.currentTarget,e.target)&&(0,l.i)(r)){var u=requestAnimationFrame(function(){r.removeEventListener("mouseup",o,!0),g(r)}),o=function(){cancelAnimationFrame(u),g(r)};r.addEventListener("mouseup",o,{once:!0,capture:!0})}}},[]);return(0,r.a)({ref:(0,i.c)(_,n),style:L,tabIndex:(A=O,x=D,B=R,N=u,A?x&&!B?-1:void 0:x?N:N||0),disabled:!!O&&!!R||void 0,"aria-disabled":!!e.disabled||void 0,onClickCapture:I,onMouseDownCapture:F,onMouseDown:K,onKeyPressCapture:H},p)}});(0,u.L)({as:"div",useHook:_});var E=(0,o.B)({name:"Clickable",compose:_,keys:["unstable_clickOnEnter","unstable_clickOnSpace"],useOptions:function(e){var t=e.unstable_clickOnEnter,n=e.unstable_clickOnSpace,u=(0,r._)(e,["unstable_clickOnEnter","unstable_clickOnSpace"]);return(0,r.a)({unstable_clickOnEnter:void 0===t||t,unstable_clickOnSpace:void 0===n||n},u)},useProps:function(e,t){var n=t.onKeyDown,u=t.onKeyUp,o=(0,r._)(t,["onKeyDown","onKeyUp"]),i=(0,a.useState)(!1),d=i[0],f=i[1],v=(0,s.c)(n),b=(0,s.c)(u),m=(0,a.useCallback)(function(t){if(null===(u=v.current)||void 0===u||u.call(v,t),!t.defaultPrevented&&!e.disabled&&!t.metaKey&&(0,c.U)(t)){var n,r,u,o=e.unstable_clickOnEnter&&"Enter"===t.key,a=e.unstable_clickOnSpace&&" "===t.key;if(o||a){if(r=(n=t).currentTarget,n.isTrusted&&((0,l.i)(r)||"INPUT"===r.tagName||"TEXTAREA"===r.tagName||"A"===r.tagName||"SELECT"===r.tagName))return;t.preventDefault(),o?t.currentTarget.click():a&&f(!0)}}},[e.disabled,e.unstable_clickOnEnter,e.unstable_clickOnSpace]),p=(0,a.useCallback)(function(t){if(null===(n=b.current)||void 0===n||n.call(b,t),!t.defaultPrevented&&!e.disabled&&!t.metaKey){var n,r=e.unstable_clickOnSpace&&" "===t.key;d&&r&&(f(!1),t.currentTarget.click())}},[e.disabled,e.unstable_clickOnSpace,d]);return(0,r.a)({"data-active":d||void 0,onKeyDown:m,onKeyUp:p},o)}});(0,u.L)({as:"button",memo:!0,useHook:E});var k=(0,o.B)({name:"Button",compose:E,keys:[],useProps:function(e,t){var n=t.ref,u=(0,r._)(t,["ref"]),o=(0,a.useRef)(null),s=(0,a.useState)(void 0),c=s[0],d=s[1],f=(0,a.useState)("button"),v=f[0],b=f[1];return(0,a.useEffect)(function(){var e=o.current;e&&((0,l.i)(e)||("A"!==e.tagName&&d("button"),b(void 0)))},[]),(0,r.a)({ref:(0,i.c)(o,n),role:c,type:v},u)}}),w=(0,u.L)({as:"button",memo:!0,useHook:k})},11425:function(e,t,n){"use strict";n.d(t,{J:function(){return $}});var r=n(3521),u=n(57607),o=n(13432),a=n(2784),i=n(64042);n(35053);var l=n(84010);n(28316);var s=n(45938),c=n(456),d=n(78226),f=n(2760),v=n(19334);function b(e,t){var n=(0,a.useRef)(!1);(0,a.useEffect)(function(){if(n.current)return e();n.current=!0},t)}var m=n(87866),p=n(29764),h=n(3185),g=p.N&&"msCrypto"in window;function y(e){var t=(0,h.v)(e);if(!t)return!1;if(t===e)return!0;var n=t.getAttribute("aria-activedescendant");return!!n&&n===e.id}function _(e,t){var n=void 0===t?{}:t,r=n.preventScroll,u=n.isActive,o=void 0===u?y:u;return o(e)?-1:(e.focus({preventScroll:r}),o(e))?-1:requestAnimationFrame(function(){e.focus({preventScroll:r})})}var E=n(6733),k=n(47567);function w(e,t){var n,r,u=e.indexOf(t);return -1===u?e:[].concat(e.slice(0,u),e.slice(u+1))}var C=(0,a.createContext)(null),O=!1;if("undefined"!=typeof window){var S={get passive(){O=!0;return}};window.addEventListener("testPassive",null,S),window.removeEventListener("testPassive",null,S)}var D="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),T=[],P=!1,R=-1,M=void 0,L=void 0,A=function(e){return T.some(function(t){return!!(t.options.allowTouchMove&&t.options.allowTouchMove(e))})},x=function(e){var t=e||window.event;return!!A(t.target)||t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1)},B=function(e){if(void 0===L){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;t&&n>0&&(L=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}void 0===M&&(M=document.body.style.overflow,document.body.style.overflow="hidden")},N=function(){void 0!==L&&(document.body.style.paddingRight=L,L=void 0),void 0!==M&&(document.body.style.overflow=M,M=void 0)},I=function(e,t){var n,r=e.targetTouches[0].clientY-R;return!A(e.target)&&(t&&0===t.scrollTop&&r>0?x(e):t&&t.scrollHeight-t.scrollTop<=t.clientHeight&&r<0?x(e):(e.stopPropagation(),!0))},F=function(e,t){if(!e){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}!T.some(function(t){return t.targetElement===e})&&(T=[].concat(function(e){if(!Array.isArray(e))return Array.from(e);for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}(T),[{targetElement:e,options:t||{}}]),D?(e.ontouchstart=function(e){1===e.targetTouches.length&&(R=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&I(t,e)},P||(document.addEventListener("touchmove",x,O?{passive:!1}:void 0),P=!0)):B(t))},H=function(e){if(!e){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}T=T.filter(function(t){return t.targetElement!==e}),D?(e.ontouchstart=null,e.ontouchmove=null,P&&0===T.length&&(document.removeEventListener("touchmove",x,O?{passive:!1}:void 0),P=!1)):T.length||N()},K=n(75248),j=n(72812),U=(0,a.createContext)(void 0),q=n(83218),Y=n(19625);function Z(e){null!=e.parentNode&&e.parentNode.removeChild(e)}var V="__reakit-focus-trap",z=(0,a.createContext)({});function G(e,t,n,r,u,o,i){var l=(0,c.c)(u);(0,a.useEffect)(function(){if(o){var u=function(r){if(l.current){var u,o,a,i,s,c,d,f=e.current,v=t.current,b=r.target;if(f){if(o=(0,m.M)(b),!(!("HTML"===b.tagName||(0,j.r)(o.body,b))||(0,j.r)(f,b))&&!(v&&(0,j.r)(v,b))){if((null===(c=(s=b).classList)||void 0===c?void 0:c.contains(V))||n.some((d=b,function(e){var t=e.current;if(!t)return!1;if((0,j.r)(t,d))return!0;var n=(0,m.M)(t).querySelector('[data-dialog-ref="'+t.id+'"]');return!!n&&(0,j.r)(n,d)})))return;l.current(r)}}}},a=(0,m.M)(e.current);return a.addEventListener(r,u,i),function(){return a.removeEventListener(r,u,i)}}},[e,t,n,r,o,l])}function W(e){return e&&e.tagName&&"HTML"!==e.tagName&&e!==(0,m.M)(e).body}var X=(0,o.B)({name:"Dialog",compose:E.f,keys:Y.D,useOptions:function(e){var t=e.modal,n=void 0===t||t,u=e.hideOnEsc,o=e.hideOnClickOutside,a=e.preventBodyScroll,i=e.unstable_autoFocusOnShow,l=e.unstable_autoFocusOnHide,s=e.unstable_orphan,c=(0,r._)(e,["modal","hideOnEsc","hideOnClickOutside","preventBodyScroll","unstable_autoFocusOnShow","unstable_autoFocusOnHide","unstable_orphan"]);return(0,r.a)({modal:n,hideOnEsc:void 0===u||u,hideOnClickOutside:void 0===o||o,preventBodyScroll:n&&(void 0===a?n:a),unstable_autoFocusOnShow:void 0===i||i,unstable_autoFocusOnHide:void 0===l||l,unstable_orphan:n&&s},c)},useProps:function(e,t){var n,u,o,l,p,y,E,O,S,D,T,P,R,M,L,A,x,B,N,I,Y,X,J,Q,$,ee,et,en,er,eu,eo,ea,ei,el,es,ec,ed,ef,ev,eb,em,ep,eh,eg,ey,e_,eE,ek,ew,eC,eO,eS,eD,eT,eP,eR,eM,eL,eA,ex,eB,eN=t.ref,eI=t.onKeyDown,eF=t.onBlur,eH=t.wrapElement,eK=t.tabIndex,ej=(0,r._)(t,["ref","onKeyDown","onBlur","wrapElement","tabIndex"]),eU=(0,a.useRef)(null),eq=(0,a.useContext)(U),eY=eq&&eq===e.baseId,eZ=(u=e,o=(0,a.useRef)(null),l=!!(u.animated&&u.animating),(0,a.useEffect)(function(){if(!u.visible&&!l){var e=function(e){var t=e.target;"focus"in t&&(o.current=t,u.unstable_disclosureRef&&(u.unstable_disclosureRef.current=t))},t=(0,m.M)(eU.current);return t.addEventListener("focusin",e),function(){return t.removeEventListener("focusin",e)}}},[u.visible,l,u.unstable_disclosureRef,eU]),(0,a.useEffect)(function(){if(u.visible&&!l){var e,t=function(e){var t=e.currentTarget;(0,s.i)(t)&&(e.preventDefault(),t.focus())},n=(null===(e=u.unstable_disclosureRef)||void 0===e?void 0:e.current)||o.current;return null==n||n.addEventListener("mousedown",t),function(){return null==n?void 0:n.removeEventListener("mousedown",t)}}},[u.visible,l,u.unstable_disclosureRef]),u.unstable_disclosureRef||o),eV=(0,c.c)(eI),ez=(0,c.c)(eF),eG=(O=(E=(0,a.useReducer)(function(e){return e+1},0))[0],S=E[1],(0,d.Y)(function(){var t=eU.current;e.visible&&O&&!W((0,h.v)(t))&&(null==t||t.focus())},[O,eU]),(0,a.useCallback)(function(t){if(e.visible){var n,r=(n=t,g?(0,h.v)(n.currentTarget):(0,n.relatedTarget));W(r)||S()}},[e.visible])),eW=(P=(0,a.useContext)(z),M=(R=(0,a.useState)([]))[0],L=R[1],x=(A=(0,a.useState)(M))[0],B=A[1],N=(0,a.useCallback)(function(e){var t;null===(t=P.addDialog)||void 0===t||t.call(P,e),L(function(t){return[].concat(t,[e])})},[P.addDialog]),I=(0,a.useCallback)(function(e){var t;null===(t=P.removeDialog)||void 0===t||t.call(P,e),L(function(t){return w(t,e)})},[P.removeDialog]),Y=(0,a.useCallback)(function(e){var t;null===(t=P.showDialog)||void 0===t||t.call(P,e),B(function(t){return[].concat(t,[e])})},[P.showDialog]),X=(0,a.useCallback)(function(e){var t;null===(t=P.hideDialog)||void 0===t||t.call(P,e),B(function(t){return w(t,e)})},[P.hideDialog]),(0,a.useEffect)(function(){var t;if(!e.unstable_orphan)return null===(t=P.addDialog)||void 0===t||t.call(P,eU),function(){var e;null===(e=P.removeDialog)||void 0===e||e.call(P,eU)}},[e.unstable_orphan,P.addDialog,eU,P.removeDialog]),(0,a.useEffect)(function(){var t;if(!e.unstable_orphan&&e.modal&&e.visible)return null===(t=P.showDialog)||void 0===t||t.call(P,eU),function(){var e;null===(e=P.hideDialog)||void 0===e||e.call(P,eU)}},[e.unstable_orphan,e.modal,e.visible,P.showDialog,eU,P.hideDialog]),(0,a.useEffect)(function(){if(!1===P.visible&&e.visible&&!e.unstable_orphan){var t;null===(t=e.hide)||void 0===t||t.call(e)}},[P.visible,e.visible,e.hide,e.unstable_orphan]),J=(0,a.useMemo)(function(){return{visible:e.visible,addDialog:N,removeDialog:I,showDialog:Y,hideDialog:X}},[e.visible,N,I,Y,X]),{dialogs:M,visibleModals:x,wrap:(0,a.useCallback)(function(e){return(0,a.createElement)(z.Provider,{value:J},e)},[J])}),eX=eW.dialogs,eJ=eW.visibleModals,eQ=eW.wrap,e$=!!e.modal&&!eJ.length||void 0;ee=Boolean(e.preventBodyScroll&&e.visible),(0,a.useEffect)(function(){var e=eU.current;if(e&&ee)return F(e,{reserveScrollBarGap:!0}),function(){return H(e)}},[eU,ee]),ea=(0,a.useRef)(null),(0,a.useEffect)(function(){var t=eU.current;t&&e.visible&&(ea.current=function(e,t){if("closest"in e)return e.closest(t);do{if((0,K.w)(e,t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}(t,k.h.__selector))},[eU,e.visible]),el=e.visible&&e.modal,es=(0,a.useRef)(null),ec=(0,a.useRef)(null),(0,a.useEffect)(function(){if(el){var e=ea.current;if(e){if(!es.current){var t=(0,m.M)(e);es.current=t.createElement("div"),es.current.className=V,es.current.tabIndex=0,es.current.style.position="fixed",es.current.setAttribute("aria-hidden","true")}return ec.current||(ec.current=es.current.cloneNode()),e.insertAdjacentElement("beforebegin",es.current),e.insertAdjacentElement("afterend",ec.current),function(){es.current&&Z(es.current),ec.current&&Z(ec.current)}}}},[ea,el]),(0,a.useEffect)(function(){var e=es.current,t=ec.current;if(el&&e&&t){var n=function(e){var n=eU.current;if(n&&!eJ.length){e.preventDefault();var r=e.target===t?(0,v.YC)(n):(0,v.KE)(n);r?r.focus():n.focus()}};return e.addEventListener("focus",n),t.addEventListener("focus",n),function(){e.removeEventListener("focus",n),t.removeEventListener("focus",n)}}},[eU,eJ,el]),(0,a.useEffect)(function(){var t=eU.current;if(e.visible&&t){var n=new MutationObserver(function(e){if(e[0].target===t){var n,r=(0,m.M)(t),u=(0,h.v)(t);(u===r.body||(Array.isArray(u)?!u.length:(0,q.K)(u)?!Object.keys(u).length:null==u||""===u))&&t.focus()}});return n.observe(t,{childList:!0,subtree:!0}),function(){n.disconnect()}}},[e.visible,eU]),ep=e.unstable_initialFocusRef,eh=e.visible&&e.unstable_autoFocusOnShow,b(function(){var e=eU.current;if(eh&&e&&!eg){if(eX.some(function(e){return e.current&&!e.current.hidden}))return;if(null!=ep&&ep.current)ep.current.focus({preventScroll:!0});else{var t=(0,v.YC)(e,!0),n=function(){return(0,f.B)(e)};t?_(t,{preventScroll:!0,isActive:n}):_(e,{preventScroll:!0,isActive:n})}}},[eU,eh,eg=!!(e.animated&&e.animating),eX,ep]),ek=e.unstable_autoFocusOnHide&&!e.visible,b(function(){if(ek&&!ew){if(!function(e){var t=e.current;if(!t)return!1;var n=(0,h.v)(t);return!(!n||(0,j.r)(t,n))&&(!!(0,v.Wq)(n)||"true"===n.getAttribute("data-dialog"))}(eU)){var t,n=(null===(t=e.unstable_finalFocusRef)||void 0===t?void 0:t.current)||eZ.current;if(n){if(n.id){var r=(0,m.M)(n).querySelector("[aria-activedescendant='"+n.id+"']");if(r){_(r);return}}_(n);return}}}},[ek,ew=!!(e.animated&&e.animating),eU,eZ]),eR=(0,a.useRef)(),(0,a.useEffect)(function(){if(e.visible&&e.hideOnClickOutside){var t=(0,m.M)(eU.current),n=function(e){eR.current=e.target};return t.addEventListener("mousedown",n),function(){return t.removeEventListener("mousedown",n)}}},[e.visible,e.hideOnClickOutside,eU]),G(eU,eZ,eX,"click",function(t){if(eR.current===t.target){var n;null===(n=e.hide)||void 0===n||n.call(e)}},e.visible&&e.hideOnClickOutside),G(eU,eZ,eX,"focusin",function(t){var n,r=(0,m.M)(eU.current);t.target!==r&&t.target!==r.body&&(null===(n=e.hide)||void 0===n||n.call(e))},e.visible&&e.hideOnClickOutside),(eB=function(t){return G(eU,{current:null},eX,t,function(e){e.stopPropagation(),e.preventDefault()},e.visible&&e.modal,!0)})("mouseover"),eB("mousemove"),eB("mouseout");var e0=(0,a.useCallback)(function(t){var n;if(null===(n=eV.current)||void 0===n||n.call(eV,t),!t.defaultPrevented&&"Escape"===t.key&&e.hideOnEsc){if(!e.hide)return;t.stopPropagation(),e.hide()}},[e.hideOnEsc,e.hide]),e1=(0,a.useCallback)(function(e){var t;null===(t=ez.current)||void 0===t||t.call(ez,e),eG(e)},[eG]),e2=(0,a.useCallback)(function(t){return t=eQ(t),e.modal&&!eY&&(t=(0,a.createElement)(k.h,null,t)),eH&&(t=eH(t)),(0,a.createElement)(C.Provider,{value:null},t)},[eQ,e.modal,eY,eH]);return(0,r.a)({ref:(0,i.c)(eU,eN),role:"dialog",tabIndex:null!=eK?eK:-1,"aria-modal":e$,"data-dialog":!0,onKeyDown:e0,onBlur:e1,wrapElement:e2},ej)}});(0,u.L)({as:"div",useHook:X,useCreateElement:function(e,t,n){return(0,l.C)(e,t,n)}});var J=n(86708),Q=(0,o.B)({name:"Popover",compose:X,keys:J.P,useOptions:function(e){var t=e.modal,n=(0,r._)(e,["modal"]);return(0,r.a)({modal:void 0!==t&&t},n)},useProps:function(e,t){var n=t.ref,u=t.style,o=(0,r._)(t,["ref","style"]);return(0,r.a)({ref:(0,i.c)(e.unstable_popoverRef,n),style:(0,r.a)((0,r.a)({},e.unstable_popoverStyles),u)},o)}}),$=(0,u.L)({as:"div",useHook:Q,useCreateElement:function(e,t,n){return(0,l.C)(e,t,n)}})},61812:function(e,t,n){"use strict";n.d(t,{x:function(){return h}});var r=n(3521),u=n(57607),o=n(13432),a=n(2784),i=n(64042);n(35053);var l=n(86708),s=n(456),c=n(78226),d=n(19625),f=n(80855),v=n(4234),b=(0,o.B)({name:"Disclosure",compose:f.U,keys:v.D,useProps:function(e,t){var n=t.onClick,u=t["aria-controls"],o=(0,r._)(t,["onClick","aria-controls"]),i=(0,s.c)(n),l=u?u+" "+e.baseId:e.baseId,c=(0,a.useCallback)(function(t){var n,r;null===(n=i.current)||void 0===n||n.call(i,t),t.defaultPrevented||null===(r=e.toggle)||void 0===r||r.call(e)},[e.toggle]);return(0,r.a)({"aria-expanded":!!e.visible,"aria-controls":l,onClick:c},o)}});(0,u.L)({as:"button",memo:!0,useHook:b});var m=(0,o.B)({name:"DialogDisclosure",compose:b,keys:d.b,useProps:function(e,t){var n=t.ref,u=t.onClick,o=(0,r._)(t,["ref","onClick"]),l=(0,a.useRef)(null),d=(0,s.c)(u),f=(0,a.useState)(!1),v=f[0],b=f[1],m=e.unstable_disclosureRef;(0,c.Y)(function(){var t=l.current;m&&!m.current&&(m.current=t);var n=!(null!=m&&m.current)||m.current===t;b(!!e.visible&&n)},[e.visible,m]);var p=(0,a.useCallback)(function(e){var t;null===(t=d.current)||void 0===t||t.call(d,e),!e.defaultPrevented&&m&&(m.current=e.currentTarget)},[m]);return(0,r.a)({ref:(0,i.c)(l,n),"aria-haspopup":"dialog","aria-expanded":v,onClick:p},o)}});(0,u.L)({as:"button",memo:!0,useHook:m});var p=(0,o.B)({name:"PopoverDisclosure",compose:m,keys:l.c,useProps:function(e,t){var n=t.ref,u=(0,r._)(t,["ref"]);return(0,r.a)({ref:(0,i.c)(e.unstable_referenceRef,n)},u)}}),h=(0,u.L)({as:"button",memo:!0,useHook:p})},86708:function(e,t,n){"use strict";n.d(t,{P:function(){return r},c:function(){return u}});var r=["baseId","unstable_idCountRef","visible","animated","animating","setBaseId","show","hide","toggle","setVisible","setAnimated","stopAnimation","modal","unstable_disclosureRef","setModal","unstable_referenceRef","unstable_popoverRef","unstable_arrowRef","unstable_popoverStyles","unstable_arrowStyles","unstable_originalPlacement","unstable_update","placement","place"];[].concat(r,["size"]);var u=r},19625:function(e,t,n){"use strict";n.d(t,{D:function(){return u},b:function(){return o}});var r=["baseId","unstable_idCountRef","visible","animated","animating","setBaseId","show","hide","toggle","setVisible","setAnimated","stopAnimation","modal","unstable_disclosureRef","setModal"],u=[].concat(r,["hideOnEsc","hideOnClickOutside","preventBodyScroll","unstable_initialFocusRef","unstable_finalFocusRef","unstable_orphan","unstable_autoFocusOnShow","unstable_autoFocusOnHide"]),o=r}}]);