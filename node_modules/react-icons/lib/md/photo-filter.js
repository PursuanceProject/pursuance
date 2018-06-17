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

var MdPhotoFilter = function MdPhotoFilter(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm22.1 17.9l4.5 2.1-4.5 2.1-2.1 4.5-2.1-4.5-4.5-2.1 4.5-2.1 2.1-4.5z m6.3-1.3l-1.6-3.4-3.4-1.6 3.4-1.5 1.6-3.5 1.5 3.5 3.5 1.5-3.5 1.6z m3.3 0h3.3v15c0 1.8-1.5 3.4-3.3 3.4h-23.3c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h15v3.4h-15v23.2h23.3v-15z' })
        )
    );
};

exports.default = MdPhotoFilter;
module.exports = exports['default'];