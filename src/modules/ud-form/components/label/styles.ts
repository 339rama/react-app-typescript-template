import styled from 'styled-components';
import { UDLabelProps } from '.';

export const StyledLabel = styled.label<UDLabelProps>`
  margin-bottom: 8px;
  position: relative;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.black};
  ${({ required, theme }) =>
    required
      ? `
      &:after{
        content: '*';
        color: ${theme.redActive};
        position: absolute;
        top: -2px;
        right: -8px;
      }
      `
      : ''}
`;
