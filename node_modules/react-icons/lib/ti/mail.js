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

var TiMail = function TiMail(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.7 11.7h-23.4c-1.8 0-3.3 1.5-3.3 3.3v15c0 1.8 1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3v-15c0-1.8-1.5-3.3-3.3-3.3z m-16.2 12.2l2.7 2.3c0.5 0.4 1.1 0.7 1.8 0.7s1.3-0.3 1.8-0.7l2.7-2.3-0.1 0 6.1 6.1h-21l6.1-6.1-0.1 0z m-7.2 4.9v-11.2l6 5.2-6 6z m17.4-6l6-5.2v11.2l-6-6z m6-7.8v0.3l-11 9.6c-0.4 0.4-1 0.4-1.4 0l-11-9.6v-0.3h23.4z' })
        )
    );
};

exports.default = TiMail;
module.exports = exports['default'];