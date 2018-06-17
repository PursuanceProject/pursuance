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

var MdLocalTaxi = function MdLocalTaxi(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm8.4 18.4h23.2l-2.5-7.5h-18.2z m20.7 8.2c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m-18.2 0c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m20.7-16.6l3.4 10v13.4c0 0.9-0.7 1.6-1.6 1.6h-1.8c-0.9 0-1.6-0.7-1.6-1.6v-1.8h-20v1.8c0 0.9-0.7 1.6-1.6 1.6h-1.8c-0.9 0-1.6-0.7-1.6-1.6v-13.4l3.4-10c0.4-1 1.4-1.6 2.5-1.6h4.1v-3.4h10v3.4h4.1c1.1 0 2.2 0.6 2.5 1.6z' })
        )
    );
};

exports.default = MdLocalTaxi;
module.exports = exports['default'];