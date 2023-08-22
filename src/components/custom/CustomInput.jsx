import { withTranslation } from 'react-i18next';

const CustomInput = ({ onChange, t }) => {
    return (
        <input
            className="custom--input"
            type="search"
            placeholder={t('custom.input.search.placeholder')}
            onChange={onChange}
        />
    );
}

const CustomInputTranslated = withTranslation('common')(CustomInput)
export default CustomInputTranslated;
