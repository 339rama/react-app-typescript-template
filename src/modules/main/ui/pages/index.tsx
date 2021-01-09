import UDIterator from 'modules/ud-ui/iterator';
import React from 'react';

type Props = {};

type Item = {
  id: number;
  title: string;
  message: string;
};

const data: Item[] = [
  { id: 1, title: 'Title', message: 'Message' },
  { id: 2, title: 'Title', message: 'Message' },
  { id: 3, title: 'Title', message: 'Message' },
  { id: 4, title: 'Title', message: 'Message' },
  { id: 5, title: 'Title', message: 'Message' },
];

const MainPagesIndex = (props: Props) => {
  return (
    <div>
      <h1>Hello there!</h1>
      <UDIterator data={data} />
    </div>
  );
};

export default MainPagesIndex;
