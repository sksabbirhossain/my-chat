import React from "react";
import SendIcon from "../assets/icons/SendIcon";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { FormInput } from "../components/FormInput";
import { MessageHeader } from "../components/MessageHeader";

export const Messages = () => {
  return (
    <div className="pl-[390px] w-full rounded">
      <MessageHeader />
      <div className="bg-white mt-1 rounded px-2  h-[74vh] overflow-y-auto">
        {/* message container */}
        <div>
          {/* sender message */}
          <div className="flex justify-end ml-4">
            <p className="bg-orange-600 text-white py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-s-[19px] rounded-tr-[19px]">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          {/* receiver message */}
          <div className="flex justify-start mr-4">
            <p className="bg-gray-200 text-black py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-e-[19px] rounded-ss-[19px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div>
          {/* sender message */}
          <div className="flex justify-end ml-4">
            <p className="bg-orange-600 text-white py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-s-[19px] rounded-tr-[19px]">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          {/* receiver message */}
          <div className="flex justify-start mr-4">
            <p className="bg-gray-200 text-black py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-e-[19px] rounded-ss-[19px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div>
          {/* sender message */}
          <div className="flex justify-end ml-4">
            <p className="bg-orange-600 text-white py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-s-[19px] rounded-tr-[19px]">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          {/* receiver message */}
          <div className="flex justify-start mr-4">
            <p className="bg-gray-200 text-black py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-e-[19px] rounded-ss-[19px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div>
          {/* sender message */}
          <div className="flex justify-end ml-4">
            <p className="bg-orange-600 text-white py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-s-[19px] rounded-tr-[19px]">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          {/* receiver message */}
          <div className="flex justify-start mr-4">
            <p className="bg-gray-200 text-black py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-e-[19px] rounded-ss-[19px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div>
          {/* sender message */}
          <div className="flex justify-end ml-4">
            <p className="bg-orange-600 text-white py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-s-[19px] rounded-tr-[19px]">
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          {/* receiver message */}
          <div className="flex justify-start mr-4">
            <p className="bg-gray-200 text-black py-2 px-4 w-6/12 h-auto my-1 text-sm rounded-e-[19px] rounded-ss-[19px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      {/* send message form */}
      <div className="bg-white px-2 mt-1 rounded">
        <Form className="flex justify-between items-center">
          <div className="w-full">
            <FormInput
              type="text"
              name="message"
              placeholder="Write message..."
            />
          </div>
          <div className="-mt-2">
            <Button name={<SendIcon />} className="text-xl" />
          </div>
        </Form>
      </div>
    </div>
  );
};
