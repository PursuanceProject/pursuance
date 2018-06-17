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

var MdBorderOuter = function MdBorderOuter(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm15 18.4v3.2h-3.4v-3.2h3.4z m6.6 6.6v3.4h-3.2v-3.4h3.2z m10 6.6v-23.2h-23.2v23.2h23.2z m-26.6-26.6h30v30h-30v-30z m23.4 13.4v3.2h-3.4v-3.2h3.4z m-6.8 0v3.2h-3.2v-3.2h3.2z m0-6.8v3.4h-3.2v-3.4h3.2z' })
        )
    );
};

exports.default = MdBorderOuter;
module.exports = exports['default'];