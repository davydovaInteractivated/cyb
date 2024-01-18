import { withTranslation } from 'react-i18next';
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getRedirectResult } from "firebase/auth";

/** Contexts */
import { AlertContext } from '../../context/alert.context';

import {
    auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
} from "../../utils/firebase";

/** Components */
import CustomButton from '../../components/custom/custom-button/CustomButton';
import SignInForm from "../../components/auth/SignInForm";
import SignUpForm from "../../components/auth/SignUpForm";

/** Styles */
import "../../styles/auth.scss";

const Auth = ({ t }: { t: any }) => {
    useEffect(() => {
        getRedirect();
    }, []);

    const {
        setShow,
        setType,
        setMessage,
    } = useContext(AlertContext);

    /**
     * Get Redirect Response
     */
    const getRedirect = async () => {
        await getRedirectResult(auth);
    }

    const navigate = useNavigate();
    const goToHome = () => navigate('/');

    /**
     * Sign In With "Google"
     */
    const signInWithGoogle = async () => {
        try {
            await signInWithGooglePopup();

            /** Set Alert props. */
            setShow(true);
            setType('success');
            setMessage('U have successfully signed in with Google!');

            goToHome();
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

    return (
        <div className="auth w-100 grid gap-2">
            <div className="auth--btns flex f-col gap">
                <h3>{t('form.title.signInWith')}</h3>
                <CustomButton
                    className='w-100'
                    filled
                    inverted
                    onClick={signInWithGoogle}
                >{t('form.button.signInWith')}&nbsp;<strong>Google</strong></CustomButton>
            </div>
            <SignInForm />
            <SignUpForm />
        </div>
    )
};

const AuthTranslated = withTranslation('common')(Auth)
export default AuthTranslated;
