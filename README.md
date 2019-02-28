<p align="center">
    <h1>React Aspect Ratio</h1>
  <img src="https://cloud.githubusercontent.com/assets/3906130/23882532/7e0cd586-081e-11e7-995f-005196385335.jpg" width="400" alt="reac aspect ratio">
  <br>
  <a href="https://www.npmjs.org/package/react-aspect-ratio"><img src="https://img.shields.io/npm/v/react-aspect-ratio.svg?style=flat" alt="npm"></a>
  <a href="https://unpkg.com/react-aspect-ratio"><img src="https://img.badgesize.io/https://unpkg.com/react-aspect-ratio/dist/es/index.js?compression=gzip" alt="gzip size"></a>
  <a href="https://www.npmjs.com/package/react-aspect-ratio"><img src="https://img.shields.io/npm/dt/react-aspect-ratio.svg" alt="downloads" ></a>
  <a href="https://circleci.com/gh/roderickhsiao/react-aspect-ratio"><img src="https://circleci.com/gh/roderickhsiao/react-aspect-ratio.svg?style=svg" alt="circleci"></a>
  <a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/roderickhsiao/react-aspect-ratio.svg" alt="Greenkeeper badge"></a>

</p>

<hr>
This is a React implementation for aspect ratio placeholder preventing browser reflow before browser downloads and renders your component.

[Demo](https://roderickhsiao.github.io/react-aspect-ratio/)

Inspired by [Thierry](https://twitter.com/thierrykoblentz)

Original idea from [Sérgio Gomes](https://twitter.com/sergiomdgomes)

You can also read a detail [post](https://css-tricks.com/aspect-ratio-boxes/) by [Chris Coyier](https://twitter.com/chriscoyier)

## Why

Most common use case is image loading. If you are not define dimensions for your image tag, browser will assume its a square size of image before image loaded. Hence you will see browser reflow your layout after image loaded.

If you define a hard dimensions, it might not fit a responsive design.

* Chrome is developing [Intrinsic size attribute](https://www.chromestatus.com/feature/4704436815396864) which potentially will act the same as what this library does. However, its very early stage and no other vendors showing signals of development yet.

## How

This component using what people call "Padding trick" - creating a wrapper html tag with zero height and a percentage of `padding-bottom` to perserve space. (`padding-bottom` will be percentage of your component width).

This library also utilizes [CSS variable](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) for modern browser as well as CSS `calc` [API](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) to minimized the style needed for different padding value.


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

```js
import AspectRatio from 'react-aspect-ratio';

const RatioImage = () => (
  <AspectRatio ratio="3/4" style={{ maxWidth: '400px' }}>
    <img src="https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg" />
  </AspectRatio>
);
```

```js
import AspectRatio from 'react-aspect-ratio';

const RatioIframe = () => (
  <AspectRatio ratio="560/315" style={{ maxWidth: '560px' }}>
    <iframe src="https://www.youtube.com/embed/Bku71V5f66g" frameBorder="0" allowFullScreen />
  </AspectRatio>
);
```

Can also use for background image

```js
import AspectRatio from 'react-aspect-ratio';

<AspectRatio
  ratio={0.75}
  style={{
    maxWidth: '300px',
    backgroundImage: 'url(https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg)',
    backgroundSize: 'cover'
  }}
/>;
```

### CSS (By Thierry)

```css
[style*="--aspect-ratio"] > :first-child {
  width: 100%;
}
[style*="--aspect-ratio"] > img {  
  height: auto;
}
@supports (--custom:property) {
  [style*="--aspect-ratio"] {
    position: relative;
  }
  [style*="--aspect-ratio"]::before {
    height: 0;
    content: "";
    display: block;
    padding-bottom: calc(100% / (var(--aspect-ratio)));
  }  
  [style*="--aspect-ratio"] > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }  
}
```

- We use `[style*="--aspect-ratio"]` as a hook to target the appropriate boxes
- We stretch the inner box regardless of support for custom property
- We make sure the height of images comes from their intrinsic ratio rather than their height attribute
- We style the container as a containing block (so the inner box references that ancestor for its positioning)
- We create a pseudo-element to be used with the “padding hack” (it is that element that creates the aspect ratio)
- We use `calc()` and `var()` to calculate padding based on the value of the custom property
- We style the inner box so it matches the dimensions of its containing block
