import styled from 'styled-components';

const StyledCustomButton = styled.button`
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
    cursor: ${(({ $disabled }) => $disabled ? 'default' : 'pointer')};
    transition: all .5s ease;
    opacity: ${(({ $disabled }) => $disabled ? '0.4' : '1')};

    color: ${(({ $disabled }) => $disabled ? '#7f7f7f' : 'var(--main-font)')};

    &:hover {
        transform: ${(({
            $icon,
            $disabled,
        }) => ($icon || $disabled ? 'unset' : 'translateX(10px)'))};
        opacity: ${(({ $disabled }) => $disabled ? '.4' : '.9')};
    }

    &__icon {
        &:hover {
            opacity: ${(({ $disabled }) => $disabled ? '1' : '.6')};
        }

        &.active svg {
            fill: var(--color-light);
        }
    }
`;

const CustomButton = ({
    className = '',
    type = 'button',
    size = 'medium',
    disabled = false,
    filled = false,
    icon = false,
    children = 'more',
    onClick,
}) => (
     <StyledCustomButton
        className={`custom--button ${className}`}
        $size={size}
        $filled={filled}
        $type={type}
        $disabled={disabled}
        $icon={icon}
        $onClick={onClick}
    >{children}</StyledCustomButton>
);

export default CustomButton;
