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

var IoIosMonitor = function IoIosMonitor(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm38.5 30h-13.7v1.3h5v1.2h-20.1v-1.2h5v-1.3h-13.7v-22.5h37.5v22.5z m-36.2-21.2v20h35v-20h-35z m1.2 18.7v-17.5h32.5v17.5h-32.5z' })
        )
    );
};

exports.default = IoIosMonitor;
module.exports = exports['default'];