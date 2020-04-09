import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'app/store/store';

interface Props {
  id: string;
  groups: [];
}
export const TaskDetail: FC<Props> = ({ id, groups }) => {
  const task = useSelector<RootState>((state) =>
    state.tasks.find((task) => task.id === id)
  );
  return (
    task && (
      <div>
        <h3>{task.name}</h3>
        <button>Complete / Reopen Task</button>
        <select>
          {groups.map((group) => (
            <option key={group.id} value={group.id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>
    )
  );
};
