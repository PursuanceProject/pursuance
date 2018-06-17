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

var MdPermMedia = function MdPermMedia(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm11.6 25h23.4l-5.9-7.5-4.1 5-5.9-7.5z m25-18.4c1.8 0 3.4 1.6 3.4 3.4v16.6c0 1.8-1.6 3.4-3.4 3.4h-26.6c-1.8 0-3.4-1.6-3.4-3.4l0.1-20c0-1.8 1.5-3.2 3.3-3.2h10l3.4 3.2h13.2z m-33.2 3.4v23.4h30v3.2h-30c-1.8 0-3.4-1.4-3.4-3.2v-23.4h3.4z' })
        )
    );
};

exports.default = MdPermMedia;
module.exports = exports['default'];