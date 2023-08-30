import { withTranslation } from 'react-i18next';
import { useState } from "react";

/** Components */
import CustomInput from "../custom/CustomInput";
import CustomButton from "../custom/CustomButton";

/** Utils */
import {
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

const SignInForm = ({ t }) => {
    const [formIn, setFormIn] = useState({
        email: '',
        password: '',
    });

    const {
        email,
        password,
    } = formIn;
 
    /**
     * Handle Form In Change
     * @param {*} event
     */
    const handleFormInChange = (event) => {
        const {
            name, value,
        } = event.target;

        const newHandle = {
            ...formIn,
            [name]: value,
        };

        setFormIn(newHandle);
    };

    /**
     * Submit Form In
     */
    const submitFormIn = async (event) => {
        event.preventDefault();
        if (!email || !password) return;

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            resetFormIn();
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/wrong-password') alert('Wrong password. Please, try again.');
            if (error.code === 'auth/user-not-found') alert('User not found.');
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
        <form className="auth--form flex f-col gap" onSubmit={submitFormIn}>
            <strong>{t('form.title.signIn')}</strong>
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
                <CustomButton type="submit" text={t('form.button.signIn')} />
            </div>
        </form>
    )
};

const SignInFormTranslated = withTranslation('common')(SignInForm)
export default SignInFormTranslated;
