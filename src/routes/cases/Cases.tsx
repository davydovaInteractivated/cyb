import { useContext } from 'react';

/** Styles */
import '../../styles/cases.scss';

/** Components */
import Case from '../case/Case';

/** Contexts */
import { CasesContext } from '../../context/cases.context';

const Cases = () => {
    const {
        cases,
    } = useContext(CasesContext);

    console.log('Cases render', cases);

    return (<div className="cases grid gap-2 w-100">
        {cases.length
            ? cases.map((caseItem, index) => <Case key={index} caseItem={caseItem} caseIndex={index}/>)
            : "U don't have any pre-calculate project"}
    </div>);
};

export default Cases;
