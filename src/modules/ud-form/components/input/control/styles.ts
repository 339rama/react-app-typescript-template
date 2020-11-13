import { FormControl, FormControlProps } from 'react-bootstrap';
import styled from 'styled-components';

export type Props = {
  isError: boolean;
  fillColor: boolean;
} & FormControlProps;

export const StyledInput = styled(FormControl)<Props>`
  background-color: ${({ theme}) => theme.input};
  border-radius: 4px;
  border-color: ${({ theme, isError }) => (isError ? theme.red : 'transparent')};
  font-family: inherit;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.black};
  outline: none;

  &::placeholder {
    
  }
  &:focus::not(:read-only) {
    border-color: transparent;
    color: ${({ theme }) => theme.black};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.black};
  }
  &:hover::not(:read-only) {
    border-color: ${({ theme }) => theme.black};
  }
  &:disabled {
    color: ${({ theme }) => theme.gray800};
    background-color: #fff;
    pointer-events: none;
  }
  &:read-only {
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme}) => theme.input};
    pointer-events: none;
  }
`;
