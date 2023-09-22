/** Styles */
import '../../styles/faq.scss';

import styled from 'styled-components';

const CustomDetailsStyled = styled.details`
    border: 1px solid var(--main-font);
    border-radius: 4px;
    width: 80%;
`;

const CustomDetailsSummaryStyled = styled.summary`
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

const Faq = () => {
    return (<div className="faq w-100">
        <h1 className="faq--title">faq</h1>
        <div className='faq--details grid gap'>
            <CustomDetailsStyled className="w-100">
                <CustomDetailsSummaryStyled>
                    <h3>faq #1</h3></CustomDetailsSummaryStyled>
                <CustomDetailsContentStyled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis voluptatem quis minus dolorem beatae labore consequuntur illum officia exercitationem incidunt aperiam nisi, culpa ad molestiae debitis quisquam accusamus neque!</CustomDetailsContentStyled>
            </CustomDetailsStyled>
            <CustomDetailsStyled className="w-100">
                <CustomDetailsSummaryStyled>
                    <h3>faq #2</h3></CustomDetailsSummaryStyled>
                <CustomDetailsContentStyled>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, est. Ex facilis repellat fugiat aut unde vero molestias quo itaque ea earum quis, illum, accusantium, impedit rerum. Enim, quidem omnis?</CustomDetailsContentStyled>
            </CustomDetailsStyled>
            <CustomDetailsStyled className="w-100">
                <CustomDetailsSummaryStyled>
                    <h3>faq #3</h3></CustomDetailsSummaryStyled>
                <CustomDetailsContentStyled>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, sequi fugit eos natus assumenda eum cum ipsam perspiciatis, impedit blanditiis sed beatae, provident fugiat aperiam atque cupiditate expedita commodi voluptates.</CustomDetailsContentStyled>
            </CustomDetailsStyled>
        </div>
    </div>);
}

export default Faq;
