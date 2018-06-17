'use strict';

exports.__esModule = true;
exports.DroppableDayWrapper = exports.DroppableDateCellWrapper = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _propTypes3 = require('../../utils/propTypes');

var _accessors = require('../../utils/accessors');

var _dates = require('../../utils/dates');

var _dates2 = _interopRequireDefault(_dates);

var _index = require('../../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getEventDropProps(start, end, dropDate, droppedInAllDay) {
  // Calculate duration between original start and end dates
  var duration = _dates2.default.diff(start, end);

  /*
   * If the event is dropped in a "Day" cell, preserve an event's start time by extracting the hours and minutes off
   * the original start date and add it to newDate.value
   * 
   * note: this behavior remains for backward compatibility, but might be counter-intuitive to some:
   * dragging an event from the grid to the day header might more commonly mean "make this an allDay event
   * on that day" - but the behavior here implements "keep the times of the event, but move it to the
   * new day".
   * 
   * To permit either interpretation, we embellish a new `allDay` parameter which determines whether the
   * event was dropped on the day header or not.
   */

  var nextStart = droppedInAllDay ? _dates2.default.merge(dropDate, start) : dropDate;
  var nextEnd = _dates2.default.add(nextStart, duration, 'milliseconds');

  return {
    start: nextStart,
    end: nextEnd,
    allDay: droppedInAllDay
  };
}

var DropWrapper = function (_React$Component) {
  _inherits(DropWrapper, _React$Component);

  function DropWrapper() {
    _classCallCheck(this, DropWrapper);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  // TODO: this is WIP to retain the drag offset so the
  // drag target better tracks the mouseDown location, not
  // just the top of the event.
  //
  // constructor(...args) {
  //   super(...args);
  //   this.state = { isOver: false };
  // }
  //
  // componentWillMount() {
  //   let monitor = this.context.dragDropManager.getMonitor()
  //
  //   this.monitor = monitor
  //
  //   this.unsubscribeToStateChange = monitor
  //     .subscribeToStateChange(this.handleStateChange)
  //
  //   this.unsubscribeToOffsetChange = monitor
  //     .subscribeToOffsetChange(this.handleOffsetChange)
  // }
  //
  // componentWillUnmount() {
  //   this.monitor = null
  //   this.unsubscribeToStateChange()
  //   this.unsubscribeToOffsetChange()
  // }
  //
  // handleStateChange = () => {
  //   const event = this.monitor.getItem();
  //   if (!event && this.state.isOver) {
  //     this.setState({ isOver: false });
  //   }
  // }
  //
  // handleOffsetChange = () => {
  //   const { value } = this.props;
  //   const { start, end } = this.monitor.getItem();
  //
  //   const isOver = dates.inRange(value, start, end, 'minute');
  //   if (this.state.isOver !== isOver) {
  //     this.setState({ isOver });
  //   }
  // };

  DropWrapper.prototype.render = function render() {
    var _props = this.props,
        connectDropTarget = _props.connectDropTarget,
        children = _props.children,
        type = _props.type,
        isOver = _props.isOver;

    var BackgroundWrapper = _index2.default.components[type];

    var resultingChildren = children;
    if (isOver) resultingChildren = _react2.default.cloneElement(children, {
      className: (0, _classnames2.default)(children.props.className, 'rbc-addons-dnd-over')
    });

    return _react2.default.createElement(
      BackgroundWrapper,
      null,
      connectDropTarget(resultingChildren)
    );
  };

  return DropWrapper;
}(_react2.default.Component);

DropWrapper.propTypes = {
  connectDropTarget: _propTypes2.default.func.isRequired,
  type: _propTypes2.default.string,
  isOver: _propTypes2.default.bool
};
DropWrapper.contextTypes = {
  onEventDrop: _propTypes2.default.func,
  onEventResize: _propTypes2.default.func,
  dragDropManager: _propTypes2.default.object,
  startAccessor: _propTypes3.accessor,
  endAccessor: _propTypes3.accessor,
  allDayAccessor: _propTypes3.accessor,
  step: _propTypes2.default.number };


function createDropWrapper(type) {
  function collectTarget(connect, monitor) {
    return {
      type: type,
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    };
  }

  var dropTarget = {
    drop: function drop(_, monitor, _ref) {
      var props = _ref.props,
          context = _ref.context;

      var itemType = monitor.getItemType();
      if (itemType !== 'event') return;

      var item = monitor.getItem();
      var event = item.event,
          anchor = item.anchor;
      var value = props.value;
      var _context$onEventDrop = context.onEventDrop,
          onEventDrop = _context$onEventDrop === undefined ? _noop2.default : _context$onEventDrop,
          _context$onEventResiz = context.onEventResize,
          onEventResize = _context$onEventResiz === undefined ? _noop2.default : _context$onEventResiz,
          startAccessor = context.startAccessor,
          endAccessor = context.endAccessor,
          allDayAccessor = context.allDayAccessor,
          step = context.step;


      var start = (0, _accessors.accessor)(event, startAccessor);
      var end = (0, _accessors.accessor)(event, endAccessor);
      var allDay = (0, _accessors.accessor)(event, allDayAccessor);
      var droppedInAllDay = type === 'dateCellWrapper';

      switch (anchor) {
        case 'drop':
          onEventDrop(_extends({
            event: event
          }, getEventDropProps(start, end, value, droppedInAllDay)));
          return; // all the other cases issue resize action...

        // the remaining cases are all resizes...

        case 'resizeTop':
          // dragging the top means the event isn't an allDay
          // dropping into the header changes the date, preserves the time
          // dropping elsewhere is just a normal resize
          start = droppedInAllDay ? _dates2.default.merge(value, start) : value;
          break;

        case 'resizeBottom':
          // dragging the bottom means the event isn't an allDay
          // dropping into the header changes the date, preserves the time
          // dropping elsewhere is just a normal resize
          // ... but end dates are exclusive so advance it the next slot (e.g. just past the end of this one)
          end = droppedInAllDay ? _dates2.default.merge(value, end) : _dates2.default.add(value, step, 'minutes');
          break;

        case 'resizeLeft':
          // dragging the left means we're dragging something from an event row
          // all cases are the same:
          // preserve its start time, but change the date (works for both allDay and non-allDay)
          start = _dates2.default.merge(value, start);
          break;

        case 'resizeRight':
          // dragging the right means we're dragging something from an event row
          // this case is tricky: for non-allDay events, we just want to change
          // the end date (preserving the end time). For allDay events, we want to change
          // the end date to one day later than the drop date because end dates are exclusive
          end = allDay ? _dates2.default.add(value, 1, 'day') : _dates2.default.merge(value, end);
          break;

        default:
          return; // don't issue resize
      }

      // fall here for all of the resize cases
      // note: the 'drop' param is here for backward compatibility - maybe remove in future?
      onEventResize('drop', { event: event, start: start, end: end, allDay: droppedInAllDay });
    }
  };

  return (0, _reactDnd.DropTarget)('event', dropTarget, collectTarget)(DropWrapper);
}

var DroppableDateCellWrapper = exports.DroppableDateCellWrapper = createDropWrapper('dateCellWrapper');
var DroppableDayWrapper = exports.DroppableDayWrapper = createDropWrapper('dayWrapper');