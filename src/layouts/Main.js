import React from "react";
import { Outlet } from "react-router-dom";
import { Conversations } from "../components/Conversations";

export const Main = () => {
  return (
    <>
      <Conversations />
      <Outlet />
    </>
  );
};
