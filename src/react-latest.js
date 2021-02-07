// @flow
import React, { type Element } from 'react';

const CUSTOM_PROPERTY_NAME = '--aspect-ratio';
const DEFAULT_CLASS_NAME = 'react-aspect-ratio-placeholder';

type Props = {
  ratio: string | number, // eslint-disable-line
  style: Object,
  children: Element<any>
};

const AspectRatio = (props: Props) => {
  const {
    children,
    ratio,
    style,
    ...restProps
  } = props; // eslint-disable-line no-unused-vars

  const newStyle = {
    ...style,
    // https://github.com/roderickhsiao/react-aspect-ratio/commit/53ec15858ae186c41e70b8c14cc5a5b6e97cb6e3
    [CUSTOM_PROPERTY_NAME]: `(${ratio})`
  };

  return (
    <div {...restProps} style={newStyle}>
      {children}
    </div>
  );
};

AspectRatio.defaultProps = {
  className: DEFAULT_CLASS_NAME,
  ratio: 1
};

export default AspectRatio;
