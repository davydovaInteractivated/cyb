import { Fragment } from 'react';

/** Styles */
import '../../styles/serviceRefs.scss';

/** Types */
import { TServiceRef } from '../../context/services.context';

interface IServiceReferenceProps {
    refs: TServiceRef[],
    alt: string,
};

const ServiceReference = ({ refs, alt }: IServiceReferenceProps) => {
    return (
        <Fragment>
            {refs.map((ref) => 
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
            )}
        </Fragment>
    );
};

export default ServiceReference;
