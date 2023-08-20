/** Styles */
import '../../styles/header.css'

/** Icons */
import {
    HeartIcon,
    ArrowsUpDownIcon,
    BarsArrowDownIcon,
    BarsArrowUpIcon,
} from '@heroicons/react/24/solid';

const Header = ({ sortDirection, showLiked, likedCount, search, sort, setLiked }) => {
    console.log('Header render');
    return (
        <header className="header">
            <div className="header--wrapper flex justify-space-b align-center">
                <div className="header--logo b">KYB <sub className="thin">web studio</sub></div>
                <div className="flex align-center">
                    <nav className="header--menu">
                        <ul className="header--menu__list flex">
                            {/* <li className="header--menu__list-item">community</li> */}
                            <li className="header--menu__list-item">contacts</li>
                            <li className="header--menu__list-item">faq?</li>
                        </ul>
                    </nav>
                    <div className="header--search">
                        <input
                            className="header--search__input"
                            type="search"
                            placeholder="search"
                            onChange={event => search(event)}
                        />
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

export default Header;