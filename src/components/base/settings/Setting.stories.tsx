import Setting from './Setting';

/** Styles */

/** Types */
import { TTheme, TLang } from '../../../context/settings.context';

export default {
    title: 'Setting',
    component: Setting,
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
