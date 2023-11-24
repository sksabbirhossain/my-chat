import { apiSlice } from "../api/apiSlice";

export const messagesApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMessages: builder.query({
      query: (id) => ({
        url: `/message/all/${id}`,
      }),
    }),
  }),
});

export const { useGetMessagesQuery } = messagesApi;
