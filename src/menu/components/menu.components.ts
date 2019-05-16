import React from "react";
import { Omit } from "yargs";

/**
 * A single menu element, which may or may not contain recursive sub menu elements.
 *
 * See `.items` for details.
 */
export type Item = {
  /**
   * Overall position (or "rank") of the item in the recursive item hierarchy.
   *
   * If implemented using level separators (e.g. `"."` in `"1.1.1"`),
   * **less** separators signify **higher** overall position, whiile
   * **more** separators signify **lower** overall position.
   */
  level?: string;
  /**
   * Immediate sequence number of this item within its parent list.
   */
  index?: number;
  /**
   * Text to display.
   */
  label?: string;
  /**
   * Further `Item` sub menu elements, if applicable.
   */
  items?: Item[];
};

/**
 * A list of sub menu elements. This type also stores `level` and `index`
 * information to determine the hierarchical position of its item children.
 */
export type Submenu = Omit<Item, "label">;

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
