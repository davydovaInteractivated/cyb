import { useContext } from 'react';
import { withTranslation } from 'react-i18next';
import { Link, NavLink, useLocation, useLinkClickHandler } from 'react-router-dom';
import styled from 'styled-components';

import { signOutUser } from '../../utils/firebase';

/** Contexts */
import { UserContext } from '../../context/user.context';
import { ServicesContext } from '../../context/services.context';

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
import CustomButton from '../custom/CustomButton';

const CustomAvatarStyled = styled.div`
    height: 3em;
    width: 3em;
    background: var(--color-light);
    border-radius: var(--main-border-radius);
    opacity: .8;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Header = ({ t }) => {
    console.log('Header render');
    const { pathname } = useLocation();
    const atHome = pathname === '/';

    const user = useContext(UserContext);
    const {
        sortDirection,
        showMarked,
        markedCount,
        searchValue,
        search,
        sort,
        setMarkedShow,
    } = useContext(ServicesContext);

    const goHome = useLinkClickHandler('/');

    const goToMarkedPage = (e) => {
        setMarkedShow(e);
        if (!atHome) goHome(e);
    };

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
                            <li className="header--menu__list-item left">
                                <NavLink
                                    to='/'
                                    className={({ isActive }) => isActive ? "active" : ""}
                                >{t('header.menu.services')}</NavLink></li>
                        </ul>
                    </nav>
                    {atHome && <BookmarkIcon
                        className={showMarked ? "header--icons__icon active" : "header--icons__icon"}
                        onClick={goToMarkedPage}
                    />}
                    {atHome && Boolean(markedCount) && <sub className='header--marked-count'>{markedCount}</sub>}
                    {atHome && <div className='header--search'>
                        <CustomInput
                            placeholder={t('custom.input.search.placeholder')}
                            value={searchValue}
                            type="search"
                            onChange={event => search(event)}
                        />
                    </div>}
                    <div className="header--icons">
                        <ArrowsUpDownIcon
                            className={!sortDirection && atHome ? "header--icons__icon" : "header--icons__icon none m-0"}
                            onClick={sort}
                        />
                        <BarsArrowDownIcon
                            className={sortDirection > 0 && atHome ? "header--icons__icon active" : "header--icons__icon none m-0"}
                            onClick={sort}
                        />
                        <BarsArrowUpIcon
                            className={sortDirection < 0 && atHome ? "header--icons__icon active" : "header--icons__icon none m-0"}
                            onClick={sort}
                        />
                    </div>
                    <ul className="header--menu__list flex align-center">
                        {user && <li className="header--menu__list-item right cursor-default">
                            <CustomAvatarStyled className='font-inverted'>{
                                user.displayName
                                    ? user.displayName.substr(0, 2).toUpperCase()
                                    : user.email.substr(0, 2).toUpperCase()
                            }</CustomAvatarStyled>
                        </li>}
                        {user
                            ? <li className="header--menu__list-item right">
                                <CustomButton
                                    small
                                    onClick={handlerSignOut}
                                >{t('header.menu.signOut')}</CustomButton></li>
                            : <li className="header--menu__list-item right">
                                <NavLink
                                    to='/auth'
                                >
                                    <CustomButton
                                        small
                                    >{t('header.menu.auth')}</CustomButton>
                                </NavLink></li>
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
};

const HeaderTranslated = withTranslation('common')(Header)
export default HeaderTranslated;