import React, { FC } from 'react';
import type CardNumberTuple from './CardNumber';
import './card.css';

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

export const colorList:{ [key: string]: string; } = {
  "CLOVER": 'black',
  "SPADE": 'black',
  "DIAMOND": 'red',
  "HEART": 'red',
};

const Card: FC<CardProps> = ({ cardType, numberIndex }) => {
  const _cardNumber = cardNumberList[numberIndex];
  const _cardType: string = CardType[cardType];
  const _cardImage: string = `front-${_cardType.toLowerCase()}-color.svg`;
  const _colorType: string = colorList[_cardType.toUpperCase()]
  const _cardClass: string = `card ${_colorType}`;
  return (
    <div className={_cardClass}>
      <span className="card_number">{_cardNumber}</span>
      {_cardType && (
        <img src={_cardImage} alt={_cardType} className="card_image" />
      )}
    </div>
  );
};

export { Card };
