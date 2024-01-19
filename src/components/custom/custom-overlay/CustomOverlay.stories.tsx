import { MouseEventHandler } from 'react';
import CustomOverlay from './CustomOverlay';

export default {
  title: 'CustomOverlay',
  component: CustomOverlay,
  argTypes: {
    type: {
      type: 'string',
      description: 'Custom Loader type',
      defaultValue: 'loader',
      options: ['overlay', 'loader'],
      control: {
        type: 'radio',
      },
    },
  },
};

const closeOnClick = (e: MouseEventHandler<HTMLInputElement>) => {
  console.log(e);
};

export const Default = {
  args: {
    onClick: (e: MouseEventHandler<HTMLInputElement>) => closeOnClick(e),
  },
};
