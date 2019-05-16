# Simple Recursive React Components in TypeScript
Created with [CodeSandbox](https://codesandbox.io) using the the [Create React App](https://github.com/facebook/create-react-app) TypeScript preset. Read on in **[Usage](#usage)** to try this source code out.

This example shows how to make recursive components in TypeScript without getting tied up in a single monolithic tree generator component. Instead, it breaks the tree generation into three major components:

- The leaf node, [`<Item />`](./src/menu/components/MenuItem.tsx).
- The branch node, [`<Submenu />`](./src/menu/components/MenuSubmenu.tsx).
- The root node, [`<Root />`](./src/Root.tsx).

It's worth noting that `<Item />` and `<Submenu />` will depend on each other due to the recursive nature of the code. Read on in **[Resolving the "Circular Dependency" Problem](#resolving-the-circular-dependency-problem)** for details.

The names of the components could be anything you want, as long as by the end of the day, your component tree structure adheres to [the Architecture diagram](https://medium.com/the-guild/recursive-react-tree-component-implementation-made-easy-466dfce1a008#b5ba).

The tree in this example resembles the following (running example uses [this JSON file](./src/Root.Tree.json)):

```json
[
  {
    "label": "The",
    "items": [
      {
        "label": "quick",
        "items": [
          {
            "label": "brown"
          }
        ]
      }
    ]
  },
  {
    "label": "fox",
    "items": [
      {
        "label": "jumps",
        "items": [
          {
            "label": "over"
          }
        ]
      },
      {
        "label": "the",
        "items": [
          {
            "label": "lazy",
            "items": [
              {
                "label": "soptted"
              },
              {
                "label": "dog."
              }
            ]
          }
        ]
      }
    ]
  }
]
```

The philosophy is simple:

- Where there's a `label` attribute, there's an `<Item />` component.
- Where there's an `items` attribute, there's a `<Submenu />` component.

### Resolving the "Circular Dependency" Problem
According to the sources I got this from:

Module resolution works by overriding the exported `Menu` object in [a separate `menu.components` file](./src/menu/components/menu.components.ts) through function hoisting ([convoluted explanation... here?](https://stackoverflow.com/a/42704874)) because both component types depend on each other. Without this file, there will be circular dependencies. Then, in order to make the resolved modules look easier to understand, it's exported again, along with the necessary types in [`Menu`](./src/menu/Menu.ts`) (we're using JSON to generate the tree, so the `Item` type could be useful).

Perhaps an even easier way to describe (solve) this whole mess is through [the internal module pattern](https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de#9afb).

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
- Circular dependency resolution: https://stackoverflow.com/a/42704874
- Circular dependency resolution (**with TypeScript!**): https://medium.com/visual-development/how-to-fix-nasty-circular-dependency-issues-once-and-for-all-in-javascript-typescript-a04c987cf0de
