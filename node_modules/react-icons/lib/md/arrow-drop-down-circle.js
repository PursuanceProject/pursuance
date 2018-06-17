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

var MdArrowDropDownCircle = function MdArrowDropDownCircle(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 23.4l6.6-6.8h-13.2z m0-20q6.9 0 11.8 4.8t4.8 11.8-4.8 11.8-11.8 4.8-11.8-4.8-4.8-11.8 4.8-11.8 11.8-4.8z' })
        )
    );
};

exports.default = MdArrowDropDownCircle;
module.exports = exports['default'];