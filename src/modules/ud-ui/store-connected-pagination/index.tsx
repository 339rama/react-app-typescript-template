import { ActionCreatorWithPayload, Selector } from '@reduxjs/toolkit';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UDCLientPagination from '../client-pagination';

type Props = {
  selector: Selector<any, { page: number; pages: number; perPage?: number }>;
  setPageAction: ActionCreatorWithPayload<number>;
};

const UDStoreConnectedPagination = (props: Props) => {
  const { selector, setPageAction } = props;
  const dispatch = useDispatch();
  const { page, pages } = useSelector(selector);
  const setPage = useCallback((page: number) => {
    dispatch(setPageAction(page));
  }, []);
  return <UDCLientPagination currentPage={page} pages={pages} setPage={setPage} />;
};

export default UDStoreConnectedPagination;
