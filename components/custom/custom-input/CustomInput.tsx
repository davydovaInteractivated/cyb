import { forwardRef, FocusEventHandler, ChangeEventHandler } from 'react';
import styled, { css } from 'styled-components';

/** Types */
import { TCustomSize, TCustomValue } from '../../../ts/types/custom';

const SearchCancelBtn = css`
    -webkit-appearance: none;
    height: 1em;
    width: 1em;
    cursor: pointer;
    background: url(/assets/icons/xmark-solid.svg) no-repeat 50% 50%;
    background-size: contain;
    transition: all .2s ease;
`;

interface ICustomInputStyledProps {
    $disabled: boolean,
    $size: TCustomSize,
};

const CustomInputStyled = styled.input<ICustomInputStyledProps>`
    background: ${(({ $disabled }) => $disabled ? '#acacac' : 'transparent')};
    border: ${(({ $disabled }) => $disabled ? '1px solid #7f7f7f' : '1px solid var(--main-font)')};
    border-radius: var(--main-border-radius);
    width: 18em;
    height: 2em;
    padding: 2em;
    outline: none;
    color: ${(({ $disabled }) => $disabled ? '#7f7f7f' : 'var(--main-font)')};

    font-size: ${(({ $size }) => {
        if ($size === 'small') return '.808rem';
        if ($size === 'large') return '1.12rem';
        return '1rem'
    })};

    opacity: ${(({ $disabled }) => $disabled ? '.4' : '1')};
    cursor: ${(({ $disabled }) => $disabled ? 'default' : 'text')};

    &::placeholder {
        color: var(--main-font);
    }

    &::-webkit-search-cancel-button {${SearchCancelBtn}}
`;

interface ICustomInputProps {
    className?: string,
    type?: string,
    size?: TCustomSize,
    placeholder?: string,
    name?: string,
    value: TCustomValue,
    required?: boolean,
    disabled?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    onFocus?: FocusEventHandler<HTMLInputElement>,
    onBlur?: FocusEventHandler<HTMLInputElement>,
};

const CustomInput = forwardRef(({
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
}: ICustomInputProps, ref) => <CustomInputStyled
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
/>);

export default CustomInput;
