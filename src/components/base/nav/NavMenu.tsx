import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { withTranslation } from 'react-i18next';

/** Contexts */
import { OverlayContext } from "../../../context/overlay.context";
import { SidebarContext } from "../../../context/sidebar.context";

/** Styles */
import '../../../styles/nav.scss';

const NavMenu = ({ t, className = '' }: { t: any, className?: string }) => {
    const { show: sidebarShow, setShow: setSidebarShow } = useContext(SidebarContext);
    const { show: overlayShow, setShow: setOverlayShow } = useContext(OverlayContext);
    /**
     * Close Sidebar
     */
    const closeSidebar = () => {
        if (sidebarShow) setSidebarShow(false);
        if (overlayShow) setOverlayShow(false);
    };

    return (
        <nav className={`nav nav--menu ${className}`}>
            <ul className="nav__list flex">
                <li className="nav__list-item">
                    <NavLink
                        to='/contacts'
                        className={({ isActive }) => isActive ? "active" : ""}
                        onClick={closeSidebar}
                    >{t('menu.contacts')}</NavLink></li>
                <li className="nav__list-item">
                    <NavLink
                        to='/faq'
                        className={({ isActive }) => isActive ? "active" : ""}
                        onClick={closeSidebar}
                    >{t('menu.faq')}</NavLink></li>
                <li className="nav__list-item">
                    <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? "active" : ""}
                        onClick={closeSidebar}
                    >{t('menu.services')}</NavLink></li>
            </ul>
        </nav>
    );
};

const NavMenuTranslated = withTranslation('common')(NavMenu)
export default NavMenuTranslated;
