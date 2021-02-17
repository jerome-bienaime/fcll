import React from 'react';
import { Card } from '@components/Card';
import { Cardslot } from '@components/Cardslot';
import { DraggableCard } from '.';
import { Store } from 'pullstate';

export default {
  title: 'Draggable Card',
  component: DraggableCard,
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
    <DraggableCard>
      {items.length &&
        items.map((item: {}) => {
          return (
            <Cardslot>
              <Card {...item} />
            </Cardslot>
          );
        })}
    </DraggableCard>
  );
};

export const CardLocal = Basic.bind({});
CardLocal.args = {items}

const ListTemplate = ({  store }: {  store: Store }) => {
  return <DraggableCard store={store}></DraggableCard>;
};

export const CardStore = ListTemplate.bind({});
CardStore.args = { store: cardStore };
