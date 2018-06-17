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

var MdQueuePlayNext = function MdQueuePlayNext(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm40 30l-7.5 7.5-2.5-2.5 5-5-5-5 2.5-2.5z m-18.4-13.4h5v3.4h-5v5h-3.2v-5h-5v-3.4h5v-5h3.2v5z m13.4-11.6q1.3 0 2.3 1t1.1 2.4v13.2h-3.4v-13.2h-30v20h25v3.2h-3.4v3.4h-13.2v-3.4h-8.4q-1.4 0-2.4-0.9t-1-2.3v-20q0-1.4 1-2.4t2.4-1h30z' })
        )
    );
};

exports.default = MdQueuePlayNext;
module.exports = exports['default'];