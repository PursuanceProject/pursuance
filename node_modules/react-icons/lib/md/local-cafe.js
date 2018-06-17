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

var MdLocalCafe = function MdLocalCafe(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm3.4 35v-3.4h30v3.4h-30z m30-21.6v-5h-3.4v5h3.4z m0-8.4c1.8 0 3.2 1.5 3.2 3.4v5c0 1.8-1.4 3.2-3.2 3.2h-3.4v5c0 3.7-3 6.8-6.6 6.8h-10c-3.7 0-6.8-3.1-6.8-6.8v-16.6h26.8z' })
        )
    );
};

exports.default = MdLocalCafe;
module.exports = exports['default'];