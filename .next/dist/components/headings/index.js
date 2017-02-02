'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.H4 = exports.H3 = exports.H2 = exports.H1 = undefined;

var _react = require('/Users/kyleerickson/Documents/Development/aeonic/aeonic-react/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _colors = require('../colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var H1 = exports.H1 = function H1(props, variant) {
    return _react2.default.createElement(
        'h1',
        null,
        props.children,
        _react2.default.createElement(
            'style',
            null,
            '\n                    h1{\n                        font-size: 2em;\n                        color: ' + _colors.blue + ';\n                    }\n                    @media (min-width: 768px) {\n                        h1{\n                            font-size: 2.5em;\n                        }\n                    }\n                    @media (min-width: 992px) {\n                        h1{\n                            font-size: 3em;\n                        }\n                    }\n                '
        )
    );
};

var H2 = exports.H2 = function H2(props, variant) {
    return _react2.default.createElement(
        'h2',
        null,
        props.children,
        _react2.default.createElement(
            'style',
            null,
            '\n                    h2{\n                        font-size: 1.625em;\n                    }\n                    @media (min-width: 768px) {\n                        h2{\n                            font-size: 2em;\n                        }\n                    }\n                    @media (min-width: 992px) {\n                        h2{\n                            font-size: 2.25em;\n                        }\n                    }\n                '
        )
    );
};

var H3 = exports.H3 = function H3(props, variant) {
    return _react2.default.createElement(
        'h3',
        null,
        props.children,
        _react2.default.createElement(
            'style',
            null,
            '\n                    h3{\n                        font-size: 1.375em;\n                    }\n                    @media (min-width: 768px) {\n                        h3{\n                            font-size: 1.5em;\n                        }\n                    }\n                    @media (min-width: 992px) {\n                        h3{\n                            font-size: 1.75em;\n                        }\n                    }\n                '
        )
    );
};

var H4 = exports.H4 = function H4(props, variant) {
    return _react2.default.createElement(
        'h4',
        null,
        props.children,
        _react2.default.createElement(
            'style',
            null,
            'h4{\n                font-size: 1.125em;\n            }'
        )
    );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiSDEiLCJwcm9wcyIsInZhcmlhbnQiLCJjaGlsZHJlbiIsIkgyIiwiSDMiLCJINCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFFTyxJQUFNQSxrQkFBSyxTQUFMQSxFQUFLLENBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUNsQyxXQUNJO0FBQUE7QUFBQTtBQUNLRCxjQUFNRSxRQURYO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLEtBREo7QUF3QkgsQ0F6Qk07O0FBMkJBLElBQU1DLGtCQUFLLFNBQUxBLEVBQUssQ0FBQ0gsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ2xDLFdBQ0k7QUFBQTtBQUFBO0FBQ0tELGNBQU1FLFFBRFg7QUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosS0FESjtBQXNCSCxDQXZCTTs7QUF5QkEsSUFBTUUsa0JBQUssU0FBTEEsRUFBSyxDQUFDSixLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDbEMsV0FDSTtBQUFBO0FBQUE7QUFDS0QsY0FBTUUsUUFEWDtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixLQURKO0FBc0JILENBdkJNOztBQXlCQSxJQUFNRyxrQkFBSyxTQUFMQSxFQUFLLENBQUNMLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtBQUNsQyxXQUNJO0FBQUE7QUFBQTtBQUNLRCxjQUFNRSxRQURYO0FBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLEtBREo7QUFVSCxDQVhNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9reWxlZXJpY2tzb24vRG9jdW1lbnRzL0RldmVsb3BtZW50L2Flb25pYy9hZW9uaWMtcmVhY3QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgYmx1ZSwgcHVycGxlIH0gZnJvbSAnLi4vY29sb3JzJztcblxuZXhwb3J0IGNvbnN0IEgxID0gKHByb3BzLCB2YXJpYW50KSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8aDE+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgaDF7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2JsdWV9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaDF7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvaDE+XG4gICAgKTtcbiAgICBcbn07XG5cbmV4cG9ydCBjb25zdCBIMiA9IChwcm9wcywgdmFyaWFudCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGgyPlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIGgye1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjYyNWVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaDJ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoMntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2gyPlxuICAgICk7XG59O1xuXG5leHBvcnQgY29uc3QgSDMgPSAocHJvcHMsIHZhcmlhbnQpID0+IHtcbiAgICByZXR1cm4oXG4gICAgICAgIDxoMz5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zNzVlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoM3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2gzPlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBINCA9IChwcm9wcywgdmFyaWFudCkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPGg0PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAge2BoNHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1ZW07XG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvaDQ+XG4gICAgKTtcbn07XG4iXX0=