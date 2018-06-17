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

var MdRecordVoiceOver = function MdRecordVoiceOver(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm33.4 3.4q4.9 5 4.9 11.7t-4.9 11.5l-2.7-2.6q3.4-4 3.4-9.1t-3.4-8.9z m-5.4 5.5q2.5 2.7 2.5 6.2t-2.5 5.9l-2.8-2.8q1-1.5 1-3.2t-1-3.3z m-13 16.1q4.2 0 8.8 1.8t4.6 4.8v3.4h-26.8v-3.4q0-2.9 4.6-4.8t8.8-1.8z m-6.6-10q0-2.7 1.9-4.7t4.7-1.9 4.7 1.9 1.9 4.7-1.9 4.7-4.7 1.9-4.7-1.9-1.9-4.7z' })
        )
    );
};

exports.default = MdRecordVoiceOver;
module.exports = exports['default'];