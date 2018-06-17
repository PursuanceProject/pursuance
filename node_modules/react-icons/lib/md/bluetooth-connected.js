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

var MdBluetoothConnected = function MdBluetoothConnected(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 16.6l3.4 3.4-3.4 3.4-3.2-3.4z m-6.8 10.6l-3.2-3.2v6.3z m-3.2-17.5v6.3l3.2-3.2z m7.9 3.1l-7.2 7.2 7.2 7.2-9.5 9.4h-1.6v-12.6l-7.7 7.6-2.3-2.3 9.3-9.3-9.3-9.3 2.3-2.3 7.7 7.6v-12.6h1.6z m-17.9 7.2l-3.2 3.4-3.4-3.4 3.4-3.4z' })
        )
    );
};

exports.default = MdBluetoothConnected;
module.exports = exports['default'];