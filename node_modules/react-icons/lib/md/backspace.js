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

var MdBackspace = function MdBackspace(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.6 26l-5.9-6 5.9-6-2.3-2.4-5.9 6.1-6.1-6.1-2.3 2.4 6 6-6 6 2.3 2.4 6.1-6.1 5.9 6.1z m5-21c1.8 0 3.4 1.6 3.4 3.4v23.2c0 1.8-1.6 3.4-3.4 3.4h-25c-1.1 0-2-0.6-2.6-1.5l-9-13.5 9-13.5c0.6-0.9 1.5-1.5 2.6-1.5h25z' })
        )
    );
};

exports.default = MdBackspace;
module.exports = exports['default'];