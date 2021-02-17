import React from 'react';
import { Card } from '@components/Card';
import type { CardProps } from '@components/Card';
import { Cardslot } from '@components/Cardslot';
import { DraggableCard } from '.';
import type { Store } from 'pullstate';
import { cardListStore, cardStore, items } from './Draggable.store';
import { DraggableCardList } from './DraggableCardList';

export default {
  title: 'Draggable Card',
  component: DraggableCard,
};

const Basic = ({
  items,
}: {
  items: any;
}) => {
  return (
    <DraggableCard>
      {items.length &&
        items.map((item: CardProps) => {
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
CardLocal.args = { items };

const CardTemplate = ({ store }: { store: Store }) => {
  return <DraggableCard store={store}></DraggableCard>;
};

export const CardStore = CardTemplate.bind({});
CardStore.args = { store: cardStore };

const ListTemplate = ({store}: {store: Store}) => {
  return <DraggableCardList store={store}></DraggableCardList>
}

export const CardListStore = ListTemplate.bind({});
CardListStore.args = {store: cardListStore}
CardListStore.decorators = [
  (Story) => (
    <div style={{ minHeight: '400px', position: "relative" }}>
      <Story />
    </div>
  ),
];