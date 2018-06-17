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

var MdOpacity = function MdOpacity(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm10 23.4h20c0-3.4-1.1-5.4-3-7.3l-7-7.3-7 7.2c-1.9 1.9-3 4-3 7.4z m19.5-10c2.5 2.5 3.9 6 3.9 9.3s-1.4 6.9-3.9 9.5-6.1 3.9-9.5 3.9-6.9-1.3-9.5-3.9-3.9-6.1-3.9-9.5 1.4-6.8 3.9-9.3l9.5-9.5z' })
        )
    );
};

exports.default = MdOpacity;
module.exports = exports['default'];