import React from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../features/auth/authSelector";

export const MessageHeader = ({ info }) => {
  const loggedInUser = useSelector(selectUserInfo);

  const receiverInfo =
    loggedInUser?._id !== info?.sender?.id ? info?.sender : info?.receiver;

  return (
    <div className="flex justify-between items-center space-x-2 p-3 shadow-md rounded-md bg-white">
      <div className="flex gap-2">
        <img
          src={
            receiverInfo?.avatar !== null
              ? `${process.env.REACT_APP_BASE_URL}/uploads/avatars/${receiverInfo?.avatar}`
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="">
          <h4 className="font-semibold">{receiverInfo?.name}</h4>
          <p className="text-xs">online</p>
        </div>
      </div>
    </div>
  );
};
