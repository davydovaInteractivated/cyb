import { PropsWithChildren, createContext, useState } from "react";

/** Types */
import { TService } from './services.context';

export const FavoritesContext = createContext({
    favorites: [] as TService[],
});

export const FavoritesContextProvider = ({ children }: PropsWithChildren) => {
    const [favorites, setFavorites] = useState([]);

    const value = {
        favorites,
        setFavorites,
    };

    return (<FavoritesContext.Provider value={value}>
        {children}</FavoritesContext.Provider>)
};
