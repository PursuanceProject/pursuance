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

var GoMute = function GoMute(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm7.5 15h-5v10h5l10 7.5h2.5v-25h-2.5l-10 7.5z m28.8 1.3l-2.5-2.5-3.8 3.7-3.7-3.7-2.5 2.4 3.7 3.8-3.7 3.8 2.5 2.5 3.7-3.8 3.8 3.8 2.5-2.5-3.8-3.8 3.8-3.7z' })
        )
    );
};

exports.default = GoMute;
module.exports = exports['default'];