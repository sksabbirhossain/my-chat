import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../features/auth/authSelector";
import {
  useAddConversationMutation,
  useEditConversationMutation,
  useGetConversationQuery,
} from "../features/conversations/conversationsApi";
import { useGetUserQuery } from "../features/user/userApi";
import isValidEmail from "../utils/isValidEmail";
import { Button } from "./Button";
import { Form } from "./Form";
import { FormInput } from "./FormInput";
import { TextArea } from "./TextArea";

export const Modal = ({ open, control }) => {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [userCheck, setUserCheck] = useState(false);
  const [conversationCheck, setConversationCheck] = useState(false);

  const userInfo = useSelector(selectUserInfo);

  const { data: participant } = useGetUserQuery(to, {
    skip: !userCheck,
  });

  const { data: conversation } = useGetConversationQuery(
    { userid: userInfo?._id, participantid: participant?._id },
    {
      skip: !conversationCheck,
    }
  );

  //add conversation api
  const [addConversation, { isSuccess: addConversatinSuccess }] =
    useAddConversationMutation();

  //edit conversation api
  const [editConversation, { isSuccess: editConversatinSuccess }] =
    useEditConversationMutation();

  //check conversation
  useEffect(() => {
    if (
      participant &&
      participant._id &&
      participant?.email !== userInfo?.email
    ) {
      setConversationCheck(true);
    }
  }, [participant, userInfo?.email]);

  //check isSuccess
  useEffect(() => {
    if (addConversatinSuccess || editConversatinSuccess) {
      control();
    }
  }, [addConversatinSuccess, control, editConversatinSuccess]);

  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  const doSearch = (value) => {
    if (isValidEmail(value)) {
      // check user API
      setTo(value);
      setUserCheck(true);
    }
  };

  const handleSearch = debounceHandler(doSearch, 500);

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (conversation?.length > 0 && conversation[0]?._id) {
      //edit conversation
      editConversation({
        id: conversation[0]._id,
        data: {
          creator: {
            id: userInfo._id,
            name: userInfo.name,
            avatar: userInfo.avatar,
          },
          participant: {
            id: participant._id,
            name: participant.name,
            avatar: participant.avatar,
          },
          last_message: message,
          last_updated: Date.now(),
        },
      });
    } else if (conversation?.length === 0) {
      //add conversatin
      addConversation({
        creator: {
          id: userInfo._id,
          name: userInfo.name,
          avatar: userInfo.avatar,
        },
        participant: {
          id: participant._id,
          name: participant.name,
          avatar: participant.avatar,
        },
        last_message: message,
        last_updated: Date.now(),
      });
    }
  };

  return (
    <>
      <div
        onClick={control}
        className="fixed w-full h-full inset-0 z-10 bg-black/50 "
      ></div>
      <div className="rounded w-full lg:w-[600px] space-y-8 bg-white p-5 z-20 absolute top-[20%] left-[100%]">
        <h2 className="mt-3 text-center text-2xl font-bold text-gray-700">
          Start Conversation
        </h2>
        <Form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            placeholder="email here"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <TextArea
            label="Message"
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button name="Send" className="w-full" />
        </Form>
      </div>
    </>
  );
};
