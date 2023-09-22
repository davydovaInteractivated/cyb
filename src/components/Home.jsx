import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';

/** Styles */
import '../styles/_base.scss';
import '../styles/_animations.scss';

/** Components */
import Header from './base/Header';
import Aside from './base/Aside';

import { SettingsContext } from '../context/settings.context';

const HomeWrapperStyled = styled.div`
  padding: 4em;
  background: var(--color-dark);
  background: -webkit-linear-gradient(to right, var(--color-light), var(--color-dark));
  background: linear-gradient(to right, var(--color-light), var(--color-dark));

  --color-light: ${({ $theme }) => $theme?.colors?.light || 'inherit'};
  --color-dark: ${({ $theme }) => $theme?.colors?.dark || 'inherit'};
  --main-font: ${({ $theme }) => $theme?.colors?.font || 'inherit'};
  --main-font-inverted: ${({ $theme }) => $theme?.colors?.fontInverted || 'inherit'};
`;

const Home = () => {
  console.log('Home render');

  const {
    themes,
    activeTheme,
  } = useContext(SettingsContext);

  return (
    <div className="home">
      <HomeWrapperStyled
        className="flex f-col"
        $themes={themes}
        $theme={activeTheme}
      >
        <Header />

        <div className="flex justify-space-b">
          <Aside />
          <Outlet />
        </div>
      </HomeWrapperStyled>
    </div>
  );
}

export default Home;
