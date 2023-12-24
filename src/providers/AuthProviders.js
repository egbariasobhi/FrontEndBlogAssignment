import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signIn = ({ userName }) => {
    setUser({ userName: "Sobhi" });
  };

  const logOut = () => {
    setUser(null);
  };

  const value = { user, signIn, logOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
