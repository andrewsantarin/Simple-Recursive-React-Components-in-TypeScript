import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { Item } from "menu/components/menu.components";

import { Root } from "./Root";
import RootTree from "./Root.Tree.json";

const items: Item[] = RootTree;

const rootElement = document.getElementById("root");

ReactDOM.render(<Root items={items} />, rootElement);
