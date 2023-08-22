/** Styles */
import '../../styles/aside.scss';

/** Api */
import { themes } from '../../api/themes';
import { langs } from '../../api/lang';

/** Icons */
import {
    Cog6ToothIcon,
} from '@heroicons/react/24/solid';

/** Components */
import AsideSetting from '../aside/AsideSetting';

const Aside = ({
    isShowSettings,
    activeTheme,
    activeLang,
    showSettings,
    selectTheme,
    selectLang,
}) => {
    return (
        <div className="aside">
            <div className="aside--wrapper flex f-col justify-space-b align-start">
                <div className="aside--cube">
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-back">tech</span>
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-left">app's</span>
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-right">web</span>
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-top">mobile</span>
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-bottom">soft</span>
                    <span className="aside--cube__side flex align-center justify-center aside--cube__side-front">support</span>
                </div>

                <Cog6ToothIcon
                    className="aside--icons__icon"
                    onClick={showSettings}
                />

                <div
                    className={ isShowSettings ? 'aside--settings absolute active' : 'aside--settings absolute' }>
                    <h3 className='aside--settings__title'>themes</h3>
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

                    <h3 className='aside--settings__title'>lang</h3>
                    <div className="flex f-col">
                        {
                            langs.map((ln) =>
                                <AsideSetting
                                    key={ln.name}
                                    item={ln}
                                    activeItem={activeLang}
                                    selectItem={selectLang}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Aside;