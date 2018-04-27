import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  getUsers,
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
    const { getPursuances, getUsers, getTasks, currentPursuanceId, pursuances } = this.props;
    getUsers();
    getTasks(currentPursuanceId);
    if (Object.keys(pursuances).length === 0) {
      getPursuances();
    }
  }

  getEvents = () => {
    const { currentPursuanceId, tasks: { taskMap } } = this.props;
    return Object.keys(taskMap)
      .filter((gid) => {
        const t = taskMap[gid];
        return t && t.due_date &&
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
    console.log('events:', events);
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

export default connect(({ pursuances, currentPursuanceId, tasks, rightPanel }) =>
  ({ pursuances, currentPursuanceId, tasks, rightPanel }), {
    getUsers,
    getTasks,
    getPursuances,
    showTaskDetails,
})(Calendar);
