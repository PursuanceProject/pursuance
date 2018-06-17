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

var MdWallpaper = function MdWallpaper(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm6.6 21.6v11.8h11.8v3.2h-11.8c-1.8 0-3.2-1.4-3.2-3.2v-11.8h3.2z m26.8 11.8v-11.8h3.2v11.8c0 1.8-1.4 3.2-3.2 3.2h-11.8v-3.2h11.8z m0-30c1.8 0 3.2 1.4 3.2 3.2v11.8h-3.2v-11.8h-11.8v-3.2h11.8z m-5 10.7c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z m-11.8 7.5l5 6.2 3.4-4.4 5 6.6h-20z m-10-15v11.8h-3.2v-11.8c0-1.8 1.4-3.2 3.2-3.2h11.8v3.2h-11.8z' })
        )
    );
};

exports.default = MdWallpaper;
module.exports = exports['default'];