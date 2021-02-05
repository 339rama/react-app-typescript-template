import React from 'react';
import { PaginationProps } from 'react-bootstrap';
import getNumberArray from './helpers/getNumberArray';
import {
  PaginationContainer,
  CountItems,
  PaginationItem,
  PaginationEllipsis,
  StyledPagination,
} from './styles';

export type UDPaginationProps = {
  pages: number;
  currentPage: number;
  onPageChange: (page: number) => any;
  getHref?: (page: number) => string;
  itemsCount?: number;
  containerClassName?: string;
  offset?: number;
  disabled?: boolean;
} & PaginationProps;

const UDPagination = (props: UDPaginationProps) => {
  const { pages, currentPage, onPageChange, itemsCount, offset = 1, disabled } = props;
  const pagesArr = getNumberArray(1, pages);
  return (
    <PaginationContainer className={props.containerClassName}>
      <StyledPagination className="m-0" disabled={disabled}>
        {pagesArr.map((page) => {
          const active = page === currentPage;
          const isFirst = page === 1;
          const isLast = page === pagesArr.length;
          if ((page >= currentPage - offset && page <= currentPage + offset) || isFirst || isLast) {
            return (
              <PaginationItem
                key={`${page}`}
                active={active}
                onClick={onPageChange.bind(null, page)}
              >
                {page}
              </PaginationItem>
            );
          } else if (page === currentPage + offset + 1 || page === currentPage - offset - 1) {
            return <PaginationEllipsis key={`${page}`}>...</PaginationEllipsis>;
          }
          return '';
        })}
      </StyledPagination>
      {itemsCount && <CountItems>{itemsCount} записей</CountItems>}
    </PaginationContainer>
  );
};

export default UDPagination;
