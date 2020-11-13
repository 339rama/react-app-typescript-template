import React, { ReactChild } from 'react';
import { ButtonProps } from 'react-bootstrap';
import { StyledButton } from './styles';

type ButtonThemes =
  | 'brand'
  | 'brand-outline'
  | 'secondary'
  | 'dark'
  | 'transparent';

const themesVariants: Record<ButtonThemes, string> = {
  brand: 'danger',
  'brand-outline': 'outline-dark',
  secondary: 'secondary',
  dark: 'dark',
  transparent: 'transparent',
};

export type UDButtonProps = {
  label?: string;
  children?: ReactChild | ReactChild[];
  theme?: ButtonThemes;
  hasIcon?: boolean;
} & ButtonProps;

const UDButton = (props: UDButtonProps) => {
  const { label, theme = 'brand', children, ...buttonProps } = props;
  return (
    <StyledButton variant={themesVariants[theme]} {...buttonProps}>
      {label || children}
    </StyledButton>
  );
};

export default UDButton;
