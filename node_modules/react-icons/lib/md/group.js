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

var MdGroup = function MdGroup(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm26.6 21.6q2.2 0 4.8 0.7t4.8 2 2.2 3.2v4.1h-10v-4.1q0-3.4-3.3-5.8 0.5-0.1 1.5-0.1z m-13.2 0q2.1 0 4.7 0.7t4.8 2 2.1 3.2v4.1h-23.4v-4.1q0-1.8 2.2-3.2t4.8-2 4.8-0.7z m0-3.2q-2.1 0-3.6-1.5t-1.4-3.5 1.4-3.6 3.6-1.4 3.4 1.4 1.5 3.6-1.5 3.5-3.4 1.5z m13.2 0q-2 0-3.5-1.5t-1.5-3.5 1.5-3.6 3.5-1.4 3.6 1.4 1.4 3.6-1.4 3.5-3.6 1.5z' })
        )
    );
};

exports.default = MdGroup;
module.exports = exports['default'];