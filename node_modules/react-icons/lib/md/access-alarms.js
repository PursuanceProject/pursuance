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

var MdAccessAlarms = function MdAccessAlarms(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 33.4c6.5 0 11.6-5.3 11.6-11.8s-5.1-11.6-11.6-11.6-11.6 5.2-11.6 11.6 5.1 11.8 11.6 11.8z m0-26.8c8.4 0 15 6.7 15 15s-6.6 15-15 15-15-6.6-15-15 6.6-15 15-15z m0.9 6.8v8.8l6.6 4-1.3 2-7.8-4.8v-10h2.5z m-7.7-7.7l-7.7 6.3-2.1-2.5 7.6-6.3z m23.4 3.8l-2.1 2.5-7.7-6.5 2.2-2.5z' })
        )
    );
};

exports.default = MdAccessAlarms;
module.exports = exports['default'];