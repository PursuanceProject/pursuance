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

var MdCached = function MdCached(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm10 20h5l-6.6 6.6-6.8-6.6h5c0-7.3 6.1-13.4 13.4-13.4 2.6 0 5.1 0.8 7.1 2.2l-2.4 2.4c-1.4-0.8-3-1.2-4.7-1.2-5.5 0-10 4.5-10 10z m21.6-6.6l6.8 6.6h-5c0 7.3-6.1 13.4-13.4 13.4-2.6 0-5.1-0.8-7.1-2.1l2.4-2.5c1.4 0.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10h-5z' })
        )
    );
};

exports.default = MdCached;
module.exports = exports['default'];