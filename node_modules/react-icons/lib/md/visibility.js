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

var MdVisibility = function MdVisibility(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 15c2.7 0 5 2.3 5 5s-2.3 5-5 5-5-2.3-5-5 2.3-5 5-5z m0 13.4c4.6 0 8.4-3.8 8.4-8.4s-3.8-8.4-8.4-8.4-8.4 3.8-8.4 8.4 3.8 8.4 8.4 8.4z m0-20.9c8.4 0 15.5 5.2 18.4 12.5-2.9 7.3-10 12.5-18.4 12.5s-15.5-5.2-18.4-12.5c2.9-7.3 10-12.5 18.4-12.5z' })
        )
    );
};

exports.default = MdVisibility;
module.exports = exports['default'];