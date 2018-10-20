module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withAuth; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





function withAuth(AuthComponent) {
  var Auth = new _services_AuthService__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]();
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(Authenticated, _Component);

      function Authenticated(props) {
        var _this;

        _classCallCheck(this, Authenticated);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Authenticated).call(this, props));
        _this.state = {
          isLoading: true
        };
        return _this;
      }

      _createClass(Authenticated, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!Auth.loggedIn()) {
            next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/admin/login');
          }

          this.setState({
            isLoading: false
          });
        }
      }, {
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthComponent, _extends({}, this.props, {
            auth: Auth
          })));
        }
      }]);

      return Authenticated;
    }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
  );
} // https://github.com/zeit/next.js/issues/153

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "logo"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Janice ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "D'Avila")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Director of Photography"))));
};

/* harmony default export */ __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);



var Loading = function Loading() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/loading.svg",
    className: "loader"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text"
  }, "\xA9 2018 janice d\u2019avila / Website by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://rntdesign.com.br",
    target: "_blank",
    className: "author"
  }, "rntdesign")));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./src/styles/main.scss
var main = __webpack_require__(4);

// EXTERNAL MODULE: ./src/hocs/withAuth.js
var withAuth = __webpack_require__(15);

// EXTERNAL MODULE: ./src/services/AuthService.js
var AuthService = __webpack_require__(8);

// CONCATENATED MODULE: ./src/services/ContactService.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var auth = new AuthService["a" /* default */]();

var ContactService =
/*#__PURE__*/
function () {
  function ContactService() {
    _classCallCheck(this, ContactService);

    this.domain = "https://janicedavila.com.br/api/v1";
    this.fetch = this.fetch.bind(this);
  }

  _createClass(ContactService, [{
    key: "getPhone",
    value: function getPhone() {
      return this.fetch("".concat(this.domain, "/phones"), {
        method: 'GET'
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "savePhone",
    value: function savePhone(data) {
      return this.fetch("".concat(this.domain, "/phones"), {
        method: 'POST',
        body: JSON.stringify(data)
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "updatePhone",
    value: function updatePhone(data, idPhone) {
      return this.fetch("".concat(this.domain, "/phones/").concat(idPhone), {
        method: 'PUT',
        body: JSON.stringify(data)
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "deletePhone",
    value: function deletePhone(idPhone) {
      return this.fetch("".concat(this.domain, "/phones/").concat(idPhone), {
        method: 'DELETE'
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "getEmail",
    value: function getEmail() {
      return this.fetch("".concat(this.domain, "/emails"), {
        method: 'GET'
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "saveEmail",
    value: function saveEmail(data) {
      return this.fetch("".concat(this.domain, "/emails"), {
        method: 'POST',
        body: JSON.stringify(data)
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(data, idEmail) {
      return this.fetch("".concat(this.domain, "/emails/").concat(idEmail), {
        method: 'PUT',
        body: JSON.stringify(data)
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "deleteEmail",
    value: function deleteEmail(idEmail) {
      return this.fetch("".concat(this.domain, "/emails/").concat(idEmail), {
        method: 'DELETE'
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "_checkStatus",
    value: function _checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (url, options) {
      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      if (auth.loggedIn()) {
        headers['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
      }

      return fetch(url, _objectSpread({
        headers: headers
      }, options)).then(this._checkStatus).then(function (response) {
        return response.json();
      });
    })
  }]);

  return ContactService;
}();


// EXTERNAL MODULE: ./src/components/logo.js
var logo = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/footer.js
var footer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/admin/contact.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function contact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function contact_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function contact_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function contact_createClass(Constructor, protoProps, staticProps) { if (protoProps) contact_defineProperties(Constructor.prototype, protoProps); if (staticProps) contact_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var contact = new ContactService();



var contact_AdminContact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminContact, _React$Component);

  function AdminContact() {
    var _this;

    contact_classCallCheck(this, AdminContact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminContact).call(this));
    _this.handleSubmitPhone = _this.handleSubmitPhone.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmitEmail = _this.handleSubmitEmail.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      aboutId: 1,
      phones: [],
      emails: [],
      phone: "",
      email: "",
      phoneName: "",
      emailName: ""
    };
    return _this;
  }

  contact_createClass(AdminContact, [{
    key: "handleInput",
    value: function handleInput(e) {
      var name = e.target.name;
      var value = e.target.value;
      this.setState(contact_defineProperty({}, name, value));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      contact.getPhone().then(function (res) {
        console.log(res);

        _this2.setState({
          phones: res
        });
      });
      contact.getEmail().then(function (res) {
        console.log(res);

        _this2.setState({
          emails: res
        });
      });
    }
  }, {
    key: "handleSubmitPhone",
    value: function handleSubmitPhone(e) {
      var _this3 = this;

      e.preventDefault();
      var _this$state = this.state,
          phone = _this$state.phone,
          phoneName = _this$state.phoneName,
          aboutId = _this$state.aboutId;
      var data = {
        name: phoneName,
        number: phone,
        about_id: aboutId
      };
      contact.savePhone(data).then(function (res) {
        _this3.setState({
          phones: _toConsumableArray(_this3.state.phones).concat([res])
        });
      });
    }
  }, {
    key: "deletePhone",
    value: function deletePhone(phoneId, index) {
      var _this4 = this;

      contact.deletePhone(phoneId).then(function (res) {
        var phones = _this4.state.phones;

        _this4.setState({
          phones: _toConsumableArray(phones.slice(0, index)).concat(_toConsumableArray(phones.slice(index + 1)))
        });
      });
    }
  }, {
    key: "handleSubmitEmail",
    value: function handleSubmitEmail(e) {
      var _this5 = this;

      e.preventDefault();
      var _this$state2 = this.state,
          email = _this$state2.email,
          emailName = _this$state2.emailName,
          aboutId = _this$state2.aboutId;
      var data = {
        name: emailName,
        email: email,
        about_id: aboutId
      };
      contact.saveEmail(data).then(function (res) {
        _this5.setState({
          emails: _toConsumableArray(_this5.state.emails).concat([res])
        });
      });
    }
  }, {
    key: "deleteEmail",
    value: function deleteEmail(emailId, index) {
      var _this6 = this;

      contact.deleteEmail(emailId).then(function (res) {
        var emails = _this6.state.emails;

        _this6.setState({
          emails: _toConsumableArray(emails.slice(0, index)).concat(_toConsumableArray(emails.slice(index + 1)))
        });
      });
    }
  }, {
    key: "done",
    value: function done() {
      router_default.a.push("/admin");
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _this$state3 = this.state,
          phones = _this$state3.phones,
          emails = _this$state3.emails;
      return external_react_default.a.createElement("section", {
        className: "admin"
      }, external_react_default.a.createElement("header", {
        className: "header"
      }, external_react_default.a.createElement("div", {
        className: "arrow-back action",
        onClick: function onClick() {
          return router_default.a.push("/admin");
        }
      }, external_react_default.a.createElement("i", {
        className: "fas fa-arrow-left icon"
      }), external_react_default.a.createElement("small", {
        className: "text"
      }, "Back")), external_react_default.a.createElement(logo["a" /* default */], null)), external_react_default.a.createElement("main", {
        className: "main"
      }, external_react_default.a.createElement("h2", {
        className: "title"
      }, "Contact > Phone"), external_react_default.a.createElement("form", {
        className: "form -grid -contact",
        onSubmit: this.handleSubmitPhone
      }, external_react_default.a.createElement("div", {
        className: "col -three"
      }, external_react_default.a.createElement("small", null, "Name"), external_react_default.a.createElement("input", {
        type: "text",
        id: "namePhone",
        name: "namePhone",
        className: "input",
        value: this.state.phoneName,
        placeholder: "Name",
        onChange: function onChange(event) {
          return _this7.setState({
            phoneName: event.target.value
          });
        }
      })), external_react_default.a.createElement("div", {
        className: "col -three"
      }, external_react_default.a.createElement("small", null, "Number"), external_react_default.a.createElement("input", {
        type: "text",
        id: "phone",
        name: "phone",
        className: "input",
        value: this.state.phone,
        placeholder: "Phone",
        onChange: function onChange(event) {
          return _this7.setState({
            phone: event.target.value
          });
        }
      })), external_react_default.a.createElement("div", {
        className: "col -three"
      }, external_react_default.a.createElement("button", {
        className: "button -right"
      }, "Add Phone"))), external_react_default.a.createElement("h2", {
        className: "title"
      }, "Contact > E-mail"), external_react_default.a.createElement("form", {
        className: "form -grid -contact",
        onSubmit: this.handleSubmitEmail
      }, external_react_default.a.createElement("div", {
        className: "col -three"
      }, external_react_default.a.createElement("small", null, "Name"), external_react_default.a.createElement("input", {
        type: "text",
        id: "nameEmail",
        name: "nameEmail",
        className: "input",
        value: this.state.emailName,
        placeholder: "Name",
        onChange: function onChange(event) {
          return _this7.setState({
            emailName: event.target.value
          });
        }
      })), external_react_default.a.createElement("div", {
        className: "col -three"
      }, external_react_default.a.createElement("small", null, "Email"), external_react_default.a.createElement("input", {
        type: "text",
        id: "email",
        name: "email",
        className: "input",
        value: this.state.email,
        placeholder: "Email",
        onChange: function onChange(event) {
          return _this7.setState({
            email: event.target.value
          });
        }
      })), external_react_default.a.createElement("div", {
        className: "col -three"
      }, external_react_default.a.createElement("button", {
        className: "button -right"
      }, "Add Email"))), external_react_default.a.createElement("div", {
        className: "list-contact"
      }, external_react_default.a.createElement("div", {
        className: "phones"
      }, external_react_default.a.createElement("h3", null, "Phones"), external_react_default.a.createElement("section", {
        className: "list"
      }, phones.length === 0 ? 'No phone registered' : phones.map(function (phone, index) {
        return external_react_default.a.createElement("article", {
          className: "phone",
          key: phone.id
        }, external_react_default.a.createElement("h3", null, phone.name), external_react_default.a.createElement("p", null, phone.number), external_react_default.a.createElement("button", {
          className: "button -small",
          onClick: function onClick() {
            return _this7.deletePhone(phone.id, index);
          }
        }, "Excluir Phone"));
      }))), external_react_default.a.createElement("div", {
        className: "emails"
      }, external_react_default.a.createElement("h3", null, "Emails"), external_react_default.a.createElement("section", {
        className: "list"
      }, emails.length === 0 ? 'No email registered' : emails.map(function (email, index) {
        return external_react_default.a.createElement("article", {
          className: "email",
          key: email.id
        }, external_react_default.a.createElement("h3", null, email.name), external_react_default.a.createElement("p", null, email.email), external_react_default.a.createElement("button", {
          className: "button -small",
          onClick: function onClick() {
            return _this7.deleteEmail(email.id, index);
          }
        }, "Excluir Email"));
      })))), external_react_default.a.createElement("button", {
        className: "button -center",
        onClick: function onClick() {
          return _this7.done();
        }
      }, "Finalizar")), external_react_default.a.createElement(footer["a" /* default */], null));
    }
  }]);

  return AdminContact;
}(external_react_default.a.Component);

/* harmony default export */ var admin_contact = __webpack_exports__["default"] = (Object(withAuth["a" /* default */])(contact_AdminContact));

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AuthService =
/*#__PURE__*/
function () {
  function AuthService() {
    _classCallCheck(this, AuthService);

    this.domain = "https://janicedavila.com.br/api/v1";
    this.fetch = this.fetch.bind(this);
    this.login = this.login.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  _createClass(AuthService, [{
    key: "login",
    value: function login(email, password) {
      var _this = this;

      return this.fetch("".concat(this.domain, "/authenticate"), {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: password
        })
      }).then(function (res) {
        _this.setToken(res.token.token);

        _this.setProfile({
          idUser: res.idUser,
          username: res.username
        });

        return Promise.resolve(res);
      });
    }
  }, {
    key: "loggedIn",
    value: function loggedIn() {
      return this.getToken();
    }
  }, {
    key: "setProfile",
    value: function setProfile(profile) {
      localStorage.setItem('profile', JSON.stringify(profile));
    }
  }, {
    key: "getProfile",
    value: function getProfile() {
      var profile = localStorage.getItem('profile');
      return profile ? JSON.parse(localStorage.profile) : {};
    }
  }, {
    key: "setToken",
    value: function setToken(idToken) {
      localStorage.setItem('id_token', idToken);
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return localStorage.getItem('id_token');
    }
  }, {
    key: "logout",
    value: function logout() {
      localStorage.removeItem('id_token');
      localStorage.removeItem('profile');
    }
  }, {
    key: "_checkStatus",
    value: function _checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    }
  }, {
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x, _x2) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(function (url, options) {
      var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      };

      if (this.loggedIn()) {
        headers['Authorization'] = 'Bearer ' + this.getToken();
      }

      return fetch(url, _objectSpread({
        headers: headers
      }, options)).then(this._checkStatus).then(function (response) {
        return response.json();
      });
    })
  }]);

  return AuthService;
}();



/***/ })

/******/ });