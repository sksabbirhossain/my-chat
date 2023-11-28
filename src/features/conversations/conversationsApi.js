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
          const { data } = await queryFulfilled;
          if (data?._id) {
            //add message
            const res = await dispatch(
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
            ).unwrap();

            dispatch(
              apiSlice.util.updateQueryData(
                "getConversations",
                res.sender.id,
                (draft) => {
                  draft.unshift(data);
                }
              )
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
        // optimistic update
        const result = dispatch(
          apiSlice.util.updateQueryData(
            "getConversations",
            arg.data.creator.id,
            (draft) => {
              const draftConversation = draft.find(
                (item) => item._id === arg.id
              );
              draftConversation.last_message = arg.data.last_message;
              draftConversation.last_updated = arg.data.last_updated;
            }
          )
        );

        try {
          //add message
          const { data } = await queryFulfilled;
          if (data?._id) {
            const res = await dispatch(
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
            ).unwrap();

            dispatch(
              apiSlice.util.updateQueryData(
                "getMessages",
                res.conversation_id,
                (draft) => {
                  draft.unshift(res);
                }
              )
            );
          }
        } catch (err) {
          result.undo();
        }
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
