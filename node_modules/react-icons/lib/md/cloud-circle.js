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

var MdCloudCircle = function MdCloudCircle(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm27.5 26.6c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1h-0.9c0-3.7-2.9-6.8-6.6-6.8-3.1 0-5.7 2.2-6.4 5.1l-0.2-0.1c-2.8 0-5 2.3-5 5s2.2 5 5 5h14.1z m-7.5-23.2c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
        )
    );
};

exports.default = MdCloudCircle;
module.exports = exports['default'];