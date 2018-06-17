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

var MdMovie = function MdMovie(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 6.6h6.6v23.4q0 1.3-0.9 2.3t-2.3 1.1h-26.8q-1.3 0-2.3-1.1t-0.9-2.3v-20q0-1.3 0.9-2.3t2.3-1.1h1.8l3.2 6.8h5l-3.2-6.8h3.2l3.4 6.8h5l-3.4-6.8h3.4l3.4 6.8h5z' })
        )
    );
};

exports.default = MdMovie;
module.exports = exports['default'];