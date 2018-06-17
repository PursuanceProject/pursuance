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

var GoCircleSlash = function GoCircleSlash(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 7.5c-6.9 0-12.5 5.6-12.5 12.5 0 6.9 5.6 12.5 12.5 12.5 6.9 0 12.5-5.6 12.5-12.5 0-6.9-5.6-12.5-12.5-12.5z m0 5c1.1 0 2.1 0.2 3 0.6l-9.9 9.9c-0.4-0.9-0.6-1.9-0.6-3 0-4.1 3.4-7.5 7.5-7.5z m0 15c-1.1 0-2.1-0.2-3.1-0.7l9.9-9.8c0.5 0.9 0.7 1.9 0.7 3 0 4.1-3.4 7.5-7.5 7.5z' })
        )
    );
};

exports.default = GoCircleSlash;
module.exports = exports['default'];