import { useState, useEffect } from "react";

/** Styles */
import './custom-select.scss';

/** Components */
import CustomInput from "../custom-input/CustomInput"

const CustomSelect = ({
    value = null,
    size = 'medium',
    placeholder = 'select',
    className,
    items = [],
    valueKey = 'id',
    name = 'name',
    returnObject = true,
    required = false,
    disabled = false,
    onChange,
}) => {
    const [selectItems, setSelectItems] = useState(items);
    const [selectValue, setSelectValue] = useState('');
    const [selectOption, setSelectOption] = useState(null);
    const [showOptions, setShowOptions] = useState(false);

    useEffect(() => {
        if (value) setSelectValue(value);
    }, [value]);

    /**
     * On Custom Input Change Handler
     * @param {MouseEvent} e Event
     */
    const onChangeHandler = (e) => {
        setSelectValue(e.target.value);

        if (!e.target.value) setSelectOption(null);

        const newItems = items
            .filter((item) => item.name.includes(e.target.value));

        setSelectItems(newItems);
    };

    /**
     * On Custom Input Focus Handler
     */
    const onFocusHandler = () => {
        if (disabled) return;

        setTimeout(() => {
            setShowOptions(true);
        }, 100);
    };

    /**
     * On Custom Input Blur Handler
     */
    const onBlurHandler = () => {
        if (disabled) return;

        setTimeout(() => {
            setShowOptions(false);
        }, 100);
    };

    /**
     * Click List Item
     * @param {number} optionId OptionId
     */
    const clickOption = (optionId) => {
        const option = items
            .find((item) => item.id === optionId);

        if (!option) return;

        setSelectOption(option);
        setSelectValue(option.name);

        onChange(returnObject ? option : option.name);
    };

    return (
        <div className={`custom--select ${className} custom--select__${size}`}>
            <CustomInput
                type="search"
                size={size}
                placeholder={placeholder}
                value={selectValue}
                required={required}
                disabled={disabled}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
            />

            {showOptions && <div className="custom--select__options w-100">
                <ul className="custom--select__options-list">
                    {selectItems.length ? selectItems.map((item) => <li
                        className={`custom--select__options-list_item ${selectOption?.id === item.id ? 'active' : ''}`}
                        key={item[valueKey]}
                        onClick={() => clickOption(item.id)}
                    >
                        {item[name]}
                    </li>) : <li className="custom--select__options-list_item empty text-center">no items for select</li>}
                </ul>
            </div>}
        </div>
    )
};

export default CustomSelect;
