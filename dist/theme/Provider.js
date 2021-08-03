"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = void 0;

var _react = require("react");

var _merge2 = _interopRequireDefault(require("lodash/merge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTheme = Object.freeze({
  colors: {},
  text: {},
  sizes: [0, 4, 8, 12, 16, 24, 32, 40, 48, 56, 64],
  disabled: {
    opacity: 0.65
  }
});
var ThemeContext = /*#__PURE__*/(0, _react.createContext)(defaultTheme);

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  var merged = (0, _merge2.default)(defaultTheme, theme);
  return /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: merged
  }, children);
};

exports.ThemeProvider = ThemeProvider;

var useTheme = function useTheme() {
  var context = (0, _react.useContext)(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};

exports.useTheme = useTheme;