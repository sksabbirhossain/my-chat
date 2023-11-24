import React from "react";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../features/auth/authSelector";

export const MessageBox = ({ message }) => {
  const user = useSelector(selectUserInfo);
  const { message: text, sender, receiver } = message || {};
  return (
    <div>
      {/* sender message */}
      {user?._id === sender?.id ? (
        <>
          <div className="flex justify-end ml-4">
            <p className="bg-orange-600 text-white py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-s-[19px] rounded-tr-[19px]">
              {text}
            </p>
          </div>
        </>
      ) : (
        ""
      )}
      {/* receiver message */}
      {user?._id === receiver?.id ? (
        <>
          <div className="flex justify-start mr-4">
            <p className="bg-gray-200 text-black py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-e-[19px] rounded-ss-[19px]">
              {text}
            </p>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
