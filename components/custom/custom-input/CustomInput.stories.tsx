import CustomInput from './CustomInput';
import '../../../styles/_variables.css';
import { MouseEventHandler } from 'react';

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

const onChangeHandler = (e: MouseEventHandler<HTMLInputElement>) => {
  console.log(e);
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
    onChange: (e: MouseEventHandler<HTMLInputElement>) => onChangeHandler(e),
  },
};
