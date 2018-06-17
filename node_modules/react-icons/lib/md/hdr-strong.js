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

var MdHdrStrong = function MdHdrStrong(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm8.4 23.4c1.8 0 3.2-1.6 3.2-3.4s-1.4-3.4-3.2-3.4-3.4 1.6-3.4 3.4 1.6 3.4 3.4 3.4z m0-10c3.6 0 6.6 2.9 6.6 6.6s-3 6.6-6.6 6.6-6.8-2.9-6.8-6.6 3.1-6.6 6.8-6.6z m20-3.4c5.5 0 10 4.5 10 10s-4.5 10-10 10-10-4.5-10-10 4.4-10 10-10z' })
        )
    );
};

exports.default = MdHdrStrong;
module.exports = exports['default'];