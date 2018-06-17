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

var IoMonitor = function IoMonitor(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm34.1 5c0.5 0 0.9 0.4 0.9 0.9v20.7c0 0.5-0.4 0.9-0.9 0.9h-33.2c-0.5 0-0.9-0.4-0.9-0.9v-20.7c0-0.5 0.4-0.9 0.9-0.9h33.2z m-1.6 20v-17.5h-30v17.5h30z m-11.4 10h-7.2c-2.2 0-3.3-0.2-2.3-0.9s2.3-1.3 2.3-1.8c0-0.3 0.1-3.6 0.1-3.6h7s0.1 3.3 0.1 3.6c0 0.5 1.4 1.1 2.3 1.8s-0.1 0.9-2.3 0.9z' })
        )
    );
};

exports.default = IoMonitor;
module.exports = exports['default'];