import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "../../types/IPost";

const API_URL = "http://localhost:4000/posts";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], string>({
      query: () => "",
      providesTags: () => [
        {
          type: "Posts",
        },
      ],
    }),
  }),
});

export const { useGetPostsQuery } = api;
