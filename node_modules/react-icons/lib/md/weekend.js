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

var MdWeekend = function MdWeekend(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 8.4c1.8 0 3.4 1.4 3.4 3.2v3.6c-2 0.7-3.4 2.5-3.4 4.7v3.5h-20v-3.5c0-2.2-1.4-4-3.4-4.7v-3.6c0-1.8 1.6-3.2 3.4-3.2h20z m5 8.2c1.8 0 3.4 1.6 3.4 3.4v8.4c0 1.8-1.6 3.2-3.4 3.2h-30c-1.8 0-3.4-1.4-3.4-3.2v-8.4c0-1.8 1.6-3.4 3.4-3.4s3.4 1.6 3.4 3.4v5h23.2v-5c0-1.8 1.6-3.4 3.4-3.4z' })
        )
    );
};

exports.default = MdWeekend;
module.exports = exports['default'];