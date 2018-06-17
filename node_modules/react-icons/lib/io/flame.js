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

var IoFlame = function IoFlame(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm10.1 25c-0.9-8.5 5.6-17.5 12.4-22.5-2 11.3 7.6 11.1 7.5 22.5-0.1 9.4-8.2 12.5-10 12.5s-8.9-2-9.9-12.5z m6.8 3.8c0 3.4 3.1 6.2 3.1 6.2s3.2-2.8 3.2-6.2-3.2-6.3-3.2-6.3-3.1 2.8-3.1 6.3z' })
        )
    );
};

exports.default = IoFlame;
module.exports = exports['default'];