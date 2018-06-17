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

var MdChatBubbleOutline = function MdChatBubbleOutline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm33.4 26.6v-20h-26.8v23.4l3.4-3.4h23.4z m0-23.2q1.3 0 2.3 0.9t0.9 2.3v20q0 1.4-0.9 2.4t-2.3 1h-23.4l-6.6 6.6v-30q0-1.3 0.9-2.3t2.3-0.9h26.8z' })
        )
    );
};

exports.default = MdChatBubbleOutline;
module.exports = exports['default'];