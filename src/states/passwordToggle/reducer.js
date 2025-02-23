import { ActionType } from './action';

function passwordVisibilityReducer(isPasswordVisible = false, action = {}) {
  switch (action.type) {
    case ActionType.CAN_SEE_PASSWORD:
      return !isPasswordVisible;
    default:
      return isPasswordVisible; 
  }
}

export default passwordVisibilityReducer;
