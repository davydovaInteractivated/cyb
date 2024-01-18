import styled from 'styled-components';

/** Icons */
import { CheckIcon } from '@heroicons/react/24/solid';

/** Types */
import { TTheme } from '../../../context/settings.context';

const SettingStyled = styled.span`
    padding: 0.4em 0 0.4em 1em;
    font-size: .8rem;
    cursor: pointer;
    user-select: none;
    transition: opacity .2s ease;

    & .icons__icon {
        height: 24px;
        bottom: 80px;

        &.active {
            fill: var(--color-light);
        }

        &.none {
            width: 0!important;
        }

        &.check-icon {
            width: 1.2em;
            margin-right: 0.2em;
        }
    }

    &:hover {
        opacity: .6;
    }
`;

const SettingColorStyled = styled.span`
    display: inline-block;
    width: 1em;
    height: 1em;
    border-radius: var(--main-border-radius);
    margin-left: .28em;
    border: var(--color-light) solid 1px;
`;

interface ISettingsProps{
    item: TSettingsPropsItem,
    activeItem: string | null,
    inverted?: boolean,
    selectItem: (item: TSettingsPropsItem) => void,
};

export type TSettingsPropsItem = {
    name: string,
    colors?: TTheme['colors'],
};

const Setting = ({ item, activeItem, selectItem }: ISettingsProps) => {
    const { colors, name } = item;
    const { light, dark } = colors || {};
    const itemLabel = name.replace('_', ' ');

    return (
        <SettingStyled
            className='setting flex align-center'
            onClick={() => selectItem(item)}
        >
            <CheckIcon
                className={ activeItem === name ? 'icons__icon check-icon' : 'icons__icon none' }
            />
            <span>{itemLabel}</span>
            { colors ?
                <SettingColorStyled
                    className='setting--color'
                    style={{ background: `linear-gradient(90deg, ${light}, ${dark})` }}
            ></SettingColorStyled> : <span></span> }
        </SettingStyled>
    );
}

export default Setting;
