import { useEffect, useState } from 'react';

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

    hideAlert,
}) => {
    const [positionsClasses, setPositionsClasses] = useState('');
    const [showAlert, setShowAlert] = useState(show);

    useEffect(() => {
        const positionsClasses = [];

        if (top) positionsClasses.push('top');
        if (left) positionsClasses.push('left');
        if (right) positionsClasses.push('right');
        if (bottom) positionsClasses.push('bottom');

        setPositionsClasses(positionsClasses.join(' '));
    }, [top, left, right, bottom]);

    useEffect(() => {
        setShowAlert(show);

        if (show && hideDelay) {
            setTimeout(() => {
                hideAlert();
                setShowAlert(false);
            }, +hideDelay);
        }
    }, [show, hideAlert]);

    return showAlert && (
        <div
            className={`custom--alert ${CUSTOM_ALERT_CLASSES_BY_TYPES[type]} ${positionsClasses} ${showAlert ? 'show' : 'hide'} flex f-col gap`}
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
