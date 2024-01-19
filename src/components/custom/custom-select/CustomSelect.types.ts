/** Types */
import { TCustomSize, TCustomItem, TCustomValue } from '../../../ts/types/custom';

export interface ICustomSelectStyledProps {
  $size: TCustomSize;
}

export interface ICustomSelectProps {
  value: TCustomValue;
  size?: TCustomSize;
  placeholder?: string;
  className?: string;
  items: TCustomItem[];
  valueKey?: string;
  name?: string;
  returnObject?: boolean;
  required?: boolean;
  disabled?: boolean;
  onChange: (value: string | TCustomItem) => void;
}
