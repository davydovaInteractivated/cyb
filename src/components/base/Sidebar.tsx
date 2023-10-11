import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

/** Styles */
import '../../styles/sidebar.scss';
/** Components */
import CustomButton from '../custom/custom-button/CustomButton';
import Logo from './logo/Logo';
import NavMenu from './nav/NavMenu';
import NavLinks from './nav/NavLinks';
import NavAuth from './nav/NavAuth';
import Settings from './Settings';
import StorybookLink from './links/StorybookLink';
/** Icons */
import { XMarkIcon } from '@heroicons/react/24/solid';
/** Contexts */
import { SidebarContext } from '../../context/sidebar.context';
import { OverlayContext } from '../../context/overlay.context';

const Sidebar = ({ t }: { t: any }) => {
    const { show, setShow } = useContext(SidebarContext);
    const { setShow: setOverlayShow } = useContext(OverlayContext);

    const closeSidebar = () => {
        setShow(false);
        setOverlayShow(false);
    };

    return (
        <div
            className={show ? 'sidebar sidebar--visible' : 'sidebar sidebar--hidden'}
        >
            <div className="sidebar--inner">
                <div className='sidebar--header flex w-100 align-center justify-space-b'>
                    <CustomButton
                        icon
                        onClick={closeSidebar}
                    >
                        <XMarkIcon className='case--delete__icon' />
                    </CustomButton>
                    <Link to='/'><Logo>{t('logo')}</Logo></Link>
                </div>
                <div className='sidebar--content grid gap-2'>
                    <NavAuth className='nav__right justify-self-end' />
                    <NavMenu className='nav__right justify-self-end' />
                    <NavLinks className='nav__right justify-self-end' />
                    <Settings align='end' className='grid gap justify-items-end' />
                    <StorybookLink />
                </div>
            </div>
        </div>
    )
};

const SidebarTranslated = withTranslation('common')(Sidebar);
export default SidebarTranslated;
