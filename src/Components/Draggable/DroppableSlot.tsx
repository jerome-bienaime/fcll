import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Cardslot } from "@components/Cardslot";

const DroppableSlot = ({ id, dragId }: { id: string; dragId: number }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="cardslotlist slot"
        >
          <Cardslot />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export {DroppableSlot}