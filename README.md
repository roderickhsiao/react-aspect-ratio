<p align="center">
  <h1>React Aspect Ratio</h1>
  <br>
  <a href="https://www.npmjs.org/package/quicklink"><img src="https://img.shields.io/npm/v/quicklink.svg?style=flat" alt="npm"></a>
  <a href="https://unpkg.com/quicklink"><img src="https://img.badgesize.io/https://unpkg.com/quicklink/dist/quicklink.js?compression=gzip" alt="gzip size"></a>
  <a href="https://www.npmjs.com/package/quicklink"><img src="https://img.shields.io/npm/dt/quicklink.svg" alt="downloads" ></a>
  <a href="https://travis-ci.org/GoogleChromeLabs/quicklink"><img src="https://travis-ci.org/GoogleChromeLabs/quicklink.svg?branch=master" alt="travis"></a>
</p>


[![npm version](https://badgen.net/npm/v/react-aspect-ratio)](https://www.npmjs.com/package/react-aspect-ratio)
[![CircleCI](https://circleci.com/gh/roderickhsiao/react-aspect-ratio.svg?style=svg)](https://circleci.com/gh/roderickhsiao/react-aspect-ratio)
[![Dependencies Status](https://badgen.net/david/dep/roderickhsiao/react-aspect-ratio)](https://david-dm.org/roderickhsiao/react-aspect-ratio)
[![devDependencies Status](https://badgen.net/david/dev/roderickhsiao/react-aspect-ratio)](https://david-dm.org/roderickhsiao/react-aspect-ratio?type=dev)

This is a React implementation for aspect ratio placeholder preventing browser reflow before browser downloads and renders your component.

Inspired by awesome post from [CSS Mojo](http://www.cssmojo.com/aspect-ratio-using-custom-properties-and-calc/) by [Thierry](https://twitter.com/thierrykoblentz)

Original idea from [Sérgio Gomes](https://twitter.com/sergiomdgomes)

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

**You will need to `import 'react-aspect-ratio/aspect-ratio.css'`**


```js
import AspectRatio from 'react-aspect-ratio';

const RatioImage = () => (
  <AspectRatio ratio="3/4" style={{maxWidth: '400px'}}>
    <img src="https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg" />
  </AspectRatio>
);
```

For browser support [CSS variable](http://caniuse.com/#feat=css-variables), you can use it to wrap other elements (like iframe, video, object ...etc) as well

```js
import AspectRatio from 'react-aspect-ratio';

const RatioIframe = () => (
  <AspectRatio ratio="560/315" style={{maxWidth: '560px'}}>
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
/>
```

## API

### Props
  - `ratio`: string | number
  - any other props, note that the component will add custom variable `--aspect-ratio` to component `style`
  - children: single DOM child


  <p align="center">
    <img src="https://cloud.githubusercontent.com/assets/3906130/23882532/7e0cd586-081e-11e7-995f-005196385335.jpg" width="640" alt="aspect ratio">
    <br>
  </p>
