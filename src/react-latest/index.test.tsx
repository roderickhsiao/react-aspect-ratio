import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AspectRatio from '.';
import { createRef } from 'react';

describe('AspectRatio Component', () => {
  it('renders with default props', () => {
    const { container } = render(<AspectRatio />);
    const div = container.firstChild;

    expect(div).toBeInTheDocument();
    expect(div).toHaveClass('react-aspect-ratio-placeholder');
    expect(div).toHaveStyle('--aspect-ratio: (1)');
  });

  it('renders with a custom className and ratio', () => {
    const { container } = render(
      <AspectRatio className="custom-class" ratio={1.5} />
    );
    const div = container.firstChild;

    expect(div).toBeInTheDocument();
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveStyle('--aspect-ratio: (1.5)');
  });

  it('applies custom style', () => {
    const { container } = render(
      <AspectRatio style={{ backgroundColor: 'red' }} />
    );
    const div = container.firstChild;

    expect(div).toBeInTheDocument();
    expect(div).toHaveStyle('background-color: red');
    expect(div).toHaveStyle('--aspect-ratio: (1)');
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <AspectRatio>
        <span>Test Child</span>
      </AspectRatio>
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('forwards the ref correctly', () => {
    const ref = createRef<HTMLDivElement>();
    render(<AspectRatio ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('DIV');
  });

  it('spreads additional props onto the div', () => {
    const { container } = render(
      <AspectRatio id="custom-id" data-testid="aspect-ratio" />
    );
    const div = container.firstChild;

    expect(div).toHaveAttribute('id', 'custom-id');
    expect(div).toHaveAttribute('data-testid', 'aspect-ratio');
  });
});
