/** Types */
import { ChangeEventHandler, FocusEventHandler } from 'react';
import { TCustomSize, TCustomValue } from '../../../ts/types/custom';

export interface ICustomInputStyledProps {
  $disabled: boolean;
  $size: TCustomSize;
}

export interface ICustomInputProps {
  className?: string;
  type?: string;
  size?: TCustomSize;
  placeholder?: string;
  name?: string;
  value: TCustomValue;
  required?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}
