'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('/Users/kyleerickson/Documents/Development/aeonic/aeonic-react/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('/Users/kyleerickson/Documents/Development/aeonic/aeonic-react/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('/Users/kyleerickson/Documents/Development/aeonic/aeonic-react/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('/Users/kyleerickson/Documents/Development/aeonic/aeonic-react/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('/Users/kyleerickson/Documents/Development/aeonic/aeonic-react/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('/Users/kyleerickson/Documents/Development/aeonic/aeonic-react/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('/Users/kyleerickson/Documents/Development/aeonic/aeonic-react/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('../components/head');

var _headings = require('../components/headings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_Component) {
    (0, _inherits3.default)(Index, _Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);
        return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
    }

    (0, _createClass3.default)(Index, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_head.HtmlHead, { title: 'Grindstone - Home', metaDesc: 'Grindstone on-demand home' }),
                _react2.default.createElement(
                    _headings.H1,
                    null,
                    'Welcome to On-demand App!'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'Please login to get started.'
                ),
                _react2.default.createElement(
                    _link2.default,
                    { href: '/login' },
                    _react2.default.createElement(
                        'a',
                        null,
                        'Sign In'
                    )
                )
            );
        }
    }]);
    return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztJQUVNQSxLOzs7Ozs7Ozs7O2lDQUNPO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksZ0VBQVUsT0FBTSxtQkFBaEIsRUFBb0MsVUFBUywyQkFBN0MsR0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKO0FBSUk7QUFBQTtBQUFBLHNCQUFNLE1BQUssUUFBWDtBQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCO0FBSkosYUFESjtBQVFIOzs7OztrQkFHVUEsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3lsZWVyaWNrc29uL0RvY3VtZW50cy9EZXZlbG9wbWVudC9hZW9uaWMvYWVvbmljLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBIdG1sSGVhZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZCc7ICBcbmltcG9ydCB7IEgxLCBIMiwgSDMsIEg0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkaW5ncyc7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxIdG1sSGVhZCB0aXRsZT1cIkdyaW5kc3RvbmUgLSBIb21lXCIgbWV0YURlc2M9XCJHcmluZHN0b25lIG9uLWRlbWFuZCBob21lXCIgLz5cbiAgICAgICAgICAgICAgICA8SDE+V2VsY29tZSB0byBPbi1kZW1hbmQgQXBwITwvSDE+XG4gICAgICAgICAgICAgICAgPHA+UGxlYXNlIGxvZ2luIHRvIGdldCBzdGFydGVkLjwvcD5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+PGE+U2lnbiBJbjwvYT48L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdfQ==