import React, { PropsWithChildren } from 'react';

/** Styled-components */
import { StyledCustomButton } from './CustomButton.styled';

/** Types */
import { ICustomButtonProps } from './CustomButton.types';

const CustomButton = ({
  className = '',
  type = 'button',
  size = 'medium',
  disabled = false,
  filled = false,
  inverted = false,
  icon = false,
  children = 'more',
  onClick,
}: PropsWithChildren<ICustomButtonProps>) => (
  <StyledCustomButton
    className={`custom--button ${className}`}
    $size={size}
    $filled={filled}
    $inverted={inverted}
    $disabled={disabled}
    $icon={icon}
    type={type}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </StyledCustomButton>
);

export default CustomButton;
