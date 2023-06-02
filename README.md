<p align="center">
    <h1>React Aspect Ratio</h1>
  <img src="https://cloud.githubusercontent.com/assets/3906130/23882532/7e0cd586-081e-11e7-995f-005196385335.jpg" width="400" alt="reac aspect ratio">
  <br>
  <a href="https://www.npmjs.org/package/react-aspect-ratio"><img src="https://img.shields.io/npm/v/react-aspect-ratio.svg?style=flat" alt="npm"></a>
  <a href="https://unpkg.com/react-aspect-ratio"><img src="https://img.badgesize.io/https://unpkg.com/react-aspect-ratio/dist/es/index.js?compression=gzip" alt="gzip size"></a>
  <a href="https://www.npmjs.com/package/react-aspect-ratio"><img src="https://img.shields.io/npm/dt/react-aspect-ratio.svg" alt="downloads" ></a>
</p>

<hr>
This is a React implementation that addresses the issue of browser reflow by providing an aspect ratio placeholder. It aims to prevent layout shifts, particularly in cases where components are being downloaded and rendered by the browser.

The concept of preventing [Cumulative Layout Shift (CLS)](https://web.dev/cls/) is discussed in the article linked: Cumulative Layout Shift. It explains the importance of avoiding layout shifts to improve user experience.

You can see a live demonstration of the React aspect ratio placeholder implementation at this link: [Demo](https://roderickhsiao.github.io/react-aspect-ratio/).

The implementation was inspired by [Thierry Koblentz](https://www.linkedin.com/in/thierryk/), a recognized expert in web development and design.

The original idea for this implementation came from [Sérgio Gomes](https://twitter.com/sergiomdgomes).

For more in-depth information on aspect ratio boxes and related techniques, you can refer to the detailed post by Chris Coyier, a prominent figure in the web development community. The post can be found here: [Post](https://css-tricks.com/aspect-ratio-boxes/). Chris Coyier's Twitter profile is also linked for further reference: [Chris Coyier](https://twitter.com/chriscoyier).

## Why

The most common use case for image loading is when you include an image tag without specifying its dimensions. In such cases, the browser will assume a square size for the image before it is fully loaded, which can result in a layout shift or reflow once the image is loaded.

To prevent layout shifts, it is recommended to define the dimensions of the image explicitly. However, it's important to note that if you hardcode fixed dimensions, it may not adapt well to responsive designs where the layout needs to adjust dynamically based on different screen sizes and orientations.

## How

This library employs a clever technique to create space based on the aspect ratio of an element. It utilizes a pseudo-element to achieve this effect, taking advantage of the (`aspect-ratio`)[https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio] property available in browsers like Chromium 88, Firefox 87, and Safari Technology Preview 118.

For browsers that do not support the `aspect-ratio` property, the library employs a technique commonly known as the "Padding trick." It creates a wrapper HTML tag with a height of zero and applies a percentage value to the padding-bottom property to preserve space. The padding-bottom value is calculated as a percentage of the component's width.

To ensure compatibility and maintain a clean codebase, the library also utilizes [CSS variable](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables), available in modern browsers, and the CSS `calc` [API](https://developer.mozilla.org/en-US/docs/Web/CSS/calc). These features help minimize the amount of styling required for different padding values, resulting in a more efficient implementation.

## Browser Support

We replies on [CSS custom property](https://caniuse.com/css-variables) and CSS `calc` [function](https://caniuse.com/?search=calc).

## Installation

via [yarn](https://yarnpkg.com/en/docs)

```
$ yarn add react-aspect-ratio
```

or via [npm](https://docs.npmjs.com/)

```
$ npm install react-aspect-ratio
```

## Usage

### Props

| Props       | Type          | Default                                     | Description                                                                                   |
|-------------|---------------|---------------------------------------------|-----------------------------------------------------------------------------------------------|
| ratio       | string/number | 1                                           | Aspect ratio of your component, could be number or string like width/height                   |
| other props | Object        | ```{style: {--aspect-ratio: ${ratio}} }``` | Any props to your React component, the library will add `--aspect-ratio` to your style object |
| children    | React Element |                                             | Single DOM element                                                                            |

**You will need to `import 'react-aspect-ratio/aspect-ratio.css'`**

* Note
```js
import { AspectRatio } from 'react-aspect-ratio'; // Recommended: if you are using React > 15.6

import AspectRatio from 'react-aspect-ratio'; // Deprecated: if you are using React <= 15.6
```

```js
import { AspectRatio } from 'react-aspect-ratio';

const RatioImage = () => (
  <AspectRatio ratio="3/4" style={{ maxWidth: '400px' }}>
    <img src="https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg" />
  </AspectRatio>
);
```

```js
import { AspectRatio } from 'react-aspect-ratio';

const RatioIframe = () => (
  <AspectRatio ratio="560/315" style={{ maxWidth: '560px' }}>
    <iframe src="https://www.youtube.com/embed/Bku71V5f66g" frameBorder="0" allowFullScreen />
  </AspectRatio>
);
```

Can also use for background image

```js
import { AspectRatio } from 'react-aspect-ratio';

<AspectRatio
  ratio={0.75}
  style={{
    maxWidth: '300px',
    backgroundImage: 'url(https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg)',
    backgroundSize: 'cover'
  }}
/>;
```

### CSS (Inspired by Thierry)

```css
[style*="--aspect-ratio"] > :first-child {
  width: 100%;
}

[style*="--aspect-ratio"] > img {
  height: auto;
}

[style*="--aspect-ratio"] {
  position: relative;
}

[style*="--aspect-ratio"] > :first-child {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
}

[style*="--aspect-ratio"]::before {
  content: "";
  display: block;
}

@supports not (aspect-ratio: 1/1) {
  [style*="--aspect-ratio"]::before {
    height: 0;
    padding-bottom: calc(100% / (var(--aspect-ratio)));
  }
}
@supports (aspect-ratio: 1/1) {
  [style*="--aspect-ratio"]::before {
    aspect-ratio: calc(var(--aspect-ratio));
  }
}
```

- We use `[style*="--aspect-ratio"]` as a hook to target the appropriate boxes
- We stretch the inner box regardless of support for custom property
- We make sure the height of images comes from their intrinsic ratio rather than their height attribute
- We style the container as a containing block (so the inner box references that ancestor for its positioning)
- We create a pseudo-element to be used with
  - native `aspect-ratio` property if browser supported
  - the “padding hack” (it is that element that creates the aspect ratio) for browser not supporting `aspect-ratio`
- We use `calc()` and `var()` to calculate padding based on the value of the custom property
- We style the inner box so it matches the dimensions of its containing block
