import { SubmenuComponent } from "./components/MenuSubmenu";
import { ItemComponent } from "./components/MenuItem";

import {
  Menu as MenuComponent,
  Item as ItemType
} from "./components/menu.components";

MenuComponent.Submenu = SubmenuComponent;
MenuComponent.Item = ItemComponent;

export type Item = ItemType;

export const Menu = MenuComponent;
