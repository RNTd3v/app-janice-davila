webpackHotUpdate("static/development/pages/admin/films.js",{

/***/ "./src/services/Categories.js":
/*!************************************!*\
  !*** ./src/services/Categories.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoriesService; });
/* harmony import */ var _AuthService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthService */ "./src/services/AuthService.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var auth = new _AuthService__WEBPACK_IMPORTED_MODULE_0__["default"]();

var CategoriesService =
/*#__PURE__*/
function () {
  function CategoriesService() {
    _classCallCheck(this, CategoriesService);

    this.domain = "http://127.0.0.1:3333/api/v1";
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
    value: function deleteFilm(film, idFilm) {
      return this.fetch("".concat(this.domain, "/films/").concat(idFilm), {
        method: 'DELETE',
        body: JSON.stringify(film)
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



/***/ })

})
//# sourceMappingURL=films.js.826bd180316a9424815d.hot-update.js.map