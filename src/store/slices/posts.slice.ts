import { createSlice } from "@reduxjs/toolkit";
import getPosts from "../asyncFunctions/getPosts.func";
import { IInitialStateTypes } from "../../types/IInitialState";

const initialState: IInitialStateTypes = {
  posts: [],
  loading: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action) => {
      state.posts.push(...action.payload);
    },
    removePost: (state, action) => {
      state.posts.filter((item) => item.id !== action.payload.id);
    },
    changePost: (state, action) => {
      const { id, title, content } = action.payload;
      const post = state.posts.find((item) => item.id === id);
      if (post) {
        post.title = title;
        post.content = content;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = false;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.posts = [];
      });
  },
});

export const { reducer } = postsSlice;
export const { addPosts, changePost, removePost } = postsSlice.actions;
