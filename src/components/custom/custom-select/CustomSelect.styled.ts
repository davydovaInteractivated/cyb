import { PropsWithChildren } from 'react';
import styled from 'styled-components';

/** Types */
import { ICustomSelectStyledProps } from './CustomSelect.types';

export const CustomSelectStyled = styled.div<PropsWithChildren<ICustomSelectStyledProps>>`
  position: relative;
  font-size: ${({ $size }) => {
    if ($size === 'small') return '.808rem';
    if ($size === 'large') return '1.12rem';
    return '1rem';
  }};
`;

export const CustomSelectOptionsStyled = styled.div`
  position: absolute;
  z-index: 999;
`;

export const CustomSelectOptionsListStyled = styled.ul`
  background-color: var(--color-dark);
  box-shadow: 12px 14px 20px 0px rgba(0, 0, 0, 0.2);
  padding: 0.6em 0;
  border-radius: var(--main-border-radius);
  margin-top: 0.6em;
  transition: all 0.2s ease;
`;

export const CustomSelectOptionsListItemStyled = styled.li`
  font-family: 'Poppins', sans-serif;
  padding: 0.4em 1em;
  cursor: pointer;
  color: var(--main-font);
  transition: background-color 0.2s ease;

  &:hover:not(.empty) {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &.active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  &.empty {
    cursor: default;
    font-size: 0.8rem;
  }

  &:hover > ${CustomSelectOptionsListStyled} {
    background-color: pink;
  }
`;
