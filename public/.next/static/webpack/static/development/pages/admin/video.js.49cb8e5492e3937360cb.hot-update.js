webpackHotUpdate("static/development/pages/admin/video.js",{

/***/ "./pages/admin/video.js":
/*!******************************!*\
  !*** ./pages/admin/video.js ***!
  \******************************/
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
/* harmony import */ var _u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @u-wave/react-vimeo */ "./node_modules/@u-wave/react-vimeo/dist/react-vimeo.es.js");
/* harmony import */ var _src_services_Categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/services/Categories */ "./src/services/Categories.js");
/* harmony import */ var _src_components_logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/logo */ "./src/components/logo.js");
/* harmony import */ var _src_components_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../src/components/footer */ "./src/components/footer.js");
/* harmony import */ var _src_utils_FormErrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/utils/FormErrors */ "./src/utils/FormErrors.js");
var _jsxFileName = "/Users/RNTdesign/Sites/janice/janice-api/public/pages/admin/video.js";

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







var categories = new _src_services_Categories__WEBPACK_IMPORTED_MODULE_5__["default"]();




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
        className: "admin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "arrow-back action",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin/".concat(category_id, "/").concat(category, "/film/").concat(filmId));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-arrow-left icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_logo__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, category, " > ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, titleFilm)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form -grid -video",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
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
          return _this6.handleInput(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
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
          return _this6.handleInput(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Vimeo Code"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        id: "vimeo",
        name: "vimeo_id",
        className: "input",
        value: this.state.vimeo_id,
        placeholder: "VimeoID*",
        onChange: function onChange(event) {
          return _this6.handleInput(event);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -four",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button -right ".concat(!this.state.formValid ? '-disabled' : ''),
        disabled: !this.state.formValid,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Add Video"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_utils_FormErrors__WEBPACK_IMPORTED_MODULE_8__["default"], {
        formErrors: this.state.formErrors,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "videos",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Videos"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, videos.length === 0 ? 'No video registered' : videos.map(function (video, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
          className: "player",
          key: video.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_u_wave_react_vimeo__WEBPACK_IMPORTED_MODULE_4__["default"], {
          video: video.vimeo_id,
          width: 480,
          showByline: false,
          showTitle: false,
          showPortrait: false,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "button -small",
          onClick: function onClick() {
            return _this6.deleteVideo(video.id, index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        }, "Excluir v\xEDdeo"));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button -center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Finalizar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }));
    }
  }]);

  return AdminVideo;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(AdminVideo));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin/video")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=video.js.49cb8e5492e3937360cb.hot-update.js.map