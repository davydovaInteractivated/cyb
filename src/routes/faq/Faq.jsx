/** Styles */
import '../../styles/faq.scss';

const Faq = () => {
    return (<div className="faq w-100">
        <h1 className="faq--title">faq</h1>
        <div className='faq--details grid gap'>
            <details className="custom--details w-100">
                <summary className="custom--details__summary">
                    <h3>faq #1</h3></summary>
                <div className="custom--details__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia perferendis voluptatem quis minus dolorem beatae labore consequuntur illum officia exercitationem incidunt aperiam nisi, culpa ad molestiae debitis quisquam accusamus neque!</div>
            </details>
            <details className="custom--details w-100">
                <summary className="custom--details__summary">
                    <h3>faq #2</h3></summary>
                <div className="custom--details__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, est. Ex facilis repellat fugiat aut unde vero molestias quo itaque ea earum quis, illum, accusantium, impedit rerum. Enim, quidem omnis?</div>
            </details>
            <details className="custom--details w-100">
                <summary className="custom--details__summary">
                    <h3>faq #3</h3></summary>
                <div className="custom--details__content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, sequi fugit eos natus assumenda eum cum ipsam perspiciatis, impedit blanditiis sed beatae, provident fugiat aperiam atque cupiditate expedita commodi voluptates.</div>
            </details>
        </div>
    </div>);
}

export default Faq;
