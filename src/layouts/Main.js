import React from "react";
import { Outlet } from "react-router-dom";
import { Conversations } from "../components/Conversations";

export const Main = () => {
  return (
    <div className="bg-gray-300 w-full h-screen">
      <div className="container mx-auto py-5">
        <Conversations />
        <Outlet />
      </div>
    </div>
  );
};
