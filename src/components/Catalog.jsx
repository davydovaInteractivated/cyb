/** Styles */
import '../styles/catalog.css';

/** Components */
import Card from './Card';

const Catalog = ({ cards, likeCard }) => {
    console.log('Catalog render');
    return (
        <div className="catalog catalog--wrapper w-100 grid gap">
            {
                cards.map((card) =>
                    <Card
                        key={card.id}
                        card={card}
                        likeCard={(isLiked) => likeCard(isLiked, card.id)}
                    />
                )
            }
        </div>
    )
};

export default Catalog;
