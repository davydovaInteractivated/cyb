import './custom-button.scss';

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
     <button
        className={
            `custom--button custom--button__${size} 
            ${className} 
            ${icon ? 'custom--button__icon' : ''} 
            ${filled ? 'custom--button__filled' : ''} 
            ${disabled ? 'custom--button__disabled' : ''}`}
        type={type}
        disabled={disabled}
        onClick={onClick}
    >{children}</button>
);

export default CustomButton;
