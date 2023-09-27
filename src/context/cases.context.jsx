import { createContext, useState } from "react";

export const CasesContext = createContext({
    cases: [],
});

export const CasesContextProvider = ({ children }) => {
    const [cases, setCases] = useState([]);

    const value = {
        cases,
        setCases,
    };

    return (<CasesContext.Provider value={value}>
        {children}</CasesContext.Provider>)
};
