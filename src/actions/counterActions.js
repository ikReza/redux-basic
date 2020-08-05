export const incrementAction = (dispatch) => {
  dispatch({
    type: "INCREMENT_VALUE",
  });
};

export const decrementAction = (dispatch) => {
  dispatch({
    type: "DECREMENT_VALUE",
  });
};

export const resetAction = (dispatch) => {
  dispatch({
    type: "RESET_VALUE",
  });
};
