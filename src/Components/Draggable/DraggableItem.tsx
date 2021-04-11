import { Draggable } from 'react-beautiful-dnd';
import { Card, CardProps } from '@components/Card';
import { Cardslot } from '@components/Cardslot';

const DraggableItem = ({ item, index }: { item: CardProps; index: number }) => {
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="draggable-item"
          >
            <Cardslot>
              <Card {...item} />
            </Cardslot>
          </div>
        );
      }}
    </Draggable>
  );
};

export { DraggableItem };
