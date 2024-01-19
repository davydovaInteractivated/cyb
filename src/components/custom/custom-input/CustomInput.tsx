import React, { forwardRef } from 'react';

/** Styled-components */
import { CustomInputStyled } from './CustomInput.styled';

/** Types */
import { ICustomInputProps } from './CustomInput.types';

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(
  (
    {
      className = '',
      type = 'search',
      size = 'medium',
      placeholder = 'search',
      name = '',
      value = '',
      required = false,
      disabled = false,
      onChange,
      onFocus,
      onBlur,
    }: ICustomInputProps,
    ref
  ) => (
    <CustomInputStyled
      className={`custom--input w-100 ${className}`}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      required={required}
      $size={size}
      $disabled={disabled}
      disabled={disabled}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
);

export default CustomInput;
