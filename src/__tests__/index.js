import React from 'react';
import renderer from 'react-test-renderer';

import AspectRatio from '../index';

describe('Aspect Ratio', () => {
  it('should render wrapper for children', () => {
    const innerImage = <img src="https://foo.bar" alt="demo" />;
    const node = renderer.create(<AspectRatio ratio="4/3">{innerImage}</AspectRatio>).toJSON();
    expect(node).toMatchSnapshot();
  });

  it('should support number as props', () => {
    const innerImage = <img src="https://foo.bar" alt="demo" />;
    const node = renderer.create(<AspectRatio ratio={0.75}>{innerImage}</AspectRatio>).toJSON();
    expect(node).toMatchSnapshot();
  });

  it('custom style willl be adpoted', () => {
    const innerImage = <img src="https://foo.bar" alt="demo" />;
    const node = renderer
      .create(
        <AspectRatio ratio="4/3" style={{ color: '#fff' }}>
          {innerImage}
        </AspectRatio>
      )
      .toJSON();

    expect(node).toMatchSnapshot();
  });
});
