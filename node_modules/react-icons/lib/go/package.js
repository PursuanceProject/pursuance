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

var GoPackage = function GoPackage(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm18.8 2.5l-18.8 5v22.5l18.8 5 18.7-5v-22.5l-18.7-5z m-16.3 25.7l0-16.9 15 4v16.9l-15-4z m0-19.4l6.2-1.7 16.3 4.3-6.2 1.7-16.3-4.3z m32.5 19.4l-15 4v-16.9l5-1.4v6.1l5-1.3v-6.1l5-1.4 0 17z m-5-18.1v0l-16.3-4.4 5.1-1.3 16.2 4.4-5 1.3z' })
        )
    );
};

exports.default = GoPackage;
module.exports = exports['default'];