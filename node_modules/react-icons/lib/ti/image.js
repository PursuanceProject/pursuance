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

var TiImage = function TiImage(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm18.3 14.2c0 2.3-1.8 4.1-4.1 4.1s-4.2-1.8-4.2-4.1c0-2.3 1.9-4.2 4.2-4.2s4.1 1.9 4.1 4.2z m8.4 2.5c-3.4 0-5 5-7.5 5s-2.5-1.7-5.9-1.7c-3.3 0-5 6.7-5 6.7h23.4s-1.7-10-5-10z m6.6-11.7h-26.6c-1.9 0-3.4 1.5-3.4 3.3v20c0 1.9 1.5 3.4 3.4 3.4h26.6c1.9 0 3.4-1.5 3.4-3.4v-20c0-1.8-1.5-3.3-3.4-3.3z m0 23.3h-26.6v-20h26.6v20z' })
        )
    );
};

exports.default = TiImage;
module.exports = exports['default'];