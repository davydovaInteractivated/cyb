import { createContext, useState } from "react";

/** Api */
import { themes } from '../api/themes';
import { langs } from '../api/lang';

export const SettingsContext = createContext({
    themes,
    langs,
    theme: 'transfile',
    lang: 'en',
});

export const SettingsContextProvider = ({ children }) => {
    const [isShowSettings, setIsShowSettings] = useState(false);
    const [activeTheme, setActiveTheme] = useState('transfile');
    const [activeLang, setActiveLang] = useState('en');

    /**
     * Show Settings popup
     */
    const showSettings = () => {
        const newIsShowSettings = !isShowSettings;
        setIsShowSettings(newIsShowSettings);
    };

    /**
     * Select Main app. Theme
     * @param {*} param0
     */
    const selectTheme = ({ colors, name }) => {
        const [ body ] = document.getElementsByTagName('body');
        if (!body) return;

        const {
            light, dark, font, fontInverted,
        } = colors;

        body.style.setProperty('--color-light', light);
        body.style.setProperty('--color-dark', dark);
        body.style.setProperty('--main-font', font);
        body.style.setProperty('--main-font-inverted', fontInverted);

        setActiveTheme(name);
    };

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
