import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";

/** Icons */
import { BookmarkIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

/** Components */
import CustomButton from "../../custom/custom-button/CustomButton";

/** Contexts */
import { CasesContext } from "../../../context/cases.context";
import { ServicesContext } from "../../../context/services.context";

const NavLinks = ({ className = '' }: { className?: string }) => {
    const { cases } = useContext(CasesContext); 

    const { pathname } = useLocation();
    const onFavorites = pathname === '/favorites';
    const onCases = pathname === '/cases';

    const { markedCount } = useContext(ServicesContext);

    return (
        <nav className={`nav nav--links ${className}`}>
            <ul className="nav__list flex align-center">
                <li className="nav__list-item relative">
                    <NavLink to='/favorites'>
                        <CustomButton
                            className={onFavorites ? "active" : ""}
                            icon
                        ><BookmarkIcon className="icons__icon" /></CustomButton>
                    </NavLink>
                    {Boolean(markedCount) && <sub className='nav--count nav--count__marked'>{markedCount}</sub>}
                </li>
                <li className="nav__list-item relative">
                    <NavLink to='/cases'>
                        <CustomButton className={onCases ? 'active' : ''} icon>
                            <BriefcaseIcon className='icons__icon active' />
                        </CustomButton>
                    </NavLink>
                    {Boolean(cases.length) && <sub className='nav--count nav--count__cases'>{cases.length}</sub>}
                </li>
            </ul>
        </nav>
    );
};

export default NavLinks;
