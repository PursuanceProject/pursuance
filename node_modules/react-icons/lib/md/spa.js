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

var MdSpa = function MdSpa(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm25.8 16c-2.1 1.2-4.1 2.7-5.8 4.5-1.7-1.8-3.7-3.3-5.8-4.5 0.4-4.6 2.3-9.1 5.9-12.6 3.5 3.5 5.4 7.9 5.7 12.6z m-22.4 0.6c7.4 0 13.4 4.3 16.6 9.2 3.2-4.9 9.2-9.2 16.6-9.2 0 8.9-5.5 16.4-13.3 19.2-1.1 0.4-2.1 0.6-3.3 0.8-1.2-0.1-2.3-0.4-3.3-0.8-7.8-2.8-13.3-10.3-13.3-19.2z' })
        )
    );
};

exports.default = MdSpa;
module.exports = exports['default'];