import styled from 'styled-components';

const CustomAvatarStyled = styled.div`
    height: 3em;
    width: 3em;
    background: var(--color-light);
    border-radius: var(--main-border-radius);
    opacity: .8;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(({ $inverted }) => $inverted ? 'var(--main-font-inverted)' : 'var(--main-font')};
`;

const CustomAvatar = ({
    className = '',
    inverted = true,
    name = '', // user.displayName
    email = '', // user.email
}) => {
    return (
        <CustomAvatarStyled
            className={`custom--avatar ${className}`}
            $inverted={inverted}
        >{
            name
                ? name.substr(0, 2).toUpperCase()
                : email.substr(0, 2).toUpperCase()
        }</CustomAvatarStyled>
    );
};

export default CustomAvatar;
