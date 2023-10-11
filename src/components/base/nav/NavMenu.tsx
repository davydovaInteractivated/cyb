import { NavLink } from "react-router-dom";
import { withTranslation } from 'react-i18next';

/** Styles */
import '../../../styles/nav.scss';

const NavMenu = ({ t, className = '' }: { t: any, className?: string }) => {
    return (
        <nav className={`nav nav--menu ${className}`}>
            <ul className="nav__list flex">
                <li className="nav__list-item">
                    <NavLink
                        to='/contacts'
                        className={({ isActive }) => isActive ? "active" : ""}
                    >{t('menu.contacts')}</NavLink></li>
                <li className="nav__list-item">
                    <NavLink
                        to='/faq'
                        className={({ isActive }) => isActive ? "active" : ""}
                    >{t('menu.faq')}</NavLink></li>
                <li className="nav__list-item">
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? "active" : ""}
                    >{t('menu.services')}</NavLink></li>
            </ul>
        </nav>
    );
};

const NavMenuTranslated = withTranslation('common')(NavMenu)
export default NavMenuTranslated;
