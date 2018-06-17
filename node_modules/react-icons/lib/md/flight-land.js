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

var MdFlightLand = function MdFlightLand(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm23.4 24.1c-5.4-1.5-10.7-2.9-16.1-4.3l-2.7-0.8v-8.6l2.4 0.6 1.6 3.9 8.3 2.2v-13.7l3.2 0.8 4.6 15 8.8 2.4c1.3 0.4 2.1 1.8 1.8 3.1-0.4 1.3-1.7 2-3 1.7z m-19.3 7.5h31.8v3.4h-31.8v-3.4z' })
        )
    );
};

exports.default = MdFlightLand;
module.exports = exports['default'];