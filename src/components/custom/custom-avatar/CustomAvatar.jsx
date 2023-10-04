import './custom-avatar.scss';

const CustomAvatar = ({
    className = '',
    inverted = true,
    name = '', // user.displayName
    email = '', // user.email
}) => {
    return (
        <div className={`custom--avatar ${className} font-inverted ${inverted ? 'custom--avatar__inverted' : ''}`}>{
            name
                ? name.substr(0, 2).toUpperCase()
                : email.substr(0, 2).toUpperCase()
        }</div>
    );
};

export default CustomAvatar;
