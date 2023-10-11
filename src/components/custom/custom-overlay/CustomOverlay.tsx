import { Fragment, useContext } from 'react';
import styled from 'styled-components';

/** Components */
import Cube from '../../base/Cube';
/** Contexts */
import { OverlayContext } from '../../../context/overlay.context';
import { SidebarContext } from '../../../context/sidebar.context';

const CustomOverlayStyled = styled.div`
    background: rgba(0,0,0, 0.8);
    width: 100%;
    height: 100vh;
    position: fixed;
    opacity: 0;
    top: 0;
    left: 0;
    z-index: 999;
    animation: showOverlay .2s linear forwards;

    @keyframes showOverlay {
        from { opacity: 0 };
        to { opacity: 1 };
    }
`;

const CustomOverlay = ({ closeOnClick = true }: { closeOnClick?: boolean }) => {
    const { show, type, setShow } = useContext(OverlayContext);
    const { setShow: setSidebarShow } = useContext(SidebarContext);

    /**
     * Close on the Overlay click
     * @returns
     */
    const close = () => {
        if (!closeOnClick) return;

        setShow(false);
        setSidebarShow(false);
    };

    return (
        <Fragment>
            {show && <CustomOverlayStyled className='overlay flex align-center justify-center' onClick={close}>
                {type === 'loader' && <div className='flex f-col align-center justify-center'>
                    <Cube
                        animationType='linear'
                        speed='fast'
                        size='small'
                        type={type}
                    />
                    <div className='flex'>
                        <Cube
                            animationType='linear'
                            speed='fast'
                            size='small'
                            type={type}
                        />
                        <Cube
                            animationType='linear'
                            speed='fast'
                            size='small'
                            type={type}
                        />
                    </div>
                </div>}
            </CustomOverlayStyled>}
        </Fragment>
    );
};

export default CustomOverlay;
