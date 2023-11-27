import { apiSlice } from "../api/apiSlice";
import { messagesApi } from "../messages/messagesApi";

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
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          //add message
          const { data } = await queryFulfilled;
          if (data?._id) {
            dispatch(
              messagesApi.endpoints.addMessage.initiate({
                id: data?._id,
                data: {
                  conversation_id: data._id,
                  message: data.last_message,
                  sender: data.creator,
                  receiver: data.participant,
                  date_time: data.last_updated,
                },
              })
            );
          }
        } catch (err) {}
      },
    }),
    editConversation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/conversation/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          //add message
          const { data } = await queryFulfilled;
          if (data?._id) {
            dispatch(
              messagesApi.endpoints.addMessage.initiate({
                id: data?._id,
                data: {
                  conversation_id: data._id,
                  message: data.last_message,
                  sender: data.creator,
                  receiver: data.participant,
                  date_time: data.last_updated,
                },
              })
            );
          }
        } catch (err) {}
      },
    }),
  }),
});

export const {
  useGetConversationsQuery,
  useGetConversationQuery,
  useAddConversationMutation,
  useEditConversationMutation,
} = conversationsApi;
