(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{29:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var o=n(0),r=n.n(o),i=n(2),a=n.n(i),c=n(7),u=n(13);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=new c.a;return function(n){function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=h(this,m(i).call(this,e))).state={isLoading:!0},t}var c,s,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,o["Component"]),c=i,(s=[{key:"componentDidMount",value:function(){t.loggedIn()||a.a.push("/admin/login"),this.setState({isLoading:!1})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.isLoading?r.a.createElement("div",null,r.a.createElement(u.a,null)):r.a.createElement(e,l({},this.props,{auth:t})))}}])&&f(c.prototype,s),y&&f(c,y),i}()}},603:function(e,t,n){__NEXT_REGISTER_PAGE("/admin/category",function(){return e.exports=n(604),{page:e.exports.default}})},604:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(2),a=n.n(i),c=(n(33),n(29)),u=n(78),s=n(9),l=n(14);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=new u.a,b=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=m(this,p(t).call(this))).state={categories:[]},e}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){var e=this;d.getCategories().then(function(t){e.setState({categories:t})})}},{key:"render",value:function(){var e=this.state.categories;return r.a.createElement("section",{className:"admin"},r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"arrow-back action",onClick:function(){return a.a.push("/admin")}},r.a.createElement("i",{className:"fas fa-arrow-left icon"}),r.a.createElement("small",{className:"text"},"Back")),r.a.createElement(s.a,null)),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"list"},r.a.createElement("p",{className:"info"},"Selecione uma categoria:"),e.map(function(e){return r.a.createElement("article",{className:"item",key:e.id,onClick:function(){return a.a.push("/admin/".concat(e.id,"/films/"))}},r.a.createElement("h2",{className:"title"},e.name))}))),r.a.createElement(l.a,null))}}])&&h(n.prototype,o),i&&h(n,i),t}();t.default=Object(c.a)(b)},7:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",function(){return i});var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.domain="./api/v1",this.fetch=this.fetch.bind(this),this.login=this.login.bind(this),this.getProfile=this.getProfile.bind(this)}var t,n,i;return t=e,(n=[{key:"login",value:function(e,t){var n=this;return this.fetch("".concat(this.domain,"/authenticate"),{method:"POST",body:JSON.stringify({email:e,password:t})}).then(function(e){return n.setToken(e.token.token),n.setProfile({idUser:e.idUser,username:e.username}),Promise.resolve(e)})}},{key:"loggedIn",value:function(){return this.getToken()}},{key:"setProfile",value:function(e){localStorage.setItem("profile",JSON.stringify(e))}},{key:"getProfile",value:function(){return localStorage.getItem("profile")?JSON.parse(localStorage.profile):{}}},{key:"setToken",value:function(e){localStorage.setItem("id_token",e)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),localStorage.removeItem("profile")}},{key:"_checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}},{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n={Accept:"application/json","Content-Type":"application/json"};return this.loggedIn()&&(n.Authorization="Bearer "+this.getToken()),fetch(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({headers:n},t)).then(this._checkStatus).then(function(e){return e.json()})})}])&&r(t.prototype,n),i&&r(t,i),e}()},78:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n.d(t,"a",function(){return a});var i=new(n(7).a),a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.domain="./api/v1",this.fetch=this.fetch.bind(this)}var t,n,a;return t=e,(n=[{key:"getCategories",value:function(){return this.fetch("".concat(this.domain,"/category"),{method:"GET"}).then(function(e){return Promise.resolve(e)})}},{key:"getFilmsByCategoryId",value:function(e){return this.fetch("".concat(this.domain,"/category/").concat(e,"/films"),{method:"GET"}).then(function(e){return Promise.resolve(e)})}},{key:"getFilmById",value:function(e){return this.fetch("".concat(this.domain,"/film/").concat(e),{method:"GET"}).then(function(e){return Promise.resolve(e)})}},{key:"saveFilm",value:function(e){return this.fetch("".concat(this.domain,"/films"),{method:"POST",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"updateFilm",value:function(e,t){return this.fetch("".concat(this.domain,"/films/").concat(t),{method:"PUT",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"deleteFilm",value:function(e){return this.fetch("".concat(this.domain,"/films/").concat(e),{method:"DELETE"}).then(function(e){return Promise.resolve(e)})}},{key:"saveVideo",value:function(e){return this.fetch("".concat(this.domain,"/videos"),{method:"POST",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"deleteVideo",value:function(e){return this.fetch("".concat(this.domain,"/videos/").concat(e),{method:"DELETE"}).then(function(e){return Promise.resolve(e)})}},{key:"uploadPicture",value:function(e){var t={};return i.loggedIn()&&(t.Authorization="Bearer "+localStorage.getItem("id_token")),console.log(e),fetch("".concat(this.domain,"/upload"),{headers:t,method:"POST",body:e}).then(this._checkStatus).then(function(e){return e.json()})}},{key:"_checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}},{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n={Accept:"application/json","Content-Type":"application/json"};return i.loggedIn()&&(n.Authorization="Bearer "+localStorage.getItem("id_token")),fetch(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}({headers:n},t)).then(this._checkStatus).then(function(e){return e.json()})})}])&&r(t.prototype,n),a&&r(t,a),e}()}},[[603,1,0]]]);