import React, { useState, useEffect } from 'react';

/** Components */
import CustomInput from '../custom-input/CustomInput';

/** Types */
import { TCustomItem, TCustomValue } from '../../../ts/types/custom';
import { ICustomSelectProps } from './CustomSelect.types';

/** Styled-components */
import {
  CustomSelectOptionsListItemStyled,
  CustomSelectOptionsListStyled,
  CustomSelectOptionsStyled,
  CustomSelectStyled,
} from './CustomSelect.styled';

const CustomSelect = ({
  value = '',
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
}: ICustomSelectProps) => {
  const [selectItems, setSelectItems] = useState<TCustomItem[]>(items);
  const [selectValue, setSelectValue] = useState<TCustomValue>('');
  const [selectOption, setSelectOption] = useState<TCustomItem | null>(null);
  const [showOptions, setShowOptions] = useState<boolean>(false);

  useEffect(() => {
    if (value) setSelectValue(value);
  }, [value]);

  /**
   * On Custom Input Change Handler
   * @param {MouseEvent} e Event
   */
  const onChangeHandler = (e: { target: { value: string } }) => {
    setSelectValue(e.target.value);

    if (!e.target.value) setSelectOption(null);

    const newItems = items.filter((item) => item[name].includes(e.target.value));

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
  const clickOption = (optionId: string | number) => {
    const option: TCustomItem | undefined = items.find((item) => item[valueKey] === optionId);

    if (!option) return;

    setSelectOption(option);
    setSelectValue(option[name]);

    onChange(returnObject ? option : option[name]);
  };

  return (
    <CustomSelectStyled className={`custom--select ${className}`} $size={size}>
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

      {showOptions && (
        <CustomSelectOptionsStyled className="custom--select__options w-100">
          <CustomSelectOptionsListStyled className="custom--select__options-list">
            {selectItems.length ? (
              selectItems.map((item) => (
                <CustomSelectOptionsListItemStyled
                  className={`custom--select__options-list_item ${selectOption?.[valueKey] === item[valueKey] ? 'active' : ''}`}
                  key={item[valueKey]}
                  onClick={() => clickOption(item[valueKey])}
                >
                  {item[name]}
                </CustomSelectOptionsListItemStyled>
              ))
            ) : (
              <CustomSelectOptionsListItemStyled className="custom--select__options-list_item empty text-center">
                no items for select
              </CustomSelectOptionsListItemStyled>
            )}
          </CustomSelectOptionsListStyled>
        </CustomSelectOptionsStyled>
      )}
    </CustomSelectStyled>
  );
};

export default CustomSelect;
