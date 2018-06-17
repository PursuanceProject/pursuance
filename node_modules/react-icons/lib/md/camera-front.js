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

var MdCameraFront = function MdCameraFront(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm11.6 3.4v17.5c0-2.9 5.6-4.3 8.4-4.3s8.4 1.4 8.4 4.3v-17.5h-16.8z m16.8-3.4c1.8 0 3.2 1.6 3.2 3.4v23.2c0 1.8-1.4 3.4-3.2 3.4h-11.8l5 5-5 5v-3.4h-8.2v-3.2h8.2v-3.4h-5c-1.8 0-3.2-1.6-3.2-3.4v-23.2c0-1.8 1.4-3.4 3.2-3.4h16.8z m-8.4 13.4c-1.8 0-3.3-1.6-3.3-3.4s1.5-3.4 3.3-3.4 3.4 1.6 3.4 3.4-1.6 3.4-3.4 3.4z m3.4 20h8.2v3.2h-8.2v-3.2z' })
        )
    );
};

exports.default = MdCameraFront;
module.exports = exports['default'];