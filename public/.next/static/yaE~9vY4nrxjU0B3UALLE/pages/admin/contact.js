(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{29:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(0),o=n.n(a),r=n(2),i=n.n(r),l=n(7),c=n(13);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=new l.a;return function(n){function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=f(this,h(r).call(this,e))).state={isLoading:!0},t}var l,u,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(r,a["Component"]),l=r,(u=[{key:"componentDidMount",value:function(){t.loggedIn()||i.a.push("/admin/login"),this.setState({isLoading:!1})}},{key:"render",value:function(){return o.a.createElement("div",null,this.state.isLoading?o.a.createElement("div",null,o.a.createElement(c.a,null)):o.a.createElement(e,s({},this.props,{auth:t})))}}])&&m(l.prototype,u),d&&m(l,d),r}()}},605:function(e,t,n){__NEXT_REGISTER_PAGE("/admin/contact",function(){return e.exports=n(720),{page:e.exports.default}})},7:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.d(t,"a",function(){return r});var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.domain="https://janicedavila.com/api/v1",this.fetch=this.fetch.bind(this),this.login=this.login.bind(this),this.getProfile=this.getProfile.bind(this)}var t,n,r;return t=e,(n=[{key:"login",value:function(e,t){var n=this;return this.fetch("".concat(this.domain,"/authenticate"),{method:"POST",body:JSON.stringify({email:e,password:t})}).then(function(e){return n.setToken(e.token.token),n.setProfile({idUser:e.idUser,username:e.username}),Promise.resolve(e)})}},{key:"loggedIn",value:function(){return this.getToken()}},{key:"setProfile",value:function(e){localStorage.setItem("profile",JSON.stringify(e))}},{key:"getProfile",value:function(){return localStorage.getItem("profile")?JSON.parse(localStorage.profile):{}}},{key:"setToken",value:function(e){localStorage.setItem("id_token",e)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),localStorage.removeItem("profile")}},{key:"_checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}},{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n={Accept:"application/json","Content-Type":"application/json"};return this.loggedIn()&&(n.Authorization="Bearer "+this.getToken()),fetch(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){a(e,t,n[t])})}return e}({headers:n},t)).then(this._checkStatus).then(function(e){return e.json()})})}])&&o(t.prototype,n),r&&o(t,r),e}()},720:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),i=n.n(r),l=(n(33),n(29));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s=new(n(7).a),m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.domain="https://janicedavila.com/api/v1",this.fetch=this.fetch.bind(this)}var t,n,a;return t=e,(n=[{key:"getPhone",value:function(){return this.fetch("".concat(this.domain,"/phones"),{method:"GET"}).then(function(e){return Promise.resolve(e)})}},{key:"savePhone",value:function(e){return this.fetch("".concat(this.domain,"/phones"),{method:"POST",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"updatePhone",value:function(e,t){return this.fetch("".concat(this.domain,"/phones/").concat(t),{method:"PUT",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"deletePhone",value:function(e){return this.fetch("".concat(this.domain,"/phones/").concat(e),{method:"DELETE"}).then(function(e){return Promise.resolve(e)})}},{key:"getEmail",value:function(){return this.fetch("".concat(this.domain,"/emails"),{method:"GET"}).then(function(e){return Promise.resolve(e)})}},{key:"saveEmail",value:function(e){return this.fetch("".concat(this.domain,"/emails"),{method:"POST",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"updateEmail",value:function(e,t){return this.fetch("".concat(this.domain,"/emails/").concat(t),{method:"PUT",body:JSON.stringify(e)}).then(function(e){return Promise.resolve(e)})}},{key:"deleteEmail",value:function(e){return this.fetch("".concat(this.domain,"/emails/").concat(e),{method:"DELETE"}).then(function(e){return Promise.resolve(e)})}},{key:"_checkStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}},{key:"fetch",value:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){var n={Accept:"application/json","Content-Type":"application/json"};return s.loggedIn()&&(n.Authorization="Bearer "+localStorage.getItem("id_token")),fetch(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){c(e,t,n[t])})}return e}({headers:n},t)).then(this._checkStatus).then(function(e){return e.json()})})}])&&u(t.prototype,n),a&&u(t,a),e}(),f=n(9),h=n(14);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var E=new m,S=function(e){function t(){var e,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,(e=!(a=b(t).call(this))||"object"!==p(a)&&"function"!=typeof a?g(n):a).handleSubmitPhone=e.handleSubmitPhone.bind(g(g(e))),e.handleSubmitEmail=e.handleSubmitEmail.bind(g(g(e))),e.state={aboutId:1,phones:[],emails:[],phone:"",email:"",phoneName:"",emailName:""},e}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),n=t,(a=[{key:"handleInput",value:function(e){var t=e.target.name,n=e.target.value;this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,n))}},{key:"componentDidMount",value:function(){var e=this;E.getPhone().then(function(t){console.log(t),e.setState({phones:t})}),E.getEmail().then(function(t){console.log(t),e.setState({emails:t})})}},{key:"handleSubmitPhone",value:function(e){var t=this;e.preventDefault();var n=this.state,a=n.phone,o={name:n.phoneName,number:a,about_id:n.aboutId};E.savePhone(o).then(function(e){t.setState({phones:d(t.state.phones).concat([e])})})}},{key:"deletePhone",value:function(e,t){var n=this;E.deletePhone(e).then(function(e){var a=n.state.phones;n.setState({phones:d(a.slice(0,t)).concat(d(a.slice(t+1)))})})}},{key:"handleSubmitEmail",value:function(e){var t=this;e.preventDefault();var n=this.state,a=n.email,o={name:n.emailName,email:a,about_id:n.aboutId};E.saveEmail(o).then(function(e){t.setState({emails:d(t.state.emails).concat([e])})})}},{key:"deleteEmail",value:function(e,t){var n=this;E.deleteEmail(e).then(function(e){var a=n.state.emails;n.setState({emails:d(a.slice(0,t)).concat(d(a.slice(t+1)))})})}},{key:"done",value:function(){i.a.push("/admin")}},{key:"render",value:function(){var e=this,t=this.state,n=t.phones,a=t.emails;return o.a.createElement("section",{className:"admin"},o.a.createElement("header",{className:"header"},o.a.createElement("div",{className:"arrow-back action",onClick:function(){return i.a.push("/admin")}},o.a.createElement("i",{className:"fas fa-arrow-left icon"}),o.a.createElement("small",{className:"text"},"Back")),o.a.createElement(f.a,null)),o.a.createElement("main",{className:"main"},o.a.createElement("h2",{className:"title"},"Contact > Phone"),o.a.createElement("form",{className:"form -grid -contact",onSubmit:this.handleSubmitPhone},o.a.createElement("div",{className:"col -three"},o.a.createElement("small",null,"Name"),o.a.createElement("input",{type:"text",id:"namePhone",name:"namePhone",className:"input",value:this.state.phoneName,placeholder:"Name",onChange:function(t){return e.setState({phoneName:t.target.value})}})),o.a.createElement("div",{className:"col -three"},o.a.createElement("small",null,"Number"),o.a.createElement("input",{type:"text",id:"phone",name:"phone",className:"input",value:this.state.phone,placeholder:"Phone",onChange:function(t){return e.setState({phone:t.target.value})}})),o.a.createElement("div",{className:"col -three"},o.a.createElement("button",{className:"button -right"},"Add Phone"))),o.a.createElement("h2",{className:"title"},"Contact > E-mail"),o.a.createElement("form",{className:"form -grid -contact",onSubmit:this.handleSubmitEmail},o.a.createElement("div",{className:"col -three"},o.a.createElement("small",null,"Name"),o.a.createElement("input",{type:"text",id:"nameEmail",name:"nameEmail",className:"input",value:this.state.emailName,placeholder:"Name",onChange:function(t){return e.setState({emailName:t.target.value})}})),o.a.createElement("div",{className:"col -three"},o.a.createElement("small",null,"Email"),o.a.createElement("input",{type:"text",id:"email",name:"email",className:"input",value:this.state.email,placeholder:"Email",onChange:function(t){return e.setState({email:t.target.value})}})),o.a.createElement("div",{className:"col -three"},o.a.createElement("button",{className:"button -right"},"Add Email"))),o.a.createElement("div",{className:"list-contact"},o.a.createElement("div",{className:"phones"},o.a.createElement("h3",null,"Phones"),o.a.createElement("section",{className:"list"},0===n.length?"No phone registered":n.map(function(t,n){return o.a.createElement("article",{className:"phone",key:t.id},o.a.createElement("h3",null,t.name),o.a.createElement("p",null,t.number),o.a.createElement("button",{className:"button -small",onClick:function(){return e.deletePhone(t.id,n)}},"Excluir Phone"))}))),o.a.createElement("div",{className:"emails"},o.a.createElement("h3",null,"Emails"),o.a.createElement("section",{className:"list"},0===a.length?"No email registered":a.map(function(t,n){return o.a.createElement("article",{className:"email",key:t.id},o.a.createElement("h3",null,t.name),o.a.createElement("p",null,t.email),o.a.createElement("button",{className:"button -small",onClick:function(){return e.deleteEmail(t.id,n)}},"Excluir Email"))})))),o.a.createElement("button",{className:"button -center",onClick:function(){return e.done()}},"Finalizar")),o.a.createElement(h.a,null))}}])&&y(n.prototype,a),r&&y(n,r),t}();t.default=Object(l.a)(S)}},[[605,1,0]]]);