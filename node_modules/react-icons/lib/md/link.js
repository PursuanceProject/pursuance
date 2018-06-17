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

var MdLink = function MdLink(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm28.4 11.6c4.6 0 8.2 3.8 8.2 8.4s-3.6 8.4-8.2 8.4h-6.8v-3.2h6.8c2.8 0 5.1-2.4 5.1-5.2s-2.3-5.2-5.1-5.2h-6.8v-3.2h6.8z m-15 10v-3.2h13.2v3.2h-13.2z m-6.9-1.6c0 2.8 2.3 5.2 5.1 5.2h6.8v3.2h-6.8c-4.6 0-8.2-3.8-8.2-8.4s3.6-8.4 8.2-8.4h6.8v3.2h-6.8c-2.8 0-5.1 2.4-5.1 5.2z' })
        )
    );
};

exports.default = MdLink;
module.exports = exports['default'];