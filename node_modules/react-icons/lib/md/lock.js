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

var MdLock = function MdLock(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm25.2 13.4v-3.4c0-2.8-2.4-5.2-5.2-5.2s-5.2 2.4-5.2 5.2v3.4h10.4z m-5.2 15c1.8 0 3.4-1.6 3.4-3.4s-1.6-3.4-3.4-3.4-3.4 1.6-3.4 3.4 1.6 3.4 3.4 3.4z m10-15c1.8 0 3.4 1.4 3.4 3.2v16.8c0 1.8-1.6 3.2-3.4 3.2h-20c-1.8 0-3.4-1.4-3.4-3.2v-16.8c0-1.8 1.6-3.2 3.4-3.2h1.6v-3.4c0-4.6 3.8-8.4 8.4-8.4s8.4 3.8 8.4 8.4v3.4h1.6z' })
        )
    );
};

exports.default = MdLock;
module.exports = exports['default'];