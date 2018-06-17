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

var GoLock = function GoLock(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm32.5 17.5h-2.5v-7.5s-5-10-10-10-10 5-10 10v7.5h-2.5s-2.5 1.3-2.5 2.5v17.5s1.3 2.5 2.5 2.5h25s2.5-1.2 2.5-2.5v-17.5s-1.2-2.5-2.5-2.5z m-7.5 5h-15v2.5h15v2.5h-15v2.5h15v2.5h-15v2.5h15v2.5h-17.5v-17.5h17.5v2.5z m0-5h-10v-7.5s2.5-5 5-5 5 2.5 5 5v7.5z' })
        )
    );
};

exports.default = GoLock;
module.exports = exports['default'];