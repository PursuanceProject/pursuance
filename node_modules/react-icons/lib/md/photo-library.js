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

var MdPhotoLibrary = function MdPhotoLibrary(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm3.4 10h3.2v23.4h23.4v3.2h-23.4c-1.8 0-3.2-1.4-3.2-3.2v-23.4z m15 10l-5 6.6h20l-6.8-8.2-4.9 6.1z m18.2 6.6c0 1.8-1.4 3.4-3.2 3.4h-20c-1.8 0-3.4-1.6-3.4-3.4v-20c0-1.8 1.6-3.2 3.4-3.2h20c1.8 0 3.2 1.4 3.2 3.2v20z' })
        )
    );
};

exports.default = MdPhotoLibrary;
module.exports = exports['default'];