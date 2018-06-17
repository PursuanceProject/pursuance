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

var IoIosGridViewOutline = function IoIosGridViewOutline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35 15h-8.7v10h8.7v1.3h-8.7v8.7h-1.3v-8.7h-10v8.7h-1.2v-8.7h-8.8v-1.3h8.8v-10h-8.8v-1.2h8.8v-8.8h1.2v8.8h10v-8.8h1.3v8.8h8.7v1.2z m-10 10v-10h-10v10h10z' })
        )
    );
};

exports.default = IoIosGridViewOutline;
module.exports = exports['default'];