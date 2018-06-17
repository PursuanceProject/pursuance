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

var IoIosCrop = function IoIosCrop(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm10 8.8v-3.8h1.3v3.8h-1.3z m1.3 20h16.2v1.2h-17.5v-17.5h1.3v16.3z m20 1.2v-1.2h3.7v1.2h-3.7z m-26.3-20h25v25h-1.2v-23.7h-23.8v-1.3z' })
        )
    );
};

exports.default = IoIosCrop;
module.exports = exports['default'];