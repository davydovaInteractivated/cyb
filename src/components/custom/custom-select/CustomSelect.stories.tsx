import CustomSelect from './CustomSelect';
import '../../../styles/_reset.scss';
import '../../../styles/_variables.css';
import '../../../styles/_base.scss';
import { MouseEventHandler } from 'react';

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

const onChangeHandler = (e: MouseEventHandler<HTMLInputElement>) => {
    console.log(e);
};

export const Default = {
    args: {
        className: '',
        size: 'medium',
        value: null,
        placeholder: 'select',
        items: [{ id: 1, name: 'someName' }],
        valueKey: 'id',
        name: 'name',
        returnObject: true,
        required: false,
        disabled: false,
        onChange: (e: MouseEventHandler<HTMLInputElement>) => onChangeHandler(e),
    },
};
