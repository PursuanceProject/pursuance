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

var MdToll = function MdToll(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm5 20c0 4.4 2.7 8.1 6.6 9.5v3.4c-5.7-1.5-10-6.6-10-12.9s4.3-11.4 10-12.9v3.5c-3.9 1.3-6.6 5-6.6 9.4z m20 10c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z m0-23.4c7.3 0 13.4 6.1 13.4 13.4s-6.1 13.4-13.4 13.4-13.4-6.1-13.4-13.4 6.1-13.4 13.4-13.4z' })
        )
    );
};

exports.default = MdToll;
module.exports = exports['default'];