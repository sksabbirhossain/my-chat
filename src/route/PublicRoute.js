import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectUserAccessToken,
  selectUserInfo,
} from "../features/auth/authSelector";

export const PublicRoute = ({ children }) => {
  const userInfo = useSelector(selectUserInfo);
  const accessToken = useSelector(selectUserAccessToken);

  return userInfo !== undefined && accessToken !== undefined ? (
    <Navigate to="/inbox" />
  ) : (
    children
  );
};
