import React from 'react';
import { storiesOf } from '@kadira/storybook';
import AspectRatio from '../index';

import '../../aspect-ratio.css';
import '../../theme.css';

const PageTitle = () => (
  <div className="page__title">
    <h1 className="page__title-main">
      React Apect Ratio
      <a className="github mui-icon" href="https://github.com/roderickhsiao/react-aspect-ratio"></a>
    </h1>
    <p className="page__title-desc">
      prevent reflow by preserving aspect ratio of your component
    </p>

  </div>
);

const Card = ({ titleText, contentNode }) => (
  <div className="card">
    <div className="card__head">
      <h3 className="card__title">{titleText}</h3>
    </div>
    <div className="card__conent">
      {contentNode}
    </div>
  </div>
);
storiesOf('AspectRatio', module)
  .add('Image', () => (
    <div>
      <PageTitle />
      <Card
        titleText="Image with Aspect Ratio"
        contentNode={
          <AspectRatio ratio="3/4" style={{ maxWidth: '400px' }}>
            <img
              src="https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg"
              alt="demo"
            />
          </AspectRatio>
        }
      />
    </div>
  ))
  .add('Background Image', () => (
    <div>
      <PageTitle />
      <Card
        titleText="Background image with aspect ratio"
        contentNode={
          <AspectRatio
            ratio="3/4"
            style={{
              maxWidth: '300px',
              backgroundImage: 'url(https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg)',
              backgroundSize: 'cover'
            }}
          />
        }
      />
    </div>
  ))
  .add('Iframe', () => (
    <div>
      <PageTitle />
      <Card
        titleText="Iframe with aspect ratio"
        contentNode={
          <AspectRatio ratio="560/315" style={{ maxWidth: '560px' }}>
            <iframe
              src="https://www.youtube.com/embed/Sv6dMFF_yts"
              frameBorder="0"
              allowFullScreen
            />
          </AspectRatio>
        }
      />
    </div>
  ));
