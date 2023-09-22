import { useEffect, useState } from 'react';
import styled from 'styled-components';

/** Icons */
import {
    InformationCircleIcon, // info
    ExclamationCircleIcon, // warning
    XCircleIcon, // error
    CheckCircleIcon, // success
} from '@heroicons/react/24/solid';

const CustomAlertStyled = styled.div`
    position: fixed;
    width: 22em;
    height: fit-content;
    cursor: pointer;
    border-radius: var(--main-border-radius);
    padding: 1em;
    box-shadow: 12px 14px 20px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    background: ${({$type}) => {
        if ($type === 'success') return '#4CAF50';
        if ($type === 'error') return '#BF360C';
        if ($type === 'warning') return '#FFB74D';
        if ($type === 'info') return '#424242';
        return 'none';
    }};

    color: ${({$type}) => {
        if ($type === 'success' || $type === 'warning') return '#212121!important';
        return 'inherit';
    }};

    top: ${({$top}) => $top ? '1em!important' : 'unset'};
    bottom: ${({$bottom}) => $bottom ? '1em!important' : 'unset'};
    left: ${({$left}) => $left ? '1em!important' : 'unset'};
    right: ${({$right}) => $right ? '1em!important' : 'unset'};

    animation: ${({
        $right,
        $left,
        $hide,
        $show,
    }) => {
        if ($right && $show) return 'showAlertRight 0.4s forwards';
        if ($left && $show) return 'showAlertLeft 0.4s forwards';
        if ($right && $hide) return 'hideAlertRight 0.4s forwards';
        if ($left && $hide) return 'hideAlertLeft 0.4s forwards';
        return 'unset';
    }};

    &:hover {
        opacity: 1!important;
        box-shadow: none;
    }

    .custom--alert__icon {
        width: 24px;
    }
`;

const CustomAlert = ({
    type = 'info',
    title = '',
    message = 'custom alert',

    show = false,

    top = false,
    left = false,
    right = true,
    bottom = true,

    hideAlert,
}) => {
    const [showAlert, setShowAlert] = useState(show);

    useEffect(() => {
        setShowAlert(show);

        if (show) {
            setTimeout(() => {
                hideAlert();
                setShowAlert(false);
            }, 4000);
        }
    }, [show, hideAlert]);

    return showAlert && (
        <CustomAlertStyled
            className={'flex f-col gap'}
            $type={type}
            $top={top}
            $left={left}
            $right={right}
            $bottom={bottom}
            $show={showAlert}
            $hide={!showAlert}
        >
            <div className='flex gap align-center'>
                {type === 'info' && <InformationCircleIcon className='custom--alert__icon' />}
                {type === 'error' && <XCircleIcon className='custom--alert__icon' />}
                {type === 'success' && <CheckCircleIcon className='custom--alert__icon' />}
                {type === 'warning' && <ExclamationCircleIcon className='custom--alert__icon' />}
                <h2 className='custom--alert__title'> {title || type}</h2>
            </div>
            <p className='custom--alert__message'>{message}</p>
        </CustomAlertStyled>
    )
};

export default CustomAlert;
