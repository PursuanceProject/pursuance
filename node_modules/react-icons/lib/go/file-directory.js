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

var GoFileDirectory = function GoFileDirectory(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35 7.5h-13.7s-1.3-0.6-1.3-1.2v-1.3s-1.2-2.5-2.5-2.5h-12.5s-2.5 1.3-2.5 2.5v27.5h35v-22.5s-1.2-2.5-2.5-2.5z m-17.5 0h-12.5v-1.2s0.6-1.3 1.3-1.3h10s1.2 0.6 1.2 1.3v1.2z' })
        )
    );
};

exports.default = GoFileDirectory;
module.exports = exports['default'];