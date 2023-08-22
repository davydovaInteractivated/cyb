const CustomInput = ({ onChange }) => {
    return (
        <input
            className="custom--input"
            type="search"
            placeholder="search"
            onChange={onChange}
        />
    );
}

export default CustomInput;
