/** Styles */
import '../styles/catalog.scss';

/** Components */
import Card from './Card';

const Catalog = ({ cards, showLiked, searchValue, likeCard }) => {
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

            { showLiked && !cards.length ? <span>Oops, You don't have any favorites.<br />Please add some.</span> : "" }
            { searchValue && !showLiked && !cards.length ? <span>Oops, You don't have any cards.<br />Please change Your search.</span> : "" }
        </div>
    )
};

export default Catalog;
