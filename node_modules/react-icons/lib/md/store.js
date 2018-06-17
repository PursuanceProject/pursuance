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

var MdStore = function MdStore(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 30v-6.6h-10v6.6h10z m15-6.6h-1.6v10h-3.4v-10h-6.6v10h-16.8v-10h-1.6v-3.4l1.6-8.4h26.8l1.6 8.4v3.4z m-1.6-16.8v3.4h-26.8v-3.4h26.8z' })
        )
    );
};

exports.default = MdStore;
module.exports = exports['default'];