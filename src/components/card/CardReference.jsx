/** Styles */
import '../../styles/cardRefs.scss';

const CardReference = ({ refs, alt }) => {
    return (
        refs.map((ref) => 
            <a className="card--refs__link"
                key={ref.url}
                href={ref.url}
                target="_blank"
                rel="noreferrer"
            >
                <img
                    className="card--refs__img w-100"
                    src={require(`../../assets/${ref.src}`)}
                    alt={alt}
                />
            </a>
        )
    );
};

export default CardReference;
