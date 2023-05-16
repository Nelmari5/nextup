(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Input"],{

/***/ "./resources/react/Admin/components/Form/Input.js":
/*!********************************************************!*\
  !*** ./resources/react/Admin/components/Form/Input.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Input = function Input(props) {\n    var type = props.type,\n        name = props.name,\n        value = props.value,\n        placeholder = props.placeholder,\n        onChange = props.onChange,\n        _props$className = props.className,\n        className = _props$className === undefined ? \"form-control\" : _props$className,\n        _props$checked = props.checked,\n        checked = _props$checked === undefined ? false : _props$checked,\n        _props$required = props.required,\n        required = _props$required === undefined ? false : _props$required,\n        _props$arr = props.arr,\n        arr = _props$arr === undefined ? [] : _props$arr,\n        _props$errors = props.errors,\n        errors = _props$errors === undefined ? [] : _props$errors;\n\n\n    var input = null;\n    if (type == \"text\") {\n        input = _react2.default.createElement(\n            _react.Fragment,\n            null,\n            _react2.default.createElement(\"input\", { type: \"text\", className: className + \" \" + (errors[name] && 'is-invalid'), name: name, placeholder: placeholder, value: value, onChange: onChange, required: required }),\n            errors[name] && _react2.default.createElement(\n                \"div\",\n                { className: \"invalid-feedback\" },\n                errors[name]\n            )\n        );\n    }\n    if (type == \"number\") {\n        input = _react2.default.createElement(\n            _react.Fragment,\n            null,\n            _react2.default.createElement(\"input\", { type: \"number\", className: className + \" \" + (errors[name] && 'is-invalid'), name: name, placeholder: placeholder, value: value, onChange: onChange, required: required }),\n            errors[name] && _react2.default.createElement(\n                \"div\",\n                { className: \"invalid-feedback\" },\n                errors[name]\n            )\n        );\n    }\n    if (type == \"email\") {\n        input = _react2.default.createElement(\n            _react.Fragment,\n            null,\n            _react2.default.createElement(\"input\", { type: \"email\", className: className + \" \" + (errors[name] && 'is-invalid'), name: name, placeholder: placeholder, value: value, onChange: onChange, required: required }),\n            errors[name] && _react2.default.createElement(\n                \"div\",\n                { className: \"invalid-feedback\" },\n                errors[name]\n            )\n        );\n    }\n    if (type == \"textarea\") {\n        input = _react2.default.createElement(\n            _react.Fragment,\n            null,\n            _react2.default.createElement(\"textarea\", { className: className + \" \" + (errors[name] && 'is-invalid'), name: name, placeholder: placeholder, value: value, onChange: onChange, required: required }),\n            errors[name] && _react2.default.createElement(\n                \"div\",\n                { className: \"invalid-feedback\" },\n                errors[name]\n            )\n        );\n    }\n    if (type == \"password\") {\n        input = _react2.default.createElement(\n            _react.Fragment,\n            null,\n            _react2.default.createElement(\"input\", { type: \"password\", className: className + \" \" + (errors[name] && 'is-invalid'), name: name, placeholder: placeholder, value: value, onChange: onChange, required: required }),\n            errors[name] && _react2.default.createElement(\n                \"div\",\n                { className: \"invalid-feedback\" },\n                errors[name]\n            )\n        );\n    }\n    if (type == \"email\") {\n        input = _react2.default.createElement(\n            _react.Fragment,\n            null,\n            _react2.default.createElement(\"input\", { type: \"email\", className: className + \" \" + (errors[name] && 'is-invalid'), name: name, placeholder: placeholder, value: value, onChange: onChange, required: required }),\n            errors[name] && _react2.default.createElement(\n                \"div\",\n                { className: \"invalid-feedback\" },\n                errors[name]\n            )\n        );\n    }\n    if (type == \"select\") {\n        input = _react2.default.createElement(\n            _react.Fragment,\n            null,\n            _react2.default.createElement(\n                \"select\",\n                { className: className + \"  custom-select \" + (errors[name] && 'is-invalid'), name: name, value: value, onChange: onChange },\n                _react2.default.createElement(\n                    \"option\",\n                    { value: 0 },\n                    \" \",\n                    !!placeholder ? placeholder : \"-- Select -- \"\n                ),\n                arr.map(function (obj, i) {\n                    return _react2.default.createElement(\n                        \"option\",\n                        { key: i, value: obj.id },\n                        obj.name\n                    );\n                })\n            ),\n            errors[name] && _react2.default.createElement(\n                \"div\",\n                { className: \"invalid-feedback\" },\n                errors[name]\n            )\n        );\n    }\n    if (type == \"file\") {\n        input = _react2.default.createElement(\n            _react.Fragment,\n            null,\n            _react2.default.createElement(\"input\", { type: \"file\", id: \"filecontrol\" + name, className: className + \"-file \" + (errors[name] && 'is-invalid'), name: name, value: value, onChange: onChange, required: required }),\n            errors[name] && _react2.default.createElement(\n                \"div\",\n                { className: \"invalid-feedback\" },\n                \" \",\n                errors[name],\n                \" \"\n            )\n        );\n    }\n    if (type == \"radio\") {\n        input = _react2.default.createElement(\n            _react.Fragment,\n            null,\n            _react2.default.createElement(\"input\", { type: \"radio\", className: className + \" \" + (errors[name] && 'is-invalid'), name: name, defaultChecked: value, onClick: onChange }),\n            placeholder,\n            errors[name] && _react2.default.createElement(\n                \"div\",\n                { className: \"invalid-feedback\" },\n                \" \",\n                errors[name],\n                \" \"\n            )\n        );\n    }\n    return input;\n};\nexports.default = Input;\n\n//# sourceURL=webpack:///./resources/react/Admin/components/Form/Input.js?");

/***/ })

}]);