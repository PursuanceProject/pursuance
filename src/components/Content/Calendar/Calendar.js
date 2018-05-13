import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  getTasks,
  getPursuances,
  showTaskDetails,
} from '../../../actions';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import '../Content.css';

BigCalendar.momentLocalizer(moment);

class Calendar extends Component {

  componentDidMount() {
    const {
      getPursuances,
      getTasks,
      currentPursuanceId,
      pursuances,
      tasks
    } = this.props;

    // Fetch this pursuance's tasks if we haven't already
    if (Object.keys(tasks.taskMap)
        .filter(gid => gid.startsWith(currentPursuanceId + '_'))
        .length === 0) {
      getTasks(currentPursuanceId);
    }
    if (Object.keys(pursuances).length === 0) {
      getPursuances();
    }
  }

  getEvents = () => {
    const { currentPursuanceId, user, tasks: { taskMap } } = this.props;
    return Object.keys(taskMap)
      .filter((gid) => {
        const t = taskMap[gid];
        return t &&
          t.due_date &&
          t.status !== 'Done' &&
          t.assigned_to === user.username &&
          (t.pursuance_id === currentPursuanceId ||
           t.assigned_to_pursuance_id === currentPursuanceId)
      })
      .map((gid) => {
        const t = taskMap[gid];
        return {
          id: t.gid,
          title: t.title,
          start: new Date(t.due_date),
          end: new Date(t.due_date),
          desc: t.deliverables,
          allDay: true,
        }
      })
  }

  onSelectEvent = (event) => {
    this.props.showTaskDetails({taskGid: event.id});
  }

  render() {
    const { pursuances, currentPursuanceId } = this.props;
    const events = this.getEvents();

    return (
      <div className="content">
        <div id="calendar">
          <div id="task-hierarchy-title">
            <h2 id="calendar-title">Calendar:&nbsp;</h2>
            <h2 id="pursuance-title">
              {
                pursuances[currentPursuanceId] && pursuances[currentPursuanceId].name
              }
            </h2>
          </div>
          <div id="big-calendar">
            <BigCalendar
              popup
              selectable
              defaultView="month"
              defaultDate={new Date()}
              events={events}
              onSelectEvent={this.onSelectEvent}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(({ pursuances, currentPursuanceId, tasks, rightPanel, user }) =>
  ({ pursuances, currentPursuanceId, tasks, rightPanel, user }), {
    getTasks,
    getPursuances,
    showTaskDetails,
})(Calendar);
