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

var GoDiffAdded = function GoDiffAdded(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm22.5 12.5h-5v5h-5v5h5v5h5v-5h5v-5h-5v-5z m12.5-10h-30s-2.5 1.3-2.5 2.5v30s1.3 2.5 2.5 2.5h30s2.5-1.2 2.5-2.5v-30s-1.2-2.5-2.5-2.5z m-2.5 28.8c0 0.6-0.7 1.2-1.2 1.2h-22.5s-1.3-0.5-1.3-1.2v-22.5s0.6-1.3 1.3-1.3h22.5s1.2 0.6 1.2 1.3v22.5z' })
        )
    );
};

exports.default = GoDiffAdded;
module.exports = exports['default'];