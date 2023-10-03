import { Outlet } from 'react-router-dom';

/** Styles */
import '../styles/_base.scss';
import '../styles/_animations.scss';
import '../styles/app.scss';

/** Components */
import Header from './base/Header';
import Aside from './base/Aside';

const Home = () => {
  console.log('Home render');

  return (
    <div className="app">
      <div className="app--wrapper flex f-col">
        <Header />

        <div className="flex justify-space-b">
          <Aside />
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
