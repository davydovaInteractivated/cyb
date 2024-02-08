import { withTranslation } from 'react-i18next';
import React from 'react';

/** Styles */
// import '../../styles/services.scss';

/** Components */
// import Service from '../../components/services/Service';
// import NavFilters from '../../components/base/nav/NavFilters';

/** Contexts */
// import { ServicesContext } from '../../context/services.context';

const Works = ({ t }: { t: any }) => {
  //   const { filteredServices, searchValue } = useContext(ServicesContext);

  return <div className="works w-100 flex f-col gap-2">Works</div>;
};

const WorksTranslated = withTranslation('common')(Works);
export default WorksTranslated;
