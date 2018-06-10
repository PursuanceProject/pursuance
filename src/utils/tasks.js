export const showTaskInPursuance = (task, pursuanceId) => {
  return task.pursuance_id === pursuanceId ||
    task.assigned_to_pursuance_id === pursuanceId;
}

export const showAssignee = (task, currentPursuanceId, pursuances) => {
  const assignedPursuanceId = task.assigned_to_pursuance_id;
  const assignedByThisPursuance = assignedPursuanceId === currentPursuanceId;
  let placeholder = "";
  let assignedTo;
  if (assignedPursuanceId && !assignedByThisPursuance && pursuances[assignedPursuanceId]) {
    placeholder = pursuances[assignedPursuanceId].suggestionName;
    assignedTo = pursuances[assignedPursuanceId].id;
  }
  else if (task.assigned_to) {
    placeholder = '@' + task.assigned_to;
    assignedTo = task.assigned_to;
  }

  return {
    placeholder,
    assignedTo
  }
}

export const isRootTaskInPursuance = (task, pursuanceId) => {
  return !task.parent_task_gid || task.assigned_to_pursuance_id === pursuanceId;
}