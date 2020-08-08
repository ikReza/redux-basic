import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const PostAuthor = ({ userId }) => {
  const userList = useSelector((state) => state.userList);
  const { users } = userList;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return null;
  }

  return <Typography>{user.name}</Typography>;
};

export default React.memo(PostAuthor);
