import { useState } from "react";

/** Components */
import CustomInput from "./CustomInput"

const CustomSelect = ({
    placeholder = 'select',
    className,
    items = [],
    key = 'id',
    name = 'name',
}) => {
    const [selectItems, setSelectItems] = useState(items);
    const [selectValue, setSelectValue] = useState('');
    const [selectOption, setSelectOption] = useState(null);
    const [showOptions, setShowOptions] = useState(false);

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
        setTimeout(() => {
            setShowOptions(true);
        }, 100);
    };

    /**
     * On Custom Input Blur Handler
     */
    const onBlurHandler = () => {
        setTimeout(() => {
            setShowOptions(false);
        }, 300);
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
    };

    return (
        <div className={`custom--select ${className}`}>
            <CustomInput
                type="search"
                placeholder={placeholder}
                value={selectValue}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
            />

            {showOptions && <div className="custom--select__options w-100">
                <ul className="custom--select__options-list">
                    {selectItems.length ? selectItems.map((item) => <li
                        className={`custom--select__options-list_item ${selectOption?.id === item.id ? 'active' : ''}`}
                        key={item[key]}
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
