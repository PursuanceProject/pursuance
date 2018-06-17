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

var GoCreditCard = function GoCreditCard(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm5 27.5h5v-2.5h-5v2.5z m7.5 0h5v-2.5h-5v2.5z m2.5-7.5h-10v2.5h10v-2.5z m-5-2.5h2.5l5-5h-2.5l-5 5z m7.5 5h7.5v-2.5h-7.5v2.5z m20-15h-35s-2.5 1.3-2.5 2.5v20s1.3 2.5 2.5 2.5h35s2.5-1.2 2.5-2.5v-20s-1.2-2.5-2.5-2.5z m0 10v11.3s0 1.2-1.2 1.2h-32.5c-1.3 0-1.3-1.2-1.3-1.2v-11.3h2.5l5-5h-7.5v-1.2s0-1.3 1.3-1.3h32.5c1.2 0 1.2 1.3 1.2 1.3v1.2h-15l-5 5h20z' })
        )
    );
};

exports.default = GoCreditCard;
module.exports = exports['default'];