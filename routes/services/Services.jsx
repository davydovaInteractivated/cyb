import { withTranslation } from 'react-i18next';
import { useContext } from 'react';

/** Styles */
import '../../styles/services.scss';

/** Components */
import Service from '../../components/services/Service';

/** Contexts */
import { ServicesContext } from '../../context/services.context';

const Services = ({ t }) => {
    console.log('Services list render');

    const {
        filteredServices,
        searchValue,
    } = useContext(ServicesContext);

    return (
        <div className="services services--wrapper w-100 grid gap">
            {
                filteredServices.map((service, index) =>
                    <Service
                        key={service.id}
                        service={service}
                        index={index}
                    />
                )
            }
            { searchValue && !filteredServices.length ? <span>{t('main.text.empty.search')}</span> : "" }
        </div>
    )
};

const ServicesTranslated = withTranslation('common')(Services)
export default ServicesTranslated;
