import styled, { css } from 'styled-components';

/** Types */
import { ICustomInputStyledProps } from './CustomInput.types';

const SearchCancelBtn = css`
  -webkit-appearance: none;
  height: 1em;
  width: 1em;
  cursor: pointer;
  background: url(/assets/icons/xmark-solid.svg) no-repeat 50% 50%;
  background-size: contain;
  transition: all 0.2s ease;
`;

export const CustomInputStyled = styled.input<ICustomInputStyledProps>`
  background: ${({ $disabled }) => ($disabled ? '#acacac' : 'transparent')};
  border: ${({ $disabled }) => ($disabled ? '1px solid #7f7f7f' : '1px solid var(--main-font)')};
  border-radius: var(--main-border-radius);
  width: 18em;
  height: 2em;
  padding: 2em;
  outline: none;
  color: ${({ $disabled }) => ($disabled ? '#7f7f7f' : 'var(--main-font)')};

  font-size: ${({ $size }) => {
    if ($size === 'small') return '.808rem';
    if ($size === 'large') return '1.12rem';
    return '1rem';
  }};

  opacity: ${({ $disabled }) => ($disabled ? '.4' : '1')};
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'text')};

  &::placeholder {
    color: var(--main-font);
  }

  &::-webkit-search-cancel-button {
    ${SearchCancelBtn}
  }
`;
