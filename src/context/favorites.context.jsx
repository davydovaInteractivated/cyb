import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    favorites: [],
});

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const value = {
        favorites,
        setFavorites,
    };

    return (<FavoritesContext.Provider value={value}>
        {children}</FavoritesContext.Provider>)
};
