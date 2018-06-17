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

var IoMale = function IoMale(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35 15l-4.9-4.9-5.4 5.4c1.7 2.3 2.8 5.1 2.8 8.3 0 7.5-6.2 13.7-13.7 13.7s-13.8-6.2-13.8-13.7 6.2-13.8 13.8-13.8c3.1 0 5.9 1.1 8.2 2.8l5.4-5.4-4.9-4.9h12.5v12.5z m-14.2 15.8c1.9-1.9 3-4.4 3-7s-1.1-5.2-3-7.1-4.4-3-7-3-5.2 1.1-7.1 3-3 4.4-3 7.1 1.1 5.1 3 7 4.4 3 7.1 3 5.1-1.1 7-3z' })
        )
    );
};

exports.default = IoMale;
module.exports = exports['default'];