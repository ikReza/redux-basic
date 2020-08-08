import axios from "axios";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().postList.posts, "userId"));

  userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "POST_REQUEST" });

    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch({ type: "POST_SUCCESS", payload: data });
  } catch (err) {
    dispatch({ type: "POST_FAIL", payload: err.message });
  }
};

export const fetchUser = (id) => async (dispatch) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({ type: "USER_SUCCESS", payload: data });
};
