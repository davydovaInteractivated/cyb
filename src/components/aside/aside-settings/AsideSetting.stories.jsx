import AsideSetting from './AsideSetting';

/** Styles */
import './aside-settings.scss';
import '../../../styles/aside.scss';

export default {
    title: 'AsideSetting',
    component: AsideSetting,
};

export const Default = {
    args: {
        item: {
            name: 'setting',
            colors: {
                light: '#ffffff',
                dark: '#000000',
            },
        },
        activeItem: 'setting',
        selectItem: (item) => { console.log(item); },
    },
};
