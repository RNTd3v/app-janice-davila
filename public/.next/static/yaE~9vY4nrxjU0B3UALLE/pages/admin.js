(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{29:function(e,t,n){"use strict";n.d(t,"a",function(){return h});var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=n(7),u=n(13);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=new c.a;return function(n){function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=p(this,m(a).call(this,e))).state={isLoading:!0},t}var c,l,h;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,r["Component"]),c=a,(l=[{key:"componentDidMount",value:function(){t.loggedIn()||i.a.push("/admin/login"),this.setState({isLoading:!1})}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.isLoading?o.a.createElement("div",null,o.a.createElement(u.a,null)):o.a.createElement(e,s({},this.props,{auth:t})))}}])&&f(c.prototype,l),h&&f(c,h),a}()}},610:function(e,t,n){__NEXT_REGISTER_PAGE("/admin",function(){return e.exports=n(611),{page:e.exports.default}})},611:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=(n(33),n(29)),u=n(9),l=n(14);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){var e=this.props.auth.getProfile();return o.a.createElement("section",{className:"admin"},o.a.createElement("header",{className:"header"},o.a.createElement(u.a,null)),o.a.createElement("main",{className:"main"},o.a.createElement("h1",{className:"title"},"Olá ",o.a.createElement("strong",{className:"name"},e.username),", você está na área administrativa do website da Janice D'Avila."),o.a.createElement("div",{className:"list"},o.a.createElement("div",{className:"item",onClick:function(){return i.a.push("/admin/category")}},o.a.createElement("i",{className:"fas fa-film icon"}),o.a.createElement("h2",{className:"title"},"Films")),o.a.createElement("div",{className:"item",onClick:function(){return i.a.push("/admin/bio")}},o.a.createElement("i",{className:"fas fa-user-circle icon"}),o.a.createElement("h2",{className:"title"},"Bio")),o.a.createElement("div",{className:"item",onClick:function(){return i.a.push("/admin/contact")}},o.a.createElement("i",{className:"fas fa-envelope icon"}),o.a.createElement("h2",{className:"title"},"Contact")))),o.a.createElement(l.a,null))}}])&&f(n.prototype,a),c&&f(n,c),t}();t.default=Object(c.a)(h)},7:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",function(){return a});var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.domain="https://janicedavila.com/api/v1",this.fetch=this.fetch.bind(this),this.login=this.login.bind(this),this.getProfile=this.getProfile.bind(this)}var t,n,a;return t=e,(n=[{key:"login",value:function(e,t){var n=this;return this.fetch("".concat(this.domain,"/authenticate"),{method:"POST",body:JSON.stringify({email:e,password:t})}).then(function(e){return n.setToken(e.token.token),n.setProfile({idUser:e.idUser,username:e.username}),Promise.resolve(e)})}},{key:"loggedIn",value:function(){return this.getToken()}},{key:"setProfile",value:function(e){localStorage.setItem("profile",JSON.stringify(e))}},{key:"getProfile",value:function(){return localStorage.getItem("profile")?JSON.parse(localStorage.profile):{}}},{key:"setToken",value:function(e){localStorage.setItem("id_token",e)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),localStorage.removeItem("profile")}},{key:"_checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}},{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n={Accept:"application/json","Content-Type":"application/json"};return this.loggedIn()&&(n.Authorization="Bearer "+this.getToken()),fetch(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({headers:n},t)).then(this._checkStatus).then(function(e){return e.json()})})}])&&o(t.prototype,n),a&&o(t,a),e}()}},[[610,1,0]]]);