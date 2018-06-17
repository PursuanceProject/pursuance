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

var MdCameraAlt = function MdCameraAlt(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 28.4q3.4 0 5.9-2.5t2.5-5.9-2.5-5.9-5.9-2.5-5.9 2.5-2.5 5.9 2.5 5.9 5.9 2.5z m-5-25h10l3 3.2h5.4q1.3 0 2.3 1.1t0.9 2.3v20q0 1.3-0.9 2.3t-2.3 1.1h-26.8q-1.3 0-2.3-1.1t-0.9-2.3v-20q0-1.3 0.9-2.3t2.3-1.1h5.4z m-0.3 16.6q0-2.2 1.6-3.7t3.7-1.6 3.8 1.6 1.5 3.7-1.5 3.8-3.8 1.5-3.7-1.5-1.6-3.8z' })
        )
    );
};

exports.default = MdCameraAlt;
module.exports = exports['default'];