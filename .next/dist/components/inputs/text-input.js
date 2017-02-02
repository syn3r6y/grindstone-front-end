'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/kyleerickson/Documents/Development/aeonic/aeonic-react/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = function TextInput(_ref) {
  var name = _ref.name,
      label = _ref.label,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      value = _ref.value,
      error = _ref.error,
      image = _ref.image,
      password = _ref.password;

  var inputClass = 'input-wrapper';
  var textInputClass = 'text-input';

  if (error && error.length > 0) {
    inputClass += " error-active";
  }

  if (image) {
    textInputClass += " image-active";
  }

  return _react2.default.createElement(
    'div',
    { className: inputClass },
    label ? _react2.default.createElement(
      'label',
      { htmlFor: name },
      label
    ) : null,
    _react2.default.createElement(
      'div',
      { className: 'field' },
      _react2.default.createElement('input', {
        type: password ? "password" : "text",
        name: name,
        className: 'text-input',
        placeholder: placeholder,
        value: value,
        onChange: onChange
      }),
      error ? _react2.default.createElement(
        'div',
        { className: 'alert' },
        error
      ) : null
    )
  );
};

exports.default = TextInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5wdXRzL3RleHQtaW5wdXQuanMiXSwibmFtZXMiOlsiVGV4dElucHV0IiwibmFtZSIsImxhYmVsIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwiZXJyb3IiLCJpbWFnZSIsInBhc3N3b3JkIiwiaW5wdXRDbGFzcyIsInRleHRJbnB1dENsYXNzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLE9BQXlFO0FBQUEsTUFBdkVDLElBQXVFLFFBQXZFQSxJQUF1RTtBQUFBLE1BQWpFQyxLQUFpRSxRQUFqRUEsS0FBaUU7QUFBQSxNQUExREMsUUFBMEQsUUFBMURBLFFBQTBEO0FBQUEsTUFBaERDLFdBQWdELFFBQWhEQSxXQUFnRDtBQUFBLE1BQW5DQyxLQUFtQyxRQUFuQ0EsS0FBbUM7QUFBQSxNQUE1QkMsS0FBNEIsUUFBNUJBLEtBQTRCO0FBQUEsTUFBckJDLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFDekYsTUFBSUMsYUFBYSxlQUFqQjtBQUNBLE1BQUlDLGlCQUFpQixZQUFyQjs7QUFFQSxNQUFHSixTQUFTQSxNQUFNSyxNQUFOLEdBQWUsQ0FBM0IsRUFBNkI7QUFDM0JGLGtCQUFjLGVBQWQ7QUFDRDs7QUFFRCxNQUFHRixLQUFILEVBQVM7QUFDUEcsc0JBQWtCLGVBQWxCO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFXRCxVQUFoQjtBQUNJUCxZQUFRO0FBQUE7QUFBQSxRQUFPLFNBQVNELElBQWhCO0FBQXVCQztBQUF2QixLQUFSLEdBQWdELElBRHBEO0FBRUU7QUFBQTtBQUFBLFFBQUssV0FBVSxPQUFmO0FBQ0U7QUFDRSxjQUFNTSxXQUFXLFVBQVgsR0FBd0IsTUFEaEM7QUFFRSxjQUFNUCxJQUZSO0FBR0UsbUJBQVUsWUFIWjtBQUlFLHFCQUFhRyxXQUpmO0FBS0UsZUFBT0MsS0FMVDtBQU1FLGtCQUFVRjtBQU5aLFFBREY7QUFTSUcsY0FBUTtBQUFBO0FBQUEsVUFBSyxXQUFVLE9BQWY7QUFBd0JBO0FBQXhCLE9BQVIsR0FBK0M7QUFUbkQ7QUFGRixHQURGO0FBZ0JELENBNUJEOztrQkE4QmVOLFMiLCJmaWxlIjoidGV4dC1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3lsZWVyaWNrc29uL0RvY3VtZW50cy9EZXZlbG9wbWVudC9hZW9uaWMvYWVvbmljLXJlYWN0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVGV4dElucHV0ID0gKHtuYW1lLCBsYWJlbCwgb25DaGFuZ2UsIHBsYWNlaG9sZGVyLCB2YWx1ZSwgZXJyb3IsIGltYWdlLCBwYXNzd29yZH0pID0+IHtcbiAgbGV0IGlucHV0Q2xhc3MgPSAnaW5wdXQtd3JhcHBlcic7XG4gIGxldCB0ZXh0SW5wdXRDbGFzcyA9ICd0ZXh0LWlucHV0JztcblxuICBpZihlcnJvciAmJiBlcnJvci5sZW5ndGggPiAwKXtcbiAgICBpbnB1dENsYXNzICs9IFwiIGVycm9yLWFjdGl2ZVwiO1xuICB9XG5cbiAgaWYoaW1hZ2Upe1xuICAgIHRleHRJbnB1dENsYXNzICs9IFwiIGltYWdlLWFjdGl2ZVwiO1xuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtpbnB1dENsYXNzfT5cbiAgICAgIHsgbGFiZWwgPyA8bGFiZWwgaHRtbEZvcj17bmFtZX0+e2xhYmVsfTwvbGFiZWw+IDogbnVsbCB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9e3Bhc3N3b3JkID8gXCJwYXNzd29yZFwiIDogXCJ0ZXh0XCJ9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgeyBlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRcIj57ZXJyb3J9PC9kaXY+IDogbnVsbCB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0OyJdfQ==