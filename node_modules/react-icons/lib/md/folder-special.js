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

var MdFolderSpecial = function MdFolderSpecial(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm29.9 28.4l-1.3-5.6 4.3-3.7-5.6-0.5-2.3-5.2-2.3 5.2-5.6 0.5 4.3 3.7-1.3 5.6 4.9-2.9z m3.5-18.4c1.8 0 3.2 1.6 3.2 3.4v16.6c0 1.8-1.4 3.4-3.2 3.4h-26.8c-1.8 0-3.2-1.6-3.2-3.4v-20c0-1.8 1.4-3.4 3.2-3.4h10l3.4 3.4h13.4z' })
        )
    );
};

exports.default = MdFolderSpecial;
module.exports = exports['default'];