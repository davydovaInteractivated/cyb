import React, { useContext } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import styled from 'styled-components';

/** Components */
import Setting from './settings/Setting';
/** Contexts */
import { SettingsContext } from '../../context/settings.context';

const SettingsStyled = styled.div<{ $align?: string; $inverted?: boolean }>`
  color: ${({ $inverted }) => {
    if ($inverted) return 'var(--main-font-inverted)';
    return 'var(--main-font)';
  }};

  .settings__title {
    user-select: none;
  }

  .settings__block {
    margin-bottom: 1.4em;
    align-items: ${({ $align }) => $align};
  }
`;

const Settings = ({
  className = '',
  align = 'start',
  inverted = false,
  t,
}: {
  className?: string;
  align?: string;
  inverted?: boolean;
  t: any;
}) => {
  const { i18n }: any = useTranslation('common');
  const { themes, langs, activeTheme, activeLang, selectLang, selectTheme } = useContext(SettingsContext);

  return (
    <SettingsStyled className={`settings ${className}`} $align={align} $inverted={inverted}>
      <h3 className="settings__title">{t('settings.theme')}</h3>
      <div className="settings__block flex f-col fit-content">
        {themes.map((theme) => (
          <Setting key={theme.name} item={theme} activeItem={activeTheme} inverted selectItem={selectTheme} />
        ))}
      </div>

      <h3 className="settings__title">{t('settings.lang')}</h3>
      <div className="settings__block flex f-col">
        {langs.map((ln) => (
          <Setting
            key={ln.name}
            item={ln}
            activeItem={activeLang}
            inverted
            selectItem={() => {
              i18n.changeLanguage(ln.name);
              selectLang(ln);
            }}
          />
        ))}
      </div>
    </SettingsStyled>
  );
};

const SettingsTranslated = withTranslation('common')(Settings);
export default SettingsTranslated;
