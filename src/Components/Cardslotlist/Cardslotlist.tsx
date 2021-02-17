import React from 'react';
import type { Cardslot } from '@components/Cardslot';
import _ from 'lodash';
import './cardslotlist.css';

export enum ViewType {
  STACK,
  COLUMN,
}

export type CardProps = {
  viewType?: ViewType;
  children: (typeof Cardslot)[];
};

const Cardslotlist: React.FC<CardProps> = ({
  children,
  viewType = ViewType.STACK,
}) => {
  const viewTypeAsString = ViewType[viewType].toString().toLowerCase();

  if (!children) {
    return <></>;
  }

  const containerClassName = `container cardslotlist ${viewTypeAsString}`;
  return (
    <div className={containerClassName}>
      {React.Children.map(children, (child, index) => {
        const itemClassName = `item`;
        return <div className={itemClassName}>{React.cloneElement(child)}</div>;
      })}
    </div>
  );
};

export { Cardslotlist };