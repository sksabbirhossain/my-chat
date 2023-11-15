import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { FormInput } from "../components/FormInput";
import { useRegisterMutation } from "../features/auth/authApi";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [avatar, setAvatar] = useState(undefined);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(undefined);
  const [commonError, setCommonError] = useState("");

  const [register, { isSuccess, isLoading, error: responseError, isError }] =
    useRegisterMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && isError && responseError?.data?.errors) {
      setError(responseError?.data?.errors);
    }
    if (!isLoading && isSuccess) {
      toast.success("Register successful, please login");
      navigate("/");
    }
  }, [isError, error, responseError, isLoading, isSuccess, navigate]);

  //register handler
  const registerHandler = (e) => {
    e.preventDefault();
    setCommonError("");
    setError(undefined);
    if (password !== confirmPassword) {
      setCommonError("Password not match!");
    } else {
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("avatar", avatar);
      data.append("password", password);

      register(data);
    }
  };

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
          {/* <div className="pb-3 space-y-2">
            <h3 className="text-2xl font-semibold">Register</h3>
            <p className="text-sm text-gray-500">
              Welcome! please register your <br /> account.
            </p>
          </div> */}
          {commonError !== "" && (
            <p className="text-gray-900 bg-red-300 rounded py-2 px-1 mb-2">
              {commonError}
            </p>
          )}
          <Form onSubmit={registerHandler}>
            <FormInput
              label="your name"
              type="text"
              name="name"
              placeholder="jone deoh"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error !== undefined && error?.name && (
              <p className="text-red-600 text-xs font-medium py-1">
                {error?.name?.msg}
              </p>
            )}
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
              label="your mobile number"
              type="text"
              name="mobile"
              placeholder="+8801917656751"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            {error !== undefined && error?.mobile && (
              <p className="text-red-600 text-xs font-medium py-1">
                {error?.mobile?.msg}
              </p>
            )}
            <FormInput
              label="your profile picture"
              type="file"
              name="avatar"
              onChange={(e) => setAvatar(e.target.files[0])}
            />
            {error !== undefined && error?.avatar && (
              <p className="text-red-600 text-xs font-medium py-1">
                {error?.avatar?.msg}
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
            <FormInput
              label="confirm password"
              type="password"
              name="confirmPassword"
              placeholder="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="pt-3">
              <Button name="Login" className="w-full" disabled={isLoading} />
            </div>
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
