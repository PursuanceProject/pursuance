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

var TiLocationArrow = function TiLocationArrow(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm17.3 31.8c0.6 1.8 1.7 1.8 2.4 0.2l8.9-19c0.8-1.6 0-2.4-1.6-1.6l-19 8.9c-1.7 0.7-1.6 1.8 0.2 2.4l6.8 2.3 2.3 6.8z' })
        )
    );
};

exports.default = TiLocationArrow;
module.exports = exports['default'];