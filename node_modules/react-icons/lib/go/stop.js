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

var GoStop = function GoStop(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm27.5 0h-15l-12.5 12.5v15l12.5 12.5h15l12.5-12.5v-15l-12.5-12.5z m7.5 25l-10 10h-10l-10-10v-10l10-10h10l10 10v10z m-17.5-2.5h5v-12.5h-5v12.5z m0 7.5h5v-5h-5v5z' })
        )
    );
};

exports.default = GoStop;
module.exports = exports['default'];