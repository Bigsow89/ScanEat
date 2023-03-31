import React, { createContext } from 'react';

export const AuthNavContext = createContext();

export const AuthNavProvider = (children) => {
  return <AuthNavContext.Provider>{children}</AuthNavContext.Provider>;
};
