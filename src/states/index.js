import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import passwordVisibilityReducer from './passwordToggle/reducer';
import threadsReducer from './threads/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
    threads: threadsReducer,
    passwordVisibility: passwordVisibilityReducer,
  },
});

export default store;