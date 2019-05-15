# Simple-Recursive-React-Components-in-TypeScript
Created with CodeSandbox

This example shows how to make recursive components in TypeScript without getting tied up in a single monolithic tree generator component. Instead, it breaks the tree generation into three major components:

- The leaf node, [`<Item />`](./src/menu/components/MenuItem.tsx).
- The branch node, [`<Submenu />`](./src/menu/components/MenuSubmenu.tsx).
- The root node, [`<Root />`](./src/index.tsx).

The names of the components could be anything you want, as long as by the end of the day, your structure adheres to [the Architecture diagram](https://medium.com/the-guild/recursive-react-tree-component-implementation-made-easy-466dfce1a008#b5ba).

Module resolution works by overriding the exported `Menu` object in [`menu.components`](./src/menu/components/menu.components.ts). Then, in order to make everything look more presentable, it is exported again, along with only the necessary types in [`Menu`](./src/menu/Menu.ts`).

## How to use
View and fork the running example at [my CodeSandbox instance](https://codesandbox.io/s/github/andrewsantarin/Simple-Recursive-React-Components-in-TypeScript). Alternatively, read the instructions to run on your local machine at [CREATE-REACT-APP-README.md](./CREATE-REACT-APP-README.md) if you **really** need a local install.

## Resources

- This Medium post: https://medium.com/the-guild/recursive-react-tree-component-implementation-made-easy-466dfce1a008
- This GitHub repo: https://github.com/DAB0mB/react-fs-tree
