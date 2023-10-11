import { useContext } from 'react';
/** Contexts */
import { SidebarContext } from "../../../context/sidebar.context";
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

    /**
     * Open Sidebar
     */
    const openSidebar = () => {
        setShow(!show);
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
