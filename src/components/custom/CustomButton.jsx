const CustomButton = ({
    text = 'more',
    type = 'button',
    disabled = false,
    small = false,
    large = false,
    onClick,
}) => {
    const getSizeClass = () => {
        if (small) return 'small';
        if (large) return 'large';
        return 'medium';
    };

    return (
        <button
            className={`custom--button ${getSizeClass()}`}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >{text}</button>
    );
}

export default CustomButton;
