import { Link, useNavigate } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import React, { useContext } from 'react';

/** Styles */
import '../../styles/card.scss';

/** Icons */
import { BookmarkIcon, CalculatorIcon } from '@heroicons/react/24/solid';

/** Components */
import CustomButton from '../custom/custom-button/CustomButton';
import ServiceLogo from '../service/ServiceLogo';

/** Contexts */
import { ServicesContext, TService } from '../../context/services.context';
import { SettingsContext, TLangsKeys } from '../../context/settings.context';

interface IServiceProps {
  service: TService;
  index: number;
  t: any;
}

const Service = ({ service, t }: IServiceProps) => {
  const { markService, setActiveService } = useContext(ServicesContext);
  const { activeLang } = useContext(SettingsContext);

  const { id, title, description, logos, is_marked } = service;

  const navigate = useNavigate();
  const goToCalculate = () => navigate(`/${id}/calculate`);

  return (
    <div className="card">
      <div className="card--wrapper h-100 flex f-col gap-3 align-start justify-space-b">
        <div>
          <h2 className="card--wrapper__title">{title[activeLang as TLangsKeys]}</h2>
          <p className="card--wrapper__text">{description}</p>
        </div>
        {logos.length > 0 && (
          <div className="card--wrapper__reference grid grid-gap w-100">
            <ServiceLogo logos={logos} />
          </div>
        )}
        <div className="card--wrapper__buttons flex align-center justify-space-b w-100">
          <Link to={`/${id}`}>
            <CustomButton onClick={() => setActiveService(service)}>{t('custom.button.card.text')}</CustomButton>
          </Link>
          <div className="flex gap">
            <CustomButton icon onClick={() => markService(!is_marked, id)}>
              <BookmarkIcon
                className={
                  is_marked
                    ? 'card--wrapper__icon card--wrapper__icon-bookmark marked'
                    : 'card--wrapper__icon card--wrapper__icon-bookmark'
                }
              />
            </CustomButton>
            <CustomButton icon onClick={goToCalculate}>
              <CalculatorIcon className="card--wrapper__icon" />
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceTranslated = withTranslation('common')(Service);
export default ServiceTranslated;
