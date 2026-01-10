import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isVerified, setIsVerified] = useState("false");
  return (
    <AuthContext.Provider
      value={{
        username,
        password,
        setUsername,
        setPassword,
        user,
        setUser,
        isVerified,
        setIsVerified,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
