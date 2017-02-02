'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/kyleerickson/Documents/Development/aeonic/aeonic-react/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var text = _ref.text,
      onClickEvent = _ref.onClickEvent,
      variant = _ref.variant;


  var classVariant = 'btn';

  switch (variant) {
    case 'primary':
      classVariant = "btn-primary";
      break;
    // Add more as needed
  }

  return _react2.default.createElement(
    'button',
    { className: classVariant, onClick: onClickEvent },
    _react2.default.createElement(
      'span',
      { className: 'text' },
      text
    )
  );
};

exports.default = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5wdXRzL2J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJ0ZXh0Iiwib25DbGlja0V2ZW50IiwidmFyaWFudCIsImNsYXNzVmFyaWFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsU0FBUyxTQUFUQSxNQUFTLE9BQXFDO0FBQUEsTUFBbENDLElBQWtDLFFBQWxDQSxJQUFrQztBQUFBLE1BQTVCQyxZQUE0QixRQUE1QkEsWUFBNEI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7OztBQUVsRCxNQUFJQyxlQUFlLEtBQW5COztBQUVBLFVBQU9ELE9BQVA7QUFDSSxTQUFLLFNBQUw7QUFDRUMscUJBQWUsYUFBZjtBQUNBO0FBQ0Y7QUFKSjs7QUFPQSxTQUNFO0FBQUE7QUFBQSxNQUFRLFdBQVlBLFlBQXBCLEVBQW1DLFNBQVVGLFlBQTdDO0FBQ0U7QUFBQTtBQUFBLFFBQU0sV0FBVSxNQUFoQjtBQUF5QkQ7QUFBekI7QUFERixHQURGO0FBS0QsQ0FoQkQ7O2tCQWtCZUQsTSIsImZpbGUiOiJidXR0b24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2t5bGVlcmlja3Nvbi9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvYWVvbmljL2Flb25pYy1yZWFjdCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJ1dHRvbiA9ICh7IHRleHQsIG9uQ2xpY2tFdmVudCwgdmFyaWFudCB9KSA9PiB7XG4gIFxuICBsZXQgY2xhc3NWYXJpYW50ID0gJ2J0bic7XG4gICAgXG4gIHN3aXRjaCh2YXJpYW50KXtcbiAgICAgIGNhc2UgJ3ByaW1hcnknOlxuICAgICAgICBjbGFzc1ZhcmlhbnQgPSBcImJ0bi1wcmltYXJ5XCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gQWRkIG1vcmUgYXMgbmVlZGVkXG4gIH1cbiAgXG4gIHJldHVybihcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17IGNsYXNzVmFyaWFudCB9IG9uQ2xpY2s9eyBvbkNsaWNrRXZlbnQgfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dCc+eyB0ZXh0IH08L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il19