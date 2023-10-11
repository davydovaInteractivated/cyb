import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

/** Styles */
import '../../styles/header.scss'

/** Components */
import Logo from '../base/logo/Logo';
import NavMenu from './nav/NavMenu';
import NavLinks from './nav/NavLinks';
import NavAuth from './nav/NavAuth';
import BurgerLink from './links/BurgerLink';

const Header = ({ t }: { t: any }) => {
    console.log('Header render');

    return (
        <header className="header">
            <div className="header--wrapper flex justify-space-b align-center">
                <Link to='/'><Logo inverted>{t('logo')}</Logo></Link>

                <div className="flex align-center">
                    <NavMenu className='nav__left' />
                    <NavLinks className='nav__left' />
                    <NavAuth className='nav__left' />

                    <BurgerLink />
                </div>
            </div>
        </header>
    )
};

const HeaderTranslated = withTranslation('common')(Header)
export default HeaderTranslated;
