'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _requestAnimationFrame = require('dom-helpers/util/requestAnimationFrame');

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _dates = require('./utils/dates');

var _dates2 = _interopRequireDefault(_dates);

var _DayColumn = require('./DayColumn');

var _DayColumn2 = _interopRequireDefault(_DayColumn);

var _TimeGutter = require('./TimeGutter');

var _TimeGutter2 = _interopRequireDefault(_TimeGutter);

var _width = require('dom-helpers/query/width');

var _width2 = _interopRequireDefault(_width);

var _TimeGridHeader = require('./TimeGridHeader');

var _TimeGridHeader2 = _interopRequireDefault(_TimeGridHeader);

var _propTypes3 = require('./utils/propTypes');

var _helpers = require('./utils/helpers');

var _accessors = require('./utils/accessors');

var _eventLevels = require('./utils/eventLevels');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeGrid = function (_Component) {
  _inherits(TimeGrid, _Component);

  function TimeGrid(props) {
    _classCallCheck(this, TimeGrid);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleResize = function () {
      _requestAnimationFrame2.default.cancel(_this.rafHandle);
      _this.rafHandle = (0, _requestAnimationFrame2.default)(_this.checkOverflow);
    };

    _this.gutterRef = function (ref) {
      _this.gutter = ref && (0, _reactDom.findDOMNode)(ref);
    };

    _this.handleSelectAlldayEvent = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      //cancel any pending selections so only the event click goes through.
      _this.clearSelection();
      (0, _helpers.notify)(_this.props.onSelectEvent, args);
    };

    _this.handleSelectAllDaySlot = function (slots, slotInfo) {
      var onSelectSlot = _this.props.onSelectSlot;

      (0, _helpers.notify)(onSelectSlot, {
        slots: slots,
        start: slots[0],
        end: slots[slots.length - 1],
        action: slotInfo.action
      });
    };

    _this.checkOverflow = function () {
      if (_this._updatingOverflow) return;

      var isOverflowing = _this.refs.content.scrollHeight > _this.refs.content.clientHeight;

      if (_this.state.isOverflowing !== isOverflowing) {
        _this._updatingOverflow = true;
        _this.setState({ isOverflowing: isOverflowing }, function () {
          _this._updatingOverflow = false;
        });
      }
    };

    _this.state = { gutterWidth: undefined, isOverflowing: null };
    return _this;
  }

  TimeGrid.prototype.componentWillMount = function componentWillMount() {
    this.calculateScroll();
  };

  TimeGrid.prototype.componentDidMount = function componentDidMount() {
    this.checkOverflow();

    if (this.props.width == null) {
      this.measureGutter();
    }

    this.applyScroll();

    this.positionTimeIndicator();
    this.triggerTimeIndicatorUpdate();

    window.addEventListener('resize', this.handleResize);
  };

  TimeGrid.prototype.componentWillUnmount = function componentWillUnmount() {
    window.clearTimeout(this._timeIndicatorTimeout);
    window.removeEventListener('resize', this.handleResize);

    _requestAnimationFrame2.default.cancel(this.rafHandle);
  };

  TimeGrid.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.width == null) {
      this.measureGutter();
    }

    this.applyScroll();
    this.positionTimeIndicator();
    //this.checkOverflow()
  };

  TimeGrid.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _props = this.props,
        range = _props.range,
        scrollToTime = _props.scrollToTime;
    // When paginating, reset scroll

    if (!_dates2.default.eq(nextProps.range[0], range[0], 'minute') || !_dates2.default.eq(nextProps.scrollToTime, scrollToTime, 'minute')) {
      this.calculateScroll(nextProps);
    }
  };

  TimeGrid.prototype.renderEvents = function renderEvents(range, events, today, resources) {
    var _this2 = this;

    var _props2 = this.props,
        min = _props2.min,
        max = _props2.max,
        endAccessor = _props2.endAccessor,
        startAccessor = _props2.startAccessor,
        resourceAccessor = _props2.resourceAccessor,
        resourceIdAccessor = _props2.resourceIdAccessor,
        components = _props2.components;


    return range.map(function (date, idx) {
      var daysEvents = events.filter(function (event) {
        return _dates2.default.inRange(date, (0, _accessors.accessor)(event, startAccessor), (0, _accessors.accessor)(event, endAccessor), 'day');
      });

      return resources.map(function (resource, id) {
        var eventsToDisplay = !resource ? daysEvents : daysEvents.filter(function (event) {
          return (0, _accessors.accessor)(event, resourceAccessor) === (0, _accessors.accessor)(resource, resourceIdAccessor);
        });

        return _react2.default.createElement(_DayColumn2.default, _extends({}, _this2.props, {
          min: _dates2.default.merge(date, min),
          max: _dates2.default.merge(date, max),
          resource: resource && resource.id,
          eventComponent: components.event,
          eventWrapperComponent: components.eventWrapper,
          timeSlotWrapperComponent: components.dayWrapper,
          className: (0, _classnames2.default)({ 'rbc-now': _dates2.default.eq(date, today, 'day') }),
          key: idx + '-' + id,
          date: date,
          events: eventsToDisplay
        }));
      });
    });
  };

  TimeGrid.prototype.render = function render() {
    var _this3 = this;

    var _props3 = this.props,
        events = _props3.events,
        range = _props3.range,
        width = _props3.width,
        startAccessor = _props3.startAccessor,
        endAccessor = _props3.endAccessor,
        selected = _props3.selected,
        getNow = _props3.getNow,
        resources = _props3.resources,
        components = _props3.components,
        allDayAccessor = _props3.allDayAccessor,
        eventPropGetter = _props3.eventPropGetter,
        showMultiDayTimes = _props3.showMultiDayTimes,
        longPressThreshold = _props3.longPressThreshold;


    width = width || this.state.gutterWidth;

    var start = range[0],
        end = range[range.length - 1];

    this.slots = range.length;

    var allDayEvents = [],
        rangeEvents = [];

    events.forEach(function (event) {
      if ((0, _eventLevels.inRange)(event, start, end, _this3.props)) {
        var eStart = (0, _accessors.accessor)(event, startAccessor),
            eEnd = (0, _accessors.accessor)(event, endAccessor);

        if ((0, _accessors.accessor)(event, allDayAccessor) || _dates2.default.isJustDate(eStart) && _dates2.default.isJustDate(eEnd) || !showMultiDayTimes && !_dates2.default.eq(eStart, eEnd, 'day')) {
          allDayEvents.push(event);
        } else {
          rangeEvents.push(event);
        }
      }
    });

    allDayEvents.sort(function (a, b) {
      return (0, _eventLevels.sortEvents)(a, b, _this3.props);
    });

    return _react2.default.createElement(
      'div',
      { className: 'rbc-time-view' },
      _react2.default.createElement(_TimeGridHeader2.default, {
        range: range,
        events: allDayEvents,
        width: width,
        getNow: getNow,
        dayFormat: this.props.dayFormat,
        culture: this.props.culture,
        resources: resources,
        selected: selected,
        selectable: this.props.selectable,
        startAccessor: startAccessor,
        endAccessor: endAccessor,
        titleAccessor: this.props.titleAccessor,
        tooltipAccessor: this.props.tooltipAccessor,
        allDayAccessor: this.props.allDayAccessor,
        resourceAccessor: this.props.resourceAccessor,
        resourceIdAccessor: this.props.resourceIdAccessor,
        resourceTitleAccessor: this.props.resourceTitleAccessor,
        isOverflowing: this.state.isOverflowing,
        dayPropGetter: this.props.dayPropGetter,
        eventPropGetter: eventPropGetter,
        longPressThreshold: longPressThreshold,
        headerComponent: components.header,
        eventComponent: components.event,
        eventWrapperComponent: components.eventWrapper,
        dateCellWrapperComponent: components.dateCellWrapper,
        onSelectSlot: this.handleSelectAllDaySlot,
        onSelectEvent: this.handleSelectAlldayEvent,
        onDoubleClickEvent: this.props.onDoubleClickEvent,
        onDrillDown: this.props.onDrillDown,
        getDrilldownView: this.props.getDrilldownView
      }),
      _react2.default.createElement(
        'div',
        { ref: 'content', className: 'rbc-time-content' },
        _react2.default.createElement(_TimeGutter2.default, _extends({}, this.props, {
          date: start,
          ref: this.gutterRef,
          className: 'rbc-time-gutter'
        })),
        this.renderEvents(range, rangeEvents, getNow(), resources || [null]),
        _react2.default.createElement('div', { ref: 'timeIndicator', className: 'rbc-current-time-indicator' })
      )
    );
  };

  TimeGrid.prototype.clearSelection = function clearSelection() {
    clearTimeout(this._selectTimer);
    this._pendingSelection = [];
  };

  TimeGrid.prototype.measureGutter = function measureGutter() {
    var width = (0, _width2.default)(this.gutter);

    if (width && this.state.gutterWidth !== width) {
      this.setState({ gutterWidth: width });
    }
  };

  TimeGrid.prototype.applyScroll = function applyScroll() {
    if (this._scrollRatio) {
      var content = this.refs.content;

      content.scrollTop = content.scrollHeight * this._scrollRatio;
      // Only do this once
      this._scrollRatio = null;
    }
  };

  TimeGrid.prototype.calculateScroll = function calculateScroll() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
    var min = props.min,
        max = props.max,
        scrollToTime = props.scrollToTime;


    var diffMillis = scrollToTime - _dates2.default.startOf(scrollToTime, 'day');
    var totalMillis = _dates2.default.diff(max, min);

    this._scrollRatio = diffMillis / totalMillis;
  };

  TimeGrid.prototype.positionTimeIndicator = function positionTimeIndicator() {
    var _props4 = this.props,
        rtl = _props4.rtl,
        min = _props4.min,
        max = _props4.max,
        getNow = _props4.getNow,
        range = _props4.range;

    var current = getNow();

    var secondsGrid = _dates2.default.diff(max, min, 'seconds');
    var secondsPassed = _dates2.default.diff(current, min, 'seconds');

    var timeIndicator = this.refs.timeIndicator;
    var factor = secondsPassed / secondsGrid;
    var timeGutter = this.gutter;

    var content = this.refs.content;

    if (timeGutter && current >= min && current <= max) {
      var pixelHeight = timeGutter.offsetHeight;
      var dayPixelWidth = (content.offsetWidth - timeGutter.offsetWidth) / this.slots;
      var dayOffset = range.findIndex(function (d) {
        return _dates2.default.eq(d, _dates2.default.today(), 'day');
      }) * dayPixelWidth;
      var offset = Math.floor(factor * pixelHeight);

      timeIndicator.style.display = dayOffset >= 0 ? 'block' : 'none';
      timeIndicator.style[rtl ? 'left' : 'right'] = 0;
      timeIndicator.style[rtl ? 'right' : 'left'] = timeGutter.offsetWidth + dayOffset + 'px';
      timeIndicator.style.top = offset + 'px';
      timeIndicator.style.width = dayPixelWidth + 'px';
    } else {
      timeIndicator.style.display = 'none';
    }
  };

  TimeGrid.prototype.triggerTimeIndicatorUpdate = function triggerTimeIndicatorUpdate() {
    var _this4 = this;

    // Update the position of the time indicator every minute
    this._timeIndicatorTimeout = window.setTimeout(function () {
      _this4.positionTimeIndicator();

      _this4.triggerTimeIndicatorUpdate();
    }, 60000);
  };

  return TimeGrid;
}(_react.Component);

TimeGrid.propTypes = {
  events: _propTypes2.default.array.isRequired,
  resources: _propTypes2.default.array,

  step: _propTypes2.default.number,
  range: _propTypes2.default.arrayOf(_propTypes2.default.instanceOf(Date)),
  min: _propTypes2.default.instanceOf(Date),
  max: _propTypes2.default.instanceOf(Date),
  getNow: _propTypes2.default.func.isRequired,

  scrollToTime: _propTypes2.default.instanceOf(Date),
  eventPropGetter: _propTypes2.default.func,
  dayPropGetter: _propTypes2.default.func,
  dayFormat: _propTypes3.dateFormat,
  showMultiDayTimes: _propTypes2.default.bool,
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

  onNavigate: _propTypes2.default.func,
  onSelectSlot: _propTypes2.default.func,
  onSelectEnd: _propTypes2.default.func,
  onSelectStart: _propTypes2.default.func,
  onSelectEvent: _propTypes2.default.func,
  onDoubleClickEvent: _propTypes2.default.func,
  onDrillDown: _propTypes2.default.func,
  getDrilldownView: _propTypes2.default.func.isRequired,

  messages: _propTypes2.default.object,
  components: _propTypes2.default.object.isRequired
};
TimeGrid.defaultProps = {
  step: 30,
  timeslots: 2,
  min: _dates2.default.startOf(new Date(), 'day'),
  max: _dates2.default.endOf(new Date(), 'day'),
  scrollToTime: _dates2.default.startOf(new Date(), 'day')
};
exports.default = TimeGrid;
module.exports = exports['default'];