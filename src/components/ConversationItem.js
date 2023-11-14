import React from "react";
import { Link } from "react-router-dom";

export const ConversationItem = () => {
  return (
    <Link to={`/inbox/${1}`}>
      <div className="px-3 pt-3 bg-white hover:bg-orange-50 duration-150">
        <div className="border-b pb-3 flex justify-between items-start space-x-2">
          <div className="flex items-center">
            <div className="w-12">
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt=""
                className="w-9 h-9 rounded-full object-cover"
              />
            </div>
            <div className="">
              <h4 className="text-base font-medium capitalize text-gray-900">
                Sk sabbir hossain
              </h4>
              <p className="text-xs font-normal text-gray-600">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-light text-black">1 secend ago</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
