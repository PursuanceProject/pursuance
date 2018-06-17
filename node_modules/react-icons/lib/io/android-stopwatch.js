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

var IoAndroidStopwatch = function IoAndroidStopwatch(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm18.1 24v-10.2h3.8v10.2h-3.8z m13.8-10.7c1.9 2.6 3.1 5.8 3.1 9.2 0 8.3-6.7 15-15 15s-15-6.7-15-15 6.7-15 15-15c3.4 0 6.6 1.2 9.2 3.1l2.4-2.3 2.6 2.6z m-3.6 17.5c2.2-2.2 3.4-5.2 3.4-8.3s-1.2-6.1-3.4-8.3-5.2-3.4-8.3-3.4-6.1 1.2-8.3 3.4-3.4 5.2-3.4 8.3 1.2 6.1 3.4 8.3 5.2 3.4 8.3 3.4 6.1-1.2 8.3-3.4z m-13.3-24.5v-3.8h10v3.8h-10z' })
        )
    );
};

exports.default = IoAndroidStopwatch;
module.exports = exports['default'];