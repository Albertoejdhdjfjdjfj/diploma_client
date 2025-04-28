import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { User } from '../../interfaces/game/User';
import { SIGN_UP } from '../../constants/graphql/mutations';
import './SignUpForm.css';

const SignUpForm = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [signUp, { loading, error }] = useMutation<{ userSignUp: User }>(SIGN_UP, {
    onCompleted: () => {
      navigate('/logIn');
    }
  });

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signUp({ variables: { nickname, email, password } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="sign_up_form" onSubmit={handleSignUp}>
      <div className="form_errors">{error ? error.message : ''}</div>
      <div>
        <p>Nickname</p>
        <input
          placeholder="nickname"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.currentTarget.value)}
        />
      </div>
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
        {loading ? 'Signing up...' : 'Sign up'}
      </button>
    </form>
  );
};

export default SignUpForm;
