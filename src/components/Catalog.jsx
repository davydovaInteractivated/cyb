import { useState } from 'react';

import '../styles/catalog.css';

import Card from "./Card";

/** Api */
import { cards } from '../api/cards';

const Catalog = () => {
    const [cardsData, setCardsData ] = useState(cards);

    /**
     * Like Card
     * @param {Boolean} isLiked
     * @param {Number} cardId
     * @returns 
     */
    const like = (isLiked, cardId) => {
        const cardsDataCopy = [...cardsData];
        const currentCardDataIndex = cardsDataCopy
            .findIndex((card) => card.id === cardId);

        if (currentCardDataIndex === -1) return;

        cardsDataCopy[currentCardDataIndex] = {
            ...cardsDataCopy[currentCardDataIndex],
            is_liked: isLiked,
        };

        setCardsData(cardsDataCopy);
    };

    return (
        <div className="catalog catalog--wrapper w-100 grid gap">
            {
                cardsData.map((card) =>
                    <Card
                        key={card.id}
                        card={card}
                        like={(isLiked) => like(isLiked, card.id)}
                    />
                )
            }
        </div>
    )
};

export default Catalog;
