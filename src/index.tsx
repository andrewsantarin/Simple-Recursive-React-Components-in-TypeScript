import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import { Menu, Item } from "./menu/Menu";

const items: Item[] = [
  {
    label: "The",
    items: [
      {
        label: "quick",
        items: [
          {
            label: "brown"
          }
        ]
      }
    ]
  },
  {
    label: "fox",
    items: [
      {
        label: "jumps",
        items: [
          {
            label: "over"
          }
        ]
      },
      {
        label: "the",
        items: [
          {
            label: "lazy",
            items: [
              {
                label: "soptted"
              },
              {
                label: "dog."
              }
            ]
          }
        ]
      }
    ]
  }
];

function Root() {
  return (
    <div className="app">
      <h2>Simple Recursive React Components in TypeScript</h2>
      <div className="menu">
        {items.map((item, index) => {
          if (!Menu.Item) {
            return null;
          }

          return (
            <Menu.Item
              key={index}
              label={item.label}
              index={index}
              items={
                item.items
                  ? item.items.map((item, index) => ({
                      ...item,
                      index: index
                    }))
                  : undefined
              }
            />
          );
        })}
      </div>
      <p />
      <div>
        Reference materials:
        <ul>
          <li>
            This Medium post:{" "}
            <a href="https://medium.com/the-guild/recursive-react-tree-component-implementation-made-easy-466dfce1a008">
              https://medium.com/the-guild/recursive-react-tree-component-implementation-made-easy-466dfce1a008
            </a>
          </li>
          <li>
            This GitHub repo:{" "}
            <a href="https://github.com/DAB0mB/react-fs-tree">
              https://github.com/DAB0mB/react-fs-tree
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
