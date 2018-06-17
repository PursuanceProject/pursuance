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

var IoAlertCircled = function IoAlertCircled(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm34.8 33c0.2 0.4 0.4 1 0.1 1.4s-0.6 0.6-1.1 0.6h-32.6c-0.5 0-0.9-0.2-1.1-0.6s-0.1-1 0.1-1.4l16.2-27.3c0.2-0.4 0.6-0.7 1.1-0.7s0.9 0.3 1.1 0.7z m-14.8-1.7v-3.8h-5v3.8h5z m0-6.3v-11.2h-5v11.2h5z' })
        )
    );
};

exports.default = IoAlertCircled;
module.exports = exports['default'];