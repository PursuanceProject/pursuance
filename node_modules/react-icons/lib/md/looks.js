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

var MdLooks = function MdLooks(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 10c10.1 0 18.4 8.3 18.4 18.4h-3.4c0-8.3-6.7-15-15-15s-15 6.7-15 15h-3.4c0-10.1 8.3-18.4 18.4-18.4z m0 6.6c6.4 0 11.6 5.4 11.6 11.8h-3.2c0-4.6-3.8-8.4-8.4-8.4s-8.4 3.8-8.4 8.4h-3.2c0-6.4 5.2-11.8 11.6-11.8z' })
        )
    );
};

exports.default = MdLooks;
module.exports = exports['default'];