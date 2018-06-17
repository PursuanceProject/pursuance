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

var MdFlight = function MdFlight(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35 26.6l-13.4-4.1v9.1l3.4 2.5v2.5l-5.9-1.6-5.7 1.6v-2.5l3.2-2.5v-9.1l-13.2 4.1v-3.2l13.2-8.4v-9.1c0-1.5 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v9.1l13.4 8.4v3.2z' })
        )
    );
};

exports.default = MdFlight;
module.exports = exports['default'];