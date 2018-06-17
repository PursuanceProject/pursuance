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

var GoInfo = function GoInfo(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 15c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m0-12.5c-9.6 0-17.5 7.9-17.5 17.5s7.9 17.5 17.5 17.5 17.5-7.9 17.5-17.5-7.9-17.5-17.5-17.5z m0 30c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5 12.5 5.6 12.5 12.5-5.6 12.5-12.5 12.5z m2.5-12.5c0-1.2-1.2-2.5-2.5-2.5h-2.5s-2.5 1.3-2.5 2.5h2.5v7.5s1.3 2.5 2.5 2.5h2.5s2.5-1.2 2.5-2.5h-2.5v-7.5z' })
        )
    );
};

exports.default = GoInfo;
module.exports = exports['default'];