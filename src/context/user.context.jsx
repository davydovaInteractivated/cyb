import { createContext, useState } from "react";

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
        setUser,
        userData,
        setUserData,
    };

    return (<UserContext.Provider value={value}>
        {children}</UserContext.Provider>)
};
