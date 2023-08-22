import { withTranslation } from 'react-i18next';

/** Styles */
import '../../styles/header.scss'

/** Icons */
import {
    HeartIcon,
    ArrowsUpDownIcon,
    BarsArrowDownIcon,
    BarsArrowUpIcon,
} from '@heroicons/react/24/solid';

/** Components */
import CustomInput from '../custom/CustomInput';

const Header = ({ sortDirection, showLiked, likedCount, search, sort, setLiked, t }) => {
    console.log('Header render');
    return (
        <header className="header">
            <div className="header--wrapper flex justify-space-b align-center">
                <div className="header--logo b">KYB <sub className="thin">{t('header.logo')}</sub></div>
                <div className="flex align-center">
                    <nav className="header--menu">
                        <ul className="header--menu__list flex">
                            {/* <li className="header--menu__list-item">community</li> */}
                            <li className="header--menu__list-item">{t('header.menu.contacts')}</li>
                            <li className="header--menu__list-item">{t('header.menu.faq')}</li>
                        </ul>
                    </nav>
                    <div className="header--search">
                        <CustomInput onChange={event => search(event)}/>
                    </div>
                    <div className="header--icons">
                        <HeartIcon
                            className={showLiked ? "header--icons__icon active" : "header--icons__icon"}
                            onClick={setLiked}
                        />
                        <sub className="header--icons__liked-count">{likedCount || ' '}</sub>
                        <ArrowsUpDownIcon
                            className={!sortDirection ? "header--icons__icon" : "header--icons__icon none m-0"}
                            onClick={sort}
                        />
                        <BarsArrowDownIcon
                            className={sortDirection > 0 ? "header--icons__icon active" : "header--icons__icon none m-0"}
                            onClick={sort}
                        />
                        <BarsArrowUpIcon
                            className={sortDirection < 0 ? "header--icons__icon active" : "header--icons__icon none m-0"}
                            onClick={sort}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
};

const HeaderTranslated = withTranslation('common')(Header)
export default HeaderTranslated;