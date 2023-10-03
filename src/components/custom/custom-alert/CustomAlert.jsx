import { useEffect, useState, useContext } from 'react';

/** Contexts */
import { AlertContext } from '../../../context/alert.context';

/** Styles */
import './custom-alert.scss';

/** Constants */
import { CUSTOM_ALERT_CLASSES_BY_TYPES } from '../../../constants/custom';

/** Icons */
import {
    InformationCircleIcon, // info
    ExclamationCircleIcon, // warning
    XCircleIcon, // error
    CheckCircleIcon, // success
} from '@heroicons/react/24/solid';

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
}) => {
    const [positionsClasses, setPositionsClasses] = useState('');

    const {
        setShow,
    } = useContext(AlertContext);

    useEffect(() => {
        const positionsClasses = [];

        if (top) positionsClasses.push('top');
        if (left) positionsClasses.push('left');
        if (right) positionsClasses.push('right');
        if (bottom) positionsClasses.push('bottom');

        setPositionsClasses(positionsClasses.join(' '));
    }, [top, left, right, bottom]);

    useEffect(() => {
        if (!setShow) return;

        setShow(show);

        if (show && hideDelay) {
            setTimeout(() => {
                setShow(false);
            }, +hideDelay);
        }
    }, [show, setShow, hideDelay]);

    return show && (
        <div
            className={`custom--alert ${CUSTOM_ALERT_CLASSES_BY_TYPES[type]} ${positionsClasses} ${show ? 'show' : 'hide'} flex f-col gap`}
        >
            <div className='flex gap align-center'>
                {type === 'info' && <InformationCircleIcon className='custom--alert__icon' />}
                {type === 'error' && <XCircleIcon className='custom--alert__icon' />}
                {type === 'success' && <CheckCircleIcon className='custom--alert__icon' />}
                {type === 'warning' && <ExclamationCircleIcon className='custom--alert__icon' />}
                <h2 className='custom--alert__title'> {title || type}</h2>
            </div>
            <p className='custom--alert__message'>{message}</p>
        </div>
    )
};

export default CustomAlert;
