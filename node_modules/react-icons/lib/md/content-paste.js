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

var MdContentPaste = function MdContentPaste(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 33.4v-26.8h-3.2v5h-16.8v-5h-3.2v26.8h23.2z m-11.6-30c-0.9 0-1.6 0.7-1.6 1.6s0.7 1.6 1.6 1.6 1.6-0.7 1.6-1.6-0.7-1.6-1.6-1.6z m11.6 0c1.8 0 3.4 1.4 3.4 3.2v26.8c0 1.8-1.6 3.2-3.4 3.2h-23.2c-1.8 0-3.4-1.4-3.4-3.2v-26.8c0-1.8 1.6-3.2 3.4-3.2h6.9c0.7-2 2.5-3.4 4.7-3.4s4 1.4 4.7 3.4h6.9z' })
        )
    );
};

exports.default = MdContentPaste;
module.exports = exports['default'];