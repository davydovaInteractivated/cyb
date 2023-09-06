import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { withTranslation } from 'react-i18next';
import { Link, NavLink, useLocation, useLinkClickHandler } from 'react-router-dom';

/** Styles */
import '../../styles/header.scss'

/** Icons */
import {
    BookmarkIcon,
    ArrowsUpDownIcon,
    BarsArrowDownIcon,
    BarsArrowUpIcon,
} from '@heroicons/react/24/solid';

/** Components */
import CustomInput from '../custom/CustomInput';

const Header = ({
    // sortDirection,
    showMarked,
    // markedCount,
    searchValue,
    search,
    sort,
    setMarkedShow,
    t,
}) => {
    console.log('Header render');
    const { pathname } = useLocation();
    const inCatalog = pathname === '/';

    const { user, userData } = useContext(UserContext);
    console.log('userData', userData);
    const { catalog } = userData;
    const { settings } = userData;
    const { marked } = catalog;
    const { sortDirection } = settings;

    const goHome = useLinkClickHandler('/');

    const goToMarkedPage = (e) => {
        setMarkedShow(e);
        if (!inCatalog) goHome(e);
    };

    return (
        <header className="header">
            <div className="header--wrapper flex justify-space-b align-center">
                <Link to='/'>
                    <div className="header--logo font-inverted b">KYB <sub className="thin font-inverted">{t('header.logo')}</sub></div>
                </Link>

                <div className="flex align-center">
                    <nav className="header--menu">
                        <ul className="header--menu__list flex">
                            <li className="header--menu__list-item left">
                                <NavLink
                                    to='/contacts'
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >{t('header.menu.contacts')}</NavLink></li>
                            <li className="header--menu__list-item left">
                                <NavLink
                                    to='/faq'
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >{t('header.menu.faq')}</NavLink></li>
                        </ul>
                    </nav>
                    <BookmarkIcon
                        className={showMarked ? "header--icons__icon active" : "header--icons__icon"}
                        onClick={goToMarkedPage}
                    />
                    {Boolean(marked) && <sub className='header--marked-count'>{marked}</sub>}
                    {inCatalog && <div className='header--search'>
                        <CustomInput
                            placeholder={t('custom.input.search.placeholder')}
                            value={searchValue}
                            type="search"
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
                    <ul className="header--menu__list flex align-center">
                        {user
                            ? <li className="header--menu__list-item right">
                                <NavLink
                                    to='/auth'
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >sign out</NavLink></li>
                            : <li className="header--menu__list-item right">
                                <NavLink
                                    to='/auth'
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >{t('header.menu.auth')}</NavLink></li>
                        }
                        {user && <li className="header--menu__list-item right cursor-default">
                            <div className='custom--avatar font-inverted'>{
                                user.displayName
                                    ? user.displayName.substr(0, 2).toUpperCase()
                                    : user.email.substr(0, 2).toUpperCase()
                            }</div>
                        </li>}
                    </ul>
                </div>
            </div>
        </header>
    )
};

const HeaderTranslated = withTranslation('common')(Header)
export default HeaderTranslated;