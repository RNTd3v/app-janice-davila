(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{102:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=(n(3),n(103));var a={ready:"onReady",play:"onPlay",pause:"onPause",ended:"onEnd",timeupdate:"onTimeUpdate",progress:"onProgress",seeked:"onSeeked",texttrackchange:"onTextTrackChange",cuechange:"onCueChange",cuepoint:"onCuePoint",volumechange:"onVolumeChange",error:"onError",loaded:"onLoaded"},c=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).refContainer=n.refContainer.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(n)),n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=o.prototype;return c.componentDidMount=function(){this.createPlayer()},c.componentDidUpdate=function(e){var t=this,n=Object.keys(this.props).filter(function(n){return t.props[n]!==e[n]});this.updateProps(n)},c.componentWillUnmount=function(){this.player.destroy()},c.getInitialOptions=function(){return{id:this.props.video,width:this.props.width,height:this.props.height,autopause:this.props.autopause,autoplay:this.props.autoplay,byline:this.props.showByline,color:this.props.color,loop:this.props.loop,portrait:this.props.showPortrait,title:this.props.showTitle,muted:this.props.muted,background:this.props.background}},c.updateProps=function(e){var t=this,n=this.player;e.forEach(function(e){var o=t.props[e];switch(e){case"autopause":n.setAutopause(o);break;case"color":n.setColor(o);break;case"loop":n.setLoop(o);break;case"volume":n.setVolume(o);break;case"paused":n.getPaused().then(function(e){return o&&!e?n.pause():!o&&e?n.play():null});break;case"width":case"height":t.player.element[e]=o;break;case"video":o?(n.loadVideo(o),"number"==typeof t.props.start&&n.setCurrentTime(t.props.start)):n.unload()}})},c.createPlayer=function(){var e=this;this.player=new i.a(this.container,this.getInitialOptions()),Object.keys(a).forEach(function(t){var n=a[t];e.player.on(t,function(t){e.props[n]&&e.props[n](t)})}),"number"==typeof this.props.start&&this.player.setCurrentTime(this.props.start),"number"==typeof this.props.volume&&this.updateProps(["volume"])},c.refContainer=function(e){this.container=e},c.render=function(){return r.a.createElement("div",{id:this.props.id,className:this.props.className,ref:this.refContainer})},o}(r.a.Component);c.defaultProps={autopause:!0,autoplay:!1,showByline:!0,loop:!1,showPortrait:!0,showTitle:!0,muted:!1,background:!1},t.a=c},103:function(e,t,n){"use strict";(function(e,n){function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var r=void 0!==e&&"[object global]"==={}.toString.call(e);function i(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function a(e){return/^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(e)}function c(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.id,o=t.url,r=n||o;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(e=r,!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e)return"https://vimeo.com/".concat(r);if(a(r))return r.replace("http:","https:");if(n)throw new TypeError("“".concat(n,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var u=void 0!==Array.prototype.indexOf,s="undefined"!=typeof window&&void 0!==window.postMessage;if(!(r||u&&s))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var l="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.0 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2016 polygon planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id","_WeakMap"+"_"+i()+"."+i()),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function r(e,n){if(!o(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",function(e){if(r(this,"delete"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)}),n(e.prototype,"get",function(e){if(r(this,"get"),o(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}}),n(e.prototype,"has",function(e){if(r(this,"has"),!o(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)}),n(e.prototype,"set",function(e,t){if(r(this,"set"),!o(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(n(e,this._id,[e,t]),this)}),n(e,"_polyfill",!0),e}()}function o(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:l);var f,d=(function(e){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
var t,o,r;r=function(){var e,t,o,r=Object.prototype.toString,i=void 0!==n?function(e){return n(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,o){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==o})}}catch(t){e=function(e,t,n){return e[t]=n,e}}function a(e,n){o.add(e,n),t||(t=i(o.drain))}function c(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function u(){for(var e=0;e<this.chain.length;e++)s(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function s(e,t,n){var o,r;try{!1===t?n.reject(e.msg):(o=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(r=c(o))?r.call(o,n.resolve,n.reject):n.resolve(o)}catch(e){n.reject(e)}}function l(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&a(u,t))}function f(e,t,n,o){for(var r=0;r<t.length;r++)!function(r){e.resolve(t[r]).then(function(e){n(r,e)},o)}(r)}function d(e){this.def=e,this.triggered=!1}function h(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function p(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new h(this);this.then=function(e,n){var o={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return o.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");o.resolve=e,o.reject=t}),t.chain.push(o),0!==t.state&&a(u,t),o.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,function(e){(function e(t){var n,o=this;if(!o.triggered){o.triggered=!0,o.def&&(o=o.def);try{(n=c(t))?a(function(){var r=new d(o);try{n.call(t,function(){e.apply(r,arguments)},function(){l.apply(r,arguments)})}catch(e){l.call(r,e)}}):(o.msg=t,o.state=1,o.chain.length>0&&a(u,o))}catch(e){l.call(new d(o),e)}}}).call(t,e)},function(e){l.call(t,e)})}catch(e){l.call(t,e)}}o=function(){var e,n,o;function r(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){o=new r(t,i),n?n.next=o:e=o,n=o,o=void 0},drain:function(){var o=e;for(e=n=t=void 0;o;)o.fn.call(o.self),o=o.next}}}();var m=e({},"constructor",p,!1);return p.prototype=m,e(m,"__NPO__",0,!1),e(p,"resolve",function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),e(p,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),e(p,"all",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");var r=e.length,i=Array(r),a=0;f(t,e,function(e,t){i[e]=t,++a===r&&n(i)},o)})}),e(p,"race",function(e){var t=this;return"[object Array]"!=r.call(e)?t.reject(TypeError("Not an array")):new t(function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");f(t,e,function(e,t){n(t)},o)})}),p},(o=l)[t="Promise"]=o[t]||r(),e.exports&&(e.exports=o[t])}(f={exports:{}},f.exports),f.exports),h=new WeakMap;function p(e,t,n){var o=h.get(e.element)||{};t in o||(o[t]=[]),o[t].push(n),h.set(e.element,o)}function m(e,t){return(h.get(e.element)||{})[t]||[]}function v(e,t,n){var o=h.get(e.element)||{};if(!o[t])return!0;if(!n)return o[t]=[],h.set(e.element,o),!0;var r=o[t].indexOf(n);return-1!==r&&o[t].splice(r,1),h.set(e.element,o),o[t]&&0===o[t].length}var y=["autopause","autoplay","background","byline","color","height","id","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","title","transparent","url","width"];function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return y.reduce(function(t,n){var o=e.getAttribute("data-vimeo-".concat(n));return(o||""===o)&&(t[n]=""===o?1:o),t},t)}function b(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var o=document.createElement("div");return o.innerHTML=n,t.appendChild(o.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise(function(o,r){if(!a(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e),"&domain=").concat(window.location.hostname);for(var c in t)t.hasOwnProperty(c)&&(i+="&".concat(c,"=").concat(encodeURIComponent(t[c])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return b(t,n),void r(new Error("“".concat(e,"” is not embeddable.")));o(t)}catch(e){r(e)}else r(new Error("“".concat(e,"” is not embeddable.")));else r(new Error("“".concat(e,"” was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";r(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()})}function k(e){return"string"==typeof e&&(e=JSON.parse(e)),e}function E(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var o={method:t};void 0!==n&&(o.value=n);var r=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));r>=8&&r<10&&(o=JSON.stringify(o)),e.element.contentWindow.postMessage(o,e.origin)}}function T(e,t){var n,o=[];if((t=k(t)).event){if("error"===t.event)m(e,t.data.method).forEach(function(n){var o=new Error(t.data.message);o.name=t.data.name,n.reject(o),v(e,t.data.method,n)});o=m(e,"event:".concat(t.event)),n=t.data}else if(t.method){var r=function(e,t){var n=m(e,t);if(n.length<1)return!1;var o=n.shift();return v(e,t,o),o}(e,t.method);r&&(o.push(r),n=t.value)}o.forEach(function(t){try{if("function"==typeof t)return void t.call(e,n);t.resolve(n)}catch(e){}})}var _=new WeakMap,P=new WeakMap,O=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(/*! @vimeo/player v2.6.3 | (c) 2018 Vimeo | MIT License | https://github.com/vimeo/player.js */
function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!=typeof document&&"string"==typeof t&&(t=document.getElementById(t)),!function(e){return e instanceof window.HTMLElement}(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var r=t.querySelector("iframe");r&&(t=r)}if("IFRAME"===t.nodeName&&!a(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(_.has(t))return _.get(t);this.element=t,this.origin="*";var i=new d(function(e,r){var i=function(t){if(a(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var o=k(t.data),r="event"in o&&"ready"===o.event,i="method"in o&&"ping"===o.method;if(r||i)return n.element.setAttribute("data-ready","true"),void e();T(n,o)}};if(window.addEventListener?window.addEventListener("message",i,!1):window.attachEvent&&window.attachEvent("onmessage",i),"IFRAME"!==n.element.nodeName){var u=g(t,o);w(c(u),u,t).then(function(e){var o,r,i,a=b(e,t);return n.element=a,n._originalElement=t,o=t,r=a,i=h.get(o),h.set(r,i),h.delete(o),_.set(n.element,n),e}).catch(function(e){return r(e)})}});return P.set(this,i),_.set(this.element,this),"IFRAME"===this.element.nodeName&&E(this,"ping"),this}var t,n,r;return t=e,(n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new d(function(o,r){return t.ready().then(function(){p(t,e,{resolve:o,reject:r}),E(t,e,n)}).catch(function(e){r(e)})})}},{key:"get",value:function(e){var t=this;return new d(function(n,o){return e=i(e,"get"),t.ready().then(function(){p(t,e,{resolve:n,reject:o}),E(t,e)})})}},{key:"set",value:function(e,t){var n=this;return d.resolve(t).then(function(t){if(e=i(e,"set"),null==t)throw new TypeError("There must be a value to set.");return n.ready().then(function(){return new d(function(o,r){p(n,e,{resolve:o,reject:r}),E(n,e,t)})})})}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!=typeof t)throw new TypeError("The callback must be a function.");0===m(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch(function(){}),p(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");v(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch(function(e){})}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=P.get(this)||new d(function(e,t){t(new Error("Unknown player. Probably unloaded."))});return d.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new d(function(t){P.delete(e),_.delete(e.element),e._originalElement&&(_.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.remove(),t()})}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}])&&o(t.prototype,n),r&&o(t,r),e}();r||!window.Vimeo||window.Vimeo.Player||(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach(function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=g(e);w(c(t),t,e).then(function(t){return b(t,e)}).catch(n)}catch(e){n(e)}})}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=function(t){if(a(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),o=0;o<n.length;o++)if(n[o].contentWindow===t.source){n[o].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener?window.addEventListener("message",t,!1):window.attachEvent&&window.attachEvent("onmessage",t)}()),t.a=O}).call(this,n(5),n(156).setImmediate)},156:function(e,t,n){(function(e){var o=void 0!==e&&e||"undefined"!=typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,o,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,o,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(o,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(157),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(5))},157:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var o,r,i,a,c,u=1,s={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?o=function(e){t.nextTick(function(){p(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){p(e.data)},o=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(r=f.documentElement,o=function(e){var t=f.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,r.removeChild(t),t=null},r.appendChild(t)}):o=function(e){setTimeout(p,0,e)}:(a="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&p(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),o=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return s[u]=r,o(u),u++},d.clearImmediate=h}function h(e){delete s[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=s[e];if(t){l=!0;try{!function(e){var t=e.callback,o=e.args;switch(o.length){case 0:t();break;case 1:t(o[0]);break;case 2:t(o[0],o[1]);break;case 3:t(o[0],o[1],o[2]);break;default:t.apply(n,o)}}(t)}finally{h(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(5),n(30))},186:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function(e){var t=e.formErrors;return r.a.createElement("div",{className:"formErrors"},Object.keys(t).map(function(e,n){return t[e].length>0?r.a.createElement("p",{key:n},e," ",t[e]):""}))}},29:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var o=n(0),r=n.n(o),i=n(2),a=n.n(i),c=n(7),u=n(13);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=new c.a;return function(n){function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=d(this,h(i).call(this,e))).state={isLoading:!0},t}var c,s,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,o["Component"]),c=i,(s=[{key:"componentDidMount",value:function(){t.loggedIn()||a.a.push("/admin/login"),this.setState({isLoading:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.isLoading?r.a.createElement("div",null,r.a.createElement(u.a,null)):r.a.createElement(e,l({},this.props,{auth:t})))}}])&&f(c.prototype,s),m&&f(c,m),i}()}},3:function(e,t,n){e.exports=n(34)()},34:function(e,t,n){"use strict";var o=n(35);function r(){}e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},35:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},616:function(e,t,n){__NEXT_REGISTER_PAGE("/admin/video",function(){return e.exports=n(617),{page:e.exports.default}})},617:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(2),a=n.n(i),c=(n(33),n(29)),u=n(102),s=n(78),l=n(9),f=n(14),d=n(186);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=new s.a,w=function(e){function t(){var e,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(o=v(t).call(this))||"object"!==h(o)&&"function"!=typeof o?g(n):o).handleSubmit=e.handleSubmit.bind(g(g(e))),e.state={filmId:a.a.query.idFilm,category:"",titleFilm:"",category_id:"",videos:[],film:{},title:"",title_pt:"",vimed_id:"",titleValid:!1,titlePtValid:!1,vimeoValid:!1,formErrors:{title:"",titulo:"",vimeo:""}},e}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),n=t,(o=[{key:"handleInput",value:function(e){var t=this,n=e.target.name,o=e.target.value;this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,o),function(){t.validateField(n,o)})}},{key:"componentDidMount",value:function(){var e=this;b.getFilmById(a.a.query.idFilm).then(function(t){e.setState({film:t,category:t.category.name,category_id:t.category_id,titleFilm:t.title,videos:t.videos})})}},{key:"validateField",value:function(e,t){var n=this.state.formErrors,o=this.state.titleValid,r=this.state.titlePtValid,i=this.state.vimeoValid;switch(e){case"title":o=t.length>=3,n.title=o?"":" is too short";break;case"title_pt":r=t.length>=3,n.titulo=r?"":" é muito curto";break;case"vimeo_id":i=t.length>=5,n.vimeo=i?"":": id error"}this.setState({formErrors:n,titleValid:o,titlePtValid:r,vimeoValid:i},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.titleValid&&this.state.titlePtValid&&this.state.vimeoValid})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state,o={title:n.title,title_pt:n.title_pt,vimeo_id:n.vimeo_id,film_id:n.filmId};b.saveVideo(o).then(function(e){t.setState({videos:p(t.state.videos).concat([e.data])})})}},{key:"deleteVideo",value:function(e,t){var n=this;b.deleteVideo(e).then(function(e){var o=n.state.videos;n.setState({videos:p(o.slice(0,t)).concat(p(o.slice(t+1)))})})}},{key:"done",value:function(){a.a.push("/admin")}},{key:"render",value:function(){var e=this,t=this.state,n=t.filmId,o=t.category,i=t.category_id,c=t.titleFilm,s=t.videos;return r.a.createElement("section",{className:"admin"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"arrow-back action",onClick:function(){return a.a.push("/admin/".concat(i,"/").concat(o,"/film/").concat(n))}},r.a.createElement("i",{className:"fas fa-arrow-left icon"}),r.a.createElement("small",{className:"text"},"Back")),r.a.createElement(l.a,null)),r.a.createElement("main",{className:"main"},r.a.createElement("h2",{className:"title"},o," > ",r.a.createElement("strong",null,c)),r.a.createElement("form",{className:"form -grid -video",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"col -four"},r.a.createElement("small",null,"English"),r.a.createElement("input",{type:"text",id:"title",name:"title",className:"input",value:this.state.title,placeholder:"Title*",onChange:function(t){return e.handleInput(t)}})),r.a.createElement("div",{className:"col -four"},r.a.createElement("small",null,"Portuguese"),r.a.createElement("input",{type:"text",id:"titulo",name:"title_pt",className:"input",value:this.state.title_pt,placeholder:"Título*",onChange:function(t){return e.handleInput(t)}})),r.a.createElement("div",{className:"col -four"},r.a.createElement("small",null,"Vimeo Code"),r.a.createElement("input",{type:"number",id:"vimeo",name:"vimeo_id",className:"input",value:this.state.vimeo_id,placeholder:"VimeoID*",onChange:function(t){return e.handleInput(t)}})),r.a.createElement("div",{className:"col -four"},r.a.createElement("button",{className:"button -right ".concat(this.state.formValid?"":"-disabled"),disabled:!this.state.formValid},"Add Video"))),r.a.createElement(d.a,{formErrors:this.state.formErrors}),r.a.createElement("div",{className:"videos"},r.a.createElement("h3",null,"Videos"),r.a.createElement("section",{className:"list"},0===s.length?"No video registered":s.map(function(t,n){return r.a.createElement("article",{className:"player",key:t.id},r.a.createElement(u.a,{video:t.vimeo_id,width:480,showByline:!1,showTitle:!1,showPortrait:!1}),r.a.createElement("button",{className:"button -small",onClick:function(){return e.deleteVideo(t.id,n)}},"Excluir vídeo"))})),r.a.createElement("button",{className:"button -center",onClick:function(){return e.done()}},"Finalizar"))),r.a.createElement(f.a,null))}}])&&m(n.prototype,o),i&&m(n,i),t}();t.default=Object(c.a)(w)},7:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",function(){return i});var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.domain="https://janicedavila.com.br/api/v1",this.fetch=this.fetch.bind(this),this.login=this.login.bind(this),this.getProfile=this.getProfile.bind(this)}var t,n,i;return t=e,(n=[{key:"login",value:function(e,t){var n=this;return this.fetch("".concat(this.domain,"/authenticate"),{method:"POST",body:JSON.stringify({email:e,password:t})}).then(function(e){return n.setToken(e.token.token),n.setProfile({idUser:e.idUser,username:e.username}),Promise.resolve(e)})}},{key:"loggedIn",value:function(){return this.getToken()}},{key:"setProfile",value:function(e){localStorage.setItem("profile",JSON.stringify(e))}},{key:"getProfile",value:function(){return localStorage.getItem("profile")?JSON.parse(localStorage.profile):{}}},{key:"setToken",value:function(e){localStorage.setItem("id_token",e)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),localStorage.removeItem("profile")}},{key:"_checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}},{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n={Accept:"application/json","Content-Type":"application/json"};return this.loggedIn()&&(n.Authorization="Bearer "+this.getToken()),fetch(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({headers:n},t)).then(this._checkStatus).then(function(e){return e.json()})})}])&&r(t.prototype,n),i&&r(t,i),e}()},78:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",function(){return a});var i=new(n(7).a),a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.domain="https://janicedavila.com.br/api/v1",this.fetch=this.fetch.bind(this)}var t,n,a;return t=e,(n=[{key:"getCategories",value:function(){return this.fetch("".concat(this.domain,"/category"),{method:"GET"}).then(function(e){return Promise.resolve(e)})}},{key:"getFilmsByCategoryId",value:function(e){return this.fetch("".concat(this.domain,"/category/").concat(e,"/films"),{method:"GET"}).then(function(e){return Promise.resolve(e)})}},{key:"getFilmById",value:function(e){return this.fetch("".concat(this.domain,"/film/").concat(e),{method:"GET"}).then(function(e){return Promise.resolve(e)})}},{key:"saveFilm",value:function(e){return this.fetch("".concat(this.domain,"/films"),{method:"POST",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"updateFilm",value:function(e,t){return this.fetch("".concat(this.domain,"/films/").concat(t),{method:"PUT",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"deleteFilm",value:function(e){return this.fetch("".concat(this.domain,"/films/").concat(e),{method:"DELETE"}).then(function(e){return Promise.resolve(e)})}},{key:"saveVideo",value:function(e){return this.fetch("".concat(this.domain,"/videos"),{method:"POST",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"deleteVideo",value:function(e){return this.fetch("".concat(this.domain,"/videos/").concat(e),{method:"DELETE"}).then(function(e){return Promise.resolve(e)})}},{key:"uploadPicture",value:function(e){var t={};return i.loggedIn()&&(t.Authorization="Bearer "+localStorage.getItem("id_token")),console.log(e),fetch("".concat(this.domain,"/upload"),{headers:t,method:"POST",body:e}).then(this._checkStatus).then(function(e){return e.json()})}},{key:"_checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}},{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n={Accept:"application/json","Content-Type":"application/json"};return i.loggedIn()&&(n.Authorization="Bearer "+localStorage.getItem("id_token")),fetch(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({headers:n},t)).then(this._checkStatus).then(function(e){return e.json()})})}])&&r(t.prototype,n),a&&r(t,a),e}()}},[[616,1,0]]]);