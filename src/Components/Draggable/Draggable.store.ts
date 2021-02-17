import { Store } from "pullstate";
import { ViewType } from "@components/Cardslotlist";

export const items = [
    { numberIndex: 1, cardType: 0 },
    { numberIndex: 2, cardType: 0 },
    { numberIndex: 3, cardType: 0 },
    { numberIndex: 4, cardType: 0 },
    { numberIndex: 5, cardType: 0 },
    { numberIndex: 6, cardType: 0 },
    { numberIndex: 7, cardType: 0 },
    { numberIndex: 8, cardType: 0 },
  ];

export const lists = [
    items, 
    [
        { numberIndex: 9, cardType: 0 },
        { numberIndex: 10, cardType: 0 },
        { numberIndex: 11, cardType: 0 },
        { numberIndex: 12, cardType: 0 },
    ],
    [
        { numberIndex: 0, cardType: 0 },
        { numberIndex: 1, cardType: 1 },
        { numberIndex: 2, cardType: 1 },
        { numberIndex: 3, cardType: 1 },
    ],
    [
        { numberIndex: 4, cardType: 1 },
        { numberIndex: 5, cardType: 1 },
        { numberIndex: 6, cardType: 1 },
        { numberIndex: 7, cardType: 1 },
    ],
]
  
export const cardStore = new Store({ items });
export const cardListStore = new Store({ lists, viewType: ViewType.COLUMN })