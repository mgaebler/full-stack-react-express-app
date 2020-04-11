import React, { FC, Component } from 'react';

export const LoginForm = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="username"
        name="username"
        defaultValue="Dev"
      />
      <input type="password" placeholder="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
