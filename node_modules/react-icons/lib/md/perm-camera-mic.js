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

var MdPermCameraMic = function MdPermCameraMic(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm23.4 21.6v-6.6q0-1.3-1.1-2.3t-2.3-1.1-2.3 1.1-1.1 2.3v6.6q0 1.4 1.1 2.4t2.3 1 2.3-1 1.1-2.4z m10-13.2q1.3 0 2.3 0.9t0.9 2.3v20q0 1.4-0.9 2.4t-2.3 1h-11.8v-3.5q3.6-0.6 6-3.4t2.4-6.5h-3.4q0 2.8-1.9 4.8t-4.7 2-4.7-2-1.9-4.8h-3.4q0 3.7 2.4 6.5t6 3.4v3.5h-11.8q-1.3 0-2.3-1t-0.9-2.4v-20q0-1.3 0.9-2.3t2.3-0.9h5.4l3-3.4h10l3 3.4h5.4z' })
        )
    );
};

exports.default = MdPermCameraMic;
module.exports = exports['default'];