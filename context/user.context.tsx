import React, { createContext, useState, useEffect, PropsWithChildren } from 'react';
import { onAuthStateChangedListener, createUserDocFromAuth } from '../utils/firebase';

export interface IUser {
  displayName: string;
  email?: string;
  phone?: string;
}

export const UserContext = createContext(null as IUser | null);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user: IUser) => {
      console.log('user auth', user);
      if (user) await createUserDocFromAuth(user, undefined);

      setUser(user);
    });

    return unsubscribe;
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
