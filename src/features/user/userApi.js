import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => ({
        url: `/user/${email}`,
      }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
