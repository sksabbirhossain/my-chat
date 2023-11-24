import React from "react";
import { useParams } from "react-router-dom";
import SendIcon from "../assets/icons/SendIcon";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { FormInput } from "../components/FormInput";
import { MessageBox } from "../components/MessageBox";
import { MessageHeader } from "../components/MessageHeader";
import { useGetMessagesQuery } from "../features/messages/messagesApi";

export const Messages = () => {
  const { conversationId } = useParams();
  const {
    data: messages,
    isLoading,
    isSuccess,
    error,
    isError,
  } = useGetMessagesQuery(conversationId);

  // deside what to render
  let content;

  if (isLoading) return (content = <div>Loading...</div>);

  if (!isLoading && isError && !isSuccess) {
    content = <div>Something went wrong!</div>;
  }

  if (!isLoading && !isError && isSuccess && messages?.length === 0) {
    content = <div>No Conversations found!</div>;
  }

  if (!isLoading && !isError && isSuccess && messages?.length > 0) {
    content = messages.map((message) => (
      <MessageBox key={message._id} message={message} />
    ));
  }

  return (
    <div className="pl-[390px] w-full rounded">
      <MessageHeader info={messages} />
      <div className="bg-white mt-1 rounded px-2  h-[74vh] overflow-y-auto">
        {/* message container */}

        {content}
      </div>
      {/* send message form */}
      <div className="bg-white px-2 mt-1 rounded">
        <Form className="flex justify-between items-center">
          <div className="w-full">
            <FormInput
              type="text"
              name="message"
              placeholder="Write message..."
            />
          </div>
          <div className="-mt-2">
            <Button name={<SendIcon />} className="text-xl" />
          </div>
        </Form>
      </div>
    </div>
  );
};
