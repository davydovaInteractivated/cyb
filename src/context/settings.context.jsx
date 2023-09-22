import { createContext, useState } from "react";

/** Api */
import { themes } from '../api/themes';
import { langs } from '../api/lang';

export const SettingsContext = createContext({
    themes,
    langs,
    theme: themes.transfile,
    lang: 'en',
});

export const SettingsContextProvider = ({ children }) => {
    const [isShowSettings, setIsShowSettings] = useState(false);
    const [activeTheme, setActiveTheme] = useState(themes.transfile);
    const [activeLang, setActiveLang] = useState('en');

    /**
     * Show Settings popup
     */
    const showSettings = () => {
        const newIsShowSettings = !isShowSettings;
        setIsShowSettings(newIsShowSettings);
    };

    // interface ITheme = {
    //     colors: {
    //         light: string,
    //         dark: string,
    //         font: string,
    //         fontInverted: string,
    //     },
    //     name: string,
    // };

    /**
     * Select Main app. Theme
     * @param {*} param0
     */
    const selectTheme = (theme) => setActiveTheme(theme);

    /**
     * Select Main app. Language
     * @param {*} param0 
     */
    const selectLang = ({ name }) => {
        setActiveLang(name);
    };

    const value = {
        themes,
        langs,
        isShowSettings,
        activeTheme,
        activeLang,
        selectLang,
        selectTheme,
        showSettings,
    };

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};
