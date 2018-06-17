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

var MdGavel = function MdGavel(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm6.4 15.8l9.4 9.4-4.7 4.7-9.5-9.3z m14.1-14.2l9.4 9.5-4.7 4.7-9.4-9.4z m-11.7 11.8l4.6-4.6 23.6 23.5-4.7 4.7z m-7.2 21.6h20v3.4h-20v-3.4z' })
        )
    );
};

exports.default = MdGavel;
module.exports = exports['default'];