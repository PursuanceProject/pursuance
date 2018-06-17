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

var TiArrowDownThick = function TiArrowDownThick(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30.7 17.8c-1.3-1.3-3.4-1.3-4.7 0l-2.7 2.6v-12.1c0-1.8-1.5-3.3-3.3-3.3s-3.3 1.5-3.3 3.3v12.1l-2.7-2.6c-1.3-1.3-3.4-1.3-4.7 0s-1.3 3.4 0 4.7l10.7 10.7 10.7-10.7c1.3-1.3 1.3-3.4 0-4.7z' })
        )
    );
};

exports.default = TiArrowDownThick;
module.exports = exports['default'];