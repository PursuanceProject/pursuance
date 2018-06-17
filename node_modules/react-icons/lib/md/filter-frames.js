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

var MdFilterFrames = function MdFilterFrames(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 13.4h-20v16.6h20z m3.4 20v-23.4h-7.5l-5.8-5.9-5.9 5.9h-7.6v23.4h26.8z m0-26.8c1.8 0 3.2 1.6 3.2 3.4v23.4c0 1.8-1.4 3.2-3.2 3.2h-26.8c-1.8 0-3.2-1.4-3.2-3.2v-23.4c0-1.8 1.4-3.4 3.2-3.4h6.8l6.6-6.6 6.6 6.6h6.8z' })
        )
    );
};

exports.default = MdFilterFrames;
module.exports = exports['default'];