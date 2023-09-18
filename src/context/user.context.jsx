import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocFromAuth } from "../utils/firebase";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            console.log('user auth', user);
            if (user) await createUserDocFromAuth(user);

            setUser(user);
        });

        return unsubscribe;
    }, []);

    return (<UserContext.Provider value={user}>
        {children}</UserContext.Provider>)
};
