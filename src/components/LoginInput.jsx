import { useDispatch, useSelector } from 'react-redux';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { togglePasswordVisibility } from '../states/passwordToggle/action';

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const dispatch = useDispatch();
  const isPasswordVisible = useSelector(state => state.passwordVisibility);
  const toggleVisibility = () => {
    dispatch(togglePasswordVisibility());
  };

  return (
    <form className="login-input" onSubmit={() => login({ email, password })}>
      <input type="email" value={email} onChange={onEmailChange} placeholder="Email" tabIndex={1}/>
      <div className="relative">
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          tabIndex={2}
          value={password}
          onChange={onPasswordChange}
          placeholder="Password"
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
      <button type="submit">Login</button>
    </form>
  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput