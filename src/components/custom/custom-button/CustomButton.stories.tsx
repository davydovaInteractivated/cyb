import CustomButton from './CustomButton';
import '../../../styles/_variables.css';

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
    inverted: false,
    type: 'button',
    size: 'medium',
  },
};
