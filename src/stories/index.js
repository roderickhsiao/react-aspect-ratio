import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import AspectRatio from '../index';

import '../../aspect-ratio.css';
import '../../theme.css';

const PageTitle = () => (
  <div className="page__title">
    <h1 className="page__title-main">
      React Apect Ratio
      <a
        className="github mui-icon"
        href="https://github.com/roderickhsiao/react-aspect-ratio"
        target="_blank"
        rel="noopener noreferrer"
        title="github"
      >
        <span style={{ visibility: 'hidden' }}> Github </span>
      </a>
    </h1>
    <p className="page__title-desc">prevent reflow by preserving aspect ratio of your component</p>
  </div>
);

const Card = ({ titleText, contentNode }) => (
  <div className="card">
    <div className="card__head">
      <h3 className="card__title">{titleText}</h3>
    </div>
    <div className="card__conent">{contentNode}</div>
  </div>
);
storiesOf('AspectRatio', module)
  .add('Image', () => (
    <Fragment>
      <PageTitle />
      <Card
        titleText="Image with Aspect Ratio"
        contentNode={(
          <AspectRatio ratio="3/4" style={{ maxWidth: '400px' }}>
            <img src="https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg" alt="demo" />
          </AspectRatio>
)}
      />
    </Fragment>
  ))
  .add('Image with number', () => (
    <Fragment>
      <PageTitle />
      <Card
        titleText="Image with Aspect Ratio"
        contentNode={(
          <AspectRatio ratio={0.75} style={{ maxWidth: '400px' }}>
            <img src="https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg" alt="demo" />
          </AspectRatio>
)}
      />
    </Fragment>
  ))
  .add('Background Image', () => (
    <Fragment>
      <PageTitle />
      <Card
        titleText="Background image with aspect ratio"
        contentNode={(
          <AspectRatio
            ratio="3/4"
            style={{
              maxWidth: '300px',
              backgroundImage: 'url(https://c1.staticflickr.com/4/3896/14550191836_cc0675d906.jpg)',
              backgroundSize: 'cover'
            }}
          />
)}
      />
    </Fragment>
  ))
  .add('Gallery', () => {
    const images = [
      {
        src: 'http://pbs.twimg.com/media/CO-ghuGWEAAGsFd.jpg',
        ratio: '261/393'
      },
      {
        src:
          'http://static.boredpanda.com/blog/wp-content/uploads/2015/04/bulldog-puppy-cute-dog-photography-23__605.jpg',
        ratio: '550/393'
      },
      {
        src:
          'http://static.boredpanda.com/blog/wp-content/uploads/2015/04/bulldog-puppy-cute-dog-photography-5__605.jpg',
        ratio: '599/393'
      },
      {
        src:
          'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQikQmH0BSHHpjcqFkyZr5FqMXuwONleKSsMRmcz-L-bLJHmyxgqw',
        ratio: '500/377'
      }
    ];
    return (
      <Fragment>
        <PageTitle />
        <Card
          titleText="Image Gallery with Aspect Ratio"
          contentNode={(
            <div className="gallery">
              {images.map(image => (
                <div className="gallery__image" key={image.src}>
                  <AspectRatio ratio={image.ratio}>
                    <img src={image.src} alt="demo" />
                  </AspectRatio>
                </div>
              ))}
            </div>
)}
        />
      </Fragment>
    );
  })
  .add('Iframe', () => (
    <Fragment>
      <PageTitle />
      <Card
        titleText="Iframe with aspect ratio"
        contentNode={(
          <AspectRatio ratio="560/315" style={{ maxWidth: '560px' }}>
            <iframe
              src="https://www.youtube.com/embed/Sv6dMFF_yts"
              frameBorder="0"
              allowFullScreen
              title="youtube"
            />
          </AspectRatio>
)}
      />
    </Fragment>
  ));
