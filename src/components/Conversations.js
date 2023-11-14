import React from "react";
import { ConversationHeader } from "./ConversationHeader";
import { ConversationItem } from "./ConversationItem";

export const Conversations = () => {
  return (
    <div className="sm:w-[375px] h-full min-h-screen fixed">
        <div>
          <ConversationHeader />
        </div>
        <div className="bg-white h-full min-h-screen rounded-md mt-1 relative">
          <p className=" px-3 py-1 text-xs font-medium text-gray-600">ALL</p>
          <div>
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
            <ConversationItem />
          </div>
        </div>
        {/* add conversations */}
        <div className="absolute bottom-10 right-5">
          <button className="bg-orange-600 hover:bg-orange-700 text-white duration-150 px-4 py-2 rounded-full text-2xl">
            +
          </button>
        </div>
      </div>
  );
};
