import type { Store } from 'pullstate';
import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import type { DraggableCardProps, StackableCardProps } from './Draggable.store';
import _, { last, reverse } from 'lodash';
import { DroppableSlot } from './DroppableSlot';
import { DroppableItem } from './DroppableItem';
import { StaticItem } from './StaticItem';
import { DroppableCardList } from './DroppableCardList';

const DraggableCardList = ({ store }: { store?: Store }) => {
  if (!store) {
    return <>nothing to drag and drop</>;
  }

  const { lists } = store?.useState((state) => state);

  function isCardFollowing(
    currentItem: DraggableCardProps | undefined,
    previousItem: DraggableCardProps | undefined,
  ): boolean {
    if (previousItem == undefined) {
      return false;
    }
    if (currentItem == undefined) {
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
          if (lists[destListId].length > 1) {
            const newCard = lists[sourceListId].pop();
            const newList = [];
            let listLength = lists[destListId].length - 1;

            if (isCardFollowing(lists[destListId][listLength], newCard)) {
              newList.push([
                { ...lists[destListId][listLength], stacked: true },
                { ...newCard, stacked: true },
              ]);
            }
            while (listLength >= 0) {
              if (
                isCardFollowing(
                  lists[destListId][listLength - 1],
                  lists[destListId][listLength],
                )
              ) {
                newList.push([
                  { ...lists[destListId][listLength - 1], stacked: true },
                  { ...lists[destListId][listLength], stacked: true },
                ]);
              } else {
                newList.push(lists[destListId][listLength]);
              }
              listLength--;
            }
            state.lists[destListId] = reverse(newList);
          } else {
            console.log(lists);

            state.lists[destListId].push(lists[sourceListId].pop());
          }

          console.log(lists[sourceListId]);
          let sourceIndex =
            state.lists[sourceListId].length > 0
              ? state.lists[sourceListId].length
              : 0;
          state.lists[sourceListId][state.lists[sourceListId].length - 1] = {
            ...lists[sourceListId][sourceIndex],
            draggable: true,
          };
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
                  {items.map((item: StackableCardProps, index) => {
                    const dragId = (1 + listIndex) * (1 + index);

                    if (Array.isArray(item)) {
                      return (
                        <DroppableCardList
                          id={id}
                          dragId={dragId}
                          items={item}
                        />
                      );
                    }
                    if (item.draggable) {
                      return (
                        <DroppableItem item={item} id={id} dragId={dragId} />
                      );
                    }
                    return <StaticItem item={item} />;
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
