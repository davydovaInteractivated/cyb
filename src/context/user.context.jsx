import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocFromAuth } from "../utils/firebase";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({
        displayName: null,
        email: null,
        phone: null,
        settings: {
            theme: null,
            lang: null,
        },
        catalog: {
            marked: [],
            sortDirection: 0,
        },
    });

    const value = {
        user,
        userData,
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            console.log(user);
            if (user) await createUserDocFromAuth(user);

            setUser(user);
            setUserData({
                displayName: user?.displayName || null,
                email: user?.email || null,
                phone: user?.phone || null,
                settings: {
                    theme: null,
                    lang: null,
                },
                catalog: {
                    marked: [],
                    sortDirection: 0,
                },
            });
        });

        return unsubscribe;
    }, []);

    return (<UserContext.Provider value={value}>
        {children}</UserContext.Provider>)
};
