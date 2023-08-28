import { withTranslation } from 'react-i18next';
import { Link, NavLink, useLocation, useLinkClickHandler } from 'react-router-dom';

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

const Header = ({ sortDirection, showLiked, likedCount, search, sort, setLikedShow, t }) => {
    console.log('Header render');
    const { pathname } = useLocation();
    console.log('location pathname', pathname);
    const inCatalog = pathname === '/';

    const goHome = useLinkClickHandler('/');

    const goToLikedPage = (e) => {
        setLikedShow(e);
        if (!inCatalog) goHome(e);
    };

    return (
        <header className="header">
            <div className="header--wrapper flex justify-space-b align-center">
                <Link to='/'>
                    <div className="header--logo b">KYB <sub className="thin">{t('header.logo')}</sub></div>
                </Link>

                <div className="flex align-center">
                    <nav className="header--menu">
                        <ul className="header--menu__list flex">
                            <li className="header--menu__list-item">
                                <NavLink
                                    to='/contacts'
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >{t('header.menu.contacts')}</NavLink></li>
                            <li className="header--menu__list-item">
                                <NavLink
                                    to='/faq'
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >{t('header.menu.faq')}</NavLink></li>
                        </ul>
                    </nav>
                    <HeartIcon
                        className={showLiked ? "header--icons__icon active" : "header--icons__icon"}
                        onClick={goToLikedPage}
                    />
                    {Boolean(likedCount) && <sub className='header--liked-count'>{likedCount}</sub>}
                    {inCatalog && <div className='header--search'>
                        <CustomInput
                            placeholder={t('custom.input.search.placeholder')}
                            onChange={event => search(event)}
                        />
                    </div>}
                    <div className="header--icons">
                        <ArrowsUpDownIcon
                            className={!sortDirection && inCatalog ? "header--icons__icon" : "header--icons__icon none m-0"}
                            onClick={sort}
                        />
                        <BarsArrowDownIcon
                            className={sortDirection > 0 && inCatalog ? "header--icons__icon active" : "header--icons__icon none m-0"}
                            onClick={sort}
                        />
                        <BarsArrowUpIcon
                            className={sortDirection < 0 && inCatalog ? "header--icons__icon active" : "header--icons__icon none m-0"}
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