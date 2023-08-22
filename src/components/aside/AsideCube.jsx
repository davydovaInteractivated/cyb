import { withTranslation } from 'react-i18next';

const AsideCube = ({ data, t }) => {
    return (
        <div className="aside--cube">
            {
                data.map((side) => <span
                    key={side.name}
                    className={`aside--cube__side flex align-center justify-center ${side.class}`}
                >{t(`cube.side.${side.name}`)}</span>)
            }
        </div>
    );
};

const AsideCubeTranslated = withTranslation('common')(AsideCube)
export default AsideCubeTranslated;
