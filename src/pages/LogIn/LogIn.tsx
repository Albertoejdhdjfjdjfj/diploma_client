import LogInForm from '../../assets/components/LogInForm/LogInForm';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <div className="log_in">
      <h1>Log In</h1>
      <LogInForm />
      <p>
        New to Mafia? <a onClick={() => navigate('/signUp')}>Create an account</a>
      </p>
    </div>
  );
};

export default LogIn;
