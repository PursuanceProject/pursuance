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

var MdBlock = function MdBlock(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 33.4c7.3 0 13.4-6.1 13.4-13.4 0-3-1.1-5.9-2.9-8.2l-18.7 18.7c2.3 1.8 5.2 2.9 8.2 2.9z m-13.4-13.4c0 3 1.1 5.9 2.9 8.2l18.7-18.7c-2.3-1.8-5.2-2.9-8.2-2.9-7.3 0-13.4 6.1-13.4 13.4z m13.4-16.6c9.2 0 16.6 7.4 16.6 16.6s-7.4 16.6-16.6 16.6-16.6-7.4-16.6-16.6 7.4-16.6 16.6-16.6z' })
        )
    );
};

exports.default = MdBlock;
module.exports = exports['default'];