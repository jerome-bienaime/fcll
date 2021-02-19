import type { Store } from 'pullstate';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardProps } from '@components/Card';
import { Cardslot } from '@components/Cardslot';
import { Cardslotlist, ViewType } from '@components/Cardslotlist';
import type { DraggableCardProps } from './Draggable.store';
import _ from 'lodash';

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

const StaticItem = ({ item }: { item: DraggableCardProps }) => {
  return (
    <Cardslotlist viewType={ViewType.NORMAL}>
      <Cardslot>
        <Card {...item} />
      </Cardslot>
    </Cardslotlist>
  );
};

const DraggableCardList = ({ store }: { store?: Store }) => {
  if (!store) {
    return <>nothing to drag and drop</>;
  }

  const { lists } = store?.useState((state) => state);

  function onDragEnd(result: {
    source: { droppableId: string };
    destination: { droppableId: string };
  }) {
    const getLastID = (value: string): number => {
      const valueAsArray = value.split('-');
      const lastID = valueAsArray[valueAsArray.length - 1];
      if (lastID != undefined) {
        return parseInt(lastID);
      }
      return 0;
    };
    store?.update((state) => {
      const sourceListId: number = getLastID(result.source.droppableId);
      const destListId: number = getLastID(result.destination.droppableId);

      state.lists.forEach((_: any, index: number) => {
        if (index == destListId) {
          state.lists[destListId].push(state.lists[sourceListId].pop());
          if (state.lists[sourceListId].length !== 0) {
            state.lists[sourceListId][state.lists[sourceListId].length - 1] = {
              ...state.lists[sourceListId][
                state.lists[sourceListId].length - 1
              ],
              draggable: true,
            };
          }
        }
      });
    });
  }

  return (
    <div className="draggable-card-list">
      <DragDropContext onDragEnd={onDragEnd}>
        {lists &&
          lists.map((items: DraggableCardProps[], listIndex: number) => {
            const id = `droppableId-${listIndex}`;
            return (
              <div>
                {items &&
                  items.map((item: DraggableCardProps, index) => {
                    const dragId = (1 + listIndex) * (1 + index);
                    return item.draggable ? (
                      <DroppableItem item={item} id={id} dragId={dragId} />
                    ) : (
                      <StaticItem item={item} />
                    );
                  })}
              </div>
            );
          })}
      </DragDropContext>
    </div>
  );
};

export { DraggableCardList };
