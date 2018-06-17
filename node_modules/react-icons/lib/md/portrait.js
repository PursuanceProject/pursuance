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

var MdPortrait = function MdPortrait(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 31.6v-23.2h-23.2v23.2h23.2z m0-26.6c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h23.2z m-4.1 22.1v1.3h-15v-1.3c0-2.5 5-3.7 7.5-3.7s7.5 1.2 7.5 3.7z m-7.5-6.7c-2 0-3.7-1.7-3.7-3.8s1.7-3.7 3.7-3.7 3.8 1.7 3.8 3.7-1.8 3.8-3.8 3.8z' })
        )
    );
};

exports.default = MdPortrait;
module.exports = exports['default'];