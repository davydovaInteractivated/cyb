import React from 'react';

/** Styled-components */
import { CustomDetailsContentStyled, CustomDetailsStyled, CustomSummaryStyled } from './CustomDetails.styled';

/** Types */
import { ICustomDetailsProps } from './CustomDetails.types';

const CustomDetails = ({ className = '' }: ICustomDetailsProps) => {
  return (
    <CustomDetailsStyled className={`custom--details w-100 ${className}`}>
      <CustomSummaryStyled className="custom--details__summary">
        <h3>faq #2</h3>
      </CustomSummaryStyled>
      <CustomDetailsContentStyled className="custom--details__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, est. Ex facilis repellat fugiat aut unde vero
        molestias quo itaque ea earum quis, illum, accusantium, impedit rerum. Enim, quidem omnis?
      </CustomDetailsContentStyled>
    </CustomDetailsStyled>
  );
};

export default CustomDetails;
