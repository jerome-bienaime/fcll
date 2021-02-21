import React from 'react';
import { DraggableCard } from '@components/Draggable';
import type { Store } from 'pullstate';

const Counter = ({store}: {store:Store}) => {
  const counter = store.useState((state: any) => state.counter);
  const items = store.useState((state: any) => state.items);

  if (!items) {
    return <>{counter}</>;
  }

  function incrementCounter(store: Store) {
    store.update((state: any) => {
      state.counter = state.counter + 1
    })
  }

  const actions = [incrementCounter]

  return (
    <>
      {counter}
      {items.length && <DraggableCard store={store} actions={actions}></DraggableCard>}
    </>
  );
};

export { Counter };
