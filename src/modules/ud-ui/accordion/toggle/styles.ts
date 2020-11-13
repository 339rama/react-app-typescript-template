import styled from "styled-components";
import { alignCenter, justifyCenter } from "styles/helpers/display";
import { flexRow } from "styles/helpers/display";


export const StyledCustomToggle = styled.div`
  ${flexRow};
  ${alignCenter};
  min-height: 80px;
`;

type IconContainerProps = {
  isToggled: boolean;
}

export const AccordionIconWidth = '72px';

export const IconContainer = styled.div<IconContainerProps>`
  ${alignCenter};
  ${justifyCenter};
  height: 100%;
  width: ${AccordionIconWidth};
  transition: 0.3s;
  transform: ${({isToggled}) => isToggled? 'scaleY(-1)' : 'scaleY(1)'};
`;