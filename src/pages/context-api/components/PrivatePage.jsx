import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivatePage = () => {
  const { user, isVerified, setIsVerified } = useContext(AuthContext);

  const onLogout = () => {
    setIsVerified(false);
  };
  return (
    <>
      {isVerified && (
        <div className="text-2xl items-center flex flex-col gap-3">
          Welcome!!!
          <h1 className="mb-5">Hello {user}</h1>
          <button
            className="text-2xl rounded-2xl text-center w-50 border-2 bg-purple-800 hover:bg-red-800 shadow-2xl"
            onClick={onLogout}
          >
            LogOut
          </button>
        </div>
      )}
    </>
  );
};

export default PrivatePage;
