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

var MdDeveloperMode = function MdDeveloperMode(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm28.4 31.6v-3.2h3.2v6.6c0 1.8-1.4 3.4-3.2 3.4h-16.8c-1.8 0-3.2-1.6-3.2-3.4v-6.6h3.2v3.2h16.8z m-11.8-6.3l-2.3 2.4-7.7-7.7 7.7-7.7 2.3 2.4-5.2 5.3z m9.1 2.4l-2.3-2.4 5.2-5.3-5.2-5.3 2.3-2.4 7.7 7.7z m-14.1-19.3v3.2h-3.2v-6.6c0-1.8 1.4-3.4 3.2-3.4l16.8 0.1c1.8 0 3.2 1.5 3.2 3.3v6.6h-3.2v-3.2h-16.8z' })
        )
    );
};

exports.default = MdDeveloperMode;
module.exports = exports['default'];