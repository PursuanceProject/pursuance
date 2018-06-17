'use strict';

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDnd = require('react-dnd');

var _reactDndHtml5Backend = require('react-dnd-html5-backend');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _propTypes3 = require('../../utils/propTypes');

var _accessors = require('../../utils/accessors');

var _index = require('../../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventWrapper = _index2.default.components.eventWrapper;

var DraggableEventWrapper = function (_React$Component) {
  _inherits(DraggableEventWrapper, _React$Component);

  function DraggableEventWrapper() {
    _classCallCheck(this, DraggableEventWrapper);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  DraggableEventWrapper.prototype.componentDidMount = function componentDidMount() {
    // this is needed to prevent the backend from
    // screenshot'ing the event during a resize which
    // would be very confusing visually
    var emptyImage = (0, _reactDndHtml5Backend.getEmptyImage)();
    var previewOptions = { captureDraggingState: true };
    this.props.connectTopDragPreview(emptyImage, previewOptions);
    this.props.connectBottomDragPreview(emptyImage, previewOptions);
    this.props.connectLeftDragPreview(emptyImage, previewOptions);
    this.props.connectRightDragPreview(emptyImage, previewOptions);
  };

  DraggableEventWrapper.prototype.render = function render() {
    var _props = this.props,
        connectDragSource = _props.connectDragSource,
        connectTopDragSource = _props.connectTopDragSource,
        connectBottomDragSource = _props.connectBottomDragSource,
        connectLeftDragSource = _props.connectLeftDragSource,
        connectRightDragSource = _props.connectRightDragSource,
        isDragging = _props.isDragging,
        isResizing = _props.isResizing,
        children = _props.children,
        event = _props.event,
        allDay = _props.allDay,
        isRow = _props.isRow,
        continuesPrior = _props.continuesPrior,
        continuesAfter = _props.continuesAfter;
    var draggableAccessor = this.context.draggableAccessor;


    var isDraggable = draggableAccessor ? !!(0, _accessors.accessor)(event, draggableAccessor) : true;

    /* Event is not draggable, no need to wrap it */
    if (!isDraggable) {
      return children;
    }

    var StartAnchor = null,
        EndAnchor = null;

    /*
     * The resizability of events depends on whether they are
     * allDay events and how they are displayed.
     *
     * 1. If the event is being shown in an event row (because
     * it is an allDay event shown in the header row or because as
     * in month view the view is showing all events as rows) then we
     * allow east-west resizing.
     *
     * 2. Otherwise the event is being displayed
     * normally, we can drag it north-south to resize the times.
     *
     * See `DropWrappers` for handling of the drop of such events.
     *
     * Notwithstanding the above, we never show drag anchors for
     * events which continue beyond current component. This happens
     * in the middle of events when showMultiDay is true, and to
     * events at the edges of the calendar's min/max location.
     */

    if (isRow || allDay) {
      var anchor = _react2.default.createElement(
        'div',
        { className: 'rbc-addons-dnd-resize-ew-anchor' },
        _react2.default.createElement('div', { className: 'rbc-addons-dnd-resize-ew-icon' })
      );
      StartAnchor = !continuesPrior && connectLeftDragSource(anchor);
      EndAnchor = !continuesAfter && connectRightDragSource(anchor);
    } else {
      var _anchor = _react2.default.createElement(
        'div',
        { className: 'rbc-addons-dnd-resize-ns-anchor' },
        _react2.default.createElement('div', { className: 'rbc-addons-dnd-resize-ns-icon' })
      );
      StartAnchor = !continuesPrior && connectTopDragSource(_anchor);
      EndAnchor = !continuesAfter && connectBottomDragSource(_anchor);
    }

    /*
     * props.children is the singular <Event> component.
     * BigCalendar positions the Event abolutely and we
     * need the anchors to be part of that positioning.
     * So we insert the anchors inside the Event's children
     * rather than wrap the Event here as the latter approach
     * would lose the positioning.
     */
    var childrenWithAnchors = _react2.default.createElement(
      'div',
      { className: 'rbc-addons-dnd-resizable' },
      StartAnchor,
      children.props.children,
      EndAnchor
    );

    children = _react2.default.cloneElement(children, {
      className: (0, _classnames2.default)(children.props.className, isDragging && 'rbc-addons-dnd-dragging', isResizing && 'rbc-addons-dnd-resizing'),
      children: childrenWithAnchors // replace original event child with anchor-embellished child
    });

    return _react2.default.createElement(
      EventWrapper,
      { event: event, allDay: allDay },
      connectDragSource(children)
    );
  };

  return DraggableEventWrapper;
}(_react2.default.Component);

/* drag sources */


DraggableEventWrapper.contextTypes = {
  draggableAccessor: _propTypes3.accessor
};
DraggableEventWrapper.propTypes = {
  event: _propTypes2.default.object.isRequired,

  connectDragSource: _propTypes2.default.func.isRequired,
  connectTopDragPreview: _propTypes2.default.func.isRequired,
  connectTopDragSource: _propTypes2.default.func.isRequired,
  connectBottomDragPreview: _propTypes2.default.func.isRequired,
  connectBottomDragSource: _propTypes2.default.func.isRequired,
  connectLeftDragPreview: _propTypes2.default.func.isRequired,
  connectLeftDragSource: _propTypes2.default.func.isRequired,
  connectRightDragPreview: _propTypes2.default.func.isRequired,
  connectRightDragSource: _propTypes2.default.func.isRequired,

  draggable: _propTypes2.default.bool,
  allDay: _propTypes2.default.bool,
  isRow: _propTypes2.default.bool,
  continuesPrior: _propTypes2.default.bool,
  continuesAfter: _propTypes2.default.bool,
  isDragging: _propTypes2.default.bool,
  isResizing: _propTypes2.default.bool
};
var makeEventSource = function makeEventSource(anchor) {
  return {
    beginDrag: function beginDrag(_ref) {
      var event = _ref.event;
      return { event: event, anchor: anchor };
    }
    //canDrag: ({ event }) => true, // support per-event dragability/sizability
  };
};

exports.default = (0, _compose2.default)((0, _reactDnd.DragSource)('event', makeEventSource('drop'), function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}), (0, _reactDnd.DragSource)('event', makeEventSource('resizeTop'), function (connect, monitor) {
  return {
    connectTopDragSource: connect.dragSource(),
    connectTopDragPreview: connect.dragPreview(),
    isResizing: monitor.isDragging()
  };
}), (0, _reactDnd.DragSource)('event', makeEventSource('resizeBottom'), function (connect, monitor) {
  return {
    connectBottomDragSource: connect.dragSource(),
    connectBottomDragPreview: connect.dragPreview(),
    isResizing: monitor.isDragging()
  };
}), (0, _reactDnd.DragSource)('event', makeEventSource('resizeLeft'), function (connect, monitor) {
  return {
    connectLeftDragSource: connect.dragSource(),
    connectLeftDragPreview: connect.dragPreview(),
    isResizing: monitor.isDragging()
  };
}), (0, _reactDnd.DragSource)('event', makeEventSource('resizeRight'), function (connect, monitor) {
  return {
    connectRightDragSource: connect.dragSource(),
    connectRightDragPreview: connect.dragPreview(),
    isResizing: monitor.isDragging()
  };
}))(DraggableEventWrapper);
module.exports = exports['default'];