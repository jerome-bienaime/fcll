import { Store } from 'pullstate';

export const CounterStore = new Store({
  counter: 0,
});

export const ItemsCounterStore = new Store({
  counter: 0,
  items: []
});
