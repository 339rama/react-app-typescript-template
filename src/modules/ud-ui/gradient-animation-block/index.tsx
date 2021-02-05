import React, { createContext, HtmlHTMLAttributes, useContext } from 'react';
import { StyledAnimation } from './styles';

export const GradientAnimationContext = createContext({
  isLoading: false,
});

const UDGradientAnimationBlock = (props: HtmlHTMLAttributes<HTMLDivElement>) => {
  const { isLoading } = useContext(GradientAnimationContext);
  return isLoading ? <StyledAnimation {...props} /> : <></>;
};

export default UDGradientAnimationBlock;
