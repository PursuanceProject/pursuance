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

var IoWand = function IoWand(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm15 18.8l3.8-3.8 3.7 3.8-3.7 3.7z m-15 15l13.8-13.8 3.7 3.8-13.7 13.7z m17.5-26.3v-5h2.5v5h-2.5z m13.6 0.6l-3.5 3.5-1.8-1.7 3.6-3.5z m-21.2 3.5l-3.5-3.5 1.7-1.7 3.5 3.5z m19.5 19.5l-3.6-3.5 1.8-1.8 3.5 3.6z m0.6-11.1v-2.5h5v2.5h-5z' })
        )
    );
};

exports.default = IoWand;
module.exports = exports['default'];