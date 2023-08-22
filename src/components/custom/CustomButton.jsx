import { withTranslation } from 'react-i18next';

const CustomButton = ({ onClick, t }) => {
    return (
        <button
            className="custom--button"
            type="button"
            onClick={onClick}
        >{t('custom.button.card.text')}</button>
    );
}

const CustomButtonTranslated = withTranslation('common')(CustomButton)
export default CustomButtonTranslated;
