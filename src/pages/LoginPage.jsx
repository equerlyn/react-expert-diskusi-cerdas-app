import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cover from '../components/Cover'
import LoginInput from '../components/LoginInput'
import { asyncSetAuthUser } from '../states/authUser/action';

const LoginPage = () => {
  const dispatch = useDispatch(); 
  
  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="login-page flex">
      <div className="left-page cover-app md:w-1/2 h-screen flex flex-col items-center justify-center">
        <Cover/>
      </div>
      <div className="right-page md:w-1/2 flex flex-col items-center justify-center bg">
        <div className='w-3/4 h-max rounded-lg shadow-lg p-10'>
          <h2 className='text-5xl font-bold text-left mb-10 font-color'>Welcome back!</h2>
          <LoginInput login={onLogin} />
          <p className='text-center mt-5 font-color'>
            Don&apos;t have an account?
            {' '}
            <Link to="/register" className='font-bold'>Register</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default LoginPage