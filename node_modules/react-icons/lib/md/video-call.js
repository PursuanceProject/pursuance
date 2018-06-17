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

var MdVideoCall = function MdVideoCall(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm23.4 21.6v-3.2h-5v-5h-3.4v5h-5v3.2h5v5h3.4v-5h5z m5-4.1l6.6-6.6v18.2l-6.6-6.6v5.9c0 0.9-0.8 1.6-1.8 1.6h-20c-0.9 0-1.6-0.7-1.6-1.6v-16.8c0-0.9 0.7-1.6 1.6-1.6h20c1 0 1.8 0.7 1.8 1.6v5.9z' })
        )
    );
};

exports.default = MdVideoCall;
module.exports = exports['default'];