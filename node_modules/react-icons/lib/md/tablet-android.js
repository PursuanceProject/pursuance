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

var MdTabletAndroid = function MdTabletAndroid(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm32.1 31.6v-26.6h-24.2v26.6h24.2z m-8.7 5v-1.6h-6.8v1.6h6.8z m6.6-36.6c2.7 0 5 2.3 5 5v30c0 2.7-2.3 5-5 5h-20c-2.7 0-5-2.3-5-5v-30c0-2.7 2.3-5 5-5h20z' })
        )
    );
};

exports.default = MdTabletAndroid;
module.exports = exports['default'];