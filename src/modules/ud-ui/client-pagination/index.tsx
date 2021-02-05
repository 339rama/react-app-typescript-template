import React, { useCallback } from 'react';
import UDPagination from '../pagination';

type UDCLientPaginationProps = {
  isLoading?: boolean;
  currentPage: number;
  setPage: any;
  pages: number;
};

const UDCLientPagination = (props: UDCLientPaginationProps) => {
  const { pages, isLoading, currentPage, setPage } = props;
  const changePage = useCallback(
    (page: number) => {
      setPage(page);
    },
    [setPage]
  );
  if (pages < 2) {
    return <></>;
  }

  return (
    <UDPagination
      pages={pages}
      currentPage={currentPage}
      onPageChange={changePage}
      disabled={isLoading}
      containerClassName="my-10 justify-content-end"
    />
  );
};

export default UDCLientPagination;
