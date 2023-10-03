/** Styles */
import './custom-details.scss';

const CustomDetails = ({
    className = '',
}) => {
    return (
        <details className={`custom--details w-100 ${className}`}>
            <summary className="custom--details__summary">
                <h3>faq #2</h3></summary>
            <div className="custom--details__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, est. Ex facilis repellat fugiat aut unde vero molestias quo itaque ea earum quis, illum, accusantium, impedit rerum. Enim, quidem omnis?</div>
        </details>
    );
};

export default CustomDetails;
