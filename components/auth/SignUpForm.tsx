import React, { withTranslation } from 'react-i18next';
import { useState, useContext, ChangeEvent, FormEventHandler } from 'react';

/** Contexts */
import { AlertContext } from '../../context/alert.context';

/** Components */
import CustomInput from '../custom/custom-input/CustomInput';
import CustomButton from '../custom/custom-button/CustomButton';

/** Utils */
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../utils/firebase';

const SignUpForm = ({ t }: { t: any }) => {
  const [formUp, setFormUp] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { setShow, setType, setMessage } = useContext(AlertContext);

  const { displayName, email, password, confirmPassword } = formUp;

  /**
   * Handle Form Up Change
   * @param {*} event
   */
  const handleFormUpChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newHandle = {
      ...formUp,
      [name]: value,
    };

    setFormUp(newHandle);
  };

  /**
   * Submit Form Up
   */
  const submitFormUp: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) return;

    try {
      const data = await createAuthUserWithEmailAndPassword(email, password);
      const { user } = data || {};
      await createUserDocFromAuth(user, {
        displayName,
      });

      /** Set Alert props. */
      setShow(true);
      setType('success');
      setMessage('U have successfully registered!');

      resetFormUp();
    } catch (error) {
      console.error(error);

      const { code } = error as { code: string };

      let message = '';
      if (code === 'auth/email-already-in-use') message = 'Cannot create User. E-mail already in use.';
      if (code === 'auth/weak-password') message = 'Password should be at least 6 characters.';

      /** Set Alert props. */
      setShow(true);
      setType('error');
      setMessage(message);
    }
  };

  /**
   * Reset Form Sign Up
   */
  const resetFormUp = () => {
    setFormUp({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <form className="auth--form w-100 flex f-col gap" onSubmit={submitFormUp}>
      <h3>{t('form.title.signUp')}</h3>
      <CustomInput
        placeholder={t('form.input.placeholder.name')}
        name="displayName"
        type="text"
        value={displayName}
        required
        onChange={(event) => handleFormUpChange(event)}
      />
      <CustomInput
        placeholder={t('form.input.placeholder.email')}
        name="email"
        type="email"
        value={email}
        required
        onChange={(event) => handleFormUpChange(event)}
      />
      <CustomInput
        placeholder={t('form.input.placeholder.password')}
        name="password"
        type="password"
        value={password}
        required
        onChange={(event) => handleFormUpChange(event)}
      />
      <CustomInput
        placeholder={t('form.input.placeholder.confirmPassword')}
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        required
        onChange={(event) => handleFormUpChange(event)}
      />
      <div className="auth--form__submit">
        <CustomButton type="submit">{t('form.button.signUp')}</CustomButton>
      </div>
    </form>
  );
};

const SignUpFormTranslated = withTranslation('common')(SignUpForm);
export default SignUpFormTranslated;
