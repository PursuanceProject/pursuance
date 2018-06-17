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

var MdFormatAlignLeft = function MdFormatAlignLeft(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm5 5h30v3.4h-30v-3.4z m0 30v-3.4h30v3.4h-30z m0-13.4v-3.2h30v3.2h-30z m20-10v3.4h-20v-3.4h20z m0 13.4v3.4h-20v-3.4h20z' })
        )
    );
};

exports.default = MdFormatAlignLeft;
module.exports = exports['default'];