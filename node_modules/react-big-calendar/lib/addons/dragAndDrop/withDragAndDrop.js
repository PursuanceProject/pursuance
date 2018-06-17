'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = withDragAndDrop;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes3 = require('../../utils/propTypes');

var _DraggableEventWrapper = require('./DraggableEventWrapper');

var _DraggableEventWrapper2 = _interopRequireDefault(_DraggableEventWrapper);

var _DropWrappers = require('./DropWrappers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var html5Backend = void 0;

try {
  html5Backend = require('react-dnd-html5-backend');
} catch (err) {}
/* optional dep missing */


/**
 * Creates a higher-order component (HOC) supporting drag & drop and optionally resizing
 * of events:
 *
 * ```js
 *    import Calendar from 'react-big-calendar'
 *    import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
 *    export default withDragAndDrop(Calendar)
 * ```
 * (you can optionally pass any dnd backend as an optional second argument to `withDragAndDrop`.
 * It defaults to `react-dnd-html5-backend` which you should probably include in
 * your project if using this default).
 *
 * Set `resizable` to true in your calendar if you want events to be resizable.
 *
 * The HOC adds `onEventDrop` and `onEventResize` callback properties if the events are
 * moved or resized. They are called with these signatures:
 *
 * ```js
 *    function onEventDrop({ event, start, end, allDay }) {...}
 *    function onEventResize(type, { event, start, end, allDay }) {...}  // type is always 'drop'
 * ```
 *
 * Moving and resizing of events has some subtlety which one should be aware of.
 *
 * In some situations, non-allDay events are displayed in "row" format where they
 * are rendered horizontally. This is the case for ALL events in a month view. It
 * is also occurs with multi-day events in a day or week view (unless `showMultiDayTimes`
 * is set).
 *
 * When dropping or resizing non-allDay events into a the header area or when
 * resizing them horizontally because they are displayed in row format, their
 * times are preserved, only their date is changed.
 *
 * If you care about these corner cases, you can examine the `allDay` param suppled
 * in the callback to determine how the user dropped or resized the event.
 *
 * Note: you cannot use custom `EventWrapper`, `DayWrapper` or `DateCellWrapper`
 * components when using this HOC as they are overwritten here.
 *
 * @param {*} Calendar
 * @param {*} backend
 */
function withDragAndDrop(Calendar) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$backend = _ref.backend,
      backend = _ref$backend === undefined ? html5Backend : _ref$backend;

  var DragAndDropCalendar = function (_React$Component) {
    _inherits(DragAndDropCalendar, _React$Component);

    DragAndDropCalendar.prototype.getChildContext = function getChildContext() {
      return {
        onEventDrop: this.props.onEventDrop,
        onEventResize: this.props.onEventResize,
        startAccessor: this.props.startAccessor,
        endAccessor: this.props.endAccessor,
        step: this.props.step,
        draggableAccessor: this.props.draggableAccessor
      };
    };

    function DragAndDropCalendar() {
      _classCallCheck(this, DragAndDropCalendar);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args)));

      _this.handleStateChange = function () {
        var isDragging = !!_this.monitor.getItem();

        if (isDragging !== _this.state.isDragging) {
          setTimeout(function () {
            return _this.setState({ isDragging: isDragging });
          });
        }
      };

      _this.state = { isDragging: false };
      return _this;
    }

    DragAndDropCalendar.prototype.componentWillMount = function componentWillMount() {
      var monitor = this.context.dragDropManager.getMonitor();
      this.monitor = monitor;
      this.unsubscribeToStateChange = monitor.subscribeToStateChange(this.handleStateChange);
    };

    DragAndDropCalendar.prototype.componentWillUnmount = function componentWillUnmount() {
      this.monitor = null;
      this.unsubscribeToStateChange();
    };

    DragAndDropCalendar.prototype.render = function render() {
      var _props = this.props,
          selectable = _props.selectable,
          components = _props.components,
          props = _objectWithoutProperties(_props, ['selectable', 'components']);

      delete props.onEventDrop;
      delete props.onEventResize;

      props.selectable = selectable ? 'ignoreEvents' : false;

      props.className = (0, _classnames2.default)(props.className, 'rbc-addons-dnd', this.state.isDragging && 'rbc-addons-dnd-is-dragging');

      props.components = _extends({}, components, {
        dateCellWrapper: _DropWrappers.DroppableDateCellWrapper,
        dayWrapper: _DropWrappers.DroppableDayWrapper,
        eventWrapper: _DraggableEventWrapper2.default
      });

      return _react2.default.createElement(Calendar, props);
    };

    return DragAndDropCalendar;
  }(_react2.default.Component);

  DragAndDropCalendar.propTypes = {
    onEventDrop: _propTypes2.default.func,
    onEventResize: _propTypes2.default.func,
    startAccessor: _propTypes3.accessor,
    endAccessor: _propTypes3.accessor,
    allDayAccessor: _propTypes3.accessor,
    draggableAccessor: _propTypes3.accessor,
    selectable: _propTypes2.default.oneOf([true, false, 'ignoreEvents']),
    resizable: _propTypes2.default.bool,
    components: _propTypes2.default.object,
    step: _propTypes2.default.number
  };
  DragAndDropCalendar.defaultProps = {
    // TODO: pick these up from Calendar.defaultProps
    startAccessor: 'start',
    endAccessor: 'end',
    allDayAccessor: 'allDay',
    draggableAccessor: null,
    step: 30
  };
  DragAndDropCalendar.contextTypes = {
    dragDropManager: _propTypes2.default.object
  };
  DragAndDropCalendar.childContextTypes = {
    onEventDrop: _propTypes2.default.func,
    onEventResize: _propTypes2.default.func,
    startAccessor: _propTypes3.accessor,
    endAccessor: _propTypes3.accessor,
    draggableAccessor: _propTypes3.accessor,
    step: _propTypes2.default.number
  };


  if (backend === false) {
    return DragAndDropCalendar;
  } else {
    return (0, _reactDnd.DragDropContext)(backend)(DragAndDropCalendar);
  }
}
module.exports = exports['default'];