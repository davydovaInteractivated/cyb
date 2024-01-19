import CustomAlert from './CustomAlert';

/** Styles */
import '../../../styles/_animations.scss';

export default {
  title: 'CustomAlert',
  component: CustomAlert,
  argTypes: {
    type: {
      type: 'string',
      description: 'Custom Select type',
      defaultValue: 'info',
      options: ['info', 'success', 'warning', 'error'],
      control: {
        type: 'select',
      },
    },
    top: {
      type: 'boolean',
      description: 'Custom Alert top position',
      defaultValue: true,
    },
    bottom: {
      type: 'boolean',
      description: 'Custom Alert bottom position',
      defaultValue: false,
    },
    left: {
      type: 'boolean',
      description: 'Custom Alert left position',
      defaultValue: true,
    },
    right: {
      type: 'boolean',
      description: 'Custom Alert right position',
      defaultValue: true,
    },
  },
};

const hideAlertHandle = () => {
  console.log('Custom Alert has been hided.');
};

export const Default = {
  args: {
    type: 'info',
    title: '',
    message: 'custom alert',
    hideDelay: 0,
    show: true,
    top: true,
    left: true,
    right: false,
    bottom: false,
    hideAlert: hideAlertHandle,
  },
};
