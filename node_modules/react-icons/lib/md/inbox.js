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

var MdInbox = function MdInbox(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 25v-16.6h-23.3v16.6h6.7c0 2.7 2.3 5 5 5s5-2.3 5-5h6.6z m0-20c1.8 0 3.4 1.5 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-23.3c-1.9 0-3.3-1.6-3.3-3.4v-23.2c0-1.9 1.4-3.4 3.3-3.4h23.3z' })
        )
    );
};

exports.default = MdInbox;
module.exports = exports['default'];