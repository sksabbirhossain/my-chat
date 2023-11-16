import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { FormInput } from "../components/FormInput";
import { useLoginMutation } from "../features/auth/authApi";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [commonError, setCommonError] = useState("");

  const [login, { isSuccess, isLoading, error: responseError, isError }] =
    useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isError && responseError?.data?.errors) {
      setError(responseError?.data?.errors);
    }

    if (!isLoading && responseError?.error) {
      setCommonError(responseError?.error);
    }

    if (!isLoading && responseError?.data?.message) {
      setCommonError(responseError?.data?.message);
    }

    if (!isLoading && isSuccess) {
      toast.success("Login successful!");
      navigate("/inbox");
    }
  }, [isError, error, responseError, isLoading, isSuccess, navigate]);

  //register handler
  const loginHandler = (e) => {
    e.preventDefault();
    setCommonError("");
    setError(undefined);

    login({ email, password });
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-300 px-2 sm:px-0">
      <div className="bg-white p-6 shadow-md rounded max-w-[400px]">
        <div className="pb-5 space-y-2">
          <h3 className="text-2xl font-semibold">Login</h3>
          <p className="text-sm text-gray-500">
            Welcome back! please login your <br /> account.
          </p>
        </div>

        <Form onSubmit={loginHandler}>
          <FormInput
            label="your email address"
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error !== undefined && error?.email && (
            <p className="text-red-600 text-xs font-medium py-1">
              {error?.email?.msg}
            </p>
          )}
          <FormInput
            label="your password"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error !== undefined && error?.password && (
            <p className="text-red-600 text-xs font-medium py-1">
              {error?.password?.msg}
            </p>
          )}
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
          <Button name="Login" className="w-full" disabled={isLoading} />

          {commonError !== "" && (
            <p className="text-black bg-red-400 rounded py-2 px-1 mt-2">
              {commonError}
            </p>
          )}
        </Form>
        <div className="text-center pt-5">
          <p className="text-sm">
            Not Registered?
            <Link to="/register" className="text-orange-600 font-medium">
              create an account.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
