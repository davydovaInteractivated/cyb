import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

const SearchCancelBtn = css`
    -webkit-appearance: none;
    height: 1em;
    width: 1em;
    cursor: pointer;
    background: url(../assets/icons/xmark-solid.svg) no-repeat 50% 50%;
    background-size: contain;
    transition: all .2s ease;
`;

const CustomInputStyled = styled.input`
    background: transparent;
    border: 1px solid var(--main-font);
    border-radius: var(--main-border-radius);
    width: 18em;
    height: 2em;
    padding: 2em;
    outline: none;

    &::placeholder {
        color: var(--main-font);
    }

    &::-webkit-search-cancel-button {${SearchCancelBtn}}
`;

const CustomInput = forwardRef(({
    className,
    type = 'search',
    placeholder = 'search',
    name='',
    value='',
    required=false,
    onChange,
    onFocus,
    onBlur,
}, ref) => {
    return (
        <CustomInputStyled
            className={`custom-input w-100 ${className}`}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            required={required}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
});

export default CustomInput;
