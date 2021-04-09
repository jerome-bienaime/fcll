import { Store } from "pullstate";
import { ViewType } from "@components/Cardslotlist";
import type { CardProps } from "@components/Card";

export interface DraggableCardProps extends CardProps {
    draggable?: boolean;
}

export const items = [
    { numberIndex: 1, cardType: 0 },
    { numberIndex: 2, cardType: 0 },
    { numberIndex: 3, cardType: 0 },
    { numberIndex: 4, cardType: 0 },
    { numberIndex: 5, cardType: 0 },
    { numberIndex: 6, cardType: 0 },
    { numberIndex: 7, cardType: 0 },
    { numberIndex: 9, cardType: 0 },
  ];

export const lists = [
    items.slice(0, -1).map(item => ({...item, draggable: false})), 
    items.slice(-1).map(item => ({...item, draggable: true})), 
    [
        { numberIndex: 9, cardType: 2, draggable: false },
        { numberIndex: 12, cardType: 0, draggable: false },
        { numberIndex: 11, cardType: 0, draggable: false },
        { numberIndex: 10, cardType: 0, draggable: true },
    ],
    [
        { numberIndex: 0, cardType: 0, draggable: false },
        { numberIndex: 1, cardType: 1, draggable: false },
        { numberIndex: 2, cardType: 1, draggable: false },
        { numberIndex: 3, cardType: 1, draggable: true },
    ],
    [
        { numberIndex: 4, cardType: 1, draggable: false },
        { numberIndex: 5, cardType: 1, draggable: false },
        { numberIndex: 6, cardType: 1, draggable: false },
        { numberIndex: 7, cardType: 1, draggable: true },
    ],
]
  
export const cardStore = new Store({ items });
export const cardListStore = new Store({ lists, viewType: ViewType.COLUMN })