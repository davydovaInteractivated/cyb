import { withTranslation } from 'react-i18next';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';

/** Components */
import CustomSelect from "../../components/custom/custom-select/CustomSelect";
import CustomButton from "../../components/custom/custom-button/CustomButton";

/** Styles */
import "../../styles/calculate.scss";

/** Contexts */
import { ServicesContext } from '../../context/services.context';
import { CasesContext } from '../../context/cases.context';

/** Types */
import { TServiceCase, TCaseDataField } from '../../context/cases.context';

const Calculate = ({ t }: { t: any }) => {
    const [activeCase, setActiveCase] = useState(null as TServiceCase | null);
    const [currentCase, setCurrentCase] = useState({
        title: '',
        data: {
            hours: {
                value: '',
                cost: '',
            },
            employees: {
                value: '',
                cost: '',
            },
            consult: {
                value: '',
                cost: '',
            },
        },
    });

    const {
        services,
        activeService,
        getService,
    } = useContext(ServicesContext);

    const { id } = activeService || {};
    const { serviceId } = useParams();

    const Id = id || serviceId || null;

    const currentService = activeService || getService(Id, services) || null;
    const { title } = currentService || {};

    const {
        servicesCases,
        getServicesCases,
        cases,
        setCases,
        getTotalCost,
    } = useContext(CasesContext);

    useEffect(() => {
        getServicesCases();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentService]);

    useEffect(() => {
        const aCase = servicesCases
            .find((cs: TServiceCase) => cs.title === title) || null;

        setActiveCase(aCase);
    }, [servicesCases, title]);

    /**
     * Change Current Case
     * @param {string} field
     * @param {TCaseDataField} changedCaseField
     */
    const changeCurrentCase = (field: string, changedCaseField: TCaseDataField): void => {
        console.log('changedCaseField', changedCaseField);
        console.log('currentCase', currentCase);
        setCurrentCase({
            title: title || '',
            data: {
                ...currentCase.data,
                [field]: changedCaseField,
            },
        });
    };

    /**
     * Add Case
     */
    const addCase = (): void => {
        setCases([
            ...cases,
            currentCase,
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
            {activeCase && <div className="calculate--page__form">
                <div className="calculate--page__form-item flex gap-2 align-center">
                    <CustomSelect
                        value={currentCase.data.employees.value}
                        name='value'
                        valueKey='value'
                        placeholder={t('custom.select.placeholder.employees')}
                        items={activeCase.data.employees}
                        onChange={(changedCaseField) => changeCurrentCase('employees', changedCaseField as TCaseDataField)}
                    />
                    {currentCase.data.employees.value && <span>~&nbsp;${currentCase.data.employees.cost}</span>}
                </div>

                <div className="calculate--page__form-item flex gap-2 align-center">
                    <CustomSelect
                        value={currentCase.data.hours.value}
                        name='value'
                        valueKey='value'
                        placeholder={t('custom.select.placeholder.hours')}
                        items={activeCase.data.hours}
                        onChange={(changedCaseField) => changeCurrentCase('hours', changedCaseField as TCaseDataField)}
                    />
                    {currentCase.data.hours.value && <span>~&nbsp;${currentCase.data.hours.cost}</span>}
                </div>

                <div className="calculate--page__form-item flex gap-2 align-center">
                    <CustomSelect
                        value={currentCase.data.consult.value}
                        name='value'
                        valueKey='value'
                        placeholder={t('custom.select.placeholder.consult')}
                        items={activeCase.data.consult}
                        onChange={(changedCaseField) => changeCurrentCase('consult', changedCaseField as TCaseDataField)}
                    />
                    {currentCase.data.consult.value && <span>~&nbsp;${currentCase.data.consult.cost}</span>}
                </div>

                <div className="calculate--page__form-item flex gap-2 align-center justify-end">
                    <strong>{t('total')}:&nbsp;&nbsp;~&nbsp;${getTotalCost(currentCase)}</strong>
                    <CustomButton
                        onClick={addCase}
                    >{t('addtocase')}</CustomButton>
                </div>
            </div>}
        </div>
    )
};

const CalculateTranslated = withTranslation('common')(Calculate)
export default CalculateTranslated;
