import { forwardRef } from 'react';

/** Styles */
import './custom-input.scss';

const CustomInput = forwardRef(({
    className,
    type = 'search',
    size = 'medium',
    placeholder = 'search',
    name='',
    value='',
    required=false,
    disabled=false,
    onChange,
    onFocus,
    onBlur,
}, ref) => {
    return (
        <input
            className={`custom--input w-100 ${className} custom--input__${size} ${disabled ? 'custom--input__disabled' : ''}`}
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            required={required}
            disabled={disabled}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
});

export default CustomInput;
