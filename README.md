# Simple Recursive React Components in TypeScript
Created with [CodeSandbox](https://codesandbox.io) using the the [Create React App](https://github.com/facebook/create-react-app) TypeScript preset. Read [Usage](#usage) to try this source code out.

This example shows how to make recursive components in TypeScript without getting tied up in a single monolithic tree generator component. Instead, it breaks the tree generation into three major components:

- The leaf node, [`<Item />`](./src/menu/components/MenuItem.tsx).
- The branch node, [`<Submenu />`](./src/menu/components/MenuSubmenu.tsx).
- The root node, [`<Root />`](./src/index.tsx).

The names of the components could be anything you want, as long as by the end of the day, your structure adheres to [the Architecture diagram](https://medium.com/the-guild/recursive-react-tree-component-implementation-made-easy-466dfce1a008#b5ba).

Module resolution works by overriding the exported `Menu` object in [`menu.components`](./src/menu/components/menu.components.ts). Then, in order to make the resolved modules look easier to understand, it's exported again, along with the necessary types in [`Menu`](./src/menu/Menu.ts`) (we're using JSON to generate the tree, so the `Item` type could be useful).

## Usage
View and fork the running example online at [my CodeSandbox instance](https://codesandbox.io/s/github/andrewsantarin/Simple-Recursive-React-Components-in-TypeScript). Alternatively, for a local install, copy and run these console commands below:

**NPM users**
```sh
git clone https://github.com/andrewsantarin/Simple-Recursive-React-Components-in-TypeScript.git
cd Simple-Recursive-React-Components-in-TypeScript
npm install
npm start
```

**Yarn users**
```sh
git clone https://github.com/andrewsantarin/Simple-Recursive-React-Components-in-TypeScript.git
cd Simple-Recursive-React-Components-in-TypeScript
yarn
yarn start
```

Prefer not to `git clone`? [Download ZIP](https://github.com/andrewsantarin/Simple-Recursive-React-Components-in-TypeScript/archive/master.zip) has you covered.

Further instructions are available at [the preserved `create-react-app` README.md file](./CREATE-REACT-APP-README.md).

## Resources

- This Medium post: https://medium.com/the-guild/recursive-react-tree-component-implementation-made-easy-466dfce1a008
- This GitHub repo: https://github.com/DAB0mB/react-fs-tree
