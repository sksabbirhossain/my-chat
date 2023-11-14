import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { FormInput } from "../components/FormInput";

export const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-300 px-2 sm:px-0">
      <div className="bg-white p-6 shadow-md rounded">
        <div className="pb-5 space-y-2">
          <h3 className="text-2xl font-semibold">Login</h3>
          <p className="text-sm text-gray-500">
            Welcome back! please login your <br /> account.
          </p>
        </div>

        <Form>
          <FormInput
            label="your email address"
            type="email"
            name="email"
            placeholder="example@gmail.com"
          />
          <FormInput
            label="your password"
            type="password"
            name="password"
            placeholder="password"
          />
          <div className="pb-4 flex justify-between text-sm text-gray-600">
            <p className="flex space-x-1">
              <input
                type="checkbox"
                name="check"
                id="check"
                className="accent-orange-600 cursor-pointer"
              />
              <label htmlFor="check" className="cursor-pointer select-none">
                Remember Me
              </label>
            </p>
            <Link to="/">
              <p className="font-medium">Forget Password</p>
            </Link>
          </div>
          <Button name="Login" className="w-full" />
        </Form>
        <div className="text-center pt-5">
          <p className="text-sm">
            Not Registered?{" "}
            <Link to="/register" className="text-orange-600 font-medium">
              create an account.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
