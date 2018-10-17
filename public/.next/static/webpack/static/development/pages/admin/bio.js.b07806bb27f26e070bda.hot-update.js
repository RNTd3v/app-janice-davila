webpackHotUpdate("static/development/pages/admin/bio.js",{

/***/ "./pages/admin/bio.js":
/*!****************************!*\
  !*** ./pages/admin/bio.js ***!
  \****************************/
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
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! draft-js */ "./node_modules/draft-js/lib/Draft.js");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-draft-wysiwyg */ "./node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.js");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! draftjs-to-html */ "./node_modules/draftjs-to-html/lib/draftjs-to-html.js");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! html-to-draftjs */ "./node_modules/html-to-draftjs/dist/html-to-draftjs.js");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_services_BioService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/services/BioService */ "./src/services/BioService.js");
/* harmony import */ var _src_components_logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../src/components/logo */ "./src/components/logo.js");
/* harmony import */ var _src_components_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/components/footer */ "./src/components/footer.js");
var _jsxFileName = "/Users/RNTdesign/Sites/janice/janice-api/public/pages/admin/bio.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var bio = new _src_services_BioService__WEBPACK_IMPORTED_MODULE_8__["default"]();



var AdminBio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminBio, _React$Component);

  function AdminBio() {
    var _this;

    _classCallCheck(this, AdminBio);

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

  _createClass(AdminBio, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /*bio.getBio().then(res =>  {
         this.setState({
             bio: res
           });
      });*/
      var html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
      var htmlPt = '<p>Olá você <strong>editor</strong> rocks 😀</p>';
      var contentBlock = html_to_draftjs__WEBPACK_IMPORTED_MODULE_7___default()(html);
      var contentBlockPt = html_to_draftjs__WEBPACK_IMPORTED_MODULE_7___default()(htmlPt);

      if (contentBlock) {
        var contentState = draft_js__WEBPACK_IMPORTED_MODULE_4__["ContentState"].createFromBlockArray(contentBlock.contentBlocks);

        var _editorState = draft_js__WEBPACK_IMPORTED_MODULE_4__["EditorState"].createWithContent(contentState);

        var contentStatePt = draft_js__WEBPACK_IMPORTED_MODULE_4__["ContentState"].createFromBlockArray(contentBlockPt.contentBlocks);
        var editorStatePt = draft_js__WEBPACK_IMPORTED_MODULE_4__["EditorState"].createWithContent(contentStatePt);
        this.setState({
          editorState: _editorState,
          editorStatePt: editorStatePt
        });
      }
    }
  }, {
    key: "onEditorStateChange",
    value: function onEditorStateChange(editorState) {
      var html = draftjs_to_html__WEBPACK_IMPORTED_MODULE_6___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_4__["convertToRaw"])(editorState.getCurrentContent()));
      this.setState({
        editorState: editorState,
        description: html
      });
      console.log(this.state.description);
    }
  }, {
    key: "onEditorStateChangePt",
    value: function onEditorStateChangePt(editorStatePt) {
      var html = draftjs_to_html__WEBPACK_IMPORTED_MODULE_6___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_4__["convertToRaw"])(editorState.getCurrentContent()));
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "admin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "arrow-back action",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-arrow-left icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "editor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Content (En)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_5__["Editor"], {
        editorState: editorState,
        toolbarClassName: "toolbarClassName",
        wrapperClassName: "wrapperClassName",
        editorClassName: "editorClassName",
        onEditorStateChange: this.onEditorStateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "editor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "Cont\xE9udo (Pt)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_5__["Editor"], {
        editorState: editorStatePt,
        toolbarClassName: "toolbarClassName",
        wrapperClassName: "wrapperClassName",
        editorClassName: "editorClassName",
        onEditorStateChange: this.onEditorStateChangePt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button -center",
        onClick: this.save,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "Save")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }));
    }
  }]);

  return AdminBio;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(AdminBio));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin/bio")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=bio.js.b07806bb27f26e070bda.hot-update.js.map