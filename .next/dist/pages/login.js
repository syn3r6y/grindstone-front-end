'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = require('/Users/kyleerickson/Documents/Development/aeonic/aeonic-react/node_modules/babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _head = require('../components/head');

var _inputs = require('../components/inputs');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login(props) {
        (0, _classCallCheck3.default)(this, Login);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

        _this.state = {
            email: '',
            password: ''
        };

        _this.updateEmailState = _this.updateEmailState.bind(_this);
        _this.updatePasswordState = _this.updatePasswordState.bind(_this);
        _this.loginSubmit = _this.loginSubmit.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Login, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_head.HtmlHead, { title: 'Operatr - Sign In', metaDesc: 'Operatr on-demand sign in' }),
                _react2.default.createElement(
                    'h2',
                    null,
                    'Sign In'
                ),
                _react2.default.createElement(_inputs.TextInput, {
                    name: 'email',
                    onChange: this.updateEmailState,
                    placeholder: 'Email',
                    value: this.state.email
                }),
                _react2.default.createElement(_inputs.TextInput, {
                    name: 'password',
                    onChange: this.updatePasswordState,
                    placeholder: 'Password',
                    value: this.state.password,
                    password: true
                }),
                _react2.default.createElement(_inputs.Button, {
                    text: 'Log In',
                    onClickEvent: this.loginSubmit,
                    variant: "primary"
                })
            );
        }
    }, {
        key: 'updateEmailState',
        value: function updateEmailState(event) {
            this.setState({ email: event.target.value });
        }
    }, {
        key: 'updatePasswordState',
        value: function updatePasswordState(event) {
            this.setState({ password: event.target.value });
        }
    }, {
        key: 'loginSubmit',
        value: function loginSubmit() {
            var payload = {
                "email": this.state.email,
                "password": this.state.password
            };

            fetch('http://localhost:1337/api/v1/account/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: (0, _stringify2.default)(payload)
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                window.sessionStorage.setItem('token', json['token']);
            });
        }
    }]);
    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwicHJvcHMiLCJzdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1cGRhdGVFbWFpbFN0YXRlIiwiYmluZCIsInVwZGF0ZVBhc3N3b3JkU3RhdGUiLCJsb2dpblN1Ym1pdCIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBheWxvYWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwidGhlbiIsInJlcyIsImpzb24iLCJ3aW5kb3ciLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7SUFFTUEsSzs7O0FBQ0YsbUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSx3SUFDUkEsS0FEUTs7QUFFZCxjQUFLQyxLQUFMLEdBQWE7QUFDVEMsbUJBQU8sRUFERTtBQUVUQyxzQkFBVTtBQUZELFNBQWI7O0FBS0EsY0FBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsY0FBS0MsbUJBQUwsR0FBMkIsTUFBS0EsbUJBQUwsQ0FBeUJELElBQXpCLE9BQTNCO0FBQ0EsY0FBS0UsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCRixJQUFqQixPQUFuQjtBQVRjO0FBVWpCOzs7O2lDQUVRO0FBQ0wsbUJBQ0k7QUFBQTtBQUFBO0FBQ0ksZ0VBQVcsT0FBTSxtQkFBakIsRUFBcUMsVUFBUywyQkFBOUMsR0FESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFHSTtBQUNJLDBCQUFLLE9BRFQ7QUFFSSw4QkFBVSxLQUFLRCxnQkFGbkI7QUFHSSxpQ0FBWSxPQUhoQjtBQUlJLDJCQUFPLEtBQUtILEtBQUwsQ0FBV0M7QUFKdEIsa0JBSEo7QUFTSTtBQUNJLDBCQUFLLFVBRFQ7QUFFSSw4QkFBVSxLQUFLSSxtQkFGbkI7QUFHSSxpQ0FBWSxVQUhoQjtBQUlJLDJCQUFPLEtBQUtMLEtBQUwsQ0FBV0UsUUFKdEI7QUFLSTtBQUxKLGtCQVRKO0FBZ0JJO0FBQ0ksMEJBQUssUUFEVDtBQUVJLGtDQUFjLEtBQUtJLFdBRnZCO0FBR0ksNkJBQVM7QUFIYjtBQWhCSixhQURKO0FBeUJIOzs7eUNBRWdCQyxLLEVBQU87QUFDcEIsaUJBQUtDLFFBQUwsQ0FBYyxFQUFDUCxPQUFPTSxNQUFNRSxNQUFOLENBQWFDLEtBQXJCLEVBQWQ7QUFDSDs7OzRDQUVtQkgsSyxFQUFPO0FBQ3ZCLGlCQUFLQyxRQUFMLENBQWMsRUFBQ04sVUFBVUssTUFBTUUsTUFBTixDQUFhQyxLQUF4QixFQUFkO0FBQ0g7OztzQ0FFWTtBQUNULGdCQUFJQyxVQUFVO0FBQ1YseUJBQVMsS0FBS1gsS0FBTCxDQUFXQyxLQURWO0FBRVYsNEJBQVksS0FBS0QsS0FBTCxDQUFXRTtBQUZiLGFBQWQ7O0FBS0FVLGtCQUFNLDRDQUFOLEVBQW9EO0FBQ2hEQyx3QkFBUSxNQUR3QztBQUVoREMseUJBQVM7QUFDTCw4QkFBVSxrQkFETDtBQUVMLG9DQUFnQjtBQUZYLGlCQUZ1QztBQU1oREMsc0JBQU0seUJBQWVKLE9BQWY7QUFOMEMsYUFBcEQsRUFPR0ssSUFQSCxDQU9RLFVBQUNDLEdBQUQsRUFBUztBQUNiLHVCQUFPQSxJQUFJQyxJQUFKLEVBQVA7QUFDSCxhQVRELEVBU0dGLElBVEgsQ0FTUSxVQUFDRSxJQUFELEVBQVM7QUFDYkMsdUJBQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLE9BQTlCLEVBQXVDSCxLQUFLLE9BQUwsQ0FBdkM7QUFDSCxhQVhEO0FBWUg7Ozs7O2tCQUdVcEIsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3lsZWVyaWNrc29uL0RvY3VtZW50cy9EZXZlbG9wbWVudC9hZW9uaWMvYWVvbmljLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEh0bWxIZWFkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkJztcbmltcG9ydCB7IFRleHRJbnB1dCwgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9pbnB1dHMnO1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy51cGRhdGVFbWFpbFN0YXRlID0gdGhpcy51cGRhdGVFbWFpbFN0YXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlUGFzc3dvcmRTdGF0ZSA9IHRoaXMudXBkYXRlUGFzc3dvcmRTdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmxvZ2luU3VibWl0ID0gdGhpcy5sb2dpblN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPEh0bWxIZWFkICB0aXRsZT1cIk9wZXJhdHIgLSBTaWduIEluXCIgbWV0YURlc2M9XCJPcGVyYXRyIG9uLWRlbWFuZCBzaWduIGluXCIgLz5cbiAgICAgICAgICAgICAgICA8aDI+U2lnbiBJbjwvaDI+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy51cGRhdGVFbWFpbFN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVBhc3N3b3JkU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgdGV4dD1cIkxvZyBJblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tFdmVudD17dGhpcy5sb2dpblN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17XCJwcmltYXJ5XCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHVwZGF0ZUVtYWlsU3RhdGUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZW1haWw6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVBhc3N3b3JkU3RhdGUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7cGFzc3dvcmQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIH1cblxuICAgIGxvZ2luU3VibWl0KCl7XG4gICAgICAgIGxldCBwYXlsb2FkID0ge1xuICAgICAgICAgICAgXCJlbWFpbFwiOiB0aGlzLnN0YXRlLmVtYWlsLFxuICAgICAgICAgICAgXCJwYXNzd29yZFwiOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICAgIH07XG5cbiAgICAgICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvdjEvYWNjb3VudC9sb2dpbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKVxuICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KS50aGVuKChqc29uKSA9PntcbiAgICAgICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGpzb25bJ3Rva2VuJ10pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdfQ==