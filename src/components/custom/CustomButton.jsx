const CustomButton = ({ text, onClick }) => {
    return (
        <button
            className="custom--button"
            type="button"
            onClick={onClick}
        >{text}</button>
    );
}

export default CustomButton;
