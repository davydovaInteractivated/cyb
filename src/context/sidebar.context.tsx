import { createContext, PropsWithChildren, useState } from "react";

interface ISidebarContextProps {
    show: boolean,
    setShow: (value: boolean) => void,
};

export const SidebarContext = createContext<ISidebarContextProps>({
    show: false,
    setShow: () => {},
});

export const SidebarContextProvider = ({ children }: PropsWithChildren) => {
    const [show, setShow] = useState<boolean>(false);

    const value = {
        show,
        setShow,
    };

    return (<SidebarContext.Provider value={value}>
        {children}</SidebarContext.Provider>)
};
