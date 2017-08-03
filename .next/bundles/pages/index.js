
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(546);


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(46);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(47);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(547);

var _link2 = _interopRequireDefault(_link);

var _head = __webpack_require__(559);

var _headings = __webpack_require__(561);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kyleerickson/Documents/Development/grindstone-front-end/pages/index.js?entry';


var Index = function (_Component) {
    (0, _inherits3.default)(Index, _Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);

        return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
    }

    (0, _createClass3.default)(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 9
                }
            }, _react2.default.createElement(_head.HtmlHead, { title: 'Grindstone - Home', metaDesc: 'Grindstone on-demand home', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }), _react2.default.createElement(_headings.H1, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, 'Welcome to On-demand App!'), _react2.default.createElement('p', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, 'Please login to get started.'), _react2.default.createElement(_link2.default, { href: '/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }, 'Sign In')));
        }
    }]);

    return Index;
}(_react.Component);

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kyleerickson/Documents/Development/grindstone-front-end/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kyleerickson/Documents/Development/grindstone-front-end/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(70)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

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
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HtmlHead = undefined;

var _head = __webpack_require__(560);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HtmlHead = exports.HtmlHead = _head2.default;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kyleerickson/Documents/Development/grindstone-front-end/components/head/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kyleerickson/Documents/Development/grindstone-front-end/components/head/index.js"); } } })();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(226);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kyleerickson/Documents/Development/grindstone-front-end/components/head/head.js";

exports.default = function (_ref) {
  var title = _ref.title,
      metaDesc = _ref.metaDesc;
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, title), _react2.default.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement("meta", { name: "description", content: metaDesc, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "\n        /*  Fonts  */\n        @font-face{\n          font-family: \"OpenSans\";\n          src: url('../static/fonts/OpenSans-Light.ttf');\n          font-weight: 200;\n        }\n        @font-face{\n          font-family: \"OpenSans\";\n          src: url('../static/fonts/OpenSans-Regular.ttf');\n          font-weight: 400;\n        }\n        @font-face{\n          font-family: \"OpenSans\";\n          src: url('../static/fonts/OpenSans-SemiBold.ttf');\n          font-weight: 600;\n        }\n        @font-face{\n          font-family: \"OpenSans\";\n          src: url('../static/fonts/OpenSans-Bold.ttf');\n          font-weight: 700;\n        }\n        @font-face{\n          font-family: \"OpenSans\";\n          src: url('../static/fonts/OpenSans-ExtraBold.ttf');\n          font-weight: 800;\n        }\n        @font-face{\n          font-family: \"OpenSans\";\n          src: url('../static/fonts/OpenSans-LightItalic.ttf');\n          font-weight: 200;\n          font-style:italic;\n        }\n        @font-face{\n          font-family: \"OpenSans\";\n          src: url('../static/fonts/OpenSans-RegularItalic.ttf');\n          font-weight: 400;\n          font-style:italic;\n        }\n        @font-face{\n          font-family: \"OpenSans\";\n          src: url('../static/fonts/OpenSans-SemiBoldItalic.ttf');\n          font-weight: 600;\n          font-style:italic;\n        }\n        @font-face{\n          font-family: \"OpenSans\";\n          src: url('../static/fonts/OpenSans-BoldItalic.ttf');\n          font-weight: 700;\n          font-style:italic;\n        }\n        @font-face{\n          font-family: \"OpenSans\";\n          src: url('../static/fonts/OpenSans-ExtraBoldItalic.ttf');\n          font-weight: 800;\n          font-style:italic;\n        }\n\n        @font-face{\n          font-family: \"Bariol\";\n          src: url('../static/fonts/bariol_regular-webfont.ttf');\n          font-weight: 400;\n        }\n        @font-face{\n          font-family: \"Bariol\";\n          src: url('../static/fonts/bariol_regular_italic-webfont.ttf');\n          font-weight: 400;\n          font-style: italic;\n        }\n\n        html {\n          font-family: \"OpenSans\", Arial, sans-serif;\n          font-weight: 200;\n          font-size: 16px;\n        }\n\n        h1, h2, h3, h4, h5, h6{\n          font-family: \"Bariol\", Arial, sans-serif;\n          font-weight: 400;\n        }\n        * { box-sizing: border-box; margin: 0; padding: 0 }\n      ")));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kyleerickson/Documents/Development/grindstone-front-end/components/head/head.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kyleerickson/Documents/Development/grindstone-front-end/components/head/head.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(562);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kyleerickson/Documents/Development/grindstone-front-end/components/headings/index.js';
var H1 = exports.H1 = function H1(props, variant) {
    return _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, props.children, _react2.default.createElement('style', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, '\n                    h1{\n                        font-size: 2em;\n                        color: ' + _colors.blue + ';\n                    }\n                    @media (min-width: 768px) {\n                        h1{\n                            font-size: 2.5em;\n                        }\n                    }\n                    @media (min-width: 992px) {\n                        h1{\n                            font-size: 3em;\n                        }\n                    }\n                '));
};

var H2 = exports.H2 = function H2(props, variant) {
    return _react2.default.createElement('h2', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, props.children, _react2.default.createElement('style', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 35
        }
    }, '\n                    h2{\n                        font-size: 1.625em;\n                    }\n                    @media (min-width: 768px) {\n                        h2{\n                            font-size: 2em;\n                        }\n                    }\n                    @media (min-width: 992px) {\n                        h2{\n                            font-size: 2.25em;\n                        }\n                    }\n                '));
};

var H3 = exports.H3 = function H3(props, variant) {
    return _react2.default.createElement('h3', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }, props.children, _react2.default.createElement('style', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 60
        }
    }, '\n                    h3{\n                        font-size: 1.375em;\n                    }\n                    @media (min-width: 768px) {\n                        h3{\n                            font-size: 1.5em;\n                        }\n                    }\n                    @media (min-width: 992px) {\n                        h3{\n                            font-size: 1.75em;\n                        }\n                    }\n                '));
};

var H4 = exports.H4 = function H4(props, variant) {
    return _react2.default.createElement('h4', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 83
        }
    }, props.children, _react2.default.createElement('style', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 85
        }
    }, 'h4{\n                font-size: 1.125em;\n            }'));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kyleerickson/Documents/Development/grindstone-front-end/components/headings/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kyleerickson/Documents/Development/grindstone-front-end/components/headings/index.js"); } } })();

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var blue = exports.blue = '#4F6DFF';
var purple = exports.purple = "#7C4AFF";

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/kyleerickson/Documents/Development/grindstone-front-end/components/colors/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kyleerickson/Documents/Development/grindstone-front-end/components/colors/index.js"); } } })();

/***/ })

},[545]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2MwOWRkOTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkL2luZGV4LmpzP2MwOWRkOTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkL2hlYWQuanM/YzA5ZGQ5OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRpbmdzL2luZGV4LmpzP2MwOWRkOTkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2xvcnMvaW5kZXguanM/ODNlM2M1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IEh0bWxIZWFkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJzsgIFxuaW1wb3J0IHsgSDEsIEgyLCBIMywgSDQgfSBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRpbmdzJztcblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEh0bWxIZWFkIHRpdGxlPVwiR3JpbmRzdG9uZSAtIEhvbWVcIiBtZXRhRGVzYz1cIkdyaW5kc3RvbmUgb24tZGVtYW5kIGhvbWVcIiAvPlxuICAgICAgICAgICAgICAgIDxIMT5XZWxjb21lIHRvIE9uLWRlbWFuZCBBcHAhPC9IMT5cbiAgICAgICAgICAgICAgICA8cD5QbGVhc2UgbG9naW4gdG8gZ2V0IHN0YXJ0ZWQuPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj48YT5TaWduIEluPC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgSGVhZCBmcm9tICcuL2hlYWQnO1xuXG5leHBvcnQgbGV0IEh0bWxIZWFkID0gSGVhZDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWQvaW5kZXguanMiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCAoe3RpdGxlLCBtZXRhRGVzY30pID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e21ldGFEZXNjfSAvPlxuICAgICAgPHN0eWxlPntgXG4gICAgICAgIC8qICBGb250cyAgKi9cbiAgICAgICAgQGZvbnQtZmFjZXtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuU2Fuc1wiO1xuICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvT3BlblNhbnMtTGlnaHQudHRmJyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNle1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zXCI7XG4gICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9PcGVuU2Fucy1SZWd1bGFyLnR0ZicpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZXtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuU2Fuc1wiO1xuICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvT3BlblNhbnMtU2VtaUJvbGQudHRmJyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNle1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zXCI7XG4gICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9PcGVuU2Fucy1Cb2xkLnR0ZicpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZXtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuU2Fuc1wiO1xuICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvT3BlblNhbnMtRXh0cmFCb2xkLnR0ZicpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZXtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuU2Fuc1wiO1xuICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvT3BlblNhbnMtTGlnaHRJdGFsaWMudHRmJyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICBmb250LXN0eWxlOml0YWxpYztcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNle1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zXCI7XG4gICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9PcGVuU2Fucy1SZWd1bGFySXRhbGljLnR0ZicpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTppdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZXtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuU2Fuc1wiO1xuICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvT3BlblNhbnMtU2VtaUJvbGRJdGFsaWMudHRmJyk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBmb250LXN0eWxlOml0YWxpYztcbiAgICAgICAgfVxuICAgICAgICBAZm9udC1mYWNle1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zXCI7XG4gICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9PcGVuU2Fucy1Cb2xkSXRhbGljLnR0ZicpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTppdGFsaWM7XG4gICAgICAgIH1cbiAgICAgICAgQGZvbnQtZmFjZXtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuU2Fuc1wiO1xuICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvT3BlblNhbnMtRXh0cmFCb2xkSXRhbGljLnR0ZicpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgICAgZm9udC1zdHlsZTppdGFsaWM7XG4gICAgICAgIH1cblxuICAgICAgICBAZm9udC1mYWNle1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkJhcmlvbFwiO1xuICAgICAgICAgIHNyYzogdXJsKCcuLi9zdGF0aWMvZm9udHMvYmFyaW9sX3JlZ3VsYXItd2ViZm9udC50dGYnKTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICB9XG4gICAgICAgIEBmb250LWZhY2V7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiQmFyaW9sXCI7XG4gICAgICAgICAgc3JjOiB1cmwoJy4uL3N0YXRpYy9mb250cy9iYXJpb2xfcmVndWxhcl9pdGFsaWMtd2ViZm9udC50dGYnKTtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk9wZW5TYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNntcbiAgICAgICAgICBmb250LWZhbWlseTogXCJCYXJpb2xcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgfVxuICAgICAgICAqIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0hlYWQ+XG4gIDwvZGl2PlxuKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaGVhZC9oZWFkLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGJsdWUsIHB1cnBsZSB9IGZyb20gJy4uL2NvbG9ycyc7XG5cbmV4cG9ydCBjb25zdCBIMSA9IChwcm9wcywgdmFyaWFudCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGgxPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtibHVlfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2gxPlxuICAgICk7XG4gICAgXG59O1xuXG5leHBvcnQgY29uc3QgSDIgPSAocHJvcHMsIHZhcmlhbnQpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxoMj5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42MjVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjI1ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9oMj5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IEgzID0gKHByb3BzLCB2YXJpYW50KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8aDM+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMzc1ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9oMz5cbiAgICApXG59O1xuXG5leHBvcnQgY29uc3QgSDQgPSAocHJvcHMsIHZhcmlhbnQpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxoND5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIHtgaDR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjEyNWVtO1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2g0PlxuICAgICk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9oZWFkaW5ncy9pbmRleC5qcyIsImV4cG9ydCBjb25zdCBibHVlID0gJyM0RjZERkYnO1xuZXhwb3J0IGNvbnN0IHB1cnBsZSA9IFwiIzdDNEFGRlwiO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9jb2xvcnMvaW5kZXguanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOzs7OztBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7O0FBREE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7QUFEQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBdUJBO0FBQ0E7QUFEQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBcUJBO0FBQ0E7QUFEQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBcUJBO0FBQ0E7QUFEQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqRkE7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        