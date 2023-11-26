import React from "react";
import { Button } from "./Button";
import { Form } from "./Form";
import { FormInput } from "./FormInput";
import { TextArea } from "./TextArea";

export const Modal = ({ open, control }) => {
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
        <Form>
          <FormInput label="Email" type="email" placeholder="email here" />
          <TextArea label="Message" placeholder="Write your message here..." />
          <Button name="Send" className="w-full" />
        </Form>
      </div>
    </>
  );
};
