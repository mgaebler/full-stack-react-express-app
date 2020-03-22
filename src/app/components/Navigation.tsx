import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import { DefaultState } from 'server/defaultState';

export const Navigation = () => {
  const state = useSelector((state: DefaultState) => state);
  return (
    <div>
      <Link to="/dashboard">
        <h1>My Application</h1>
      </Link>
    </div>
  );
};
