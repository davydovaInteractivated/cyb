import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

/** Utils */
import { tableDataToPdf } from '../../utils/download';

/** Styles */
import '../../styles/case.scss';

/** Icons */
import {
    XMarkIcon,
} from '@heroicons/react/24/solid';

/** Contexts */
import { CasesContext } from '../../context/cases.context';
import { SettingsContext } from '../../context/settings.context';

/** Components */
import CustomButton from '../../components/custom/custom-button/CustomButton';

/** Types */
import { TCase, TCaseDataKey, TCaseDataField } from '../../context/cases.context';
import { TDataItem } from '../../ts/types/download';

interface ICaseProps {
    caseItem: TCase,
    caseIndex: number,
    t: any,
};

const Case = ({ caseItem, caseIndex, t }: ICaseProps) => {
    const { title, data } = caseItem || {};
    const { cases, setCases, getTotalCost } = useContext(CasesContext);
    const { activeTheme, themes } = useContext(SettingsContext);
    const colorsFromCurrentTheme = themes.find((th) => th.name === activeTheme)?.colors;
    const { light } = colorsFromCurrentTheme || {};

    /**
     * Delete Case
     */
    const deleteCase = () => {
        console.log('caseIndex', caseIndex);
        const filteredCases = cases
            .filter((_, index) => caseIndex !== index);

        setCases(filteredCases);
    };

    const getDownloadData = () => {
        const dataKeys = Object.keys(caseItem.data);
        const dataValues = Object.values(caseItem.data);

        const data: TDataItem[][] = dataValues
            .map((value: TCaseDataField, index: number) => ([
                {
                    content: dataKeys[index],
                    cellStyle: { paddingLeft: 10 },
                }, {
                    content: value.value,
                    cellStyle: { fill: 'white' },
                }, {
                    content: value.cost,
                    cellStyle: { fill: 'white' },
                }
            ]));

        data.push([{
            content: 'total pre-calculate ˜cost in $',
            cellStyle: {
                paddingLeft: 10,
                color: light,
                weight: 'bold',
            },
        }, {
            content: '-', cellStyle: {},
        }, {
            content: `${getTotalCost(caseItem)}`,
            cellStyle: { weight: 'bold', color: light },
        }]);

        return {
            headers: [[{
                content: 'case params',
                colSpan: 1,
            }, {
                content: 'case values',
                colSpan: 1,
            }, {
                content: 'pre-calculate cost in $',
                colSpan: 1,
            }]],
            // headers: [[{
            //     content: t('case.case_params'),
            //     colSpan: 1,
            // }, {
            //     content: t('case.case_values'),
            //     colSpan: 1,
            // }, {
            //     content: `${t('case.pre-calculate')} ${t('case.cost')} ${t('case.in')} $`,
            //     colSpan: 1,
            // }]],
            data,
        }
    };

    /**
     * Download Case
     */
    const downloadCase = async () => {
        const { data, headers } = getDownloadData();

        tableDataToPdf(
            `${caseItem.title}-case.pdf`,
            'p',
            { data, headers },
        );
    };

    return (
        <div className="case">
            <div className='case--header flex align-center justify-space-b'>
                <h2 className='case--title'>{caseIndex + 1}.&nbsp;
                {
                    <Link to={`/${title}`}>
                        <span style={{textDecoration: 'underline'}}>{title}</span>&nbsp;
                    </Link>
                } {t('case.pre-calculate')} {t('case.case')}</h2>
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
                        <strong>{key}:</strong>&nbsp;&nbsp;{data[key as TCaseDataKey].value}
                        <span>&nbsp;(~&nbsp;${data[key as TCaseDataKey].cost})</span>
                    </div>)
                }
                <div className='case--content__footer w-100 grid gap'>
                    <strong className='case--content__total'>{t('total')}:&nbsp;&nbsp;~&nbsp;${getTotalCost(caseItem)}</strong>
                    <CustomButton
                        className='case--content__download'
                        size='small'
                        onClick={() => downloadCase()}
                    >
                        {t('download')} PDF
                    </CustomButton>
                </div>
            </div>
        </div>
    );
};

const CaseTranslated = withTranslation('common')(Case)
export default CaseTranslated;
