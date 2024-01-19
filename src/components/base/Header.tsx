import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/** Styles */
import '../../styles/header.scss';

/** Components */
import Logo from '../base/logo/Logo';
import NavMenu from './nav/NavMenu';
import NavLinks from './nav/NavLinks';
import NavAuth from './nav/NavAuth';
import BurgerLink from './links/BurgerLink';
import Cube from './Cube';

const Header = ({ t }: { t: any }) => {
  return (
    <header className="header">
      <div className="header--wrapper flex justify-space-b align-center">
        <Cube showText className="header--cube" />

        <Link to="/">
          <Logo className="header--logo" inverted>
            {t('logo')}
          </Logo>
        </Link>

        <div className="header--nav flex align-center">
          <NavMenu className="nav__right" />
          <NavLinks className="nav__right" />
          <NavAuth className="nav__right" />
        </div>

        <BurgerLink />
      </div>
    </header>
  );
};

const HeaderTranslated = withTranslation('common')(Header);
export default HeaderTranslated;
