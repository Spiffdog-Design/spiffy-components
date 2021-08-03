"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = require("react");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Provider = require("../theme/Provider");

var _excluded = ["children", "intent"];

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var intents = ['default', 'outline', 'minimal'];

var Styled = _styledComponents.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    &:disabled {\n        opacity: ", ";\n    }\n"])), function (_ref) {
  var theme = _ref.theme;
  return theme.disabled.opacity;
});

var Button = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var children = _ref2.children,
      intent = _ref2.intent,
      props = _objectWithoutProperties(_ref2, _excluded);

  var theme = (0, _Provider.useTheme)();
  return /*#__PURE__*/React.createElement(Styled, _extends({
    ref: ref,
    theme: theme
  }, props), children);
});
exports.Button = Button;
Button.propTypes = {
  children: _propTypes.default.node,
  intent: _propTypes.default.oneOf(intents),
  size: _propTypes.default.oneOf([0, 1, 2])
};
Button.defaultProps = {
  intent: 'default',
  size: 'md'
};