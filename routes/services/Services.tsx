import { withTranslation } from 'react-i18next';
import { useContext } from 'react';

/** Styles */
import '../../styles/services.scss';

/** Components */
import Service from '../../components/services/Service';
import NavFilters from '../../components/base/nav/NavFilters';

/** Contexts */
import { ServicesContext } from '../../context/services.context';

const Services = ({ t }: { t: any }) => {
    console.log('Services list render');

    const {
        filteredServices,
        searchValue,
    } = useContext(ServicesContext);

    return (
        <div className="services w-100 flex f-col gap-2">
            <NavFilters className='nav__right align-self-end' />

            <div className="services--wrapper w-100 grid gap">
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
        </div>
    )
};

const ServicesTranslated = withTranslation('common')(Services)
export default ServicesTranslated;
