import CustomInput from './CustomInput';
import '../../../styles/_variables.css';

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
        size: 'medium',
        required: false,
        disabled: false,
        onChange: (e) => onChangeHandler(e),
    },
};
