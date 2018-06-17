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

var GoDeviceDesktop = function GoDeviceDesktop(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm37.5 2.5h-35s-2.5 1.3-2.5 2.5v22.5s1.3 2.5 2.5 2.5h12.5s-7.5 2.5-7.5 5c0 1.3 1.3 2.5 2.5 2.5h20s2.5-1.2 2.5-2.5c0-2.5-7.5-5-7.5-5h12.5s2.5-1.2 2.5-2.5v-22.5s-1.2-2.5-2.5-2.5z m0 25h-35v-22.5h35v22.5z m-2.5-20h-7.5c-15 2.5-21.2 11.7-22.5 15v2.5h30v-17.5z' })
        )
    );
};

exports.default = GoDeviceDesktop;
module.exports = exports['default'];