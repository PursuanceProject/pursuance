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

var MdPhotoAlbum = function MdPhotoAlbum(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm10 31.6h20l-6.4-8.5-5 6.4-3.6-4.3z m0-25v13.4l4.1-2.5 4.3 2.5v-13.4h-8.4z m20-3.2c1.8 0 3.4 1.4 3.4 3.2v26.8c0 1.8-1.6 3.2-3.4 3.2h-20c-1.8 0-3.4-1.4-3.4-3.2v-26.8c0-1.8 1.6-3.2 3.4-3.2h20z' })
        )
    );
};

exports.default = MdPhotoAlbum;
module.exports = exports['default'];