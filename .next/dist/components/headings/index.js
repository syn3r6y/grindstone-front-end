'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _colors = require('../colors');

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