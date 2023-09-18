import { withTranslation } from 'react-i18next';
import { useContext } from 'react';
/** Router */
import {
    Link,
    useNavigate,
} from 'react-router-dom';

/** Styles */
import '../../styles/servicePage.scss';

/** Components */
import ServiceReference from '../../components/service/ServiceReference';

/** Icons */
import {
    BookmarkIcon,
    CalculatorIcon,
} from '@heroicons/react/24/solid';

/** Contexts */
import { ServicesContext } from '../../context/services.context';

const ServicePage = ({ t }) => {
    console.log('service page render');

    const {
        activeService,
        markService,
    } = useContext(ServicesContext);

    const {
        id,
        is_marked,
        title,
        references,
        description,
    } = activeService;

    const navigate = useNavigate();
    const goToCalculate = () => navigate(`/${id}/calculate`);

    return (
        <div className='service--page'>
            <div className='flex justify-space-b'>
                <div className='flex f-col'>
                    <h2 className='service--page__title'>{title || ''}</h2>
                    <div className='service--page__icons flex gap'>
                        <BookmarkIcon
                            className={is_marked ? 'service--page__icon active' : 'service--page__icon'}
                            onClick={() => markService(!is_marked, id)}
                        />
                        <CalculatorIcon
                            className='service--page__icon'
                            onClick={goToCalculate}
                        />
                    </div>
                </div>
                {references.length && <div className="service--page__reference flex gap justify-end">
                    <ServiceReference refs={references} alt={title}/>
                </div>}
            </div>

            <p className='service--page__description'>{description || ''}</p>
            <div className='service--page__actions flex justify-end'>
                {/* <button className='custom--button service--page__actions-item'>pre-calculate</button>
                <button className='custom--button service--page__actions-item'>mark it</button> */}
                <Link to='/contacts'>
                    <button className='custom--button service--page__actions-item'>{t('custom.button.card.contact')}</button>
                </Link>
            </div>
        </div>
    );
}

const ServicePageTranslated = withTranslation('common')(ServicePage)
export default ServicePageTranslated;
