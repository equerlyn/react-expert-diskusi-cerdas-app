const ActionType = {
  CAN_SEE_PASSWORD: 'CAN_SEE_PASSWORD',
  CANT_SEE_PASSWORD: 'CANT_SEE_PASSWORD',
};

function togglePasswordVisibility() {
  return (dispatch, getState) => {
    const { isPasswordVisible } = getState();
    const actionType = isPasswordVisible
      ? ActionType.CANT_SEE_PASSWORD
      : ActionType.CAN_SEE_PASSWORD;
    dispatch({
      type: actionType,
    });
  };
}

export { 
  ActionType,
  togglePasswordVisibility };