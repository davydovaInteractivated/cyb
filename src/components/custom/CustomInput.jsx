import { forwardRef } from 'react';

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
        <input
            className={`custom--input w-100 ${className}`}
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
