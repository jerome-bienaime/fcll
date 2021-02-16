import React from 'react';
import { Cardslot } from '.';
import type { CardProps } from '@components/Card';
import { ChildComponent } from './Cardslot.mocks';
import { Card } from '../Card/Card';

export default {
  title: 'Cardslot',
};

export const Basic: React.VFC<{}> = () => <Cardslot />;
export const Child: React.VFC<{}> = () => (
  <Cardslot>
    <ChildComponent />
  </Cardslot>
);
export const ThreeCards: React.VFC<{}> = () => {
  const ThreeRandomCards: [CardProps, CardProps, CardProps] = [
    { numberIndex: 3, cardType: 2 },
    { numberIndex: 8, cardType: 1 },
    { numberIndex: 5, cardType: 0 },
  ];
  return (
    <>
      {ThreeRandomCards.map((card, key) => {
        return (
          <Cardslot key={key}>
            <Card {...card}></Card>
          </Cardslot>
        );
      })}
    </>
  );
};
