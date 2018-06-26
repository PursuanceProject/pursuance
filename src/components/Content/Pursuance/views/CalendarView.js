import React from 'react';
import Calendar from '../../Calendar/Calendar';

const CalendarView = ({ match: { params: { pursuanceId } } }) => {
  return (
    <Calendar pursuanceId={pursuanceId} />
  );
};

export default CalendarView;
