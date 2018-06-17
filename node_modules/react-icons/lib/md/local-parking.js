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

var MdLocalParking = function MdLocalParking(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm22 18.4c1.8 0 3.3-1.6 3.3-3.4s-1.5-3.4-3.3-3.4h-5.4v6.8h5.4z m-0.4-13.4c5.6 0 10 4.5 10 10s-4.4 10-10 10h-5v10h-6.6v-30h11.6z' })
        )
    );
};

exports.default = MdLocalParking;
module.exports = exports['default'];