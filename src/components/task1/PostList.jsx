import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsAndUsers } from "../../actions/blogActions";

import { Box, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAndUsers());
    return () => {};
  }, []);

  const postList = useSelector((state) => state.postList);
  const { loading, posts, error } = postList;

  return loading ? (
    <div>loading. .. ...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    posts.map((post) => (
      <Box component="div" key={post.id}>
        <AccountCircle />
        <Typography>{post.title}</Typography>
        <Typography>{post.body}</Typography>
        <PostAuthor userId={post.userId} postId={post.id} />
      </Box>
    ))
  );
};

export default PostList;
