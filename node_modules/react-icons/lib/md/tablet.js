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

var MdTablet = function MdTablet(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 30v-20h-23.2v20h23.2z m3.4-23.4c1.8 0 3.4 1.6 3.4 3.4l-0.1 20c0 1.8-1.5 3.4-3.3 3.4h-30c-1.8 0-3.4-1.6-3.4-3.4v-20c0-1.8 1.6-3.4 3.4-3.4h30z' })
        )
    );
};

exports.default = MdTablet;
module.exports = exports['default'];