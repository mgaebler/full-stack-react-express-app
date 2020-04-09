import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DefaultState } from 'server/defaultState';
import { fetchTasks, createNewTask } from '../actions';
import { Link } from 'react-router-dom';

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
      // createTask({
      //   id: 'bar',
      //   name: 'foo',
      //   group: groupID,
      //   owner: 'u1',
      // })
      createNewTask.request({
        group: groupID,
        id: '234231241234',
        name: 'foobar',
        owner: 'U1',
        isComplete: false,
      })
    );
    // dispatch(requestTaskCreation(groupID));
  };

  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.name}</Link>
          </li>
        ))}
      </ul>
      <button onClick={() => handleRequestTaskCreation(groupID)}>
        Add Task
      </button>
    </div>
  );
};
