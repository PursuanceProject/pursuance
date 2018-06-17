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

var TiMediaPlayOutline = function TiMediaPlayOutline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm15 11.7c0 0 0.1 0.1 0.1 0.1l8.5 8.2-8.5 8.3-0.1 0 0-16.6z m0-3.4c-1.8 0-3.3 1.5-3.3 3.4v16.6c0 1.9 1.5 3.4 3.3 3.4 0.9 0 1.7-0.4 2.3-1l11-10.7s-6.6-6.4-11-10.7c-0.6-0.6-1.4-1-2.3-1z' })
        )
    );
};

exports.default = TiMediaPlayOutline;
module.exports = exports['default'];