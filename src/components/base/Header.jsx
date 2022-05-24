import { useState } from "react";
import "../../styles/header.css"

const Header = () => {
    const [search, setSearch] = useState(null);

    const searching = (event) => {
        console.log(event.target.value);

        setSearch(event.target.value);

        // Get serching next!
    };

    return (
        <header className="header">
            <div className="header--wrapper flex justify-space-b align-center">
                <div className="header--logo b">KYB <sub className="thin">web studio</sub></div>
                <div className="flex align-center">
                    <nav className="header--menu">
                        <ul className="header--menu__list flex">
                            <li className="header--menu__list-item">community</li>
                            <li className="header--menu__list-item">price</li>
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
                </div>
            </div>
        </header>
    )
};

export default Header;