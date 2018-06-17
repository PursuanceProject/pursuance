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

var MdDirections = function MdDirections(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm23.4 24.1l5.7-5.7-5.7-5.9v4.1h-8.4c-0.9 0-1.6 0.8-1.6 1.8v6.6h3.2v-5h6.8v4.1z m12.8-5.3c0.6 0.7 0.6 1.7 0 2.4l-15 15c-0.7 0.6-1.7 0.6-2.4 0l-15-15c-0.6-0.7-0.6-1.7 0-2.4l15-15c0.7-0.6 1.7-0.6 2.4 0z' })
        )
    );
};

exports.default = MdDirections;
module.exports = exports['default'];