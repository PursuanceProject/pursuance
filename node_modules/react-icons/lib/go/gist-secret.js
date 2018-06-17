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

var GoGistSecret = function GoGistSecret(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm10 27.5l5 7.5h-10l-2.5-10 10-2.5-2.5 5z m17.5-5l2.5 5-5 7.5h10l2.5-10-10-2.5z m-3.2 0h-8.5l1.7 4-2.5 8.5h10l-2.5-8.5 1.8-4z m3.2-7.5h-15l-5 2.5h25l-5-2.5z m-2.5-10l-5 2.5-5-2.5-2.5 7.5h15l-2.5-7.5z' })
        )
    );
};

exports.default = GoGistSecret;
module.exports = exports['default'];