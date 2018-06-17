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

var MdEventBusy = function MdEventBusy(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 31.6v-18.2h-23.2v18.2h23.2z m0-26.6c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.9 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.5-3.4 3.4-3.4h1.6v-3.4h3.4v3.4h13.2v-3.4h3.4v3.4h1.6z m-16.1 23.4l-1.7-1.8 4-4.1-4-4.1 1.7-1.8 4.1 4.1 4.1-4.1 1.7 1.8-4.1 4.1 4.1 4.1-1.7 1.8-4.1-4.1z' })
        )
    );
};

exports.default = MdEventBusy;
module.exports = exports['default'];