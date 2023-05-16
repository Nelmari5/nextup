(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Button"],{

/***/ "./resources/react/Admin/components/Form/Button.js":
/*!*********************************************************!*\
  !*** ./resources/react/Admin/components/Form/Button.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Button = function Button(props) {\n    var onClick = props.onClick,\n        text = props.text,\n        _props$className = props.className,\n        className = _props$className === undefined ? \"btn btn-primary\" : _props$className,\n        _props$icon = props.icon,\n        icon = _props$icon === undefined ? null : _props$icon,\n        _props$loading = props.loading,\n        loading = _props$loading === undefined ? false : _props$loading,\n        _props$disabled = props.disabled,\n        disabled = _props$disabled === undefined ? false : _props$disabled;\n\n\n    return _react2.default.createElement(\n        _react.Fragment,\n        null,\n        !loading && _react2.default.createElement(\n            \"button\",\n            { type: \"button\", className: className, onClick: onClick, disabled: disabled },\n            !!icon && _react2.default.createElement(\"i\", { \"class\": icon }),\n            text\n        ),\n        !!loading && _react2.default.createElement(\n            \"button\",\n            { className: className, disabled: true },\n            _react2.default.createElement(\"span\", { className: \"spinner-border spinner-border-sm\" }),\n            \"Loading..\"\n        )\n    );\n};\nexports.default = Button;\n\n//# sourceURL=webpack:///./resources/react/Admin/components/Form/Button.js?");

/***/ })

}]);