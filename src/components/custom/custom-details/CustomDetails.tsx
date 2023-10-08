import styled from 'styled-components';

const CustomDetailsStyled = styled.details`
    border: 2px solid var(--main-font);
    border-radius: 4px;
    width: 80%;

    &__title {
        display: inline-block;
    }
`;

const CustomSummaryStyled = styled.summary`
    padding: 1em;
    cursor: pointer;
    list-style: none;

    &:hover {
        opacity: .8;
    }
`;

const CustomDetailsContentStyled = styled.div`
    margin: 0 1em 1em;
`;

interface ICustomDetailsProps {
    className?: string,
};

const CustomDetails = ({
    className = '',
}: ICustomDetailsProps) => {
    return (
        <CustomDetailsStyled className={`custom--details w-100 ${className}`}>
            <CustomSummaryStyled className="custom--details__summary">
                <h3>faq #2</h3></CustomSummaryStyled>
            <CustomDetailsContentStyled className="custom--details__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, est. Ex facilis repellat fugiat aut unde vero molestias quo itaque ea earum quis, illum, accusantium, impedit rerum. Enim, quidem omnis?</CustomDetailsContentStyled>
        </CustomDetailsStyled>
    );
};

export default CustomDetails;
