import { useState, useContext } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

/** Styles */
import '../../styles/aside.scss';

/** Icons */
import {
    Cog6ToothIcon,
    ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid';

/** Components */
import AsideSetting from '../aside/aside-settings/AsideSetting';
import AsideCube from '../aside/AsideCube';

/** Contexts */
import { SettingsContext } from '../../context/settings.context';
import CustomButton from '../custom/custom-button/CustomButton';

const Aside = ({ t }) => {
    const { i18n } = useTranslation('common');
    const [cubeData] = useState([{
        name: 'tech',
        class: 'aside--cube__side-back',
    }, {
        name: 'app',
        class: 'aside--cube__side-left',
    }, {
        name: 'web',
        class: 'aside--cube__side-right',
    }, {
        name: 'mobile',
        class: 'aside--cube__side-top',
    }, {
        name: 'soft',
        class: 'aside--cube__side-bottom',
    }, {
        name: 'support',
        class: 'aside--cube__side-front',
    }]);

    const {
        themes,
        langs,
        isShowSettings,
        activeTheme,
        activeLang,
        selectLang,
        selectTheme,
        showSettings,
    } = useContext(SettingsContext);

    return (
        <div className="aside">
            <div className="aside--wrapper flex f-col justify-space-b align-start">
                <AsideCube data={cubeData} />

                <CustomButton
                    className="aside--btn__cogs"
                    icon
                    onClick={showSettings}
                >
                    <Cog6ToothIcon className="aside--icons__icon" />
                </CustomButton>

                <a
                    className='aside--link flex align-center'
                    href='https://davydovainteractivated.github.io/cyb/'
                    target='_blank'
                    rel='noreferrer'
                >
                    storybook&nbsp;
                    <ArrowTopRightOnSquareIcon className='aside--link__icon' />
                </a>

                <div
                    className={ isShowSettings ? 'aside--settings absolute active' : 'aside--settings absolute' }>
                    <h3 className='aside--settings__title'>{t('settings.theme')}</h3>
                    <div className="flex f-col">
                        {
                            themes.map((theme) =>
                                <AsideSetting
                                    key={theme.name}
                                    item={theme}
                                    activeItem={activeTheme}
                                    selectItem={selectTheme}
                                />
                            )
                        }
                    </div>

                    <h3 className='aside--settings__title'>{t('settings.lang')}</h3>
                    <div className="flex f-col">
                        {
                            langs.map((ln) =>
                                <AsideSetting
                                    key={ln.name}
                                    item={ln}
                                    activeItem={activeLang}
                                    selectItem={() => {
                                        i18n.changeLanguage(ln.name);
                                        selectLang(ln);
                                    }}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

const AsideTranslated = withTranslation('common')(Aside)
export default AsideTranslated;
