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

var GoCode = function GoCode(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm26.3 7.5l-3.8 3.8 8.8 8.7-8.8 8.8 3.8 3.7 11.2-12.5-11.2-12.5z m-12.5 0l-11.3 12.5 11.3 12.5 3.7-3.7-8.7-8.8 8.7-8.7-3.7-3.8z' })
        )
    );
};

exports.default = GoCode;
module.exports = exports['default'];