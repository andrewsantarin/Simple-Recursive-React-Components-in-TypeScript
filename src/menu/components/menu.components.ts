import React from "react";

export type Item = {
  level?: string;
  index?: number;
  label?: string;
  items?: Item[];
};

export type Submenu = {
  level?: string;
  index?: number;
  items?: Item[];
};

export type ItemComponent = React.ComponentClass<Item, {}>;
export type SubmenuComponent = React.ComponentClass<Submenu, {}>;

type MenuModule = {
  Item?: ItemComponent;
  Submenu?: SubmenuComponent;
};

export const Menu: MenuModule = {};

export default {
  Menu
};
