import type { Store } from 'pullstate';
import React, { ReactNode } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, CardProps } from '@components/Card';
import { Cardslot } from '@components/Cardslot';
import './draggable.css';
import _ from 'lodash';

const DraggableElement = ({
  element,
  index,
}: {
  element: any;
  index: number;
}) => {
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
            {React.cloneElement(element)}
          </div>
        );
      }}
    </Draggable>
  );
};

const DraggableItem = ({ item, index }: { item: CardProps; index: number }) => {
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
            <Cardslot>
              <Card {...item} />
            </Cardslot>
          </div>
        );
      }}
    </Draggable>
  );
};

const DraggableCard = ({
  children,
  store,
  actions,
}: {
  children?: ReactNode;
  store?: Store;
  actions: Array<(store?: Store) => void>;
}) => {
  if (!children && !store) {
    return <>nothing to dnd</>;
  }

  const items: CardProps[] = store?.useState((state) => state.items);

  function _move<T>(
    arr: Array<T>,
    destIndex: number,
    sourceIndex: number,
  ): Array<T> {
    if (destIndex >= arr.length) {
      let k = destIndex - arr.length + 1;
      let empty: any = new Object();
      while (k--) {
        arr.push(empty);
      }
    }
    arr.splice(destIndex, 0, arr.splice(sourceIndex, 1)[0]);
    return arr;
  }

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }
    if (result.destination.index === result.source.index) {
      return;
    }
    if (actions && store) {
      actions.forEach((action) => action(store));
    }
    if (store) {
      store.update((state) => {
        state.items = _move(
          state.items,
          result.destination.index,
          result.source.index,
        );
      });
    }
  }

  return (
    <div className="draggable-card">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="list"
            >
              {items == null
                ? React.Children.map(children, (element, index) => (
                    <DraggableElement
                      element={element}
                      index={index}
                      key={index}
                    />
                  ))
                : items.map((item, index) => (
                    <DraggableItem item={item} index={index} key={index} />
                  ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export { DraggableCard };
