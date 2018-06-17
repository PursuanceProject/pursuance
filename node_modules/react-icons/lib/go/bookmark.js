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

var GoBookmark = function GoBookmark(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm12.5 5v30l7.5-5 7.5 5v-30h-15z m12.4 7.7l-2.9 2 1.1 3.3c0.1 0.3 0 0.4-0.3 0.2l-2.8-2-2.8 2c-0.3 0.2-0.4 0.1-0.3-0.2l1.1-3.3-2.9-2c-0.2-0.2-0.1-0.4 0.2-0.4l3.4 0 1.1-3.2c0.1-0.4 0.3-0.4 0.4 0l1.1 3.2 3.4 0c0.4 0 0.4 0.2 0.2 0.4z' })
        )
    );
};

exports.default = GoBookmark;
module.exports = exports['default'];