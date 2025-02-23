import api from '../../utils/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};
 
function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ email, name, password }) {
  return async () => {
    try {
      const userData = await api.register({ email, name, password });
      return userData;
    } catch (error) {
      console.error('Registration error:', error.message);
      alert('Registration failed. Please try again later.');
      throw error;
    }
  };
}
 
export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};
