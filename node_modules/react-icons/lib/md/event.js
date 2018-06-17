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

var MdEvent = function MdEvent(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 31.6v-18.2h-23.2v18.2h23.2z m-5-30h3.4v3.4h1.6q1.4 0 2.4 1t1 2.4v23.2q0 1.4-1 2.4t-2.4 1h-23.2q-1.4 0-2.4-1t-1-2.4v-23.2q0-1.4 1-2.4t2.4-1h1.6v-3.4h3.4v3.4h13.2v-3.4z m1.8 18.4v8.4h-8.4v-8.4h8.4z' })
        )
    );
};

exports.default = MdEvent;
module.exports = exports['default'];