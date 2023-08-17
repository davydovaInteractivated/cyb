import { useState } from "react";
import "../../styles/header.css"

/** Iconst */
import {
    HeartIcon,
    BarsArrowDownIcon,
    // BarsArrowUpIcon,
    Cog6ToothIcon,
} from '@heroicons/react/24/solid';

const Header = () => {
    const [cardsData, setCardsData] = useState();

    const searching = (event) => {
        console.log(event.target.value);
        // setSearch(event.target.value);
        // Get serching next!
    };

    const sort = () => {
        console.log('cardsData', cardsData);
        setCardsData([...(cardsData || [])]
            .sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())));
    };

    return (
        <header className="header">
            <div className="header--wrapper flex justify-space-b align-center">
                <div className="header--logo b">KYB <sub className="thin">web studio</sub></div>
                <div className="flex align-center">
                    <nav className="header--menu">
                        <ul className="header--menu__list flex">
                            <li className="header--menu__list-item">community</li>
                            <li className="header--menu__list-item">contacts</li>
                            <li className="header--menu__list-item">faq?</li>
                        </ul>
                    </nav>
                    <div className="header--search">
                        <input
                            type="text"
                            placeholder="search"
                            onChange={event => searching(event)}
                        />
                    </div>
                    <div className="header--icons">
                        <HeartIcon className="header--icons__icon"/>
                        <BarsArrowDownIcon onClick={sort} className="header--icons__icon"/>
                        {/* <BarsArrowUpIcon className="header--icons__icon"/> */}
                        <Cog6ToothIcon className="header--icons__icon"/>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;