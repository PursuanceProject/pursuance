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

var MdPresentToAll = function MdPresentToAll(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm16.6 20h-3.2l6.6-6.6 6.6 6.6h-3.2v6.6h-6.8v-6.6z m18.4 11.7v-23.4h-30v23.4h30z m0-26.7q1.4 0 2.4 1t1 2.4v23.2q0 1.4-1 2.4t-2.4 1h-30q-1.4 0-2.4-1t-1-2.4v-23.2q0-1.4 1-2.4t2.4-1h30z' })
        )
    );
};

exports.default = MdPresentToAll;
module.exports = exports['default'];