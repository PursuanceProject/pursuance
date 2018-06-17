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

var MdPerson = function MdPerson(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 23.4c4.5 0 13.4 2.1 13.4 6.6v3.4h-26.8v-3.4c0-4.5 8.9-6.6 13.4-6.6z m0-3.4c-3.7 0-6.6-3-6.6-6.6s2.9-6.8 6.6-6.8 6.6 3.1 6.6 6.8-2.9 6.6-6.6 6.6z' })
        )
    );
};

exports.default = MdPerson;
module.exports = exports['default'];