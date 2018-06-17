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

var MdDock = function MdDock(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm26.6 25v-16.6h-13.2v16.6h13.2z m0-23.3c1.8 0 3.4 1.5 3.4 3.3v23.4c0 1.8-1.6 3.2-3.4 3.2h-13.2c-1.8 0-3.4-1.4-3.4-3.2v-23.4c0-1.8 1.6-3.4 3.4-3.4z m-13.2 36.7v-3.4h13.2v3.4h-13.2z' })
        )
    );
};

exports.default = MdDock;
module.exports = exports['default'];