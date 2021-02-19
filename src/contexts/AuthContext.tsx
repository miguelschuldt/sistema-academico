import React, { createContext, ReactNode, useState } from 'react';

interface AuthContextData {
  token: string;
  setToken: (value: string) => void;
  userName: string;
  setUserName: (value: string) => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({children}: AuthProviderProps) {
  const [token, setToken] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  return (
      <AuthContext.Provider value={{token, setToken, userName, setUserName}}>
        { children }
      </AuthContext.Provider>
  );
}