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

var MdPhoneAndroid = function MdPhoneAndroid(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm28.8 30v-23.4h-17.5v23.4h17.5z m-5.4 5v-1.6h-6.8v1.6h6.8z m3.2-33.4c2.8 0 5 2.3 5 5v26.8c0 2.7-2.2 5-5 5h-13.2c-2.8 0-5-2.3-5-5v-26.8c0-2.7 2.2-5 5-5h13.2z' })
        )
    );
};

exports.default = MdPhoneAndroid;
module.exports = exports['default'];