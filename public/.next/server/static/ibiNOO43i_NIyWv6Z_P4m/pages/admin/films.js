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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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

/***/ 17:
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

    this.domain = "https://janicedavila.com.br/api/v1";
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),

/***/ 39:
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
/* harmony import */ var _src_services_Categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _src_components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _src_components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var categories = new _src_services_Categories__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]();



var AdminFilms =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminFilms, _React$Component);

  function AdminFilms() {
    var _this;

    _classCallCheck(this, AdminFilms);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminFilms).call(this));
    _this.state = {
      category: "",
      categoryId: next_router__WEBPACK_IMPORTED_MODULE_1___default.a.query.id,
      films: []
    };
    return _this;
  }

  _createClass(AdminFilms, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getFilms();
    }
  }, {
    key: "getFilms",
    value: function getFilms() {
      var _this2 = this;

      categories.getFilmsByCategoryId(next_router__WEBPACK_IMPORTED_MODULE_1___default.a.query.id).then(function (res) {
        _this2.setState({
          films: res.films
        });

        _this2.setState({
          category: res.category
        });
      });
    }
  }, {
    key: "deleteFilm",
    value: function deleteFilm(idFilm) {
      var _this3 = this;

      categories.deleteFilm(idFilm).then(function (res) {
        _this3.getFilms();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          films = _this$state.films,
          category = _this$state.category,
          categoryId = _this$state.categoryId;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "admin"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "arrow-back action",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin/category/");
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-arrow-left icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_logo__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "arrow-back action",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin/".concat(categoryId, "/").concat(category, "/film "));
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "far fa-plus-square icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text"
      }, "Add"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "title"
      }, category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row -head"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -img"
      }, "Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -flex"
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -act"
      }, "Action")), films.map(function (film) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row",
          key: film.id
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col -img"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: film.picture,
          className: "picture"
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col -flex"
        }, film.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col -act"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "icon -editar action",
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin/".concat(categoryId, "/").concat(category, "/film/").concat(film.id));
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "far fa-edit icon"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
          className: "text"
        }, "Edit")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "icon -delete  action",
          onClick: function onClick() {
            return _this4.deleteFilm(film.id);
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-eraser icon"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
          className: "text"
        }, "Delete"))));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_footer__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null));
    }
  }]);

  return AdminFilms;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(AdminFilms));

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