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

var MdAirplay = function MdAirplay(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35 5c1.8 0 3.4 1.6 3.4 3.4v20c0 1.8-1.6 3.2-3.4 3.2h-6.6v-3.2h6.6v-20h-30v20h6.6v3.2h-6.6c-1.8 0-3.4-1.4-3.4-3.2v-20c0-1.8 1.6-3.4 3.4-3.4h30z m-25 31.6l10-10 10 10h-20z' })
        )
    );
};

exports.default = MdAirplay;
module.exports = exports['default'];