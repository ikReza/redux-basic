export const postListReducer = (state = { posts: [] }, action) => {
  switch (action.type) {
    case "POST_REQUEST":
      return { loading: true };
    case "POST_SUCCESS":
      return { loading: false, posts: action.payload };
    case "POST_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "USER_SUCCESS":
      return { users: [...state.users, action.payload] };
    default:
      return state;
  }
};
