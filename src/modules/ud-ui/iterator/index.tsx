import React from 'react';

type UDIteratorProps<T extends {}> = {
  data: T[];
  renderItem?: (item: T) => JSX.Element;
};

type UDIteratorType = <T extends Object>(
  props: UDIteratorProps<T>
) => JSX.Element;

const UDIterator: UDIteratorType = (props) => {
  const { data, renderItem } = props;
  return (
    <>
      {data.map((item) =>
        renderItem ? renderItem(item) : JSON.stringify(item)
      )}
    </>
  );
};

export default UDIterator;
