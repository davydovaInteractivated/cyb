/** Icons */
import { CheckIcon } from '@heroicons/react/24/solid';

/** Styles */
import './aside-settings.scss';

const AsideSetting = ({ item, activeItem, selectItem }) => {
    const { colors, name } = item;
    const { light, dark } = colors || {};
    const itemLabel = name.replace('_', ' ');

    return (
        <span
            className='aside--settings__item flex align-center'
            onClick={() => selectItem(item)}
        >
            <CheckIcon
                className={ activeItem === name ? 'aside--icons__icon check-icon' : 'aside--icons__icon none' }
            />
            <span>{itemLabel}</span>
            { colors ?
                <span
                    className='aside--settings__item-color'
                    style={{ background: `linear-gradient(90deg, ${light}, ${dark})` }}
            ></span> : <span></span> }
        </span>
    );
}

export default AsideSetting;
