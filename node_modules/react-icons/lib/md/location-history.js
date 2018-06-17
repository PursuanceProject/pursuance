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

var MdLocationHistory = function MdLocationHistory(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 26.6v-1.4q0-2.3-3.4-3.8t-6.6-1.4-6.6 1.4-3.4 3.8v1.4h20z m-10-17.8q-1.9 0-3.2 1.4t-1.3 3.2 1.3 3.1 3.2 1.3 3.2-1.3 1.3-3.1-1.3-3.2-3.2-1.4z m11.6-5.4q1.4 0 2.4 0.9t1 2.3v23.4q0 1.3-1 2.3t-2.4 1.1h-6.6l-5 5-5-5h-6.6q-1.4 0-2.4-1.1t-1-2.3v-23.4q0-1.3 1-2.3t2.4-0.9h23.2z' })
        )
    );
};

exports.default = MdLocationHistory;
module.exports = exports['default'];