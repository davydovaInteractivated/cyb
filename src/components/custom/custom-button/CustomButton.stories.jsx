import CustomButton from './CustomButton';
import './custom-button.scss';

export default {
    title: 'CustomButton',
    component: CustomButton,
    argTypes: {
        size: {
            type: 'string',
            description: 'Custom Button size',
            defaultValue: 'medium',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'select',
            },
        },
    },
};

export const Default = {
    args: {
        children: 'more',
        icon: false,
        disabled: false,
        filled: false,
        type: 'button',
        size: 'medium',
    },
};
