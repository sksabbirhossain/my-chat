import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SendIcon from "../assets/icons/SendIcon";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { FormInput } from "../components/FormInput";
import { selectUserInfo } from "../features/auth/authSelector";
import { useAddMessageMutation } from "../features/messages/messagesApi";

export const SendMessageBox = ({ info }) => {
  const [text, setText] = useState("");
  const [addMessage, { isLoading, isSuccess }] = useAddMessageMutation();

  const user = useSelector(selectUserInfo);

  const { conversationId } = useParams();

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setText("");
    }
  }, [isLoading, isSuccess]);

  const receiverInfo =
    info?.sender.id === user?._id ? info.receiver : info.sender;

  // send message handler
  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({
      id: conversationId,
      data: {
        message: text,
        sender: {
          id: user._id,
          name: user.name,
          avatar: user.avatar || null,
        },
        receiver: {
          id: receiverInfo?.id,
          name: receiverInfo?.name,
          avatar: receiverInfo?.avatar || null,
        },
        date_time: Date.now,
        conversation_id: conversationId,
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
