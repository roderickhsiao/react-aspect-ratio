import type { Props } from './types';

const CUSTOM_PROPERTY_NAME = '--aspect-ratio';
const DEFAULT_CLASS_NAME = 'react-aspect-ratio-placeholder';

function AspectRatio(props: Props) {
  const {
    className = DEFAULT_CLASS_NAME,
    children,
    ratio = 1,
    style,
    ...restProps
  } = props; // eslint-disable-line no-unused-vars

  const newStyle = {
    ...style,
    // https://github.com/roderickhsiao/react-aspect-ratio/commit/53ec15858ae186c41e70b8c14cc5a5b6e97cb6e3
    [CUSTOM_PROPERTY_NAME]: `(${ratio})`,
  } as React.CSSProperties;

  return (
    <div className={className} style={newStyle} {...restProps}>
      {children}
    </div>
  );
}

export default AspectRatio;
