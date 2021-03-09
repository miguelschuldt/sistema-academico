import React, { createContext, ReactNode, useState } from 'react';

import login from '../services/auth'

interface AuthContextData {
  token: string;
  setToken: (value: string) => void;
  userName: string;
  setUserName: (value: string) => void;
  authenticate: (email: string, password: string) => void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({children}: AuthProviderProps) {
  const [token, setToken] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  async function authenticate(email: string, password: string) {
      if(email && password) {
        let response = await login(email, password);
        setToken(response.token);
        setUserName(response.userName);
      }
  }

  return (
      <AuthContext.Provider value={{token, setToken, userName, setUserName, authenticate}}>
        { children }
      </AuthContext.Provider>
  );
}