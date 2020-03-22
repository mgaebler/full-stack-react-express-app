import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { DefaultState } from '../store';

interface Props {
  groupID: string;
}

export const TaskList: FC<Props> = ({ groupID }) => {
  const tasks = useSelector((state: DefaultState) =>
    state.tasks.filter(task => task.group === groupID)
  );

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  );
};
