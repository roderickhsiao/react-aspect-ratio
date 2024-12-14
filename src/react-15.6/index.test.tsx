import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AspectRatio from '.';

describe('AspectRatio Component (Class)', () => {
  it('renders with default props', () => {
    const { getByRole } = render(<AspectRatio />);
    const div = getByRole('generic');

    expect(div).toBeInTheDocument();
    expect(div).toHaveClass('react-aspect-ratio-placeholder');
    expect(div).toHaveStyle('--aspect-ratio: (1)');
  });

  it('renders with custom className and ratio', () => {
    const { getByRole } = render(<AspectRatio className="custom-class" ratio={1.5} />);
    const div = getByRole('generic');

    expect(div).toBeInTheDocument();
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveStyle('--aspect-ratio: (1.5)');
  });

  it('applies custom styles', () => {
    const { getByRole } = render(<AspectRatio style={{ backgroundColor: 'blue' }} />);
    const div = getByRole('generic');

    expect(div).toHaveStyle('background-color: blue');
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

  it('updates custom property in componentDidUpdate', () => {
    const { getByRole, rerender } = render(<AspectRatio ratio={1} />);
    const div = getByRole('generic');

    // Before update
    expect(div.style.getPropertyValue('--aspect-ratio')).toBe('(1)');

    // Update props
    rerender(<AspectRatio ratio={2} />);
    expect(div.style.getPropertyValue('--aspect-ratio')).toBe('(2)');
  });

  it('spreads additional props onto the div', () => {
    const { getByRole } = render(<AspectRatio id="custom-id" data-testid="aspect-ratio" />);
    const div = getByRole('generic');

    expect(div).toHaveAttribute('id', 'custom-id');
    expect(div).toHaveAttribute('data-testid', 'aspect-ratio');
  });
});
