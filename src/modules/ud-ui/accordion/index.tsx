import React, { ReactChild } from 'react';
import {
  Accordion,
  AccordionCollapseProps,
  AccordionProps,
  AccordionToggleProps,
  Card,
} from 'react-bootstrap';
import { StyledAccordion, AccordionBody } from './styles';
import AccordionCustomToggle from './toggle';

type UDAccerdeonProps = {
  header: ReactChild;
  body?: ReactChild;
  eventKey: string;
} & AccordionProps;

const UDAccordion = (props: UDAccerdeonProps) => {
  const { header, body, eventKey, ...otherProps } = props;

  return (
    <StyledAccordion {...otherProps}>
      <Card>
        <AccordionCustomToggle eventKey={eventKey}>
          {header}
        </AccordionCustomToggle>
        {body && (
          <Accordion.Collapse eventKey={eventKey}>
            <AccordionBody>{body}</AccordionBody>
          </Accordion.Collapse>
        )}
      </Card>
    </StyledAccordion>
  );
};

export default UDAccordion;
