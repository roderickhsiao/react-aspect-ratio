import renderer from 'react-test-renderer';

import OldAspectRatio, { AspectRatio } from '../index';

describe('Aspect Ratio', () => {
  describe('React < 15.6', () => {
    it('should render wrapper for children', () => {
      const innerImage = <img src="https://foo.bar" alt="demo" />;
      const node = renderer
        .create(<OldAspectRatio ratio="4/3">{innerImage}</OldAspectRatio>)
        .toJSON();
      expect(node).toMatchSnapshot();
    });

    it('should support number as props', () => {
      const innerImage = <img src="https://foo.bar" alt="demo" />;
      const node = renderer
        .create(<OldAspectRatio ratio={0.75}>{innerImage}</OldAspectRatio>)
        .toJSON();
      expect(node).toMatchSnapshot();
    });

    it('custom style will be adpoted', () => {
      const innerImage = <img src="https://foo.bar" alt="demo" />;
      const node = renderer
        .create(
          <OldAspectRatio ratio="4/3" style={{ color: '#fff' }}>
            {innerImage}
          </OldAspectRatio>,
        )
        .toJSON();

      expect(node).toMatchSnapshot();
    });
  });

  describe('React > 15.6', () => {
    it('should render wrapper for children', () => {
      const innerImage = <img src="https://foo.bar" alt="demo" />;
      const node = renderer
        .create(<AspectRatio ratio="4/3">{innerImage}</AspectRatio>)
        .toJSON();
      expect(node).toMatchSnapshot();
    });

    it('should support number as props', () => {
      const innerImage = <img src="https://foo.bar" alt="demo" />;
      const node = renderer
        .create(<AspectRatio ratio={0.75}>{innerImage}</AspectRatio>)
        .toJSON();
      expect(node).toMatchSnapshot();
    });

    it('custom style willl be adpoted', () => {
      const innerImage = <img src="https://foo.bar" alt="demo" />;
      const node = renderer
        .create(
          <AspectRatio ratio="4/3" style={{ color: '#fff' }}>
            {innerImage}
          </AspectRatio>,
        )
        .toJSON();

      expect(node).toMatchSnapshot();
    });
  });
});
