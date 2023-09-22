import { withTranslation } from 'react-i18next';
import { useParams, Link } from "react-router-dom";
import { useContext } from 'react';

/** Components */
import CustomSelect from "../../components/custom/CustomSelect";
import CustomButton from "../../components/custom/CustomButton";

/** Styles */
import "../../styles/calculate.scss";

/** API */
import employees from "../../api/employees.json";
import hours from "../../api/hours.json";
import consult from "../../api/consult.json";

/** Contexts */
import { ServicesContext } from '../../context/services.context';

const Calculate = ({ t }) => {
    const {
        activeService,
        getService,
    } = useContext(ServicesContext);

    const { id } = activeService || {};
    const { serviceId } = useParams();

    const Id = id || serviceId || null;

    const currentService = activeService || getService(Id) || null;
    const { title } = currentService || {};

    return (
        currentService && <div className="calculate--page w-100">
            <h2 className="calculate--page__title">
                {t('calculate.title')}&nbsp;
                <Link to={`/${Id}`}>
                    <span style={{textDecoration: 'underline'}}>{title}</span>
                </Link>&nbsp;
                {t('calculate.service')}
            </h2>
            <div className="calculate--page__form">
                <div className="calculate--page__form-item flex gap-2 align-center">
                    <CustomSelect
                        placeholder={t('custom.select.placeholder.employees')}
                        items={employees}
                    />
                    <span>~&nbsp;${40}</span>
                </div>

                <div className="calculate--page__form-item flex gap-2 align-center">
                    <CustomSelect
                        placeholder={t('custom.select.placeholder.hours')}
                        items={hours}
                    />
                    <span>~&nbsp;${80}</span>
                </div>

                <div className="calculate--page__form-item flex gap-2 align-center">
                    <CustomSelect
                        placeholder={t('custom.select.placeholder.consult')}
                        items={consult}
                    />
                    <span>~&nbsp;${400}</span>
                </div>

                <div className="calculate--page__form-item flex gap-2 align-center justify-end">
                    <strong>{t('total')}:&nbsp;&nbsp;~&nbsp;${520}</strong>
                    <CustomButton>{t('addtocart')}</CustomButton>
                </div>
            </div>
        </div>
    )
};

const CalculateTranslated = withTranslation('common')(Calculate)
export default CalculateTranslated;
