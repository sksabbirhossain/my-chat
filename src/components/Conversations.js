import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../features/auth/authSelector";
import { useGetConversationsQuery } from "../features/conversations/conversationsApi";
import { ConversationHeader } from "./ConversationHeader";
import { ConversationItem } from "./ConversationItem";
import { Modal } from "./Modal";

export const Conversations = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector(selectUserInfo);
  const { data, isLoading, isError, isSuccess } = useGetConversationsQuery(
    user?._id
  );

  // open add conversation modal
  const control = () => {
    setOpen((prev) => !prev);
  };

  //deside what to render
  let content;

  if (isLoading) content = <div>Loading...</div>;

  if (!isLoading && isError && !isSuccess) {
    content = <div>Something went wrong!</div>;
  }

  if (!isLoading && !isError && isSuccess && data?.length === 0) {
    content = <div>No Conversations found!</div>;
  }

  if (!isLoading && !isError && isSuccess && data?.length > 0) {
    content = data.map((conversation) => (
      <ConversationItem key={conversation._id} conversation={conversation} />
    ));
  }

  return (
    <div className="sm:w-[375px] h-[84vh] fixed">
      <div>
        <ConversationHeader />
      </div>
      <div className="bg-white w-full h-full rounded-md mt-1 relative overflow-y-auto">
        <p className=" px-3 py-1 text-xs font-medium text-gray-600">ALL</p>
        <div>{content}</div>
      </div>
      {/* add conversations */}
      <div className="absolute bottom-0 right-5">
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white duration-150 px-4 py-2 rounded-full text-2xl"
          onClick={control}
        >
          +
        </button>
      </div>
      {open && <Modal open={open} control={control} />}
    </div>
  );
};
