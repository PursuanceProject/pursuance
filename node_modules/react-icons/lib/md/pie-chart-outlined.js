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

var MdPieChartOutlined = function MdPieChartOutlined(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm21.6 33.2c6.1-0.8 10.8-5.5 11.6-11.6h-11.6v11.6z m-15-13.2c0 6.8 5.2 12.3 11.8 13.2v-26.4c-6.6 0.8-11.8 6.4-11.8 13.2z m15-13.2v11.6h11.6c-0.8-6.1-5.5-10.8-11.6-11.6z m-1.6-3.4c9.1 0 16.6 7.5 16.6 16.6s-7.5 16.6-16.6 16.6-16.6-7.5-16.6-16.6 7.5-16.6 16.6-16.6z' })
        )
    );
};

exports.default = MdPieChartOutlined;
module.exports = exports['default'];