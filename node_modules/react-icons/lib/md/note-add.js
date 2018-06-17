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

var MdNoteAdd = function MdNoteAdd(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm21.6 15h9.3l-9.3-9.1v9.1z m5 11.6v-3.2h-5v-5h-3.2v5h-5v3.2h5v5h3.2v-5h5z m-3.2-23.2l10 10v20c0 1.8-1.6 3.2-3.4 3.2h-20c-1.8 0-3.4-1.4-3.4-3.2l0.1-26.8c0-1.8 1.5-3.2 3.3-3.2h13.4z' })
        )
    );
};

exports.default = MdNoteAdd;
module.exports = exports['default'];