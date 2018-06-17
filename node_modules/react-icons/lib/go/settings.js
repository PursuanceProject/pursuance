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

var GoSettings = function GoSettings(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm5 35h5v-7.5h-5v7.5z m5-30h-5v12.5h5v-12.5z m12.5 0h-5v5h5v-5z m-20 20h10v-5h-10v5z m15 10h5v-15h-5v15z m-2.5-17.5h10v-5h-10v5z m20-12.5h-5v15h5v-15z m-7.5 17.5v5h10v-5h-10z m2.5 12.5h5v-5h-5v5z' })
        )
    );
};

exports.default = GoSettings;
module.exports = exports['default'];