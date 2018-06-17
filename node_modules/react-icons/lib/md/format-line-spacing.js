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

var MdFormatLineSpacing = function MdFormatLineSpacing(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm16.6 21.6v-3.2h20v3.2h-20z m0 10v-3.2h20v3.2h-20z m0-23.2h20v3.2h-20v-3.2z m-6.6 3.2v16.8h4.1l-5.7 5.7-5.9-5.7h4.1v-16.8h-4.1l5.9-5.7 5.7 5.7h-4.1z' })
        )
    );
};

exports.default = MdFormatLineSpacing;
module.exports = exports['default'];