import { useState } from 'react';

import { Transition } from 'react-transition-group';
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

    const defaultStyle = {
        transition: 'opacity 3s ease-in-out',
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };

    return (
        <div className="catalog catalog--wrapper w-100 grid gap">
            {
                cardsData.map(card =>
                    <Transition
                        in={false}
                        timeout={3000}
                        key={card.value}
                    >
                        {state => (
                            <Card
                                key={card.value}
                                card={card}

                                style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}
                            />
                        )}
                    </Transition>
                )
            }
        </div>
    )
};

export default Catalog;
