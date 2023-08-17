import "../styles/card.css";

/** Icons */
import {
    HeartIcon,
} from '@heroicons/react/24/solid';

const Card = ({ card, like }) => {
    const setLiked = () => {
        like(!card.is_liked);
    };

    return (
        <div className="card">
            <div className="card--wrapper flex f-col align-start justify-space-b">
                <h2>{card.title}</h2>
                <p>
                    {card.description}
                </p>
                {/* <p>{state}</p> */}
                <div className="card--wrapper__buttons flex align-center justify-space-b w-100">
                    <button className="card--wrapper__button">
                        more
                    </button>
                    <HeartIcon onClick={setLiked} className={card.is_liked ? "card--wrapper__heart liked" : "card--wrapper__heart"}/>
                </div>
            </div>
        </div>
    );
};

export default Card;
