const CustomButton = ({ text = 'more', type = 'button', disabled=false, onClick }) => {
    return (
        <button
            className="custom--button"
            type={type}
            disabled={disabled}
            onClick={onClick}
        >{text}</button>
    );
}

export default CustomButton;
