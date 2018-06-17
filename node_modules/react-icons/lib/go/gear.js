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

var GoGear = function GoGear(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 13.7c-3.5 0-6.3 2.8-6.3 6.3 0 3.5 2.8 6.3 6.3 6.3 3.5 0 6.3-2.8 6.3-6.3 0-3.5-2.8-6.3-6.3-6.3z m12.7 9.9l-1.2 2.8 2.3 4.5-2.8 2.8-4.6-2.2-2.7 1.2-1.4 4.2-0.2 0.6h-4l-1.7-4.8-2.8-1.2-4.5 2.3-2.8-2.8 2.2-4.6-1.2-2.7-4.8-1.6v-4l4.8-1.7 1.2-2.8-2.1-4-0.2-0.5 2.8-2.8 4.6 2.2 2.7-1.2 1.4-4.2 0.2-0.6h4l1.7 4.8 2.8 1.2 4.5-2.3 2.8 2.8-2.2 4.6 1.2 2.7 4.8 1.6v4l-4.8 1.7z' })
        )
    );
};

exports.default = GoGear;
module.exports = exports['default'];