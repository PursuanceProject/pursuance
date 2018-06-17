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

var IoIosColorWand = function IoIosColorWand(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm15.4 12.4l20 20.1-2.6 2.7-20-20.1z m-1.2-2.6v-5h2.5v5h-2.5z m0 16v-5h2.5v5h-2.5z m7.2-9.4v-2.5h5v2.5h-5z m2.3-7.6l-3.5 3.5-1.8-1.8 3.5-3.5z m-16.5 0l1.8-1.8 3.5 3.5-1.8 1.8z m0 13l3.5-3.5 1.8 1.7-3.5 3.6z m-2.7-5.4v-2.5h5v2.5h-5z' })
        )
    );
};

exports.default = IoIosColorWand;
module.exports = exports['default'];