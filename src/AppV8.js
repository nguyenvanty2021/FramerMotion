// import "./styles6.css";
import * as React from "react";
import { useState } from "react";
import { Reorder } from "framer-motion";
import { Item } from "./Item";

const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];

export default function AppV8() {
  const [items, setItems] = useState(initialItems);
  console.log(items);
  return (
    <>
      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item) => (
          <Item key={item} item={item} type="1" />
        ))}
      </Reorder.Group>
      <p>---------------------------------</p>
      <Reorder.Group axis="y" onReorder={setItems} values={items}>
        {items.map((item) => (
          <Item key={item} item={item} type="2" />
        ))}
      </Reorder.Group>
    </>
  );
}
