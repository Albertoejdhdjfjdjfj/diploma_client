import SignUpForm from '../../assets/components/SignUpForm/SignUpForm';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css"

const SignUp = () => {
      const navigate = useNavigate();
     return (
          <div className="sign_up"> 
               <h1>Sign Up</h1>
               <SignUpForm/>
               <p>Got an account? <a onClick={()=>navigate("/logIn")}>Log In</a></p>
          </div>
     );
}

export default SignUp;
