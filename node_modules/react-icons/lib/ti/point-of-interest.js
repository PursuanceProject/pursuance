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

var TiPointOfInterest = function TiPointOfInterest(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm27.5 18.3c3.2 0 5.8-2.6 5.8-5.8s-2.6-5.8-5.8-5.8-5.8 2.6-5.8 5.8v2.5h-3.4v-2.5c0-3.2-2.6-5.8-5.8-5.8s-5.8 2.6-5.8 5.8 2.6 5.8 5.8 5.8h2.5v3.4h-2.5c-3.2 0-5.8 2.6-5.8 5.8s2.6 5.8 5.8 5.8 5.8-2.6 5.8-5.8v-2.5h3.4v2.5c0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8-2.6-5.8-5.8-5.8h-2.5v-3.4h2.5z m-2.5-5.8c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5c0 1.4-1.1 2.5-2.5 2.5h-2.5v-2.5z m-10 15c0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5c0-1.4 1.1-2.5 2.5-2.5h2.5v2.5z m0-12.5h-2.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v2.5z m6.7 6.7h-3.4v-3.4h3.4v3.4z m5.8 3.3c1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5s-2.5-1.1-2.5-2.5v-2.5h2.5z' })
        )
    );
};

exports.default = TiPointOfInterest;
module.exports = exports['default'];