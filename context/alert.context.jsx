import { createContext, useState } from "react";

export const AlertContext = createContext({
    show: false,
    type: 'info',
    message: 'info message',
});

export const AlertContextProvider = ({ children }) => {
    const [show, setShow] = useState(false);
    const [type, setType] = useState('info');
    const [message, setMessage] = useState('info message');

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
