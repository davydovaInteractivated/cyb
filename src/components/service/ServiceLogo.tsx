/** Styles */
import '../../styles/serviceRefs.scss';

/** Types */
import { TServiceLogo } from '../../context/services.context';

interface IServiceLogoProps {
    logos: TServiceLogo[],
};

const ServiceLogo = ({ logos }: IServiceLogoProps) => {
    return (
        <>
            {logos.map((logo) =>
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                <a className="service--refs__link"
                    key={logo.src}
                    href={logo.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                        backgroundImage: `url(${require(`../../assets/logos/${logo.src}`)})`,
                        height: '4.8em',
                    }} />
                )}
        </>
    );
};

export default ServiceLogo;
