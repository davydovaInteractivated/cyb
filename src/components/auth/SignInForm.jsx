import { withTranslation } from 'react-i18next';
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

/** Components */
import CustomInput from "../custom/CustomInput";
import CustomButton from "../custom/CustomButton";
import CustomAlert from '../custom/CustomAlert';

/** Utils */
import {
    signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

/** Contexts */
import { UserContext } from '../../context/user.context';

const SignInForm = ({ t }) => {
    const { userData, setUser, setUserData } = useContext(UserContext);

    const [formIn, setFormIn] = useState({
        email: '',
        password: '',
    });
    const {
        email,
        password,
    } = formIn;

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

    const navigate = useNavigate();
    const goToHome = () => navigate('/');
 
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
            setAlertProps({
                show: true,
                type: 'success',
                message: 'U have successfully signed in!',
            });
            setUserData({
                ...userData,
                displayName: user.displayName,
                email: user.email,
                phone: user.phone,
            });
            setUser(user);
            resetFormIn();
            goToHome();
        } catch (error) {
            console.error(error);

            let message = '';
            if (error.code === 'auth/wrong-password') message = 'Wrong password. Please, try again.';
            if (error.code === 'auth/user-not-found') message = 'User not found.';

            setAlertProps({
                show: true,
                type: 'error',
                message,
            });
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
                <CustomButton type="submit" text={t('form.button.signIn')} />
            </div>

            <CustomAlert
                show={show}
                type={type}
                message={message}
                hideAlert={() => setAlertProps({show: false})}
            />
        </form>
    )
};

const SignInFormTranslated = withTranslation('common')(SignInForm)
export default SignInFormTranslated;
