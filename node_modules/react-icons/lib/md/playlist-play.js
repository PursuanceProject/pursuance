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

var MdPlaylistPlay = function MdPlaylistPlay(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm28.4 21.6l8.2 5-8.2 5v-10z m-25 3.4v-3.4h21.6v3.4h-21.6z m28.2-16.6v3.2h-28.2v-3.2h28.2z m0 6.6v3.4h-28.2v-3.4h28.2z' })
        )
    );
};

exports.default = MdPlaylistPlay;
module.exports = exports['default'];