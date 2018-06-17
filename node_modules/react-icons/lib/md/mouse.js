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

var MdMouse = function MdMouse(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm18.4 1.8v13.2h-11.8c0-6.8 5.2-12.4 11.8-13.2z m-11.8 23.2v-6.6h26.8v6.6c0 7.3-6.1 13.4-13.4 13.4s-13.4-6.1-13.4-13.4z m15-23.2c6.6 0.8 11.8 6.4 11.8 13.2h-11.8v-13.2z' })
        )
    );
};

exports.default = MdMouse;
module.exports = exports['default'];