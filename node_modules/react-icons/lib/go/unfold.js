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

var GoUnfold = function GoUnfold(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm17.5 15h5v-7.5h5l-7.5-7.5-7.5 7.5h5v7.5z m7.5-5v2.5h8.8l-5 5h-17.5l-5-5h8.7v-2.5h-12.5v2.5l6.3 6.3-6.3 6.2v2.5h12.5v-2.5h-8.7l5-5h17.5l5 5h-8.8v2.5h12.5v-2.5l-6.2-6.2 6.2-6.3v-2.5h-12.5z m-2.5 12.5h-5v7.5h-5l7.5 7.5 7.5-7.5h-5v-7.5z' })
        )
    );
};

exports.default = GoUnfold;
module.exports = exports['default'];