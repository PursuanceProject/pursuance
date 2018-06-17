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

var MdPlace = function MdPlace(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 19.1q1.7 0 2.9-1.2t1.2-2.9-1.2-2.9-2.9-1.2-2.9 1.2-1.2 2.9 1.2 2.9 2.9 1.2z m0-15.7q4.8 0 8.2 3.4t3.4 8.2q0 2.4-1.2 5.5t-2.9 5.9-3.4 5.1-2.8 3.8l-1.3 1.3q-0.5-0.5-1.2-1.4t-2.9-3.6-3.5-5.2-2.8-5.8-1.2-5.6q0-4.8 3.4-8.2t8.2-3.4z' })
        )
    );
};

exports.default = MdPlace;
module.exports = exports['default'];