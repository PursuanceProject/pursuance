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

var GoMirror = function GoMirror(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm12.5 12.5l-7.5 7.5 7.5 7.5v-5h15v5l7.5-7.5-7.5-7.5v5h-15v-5z m7.5-12.5l-20 12.5v27.5l20-10 20 10v-27.5l-20-12.5z m17.5 35l-15-7.5v-2.5h-5v2.5l-15 7.5v-20l15-10v10h5v-10l15 10v20z' })
        )
    );
};

exports.default = GoMirror;
module.exports = exports['default'];