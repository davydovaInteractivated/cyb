import { withTranslation } from 'react-i18next';

/** Styles */
import '../styles/catalog.scss';

/** Components */
import Card from './Card';

const Catalog = ({ cards, showMarked, searchValue, markCard, t }) => {
    console.log('Catalog render');
    return (
        <div className="catalog catalog--wrapper w-100 grid gap">
            {
                cards.map((card, index) =>
                    <Card
                        key={card.id}
                        card={card}
                        index={index}
                        markCard={(isMarked) => markCard(isMarked, card.id)}
                    />
                )
            }

            { showMarked && !searchValue && !cards.length ? <span>{t('main.text.empty.favorites')}</span> : "" }
            { searchValue && !cards.length ? <span>{t('main.text.empty.search')}</span> : "" }
        </div>
    )
};

const CatalogTranslated = withTranslation('common')(Catalog)
export default CatalogTranslated;
