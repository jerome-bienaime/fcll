import React from "react";
import type { DraggableCardProps } from ".";
import { Card } from "../Card";
import { Cardslot } from "../Cardslot";
import { Cardslotlist, ViewType } from "../Cardslotlist";

const StaticItem = ({ item }: { item: DraggableCardProps }) => {
  return (
    <Cardslotlist viewType={ViewType.NORMAL}>
      <Cardslot>
        <Card {...item} />
      </Cardslot>
    </Cardslotlist>
  );
};

export {StaticItem}