import React from "react";

export const MessageHeader = () => {
  return (
    <div className="flex justify-between items-center space-x-2 p-3 shadow-md rounded-md bg-white">
      <div className="flex gap-2">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt=""
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="">
          <h4 className="font-semibold">sk sabbir hossain</h4>
          <p className="text-xs">online</p>
        </div>
      </div>
    </div>
  );
};
