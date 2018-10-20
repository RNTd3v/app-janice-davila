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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = require("react-draft-wysiwyg");

/***/ }),

/***/ 27:
/***/ (function(module, exports) {

module.exports = require("draftjs-to-html");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = require("html-to-draftjs");

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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


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

/***/ 73:
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

// EXTERNAL MODULE: external "draft-js"
var external_draft_js_ = __webpack_require__(20);

// EXTERNAL MODULE: external "react-draft-wysiwyg"
var external_react_draft_wysiwyg_ = __webpack_require__(26);

// EXTERNAL MODULE: external "draftjs-to-html"
var external_draftjs_to_html_ = __webpack_require__(27);
var external_draftjs_to_html_default = /*#__PURE__*/__webpack_require__.n(external_draftjs_to_html_);

// EXTERNAL MODULE: external "html-to-draftjs"
var external_html_to_draftjs_ = __webpack_require__(28);
var external_html_to_draftjs_default = /*#__PURE__*/__webpack_require__.n(external_html_to_draftjs_);

// EXTERNAL MODULE: ./src/services/AuthService.js
var AuthService = __webpack_require__(8);

// CONCATENATED MODULE: ./src/services/BioService.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var auth = new AuthService["a" /* default */]();

var BioService =
/*#__PURE__*/
function () {
  function BioService() {
    _classCallCheck(this, BioService);

    this.domain = "http://127.0.0.1:3333/api/v1";
    this.fetch = this.fetch.bind(this);
  }

  _createClass(BioService, [{
    key: "getBio",
    value: function getBio() {
      return this.fetch("".concat(this.domain, "/bios/1"), {
        method: 'GET'
      }).then(function (res) {
        return Promise.resolve(res);
      });
    }
  }, {
    key: "saveBio",
    value: function saveBio(data) {
      return this.fetch("".concat(this.domain, "/bios/1"), {
        method: 'PUT',
        body: JSON.stringify(data)
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

  return BioService;
}();


// EXTERNAL MODULE: ./src/components/logo.js
var logo = __webpack_require__(3);

// EXTERNAL MODULE: ./src/components/footer.js
var footer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/admin/bio.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function bio_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function bio_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function bio_createClass(Constructor, protoProps, staticProps) { if (protoProps) bio_defineProperties(Constructor.prototype, protoProps); if (staticProps) bio_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var bio = new BioService();



var bio_AdminBio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminBio, _React$Component);

  function AdminBio() {
    var _this;

    bio_classCallCheck(this, AdminBio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminBio).call(this));
    _this.onEditorStateChange = _this.onEditorStateChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onEditorStateChangePt = _this.onEditorStateChangePt.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.save = _this.save.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      title: 'Bio',
      title_pt: 'Bio',
      description: '',
      description_pt: '',
      editorState: '',
      editorStatePt: ''
    };
    return _this;
  }

  bio_createClass(AdminBio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      bio.getBio().then(function (res) {
        var html = res.description;
        var htmlPt = res.description_pt;
        var contentBlock = external_html_to_draftjs_default()(html);
        var contentBlockPt = external_html_to_draftjs_default()(htmlPt);

        if (contentBlock) {
          var contentState = external_draft_js_["ContentState"].createFromBlockArray(contentBlock.contentBlocks);
          var editorState = external_draft_js_["EditorState"].createWithContent(contentState);
          var contentStatePt = external_draft_js_["ContentState"].createFromBlockArray(contentBlockPt.contentBlocks);
          var editorStatePt = external_draft_js_["EditorState"].createWithContent(contentStatePt);

          _this2.setState({
            editorState: editorState,
            editorStatePt: editorStatePt
          });
        }
      });
    }
  }, {
    key: "onEditorStateChange",
    value: function onEditorStateChange(editorState) {
      var html = external_draftjs_to_html_default()(Object(external_draft_js_["convertToRaw"])(editorState.getCurrentContent()));
      this.setState({
        editorState: editorState,
        description: html
      });
      console.log(this.state.description);
    }
  }, {
    key: "onEditorStateChangePt",
    value: function onEditorStateChangePt(editorStatePt) {
      var html = external_draftjs_to_html_default()(Object(external_draft_js_["convertToRaw"])(editorStatePt.getCurrentContent()));
      this.setState({
        editorStatePt: editorStatePt,
        description_pt: html
      });
      console.log(this.state.description_pt);
    }
  }, {
    key: "save",
    value: function save() {
      var _this$state = this.state,
          title = _this$state.title,
          title_pt = _this$state.title_pt,
          description = _this$state.description,
          description_pt = _this$state.description_pt;
      var data = {
        title: title,
        title_pt: title_pt,
        description: description,
        description_pt: description_pt
      };
      bio.saveBio(data).then(function (res) {
        console.log(res);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          editorState = _this$state2.editorState,
          editorStatePt = _this$state2.editorStatePt;
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
      }, external_react_default.a.createElement("div", {
        className: "editor"
      }, external_react_default.a.createElement("h3", {
        className: "title"
      }, "Content (En)"), external_react_default.a.createElement(external_react_draft_wysiwyg_["Editor"], {
        editorState: editorState,
        toolbarClassName: "toolbarClassName",
        wrapperClassName: "wrapperClassName",
        editorClassName: "editorClassName",
        onEditorStateChange: this.onEditorStateChange,
        toolbar: {
          options: ['inline', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'history']
        }
      })), external_react_default.a.createElement("div", {
        className: "editor"
      }, external_react_default.a.createElement("h3", {
        className: "title"
      }, "Cont\xE9udo (Pt)"), external_react_default.a.createElement(external_react_draft_wysiwyg_["Editor"], {
        editorState: editorStatePt,
        toolbarClassName: "toolbarClassName",
        wrapperClassName: "wrapperClassName",
        editorClassName: "editorClassName",
        onEditorStateChange: this.onEditorStateChangePt,
        toolbar: {
          options: ['inline', 'fontSize', 'list', 'textAlign', 'colorPicker', 'link', 'history']
        }
      })), external_react_default.a.createElement("button", {
        className: "button -center",
        onClick: this.save
      }, "Save")), external_react_default.a.createElement(footer["a" /* default */], null));
    }
  }]);

  return AdminBio;
}(external_react_default.a.Component);

/* harmony default export */ var admin_bio = __webpack_exports__["default"] = (Object(withAuth["a" /* default */])(bio_AdminBio));

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

    this.domain = "http://127.0.0.1:3333/api/v1";
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