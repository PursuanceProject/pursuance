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

var IoBag = function IoBag(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm32.5 12.5l2.5 25h-35l2.5-25h5v-0.3c0-5.3 4.4-9.7 9.7-9.7h0.6c5.3 0 9.7 4.4 9.7 9.7v0.3h5z m-22.5-0.3v0.3h15v-0.3c0-4-3.2-7.2-7.2-7.2h-0.6c-4 0-7.2 3.2-7.2 7.2z m-7.2 22.8h29.4l-2-20h-2.7v2.8c0.8 0.5 1.3 1.3 1.3 2.2 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-0.9 0.4-1.7 1.2-2.2v-2.8h-15v2.8c0.8 0.5 1.3 1.3 1.3 2.2 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-0.9 0.4-1.7 1.2-2.2v-2.8h-2.7z' })
        )
    );
};

exports.default = IoBag;
module.exports = exports['default'];