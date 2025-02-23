import { ActionType } from "./action";

function threadsReducer(threads = [], action) {
  switch (action.type) {
    case ActionType.FETCH_THREADS:
      return action.payload;
    default:
      return threads;
  }
}

export default threadsReducer;