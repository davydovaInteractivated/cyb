import { PropsWithChildren, MouseEventHandler } from 'react';
import styled from 'styled-components';

/** Types */
import { TCustomSize } from '../../../ts/types/custom';

interface IStyledCustomButtonProps {
    $filled: boolean,
    $inverted: boolean,
    $disabled: boolean,
    $icon: boolean,
    $size: TCustomSize,
};

const StyledCustomButton = styled.button<IStyledCustomButtonProps>`
    width: fit-content;
    background: ${({
        $filled,
        $disabled,
        $icon,
    }) => {
        if ($icon) return 'unset';
        if ($disabled) return '#acacac';
        if ($filled) return 'var(--color-light)';
        return 'transparent';
    }};
    font-size: ${({
        $size,
    }) => {
        if ($size === 'small') return '0.808rem';
        if ($size === 'large') return '1.12rem';
        return '1rem';
    }};
    border: ${(({
        $disabled,
        $icon,
    }) => {
        if ($icon) return 'unset';
        if ($disabled) return '1px solid #7f7f7f';
        return '1px solid var(--color-light)';
    })};
    border-radius: var(--main-border-radius);
    padding: ${(({ $icon }) => $icon ? '0' : '1em 2em')};
    line-height: ${(({ $icon }) => $icon ? '1' : '1.5')};
    cursor: ${(({ $disabled }) => $disabled ? 'default' : 'pointer')};
    transition: all .5s ease;
    opacity: ${(({ $disabled }) => $disabled ? '0.4' : '1')};

    color: ${(({ $disabled, $inverted }) => {
        if ($disabled) return '#7f7f7f';
        if ($inverted) return 'var(--main-font-inverted)';
        return 'var(--main-font)';
    })};

    &:hover {
        transform: ${(({
            $icon,
            $disabled,
        }) => ($icon || $disabled ? 'unset' : 'translateX(10px)'))};
        opacity: ${(({ $disabled, $icon }) => {
            if ($disabled && $icon) return '1';
            if (!$disabled && $icon) return '.6';
            if ($disabled && !$icon) return '.4';
            return '.9';
        })};
    }

    & svg {
        height: ${({$size}) => {
            if ($size === 'small') return '18px';
            if ($size === 'large') return '28px';
            return '24px';
        }};
    }

    &.active svg {
        fill: var(--color-light);
    }
`;

interface ICustomButtonProps {
    size?: TCustomSize,
    disabled?: boolean,
    filled?: boolean,
    inverted?: boolean,
    icon?: boolean,
    className?: string,
    type?: 'button' | 'submit' | 'reset',
    onClick?: MouseEventHandler<HTMLButtonElement>,
};

const CustomButton = ({
    className = '',
    type = 'button',
    size = 'medium',
    disabled = false,
    filled = false,
    inverted = false,
    icon = false,
    children = 'more',
    onClick,
}: PropsWithChildren<ICustomButtonProps>) => (
     <StyledCustomButton
        className={`custom--button ${className}`}
        $size={size}
        $filled={filled}
        $inverted={inverted}
        $disabled={disabled}
        $icon={icon}
        type={type}
        disabled={disabled}
        onClick={onClick}
    >{children}</StyledCustomButton>
);

export default CustomButton;
