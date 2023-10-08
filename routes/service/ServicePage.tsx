import { withTranslation } from 'react-i18next';
import { useContext } from 'react';
/** Router */
import {
    Link,
    useNavigate,
    useParams,
} from 'react-router-dom';

/** Styles */
import '../../styles/servicePage.scss';

/** Components */
import ServiceReference from '../../components/service/ServiceReference';
import CustomButton from '../../components/custom/custom-button/CustomButton';

/** Icons */
import {
    BookmarkIcon,
    CalculatorIcon,
} from '@heroicons/react/24/solid';

/** Contexts */
import { ServicesContext } from '../../context/services.context';

const ServicePage = ({ t }: { t: any }) => {
    console.log('Service Page render');

    const {
        services,
        activeService,
        markService,
        getService,
    } = useContext(ServicesContext);

    const {
        id,
    } = activeService || {};

    const { serviceId } = useParams();

    const Id = id || serviceId || '';

    const currentService = activeService || getService(Id, services) || null;

    const {
        is_marked,
        title,
        references,
        description,
    } = currentService || {};

    const navigate = useNavigate();
    const goToCalculate = () => navigate(`/${Id}/calculate`);

    return (
        currentService && <div className='service--page'>
            <div className='flex justify-space-b'>
                <div className='flex f-col'>
                    <h2 className='service--page__title'>{title || ''}</h2>
                    <div className='service--page__icons flex gap'>
                        <CustomButton
                            icon
                            onClick={() => markService(!is_marked, Id)}
                        >
                            <BookmarkIcon
                                className={is_marked ? 'service--page__icon active' : 'service--page__icon'}
                            />
                        </CustomButton>
                        <CustomButton
                            icon
                            onClick={goToCalculate}
                        >
                            <CalculatorIcon className='service--page__icon' />
                        </CustomButton>
                    </div>
                </div>
                {references?.length && <div className="service--page__reference flex gap justify-end">
                    <ServiceReference refs={references} alt={title || ''}/>
                </div>}
            </div>

            <p className='service--page__description'>{description || ''}</p>
            <div className='service--page__actions flex justify-end'>
                <Link to='/contacts'>
                    <CustomButton className='service--page__actions-item'>{t('custom.button.card.contact')}</CustomButton>
                </Link>
            </div>
        </div>
    );
}

const ServicePageTranslated = withTranslation('common')(ServicePage)
export default ServicePageTranslated;
