import { withTranslation } from 'react-i18next';
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocFromAuth,
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
        const response = await getRedirectResult(auth);
        if (response) {
            const { user } = response;
            await createUserDocFromAuth(user);
        }
    }

    /**
     * Sign In With "Google"
     */
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
    };

    return (
        <div className="auth w-100 grid gap-2">
            <div className="auth--btns flex f-col gap">
                <h3>{t('form.title.signInWith')}</h3>
                <button
                    className="custom--button"
                    onClick={signInWithGoogle}
                >{t('form.button.signInWith')}&nbsp;<strong>Google</strong></button>
            </div>
            <SignInForm />
            <SignUpForm />
        </div>
    )
};

const AuthTranslated = withTranslation('common')(Auth)
export default AuthTranslated;
