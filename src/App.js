import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuthCheck } from "./hooks/useAuthCheck";
import { Main } from "./layouts/Main";
import { Inbox } from "./pages/Inbox";
import { Login } from "./pages/Login";
import { Messages } from "./pages/Messages";
import { Register } from "./pages/Register";
import { PublicRoute } from "./route/PublicRoute";
import { PrivateRoute } from "./route/PrivateRoute";

function App() {
  const authChecked = useAuthCheck();
  if (!authChecked) {
    return <p>loading...</p>;
  }
  return (
    <Routes>
      <Route path="/" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
      <Route path="/" element={<Main />}>
        <Route path="/inbox" element={<PrivateRoute><Inbox /></PrivateRoute>} />
        <Route path="/inbox/:conversationId" element={<PrivateRoute><Messages /></PrivateRoute>} />
      </Route>
    </Routes>
  );
}

export default App;
