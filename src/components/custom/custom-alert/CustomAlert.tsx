import React, { useEffect, useContext } from 'react';

/** Styled-components */
import { CustomAlertStyled } from './CustomAlert.styled';

/** Contexts */
import { AlertContext } from '../../../context/alert.context';

/** Icons */
import {
  InformationCircleIcon, // info
  ExclamationCircleIcon, // warning
  XCircleIcon, // error
  CheckCircleIcon, // success
} from '@heroicons/react/24/solid';

/** Types */
import { ICustomAlertProps } from './CustomAlert.types';

const CustomAlert = ({
  type = 'info',
  title = '',
  message = 'custom alert',
  hideDelay = '4000', // (ms)
  show = false,
  top = false,
  left = false,
  right = true,
  bottom = true,
}: ICustomAlertProps) => {
  const { setShow } = useContext(AlertContext);

  useEffect(() => {
    if (!setShow) return;

    setShow(show);

    if (show && hideDelay) {
      setTimeout(() => {
        setShow(false);
      }, +hideDelay);
    }
  }, [show, setShow, hideDelay]);

  return (
    <CustomAlertStyled
      className="custom--alert flex f-col gap"
      $type={type}
      $top={top}
      $left={left}
      $right={right}
      $bottom={bottom}
      $show={show}
    >
      <div className="flex gap align-center">
        {type === 'info' && <InformationCircleIcon className="custom--alert__icon" />}
        {type === 'error' && <XCircleIcon className="custom--alert__icon" />}
        {type === 'success' && <CheckCircleIcon className="custom--alert__icon" />}
        {type === 'warning' && <ExclamationCircleIcon className="custom--alert__icon" />}
        <h2 className="custom--alert__title"> {title || type}</h2>
      </div>
      <p className="custom--alert__message">{message}</p>
    </CustomAlertStyled>
  );
};

export default CustomAlert;
