export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT_VALUE":
      return state + 1;
    case "DECREMENT_VALUE":
      return state - 1;
    case "RESET_VALUE":
      return (state = 0);
    default:
      return state;
  }
};
