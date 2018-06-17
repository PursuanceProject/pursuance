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

var MdFullscreen = function MdFullscreen(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm23.4 8.4h8.2v8.2h-3.2v-5h-5v-3.2z m5 20v-5h3.2v8.2h-8.2v-3.2h5z m-20-11.8v-8.2h8.2v3.2h-5v5h-3.2z m3.2 6.8v5h5v3.2h-8.2v-8.2h3.2z' })
        )
    );
};

exports.default = MdFullscreen;
module.exports = exports['default'];