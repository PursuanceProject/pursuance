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

var GoTerminal = function GoTerminal(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35 5h-30c-1.4 0-2.5 1.1-2.5 2.5v25c0 1.3 1.1 2.5 2.5 2.5h30c1.3 0 2.5-1.2 2.5-2.5v-25c0-1.4-1.2-2.5-2.5-2.5z m-27.5 17.5l5-5-5-5 2.5-2.5 7.5 7.5-7.5 7.5-2.5-2.5z m20 2.5h-10v-2.5h10v2.5z' })
        )
    );
};

exports.default = GoTerminal;
module.exports = exports['default'];