import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { togglePasswordVisibility } from '../states/passwordToggle/action';


const RegisterInput = ({ register }) => {
  const [email, onEmailChange] = useInput('');
  const [name, onNameChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Password and confirm password must be the same');
      return;
    }
    
    register({ name, email, password });
  };  

  const dispatch = useDispatch();
  const isPasswordVisible = useSelector(state => state.passwordVisibility);
  const toggleVisibility = () => {
    dispatch(togglePasswordVisibility());
  };

  return (
    <form className="register-input" onSubmit={() => handleRegister()}>
      <input type="email" value={email} onChange={onEmailChange} placeholder="Email" tabIndex={1}/>
      <input type="text" value={name} onChange={onNameChange} placeholder="Name" tabIndex={1}/>
      <div className="relative">
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
          tabIndex={2}
          className="w-full p-2 pr-10 rounded-md border"
        />
        <div role="button" tabIndex={0}
          className="eye absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onMouseDown={toggleVisibility}
          onMouseUp={toggleVisibility}
        >
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <div className="relative">
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          value={confirmPassword}
          onChange={onConfirmPasswordChange}
          placeholder="Confirm Password"
          tabIndex={2}
          className="w-full p-2 pr-10 rounded-md border"
        />
        <div role="button" tabIndex={0}
          className="eye absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
          onMouseDown={toggleVisibility}
          onMouseUp={toggleVisibility}
        >
          {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
      <button type="submit">Register</button>
    </form>
  )
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput