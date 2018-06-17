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

var IoIosBarcode = function IoIosBarcode(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm3.5 10h32.5v20h-32.5v-20z m6.3 15v-10h-1.3v10h1.3z m5 2.5v-15h-1.3v15h1.3z m5.5-1.2v-12.5h-1.3v12.5h1.3z m5.7 1.2v-15h-1.2v15h1.2z m5-2.5v-10h-1.2v10h1.2z' })
        )
    );
};

exports.default = IoIosBarcode;
module.exports = exports['default'];