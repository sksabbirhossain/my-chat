import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserInfo } from "../features/auth/authSelector";

export const ConversationItem = ({ conversation }) => {
  const { _id, creator, participant, last_updated, last_message } =
    conversation || {};
  const user = useSelector(selectUserInfo);

  const participantInfo = user?._id === creator?.id ? participant : creator;
  return (
    <Link to={`/inbox/${_id}`}>
      <div className="px-3 pt-3 bg-white hover:bg-orange-50 duration-150">
        <div className="border-b pb-3 flex justify-between items-start space-x-2">
          <div className="flex items-center">
            <div className="w-12">
              <img
                src={
                  participantInfo?.avatar !== null
                    ? `${process.env.REACT_APP_BASE_URL}/uploads/avatars/${participantInfo?.avatar}`
                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                }
                alt=""
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
            <div className="">
              <h4 className="text-base font-medium capitalize text-gray-900">
                {participantInfo.name}
              </h4>
              <p className="text-xs font-normal text-gray-600">
                {last_message?.substring(0, 15)}
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-black">
              {moment(last_updated).fromNow()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
