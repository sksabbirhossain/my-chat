import React from "react";
import { Outlet } from "react-router-dom";
import { Conversations } from "../components/Conversations";

export const Main = () => {
  return (
    <div className="bg-gray-300 w-full h-full min-h-screen">
      <div className="container mx-auto">
        <Conversations />
        <Outlet />
      </div>
    </div>
  );
};
