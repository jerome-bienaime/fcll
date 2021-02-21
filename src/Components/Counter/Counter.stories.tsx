import React from 'react';
import { items } from '@components/Draggable';
import { Counter, CounterStore, ItemsCounterStore } from '.';

export default {
  title: 'Counter',
  component: Counter,
  argTypes: {
    counter: {
      type: 'number',
      min: 0,
    },
  },
};

export const Basic = ({ counter }: { counter: number }) => {
  CounterStore.update((state) => {
    state.counter = counter;
  });

  return <Counter store={CounterStore}></Counter>;
};
Basic.args = { counter: 0 };

export const DragAndDropCounter = ({
  counter, 
  items
}: {
  counter: number;
  items: []
}) => {

  ItemsCounterStore.update((state) => {
    state.counter = counter;
    state.items = items;
  });
  return <Counter store={ItemsCounterStore}></Counter>;
};

DragAndDropCounter.args = { counter: 0, items };
