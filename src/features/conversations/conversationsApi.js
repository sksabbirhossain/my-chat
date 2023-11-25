import { apiSlice } from "../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (userid) => ({
        url: `/conversation/all?userid=${userid}`,
      }),
    }),
    getConversation: builder.query({
      query: () => ({
        url:`/conversation/all?userid=${userid}`,
      })
    })
  }),
});

export const { useGetConversationsQuery } = conversationsApi;
