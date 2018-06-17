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

var MdAccountBox = function MdAccountBox(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm10 28.4v1.6h20v-1.6c0-3.4-6.6-5.2-10-5.2s-10 1.8-10 5.2z m15-13.4c0-2.7-2.3-5-5-5s-5 2.3-5 5 2.3 5 5 5 5-2.3 5-5z m-20-6.6c0-1.8 1.5-3.4 3.4-3.4h23.2c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.9 0-3.4-1.6-3.4-3.4v-23.2z' })
        )
    );
};

exports.default = MdAccountBox;
module.exports = exports['default'];