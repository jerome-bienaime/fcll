import React, { FC } from 'react';
import type CardNumberTuple from './CardNumber';
import "./card.css"

export enum CardType {
  CLOVER,
  DIAMOND,
  HEART,
  SPADE,
}

export const cardNumberList: CardNumberTuple = [
  'AS',
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  'JACK',
  'QUEEN',
  'KING',
];

export interface CardProps {
  cardType: CardType;
  numberIndex: number;
}

const Card: FC<CardProps> = ({ cardType, numberIndex }) => {
  const _cardNumber = cardNumberList[numberIndex];
  const _cardType = CardType[cardType];
  const _cardImage = `front-${_cardType?.toLowerCase()}-white.svg`
  return <div className="card">
    <span className="card_number">{_cardNumber}</span>
    {_cardType && <img src={_cardImage} alt={_cardType} className="card_image"/>}
  </div>;
};

export { Card };
