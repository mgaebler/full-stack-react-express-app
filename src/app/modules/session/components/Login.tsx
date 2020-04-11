import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from 'app/store/store';
import { LoginForm } from './LoginForm';

export const Login = () => {
  const session = useSelector<RootState>((state) => state.session);
  return (
    !session.authenticated && (
      <div>
        <strong>Login Here</strong>
        <LoginForm />
      </div>
    )
  );
};
