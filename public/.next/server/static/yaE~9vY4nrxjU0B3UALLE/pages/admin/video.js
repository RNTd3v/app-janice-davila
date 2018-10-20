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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */,
/* 8 */
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

    this.domain = "https://janicedavila.com/api/v1";
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



/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
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
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var auth = new _AuthService__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();

var CategoriesService =
/*#__PURE__*/
function () {
  function CategoriesService() {
    _classCallCheck(this, CategoriesService);

    this.domain = "https://janicedavila.com/api/v1";
    this.fetch = this.fetch.bind(this);
  }

  _createClass(CategoriesService, [{
    key: "getCategories",
    value: function getCategories() {
      return this.fetch("".concat(this.domain, "/category"), {
        method: 'GET'
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "getFilmsByCategoryId",
    value: function getFilmsByCategoryId(idCategory) {
      return this.fetch("".concat(this.domain, "/category/").concat(idCategory, "/films"), {
        method: 'GET'
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "getFilmById",
    value: function getFilmById(idFilm) {
      return this.fetch("".concat(this.domain, "/film/").concat(idFilm), {
        method: 'GET'
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "saveFilm",
    value: function saveFilm(film) {
      return this.fetch("".concat(this.domain, "/films"), {
        method: 'POST',
        body: JSON.stringify(film)
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "updateFilm",
    value: function updateFilm(film, idFilm) {
      return this.fetch("".concat(this.domain, "/films/").concat(idFilm), {
        method: 'PUT',
        body: JSON.stringify(film)
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "deleteFilm",
    value: function deleteFilm(idFilm) {
      return this.fetch("".concat(this.domain, "/films/").concat(idFilm), {
        method: 'DELETE'
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "saveVideo",
    value: function saveVideo(video) {
      return this.fetch("".concat(this.domain, "/videos"), {
        method: 'POST',
        body: JSON.stringify(video)
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "deleteVideo",
    value: function deleteVideo(videoId) {
      return this.fetch("".concat(this.domain, "/videos/").concat(videoId), {
        method: 'DELETE'
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "uploadPicture",
    value: function uploadPicture(data) {
      var headers = {};

      if (auth.loggedIn()) {
        headers['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');
      }

      console.log(data);
      return fetch("".concat(this.domain, "/upload"), {
        headers: headers,
        method: 'POST',
        body: data
      }).then(this._checkStatus).then(function (response) {
        return response.json();
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

  return CategoriesService;
}();



/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@u-wave/react-vimeo");

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var FormErrors = function FormErrors(_ref) {
  var formErrors = _ref.formErrors;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "formErrors"
  }, Object.keys(formErrors).map(function (fieldName, i) {
    if (formErrors[fieldName].length > 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        key: i
      }, fieldName, " ", formErrors[fieldName]);
    } else {
      return '';
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (FormErrors);

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _src_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_services_Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _src_components_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _src_components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6);
/* harmony import */ var _src_utils_FormErrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var categories = new _src_services_Categories__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]();




var AdminVideo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminVideo, _React$Component);

  function AdminVideo() {
    var _this;

    _classCallCheck(this, AdminVideo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminVideo).call(this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      filmId: next_router__WEBPACK_IMPORTED_MODULE_1___default.a.query.idFilm,
      category: "",
      titleFilm: "",
      category_id: "",
      videos: [],
      film: {},
      title: "",
      title_pt: "",
      vimed_id: "",
      titleValid: false,
      titlePtValid: false,
      vimeoValid: false,
      formErrors: {
        title: '',
        titulo: '',
        vimeo: ''
      }
    };
    return _this;
  }

  _createClass(AdminVideo, [{
    key: "handleInput",
    value: function handleInput(e) {
      var _this2 = this;

      var name = e.target.name;
      var value = e.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        _this2.validateField(name, value);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      categories.getFilmById(next_router__WEBPACK_IMPORTED_MODULE_1___default.a.query.idFilm).then(function (res) {
        _this3.setState({
          film: res,
          category: res.category.name,
          category_id: res.category_id,
          titleFilm: res.title,
          videos: res.videos
        });
      });
    }
  }, {
    key: "validateField",
    value: function validateField(fieldName, value) {
      var fieldValidationErrors = this.state.formErrors;
      var titleValid = this.state.titleValid;
      var titlePtValid = this.state.titlePtValid;
      var vimeoValid = this.state.vimeoValid;

      switch (fieldName) {
        case 'title':
          titleValid = value.length >= 3;
          fieldValidationErrors.title = titleValid ? '' : ' is too short';
          break;

        case 'title_pt':
          titlePtValid = value.length >= 3;
          fieldValidationErrors.titulo = titlePtValid ? '' : ' é muito curto';
          break;

        case 'vimeo_id':
          vimeoValid = value.length >= 5;
          fieldValidationErrors.vimeo = vimeoValid ? '' : ': id error';
          break;

        default:
          break;
      }

      this.setState({
        formErrors: fieldValidationErrors,
        titleValid: titleValid,
        titlePtValid: titlePtValid,
        vimeoValid: vimeoValid
      }, this.validateForm);
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      this.setState({
        formValid: this.state.titleValid && this.state.titlePtValid && this.state.vimeoValid
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this4 = this;

      e.preventDefault();
      var _this$state = this.state,
          title = _this$state.title,
          title_pt = _this$state.title_pt,
          vimeo_id = _this$state.vimeo_id,
          filmId = _this$state.filmId;
      var data = {
        title: title,
        title_pt: title_pt,
        vimeo_id: vimeo_id,
        film_id: filmId
      };
      categories.saveVideo(data).then(function (res) {
        _this4.setState({
          videos: _toConsumableArray(_this4.state.videos).concat([res.data])
        });
      });
    }
  }, {
    key: "deleteVideo",
    value: function deleteVideo(videoId, index) {
      var _this5 = this;

      categories.deleteVideo(videoId).then(function (res) {
        var videos = _this5.state.videos;

        _this5.setState({
          videos: _toConsumableArray(videos.slice(0, index)).concat(_toConsumableArray(videos.slice(index + 1)))
        });
      });
    }
  }, {
    key: "done",
    value: function done() {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin");
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$state2 = this.state,
          filmId = _this$state2.filmId,
          category = _this$state2.category,
          category_id = _this$state2.category_id,
          titleFilm = _this$state2.titleFilm,
          videos = _this$state2.videos;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "admin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "arrow-back action",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin/".concat(category_id, "/").concat(category, "/film/").concat(filmId));
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-arrow-left icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_logo__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "title"
      }, category, " > ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, titleFilm)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form -grid -video",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -four"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "English"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "title",
        name: "title",
        className: "input",
        value: this.state.title,
        placeholder: "Title*",
        onChange: function onChange(event) {
          return _this6.handleInput(event);
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -four"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Portuguese"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "titulo",
        name: "title_pt",
        className: "input",
        value: this.state.title_pt,
        placeholder: "T\xEDtulo*",
        onChange: function onChange(event) {
          return _this6.handleInput(event);
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -four"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", null, "Vimeo Code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        id: "vimeo",
        name: "vimeo_id",
        className: "input",
        value: this.state.vimeo_id,
        placeholder: "VimeoID*",
        onChange: function onChange(event) {
          return _this6.handleInput(event);
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -four"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button -right ".concat(!this.state.formValid ? '-disabled' : ''),
        disabled: !this.state.formValid
      }, "Add Video"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_utils_FormErrors__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
        formErrors: this.state.formErrors
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "videos"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Videos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "list"
      }, videos.length === 0 ? 'No video registered' : videos.map(function (video, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
          className: "player",
          key: video.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4___default.a, {
          video: video.vimeo_id,
          width: 480,
          showByline: false,
          showTitle: false,
          showPortrait: false
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "button -small",
          onClick: function onClick() {
            return _this6.deleteVideo(video.id, index);
          }
        }, "Excluir v\xEDdeo"));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button -center",
        onClick: function onClick() {
          return _this6.done();
        }
      }, "Finalizar"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_footer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null));
    }
  }]);

  return AdminVideo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AdminVideo));

/***/ })
/******/ ]);