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

var IoIosStarHalf = function IoIosStarHalf(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm10.9 23.8l-10.9-7.6h13.4l4.1-12.4 4.1 12.4h13.4l-10.9 7.6 4.2 12.5-10.8-7.8-10.8 7.8z m6.6-15.9v19.1l8.4 5.9-3.4-9.5 8.4-5.9h-10.2z' })
        )
    );
};

exports.default = IoIosStarHalf;
module.exports = exports['default'];