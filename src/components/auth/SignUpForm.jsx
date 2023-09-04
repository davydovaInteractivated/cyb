import { withTranslation } from 'react-i18next';
import { useState } from "react";

/** Components */
import CustomInput from "../custom/CustomInput";
import CustomButton from "../custom/CustomButton";
import CustomAlert from '../custom/CustomAlert';

/** Utils */
import {
    createAuthUserWithEmailAndPassword,
    createUserDocFromAuth,
} from "../../utils/firebase";

const SignUpForm = ({ t }) => {
    const [formUp, setFormUp] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [alertProps, setAlertProps] = useState({
        show: false,
        type: 'success',
        message: '',
    });
    const {
        show,
        type,
        message,
    } = alertProps;

    const {
        displayName,
        email,
        password,
        confirmPassword,
    } = formUp;
 
    /**
     * Handle Form Up Change
     * @param {*} event
     */
    const handleFormUpChange = (event) => {
        const {
            name, value,
        } = event.target;

        const newHandle = {
            ...formUp,
            [name]: value,
        };

        setFormUp(newHandle);
    };

    /**
     * Submit Form Up
     */
    const submitFormUp = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) return;

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, {
                displayName,
            });
            setAlertProps({
                show: true,
                type: 'success',
                message: 'U have successfully registered!',
            });
            resetFormUp();
        } catch (error) {
            console.error(error);

            let message = '';
            if (error.code === 'auth/email-already-in-use') message = 'Cannot create User. E-mail already in use.';
            if (error.code === 'auth/weak-password') message = 'Password should be at least 6 characters.';

            setAlertProps({
                show: true,
                type: 'error',
                message,
            });
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
        <form className="auth--form flex f-col gap" onSubmit={submitFormUp}>
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
                <CustomButton type="submit" text={t('form.button.signUp')} />
            </div>

            <CustomAlert
                show={show}
                type={type}
                message={message}
            />
        </form>
    )
};

const SignUpFormTranslated = withTranslation('common')(SignUpForm)
export default SignUpFormTranslated;
