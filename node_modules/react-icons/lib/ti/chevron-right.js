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

var TiChevronRight = function TiChevronRight(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm14.3 9.3c-1.3 1.3-1.3 3.4 0 4.7l6 6-6 6c-1.3 1.3-1.3 3.4 0 4.7 0.7 0.6 1.5 1 2.4 1s1.7-0.4 2.3-1l10.7-10.7-10.7-10.7c-1.3-1.3-3.4-1.3-4.7 0z' })
        )
    );
};

exports.default = TiChevronRight;
module.exports = exports['default'];