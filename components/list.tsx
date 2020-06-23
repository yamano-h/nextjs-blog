import React from "react";
import Item from "./item";
import { Space } from "antd";

const List = React.memo<{ items }>(({ items }) => (
  <Space direction="vertical">
    {items.map((item, index: number) => (
      <Item item={item} index={index} key={item.id} />
    ))}
  </Space>
));

export default List;
