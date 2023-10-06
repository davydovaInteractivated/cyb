import React, { createContext, useState } from "react";

/** Types */
import { TCustomType } from '../ts/types/custom';

interface IAlertContextProps {
    show: boolean,
    type: TCustomType,
    message: string,
    setShow?: (value: boolean) => void,
    setType?: (value: TCustomType) => void,
    setMessage?: (value: string) => void,
};

export const AlertContext = createContext<IAlertContextProps>({
    show: false,
    type: 'info',
    message: 'info message',
});

export const AlertContextProvider = ({ children }) => {
    const [show, setShow] = useState<boolean>(false);
    const [type, setType] = useState<TCustomType>('info');
    const [message, setMessage] = useState<string>('info message');

    const value = {
        show,
        type,
        message,
        setShow,
        setType,
        setMessage,
    };

    return (<AlertContext.Provider value={value}>
        {children}</AlertContext.Provider>)
};
