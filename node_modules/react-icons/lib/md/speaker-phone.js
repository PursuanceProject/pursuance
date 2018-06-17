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

var MdSpeakerPhone = function MdSpeakerPhone(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm25 33.4v-13.4h-10v13.4h10z m-0.2-16.7c1 0 1.8 0.9 1.8 1.9v16.2c0 1-0.8 1.8-1.8 1.8h-9.6c-1 0-1.8-0.8-1.8-1.8v-16.2c0-1 0.8-2 1.8-2z m-4.8-15.1c5 0 9.6 2.2 12.9 5.4l-2.4 2.4c-2.7-2.8-6.4-4.4-10.5-4.4s-7.8 1.6-10.5 4.4l-2.4-2.4c3.3-3.3 7.9-5.4 12.9-5.4z m-8.4 10.2c2.2-2.1 5.1-3.4 8.4-3.4s6.3 1.3 8.4 3.4l-2.5 2.3c-1.4-1.4-3.6-2.4-5.9-2.4s-4.5 1-5.9 2.4z' })
        )
    );
};

exports.default = MdSpeakerPhone;
module.exports = exports['default'];