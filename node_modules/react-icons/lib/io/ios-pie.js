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

var IoIosPie = function IoIosPie(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm18.8 5c8.9 0 16.2 7.3 16.2 16.3s-7.3 16.2-16.2 16.2c-7.2 0-13.4-4.7-15.5-11.2l15.5-3.8v-17.5z m-1.3-2.5v19.1l-16 4c-1.5-2.5-1.5-6.9-1.5-6.9 0-7.1 4.5-16.2 17-16.2h0.5z' })
        )
    );
};

exports.default = IoIosPie;
module.exports = exports['default'];