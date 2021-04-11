import React from "react";
import { Droppable } from "react-beautiful-dnd";
import type { DraggableCardProps } from ".";
import type { CardProps } from "@components/Card";
import { Cardslotlist, ViewType } from "@components/Cardslotlist";
import { DraggableItem } from "./DraggableItem";

const DroppableItem = ({
  id,
  item,
  dragId,
}: {
  id: string;
  dragId: number;
  item: DraggableCardProps;
}) => {
  const draggableItem: CardProps = {
    numberIndex: item.numberIndex,
    cardType: item.cardType,
  };
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="list"
        >
          <Cardslotlist viewType={ViewType.COLUMN}>
            <DraggableItem item={draggableItem} index={dragId} key={dragId} />
          </Cardslotlist>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export {DroppableItem}