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

var MdDirectionsRailway = function MdDirectionsRailway(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm30 16.6v-8.2h-20v8.2h20z m-10 11.8c1.8 0 3.4-1.6 3.4-3.4s-1.6-3.4-3.4-3.4-3.4 1.6-3.4 3.4 1.6 3.4 3.4 3.4z m-13.4-2.5v-17.5c0-5.9 6.1-6.8 13.4-6.8s13.4 0.9 13.4 6.8v17.5c0 3.2-2.7 5.7-5.9 5.7l2.5 2.5v0.9h-20v-0.9l2.5-2.5c-3.2 0-5.9-2.5-5.9-5.7z' })
        )
    );
};

exports.default = MdDirectionsRailway;
module.exports = exports['default'];