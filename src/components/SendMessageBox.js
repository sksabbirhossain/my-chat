import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SendIcon from "../assets/icons/SendIcon";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { FormInput } from "../components/FormInput";
import { selectUserInfo } from "../features/auth/authSelector";
import { useEditConversationMutation } from "../features/conversations/conversationsApi";

export const SendMessageBox = ({ info }) => {
  const [text, setText] = useState("");
  const [editConversation, { isLoading, isSuccess }] =
    useEditConversationMutation();

  const user = useSelector(selectUserInfo);

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setText("");
    }
  }, [isLoading, isSuccess]);

  const receiverInfo =
    info?.sender?.id === user?._id ? info?.receiver : info?.sender;

  const senderInfo =
    info?.sender?.id !== user?._id ? info?.receiver : info?.sender;

  // send message handler
  const handleSubmit = (e) => {
    e.preventDefault();
    editConversation({
      id: info?.conversation_id,
      data: {
        creator: {
          id: senderInfo?.id,
          name: senderInfo?.name,
          avatar: senderInfo?.avatar,
        },
        participant: {
          id: receiverInfo?.id,
          name: receiverInfo?.name,
          avatar: receiverInfo?.avatar,
        },
        last_message: text,
        last_updated: Date.now(),
      },
    });
  };
  return (
    <div className="bg-white px-2 mt-1 rounded">
      <Form
        className="flex justify-between items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <FormInput
            type="text"
            name="message"
            placeholder="Write message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="-mt-2">
          <Button name={<SendIcon />} className="text-xl" />
        </div>
      </Form>
    </div>
  );
};
