import { withTranslation } from 'react-i18next';
/** Router */
import {
    Link,
    useParams,
} from 'react-router-dom';

/** Styles */
import '../../styles/cardPage.scss';

/** Api */
import { cards } from '../../api/cards';

/** Components */
import CardReference from '../../components/card/CardReference';

/** Icons */
import {
    BookmarkIcon,
    CalculatorIcon,
} from '@heroicons/react/24/solid';

const CardPage = ({ t }) => {
    const { id } = useParams();
    console.log('router params card id:', id);

    const getActiveCard = (cardId) => {
        return cards
            .find((crd) => crd.id === cardId);
    };

    const currentCard = getActiveCard(+id);

    return (
        <div className='card--page'>
            <div className='flex justify-space-b'>
                <div className='flex f-col'>
                    <h2 className='card--page__title'>{currentCard?.title || ''}</h2>
                    <div className='card--page__icons flex gap'>
                        <BookmarkIcon
                            className={currentCard.is_marked ? 'card--page__icon active' : 'card--page__icon'}
                            // onClick={}
                        />
                        <CalculatorIcon
                            className='card--page__icon'
                            // onClick={}
                        />
                    </div>
                </div>
                {currentCard?.references.length && <div className="card--page__reference flex gap justify-end">
                    <CardReference refs={currentCard.references} alt={currentCard.title}/>
                </div>}
            </div>

            <p className='card--page__description'>{currentCard?.description || ''}</p>
            <div className='card--page__actions flex justify-end'>
                {/* <button className='custom--button card--page__actions-item'>pre-calculate</button>
                <button className='custom--button card--page__actions-item'>mark it</button> */}
                <Link to='/contacts'>
                    <button className='custom--button card--page__actions-item'>{t('custom.button.card.contact')}</button>
                </Link>
            </div>
        </div>
    );
}

const CardPageTranslated = withTranslation('common')(CardPage)
export default CardPageTranslated;
