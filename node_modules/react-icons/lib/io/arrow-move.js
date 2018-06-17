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

var IoArrowMove = function IoArrowMove(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35 20l-7.5 7.5v-5.9h-8.5l0.1 8.4h5.9l-7.5 7.5-7.5-7.5h5.9v-8.4h-8.4v5.9l-7.5-7.5 7.5-7.5v5.9h8.4v-8.4h-5.9l7.5-7.5 7.5 7.5h-5.9v8.4h8.4v-5.9z' })
        )
    );
};

exports.default = IoArrowMove;
module.exports = exports['default'];