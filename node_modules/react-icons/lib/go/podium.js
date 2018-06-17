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

var GoPodium = function GoPodium(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm17.5 0c-1.2 0-2.5 1.3-2.5 2.5v2.5h-2.5l-7.5 7.5v5h7.5l2.5 15-5 2.5v2.5h20v-2.5l-5-2.5 2.5-15h7.5v-5l-7.5-7.5h-10v-2.5h1.3s1.2-0.7 1.2-1.2-0.6-1.3-1.2-1.3h-1.3z m0 32.5l-2.1-12.5h4.6l0 12.5h-2.5z m-8.7-20l5-5h1.2v2.5h2.5v-2.5h8.8l5 5h-22.5z' })
        )
    );
};

exports.default = GoPodium;
module.exports = exports['default'];