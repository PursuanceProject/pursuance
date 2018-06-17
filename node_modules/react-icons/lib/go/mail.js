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

var GoMail = function GoMail(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm2.5 7.5v25h35v-25h-35z m30 2.5l-12.5 10.3-12.5-10.3h25z m-27.5 2.5l9.8 7.5-9.8 7.5v-15z m2.5 17.5l9.9-8.1 2.6 2 2.6-2 9.9 8.1h-25z m27.5-2.5l-9.9-7.5 9.9-7.5v15z' })
        )
    );
};

exports.default = GoMail;
module.exports = exports['default'];