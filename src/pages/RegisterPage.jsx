import { Link, useNavigate } from 'react-router-dom';
import Cover from '../components/Cover';
import RegisterInput from '../components/RegisterInput';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
  };

  return (
    <section className="register-page flex">
      <div className="left-page cover-app md:w-1/2 h-screen flex flex-col items-center justify-center">
        <Cover/>
      </div>
      <div className="right-page md:w-1/2 flex flex-col items-center justify-center bg">
        <div className='w-3/4 h-max rounded-lg shadow-lg p-10'>
          <h2 className='text-5xl font-bold text-left mb-10 font-color'>Create your account</h2>
          <RegisterInput register={onRegister} />
          <p className='text-center mt-5 font-color'>
            Already have an account?
            {' '}
            <Link to="/" className='font-bold'>Login</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default RegisterPage