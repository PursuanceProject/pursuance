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

var IoArrowSwap = function IoArrowSwap(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm5 25.6c0-0.3 0.3-0.6 0.6-0.6h19.4v-5l10 7.5-10 7.5v-5h-19.4c-0.3 0-0.6-0.3-0.6-0.6v-3.8z m30-11.2c0 0.3-0.3 0.6-0.6 0.6h-19.4v5l-10-7.5 10-7.5v5h19.4c0.3 0 0.6 0.3 0.6 0.6v3.8z' })
        )
    );
};

exports.default = IoArrowSwap;
module.exports = exports['default'];