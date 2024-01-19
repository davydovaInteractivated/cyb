import styled from 'styled-components';

/** Types */
import { ICustomAlertStyledProps } from './CustomAlert.types';

export const CustomAlertStyled = styled.div<ICustomAlertStyledProps>`
  position: fixed;
  width: 22em;
  opacity: 0.9;
  height: fit-content;
  cursor: pointer;
  border-radius: var(--main-border-radius);
  padding: 1em;
  box-shadow: 12px 14px 20px 0px rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
  transition: box-shadow 0.3s ease;

  background: ${({ $type }) => {
    if ($type === 'success') return '#4CAF50';
    if ($type === 'error') return '#BF360C';
    if ($type === 'warning') return '#FFB74D';
    if ($type === 'info') return '#424242';
    return 'none';
  }};

  color: ${({ $type }) => {
    if ($type === 'warning') return '#212121';
    return 'inherit';
  }};

  top: ${({ $top }) => ($top ? '1em!important' : 'unset')};
  bottom: ${({ $bottom }) => ($bottom ? '1em!important' : 'unset')};
  left: ${({ $left }) => ($left ? '-28em' : 'unset')};
  right: ${({ $right }) => ($right ? '-28em' : 'unset')};

  animation: ${({ $right, $left, $show }) => {
    if ($right && $show) return 'showAlertRight .4s forwards';
    if ($left && $show) return 'showAlertLeft .4s forwards';
    return 'unset';
  }};

  &:hover {
    opacity: 1 !important;
    box-shadow: none;
  }

  .custom--alert__icon {
    width: 24px;
  }
`;
