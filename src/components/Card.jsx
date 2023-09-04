import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

/** Styles */
import '../styles/card.scss';

/** Icons */
import {
    BookmarkIcon,
} from '@heroicons/react/24/solid';

/** Components */
import CustomButton from './custom/CustomButton';
import CardReference from './card/CardReference';

const Card = ({ card, index, likeCard, t }) => {
    console.log('Card render');
    return (
        <div className="card">
            <div className="card--wrapper h-100 flex f-col align-start justify-space-b">
                <div>
                    <h2 className="card--wrapper__title">{card.title}</h2>
                    <p className="card--wrapper__text">
                        {card.description}
                    </p>
                </div>
                {(card.references.length > 0 && index === 0) && <div className="card--wrapper__reference grid grid-gap w-100">
                    <CardReference refs={card.references} alt={card.title}/>
                </div>}
                <div className="card--wrapper__buttons flex align-center justify-space-b w-100">
                    <Link to={`/${card.id}`}><CustomButton text={t('custom.button.card.text')} /></Link>
                    <BookmarkIcon onClick={() => likeCard(!card.is_liked)} className={card.is_liked ? "card--wrapper__bookmark liked" : "card--wrapper__bookmark"}/>
                </div>
            </div>
        </div>
    );
};

const CardTranslated = withTranslation('common')(Card)
export default CardTranslated;
