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

var MdContacts = function MdContacts(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm28.4 28.4v-2.5c0-2.9-5.6-4.3-8.4-4.3s-8.4 1.4-8.4 4.3v2.5h16.8z m-8.4-17.1c-2 0-3.7 1.7-3.7 3.7s1.7 3.8 3.7 3.8 3.8-1.8 3.8-3.8-1.8-3.7-3.8-3.7z m13.4-4.7c1.8 0 3.2 1.6 3.2 3.4v20c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-20c0-1.8 1.4-3.4 3.2-3.4h26.8z m-26.8 33.4v-3.4h26.8v3.4h-26.8z m26.8-40v3.4h-26.8v-3.4h26.8z' })
        )
    );
};

exports.default = MdContacts;
module.exports = exports['default'];