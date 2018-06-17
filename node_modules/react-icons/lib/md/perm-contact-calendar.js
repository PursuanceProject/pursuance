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

var MdPermContactCalendar = function MdPermContactCalendar(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 30v-1.6q0-2.3-3.4-3.8t-6.6-1.4-6.6 1.4-3.4 3.8v1.6h20z m-10-20q-2 0-3.5 1.5t-1.5 3.5 1.5 3.5 3.5 1.5 3.5-1.5 1.5-3.5-1.5-3.5-3.5-1.5z m11.6-5q1.4 0 2.4 1t1 2.4v23.2q0 1.4-1 2.4t-2.4 1h-23.2q-1.4 0-2.4-1t-1-2.4v-23.2q0-1.4 1-2.4t2.4-1h1.6v-3.4h3.4v3.4h13.2v-3.4h3.4v3.4h1.6z' })
        )
    );
};

exports.default = MdPermContactCalendar;
module.exports = exports['default'];