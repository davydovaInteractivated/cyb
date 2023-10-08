import { useEffect, useContext } from 'react';
import styled from 'styled-components';

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
import { TCustomType } from '../../../ts/types/custom';

interface ICustomAlertStyledProps {
    $type: TCustomType,
    $top: boolean,
    $bottom: boolean,
    $left: boolean,
    $right: boolean,
    $show: boolean,
};

const CustomAlertStyled = styled.div<ICustomAlertStyledProps>`
    position: fixed;
    width: 22em;
    opacity: .9;
    height: fit-content;
    cursor: pointer;
    border-radius: var(--main-border-radius);
    padding: 1em;
    box-shadow: 12px 14px 20px 0px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease;
    transition: box-shadow 0.3s ease;

    background: ${({$type}) => {
        if ($type === 'success') return '#4CAF50';
        if ($type === 'error') return '#BF360C';
        if ($type === 'warning') return '#FFB74D';
        if ($type === 'info') return '#424242';
        return 'none';
    }};

    color: ${({$type}) => {
        if ($type === 'warning') return '#212121';
        return 'inherit';
    }};

    top: ${({$top}) => $top ? '1em!important' : 'unset'};
    bottom: ${({$bottom}) => $bottom ? '1em!important' : 'unset'};
    left: ${({$left}) => $left ? '-28em' : 'unset'};
    right: ${({$right}) => $right ? '-28em' : 'unset'};

    animation: ${({
        $right,
        $left,
        $show,
    }) => {
        if ($right && $show) return 'showAlertRight .4s forwards';
        if ($left && $show) return 'showAlertLeft .4s forwards';
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

interface ICustomAlertProps {
    type: TCustomType,
    show: boolean,
    title?: string,
    message?: string,
    hideDelay?: number | string, // (ms)
    top?: boolean,
    left?: boolean,
    right?: boolean,
    bottom?: boolean,
};

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
    const {
        setShow,
    } = useContext(AlertContext);

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
            className='custom--alert flex f-col gap'
            $type={type}
            $top={top}
            $left={left}
            $right={right}
            $bottom={bottom}
            $show={show}
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
