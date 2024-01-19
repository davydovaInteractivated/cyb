import styled from 'styled-components';

/** Types */
import { ICustomAvatarStyledProps } from './CustomAvatar.types';

export const CustomAvatarStyled = styled.div<ICustomAvatarStyledProps>`
  height: 3em;
  width: 3em;
  background: var(--color-light);
  border-radius: var(--main-border-radius);
  opacity: 0.8;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $inverted }) => ($inverted ? 'var(--main-font-inverted)' : 'var(--main-font')};
`;
