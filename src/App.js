import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "./layouts/Main";
import { Inbox } from "./pages/Inbox";
import { Login } from "./pages/Login";
import { Messages } from "./pages/Messages";
import { Register } from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Main />}>
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/inbox/:conversationId" element={<Messages />} />
      </Route>
    </Routes>
  );
}

export default App;
