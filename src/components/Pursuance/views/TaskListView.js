import React from 'react';
import TaskHierarchy from '../../Content/TaskHierarchy/TaskHierarchy'

const TaskListView = ({ match: { params: { pursuanceId } } }) => {
  return (
    <TaskHierarchy pursuanceId={pursuanceId} />
  );
};

export default TaskListView;
