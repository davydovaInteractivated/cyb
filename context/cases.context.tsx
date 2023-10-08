import { PropsWithChildren } from "react";
import { createContext, useState } from "react";

/** Api */
// import { servicesCases as servicesCasesData } from '../api/servicesCases';

/** Utils */
import {
    // addCollectionAndDocuments,
    getCollection,
} from "../utils/firebase";

export type TCaseDataKey = 'hours' | 'employees' | 'consult';

export type TCase = {
    title: string,
    data: TCaseData,
};

export type TServiceCase = {
    title: string,
    data: TServiceCaseData,
};

export type TCaseData = {
    [key in TCaseDataKey]: TCaseDataField;
};

export type TServiceCaseData = {
    [key in TCaseDataKey]: TCaseDataField[];
};

export type TCaseDataField = {
    value: string,
    cost: string,
};

interface ICasesContextProps {
    servicesCases: TServiceCase[],
    cases: TCase[],
    setCases: (data: TCase[]) => void,
    getServicesCases: () => void,
    getTotalCost: (data: TCase) => number,
};

export const CasesContext = createContext<ICasesContextProps>({
    servicesCases: [],
    cases: [],
    setCases: () => {},
    getServicesCases: () => {},
    getTotalCost: () => 0,
});

export const CasesContextProvider = ({ children }: PropsWithChildren) => {
    console.log('CasesContextProvider render');
    const [servicesCases, setServicesCases] = useState([] as TServiceCase[]);
    const [cases, setCases] = useState([] as TCase[]);

    /**
     * Get Total Cost
     */
    const getTotalCost = (currentCase: TCase) => Object.values(currentCase.data)
        .reduce((sum, el) => sum + +el.cost, 0) || 0;

    /**
     * Get Services Cases
     */
    const getServicesCases = async () => {
        const data = await getCollection('servicesCases');
        console.log('servicesCases data', data);

        setServicesCases(data as typeof data & TServiceCase[]);
    };
    
    // useEffect(() => {
    //     // addCollectionAndDocuments('servicesCases', servicesCasesData);
    //     // getServicesCases();
    // }, []);

    const value: ICasesContextProps = {
        servicesCases,
        cases,
        setCases,
        getServicesCases,
        getTotalCost,
    };

    return (<CasesContext.Provider value={value}>
        {children}</CasesContext.Provider>)
};
