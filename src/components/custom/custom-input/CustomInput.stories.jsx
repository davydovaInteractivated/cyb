import CustomInput from './CustomInput';
import './custom-input.scss';

export default {
    title: 'CustomInput',
    component: CustomInput,
    argTypes: {
        size: {
            type: 'string',
            description: 'Custom Input size',
            defaultValue: 'medium',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
    },
};

const onChangeHandler = (e) => {
    console.log(e.target.value);
};

export const Default = {
    args: {
        type: 'search',
        placeholder: 'search',
        name: '',
        value: '',
        required: false,
        disabled: false,
        onChange: (e) => onChangeHandler(e),
        // onFocus,
        // onBlur,
    },
};
