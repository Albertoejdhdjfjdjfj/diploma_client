import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOG_IN } from '../../constants/graphql/queries';
import Cookies from 'js-cookie';
import './LogInForm.css';

const LogInForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [logIn, { loading, error }] = useLazyQuery<{ userLogIn: { token: string } }>(LOG_IN, {
    variables: { email, password },
    onCompleted: (data) => {
      Cookies.set('token', data.userLogIn.token);
      navigate('/');
    }
  });

  const handleLogIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logIn();
  };

  return (
    <form className="sign_in_form" onSubmit={handleLogIn}>
      <div className="form_errors">{error ? error.message : ''}</div>
      <div>
        <p>Email</p>
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Log in'}
      </button>
    </form>
  );
};

export default LogInForm;
