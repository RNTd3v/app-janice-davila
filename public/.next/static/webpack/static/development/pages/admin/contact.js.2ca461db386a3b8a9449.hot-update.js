webpackHotUpdate("static/development/pages/admin/contact.js",{

/***/ "./pages/admin/contact.js":
/*!********************************!*\
  !*** ./pages/admin/contact.js ***!
  \********************************/
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
/* harmony import */ var _src_services_ContactService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/services/ContactService */ "./src/services/ContactService.js");
/* harmony import */ var _src_components_logo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/components/logo */ "./src/components/logo.js");
/* harmony import */ var _src_components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/components/footer */ "./src/components/footer.js");
var _jsxFileName = "/Users/RNTdesign/Sites/janice/janice-api/public/pages/admin/contact.js";

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






var contact = new _src_services_ContactService__WEBPACK_IMPORTED_MODULE_4__["default"]();



var AdminContact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdminContact, _React$Component);

  function AdminContact() {
    var _this;

    _classCallCheck(this, AdminContact);

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

  _createClass(AdminContact, [{
    key: "handleInput",
    value: function handleInput(e) {
      var name = e.target.name;
      var value = e.target.value;
      this.setState(_defineProperty({}, name, value));
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
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin");
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var _this$state3 = this.state,
          phones = _this$state3.phones,
          emails = _this$state3.emails;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "admin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "arrow-back action",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/admin");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fas fa-arrow-left icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        className: "text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_logo__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Contact > Phone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form -grid -contact",
        onSubmit: this.handleSubmitPhone,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "Number"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button -right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "Add Phone"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Contact > E-mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "form -grid -contact",
        onSubmit: this.handleSubmitEmail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col -three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button -right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, "Add Email"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list-contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "phones",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "Phones"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, phones.length === 0 ? 'No phone registered' : phones.map(function (phone, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
          className: "phone",
          key: phone.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, phone.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 166
          },
          __self: this
        }, phone.number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "button -small",
          onClick: function onClick() {
            return _this7.deletePhone(phone.id, index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, "Excluir Phone"));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "emails",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Emails"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, emails.length === 0 ? 'No email registered' : emails.map(function (email, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
          className: "email",
          key: email.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 182
          },
          __self: this
        }, email.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 183
          },
          __self: this
        }, email.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "button -small",
          onClick: function onClick() {
            return _this7.deleteEmail(email.id, index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, "Excluir Email"));
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button -center",
        onClick: function onClick() {
          return _this7.done();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Finalizar")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_components_footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }));
    }
  }]);

  return AdminContact;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__["default"])(AdminContact));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin/contact")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=contact.js.2ca461db386a3b8a9449.hot-update.js.map