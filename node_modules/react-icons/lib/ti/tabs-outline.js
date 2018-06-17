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

var TiTabsOutline = function TiTabsOutline(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 6.7h-16.7c-1.8 0-3.3 1.5-3.3 3.3v3.3h-1.7c-1.8 0-3.3 1.5-3.3 3.4v15c0 1.8 1.5 3.3 3.3 3.3h15c1.9 0 3.4-1.5 3.4-3.3v-1.7h3.3c1.8 0 3.3-1.5 3.3-3.3v-16.7c0-1.8-1.5-3.3-3.3-3.3z m-21.7 25v-15h14.2c0.5 0 0.8 0.3 0.8 0.8v14.2h-15z m21.7-5h-5v-9.2c0-1.4-1.1-2.5-2.5-2.5h-9.2v-5h16.7v16.7z' })
        )
    );
};

exports.default = TiTabsOutline;
module.exports = exports['default'];