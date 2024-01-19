import { Outlet } from 'react-router-dom';
import React, { useContext } from 'react';

/** Contexts */
import { AlertContext } from '../context/alert.context';

/** Styles */
import '../styles/_reset.scss';
import '../styles/_base.scss';
import '../styles/_animations.scss';
import '../styles/_media.scss';
import '../styles/app.scss';

/** Components */
import CustomAlert from './custom/custom-alert/CustomAlert';
import Header from './base/Header';
import Aside from './base/Aside';
import Sidebar from './base/Sidebar';
import CustomOverlay from './custom/custom-overlay/CustomOverlay';

const Home = () => {
  const { show, type, message } = useContext(AlertContext);

  return (
    <div className="app">
      <div className="app--wrapper flex f-col">
        <CustomOverlay />

        <Header />

        <div className="flex justify-space-b">
          <Aside />
          <Outlet />
        </div>

        <CustomAlert show={show} type={type} message={message} />

        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Home;
