import { withTranslation } from 'react-i18next';

/** Styles */
import '../styles/catalog.scss';

/** Components */
import Card from './Card';

const Catalog = ({ cards, showLiked, searchValue, likeCard, t }) => {
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

            { showLiked && !searchValue && !cards.length ? <span>{t('main.text.empty.favorites')}</span> : "" }
            { searchValue && !cards.length ? <span>{t('main.text.empty.search')}</span> : "" }
        </div>
    )
};

const CatalogTranslated = withTranslation('common')(Catalog)
export default CatalogTranslated;
