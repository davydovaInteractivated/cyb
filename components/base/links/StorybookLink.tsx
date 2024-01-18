import styled from 'styled-components';

/** Icons */
import {
    // Cog6ToothIcon,
    ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid';

const StorybookLinkStyled = styled.a<{ $inverted?: boolean }>`
    color: ${({ $inverted }) => {
        if ($inverted) return 'var(--main-font-inverted)';
        return 'var(--main-font)';
    }};
    transition: opacity .2s ease;

    &:hover {
        opacity: .6;
    }
    .link--icon {
        height: 20px;
    }
`;

const StorybookLink = ({ inverted = false }: { inverted?: boolean }) => {
    return (
        <StorybookLinkStyled
            className='link flex align-center fit-content'
            href='https://davydovainteractivated.github.io/cyb/'
            target='_blank'
            rel='noreferrer'
            $inverted={inverted}
        >
            storybook&nbsp;
            <ArrowTopRightOnSquareIcon className='link--icon' />
        </StorybookLinkStyled>
    );
};

export default StorybookLink;
