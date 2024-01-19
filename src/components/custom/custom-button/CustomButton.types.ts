/** Types */
import { MouseEventHandler } from 'react';
import { TCustomSize } from '../../../ts/types/custom';

export interface IStyledCustomButtonProps {
  $filled: boolean;
  $inverted: boolean;
  $disabled: boolean;
  $icon: boolean;
  $size: TCustomSize;
}

export interface ICustomButtonProps {
  size?: TCustomSize;
  disabled?: boolean;
  filled?: boolean;
  inverted?: boolean;
  icon?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
