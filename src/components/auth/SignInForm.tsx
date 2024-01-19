import React, { withTranslation } from 'react-i18next';
import { useState, useContext, ChangeEvent, FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

/** Components */
import CustomInput from '../custom/custom-input/CustomInput';
import CustomButton from '../custom/custom-button/CustomButton';

/** Utils */
import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase';

/** Contexts */
import { AlertContext } from '../../context/alert.context';

const SignInForm = ({ t }: { t: any }) => {
  const [formIn, setFormIn] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { email, password } = formIn;

  const { setShow, setType, setMessage } = useContext(AlertContext);

  const navigate = useNavigate();
  const goToHome = () => navigate('/');

  /**
   * Handle Form In Change
   * @param {*} event
   */
  const handleFormInChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const newHandle = {
      ...formIn,
      [name]: value,
    };

    setFormIn(newHandle);
  };

  /**
   * Submit Form In
   */
  const submitFormIn: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!email || !password) return;

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      /** Set Alert props. */
      setShow(true);
      setType('success');
      setMessage('U have successfully signed in!');

      resetFormIn();
      goToHome();
    } catch (error) {
      console.error(error);
      const { code } = error as { code: string };

      let message = '';
      if (code === 'auth/wrong-password') message = 'Wrong password. Please, try again.';
      if (code === 'auth/user-not-found') message = 'User not found.';

      /** Set Alert props. */
      setShow(true);
      setType('error');
      setMessage(message);
    }
  };

  /**
   * Reset Form Sign In
   */
  const resetFormIn = () => {
    setFormIn({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <form className="auth--form w-100 flex f-col gap" onSubmit={submitFormIn}>
      <h3>{t('form.title.signIn')}</h3>
      <CustomInput
        placeholder={t('form.input.placeholder.email')}
        name="email"
        type="email"
        value={email}
        required
        onChange={(event) => handleFormInChange(event)}
      />
      <CustomInput
        placeholder={t('form.input.placeholder.password')}
        name="password"
        type="password"
        value={password}
        required
        onChange={(event) => handleFormInChange(event)}
      />
      <div className="auth--form__submit">
        <CustomButton type="submit">{t('form.button.signIn')}</CustomButton>
      </div>
    </form>
  );
};

const SignInFormTranslated = withTranslation('common')(SignInForm);
export default SignInFormTranslated;
