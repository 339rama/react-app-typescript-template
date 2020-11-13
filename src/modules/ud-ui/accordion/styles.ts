import { Accordion } from "react-bootstrap";
import styled from "styled-components";
import { AccordionIconWidth } from "./toggle/styles";

export const StyledAccordion = styled(Accordion)`
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.14);
`

export const AccordionBody = styled.div`
  padding-left: ${AccordionIconWidth};
`;