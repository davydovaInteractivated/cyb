/** Styles */
import '../styles/catalog.scss';

/** Components */
import Card from './Card';

const Catalog = ({ cards, likeCard }) => {
    console.log('Catalog render');
    return (
        <div className="catalog catalog--wrapper w-100 grid gap">
            {
                cards.map((card, index) =>
                    <Card
                        key={card.id}
                        card={card}
                        index={index}
                        likeCard={(isLiked) => likeCard(isLiked, card.id)}
                    />
                )
            }
        </div>
    )
};

export default Catalog;
