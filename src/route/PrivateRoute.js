import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectUserAccessToken,
  selectUserInfo,
} from "../features/auth/authSelector";

export const PrivateRoute = ({ children }) => {
  const userInfo = useSelector(selectUserInfo);
  const accessToken = useSelector(selectUserAccessToken);

  return userInfo && accessToken ? <children /> : <Navigate to="/" />;
};
