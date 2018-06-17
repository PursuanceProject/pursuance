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

var MdPinDrop = function MdPinDrop(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm8.4 33.4h23.2v3.2h-23.2v-3.2z m8.2-20c0 1.8 1.6 3.2 3.4 3.2 1.9 0 3.4-1.4 3.4-3.2s-1.6-3.4-3.4-3.4-3.4 1.6-3.4 3.4z m13.4 0c0 7.5-10 18.2-10 18.2s-10-10.7-10-18.2c0-5.6 4.5-10 10-10s10 4.4 10 10z' })
        )
    );
};

exports.default = MdPinDrop;
module.exports = exports['default'];