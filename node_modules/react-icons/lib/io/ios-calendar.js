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

var IoIosCalendar = function IoIosCalendar(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm5 35v-20h30v20h-30z m30-27.5v6.3h-30v-6.3h7.5v3.8h1.3v-3.8h12.5v3.8h1.2v-3.8h7.5z m-22.5 0v-2.5h1.3v2.5h-1.3z m13.8 0v-2.5h1.2v2.5h-1.2z' })
        )
    );
};

exports.default = IoIosCalendar;
module.exports = exports['default'];