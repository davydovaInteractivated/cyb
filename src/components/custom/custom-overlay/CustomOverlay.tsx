import React, { Fragment, useContext } from 'react';

/** Components */
import Cube from '../../base/Cube';
/** Contexts */
import { OverlayContext } from '../../../context/overlay.context';
import { SidebarContext } from '../../../context/sidebar.context';

/** Styled-components */
import { CustomOverlayStyled } from './CustomOverlay.styled';

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
      {show && (
        <CustomOverlayStyled className="overlay flex align-center justify-center" onClick={close}>
          {type === 'loader' && (
            <div className="flex f-col align-center justify-center">
              <Cube animationType="linear" speed="fast" size="small" type={type} />
              <div className="flex">
                <Cube animationType="linear" speed="fast" size="small" type={type} />
                <Cube animationType="linear" speed="fast" size="small" type={type} />
              </div>
            </div>
          )}
        </CustomOverlayStyled>
      )}
    </Fragment>
  );
};

export default CustomOverlay;
