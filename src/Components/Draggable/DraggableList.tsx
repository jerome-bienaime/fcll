import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './draggable.css';

const DraggableItem = ({ content, index }: {content: string, index: number}) => {
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="item"
          >
            {content}
          </div>
        );
      }}
    </Draggable>
  );
};

const DraggableList = () => {
  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    console.log('onDragEnd');
  }

  const dataList = ['hello', 'draggable', 'world', '!'];

  return (
    <div className="draggableList">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="horizontal" >
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="list">
              {dataList.map((content, index) => (
                <DraggableItem content={content} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export { DraggableList };
