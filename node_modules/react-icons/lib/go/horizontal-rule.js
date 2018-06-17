'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = require('react-icon-base');

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoHorizontalRule = function GoHorizontalRule(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm10 17.5h5v5h2.5v-15h-2.5v7.5h-5v-7.5h-2.5v15h2.5v-5z m22.5 5v-5h-2.5v5h2.5z m0-7.5v-5h-2.5v5h2.5z m-7.5 0v-5h5v-2.5h-7.5v15h2.5v-5h5v-2.5h-5z m-17.5 17.5h25v-5h-25v5z' })
        )
    );
};

exports.default = GoHorizontalRule;
module.exports = exports['default'];