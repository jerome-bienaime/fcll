import type { Store } from 'pullstate';
import React from 'react';
import { DragDropContext, Droppable, Draggable, DraggableStateSnapshot, DraggingStyle, NotDraggingStyle } from 'react-beautiful-dnd';
import { Card, CardProps } from '@components/Card';
import { Cardslot } from '@components/Cardslot';
import { Cardslotlist, ViewType } from '@components/Cardslotlist';

const DraggableItem = ({ item, index }: { item: CardProps; index: number }) => {
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided, snapshot) => {
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

const DraggableCardList = ({ store }: { store?: Store }) => {
  if (!store) {
    return <>nothing to drag and drop</>;
  }

  const { lists, viewType } = store?.useState((state) => state);

  function onDragEnd(result) {
    console.log('source', result.source);
    console.log('destination', result.destination);
  }

  return (
    <div className="draggable-card-list">
      <DragDropContext onDragEnd={onDragEnd}>
        {lists &&
          lists.map((items: CardProps[], listIndex: number) => {
            const id = `droppableId-${listIndex}`;
            return (
              <div>
                <Cardslotlist viewType={viewType}>
                  {items &&
                    items.slice(0, -1).map((item, index) => {
                      return (
                        <Cardslot>
                          <Card {...item} />
                        </Cardslot>
                      );
                    })}
                </Cardslotlist>
                <Droppable droppableId={id} >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="list"
                    >
                      <Cardslotlist viewType={ViewType.NORMAL}>
                        {items &&
                          items.slice(-1).map((item, index) => {
                            const dragId = (1 + listIndex) * (1 + index);
                            return (
                              <DraggableItem
                                item={item}
                                index={dragId}
                                key={dragId}
                              />
                            );
                          })}
                      </Cardslotlist>
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            );
          })}
      </DragDropContext>
    </div>
  );
};

export { DraggableCardList };
