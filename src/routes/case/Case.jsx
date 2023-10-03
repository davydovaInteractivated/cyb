import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

/** Styles */
import '../../styles/case.scss';

/** Icons */
import {
    XMarkIcon,
} from '@heroicons/react/24/solid';

/** Contexts */
import { CasesContext } from '../../context/cases.context';

/** Components */
import CustomButton from '../../components/custom/custom-button/CustomButton';

const Case = ({ caseItem, caseIndex, t }) => {
    const { title, data } = caseItem || {};
    const { cases, setCases } = useContext(CasesContext);

    /**
     * Delete Case
     */
    const deleteCase = () => {
        console.log('caseIndex', caseIndex);
        const filteredCases = cases
            .filter((_, index) => caseIndex !== index);

        setCases(filteredCases);
    };

    return (
        <div className="case">
            <div className='case--header flex align-center justify-space-b'>
                <h2 className='case--title'>{caseIndex + 1}.&nbsp;
                {
                    <Link to={`/${title}`}>
                        <span style={{textDecoration: 'underline'}}>{title}</span>&nbsp;
                    </Link>
                } pre-calculate case</h2>
                <CustomButton
                    icon
                    onClick={() => deleteCase()}
                >
                    <XMarkIcon className='case--delete__icon' />
                </CustomButton>
            </div>
            <div className='case--content grid gap'>
                {
                    Object.keys(data).map((key) => <div key={key} className="case--content__field">
                        <strong>{key}:</strong>&nbsp;&nbsp;{data[key].name}
                        <span>&nbsp;(~&nbsp;${data[key].cost})</span>
                    </div>)
                }
                <strong className='case--total'>{t('total')}:&nbsp;&nbsp;~&nbsp;${520}</strong>
            </div>
        </div>
    );
};

const CaseTranslated = withTranslation('common')(Case)
export default CaseTranslated;
