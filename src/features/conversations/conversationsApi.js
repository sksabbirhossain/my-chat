import { apiSlice } from "../api/apiSlice";

export const conversationsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (userid) => ({
        url: `/conversation/all?userid=${userid}`,
      }),
    }),
    getConversation: builder.query({
      query: ({ userid, participantid }) => ({
        url: `/conversation?userid=${userid}&&participantid=${participantid}`,
      }),
    }),
    addConversation: builder.mutation({
      query: (data) => ({
        url: `/conversation/add`,
        method: "POST",
        body: data,
      }),
    }),
    editConversation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/conversation/update/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useGetConversationQuery,
  useAddConversationMutation,
  useEditConversationMutation,
} = conversationsApi;
