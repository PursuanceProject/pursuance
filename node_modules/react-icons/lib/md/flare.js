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

var MdFlare = function MdFlare(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm18.4 38.4v-10h3.2v10h-3.2z m-9-10.1l3.6-3.6 2.3 2.3-3.6 3.6z m15.3-1.3l2.3-2.3 3.6 3.6-2.3 2.3z m-4.7-12c2.7 0 5 2.3 5 5s-2.3 5-5 5-5-2.3-5-5 2.3-5 5-5z m8.4 3.4h10v3.2h-10v-3.2z m2.2-6.7l-3.6 3.6-2.3-2.3 3.6-3.6z m-9-10.1v10h-3.2v-10h3.2z m-6.3 11.4l-2.3 2.3-3.6-3.6 2.3-2.3z m-3.7 5.4v3.2h-10v-3.2h10z' })
        )
    );
};

exports.default = MdFlare;
module.exports = exports['default'];