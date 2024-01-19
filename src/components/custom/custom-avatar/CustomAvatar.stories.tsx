import CustomAvatar from './CustomAvatar';
import '../../../styles/_variables.css';
import '../../../styles/_base.scss';

export default {
  title: 'CustomAvatar',
  component: CustomAvatar,
  argTypes: {
    inverted: {
      type: 'boolean',
      description: 'Custom Avatar font color',
      defaultValue: true,
    },
  },
};

export const Default = {
  args: {
    className: '',
    inverted: true,
    name: 'name', // user.displayName
    email: '', // user.email
  },
};
