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

var MdBubbleChart = function MdBubbleChart(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm17.3 14.7c0-4.5 3.6-8.1 8-8.1s8.1 3.6 8.1 8.1-3.6 8-8.1 8-8-3.6-8-8z m4 15.3c0-1.9 1.5-3.4 3.4-3.4s3.3 1.5 3.3 3.4-1.4 3.4-3.3 3.4-3.4-1.5-3.4-3.4z m-14.7-6c0-3 2.5-5.3 5.4-5.3s5.3 2.3 5.3 5.3-2.3 5.3-5.3 5.3-5.4-2.3-5.4-5.3z' })
        )
    );
};

exports.default = MdBubbleChart;
module.exports = exports['default'];