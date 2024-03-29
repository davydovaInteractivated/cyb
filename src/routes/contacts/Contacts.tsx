import React, { useState, useRef, useEffect } from 'react';
import { withTranslation } from 'react-i18next';

/** Components */
import CustomInput from '../../components/custom/custom-input/CustomInput';
import CustomButton from '../../components/custom/custom-button/CustomButton';

/** Icons */
import { MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';

/** Styles */
import '../../styles/contacts.scss';

const Contacts = ({ t }: { t: any }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');

  const inputNameEl = useRef(document.querySelector('.name'));

  useEffect(() => {
    inputNameEl.current = document.querySelector('.name');
    (inputNameEl.current as HTMLInputElement)?.focus();
  }, []);

  /**
   * Send Form
   */
  const send = () => {
    const params = {
      name,
      phone,
      mail,
    };
    console.log('send form', params);
  };

  return (
    <div className="contacts w-100 grid gap-2">
      <form className="contacts--form flex f-col align-end gap">
        <h3 className="contacts--form__title">{t('form.title.contacts')}</h3>
        <CustomInput
          value={name}
          ref={inputNameEl}
          className="contacts--form__item name"
          type="text"
          placeholder={t('form.input.placeholder.name')}
          onChange={(e) => setName(e.target.value)}
        />
        <CustomInput
          value={phone}
          // ref={inputPhoneEl}
          className="contacts--form__item phone"
          type="text"
          placeholder={t('form.input.placeholder.phone')}
          onChange={(e) => setPhone(e.target.value)}
        />
        <CustomInput
          value={mail}
          // ref={inputMailEl}
          className="contacts--form__item mail"
          type="text"
          placeholder={t('form.input.placeholder.email')}
          onChange={(e) => setMail(e.target.value)}
        />
        <CustomButton className="contacts--form__submit" onClick={send}>
          {t('form.button.send')}
        </CustomButton>
      </form>
      <div className="contacts--map flex gap f-col">
        <div className="contacts--address flex gap f-col">
          <div className="flex align-center gap">
            <PhoneIcon className="contacts--form__icon" />
            <p>
              <strong>+86 10 6764 5489</strong>
            </p>
          </div>
          <div className="flex align-center gap">
            <MapPinIcon className="contacts--form__icon" />
            <p>
              <strong>Diaotai Neighborhood </strong>
              钓台 Qindu District, Сяньян, Шеньсі China 712099
            </p>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24067.479066256474!2d108.68189404520994!3d34.30019879815902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x366383670d4b99e1%3A0x85f132342b1ee247!2zRGlhb3RhaSBOZWlnaGJvcmhvb2QsIFFpbmR1IERpc3RyaWN0LCDQodGP0L3RjNGP0L0sINCo0LXQvdGM0YHRliwg0JrQuNGC0LDQuSwgNzEyMDk5!5e1!3m2!1suk!2sru!4v1693220643686!5m2!1suk!2sru"
          width="auto"
          height="202"
          style={{ border: 0, borderRadius: '4px' }}
          allowFullScreen={undefined}
          title="map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

const ContactsTranslated = withTranslation('common')(Contacts);
export default ContactsTranslated;
