(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{29:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=n(7),u=n(13);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=new c.a;return function(n){function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=m(this,h(a).call(this,e))).state={isLoading:!0},t}var c,l,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,r["Component"]),c=a,(l=[{key:"componentDidMount",value:function(){t.loggedIn()||i.a.push("/admin/login"),this.setState({isLoading:!1})}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.isLoading?o.a.createElement("div",null,o.a.createElement(u.a,null)):o.a.createElement(e,s({},this.props,{auth:t})))}}])&&f(c.prototype,l),p&&f(c,p),a}()}},608:function(e,t,n){__NEXT_REGISTER_PAGE("/admin/films",function(){return e.exports=n(609),{page:e.exports.default}})},609:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),i=n.n(a),c=(n(33),n(29)),u=n(78),l=n(9),s=n(14);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=new u.a,v=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=h(this,y(t).call(this))).state={category:"",categoryId:i.a.query.id,films:[]},e}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.getFilms()}},{key:"getFilms",value:function(){var e=this;d.getFilmsByCategoryId(i.a.query.id).then(function(t){e.setState({films:t.films}),e.setState({category:t.category})})}},{key:"deleteFilm",value:function(e){var t=this;d.deleteFilm(e).then(function(e){t.getFilms()})}},{key:"render",value:function(){var e=this,t=this.state,n=t.films,r=t.category,a=t.categoryId;return o.a.createElement("section",{className:"admin"},o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"arrow-back action",onClick:function(){return i.a.push("/admin/category/")}},o.a.createElement("i",{className:"fas fa-arrow-left icon"}),o.a.createElement("small",{className:"text"},"Back")),o.a.createElement(l.a,null),o.a.createElement("div",{className:"arrow-back action",onClick:function(){return i.a.push("/admin/".concat(a,"/").concat(r,"/film "))}},o.a.createElement("i",{className:"far fa-plus-square icon"}),o.a.createElement("small",{className:"text"},"Add"))),o.a.createElement("main",{className:"main"},o.a.createElement("h2",{className:"title"},r),o.a.createElement("div",{className:"table"},o.a.createElement("div",{className:"row -head"},o.a.createElement("div",{className:"col -img"},"Image"),o.a.createElement("div",{className:"col -flex"},"Title"),o.a.createElement("div",{className:"col -act"},"Action")),n.map(function(t){return o.a.createElement("div",{className:"row",key:t.id},o.a.createElement("div",{className:"col -img"},o.a.createElement("img",{src:t.picture,className:"picture"})),o.a.createElement("div",{className:"col -flex"},t.title),o.a.createElement("div",{className:"col -act"},o.a.createElement("div",{className:"icon -editar action",onClick:function(){return i.a.push("/admin/".concat(a,"/").concat(r,"/film/").concat(t.id))}},o.a.createElement("i",{className:"far fa-edit icon"}),o.a.createElement("small",{className:"text"},"Edit")),o.a.createElement("div",{className:"icon -delete  action",onClick:function(){return e.deleteFilm(t.id)}},o.a.createElement("i",{className:"fas fa-eraser icon"}),o.a.createElement("small",{className:"text"},"Delete"))))}))),o.a.createElement(s.a,null))}}])&&m(n.prototype,r),a&&m(n,a),t}();t.default=Object(c.a)(v)},7:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",function(){return a});var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.domain="https://janicedavila.com.br/api/v1",this.fetch=this.fetch.bind(this),this.login=this.login.bind(this),this.getProfile=this.getProfile.bind(this)}var t,n,a;return t=e,(n=[{key:"login",value:function(e,t){var n=this;return this.fetch("".concat(this.domain,"/authenticate"),{method:"POST",body:JSON.stringify({email:e,password:t})}).then(function(e){return n.setToken(e.token.token),n.setProfile({idUser:e.idUser,username:e.username}),Promise.resolve(e)})}},{key:"loggedIn",value:function(){return this.getToken()}},{key:"setProfile",value:function(e){localStorage.setItem("profile",JSON.stringify(e))}},{key:"getProfile",value:function(){return localStorage.getItem("profile")?JSON.parse(localStorage.profile):{}}},{key:"setToken",value:function(e){localStorage.setItem("id_token",e)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),localStorage.removeItem("profile")}},{key:"_checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}},{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n={Accept:"application/json","Content-Type":"application/json"};return this.loggedIn()&&(n.Authorization="Bearer "+this.getToken()),fetch(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({headers:n},t)).then(this._checkStatus).then(function(e){return e.json()})})}])&&o(t.prototype,n),a&&o(t,a),e}()},78:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",function(){return i});var a=new(n(7).a),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.domain="https://janicedavila.com.br/api/v1",this.fetch=this.fetch.bind(this)}var t,n,i;return t=e,(n=[{key:"getCategories",value:function(){return this.fetch("".concat(this.domain,"/category"),{method:"GET"}).then(function(e){return Promise.resolve(e)})}},{key:"getFilmsByCategoryId",value:function(e){return this.fetch("".concat(this.domain,"/category/").concat(e,"/films"),{method:"GET"}).then(function(e){return Promise.resolve(e)})}},{key:"getFilmById",value:function(e){return this.fetch("".concat(this.domain,"/film/").concat(e),{method:"GET"}).then(function(e){return Promise.resolve(e)})}},{key:"saveFilm",value:function(e){return this.fetch("".concat(this.domain,"/films"),{method:"POST",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"updateFilm",value:function(e,t){return this.fetch("".concat(this.domain,"/films/").concat(t),{method:"PUT",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"deleteFilm",value:function(e){return this.fetch("".concat(this.domain,"/films/").concat(e),{method:"DELETE"}).then(function(e){return Promise.resolve(e)})}},{key:"saveVideo",value:function(e){return this.fetch("".concat(this.domain,"/videos"),{method:"POST",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"deleteVideo",value:function(e){return this.fetch("".concat(this.domain,"/videos/").concat(e),{method:"DELETE"}).then(function(e){return Promise.resolve(e)})}},{key:"uploadPicture",value:function(e){var t={};return a.loggedIn()&&(t.Authorization="Bearer "+localStorage.getItem("id_token")),console.log(e),fetch("".concat(this.domain,"/upload"),{headers:t,method:"POST",body:e}).then(this._checkStatus).then(function(e){return e.json()})}},{key:"_checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}},{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n={Accept:"application/json","Content-Type":"application/json"};return a.loggedIn()&&(n.Authorization="Bearer "+localStorage.getItem("id_token")),fetch(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({headers:n},t)).then(this._checkStatus).then(function(e){return e.json()})})}])&&o(t.prototype,n),i&&o(t,i),e}()}},[[608,1,0]]]);