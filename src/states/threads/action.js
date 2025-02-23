import api from "../../utils/api";

const ActionType = {
  FETCH_THREADS: 'FETCH_THREADS',
};

function fetchThreadsActionCreator(threads) {
  return {
    type: ActionType.FETCH_THREADS,
    payload: {
      threads,
    },
  };
}

export {
  ActionType,
  fetchThreadsActionCreator,
};