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

var IoInformation = function IoInformation(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm22.5 35h2.5v1.3h-10v-1.3h2.5v-18.7h-2.5v-1.3h7.5v20z m-2.5-23.7c-2.1 0-3.7-1.7-3.7-3.8s1.6-3.7 3.7-3.7 3.8 1.6 3.8 3.7-1.7 3.8-3.8 3.8z' })
        )
    );
};

exports.default = IoInformation;
module.exports = exports['default'];