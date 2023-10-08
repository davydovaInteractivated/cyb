import { PropsWithChildren } from "react";
import { createContext, useState } from "react";

/** Api */
import { themes } from '../api/themes';
import { langs } from '../api/lang';

/** Types */
import { TAsideSettingsPropsItem } from '../components/aside/aside-settings/AsideSetting';

export type TThemes = typeof themes[number]['name'];
export type TLangs = typeof langs[number]['name'];

export type TTheme = {
    name: TThemes,
    colors: {
        light: string,
        dark: string,
        font: string,
        fontInverted: string,
    },
};
export type TLang = {
    name: TLangs,
};

interface ISettingsContextProps {
    themes: TTheme[],
    langs: TLang[],
    isShowSettings: boolean,
    activeTheme: TThemes | null,
    activeLang: TLangs | null,
    selectLang: (lang: TAsideSettingsPropsItem) => void,
    selectTheme: (theme: TAsideSettingsPropsItem) => void,
    showSettings: (value: boolean) => void,
};

export const SettingsContext = createContext<ISettingsContextProps>({
    themes: themes,
    langs: langs,
    isShowSettings: false,
    activeTheme: null,
    activeLang: null,
    selectLang: () => {},
    selectTheme: () => {},
    showSettings: () => {},
});

export const SettingsContextProvider = ({ children }: PropsWithChildren) => {
    const [isShowSettings, setIsShowSettings] = useState(false);
    const [activeTheme, setActiveTheme] = useState<TThemes>('transfile');
    const [activeLang, setActiveLang] = useState<TLangs>('en');

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
    const selectTheme = (item: TAsideSettingsPropsItem) => {
        const body = document.getElementsByTagName('body')[0];
        if (!body) return;

        const { colors, name } = item;

        const {
            light, dark, font, fontInverted,
        } = colors || {};

        body.style.setProperty('--color-light', light || '');
        body.style.setProperty('--color-dark', dark || '');
        body.style.setProperty('--main-font', font || '');
        body.style.setProperty('--main-font-inverted', fontInverted || '');

        setActiveTheme(name);
    };

    /**
     * Select Main app. Language
     * @param {*} param0 
     */
    const selectLang = ({ name }: { name: TLangs }) => {
        setActiveLang(name);
    };

    const value: ISettingsContextProps = {
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
