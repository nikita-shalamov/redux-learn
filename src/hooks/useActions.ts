import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import getPosts from "../store/asyncFunctions/getPosts.func";
import { addPosts, changePost, removePost } from "../store/slices/posts.slice";

const useActions = () => {
  const allActions = { addPosts, changePost, removePost, getPosts };
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};

export default useActions;
