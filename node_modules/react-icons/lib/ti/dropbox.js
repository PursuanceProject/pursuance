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

var TiDropbox = function TiDropbox(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm5 21.5l8.8 5.8 6.2-5.1-8.8-5.5z m8.8-15.5l-8.8 5.8 6.2 4.9 8.8-5.5z m21.2 5.8l-8.8-5.8-6.2 5.2 8.8 5.5z m-15 10.4l6.2 5.1 8.8-5.8-6.2-4.8z m0 2l-6.2 5.1-2.6-1.8v2l8.8 5.3 8.8-5.3v-2l-2.6 1.8z' })
        )
    );
};

exports.default = TiDropbox;
module.exports = exports['default'];