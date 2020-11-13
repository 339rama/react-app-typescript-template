import Icon from 'modules/ud-ui/icon';
import React, { ReactChild, useContext } from 'react';
import { AccordionContext, useAccordionToggle } from 'react-bootstrap';
import { IconContainer, StyledCustomToggle } from './styles';

type AccordionCustomToggleProps = {
  children: ReactChild;
  eventKey: string;
};

const AccordionCustomToggle = (props: AccordionCustomToggleProps) => {
  const { children, eventKey } = props;
  const decoratedOnClick = useAccordionToggle(eventKey);
  const currentEventKey = useContext(AccordionContext);
  const isToggled = currentEventKey === eventKey;

  return (
    <StyledCustomToggle onClick={decoratedOnClick}>
      <IconContainer isToggled={isToggled}>
        <Icon name="chevron-down" color="#000" height={15} width={32} />
      </IconContainer>
      {children}
    </StyledCustomToggle>
  );
};

export default AccordionCustomToggle;
