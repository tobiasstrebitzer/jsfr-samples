# JSFR

Javascript Function Repository Example

## Installation

`npm install`

## Usage

1. `node_modules/.bin/webpack`
2. `node .`

## Example

```js
const input = 'hello-world'
const output = @lodash.snakecase(input)
console.log(output)
```

## Explanation

JSFR provides an easy and reliable way to run functions directly off a global registry (e.g. npm).

JSFR supports all packages that have a function as their default export.

The following notation can be used: `@packageName(argument1, argument2)`

Behind the scenes, a webpack plugin `babel-plugin-jsfr` is used to automatically install any missing dependencies.
