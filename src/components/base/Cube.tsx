import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';

type TSideCube = {
    name: string,
    class: string,
};

const CubeStyled = styled.div`
    width: 4em;
    height: 4em;
    margin-left: 20px;
    margin-bottom: 4em;
    color: var(--color-light);
    transform-style: preserve-3d;
    animation: 18s rotateCube infinite ease-in-out;
    user-select: none;

    &:hover {
        animation-play-state: paused;
    }

    .cube--side {
        position: absolute;
        width: 60px;
        height: 60px;
        font-size: 10px;
        left: 0;
        background: var(--color-dark);
        border: 1px solid var(--color-light);
        border-radius: var(--main-border-radius);
        color: var(--main-font);

        &__back {
            transform: translateZ(-32px) rotateX(180deg);
        }
        &__front {
            transform: translateZ(32px);
        }
        &__top {
            transform: translateY(-32px) rotateX(90deg);
        }
        &__bottom {
            transform: translateY(32px) rotateX(-90deg);
        }
        &__left {
            transform: translateX(-32px) rotateY(-90deg);
        }
        &__right {
            transform: translateX(32px) rotateY(90deg);
        }
    }
`;

const Cube = ({ t }: { t: any}) => {
    const [cubeData] = useState<TSideCube[]>([{
        name: 'tech',
        class: 'cube--side__back',
    }, {
        name: 'app',
        class: 'cube--side__left',
    }, {
        name: 'web',
        class: 'cube--side__right',
    }, {
        name: 'mobile',
        class: 'cube--side__top',
    }, {
        name: 'soft',
        class: 'cube--side__bottom',
    }, {
        name: 'support',
        class: 'cube--side__front',
    }]);

    return (
        <CubeStyled className="cube">
            {
                cubeData.map((side: TSideCube) => <span
                    key={side.name}
                    className={`cube--side flex align-center justify-center ${side.class}`}
                >{t(`cube.side.${side.name}`)}</span>)
            }
        </CubeStyled>
    );
};

const CubeTranslated = withTranslation('common')(Cube)
export default CubeTranslated;
