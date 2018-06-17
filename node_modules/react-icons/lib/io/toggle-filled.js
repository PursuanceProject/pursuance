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

var IoToggleFilled = function IoToggleFilled(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm25 16.3c2 0 3.8 1.7 3.8 3.7s-1.8 3.8-3.8 3.8-3.7-1.8-3.7-3.8 1.7-3.7 3.7-3.7z m0-6.3c5.5 0 10 4.5 10 10s-4.5 10-10 10h-15c-5.5 0-10-4.5-10-10s4.5-10 10-10h15z m0 16.3c3.4 0 6.3-2.9 6.3-6.3s-2.9-6.2-6.3-6.2-6.2 2.8-6.2 6.2 2.8 6.3 6.2 6.3z' })
        )
    );
};

exports.default = IoToggleFilled;
module.exports = exports['default'];