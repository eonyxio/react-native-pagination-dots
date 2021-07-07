# react-native-pagination-dots

React native pagination dots.

[![](https://img.shields.io/npm/v/react-native-pagination-dots.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-pagination-dots)
[![](https://img.shields.io/github/license/eonyxio/react-native-pagination-dots.svg?style=for-the-badge)](LICENSE.md)

## Install

```bash
npm i react-native-pagination-dots
```

## Usage

```js
import React from 'react'
import PaginationDots from 'react-native-pagination-dots'

export default App() => {
    return (
        <PaginationDots length={matchedCoaches.length} activeIndex={index} />
    )
}

```
## Props

| Property      | Type   | Default      | Description             |
| ------------- | ------ | ------------ | ----------------------- |
| length        | number | 5            | Total number of dots    |
| activeIndex   | number | 0            | Index of active dot     |
| activeWidth   | number | 30           | Width of active dot     |
| passiveWidth  | number | 10           | Width of non-active dot |
| height        | number | 10           | Height of dots          |
| spacing       | number | 5            | Spacing between dots    |
| activeColor   | string | `"#ffffff"`  | Color of active dot     |
| passiveColor  | string | `"#ffffff"`  | Color of non-active dot |

## License

[MIT](LICENSE)
