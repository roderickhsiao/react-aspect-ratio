import React from 'react';
import { storiesOf } from '@kadira/storybook';
import AspectRatio from '../index';

import '../../aspect-ratio.css';

storiesOf('AspectRatio', module)
  .add('Image', () => (
    <div className="card">
      <h2>Image with Aspect Ratio</h2>
      <AspectRatio ratio="3/4" style={{ maxWidth: '400px' }}>
        <img src="https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg" alt="demo" />
      </AspectRatio>
    </div>
  ))
  .add('Background Image', () => (
    <div className="card">
      <h2>Background image with aspect ratio</h2>
      <AspectRatio
        ratio="3/4"
        style={{
          maxWidth: '300px',
          backgroundImage: 'url(https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg)',
          backgroundSize: 'cover',
        }}
      />
    </div>
  ))
  .add('Iframe', () => (
    <div className="card">
      <h2>Iframe with aspect ratio</h2>
      <AspectRatio ratio="560/315" style={{ maxWidth: '560px' }}>
        <iframe src="https://www.youtube.com/embed/Sv6dMFF_yts" frameBorder="0" allowFullScreen />
      </AspectRatio>
    </div>
  ));
