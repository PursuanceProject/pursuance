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

var IoPaintbucket = function IoPaintbucket(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm9.8 5l2.5-2.5 21.4 21.6-4.5 0.9-12.7 12.5-15.5-15 11.9-11.9z m15.3 17.5l-8.6-8.6-8.5 8.6h17.1z m8.6 1.6s4.8 5.1 4.8 7.7-2.1 4.7-4.8 4.7-4.7-2.1-4.7-4.7 4.7-7.7 4.7-7.7z' })
        )
    );
};

exports.default = IoPaintbucket;
module.exports = exports['default'];