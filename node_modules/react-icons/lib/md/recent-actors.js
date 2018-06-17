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

var MdRecentActors = function MdRecentActors(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20.9 28.4v-1.3c0-2.5-5-3.7-7.5-3.7s-7.5 1.2-7.5 3.7v1.3h15z m-7.5-15.5c-2.1 0-3.8 1.7-3.8 3.7s1.7 3.8 3.8 3.8 3.7-1.7 3.7-3.8-1.7-3.7-3.7-3.7z m10-4.5c0.9 0 1.6 0.7 1.6 1.6v20c0 0.9-0.7 1.6-1.6 1.6h-20c-1 0-1.8-0.7-1.8-1.6v-20c0-0.9 0.8-1.6 1.8-1.6h20z m5 23.2v-23.2h3.2v23.2h-3.2z m6.6-23.2h3.4v23.2h-3.4v-23.2z' })
        )
    );
};

exports.default = MdRecentActors;
module.exports = exports['default'];