import { SubmenuComponent } from "./components/MenuSubmenu";
import { ItemComponent } from "./components/MenuItem";

import {
  Menu as MenuComponent,
  Submenu as SubmenuType,
  Item as ItemType
} from "./components/menu.components";

MenuComponent.Submenu = SubmenuComponent;
MenuComponent.Item = ItemComponent;

export type Submenu = SubmenuType;
export type Item = ItemType;

export const Menu = MenuComponent;
