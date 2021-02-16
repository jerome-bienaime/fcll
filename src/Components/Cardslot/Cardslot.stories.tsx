import React from 'react';
import type { Story } from 'storybook';
import { Cardslot } from '.';
import { Basic as Card } from '@components/Card/Card.stories';
import type { CardProps } from '@components/Card';

export default {
  title: 'Cardslot',
  component: Cardslot,
  subcomponents: { Card },
  parameters: {
    docs: {
      description: {
        component: 'Creates a card container',
      },
    },
  },
};

const Basic: Story<Card> = (args: Card) => <Cardslot {...args} />;
export const CardItem = Basic.bind({});
CardItem.args = {
  children: <Card {...Card.args} />,
};
const ListTemplate = ({ items }: { items: CardProps[] }) => {
  if (items.length === 0) {
    return <Cardslot />;
  }
  return items.map((item: CardProps) => (
    <Cardslot>
      <Card {...item} />
    </Cardslot>
  ));
};
export const Empty = ListTemplate.bind({});
Empty.args = { items: [] };

export const OneItem = ListTemplate.bind({});
OneItem.args = { items: [Card.args] };
