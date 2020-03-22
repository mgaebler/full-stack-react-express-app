import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DefaultState } from 'server/defaultState';
import { requestTaskCreation, createTask } from '../store/modules/tasks';

interface Props {
  groupID: string;
}

export const TaskList: FC<Props> = ({ groupID }) => {
  const tasks = useSelector((state: DefaultState) =>
    state.tasks.filter((task) => task.group === groupID)
  );
  const dispatch = useDispatch();

  const handleRequestTaskCreation = (groupID: string) => {
    dispatch(
      createTask({
        id: 'bar',
        name: 'foo',
        group: groupID,
        owner: 'u1'
      })
    );
    // dispatch(requestTaskCreation(groupID));
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      <button onClick={() => handleRequestTaskCreation(groupID)}>
        Add Task
      </button>
    </div>
  );
};
