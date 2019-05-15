import React, { Component } from "react";

import { Menu, Item } from "./menu.components";

interface ItemProps extends Item {}

interface ItemState {}

export class ItemComponent extends Component<ItemProps, ItemState> {
  render() {
    const { level, index, label, items } = this.props;
    const id = [
      level,
      typeof index !== "undefined" && !isNaN(index)
        ? (index + 1).toString()
        : index
    ]
      .filter(v => v)
      .join(".");

    return (
      <div className="menu-item">
        <div>
          <span>{id}</span>
          {" : "}
          <strong>{label}</strong>
        </div>
        {Menu.Submenu && !!items && items.length > 0 && (
          <Menu.Submenu level={id} index={index} items={items} />
        )}
      </div>
    );
  }
}

Menu.Item = ItemComponent;
