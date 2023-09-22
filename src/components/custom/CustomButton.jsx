import styled from 'styled-components';

const StyledCustomButton = styled.button`
    background: ${({
        $filled,
    }) => {
        if ($filled) return 'var(--color-light)';
        return 'transparent';
    }};
    font-size: ${({
        $small,
        $large,
    }) => {
        if ($small) return '0.808rem';
        if ($large) return '1.12rem';
        return 'inherit';
    }};
    border: 1px solid var(--color-light);
    border-radius: var(--main-border-radius);
    padding: 1em 2em;
    cursor: pointer;
    transition: all .5s ease;

    &:hover {
        transform: translateX(10px);
        opacity: .9;
    }
`;

const CustomButton = ({
    type = 'button',
    disabled = false,
    small = false,
    large = false,
    filled = false,
    children = 'more',
    onClick,
}) => (
     <StyledCustomButton
        $small={small}
        $large={large}
        $filled={filled}
        type={type}
        disabled={disabled}
        onClick={onClick}
    >{children}</StyledCustomButton>
);

export default CustomButton;
