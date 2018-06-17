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

var MdZoomOutMap = function MdZoomOutMap(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm35 25v10h-10l3.8-3.8-4.8-4.8 2.4-2.4 4.8 4.8z m-20 10h-10v-10l3.8 3.8 4.8-4.8 2.4 2.4-4.8 4.8z m-10-20v-10h10l-3.8 3.8 4.8 4.8-2.4 2.4-4.8-4.8z m20-10h10v10l-3.8-3.8-4.8 4.8-2.4-2.4 4.8-4.8z' })
        )
    );
};

exports.default = MdZoomOutMap;
module.exports = exports['default'];