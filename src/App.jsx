import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';

function App() {

  // const states = useSelector((state) => {
  //   console.log('Redux State:', state); // 🔍 Debugging Redux State
  //   return state;
  // });

  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states); 

  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  } 
  
  return (
    <>
      <Loading />
      <div className="app-container">
        <header>
          {/* <Navigation authUser={authUser} signOut={onSignOut} /> */}
        </header>
        <main>
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            {/* <Route path="/talks/:id" element={<DetailPage />} /> */}
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
