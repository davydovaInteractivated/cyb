import { Outlet } from 'react-router-dom';
import { useState } from 'react';

/** Styles */
import '../styles/_base.scss';
import '../styles/_custom.scss';
import '../styles/app.scss';

/** Components */
import Header from './base/Header';
import Aside from './base/Aside';

const Home = () => {
  console.log('Home render');

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

  return (
    <div className="app">
      <div className="app--wrapper flex f-col">
        <Header />

        <div className="flex justify-space-b">
          <Aside
            isShowSettings ={isShowSettings}
            activeTheme={activeTheme}
            activeLang={activeLang}
            showSettings={showSettings}
            selectTheme={selectTheme}
            selectLang={selectLang}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
