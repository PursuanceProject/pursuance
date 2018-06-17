'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Selection = require('./Selection');

var _Selection2 = _interopRequireDefault(_Selection);

var _dates = require('./utils/dates');

var _dates2 = _interopRequireDefault(_dates);

var _TimeSlots = require('./utils/TimeSlots');

var TimeSlotUtils = _interopRequireWildcard(_TimeSlots);

var _selection = require('./utils/selection');

var _localizer = require('./localizer');

var _localizer2 = _interopRequireDefault(_localizer);

var _helpers = require('./utils/helpers');

var _propTypes3 = require('./utils/propTypes');

var _accessors = require('./utils/accessors');

var _DayEventLayout = require('./utils/DayEventLayout');

var DayEventLayout = _interopRequireWildcard(_DayEventLayout);

var _TimeSlotGroup = require('./TimeSlotGroup');

var _TimeSlotGroup2 = _interopRequireDefault(_TimeSlotGroup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayColumn = function (_React$Component) {
  _inherits(DayColumn, _React$Component);

  function DayColumn() {
    _classCallCheck(this, DayColumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

    _initialiseProps.call(_this);

    _this.slotMetrics = TimeSlotUtils.getSlotMetrics(_this.props);
    return _this;
  }

  DayColumn.prototype.componentDidMount = function componentDidMount() {
    this.props.selectable && this._selectable();
  };

  DayColumn.prototype.componentWillUnmount = function componentWillUnmount() {
    this._teardownSelectable();
  };

  DayColumn.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.selectable && !this.props.selectable) this._selectable();
    if (!nextProps.selectable && this.props.selectable) this._teardownSelectable();

    this.slotMetrics = this.slotMetrics.update(nextProps);
  };

  DayColumn.prototype.render = function render() {
    var _props = this.props,
        max = _props.max,
        rtl = _props.rtl,
        date = _props.date,
        getNow = _props.getNow,
        selectRangeFormat = _props.selectRangeFormat,
        culture = _props.culture,
        slotPropGetter = _props.slotPropGetter,
        resource = _props.resource,
        timeSlotWrapperComponent = _props.timeSlotWrapperComponent,
        dayPropGetter = _props.dayPropGetter;
    var slotMetrics = this.slotMetrics;
    var _state = this.state,
        selecting = _state.selecting,
        top = _state.top,
        height = _state.height,
        startDate = _state.startDate,
        endDate = _state.endDate;


    var selectDates = { start: startDate, end: endDate };

    var _ref = dayPropGetter && dayPropGetter(max) || {},
        className = _ref.className,
        style = _ref.style;

    var current = getNow();

    return _react2.default.createElement(
      'div',
      {
        style: style,
        className: (0, _classnames2.default)(className, 'rbc-day-slot', 'rbc-time-column', selecting && 'rbc-slot-selecting', _dates2.default.eq(date, current, 'day') && 'rbc-today')
      },
      slotMetrics.groups.map(function (grp, idx) {
        return _react2.default.createElement(_TimeSlotGroup2.default, {
          key: idx,
          group: grp,
          resource: resource,
          slotPropGetter: slotPropGetter,
          timeSlotWrapperComponent: timeSlotWrapperComponent
        });
      }),
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('rbc-events-container', rtl && 'rtl') },
        this.renderEvents()
      ),
      selecting && _react2.default.createElement(
        'div',
        { className: 'rbc-slot-selection', style: { top: top, height: height } },
        _react2.default.createElement(
          'span',
          null,
          _localizer2.default.format(selectDates, selectRangeFormat, culture)
        )
      )
    );
  };

  return DayColumn;
}(_react2.default.Component);

DayColumn.propTypes = {
  events: _propTypes2.default.array.isRequired,
  components: _propTypes2.default.object,
  step: _propTypes2.default.number.isRequired,
  date: _propTypes2.default.instanceOf(Date).isRequired,
  min: _propTypes2.default.instanceOf(Date).isRequired,
  max: _propTypes2.default.instanceOf(Date).isRequired,
  getNow: _propTypes2.default.func.isRequired,

  rtl: _propTypes2.default.bool,
  titleAccessor: _propTypes3.accessor,
  tooltipAccessor: _propTypes3.accessor,
  allDayAccessor: _propTypes3.accessor.isRequired,
  startAccessor: _propTypes3.accessor.isRequired,
  endAccessor: _propTypes3.accessor.isRequired,

  selectRangeFormat: _propTypes3.dateFormat,
  eventTimeRangeFormat: _propTypes3.dateFormat,
  eventTimeRangeStartFormat: _propTypes3.dateFormat,
  eventTimeRangeEndFormat: _propTypes3.dateFormat,
  showMultiDayTimes: _propTypes2.default.bool,
  culture: _propTypes2.default.string,
  timeslots: _propTypes2.default.number,
  messages: _propTypes2.default.object,

  selected: _propTypes2.default.object,
  selectable: _propTypes2.default.oneOf([true, false, 'ignoreEvents']),
  eventOffset: _propTypes2.default.number,
  longPressThreshold: _propTypes2.default.number,

  onSelecting: _propTypes2.default.func,
  onSelectSlot: _propTypes2.default.func.isRequired,
  onSelectEvent: _propTypes2.default.func.isRequired,
  onDoubleClickEvent: _propTypes2.default.func.isRequired,

  className: _propTypes2.default.string,
  dragThroughEvents: _propTypes2.default.bool,
  eventPropGetter: _propTypes2.default.func,
  dayPropGetter: _propTypes2.default.func,
  slotPropGetter: _propTypes2.default.func,
  timeSlotWrapperComponent: _propTypes3.elementType,
  eventComponent: _propTypes3.elementType,
  eventWrapperComponent: _propTypes3.elementType.isRequired,
  resource: _propTypes2.default.string
};
DayColumn.defaultProps = {
  dragThroughEvents: true,
  timeslots: 2
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = { selecting: false };

  this.renderEvents = function () {
    var _props2 = _this2.props,
        EventComponent = _props2.components.event,
        culture = _props2.culture,
        endAccessor = _props2.endAccessor,
        eventPropGetter = _props2.eventPropGetter,
        eventTimeRangeEndFormat = _props2.eventTimeRangeEndFormat,
        eventTimeRangeFormat = _props2.eventTimeRangeFormat,
        eventTimeRangeStartFormat = _props2.eventTimeRangeStartFormat,
        EventWrapper = _props2.eventWrapperComponent,
        events = _props2.events,
        max = _props2.max,
        messages = _props2.messages,
        min = _props2.min,
        isRtl = _props2.rtl,
        selected = _props2.selected,
        startAccessor = _props2.startAccessor,
        titleAccessor = _props2.titleAccessor,
        tooltipAccessor = _props2.tooltipAccessor;


    var styledEvents = DayEventLayout.getStyledEvents({
      events: events,
      startAccessor: startAccessor,
      endAccessor: endAccessor,
      slotMetrics: _this2.slotMetrics
    });

    return styledEvents.map(function (_ref2, idx) {
      var _extends2;

      var event = _ref2.event,
          style = _ref2.style;

      var _eventTimeRangeFormat = eventTimeRangeFormat;
      var _continuesPrior = false;
      var _continuesAfter = false;
      var start = (0, _accessors.accessor)(event, startAccessor);
      var end = (0, _accessors.accessor)(event, endAccessor);

      if (start < min) {
        start = min;
        _continuesPrior = true;
        _eventTimeRangeFormat = eventTimeRangeEndFormat;
      }

      if (end > max) {
        end = max;
        _continuesAfter = true;
        _eventTimeRangeFormat = eventTimeRangeStartFormat;
      }

      var continuesPrior = _this2.slotMetrics.startsBefore(start);
      var continuesAfter = _this2.slotMetrics.startsAfter(end);

      var title = (0, _accessors.accessor)(event, titleAccessor);
      var tooltip = (0, _accessors.accessor)(event, tooltipAccessor);
      var label = void 0;
      if (_continuesPrior && _continuesAfter) {
        label = messages.allDay;
      } else {
        label = _localizer2.default.format({ start: start, end: end }, _eventTimeRangeFormat, culture);
      }

      var _isSelected = (0, _selection.isSelected)(event, selected);

      if (eventPropGetter) var _eventPropGetter = eventPropGetter(event, start, end, _isSelected),
            xStyle = _eventPropGetter.style,
            className = _eventPropGetter.className;

      var height = style.height,
          top = style.top,
          width = style.width,
          xOffset = style.xOffset;


      var wrapperProps = {
        event: event,
        continuesPrior: _continuesPrior,
        continuesAfter: _continuesAfter
      };

      return _react2.default.createElement(
        EventWrapper,
        _extends({}, wrapperProps, { key: 'evt_' + idx }),
        _react2.default.createElement(
          'div',
          {
            style: _extends({}, xStyle, (_extends2 = {
              top: top + '%',
              height: height + '%'
            }, _extends2[isRtl ? 'right' : 'left'] = Math.max(0, xOffset) + '%', _extends2.width = width + '%', _extends2)),
            title: tooltip ? (typeof label === 'string' ? label + ': ' : '') + tooltip : undefined,
            onClick: function onClick(e) {
              return _this2._select(event, e);
            },
            onDoubleClick: function onDoubleClick(e) {
              return _this2._doubleClick(event, e);
            },
            className: (0, _classnames2.default)('rbc-event', className, {
              'rbc-selected': _isSelected,
              'rbc-event-continues-earlier': continuesPrior,
              'rbc-event-continues-later': continuesAfter,
              'rbc-event-continues-day-prior': _continuesPrior,
              'rbc-event-continues-day-after': _continuesAfter
            })
          },
          _react2.default.createElement(
            'div',
            { className: 'rbc-event-label' },
            label
          ),
          _react2.default.createElement(
            'div',
            { className: 'rbc-event-content' },
            EventComponent ? _react2.default.createElement(EventComponent, { event: event, title: title }) : title
          )
        )
      );
    });
  };

  this._selectable = function () {
    var node = (0, _reactDom.findDOMNode)(_this2);
    var selector = _this2._selector = new _Selection2.default(function () {
      return (0, _reactDom.findDOMNode)(_this2);
    }, {
      longPressThreshold: _this2.props.longPressThreshold
    });

    var maybeSelect = function maybeSelect(box) {
      var onSelecting = _this2.props.onSelecting;
      var current = _this2.state || {};
      var state = selectionState(box);
      var start = state.startDate,
          end = state.endDate;


      if (onSelecting) {
        if (_dates2.default.eq(current.startDate, start, 'minutes') && _dates2.default.eq(current.endDate, end, 'minutes') || onSelecting({ start: start, end: end }) === false) return;
      }

      if (_this2.state.start !== state.start || _this2.state.end !== state.end || _this2.state.selecting !== state.selecting) {
        _this2.setState(state);
      }
    };

    var selectionState = function selectionState(_ref3) {
      var y = _ref3.y;

      var _getBoundsForNode = (0, _Selection.getBoundsForNode)(node),
          top = _getBoundsForNode.top,
          bottom = _getBoundsForNode.bottom;

      var range = Math.abs(top - bottom);
      var currentSlot = _this2.slotMetrics.closestSlotToPosition((y - top) / range);

      if (!_this2.state.selecting) _this2._initialSlot = currentSlot;

      var initialSlot = _this2._initialSlot;
      if (initialSlot === currentSlot) currentSlot = _this2.slotMetrics.nextSlot(initialSlot);

      var selectRange = _this2.slotMetrics.getRange(_dates2.default.min(initialSlot, currentSlot), _dates2.default.max(initialSlot, currentSlot));

      return _extends({}, selectRange, {
        selecting: true,

        top: selectRange.top + '%',
        height: selectRange.height + '%'
      });
    };

    var selectorClicksHandler = function selectorClicksHandler(box, actionType) {
      if (!(0, _Selection.isEvent)((0, _reactDom.findDOMNode)(_this2), box)) {
        var _selectionState = selectionState(box),
            startDate = _selectionState.startDate,
            endDate = _selectionState.endDate;

        _this2._selectSlot({
          startDate: startDate,
          endDate: endDate,
          action: actionType,
          box: box
        });
      }
      _this2.setState({ selecting: false });
    };

    selector.on('selecting', maybeSelect);
    selector.on('selectStart', maybeSelect);

    selector.on('beforeSelect', function (box) {
      if (_this2.props.selectable !== 'ignoreEvents') return;

      return !(0, _Selection.isEvent)((0, _reactDom.findDOMNode)(_this2), box);
    });

    selector.on('click', function (box) {
      return selectorClicksHandler(box, 'click');
    });

    selector.on('doubleClick', function (box) {
      return selectorClicksHandler(box, 'doubleClick');
    });

    selector.on('select', function (bounds) {
      if (_this2.state.selecting) {
        _this2._selectSlot(_extends({}, _this2.state, { action: 'select', bounds: bounds }));
        _this2.setState({ selecting: false });
      }
    });
  };

  this._teardownSelectable = function () {
    if (!_this2._selector) return;
    _this2._selector.teardown();
    _this2._selector = null;
  };

  this._selectSlot = function (_ref4) {
    var startDate = _ref4.startDate,
        endDate = _ref4.endDate,
        action = _ref4.action,
        bounds = _ref4.bounds,
        box = _ref4.box;

    var current = startDate,
        slots = [];

    while (_dates2.default.lte(current, endDate)) {
      slots.push(current);
      current = _dates2.default.add(current, _this2.props.step, 'minutes');
    }

    (0, _helpers.notify)(_this2.props.onSelectSlot, {
      slots: slots,
      start: startDate,
      end: endDate,
      resourceId: _this2.props.resource,
      action: action,
      bounds: bounds,
      box: box
    });
  };

  this._select = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    (0, _helpers.notify)(_this2.props.onSelectEvent, args);
  };

  this._doubleClick = function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    (0, _helpers.notify)(_this2.props.onDoubleClickEvent, args);
  };
};

exports.default = DayColumn;
module.exports = exports['default'];