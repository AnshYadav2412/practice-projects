import React from "react";
import LoginPage from "./components/LoginPage";
import PrivatePage from "./components/PrivatePage";
import { AuthProvider } from "./context/AuthContext";

const ContextApp = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col gap-5 items-center bg-gray-600 p-5 rounded-2xl shadow-2xl">
        <LoginPage />
        <PrivatePage />
      </div>
    </AuthProvider>
  );
};

export default ContextApp;
