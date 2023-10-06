import { useContext } from 'react';
import { withTranslation } from 'react-i18next';

/** Styles */
import '../../styles/favorites.scss';
/** Components */
import Service from '../../components/services/Service';
/** Contexts */
import { ServicesContext } from '../../context/services.context';

const Favorites = ({ t }) => {
    const { filteredServices } = useContext(ServicesContext);

    return (
        <div className="favorites w-100 grid">
            {
                filteredServices.map((service, index) =>
                    <Service
                        key={service.id}
                        service={service}
                        index={index}
                    />
                )
            }
            { !filteredServices.length ? <span>{t('main.text.empty.favorites')}</span> : "" }
        </div>
    );
};

const FavoritesTranslated = withTranslation('common')(Favorites)
export default FavoritesTranslated;
