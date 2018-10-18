webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-addons-css-transition-group */ "./node_modules/react-addons-css-transition-group/index.js");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "./node_modules/react-anchor-link-smooth-scroll/lib/anchor-link.js");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _src_styles_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_styles_main_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "../node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/hocs/withAnalytics */ "./src/hocs/withAnalytics.js");
/* harmony import */ var _src_components_logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/logo */ "./src/components/logo.js");
/* harmony import */ var _src_components_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/menu */ "./src/components/menu.js");
/* harmony import */ var _src_components_language__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/language */ "./src/components/language.js");
/* harmony import */ var _src_components_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/footer */ "./src/components/footer.js");

var _jsxFileName = "/Users/RNTdesign/Sites/janice/janice-api/public/pages/index.js";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








 // Components






var Films = function Films(_ref) {
  var categories = _ref.categories;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Janice D'Avila - Films")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_menu__WEBPACK_IMPORTED_MODULE_10__["default"], {
    language: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_language__WEBPACK_IMPORTED_MODULE_11__["default"], {
    pt: "/filmes",
    en: "/",
    active: "en",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "show-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    offset: "200",
    href: "#sectionNarrative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Narrative"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    offset: "200",
    href: "#sectionCommercials",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Commercials"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_3___default.a, {
    offset: "200",
    href: "#sectionMusic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Music Videos"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "films container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "film narrative",
    id: "sectionNarrative",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Narrative"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_2___default.a, {
    transitionName: "example",
    transitionAppear: true,
    transitionAppearTimeout: 500,
    transitionEnter: false,
    transitionLeave: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, categories[0].films.map(function (film) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "item",
      key: film.id,
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/detail/".concat(film.id));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: film.picture,
      className: "picture",
      alt: film.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, film.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "see more")));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "film commercials",
    id: "sectionCommercials",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Commercials"), categories[1].films.map(function (film) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "item",
      key: film.id,
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/detail/".concat(film.id));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: film.picture,
      className: "picture",
      alt: film.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, film.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, "see more")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "film music",
    id: "sectionMusic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Music Videos"), categories[2].films.map(function (film) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
      className: "item",
      key: film.id,
      onClick: function onClick() {
        return next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push("/detail/".concat(film.id));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: film.picture,
      className: "picture",
      alt: film.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, film.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
      className: "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "see more")));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_components_footer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })));
};

Films.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("".concat("http://127.0.0.1:3333/api/v1", "/category/films"));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", {
            categories: response.data
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Object(_src_hocs_withAnalytics__WEBPACK_IMPORTED_MODULE_8__["default"])()(Films));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.2930fc33736ba01ddee1.hot-update.js.map