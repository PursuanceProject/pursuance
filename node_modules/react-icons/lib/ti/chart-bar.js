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

var TiChartBar = function TiChartBar(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm23.3 6.7c0-1.9-1.5-3.4-3.3-3.4s-3.3 1.5-3.3 3.4v20h6.6v-20z m8.4 6.6c0-1.8-1.5-3.3-3.4-3.3s-3.3 1.5-3.3 3.3v13.4h6.7v-13.4z m-16.7 5c0-1.8-1.5-3.3-3.3-3.3s-3.4 1.5-3.4 3.3v8.4h6.7v-8.4z m16.7 13.4h-23.4c-0.9 0-1.6 0.7-1.6 1.6s0.7 1.7 1.6 1.7h23.4c0.9 0 1.6-0.7 1.6-1.7s-0.7-1.6-1.6-1.6z' })
        )
    );
};

exports.default = TiChartBar;
module.exports = exports['default'];