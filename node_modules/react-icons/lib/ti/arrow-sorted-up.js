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

var TiArrowSortedUp = function TiArrowSortedUp(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30.3 22.2l-10.3-10.5-10.3 10.5c-0.4 0.3-0.5 0.8-0.5 1.1s0.1 0.9 0.5 1.2c0.3 0.3 0.6 0.5 1.1 0.5h18.4c0.5 0 0.8-0.2 1.1-0.5 0.4-0.3 0.5-0.8 0.5-1.2s-0.1-0.8-0.5-1.1z' })
        )
    );
};

exports.default = TiArrowSortedUp;
module.exports = exports['default'];