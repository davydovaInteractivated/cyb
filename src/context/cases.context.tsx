import React, { PropsWithChildren } from "react";
import { createContext, useState } from "react";

export type TCase = {
    title: string,
    data: {
        [key: string]: {
            name: string,
            cost: number,
        },
    }[],
};

interface ICasesContextProps {
    cases?: TCase[],
};

export const CasesContext = createContext({
    cases: [] as TCase[],
});

export const CasesContextProvider = ({ children }: PropsWithChildren<ICasesContextProps>) => {
    const [cases, setCases] = useState([] as TCase[]);

    const value = {
        cases,
        setCases,
    };

    return (<CasesContext.Provider value={value}>
        {children}</CasesContext.Provider>)
};
