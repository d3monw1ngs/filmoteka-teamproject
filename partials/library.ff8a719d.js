!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=_(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?d:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(N([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=g.prototype=y.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var u=f(t[o],t,a);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function N(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=g,u(E,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(k.prototype),u(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:N(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}document.addEventListener("DOMContentLoaded",(function(){var r=document.getElementById("watched-btn"),o=document.getElementById("queue-btn"),i=document.querySelector(".gallery"),c=JSON.parse(localStorage.getItem("movie-watched")),u=JSON.parse(localStorage.getItem("movie-queue"));function s(t){return f.apply(this,arguments)}function f(){return(f=t(e)(t(n).mark((function e(r){var o,a,c,u,s,f,h,v;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.innerHTML="",o=!0,a=!1,c=void 0,t.prev=2,u=r[Symbol.iterator]();case 4:if(o=(s=u.next()).done){t.next=22;break}if(f=s.value,t.prev=6,d(f)){t.next=9;break}throw new Error("Invalid movie ID: ".concat(f));case 9:return t.next=11,l(f);case 11:h=t.sent,v=p(h),i.appendChild(v),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),"Movie not found."===t.t0.message?console.warn("Movie with ID ".concat(f," not found.")):console.error("Failed to display movie:",t.t0);case 19:o=!0,t.next=4;break;case 22:t.next=28;break;case 24:t.prev=24,t.t1=t.catch(2),a=!0,c=t.t1;case 28:t.prev=28,t.prev=29,o||null==u.return||u.return();case 31:if(t.prev=31,!a){t.next=34;break}throw c;case 34:return t.finish(31);case 35:return t.finish(28);case 36:case"end":return t.stop()}}),e,null,[[2,24,28,36],[6,16],[29,,31,35]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=t(e)(t(n).mark((function e(r){var o,a,i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"b5e824a3d922f68ba211fcf6dbdcb6f5","https://api.themoviedb.org/3",o="".concat("https://api.themoviedb.org/3","/movie/").concat(r,"?api_key=").concat("b5e824a3d922f68ba211fcf6dbdcb6f5"),t.next=5,fetch(o);case 5:if((a=t.sent).ok){t.next=12;break}if(404!==a.status){t.next=11;break}throw new Error("Movie not found.");case 11:throw new Error("Failed to fetch movie details: "+a.statusText);case 12:return t.next=14,a.json();case 14:return i=t.sent,t.abrupt("return",i);case 16:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function p(t){var e=document.createElement("div");return e.classList.add("movie"),e.innerHTML='\n            <img src="'.concat(t.poster_path?a+t.poster_path:"http://via.placeholder.com/1080x1500",'";\n            <h3>').concat(t.title,"</h3>\n        "),e}function d(t){return!isNaN(t)}r.addEventListener("click",(function(t){console.log("Element:",r),t.preventDefault(),s(c)})),o.addEventListener("click",(function(t){t.preventDefault(),s(u)}))}));var a="https://image.tmdb.org/t/p/w500";document.getElementById("lib-buttons");document.addEventListener("DOMContentLoaded",(function(){var r=document.getElementById("watched-btn"),o=document.getElementById("queue-btn"),i=document.querySelector(".gallery"),c=JSON.parse(localStorage.getItem("movie-watched"))||[],u=JSON.parse(localStorage.getItem("movie-queue"))||[];function s(t){return f.apply(this,arguments)}function f(){return(f=t(e)(t(n).mark((function e(r){var o,a,c,u,s,f,h,v;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i.innerHTML="",o=!0,a=!1,c=void 0,t.prev=2,u=r[Symbol.iterator]();case 4:if(o=(s=u.next()).done){t.next=22;break}if(f=s.value,t.prev=6,d(f)){t.next=9;break}throw new Error("Invalid movie ID: ".concat(f));case 9:return t.next=11,l(f);case 11:h=t.sent,v=p(h),i.appendChild(v),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),"Movie not found."===t.t0.message?console.warn("Movie with ID ".concat(f," not found.")):console.error("Failed to display movie:",t.t0);case 19:o=!0,t.next=4;break;case 22:t.next=28;break;case 24:t.prev=24,t.t1=t.catch(2),a=!0,c=t.t1;case 28:t.prev=28,t.prev=29,o||null==u.return||u.return();case 31:if(t.prev=31,!a){t.next=34;break}throw c;case 34:return t.finish(31);case 35:return t.finish(28);case 36:case"end":return t.stop()}}),e,null,[[2,24,28,36],[6,16],[29,,31,35]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=t(e)(t(n).mark((function e(r){var o,a,i;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"b5e824a3d922f68ba211fcf6dbdcb6f5","https://api.themoviedb.org/3",o="".concat("https://api.themoviedb.org/3","/movie/").concat(r,"?api_key=").concat("b5e824a3d922f68ba211fcf6dbdcb6f5"),t.next=5,fetch(o);case 5:if((a=t.sent).ok){t.next=12;break}if(404!==a.status){t.next=11;break}throw new Error("Movie not found.");case 11:throw new Error("Failed to fetch movie details: "+a.statusText);case 12:return t.next=14,a.json();case 14:return i=t.sent,t.abrupt("return",i);case 16:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function p(t){var e=document.createElement("div");return e.classList.add("movie"),e.innerHTML='\n            <img src="'.concat(t.poster_path?a+t.poster_path:"http://via.placeholder.com/1080x1500",'" alt="').concat(t.title,'">\n            <h3>').concat(t.title,"</h3>\n        "),e}function d(t){return!isNaN(t)}r.addEventListener("click",(function(t){t.preventDefault(),s(c)})),o.addEventListener("click",(function(t){t.preventDefault(),s(u)}))})),lastUrl="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=b5e824a3d922f68ba211fcf6dbdcb6f5"}();
//# sourceMappingURL=library.ff8a719d.js.map
