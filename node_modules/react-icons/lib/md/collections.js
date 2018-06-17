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

var MdCollections = function MdCollections(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm3.4 10h3.2v23.4h23.4v3.2h-23.4q-1.3 0-2.3-0.9t-0.9-2.3v-23.4z m15 10l-5 6.6h20l-6.8-8.2-4.9 6.1z m18.2 6.6q0 1.4-0.9 2.4t-2.3 1h-20q-1.4 0-2.4-1t-1-2.4v-20q0-1.3 1-2.3t2.4-0.9h20q1.3 0 2.3 0.9t0.9 2.3v20z' })
        )
    );
};

exports.default = MdCollections;
module.exports = exports['default'];