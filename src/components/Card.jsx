import '../styles/card.scss';

/** Icons */
import {
    HeartIcon,
} from '@heroicons/react/24/solid';

/** Components */
import CustomButton from './custom/CustomButton';

const Card = ({ card, index, likeCard }) => {
    console.log('Card render');
    return (
        // <div className={card.id === 1 ? 'card card--main' : 'card'}>
        <div className="card">
            <div className="card--wrapper h-100 flex f-col align-start justify-space-b">
                <div>
                    <h2 className="card--wrapper__title">{card.title}</h2>
                    <p className="card--wrapper__text">
                        {card.description}
                    </p>
                </div>
                <div className={card.references.length && index === 0 ? "card--wrapper__reference grid grid-gap w-100" : "d-none"}>
                    {
                        card.references.map((ref) => 
                            <a className="card--wrapper__link" key={ref.url} href={ref.url}>
                                <img
                                    className="card--wrapper__reference-img w-100"
                                    src={require(`../assets/${ref.src}`)}
                                    alt={card.title}
                                />
                            </a>
                        )
                    }
                </div>
                <div className="card--wrapper__buttons flex align-center justify-space-b w-100">
                    <CustomButton />
                    <HeartIcon onClick={() => likeCard(!card.is_liked)} className={card.is_liked ? "card--wrapper__heart liked" : "card--wrapper__heart"}/>
                </div>
            </div>
        </div>
    );
};

export default Card;
