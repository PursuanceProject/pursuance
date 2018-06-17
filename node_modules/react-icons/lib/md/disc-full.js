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

var MdDiscFull = function MdDiscFull(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm16.6 23.4c1.8 0 3.4-1.6 3.4-3.4s-1.6-3.4-3.4-3.4-3.2 1.6-3.2 3.4 1.4 3.4 3.2 3.4z m0-16.8c7.4 0 13.4 6.1 13.4 13.4s-6 13.4-13.4 13.4-13.2-6.1-13.2-13.4 5.9-13.4 13.2-13.4z m16.8 5h3.2v8.4h-3.2v-8.4z m0 15v-3.2h3.2v3.2h-3.2z' })
        )
    );
};

exports.default = MdDiscFull;
module.exports = exports['default'];