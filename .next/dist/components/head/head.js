"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

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