import React from "react";
import { Link } from "react-router-dom";

export const ConversationHeader = () => {
  return (
    <div className="flex justify-between items-center space-x-2 p-3 shadow-md rounded-md bg-white">
      <Link to="/inbox">
        <h3 className="font-medium uppercase text-orange-600">Chat</h3>
      </Link>
      <form action="">
        <input
          type="text"
          placeholder="search"
          className="border-2 px-2 py-1 rounded-xl w-full focus:outline-orange-600"
        />
      </form>
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        alt=""
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  );
};
