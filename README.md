# lolcolor
Turn anything into a color!

## Usage

### Function

The easiest way to use `lolcolor` is as a simple function.

```javascript

const lolcolor = require('lolcolor');

const text = 'Lorem ipsum dolor sit amet';

console.log(lolcolor(text));

```

### ColorBuilder

If you need a bit more control over your colors you can use the ColorBuilder.

```javascript

const { ColorBuilder } = require('lolcolor');

const builderText = 'Lorem ipsum dolor sit amet';

const colorBuilder = new ColorBuilder();

const [colorR, colorG, colorB] = colorBuilder.fromString(builderText).asRgb().butOnly64Colors().create();

console.log(`Red value:${colorR}, Green value:${colorG}, Blue value:${colorB}`);

```

| Category    | Method           | Parameters     | Description                        |
| ----------- | ---------------- | -------------- | ---------------------------------- |
| Begin       | fromString       | source<string> | The input text                     |
| Create      | create           | (none)         | Output your color                  |
| Color mode  | asHsl            | (none)         | Use HSL color mode                 |
| Color mode  | asRgb            | (none)         | Use RGB color mode                 |
| Color limit | butOnly8Colors   | (none)         | Only choose from 8 colors          |
| Color limit | butOnly64Colors  | (none)         | Only choose from 64 colors (6-bit) |
| Color limit | butOnly256Colors | (none)         | Only choose from 256 colors        |
