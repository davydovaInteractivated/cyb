import { useState } from 'react';
import { withTranslation } from 'react-i18next';
import styled from 'styled-components';

type TSideCube = {
    name: string,
    class: string,
};

const CubeStyled = styled.div<{
    $speed?: 'normal' | 'fast',
    $size?: 'small' | 'medium',
    $animationType?: 'linear' | 'ease-in-out',
    $type?: 'default' | 'loader',
}>`
    width: 4em;
    height: 4em;
    color: var(--color-light);
    transform-style: preserve-3d;
    animation: ${({
        $speed,
        $animationType
    }) => {
        if ($speed === 'fast') return `8s rotateCube infinite ${$animationType}`
        return `18s rotateCube infinite ${$animationType}`;
    }};
    user-select: none;

    &:hover {
        animation-play-state: paused;
    }

    .cube--side {
        position: absolute;
        width: ${({
            $size,
        }) => {
            if ($size === 'small') return '22px';
            return '60px';
        }};
        height: ${({
            $size,
        }) => {
            if ($size === 'small') return '22px';
            return '60px';
        }};
        font-size: 10px;
        left: 0;
        background: ${({
            $type,
        }) => {
            if ($type === 'loader') return 'transparent';
            return 'var(--color-dark)';
        }};
        border: 1px solid var(--color-light);
        border-radius: var(--main-border-radius);
        color: var(--main-font);

        &__back {
            transform: ${({
                $size,
            }) => {
                if ($size === 'small') return 'translateZ(-12px) rotateX(180deg)';
                return 'translateZ(-32px) rotateX(180deg)';
            }};
        }
        &__front {
            transform: ${({
                $size,
            }) => {
                if ($size === 'small') return 'translateZ(12px)';
                return 'translateZ(32px)';
            }};
        }
        &__top {
            transform: ${({
                $size,
            }) => {
                if ($size === 'small') return 'translateY(-12px) rotateX(90deg)';
                return 'translateY(-32px) rotateX(90deg)';
            }};
        }
        &__bottom {
            transform: ${({
                $size,
            }) => {
                if ($size === 'small') return 'translateY(12px) rotateX(-90deg)';
                return 'translateY(32px) rotateX(-90deg)';
            }};
        }
        &__left {
            transform: ${({
                $size,
            }) => {
                if ($size === 'small') return 'translateX(-12px) rotateY(-90deg)';
                return 'translateX(-32px) rotateY(-90deg)';
            }};
        }
        &__right {
            transform: ${({
                $size,
            }) => {
                if ($size === 'small') return 'translateX(12px) rotateY(90deg)';
                return 'translateX(32px) rotateY(90deg)';
            }};
        }
    }
`;

const Cube = ({
    type = 'default',
    animationType = 'ease-in-out',
    speed = 'normal',
    size = 'medium',
    showText = false,
    className = '', t
}: {
    type?: 'default' | 'loader',
    animationType?: 'linear' | 'ease-in-out',
    speed?: 'normal' | 'fast',
    size?: 'small' | 'medium',
    showText?: boolean,
    className?: string, t: any,
}) => {
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
        <CubeStyled
            className={`cube ${className}`}
            $type={type}
            $animationType={animationType}
            $speed={speed}
            $size={size}
        >
            {
                cubeData.map((side: TSideCube) => <span
                    key={side.name}
                    className={`cube--side flex align-center justify-center ${side.class}`}
                >{showText && t(`cube.side.${side.name}`)}</span>)
            }
        </CubeStyled>
    );
};

const CubeTranslated = withTranslation('common')(Cube)
export default CubeTranslated;
