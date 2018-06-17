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

var GoEllipsis = function GoEllipsis(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 12.5h-20s-5 2.5-5 5v5s2.5 5 5 5h20s5-2.5 5-5v-5s-2.5-5-5-5z m-15 10h-5v-5h5v5z m7.5 0h-5v-5h5v5z m7.5 0h-5v-5h5v5z' })
        )
    );
};

exports.default = GoEllipsis;
module.exports = exports['default'];