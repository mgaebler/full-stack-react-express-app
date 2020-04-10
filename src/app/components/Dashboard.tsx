import React, { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { TaskList } from '../modules/tasks/components/TaskList';
import { DefaultState } from 'server/defaultState';

export const DashBoard: FC = () => {
  const groups = useSelector((state: DefaultState) => state.groups);

  return (
    <div>
      <h2>DashBoard</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {groups.map((group) => (
          <div key={group.id} style={{ border: 'thin solid red', padding: 8 }}>
            <div>{group.name}</div>
            <TaskList groupID={group.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
