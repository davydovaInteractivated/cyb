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
import { CasesContext } from '../../context/cases.context';
import { useState } from 'react';

const Calculate = ({ t }) => {
    const [currentCase, setCurrentCase] = useState({
        employees: null,
        hours: null,
        consult: null,
    });
    const {
        activeService,
        getService,
    } = useContext(ServicesContext);

    const { id } = activeService || {};
    const { serviceId } = useParams();

    const Id = id || serviceId || null;

    const currentService = activeService || getService(Id) || null;
    const { title } = currentService || {};

    const { cases, setCases } = useContext(CasesContext);

    /**
     * Change Current Case
     * @param {string} field
     * @param {object} changedCaseField
     */
    const changeCurrentCase = (field, changedCaseField) => {
        setCurrentCase({
            ...currentCase,
            data: {
                ...currentCase.data,
                [field]: changedCaseField,
            },
        });
    };

    /**
     * Add Case
     */
    const addCase = () => {
        setCases([
            ...cases,
            {
                title,
                ...currentCase,
            },
        ]);
    };

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
                        value={currentCase.employees}
                        placeholder={t('custom.select.placeholder.employees')}
                        items={employees}
                        onChange={(changedCaseField) => changeCurrentCase('employees', changedCaseField)}
                    />
                    <span>~&nbsp;${40}</span>
                </div>

                <div className="calculate--page__form-item flex gap-2 align-center">
                    <CustomSelect
                        value={currentCase.hours}
                        placeholder={t('custom.select.placeholder.hours')}
                        items={hours}
                        onChange={(changedCaseField) => changeCurrentCase('hours', changedCaseField)}
                    />
                    <span>~&nbsp;${80}</span>
                </div>

                <div className="calculate--page__form-item flex gap-2 align-center">
                    <CustomSelect
                        value={currentCase.consult}
                        placeholder={t('custom.select.placeholder.consult')}
                        items={consult}
                        onChange={(changedCaseField) => changeCurrentCase('consult', changedCaseField)}
                    />
                    <span>~&nbsp;${400}</span>
                </div>

                <div className="calculate--page__form-item flex gap-2 align-center justify-end">
                    <strong>{t('total')}:&nbsp;&nbsp;~&nbsp;${520}</strong>
                    <CustomButton
                        text={t('addtocase')}
                        onClick={addCase}
                    />
                </div>
            </div>
        </div>
    )
};

const CalculateTranslated = withTranslation('common')(Calculate)
export default CalculateTranslated;
