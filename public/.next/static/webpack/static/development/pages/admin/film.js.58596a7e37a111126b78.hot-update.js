webpackHotUpdate("static/development/pages/admin/film.js",{

/***/ "./pages/admin/film.js":
/*!*****************************!*\
  !*** ./pages/admin/film.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _src_styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/hocs/withAuth */ "./src/hocs/withAuth.js");
/* harmony import */ var _src_services_Categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/services/Categories */ "./src/services/Categories.js");
/* harmony import */ var _src_components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/logo */ "./src/components/logo.js");
/* harmony import */ var _src_components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/footer */ "./src/components/footer.js");
/* harmony import */ var _src_utils_FormErrors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/utils/FormErrors */ "./src/utils/FormErrors.js");
var _jsxFileName = "/Users/RNTdesign/Sites/janice/janice-api/public/pages/admin/film.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var categories = new _src_services_Categories__WEBPACK_IMPORTED_MODULE_4__["default"]();




var AdminFilm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminFilm, _React$Component);

  function AdminFilm() {
    var _this;

    _classCallCheck(this, AdminFilm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdminFilm).call(this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      category: next_router__WEBPACK_IMPORTED_MODULE_1___default.a.query.category,
      title: "",
      title_pt: "",
      description: "",
      description_pt: "",
      picture: "",
      is_active: true,
      category_id: next_router__WEBPACK_IMPORTED_MODULE_1___default.a.query.id,
      film: {},
      titleValid: false,
      titlePtValid: false,
      pictureValid: false,
      formErrors: {
        title: '',
        titulo: '',
        picture: ''
      },
      update: false
    };
    return _this;
  }

  _createClass(AdminFilm, [{
    key: "handleChange",
    value: function handleChange(file) {
      var _this2 = this;

      var category = this.state.category.toLowerCase();
      var title = this.state.title.toLowerCase().replace(/[\s-]/g, '-') || 'film';
      var data = new FormData();
      data.append('picture', file[0]);
      data.append('title', title);
      data.append('category', category);
      categories.uploadPicture(data).then(function (res) {
        _this2.setState({
          picture: res.data
        });

        _this2.validateField('picture', res.data);
      });
    }
  }, {
    key: "handleInput",
    value: function handleInput(e) {
      var _this3 = this;

      var name = e.target.name;
      var value = e.target.value;
      this.setState(_defineProperty({}, name, value), function () {
        _this3.validateField(name, value);
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this4 = this;

      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.query.idFilm ? categories.getFilmById(next_router__WEBPACK_IMPORTED_MODULE_1___default.a.query.idFilm).then(function (res) {
        _this4.setState({
          title: res.title,
          title_pt: res.title_pt,
          description: res.description,
          description_pt: res.description_pt,
          picture: res.picture,
          is_active: res.is_active,
          titleValid: true,
          titlePtValid: true,
          pictureValid: true,
          update: true
        });

        _this4.setState({
          formValid: _this4.state.titleValid && _this4.state.titlePtValid && _this4.state.pictureValid
        });
      }) : null;
    }
  }, {
    key: "validateField",
    value: function validateField(fieldName, value) {
      var fieldValidationErrors = this.state.formErrors;
      var titleValid = this.state.titleValid;
      var titlePtValid = this.state.titlePtValid;
      var pictureValid = this.state.pictureValid;

      switch (fieldName) {
        case 'title':
          titleValid = value.length >= 3;
          fieldValidationErrors.title = titleValid ? '' : ' is too short';
          break;

        case 'title_pt':
          titlePtValid = value.length >= 3;
          fieldValidationErrors.titulo = titlePtValid ? '' : ' é muito curto';
          break;

        case 'picture':
          pictureValid = value.length >= 3;
          fieldValidationErrors.picture = pictureValid ? '' : ': select an image';
          break;

        default:
          break;
      }

      this.setState({
        formErrors: fieldValidationErrors,
        titleValid: titleValid,
        titlePtValid: titlePtValid,
        pictureValid: pictureValid
      }, this.validateForm);
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      this.setState({
        formValid: this.state.titleValid && this.state.titlePtValid && this.state.pictureValid
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var _this$state = this.state,
          title = _this$state.title,
          title_pt = _this$state.title_pt,
          description = _this$state.description,
          description_pt = _this$state.description_pt,
          is_active = _this$state.is_active,
          picture = _this$state.picture,
          category_id = _this$state.category_id;
      var data = {
        title: title,
        title_pt: title_pt,
        description: description,
        description_pt: description_pt,
        is_active: is_active,
        picture: picture,
        category_id: category_id
      };
      categories.saveFilm(data).then(function (res) {
        console.log(res);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state2 = this.state,
          category = _this$state2.category,
          category_id = _this$state2.category_id;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "admin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "arrow-back action",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin/".concat(category_id, "/films/"));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-arrow-left icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, category), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form -grid",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "English"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "title",
        name: "title",
        className: "input",
        value: this.state.title,
        placeholder: "Title*",
        onChange: function onChange(event) {
          return _this5.handleInput(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        placeholder: "Description",
        id: "description",
        name: "description",
        value: this.state.description,
        className: "textarea",
        onChange: function onChange(event) {
          return _this5.handleInput(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Portuguese"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "titulo",
        name: "title_pt",
        className: "input",
        value: this.state.title_pt,
        placeholder: "T\xEDtulo*",
        onChange: function onChange(event) {
          return _this5.handleInput(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        placeholder: "Descri\xE7\xE3o",
        id: "descricao",
        name: "description_pt",
        value: this.state.description_pt,
        className: "textarea",
        onChange: function onChange(event) {
          return _this5.handleInput(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "picture",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "Picture*"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        id: "picture",
        name: "picture",
        className: "input",
        placeholder: "Picture",
        onChange: function onChange(e) {
          return _this5.handleChange(e.target.files);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }), this.state.picture ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: this.state.picture,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "required",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, "*Required items")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button -center ".concat(!this.state.formValid ? '-disabled' : ''),
        disabled: !this.state.formValid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Save and Continue")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_utils_FormErrors__WEBPACK_IMPORTED_MODULE_7__["default"], {
        formErrors: this.state.formErrors,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }));
    }
  }]);

  return AdminFilm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(AdminFilm));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin/film")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=film.js.58596a7e37a111126b78.hot-update.js.map