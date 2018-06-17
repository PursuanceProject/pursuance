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

var GoVersions = function GoVersions(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm2.5 27.5h5v-2.5h-2.5v-10h2.5v-2.5h-5v15z m15-20v25h20v-25h-20z m15 20h-10v-15h10v15z m-22.5 2.5h5v-2.5h-2.5v-15h2.5v-2.5h-5v20z' })
        )
    );
};

exports.default = GoVersions;
module.exports = exports['default'];