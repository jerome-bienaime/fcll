import React from 'react';
import { Card } from '@components/Card';
import { Cardslot } from '@components/Cardslot';
import { DraggableList } from '.';
import { Store } from 'pullstate';

export default {
  title: 'Draggable List',
  component: DraggableList,
};

const items = [
  { numberIndex: 11, cardType: 2 },
  { numberIndex: 8, cardType: 0 },
  { numberIndex: 4, cardType: 1 },
  { numberIndex: 7, cardType: 0 },
  { numberIndex: 2, cardType: 3 },
  { numberIndex: 11, cardType: 1 },
  { numberIndex: 3, cardType: 1 },
  { numberIndex: 2, cardType: 1 },
];

const cardStore = new Store({ items });

const Basic = ({items}: {items: any}) => {
  return (
    <DraggableList>
      {items.length &&
        items.map((item: {}) => {
          return (
            <Cardslot>
              <Card {...item} />
            </Cardslot>
          );
        })}
    </DraggableList>
  );
};

export const ListLocal = Basic.bind({});
ListLocal.args = {items}

const ListTemplate = ({  store }: {  store: Store }) => {
  return <DraggableList store={store}></DraggableList>;
};

export const ListStore = ListTemplate.bind({});
ListStore.args = { store: cardStore };
