import React, { LabelHTMLAttributes } from 'react';
import { StyledLabel } from './styles';

export type UDLabelProps = {
  children: string;
  className?: string;
  required?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>;

const UDLabel = (props: UDLabelProps) => {
  const { children, ...otherProps } = props;

  return <StyledLabel {...otherProps}>{children}</StyledLabel>;
};

export default UDLabel;
