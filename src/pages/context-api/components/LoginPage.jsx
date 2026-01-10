import React, { use, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    setUser,
    isVerified,
    setIsVerified,
  } = useContext(AuthContext);

  const onSubmit = () => {
    setUser(username);
    if (username != null && username != "") {
      setIsVerified(true);
    } else {
      alert("Enter Valid Username");
    }
  };
  return (
    <div>
      {!isVerified && (
        <div className="container flex flex-col gap-5 items-center">
          <input
            type="text"
            placeholder="username"
            className="text-3xl rounded-2xl text-center border-2 shadow-2xl"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            className="text-3xl rounded-2xl text-center border-2 mb-5 shadow-2xl"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="text-2xl rounded-2xl text-center w-50 border-2 bg-purple-800 hover:bg-green-800 shadow-2xl"
            onClick={onSubmit}
          >
            submit
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
