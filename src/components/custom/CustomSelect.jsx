import { useState } from "react";
import styled from 'styled-components';

/** Components */
import CustomInput from "./CustomInput"

const CustomSelectStyled = styled.div`
    position: relative;
`;

const CustomSelectOptionsStyled = styled.div`
    position: absolute;
    z-index: 999;
`;

const CustomSelectOptionsListStyled = styled.ul`
    background-color: var(--color-dark);
    box-shadow: 12px 14px 20px 0px rgba(0, 0, 0, 0.2);
    padding: .6em 0;
    border-radius: var(--main-border-radius);
    margin-top: 0.6em;
    transition: all .2s ease;
`;

const CustomSelectOptionsListItemStyled = styled.li`
    padding: .4em 1em;
    cursor: pointer;
    transition: background-color .2s ease;

    &:hover:not(.empty) {
        background-color: rgba(255, 255, 255, 0.2);
    }

    &.active {
        background-color: rgba(255, 255, 255, 0.2);
    }

    &.empty {
        cursor: default;
        font-size: .8rem;
    }

    &:hover > ${CustomSelectOptionsListStyled} {
        background-color: pink;
    }
`;

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
        <CustomSelectStyled className={`custom--select ${className}`}>
            <CustomInput
                type="search"
                placeholder={placeholder}
                value={selectValue}
                onChange={onChangeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
            />

            {showOptions && <CustomSelectOptionsStyled className="w-100">
                <CustomSelectOptionsListStyled>
                    {selectItems.length ? selectItems.map((item) => <CustomSelectOptionsListItemStyled
                        className={`${selectOption?.id === item.id ? 'active' : ''}`}
                        key={item[key]}
                        onClick={() => clickOption(item.id)}
                    >
                        {item[name]}
                    </CustomSelectOptionsListItemStyled>) : <CustomSelectOptionsListItemStyled className="empty text-center">no items for select</CustomSelectOptionsListItemStyled>}
                </CustomSelectOptionsListStyled>
            </CustomSelectOptionsStyled>}
        </CustomSelectStyled>
    )
};

export default CustomSelect;
