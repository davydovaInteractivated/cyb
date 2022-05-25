import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';

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
    }, 200);

    

    return (
        <TransitionGroup>
            <div className="catalog catalog--wrapper w-100 grid gap">
                {
                    cardsData.map((card, index) =>
                        <Card
                            key={card.value}
                            card={card}
                            index={index}
                        />
                    )
                }
            </div>
        </TransitionGroup>
    )
};

export default Catalog;
