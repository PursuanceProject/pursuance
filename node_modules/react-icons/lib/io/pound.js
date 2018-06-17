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

var IoPound = function IoPound(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm7.3 27.5h-7.3v-4.2h7.9l1-6.6h-7.7v-4.2h8.3l1.8-10h5l-1.8 10h8.3l1.7-10h5l-1.8 10h7.3v4.2h-8l-0.9 6.6h7.7v4.2h-8.3l-1.7 10h-5l1.7-10h-8.3l-1.7 10h-5z m6.5-10.8l-0.9 6.6h8.3l0.9-6.6h-8.3z' })
        )
    );
};

exports.default = IoPound;
module.exports = exports['default'];