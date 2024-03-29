import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { signOutUser } from '../../../utils/firebase';

/** Components */
import CustomAvatar from '../../custom/custom-avatar/CustomAvatar';
import CustomButton from '../../custom/custom-button/CustomButton';

/** Contexts */
import { UserContext } from '../../../context/user.context';
import { SidebarContext } from '../../../context/sidebar.context';
import { OverlayContext } from '../../../context/overlay.context';

const NavAuth = ({ t, className = '' }: { t: any; className?: string }) => {
  const user = useContext(UserContext);

  /**
   * Handler Sign Out
   */
  const handlerSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error(error);
    }
  };

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
    <nav className={`nav nav--auth ${className}`}>
      <ul className="nav__list flex align-center">
        {user ? (
          <li className="nav__list-item">
            <CustomButton size="small" onClick={handlerSignOut}>
              {t('signOut')}
            </CustomButton>
          </li>
        ) : (
          <li className="nav__list-item">
            <NavLink to="/auth">
              <CustomButton size="small" onClick={closeSidebar}>
                {t('auth')}
              </CustomButton>
            </NavLink>
          </li>
        )}
        {user && (
          <li className="nav__list-item right cursor-default">
            <CustomAvatar inverted name={user.displayName} email={user.email} />
          </li>
        )}
      </ul>
    </nav>
  );
};

const NavAuthTranslated = withTranslation('common')(NavAuth);
export default NavAuthTranslated;
