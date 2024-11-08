import { IPost } from "../../types/IPost";
import { api } from "./api";

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updatePost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        body: { title: post.title, content: post.content },
        url: `/${post.id}`,
        method: "PUT",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Posts", id: arg.id }],
    }),
  }),
});

export const { useUpdatePostMutation } = postsApi;
