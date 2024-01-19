import { TCustomType } from '../../../ts/types/custom';

export interface ICustomAlertStyledProps {
  $type: TCustomType;
  $top: boolean;
  $bottom: boolean;
  $left: boolean;
  $right: boolean;
  $show: boolean;
}

export interface ICustomAlertProps {
  type: TCustomType;
  show: boolean;
  title?: string;
  message?: string;
  hideDelay?: number | string; // (ms)
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
}
