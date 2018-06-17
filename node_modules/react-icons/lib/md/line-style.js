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

var MdLineStyle = function MdLineStyle(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm5 6.6h30v6.8h-30v-6.8z m16.6 13.4v-3.4h13.4v3.4h-13.4z m-16.6 0v-3.4h13.4v3.4h-13.4z m26.6 13.4v-3.4h3.4v3.4h-3.4z m-6.6 0v-3.4h3.4v3.4h-3.4z m-6.6 0v-3.4h3.2v3.4h-3.2z m-6.8 0v-3.4h3.4v3.4h-3.4z m-6.6 0v-3.4h3.4v3.4h-3.4z m21.6-6.8v-3.2h8.4v3.2h-8.4z m-10.7 0v-3.2h8.2v3.2h-8.2z m-10.9 0v-3.2h8.4v3.2h-8.4z' })
        )
    );
};

exports.default = MdLineStyle;
module.exports = exports['default'];