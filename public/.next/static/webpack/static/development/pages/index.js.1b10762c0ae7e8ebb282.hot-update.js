webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/hocs/withAnalytics.js":
/*!***********************************!*\
  !*** ./src/hocs/withAnalytics.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/lib/utils */ "../node_modules/next/dist/lib/utils.js");
/* harmony import */ var next_dist_lib_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/react-ga.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loading */ "./src/components/loading.js");
var _jsxFileName = "/Users/RNTdesign/Sites/janice/janice-api/public/src/hocs/withAnalytics.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/* harmony default export */ __webpack_exports__["default"] = (function () {
  return function (Composed) {
    return (
      /*#__PURE__*/
      function (_Component) {
        _inherits(_class, _Component);

        _createClass(_class, null, [{
          key: "getInitialProps",
          value: function getInitialProps(ctx) {
            return Object(next_dist_lib_utils__WEBPACK_IMPORTED_MODULE_1__["loadGetInitialProps"])(Composed, ctx);
          }
        }]);

        function _class(props) {
          var _this;

          _classCallCheck(this, _class);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
          _this.state = {
            isLoading: true
          };
          return _this;
        }

        _createClass(_class, [{
          key: "componentDidMount",
          value: function componentDidMount() {
            react_ga__WEBPACK_IMPORTED_MODULE_2___default.a.initialize('UA-127770883-1');
            react_ga__WEBPACK_IMPORTED_MODULE_2___default.a.pageview(window.location.pathname);
            this.setState({
              isLoading: false
            });
          }
        }, {
          key: "render",
          value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 28
              },
              __self: this
            }, this.state.isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            })) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Composed, _extends({}, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            })));
          }
        }]);

        return _class;
      }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
    );
  };
});

/***/ })

})
//# sourceMappingURL=index.js.1b10762c0ae7e8ebb282.hot-update.js.map