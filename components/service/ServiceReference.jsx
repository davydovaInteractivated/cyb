/** Styles */
import '../../styles/serviceRefs.scss';

const ServiceReference = ({ refs, alt }) => {
    return (
        refs.map((ref) => 
            <a className="service--refs__link"
                key={ref.url}
                href={ref.url}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="service--refs__img w-100"
                    src={require(`../../assets/${ref.src}`)}
                    alt={alt}
                />
            </a>
        )
    );
};

export default ServiceReference;
