import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/posts.slice";
import { api } from "./api/api";

export const store = configureStore({
  reducer: {
    posts: reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
