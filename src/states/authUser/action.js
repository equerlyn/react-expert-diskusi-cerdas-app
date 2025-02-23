import api from '../../utils/api';

const ActionType = {
  SET_AUTH_USER: 'SET_AUTH_USER',
  UNSET_AUTH_USER: 'UNSET_AUTH_USER',
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

// function asyncSetAuthUser({ email, password }) {
//   return async (dispatch) => {
//     try {
//       const token = await api.login({ email, password });
//       console.log("nbbsfdadasd " + email + " " + password);
//       api.putAccessToken(token);
//       const authUser = await api.getOwnProfile();
 
//       dispatch(setAuthUserActionCreator(authUser));
//     } catch (error) {
//       alert(error.message);
//     }
//   };
// }

async function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    console.log("Inside asyncSetAuthUser: ", email, password); // 🔍 Debugging awal
    try {
      const token = await api.login({ email, password });
      
      if(token != null) {
        throw new Error("Invalid email or password");
      }

      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      console.log("User Profile Fetched:", authUser); // 🔍 Debugging user profile

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      console.error("Login Error:", error.message);
      alert(error.message);
    }
  };
}


function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};