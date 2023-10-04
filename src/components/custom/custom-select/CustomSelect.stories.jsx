import CustomSelect from './CustomSelect';
// import './custom-select.scss';

export default {
    title: 'CustomSelect',
    component: CustomSelect,
    argTypes: {
        size: {
            type: 'string',
            description: 'Custom Select size',
            defaultValue: 'medium',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
    },
};

const onChangeHandler = (e) => {
    console.log(e);
};

export const Default = {
    args: {
        className: '',
        value: null,
        placeholder: 'select',
        items: [{ id: 1, name: 'someName' }],
        valueKey: 'id',
        name: 'name',
        returnObject: true,
        required: false,
        disabled: false,
        onChange: (e) => onChangeHandler(e),
    },
};
