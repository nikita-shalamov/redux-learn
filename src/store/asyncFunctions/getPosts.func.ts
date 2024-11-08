import { createAsyncThunk } from "@reduxjs/toolkit";

const getPosts = createAsyncThunk("posts/get-posts", async () => {
  try {
    const res = await fetch("http://localhost:4000/posts");
    const data = await res.json();

    return data;
  } catch (error) {
    return console.log(error);
  }
});

export default getPosts;
