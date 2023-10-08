import React from 'react';
import { withTranslation } from 'react-i18next';

/** Types */
import { TSideCube } from '../base/Aside';

const AsideCube = ({ data, t }: { data: TSideCube[], t: any}) => {
    return (
        <div className="aside--cube">
            {
                data.map((side: TSideCube) => <span
                    key={side.name}
                    className={`aside--cube__side flex align-center justify-center ${side.class}`}
                >{t(`cube.side.${side.name}`)}</span>)
            }
        </div>
    );
};

const AsideCubeTranslated = withTranslation('common')(AsideCube)
export default AsideCubeTranslated;
