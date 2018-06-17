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

var MdShoppingCart = function MdShoppingCart(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm28.4 30c1.8 0 3.2 1.6 3.2 3.4s-1.4 3.2-3.2 3.2-3.4-1.4-3.4-3.2 1.6-3.4 3.4-3.4z m-26.8-26.6h5.5l1.6 3.2h24.7c0.9 0 1.6 0.8 1.6 1.8 0 0.3-0.1 0.5-0.2 0.7l-6 10.8c-0.5 1-1.6 1.7-2.9 1.7h-12.4l-1.5 2.8 0 0.2c0 0.2 0.1 0.4 0.3 0.4h19.3v3.4h-20c-1.8 0-3.2-1.6-3.2-3.4 0-0.5 0.1-1.1 0.3-1.6l2.3-4.1-6-12.7h-3.4v-3.2z m10 26.6c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.2-3.4 3.2-3.2-1.4-3.2-3.2 1.4-3.4 3.2-3.4z' })
        )
    );
};

exports.default = MdShoppingCart;
module.exports = exports['default'];