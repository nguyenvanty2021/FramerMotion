import * as React from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { useRaisedShadow } from "./use-raised-shadow";
import { ReorderIcon } from "./Icon";

export const Item = ({ item, type }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();
  return (
    <>
      {type === "1" ? (
        <Reorder.Item value={item} id={item} style={{ boxShadow, y }}>
          <span>{item}</span>
        </Reorder.Item>
      ) : (
        <Reorder.Item
          value={item}
          dragListener={false}
          dragControls={dragControls}
          id={item}
          style={{ boxShadow, y }}
        >
          <span>{item}</span>
          <ReorderIcon dragControls={dragControls} />
        </Reorder.Item>
      )}
    </>
  );
};
