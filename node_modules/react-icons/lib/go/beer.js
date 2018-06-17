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

var GoBeer = function GoBeer(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35 10h-7.5v-5c0-2.8-6.2-5-13.7-5s-13.8 2.2-13.8 5v30c0 2.8 6.2 5 13.8 5s13.7-2.2 13.7-5v-5h7.5s2.5-1.2 2.5-2.5v-15s-1.1-2.5-2.5-2.5z m-27.5 22.5h-2.5v-20h2.5v20z m7.5 2.5h-2.5v-20h2.5v20z m7.5-2.5h-2.5v-20h2.5v20z m-8.7-25c-4.9 0-8.8-1.1-8.8-2.5s3.9-2.5 8.8-2.5 8.7 1.1 8.7 2.5-3.9 2.5-8.7 2.5z m18.7 17.5h-5v-10h5v10z' })
        )
    );
};

exports.default = GoBeer;
module.exports = exports['default'];