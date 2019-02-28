// @flow
import React, { memo, type Element } from 'react';

const CUSTOM_PROPERTY_NAME = '--aspect-ratio';

type Props = {
  ratio: string | number, // eslint-disable-line
  style: Object,
  children: Element<any>
};

const AspectRatio = (props: Props) => {
  const {
    ratio,
    style,
    children,
    ...otherProps
  } = props; // eslint-disable-line no-unused-vars

  const newStyle = {
    ...style,
    // https://github.com/roderickhsiao/react-aspect-ratio/commit/53ec15858ae186c41e70b8c14cc5a5b6e97cb6e3
    [CUSTOM_PROPERTY_NAME]: `(${ratio})`
  };

  return (
    <div style={newStyle} {...otherProps}>
      {children}
    </div>
  );
}

AspectRatio.defaultProps = {
  className: 'react-aspect-ratio-placeholder',
  ratio: 1
};

export default memo<Props>(AspectRatio);
