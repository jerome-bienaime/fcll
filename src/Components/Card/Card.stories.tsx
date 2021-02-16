import React from 'react';
import { Card, CardProps } from './Card';

export default {
  title: 'Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Creates a card."
      }
    }
  },
  argTypes: {
    numberIndex: {
      table: {
        type: {
          summary: "cardNumberList[numberIndex]",
          detail: "cardNumberList contains all the card numbers (AS, 2..10, J, Q,K), accessed by the numberIndex from 0 to 12"
        }
      },
      control: {
        type: 'number',
        min: 0,
        max: 12,
      },
    },
    cardType: {
      table: {
        type: {
          detail: "0 => leaf, 1 => diamond, 2 => heart, 3 => spade"
        }
      },
      control: {
        type: "number",
        min: 0,
        max: 3
      }
    }
  },
};

export const Basic = (args: CardProps) => {
  return <Card {...args}></Card>;
};
Basic.args = {
  numberIndex: 3,
  cardType: 1,
};