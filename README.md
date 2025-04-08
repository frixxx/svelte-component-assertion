# Svelte Component Assertion

A little assertion library to assert svelte component properties.

## Installation

`yarn add "@frixxx/svelte-component-assertion"`

## Usage

```js
import assert from "@frixxx/svelte-component-assertion"

[...]

assert(objA, objB).boolean()
assert(objA).boolean()
assert(objA).error("Wrong")
```

*This readme file is still WIP.*