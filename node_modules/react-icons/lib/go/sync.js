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

var GoSync = function GoSync(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30.6 18.5c0.5 3.2-0.5 6.5-3 9-3.7 3.6-9.4 4.1-13.5 1.4l2.9-2.9-10.7-1.5 1.5 10.5 3.2-3.1c5.9 4.3 14.3 3.9 19.6-1.4 3.1-3.1 4.6-7.1 4.4-11.1l-4.4-0.9z m-18.2-6c3.7-3.6 9.4-4.1 13.5-1.3l-2.9 2.8 10.8 1.5-1.5-10.5-3.3 3.2c-5.9-4.4-14.3-4-19.6 1.3-3.1 3.1-4.6 7.1-4.4 11.1l4.4 0.9c-0.5-3.2 0.5-6.5 3-9z' })
        )
    );
};

exports.default = GoSync;
module.exports = exports['default'];