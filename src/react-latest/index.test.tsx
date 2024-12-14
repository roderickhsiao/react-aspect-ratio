import { render } from '@testing-library/react';
import AspectRatio from '.';

describe('AspectRatio Component', () => {
  it('should render correctly', () => {
    const { container } = render(<AspectRatio>Content</AspectRatio>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should apply default class name', () => {
    const { container } = render(<AspectRatio>Content</AspectRatio>);
    expect(container.firstChild).toHaveClass('react-aspect-ratio-placeholder');
  });

  it('should apply custom class name', () => {
    const customClassName = 'custom-class';
    const { container } = render(<AspectRatio className={customClassName}>Content</AspectRatio>);
    expect(container.firstChild).toHaveClass(customClassName);
  });

  it('should apply custom style', () => {
    const customStyle = { backgroundColor: 'red' };
    const { container } = render(<AspectRatio style={customStyle}>Content</AspectRatio>);
    expect(container.firstChild).toHaveStyle(customStyle);
  });

  it('should apply custom ratio', () => {
    const customRatio = 1.5;
    const { container } = render(<AspectRatio ratio={customRatio}>Content</AspectRatio>);
    expect(container.firstChild).toHaveStyle({ '--aspect-ratio': `(${customRatio})` });
  });
});