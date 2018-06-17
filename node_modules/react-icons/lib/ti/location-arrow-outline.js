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

var TiLocationArrowOutline = function TiLocationArrowOutline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm18.5 34.9c-0.6 0-2.1-0.3-2.8-2.5l-2-6.1-6.1-2c-2-0.7-2.4-2-2.5-2.6s0.2-2 2.2-3l19-8.8c1.7-0.8 3.2-0.5 3.9 0.6 0.4 0.6 0.6 1.6-0.1 3.2l-8.8 19c-0.9 1.9-2.2 2.2-2.8 2.2z m-9-13.5l6.8 2.3 2.3 6.8 8-17.1-17.1 8z' })
        )
    );
};

exports.default = TiLocationArrowOutline;
module.exports = exports['default'];