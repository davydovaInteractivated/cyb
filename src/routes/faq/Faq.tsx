import React from 'react';
/** Styles */
import '../../styles/faq.scss';

/** Components */
import CustomDetails from '../../components/custom/custom-details/CustomDetails';

const Faq = () => {
  return (
    <div className="faq w-100">
      <h1 className="faq--title">faq</h1>
      <div className="faq--details grid gap">
        <CustomDetails />
        <CustomDetails />
        <CustomDetails />
      </div>
    </div>
  );
};

export default Faq;
