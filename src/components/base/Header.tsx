import React, { useContext } from 'react';
import { withTranslation } from 'react-i18next';
import { Link, NavLink, useLocation, useLinkClickHandler } from 'react-router-dom';

import { signOutUser } from '../../utils/firebase';

/** Contexts */
import { UserContext } from '../../context/user.context';
import { ServicesContext } from '../../context/services.context';
import { CasesContext } from '../../context/cases.context';

/** Styles */
import '../../styles/header.scss'

/** Icons */
import {
    BookmarkIcon,
    ArrowsUpDownIcon,
    BarsArrowDownIcon,
    BarsArrowUpIcon,
    BriefcaseIcon,
} from '@heroicons/react/24/solid';

/** Components */
import CustomInput from '../custom/custom-input/CustomInput';
import CustomButton from '../custom/custom-button/CustomButton';
import CustomAvatar from '../custom/custom-avatar/CustomAvatar';
import Logo from '../base/logo/Logo';

const Header = ({ t }: { t: any }) => {
    console.log('Header render');
    const { pathname } = useLocation();
    const atHome = pathname === '/';
    const onFavorites = pathname === '/favorites';
    const onCases = pathname === '/cases';

    const user = useContext(UserContext);
    const {
        sortDirection,
        markedCount,
        searchValue,
        search,
        sort,
    } = useContext(ServicesContext);
    const { cases } = useContext(CasesContext); 

    const goToFavorites = useLinkClickHandler('/favorites');
    const goToFavoritesHandler = () => goToFavorites;

    const handlerSignOut = async () => {
        try {
            await signOutUser();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <header className="header">
            <div className="header--wrapper flex justify-space-b align-center">
                <Link to='/'><Logo>{t('header.logo')}</Logo></Link>

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
                            <li className="header--menu__list-item left">
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >{t('header.menu.services')}</NavLink></li>
                        </ul>
                    </nav>
                    <CustomButton
                        className={onFavorites ? "active" : ""}
                        icon
                        onClick={goToFavoritesHandler}
                    >
                        <BookmarkIcon className="header--icons__icon" />
                    </CustomButton>
                    {Boolean(markedCount) && <sub className='header--marked-count'>{markedCount}</sub>}
                    {(atHome || onFavorites) && <div className='header--search'>
                        <CustomInput
                            placeholder={t('custom.input.search.placeholder')}
                            value={searchValue}
                            type="search"
                            size="small"
                            onChange={event => search(event)}
                        />
                    </div>}
                    <div className="header--icons">
                        <CustomButton
                            className={!sortDirection && (atHome || onFavorites) ? "" : "none m-0"}
                            icon
                            onClick={sort}
                        >
                            <ArrowsUpDownIcon className="header--icons__icon" />
                        </CustomButton>
                        <CustomButton
                            className={sortDirection > 0 && (atHome || onFavorites) ? "active" : "none m-0"}
                            icon
                            onClick={sort}
                        >
                            <BarsArrowDownIcon className="header--icons__icon" />
                        </CustomButton>
                        <CustomButton
                            className={sortDirection < 0 && (atHome || onFavorites) ? "active" : "none m-0"}
                            icon
                            onClick={sort}
                        >
                            <BarsArrowUpIcon className="header--icons__icon" />
                        </CustomButton>
                    </div>
                    <ul className="header--menu__list flex align-center">
                        {user && <li className="header--menu__list-item right cursor-default">
                            <CustomAvatar
                                inverted
                                name={user.displayName}
                                email={user.email}
                            />
                        </li>}
                        {user
                            ? <li className="header--menu__list-item right">
                                <CustomButton
                                    size='small'
                                    onClick={handlerSignOut}
                                >{t('header.menu.signOut')}</CustomButton></li>
                            : <li className="header--menu__list-item right">
                                <NavLink
                                    to='/auth'
                                >
                                    <CustomButton
                                        size='small'
                                    >{t('header.menu.auth')}</CustomButton>
                                </NavLink></li>
                        }
                        <li className="header--menu__list-item right">
                            <NavLink to='/cases'>
                                <CustomButton className={onCases ? 'active' : ''} icon>
                                    <BriefcaseIcon className='header--icons__icon active' />
                                </CustomButton>
                            </NavLink>
                            {Boolean(cases.length) && <sub className='header--cases-count'>{cases.length}</sub>}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
};

const HeaderTranslated = withTranslation('common')(Header)
export default HeaderTranslated;