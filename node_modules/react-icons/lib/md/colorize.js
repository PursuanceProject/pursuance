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

var MdColorize = function MdColorize(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm11.6 31.6l13.4-13.4-3.2-3.2-13.4 13.4z m22.9-22.2c0.7 0.6 0.7 1.6 0 2.3l-5.2 5.3 3.2 3.2-2.3 2.3-2.4-2.3-14.9 14.8h-7.9v-7.9l14.8-14.9-2.3-2.4 2.3-2.3 3.3 3.2 5.2-5.2c0.6-0.7 1.7-0.7 2.3 0z' })
        )
    );
};

exports.default = MdColorize;
module.exports = exports['default'];