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

var IoIosClock = function IoIosClock(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm19.8 3.8c8.9 0 16.2 7.2 16.2 16.2s-7.3 16.3-16.2 16.3-16.3-7.3-16.3-16.3 7.3-16.2 16.3-16.2z m1.3 17.5v-11.3h-1.3v10h-7.5v1.3h8.8z' })
        )
    );
};

exports.default = IoIosClock;
module.exports = exports['default'];