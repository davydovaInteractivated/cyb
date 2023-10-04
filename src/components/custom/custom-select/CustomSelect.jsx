import { useState, useEffect } from "react";
import styled from 'styled-components';

/** Styles */
// import './custom-select.scss';

/** Components */
import CustomInput from "../custom-input/CustomInput"

const CustomSelectStyled = styled.div`
    position: relative;
    font-size: ${(({ $size }) => {
        if ($size === 'small') return '.808rem';
        if ($size === 'large') return '1.12rem';
        return '1rem'
    })};
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
    font-family: 'Poppins', sans-serif;
    padding: .4em 1em;
    cursor: pointer;
    color: var(--main-font);
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
        <CustomSelectStyled
            className={`custom--select ${className}`}
            $size={size}
        >
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

            {true && <CustomSelectOptionsStyled className="custom--select__options w-100">
                <CustomSelectOptionsListStyled className="custom--select__options-list">
                    {selectItems.length ? selectItems.map((item) => <CustomSelectOptionsListItemStyled
                        className={`custom--select__options-list_item ${selectOption?.id === item.id ? 'active' : ''}`}
                        key={item[valueKey]}
                        onClick={() => clickOption(item.id)}
                    >
                        {item[name]}
                    </CustomSelectOptionsListItemStyled>) : <CustomSelectOptionsListItemStyled className="custom--select__options-list_item empty text-center">no items for select</CustomSelectOptionsListItemStyled>}
                </CustomSelectOptionsListStyled>
            </CustomSelectOptionsStyled>}
        </CustomSelectStyled>
    )
};

export default CustomSelect;
