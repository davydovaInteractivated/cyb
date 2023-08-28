const CustomButton = ({ text = 'more', type = 'button', onClick }) => {
    return (
        <button
            className="custom--button"
            type={type}
            onClick={onClick}
        >{text}</button>
    );
}

export default CustomButton;
