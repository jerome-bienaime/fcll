import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { DraggableItem } from '.';
import type { CardProps } from '../Card';
import { Cardslotlist, ViewType } from '../Cardslotlist';

const DroppableCardList = ({
  id,
  dragId,
  items
}: {
  id: string;
  dragId: number;
  items: any[];
}) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="list"
        >
          <Cardslotlist viewType={ViewType.COLUMN}>
            {items.map((child, index) => {
              const draggableItem: CardProps = {
                numberIndex: child.numberIndex,
                cardType: child.cardType,
              };
              const dropId = (1 + dragId) * (1 + index);
              return (
                <DraggableItem
                  item={draggableItem}
                  index={dropId}
                  key={dropId}
                />
              );
            })}
          </Cardslotlist>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export { DroppableCardList };
