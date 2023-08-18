import '../styles/card.css';

/** Icons */
import {
    HeartIcon,
} from '@heroicons/react/24/solid';

const Card = ({ card, likeCard }) => {
    console.log('Card render');
    return (
        <div className={card.id === 1 ? 'card card--main' : 'card'}>
            <div className="card--wrapper h-100 flex f-col align-start justify-space-b">
                <div>
                    <h2 className="card--wrapper__title">{card.title}</h2>
                    <p className="card--wrapper__text">
                        {card.description}
                    </p>
                </div>
                <div className={!card.references.length ? "d-none" : "card--wrapper__reference grid grid-gap w-100"}>
                    {
                        card.references.map((ref) => 
                            <a className="card--wrapper__link" key={ref.url} href={ref.url}>
                                <img
                                    className="card--wrapper__reference-img w-100"
                                    src={require(`../assets/${ref.src}`)}
                                    alt={`img ${card.id}`}
                                />
                            </a>
                        )
                    }
                </div>
                <div className="card--wrapper__buttons flex align-center justify-space-b w-100">
                    <button className="card--wrapper__button">
                        more
                    </button>
                    <HeartIcon onClick={() => likeCard(!card.is_liked)} className={card.is_liked ? "card--wrapper__heart liked" : "card--wrapper__heart"}/>
                </div>
            </div>
        </div>
    );
};

export default Card;
