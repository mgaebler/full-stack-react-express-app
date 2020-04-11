import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'app/store/store';
import { Link, match } from 'react-router-dom';
import { setTaskCompletion, setTaskName, setTaskGroup } from '../actions';

interface Props {
  match: match<{ id: string }>;
}
export const TaskDetail: FC<Props> = ({ match }) => {
  const id = match.params.id;
  const task = useSelector<RootState>((state) =>
    state.tasks.find((task) => task.id === id)
  );

  const groups = useSelector<RootState>((state) => state.groups);
  const dispatch = useDispatch();

  return (
    task && (
      <div>
        <div>
          <input
            onChange={(e) => dispatch(setTaskName(task.id, e.target.value))}
            value={task.name}
          />
        </div>
        <div>
          <button
            onClick={() =>
              dispatch(setTaskCompletion(task.id, !task.isComplete))
            }
          >
            {task.isComplete ? 'Reopen' : 'Complete'}
          </button>
        </div>
        <div>
          <select
            onChange={(e) => dispatch(setTaskGroup(task.id, e.target.value))}
            value={task.group}
          >
            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Link to={'/dashboard'}>
            <button>Done</button>
          </Link>
        </div>
      </div>
    )
  );
};
