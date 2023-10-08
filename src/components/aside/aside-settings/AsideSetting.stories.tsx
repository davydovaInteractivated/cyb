import AsideSetting from './AsideSetting';

/** Styles */
import './aside-settings.scss';
import '../../../styles/aside.scss';

/** Types */
import { TTheme, TLang } from '../../../context/settings.context';

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
        selectItem: (item: TTheme | TLang) => { console.log(item); },
    },
};
