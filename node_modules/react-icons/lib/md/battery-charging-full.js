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

var MdBatteryChargingFull = function MdBatteryChargingFull(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm18.4 33.4l6.6-12.5h-3.4v-9.3l-6.6 12.5h3.4v9.3z m7.7-26.8q0.9 0 1.6 0.7t0.7 1.6v25.6q0 0.9-0.7 1.5t-1.6 0.6h-12.2q-0.9 0-1.6-0.6t-0.7-1.6v-25.5q0-0.9 0.7-1.6t1.6-0.7h2.7v-3.2h6.8v3.2h2.7z' })
        )
    );
};

exports.default = MdBatteryChargingFull;
module.exports = exports['default'];