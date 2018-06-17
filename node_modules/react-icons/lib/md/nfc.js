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

var MdNfc = function MdNfc(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 10v20h-20v-20h6.6v3.4h-3.2v13.2h13.2v-13.2h-5v3.7c1.1 0.6 1.8 1.7 1.8 2.9 0 1.8-1.6 3.4-3.4 3.4s-3.4-1.6-3.4-3.4c0-1.2 0.7-2.3 1.8-2.9v-3.7c0-1.8 1.4-3.4 3.2-3.4h8.4z m3.4 23.4v-26.8h-26.8v26.8h26.8z m0-30c1.8 0 3.2 1.4 3.2 3.2v26.8c0 1.8-1.4 3.2-3.2 3.2h-26.8c-1.8 0-3.2-1.4-3.2-3.2v-26.8c0-1.8 1.4-3.2 3.2-3.2h26.8z' })
        )
    );
};

exports.default = MdNfc;
module.exports = exports['default'];