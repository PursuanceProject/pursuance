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

var MdRadio = function MdRadio(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm33.4 20v-6.6h-26.8v6.6h20v-3.4h3.4v3.4h3.4z m-21.8 13.4c2.8 0 5-2.3 5-5s-2.2-5-5-5-5 2.2-5 5 2.3 5 5 5z m-6.2-23.2l21.1-8.6 1.1 2.9-13.8 5.5h19.6c1.8 0 3.2 1.5 3.2 3.4v20c0 1.8-1.4 3.2-3.2 3.2h-26.8c-1.8 0-3.2-1.4-3.2-3.2v-20c0-1.4 0.7-2.7 2-3.2z' })
        )
    );
};

exports.default = MdRadio;
module.exports = exports['default'];