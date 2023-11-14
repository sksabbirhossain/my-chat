import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { FormInput } from "../components/FormInput";

export const Register = () => {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center bg-gray-300 px-2 lg:px-0">
      <div className="flex flex-col-reverse sm:flex-row w-full justify-between sm:max-w-[900px] shadow-md rounded">
        <div className="w-full bg-gradient-to-tr from-purple-500 to-pink-500 px-6 py-4">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex w-full h-40 items-center justify-center backdrop-blur-md bg-white/30  rounded">
              <p>social icons</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-white px-6 py-4">
          <div className="pb-3 space-y-2">
            <h3 className="text-2xl font-semibold">Register</h3>
            <p className="text-sm text-gray-500">
              Welcome! please register your <br /> account.
            </p>
          </div>
          <Form>
            <FormInput
              label="your name"
              type="text"
              name="name"
              placeholder="jone deoh"
            />
            <FormInput
              label="your email address"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
            <FormInput
              label="your mobile number"
              type="text"
              name="mobile"
              placeholder="+8801917656751"
            />
            <FormInput
              label="your password"
              type="password"
              name="password"
              placeholder="password"
            />
            <FormInput
              label="confirm password"
              type="password"
              name="confirmPassword"
              placeholder="password"
            />

            <Button name="Login" className="w-full" />
          </Form>
          <div className="text-center pt-3">
            <p className="text-sm capitalize">
              Already Have An Account?{" "}
              <Link to="/" className="text-orange-600 font-medium">
                Login.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
