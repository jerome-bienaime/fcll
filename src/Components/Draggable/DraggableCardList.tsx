import type { Store } from 'pullstate';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import type { DraggableCardProps } from './Draggable.store';
import _, { last } from 'lodash';
import { DroppableSlot } from './DroppableSlot';
import { DroppableItem } from './DroppableItem';
import { StaticItem } from './StaticItem';

const DraggableCardList = ({ store }: { store?: Store }) => {
  if (!store) {
    return <>nothing to drag and drop</>;
  }

  const { lists } = store?.useState((state) => state);

  function isCardFollowing(
    currentItem: DraggableCardProps,
    previousItem: DraggableCardProps | undefined,
  ): boolean {
    if (previousItem == undefined) {
      return false;
    }
    const isSameType = currentItem.cardType === previousItem.cardType;
    const isFollowing =
      currentItem.numberIndex === previousItem.numberIndex + 1;

    return isFollowing && isSameType;
  }

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
    const sourceListId: number = getLastID(result.source.droppableId);
    const destListId: number = getLastID(result.destination.droppableId);
    const previousItem: DraggableCardProps | undefined = last(
      lists[sourceListId],
    );
    const currentItem: DraggableCardProps | undefined = last(lists[destListId]);

    if (
      currentItem !== undefined &&
      isCardFollowing(currentItem, previousItem) === false
    ) {
      return result;
    }

    store?.update((state) => {
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
            if (items.length) {
              return (
                <div>
                  {items.map((item: DraggableCardProps, index) => {
                    const dragId = (1 + listIndex) * (1 + index);

                    return item.draggable ? (
                      <DroppableItem item={item} id={id} dragId={dragId} />
                    ) : (
                      <StaticItem item={item} />
                    );
                  })}
                </div>
              );
            }
            return (
              <div>
                <DroppableSlot id={id} dragId={1 + listIndex}></DroppableSlot>
              </div>
            );
          })}
      </DragDropContext>
    </div>
  );
};

export { DraggableCardList };
