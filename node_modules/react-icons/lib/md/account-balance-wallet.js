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

var MdAccountBalanceWallet = function MdAccountBalanceWallet(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm26.6 22.5q1.1 0 1.8-0.7t0.7-1.8-0.7-1.8-1.8-0.7-1.7 0.7-0.8 1.8 0.8 1.8 1.7 0.7z m-6.6 4.1v-13.2h16.6v13.2h-16.6z m15 3.4v1.6q0 1.4-1 2.4t-2.4 1h-23.2q-1.4 0-2.4-1t-1-2.4v-23.2q0-1.4 1-2.4t2.4-1h23.2q1.4 0 2.4 1t1 2.4v1.6h-15q-1.4 0-2.4 1t-1 2.4v13.2q0 1.4 1 2.4t2.4 1h15z' })
        )
    );
};

exports.default = MdAccountBalanceWallet;
module.exports = exports['default'];