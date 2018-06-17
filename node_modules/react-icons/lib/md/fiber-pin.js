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

var MdFiberPin = function MdFiberPin(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm33.4 25v-10h-2.1v5.9l-4.2-5.9h-2.1v10h2.1v-5.9l4.2 5.9h2.1z m-12.5 0v-10h-2.5v10h2.5z m-5.9-5.9v-1.6c0-1.4-1.1-2.5-2.5-2.5h-5.9v10h2.5v-3.4h3.4c1.4 0 2.5-1.1 2.5-2.5z m18.4-12.5c1.8 0 3.2 1.5 3.2 3.4v20c0 1.9-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.5-3.2-3.4v-20c0-1.9 1.4-3.4 3.2-3.4h26.8z m-24.3 10.9h3.4v1.6h-3.4v-1.6z' })
        )
    );
};

exports.default = MdFiberPin;
module.exports = exports['default'];