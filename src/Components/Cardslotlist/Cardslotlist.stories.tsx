import React from 'react';
import { Cardslotlist, ViewType } from '.';
import { CardItem as Cardslot } from '@components/Cardslot/Cardslot.stories';
import { Basic as Card } from '@components/Card/Card.stories';

export default {
  title: 'Cardslotlist',
  component: Cardslotlist,
  subcomponents: { Cardslot },
  parameters: {
    docs: {
      description: {
        component: 'Renders a list of cardslot',
      },
    },
  },
  argTypes: {
    viewType: {
      control: false
    }
  },
};

const ListTemplate = ({
  items,
  viewType = ViewType.STACK,
}: {
  items: any;
  viewType: ViewType;
}) => {
  return (
    <Cardslotlist viewType={viewType}>
      {items.length &&
        items.map((item: {}) => {
          return (
            <Cardslot>
              <Card {...item} />
            </Cardslot>
          );
        })}
    </Cardslotlist>
  );
};

const items = [
  { numberIndex: 11, cardType: 2 },
  { numberIndex: 8, cardType: 0 },
  { numberIndex: 4, cardType: 1 },
  { numberIndex: 7, cardType: 0 },
  { numberIndex: 2, cardType: 3 },
  { numberIndex: 11, cardType: 1 },
];

export const StackedCardList = ListTemplate.bind({});
StackedCardList.args = {
  items,
  viewType: ViewType.STACK,
};
StackedCardList.decorators = [
  (Story) => (
    <div style={{ minHeight: '400px' }}>
      <Story />
    </div>
  ),
];
export const ColumnCardList = ListTemplate.bind({});
ColumnCardList.args = {
  items,
  viewType: ViewType.COLUMN,
};
ColumnCardList.decorators = [
  (Story) => (
    <div style={{ minHeight: '400px' }}>
      <Story />
    </div>
  ),
];
