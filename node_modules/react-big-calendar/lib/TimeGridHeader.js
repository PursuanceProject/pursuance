'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _scrollbarSize = require('dom-helpers/util/scrollbarSize');

var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dates = require('./utils/dates');

var _dates2 = _interopRequireDefault(_dates);

var _propTypes3 = require('./utils/propTypes');

var _localizer = require('./localizer');

var _localizer2 = _interopRequireDefault(_localizer);

var _DateContentRow = require('./DateContentRow');

var _DateContentRow2 = _interopRequireDefault(_DateContentRow);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _helpers = require('./utils/helpers');

var _accessors = require('./utils/accessors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeGridHeader = function (_React$Component) {
  _inherits(TimeGridHeader, _React$Component);

  function TimeGridHeader() {
    var _temp, _this, _ret;

    _classCallCheck(this, TimeGridHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleHeaderClick = function (date, view, e) {
      e.preventDefault();
      (0, _helpers.notify)(_this.props.onDrillDown, [date, view]);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TimeGridHeader.prototype.renderHeaderResources = function renderHeaderResources(range, resources) {
    var _props = this.props,
        resourceTitleAccessor = _props.resourceTitleAccessor,
        getNow = _props.getNow;

    var today = getNow();

    return range.map(function (date, i) {
      return resources.map(function (resource, j) {
        return _react2.default.createElement(
          'div',
          {
            key: i + '-' + j,
            className: (0, _classnames2.default)('rbc-header', _dates2.default.eq(date, today, 'day') && 'rbc-today')
          },
          (0, _accessors.accessor)(resource, resourceTitleAccessor)
        );
      });
    });
  };

  TimeGridHeader.prototype.renderHeaderCells = function renderHeaderCells(range) {
    var _this2 = this;

    var _props2 = this.props,
        dayFormat = _props2.dayFormat,
        culture = _props2.culture,
        dayPropGetter = _props2.dayPropGetter,
        getDrilldownView = _props2.getDrilldownView,
        getNow = _props2.getNow,
        Header = _props2.headerComponent;


    var today = getNow();

    return range.map(function (date, i) {
      var drilldownView = getDrilldownView(date);
      var label = _localizer2.default.format(date, dayFormat, culture);

      var _ref = dayPropGetter && dayPropGetter(date) || {},
          className = _ref.className,
          style = _ref.style;

      var header = _react2.default.createElement(Header, {
        date: date,
        label: label,
        localizer: _localizer2.default,
        format: dayFormat,
        culture: culture
      });

      return _react2.default.createElement(
        'div',
        {
          key: i,
          style: style,
          className: (0, _classnames2.default)('rbc-header', className, _dates2.default.eq(date, today, 'day') && 'rbc-today')
        },
        drilldownView ? _react2.default.createElement(
          'a',
          {
            href: '#',
            onClick: function onClick(e) {
              return _this2.handleHeaderClick(date, drilldownView, e);
            }
          },
          header
        ) : _react2.default.createElement(
          'span',
          null,
          header
        )
      );
    });
  };

  TimeGridHeader.prototype.render = function render() {
    var _props3 = this.props,
        width = _props3.width,
        events = _props3.events,
        rtl = _props3.rtl,
        selectable = _props3.selectable,
        resources = _props3.resources,
        getNow = _props3.getNow,
        range = _props3.range,
        isOverflowing = _props3.isOverflowing,
        eventComponent = _props3.eventComponent,
        dateCellWrapperComponent = _props3.dateCellWrapperComponent,
        eventWrapperComponent = _props3.eventWrapperComponent;


    var style = {};
    if (isOverflowing) {
      style[rtl ? 'marginLeft' : 'marginRight'] = (0, _scrollbarSize2.default)() + 'px';
    }

    return _react2.default.createElement(
      'div',
      {
        ref: 'headerCell',
        style: style,
        className: (0, _classnames2.default)('rbc-time-header', isOverflowing && 'rbc-overflowing')
      },
      _react2.default.createElement('div', { className: 'rbc-label rbc-time-header-gutter', style: { width: width } }),
      _react2.default.createElement(
        'div',
        { className: 'rbc-time-header-content' },
        _react2.default.createElement(
          'div',
          { className: 'rbc-row rbc-time-header-cell' },
          this.renderHeaderCells(range)
        ),
        resources && _react2.default.createElement(
          'div',
          { className: 'rbc-row rbc-row-resource' },
          this.renderHeaderResources(range, resources)
        ),
        _react2.default.createElement(_DateContentRow2.default, {
          isAllDay: true,
          rtl: rtl,
          getNow: getNow,
          minRows: 2,
          range: range,
          events: events,
          className: 'rbc-allday-cell',
          selectable: selectable,
          selected: this.props.selected,
          eventComponent: eventComponent,
          eventWrapperComponent: eventWrapperComponent,
          dateCellWrapperComponent: dateCellWrapperComponent,
          dayPropGetter: this.props.dayPropGetter,
          titleAccessor: this.props.titleAccessor,
          tooltipAccessor: this.props.tooltipAccessor,
          startAccessor: this.props.startAccessor,
          endAccessor: this.props.endAccessor,
          allDayAccessor: this.props.allDayAccessor,
          eventPropGetter: this.props.eventPropGetter,
          onSelect: this.props.onSelectEvent,
          onDoubleClick: this.props.onDoubleClickEvent,
          onSelectSlot: this.props.onSelectSlot,
          longPressThreshold: this.props.longPressThreshold
        })
      )
    );
  };

  return TimeGridHeader;
}(_react2.default.Component);

TimeGridHeader.propTypes = {
  range: _propTypes2.default.array.isRequired,
  events: _propTypes2.default.array.isRequired,
  resources: _propTypes2.default.array,
  getNow: _propTypes2.default.func.isRequired,
  isOverflowing: _propTypes2.default.bool,

  dayFormat: _propTypes3.dateFormat,
  eventPropGetter: _propTypes2.default.func,
  dayPropGetter: _propTypes2.default.func,
  culture: _propTypes2.default.string,

  rtl: _propTypes2.default.bool,
  width: _propTypes2.default.number,

  titleAccessor: _propTypes3.accessor.isRequired,
  tooltipAccessor: _propTypes3.accessor.isRequired,
  allDayAccessor: _propTypes3.accessor.isRequired,
  startAccessor: _propTypes3.accessor.isRequired,
  endAccessor: _propTypes3.accessor.isRequired,
  resourceAccessor: _propTypes3.accessor.isRequired,

  resourceIdAccessor: _propTypes3.accessor.isRequired,
  resourceTitleAccessor: _propTypes3.accessor.isRequired,

  selected: _propTypes2.default.object,
  selectable: _propTypes2.default.oneOf([true, false, 'ignoreEvents']),
  longPressThreshold: _propTypes2.default.number,

  headerComponent: _propTypes3.elementType,
  eventComponent: _propTypes3.elementType,
  eventWrapperComponent: _propTypes3.elementType.isRequired,
  dateCellWrapperComponent: _propTypes3.elementType,

  onSelectSlot: _propTypes2.default.func,
  onSelectEvent: _propTypes2.default.func,
  onDoubleClickEvent: _propTypes2.default.func,
  onDrillDown: _propTypes2.default.func,
  getDrilldownView: _propTypes2.default.func.isRequired
};
TimeGridHeader.defaultProps = {
  headerComponent: _Header2.default
};
exports.default = TimeGridHeader;
module.exports = exports['default'];