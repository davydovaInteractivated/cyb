import { useContext } from 'react';
/** Contexts */
import { SidebarContext } from "../../../context/sidebar.context";
import { OverlayContext } from '../../../context/overlay.context';
/** Icons */
import {
    Bars3Icon,
} from '@heroicons/react/24/solid';

/** Components */
import CustomButton from '../../custom/custom-button/CustomButton';

const BurgerLink = () => {
    const {
        show,
        setShow,
    } = useContext(SidebarContext);
    const {
        show: overlayShow,
        setShow: setOverlayShow,
    } = useContext(OverlayContext);

    /**
     * Open Sidebar
     */
    const openSidebar = () => {
        setShow(!show);
        setOverlayShow(!overlayShow);
    };

    return (
        <div className="header--burger">
            <CustomButton
                className={false ? 'active' : ''}
                icon
                onClick={openSidebar}
            >
                <Bars3Icon className='icons__icon active' />
            </CustomButton>
        </div>
    );
};

export default BurgerLink;
