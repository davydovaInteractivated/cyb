import { useState } from 'react';

import '../styles/catalog.css';

import Card from "./Card";

const Catalog = () => {
    const [cardsData, setCardsData ] = useState([]);

    setTimeout(() => {
        setCardsData(
            [
                {
                    value: 'e-commerce',
                }, {
                    value: 'design',
                }, {
                    value: 'website',
                }, {
                    value: 'admin',
                }, {
                    value: 'manage',
                },
            ]
        );
    }, 2000);

    return (
        <div className="catalog catalog--wrapper w-100 grid gap">
            {
                cardsData.map(card =>
                    <Card
                        key={card.value}
                        card={card}
                    />
                )
            }
        </div>
    )
};

export default Catalog;
