import React from 'react';

/** Styles */
import '../../styles/serviceRefs.scss';

/** Types */
import { TServiceLogo } from '../../context/services.context';

interface IServiceLogoProps {
  logos: TServiceLogo[];
}

const ServiceLogo = ({ logos }: IServiceLogoProps) => {
  return (
    <>
      {logos.map((logo) => (
        <a
          className="service--refs__link"
          key={logo.src}
          href={logo.url}
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundImage: `url(${require(`../../assets/logos/${logo.src}`)})`,
            height: '4.8em',
          }}
        />
      ))}
    </>
  );
};

export default ServiceLogo;
