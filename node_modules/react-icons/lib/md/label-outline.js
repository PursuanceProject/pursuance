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

var MdLabelOutline = function MdLabelOutline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm26.6 28.4l6-8.4-6-8.4h-18.2v16.8h18.2z m2.8-18.6l7.2 10.2-7.2 10.2c-0.6 0.9-1.7 1.4-2.8 1.4h-18.2c-1.8 0-3.4-1.4-3.4-3.2v-16.8c0-1.8 1.6-3.2 3.4-3.2h18.2c1.1 0 2.1 0.5 2.8 1.4z' })
        )
    );
};

exports.default = MdLabelOutline;
module.exports = exports['default'];