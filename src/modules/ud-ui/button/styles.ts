import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { UDButtonProps } from '.';

export const StyledButton = styled(Button) <UDButtonProps>`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 16px 32px 16px 32px;

  &[disabled] {
    filter: brightness(0.5);
  }
  & > a {
    color: inherit;
    text-decoration: none;
  }
  & > a:hover {
    text-decoration: none !important;
  }

  &.btn-transparent {
    &:hover {
      background-color: #f3f3f3;
    }
  }
`;
