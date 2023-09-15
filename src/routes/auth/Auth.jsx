import { withTranslation } from 'react-i18next';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
} from "../../utils/firebase";

/** Components */
import SignInForm from "../../components/auth/SignInForm";
import SignUpForm from "../../components/auth/SignUpForm";

/** Styles */
import "../../styles/auth.scss";

const Auth = ({ t }) => {
    useEffect(() => {
        getRedirect();
    }, []);

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
        await signInWithGooglePopup();
        goToHome();
    };

    return (
        <div className="auth w-100 grid gap-2">
            <div className="auth--btns flex f-col gap">
                <h3>{t('form.title.signInWith')}</h3>
                <button
                    className="custom--button filled font-inverted"
                    onClick={signInWithGoogle}
                >{t('form.button.signInWith')}&nbsp;<strong className='font-inverted'>Google</strong></button>
            </div>
            <SignInForm />
            <SignUpForm />
        </div>
    )
};

const AuthTranslated = withTranslation('common')(Auth)
export default AuthTranslated;
