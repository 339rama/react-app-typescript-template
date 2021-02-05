import { Pagination } from 'react-bootstrap';
import styled from 'styled-components';

type PaginationProps = {
  disabled?: boolean;
};
export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledPagination = styled(Pagination)<PaginationProps>`
  &[disabled] {
    filter: brightness(0.5);
    pointer-events: none;
  }
`;

export const PaginationItem = styled(Pagination.Item)`
  &.active .page-link {
    background-color: ${({ theme }) => theme.redActive} !important;
    color: #fff;
  }
  & .page-link {
    color: ${({ theme }) => theme.redActive};
    box-shadow: none !important;
  }
  &.active .page-link {
    pointer-events: none;
    border-color: transparent !important;
  }
`;

export const PaginationEllipsis = styled(Pagination.Ellipsis)`
  & * {
    pointer-events: none;
    color: ${({ theme }) => theme.redActive};
  }
`;

export const CountItems = styled.span`
  color: ${({ theme }) => theme.black};
  & .total {
    font-weight: 600;
  }
`;
