import React, { Component } from "react";

import { Menu, Submenu } from "./menu.components";

interface SubmenuProps extends Submenu {}

interface SubmenuState {}

export class SubmenuComponent extends Component<SubmenuProps, SubmenuState> {
  render() {
    const { level, items } = this.props;

    return (
      <div className="menu-submenu">
        {!!items &&
          items.length > 0 &&
          items.map((item, index) => {
            if (!Menu.Item) {
              return null;
            }

            return (
              <Menu.Item
                key={index}
                level={level}
                label={item.label}
                items={
                  item.items
                    ? item.items.map((item, i) => ({
                        ...item,
                        level: [level, index].filter(v => v).join("."),
                        index: i
                      }))
                    : item.items
                }
                index={index}
              />
            );
          })}
      </div>
    );
  }
}

Menu.Submenu = SubmenuComponent;
