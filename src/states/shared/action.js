import api from '../../utils/api';
import { fetchThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
 
function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      
      dispatch(receiveUsersActionCreator(users));
      dispatch(fetchThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}
 
export { asyncPopulateUsersAndThreads };
