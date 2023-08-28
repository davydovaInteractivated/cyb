import { forwardRef } from 'react';

const CustomInput = forwardRef(({ className, type = 'search', placeholder = 'search', onChange }) => {
    return (
        <input
            className={`custom--input w-100 ${className}`}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
});

export default CustomInput;
