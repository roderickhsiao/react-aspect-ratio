// @flow
import React, { PureComponent, createRef } from 'react';

import { polyfill } from 'react-lifecycles-compat';

const CUSTOM_PROPERTY_NAME = '--aspect-ratio';

type Props = {
  ratio: string | number,
  style: Object,
  children: Object
};

type State = {
  ratio: string | number
};

class AspectRatio extends PureComponent<Props, State> {
  node: ?Element;

  state: {
    ratio: string | number
  };

  state = {
    ratio: this.props.ratio
  };

  node = null;

  static defaultProps = {
    className: 'react-aspect-ratio-placeholder',
    ratio: '1/1'
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.ratio === prevState.ratio) {
      return null;
    }

    return {
      ratio: nextProps.ratio
    };
  }

  componentDidUpdate() {
    if (this.node) {
      const node = this.node;
      // BC for older version of React https://github.com/facebook/react/issues/6411
      // check if React support custom property AFTER
      const customPropertyValue = node.style.getPropertyValue(CUSTOM_PROPERTY_NAME);
      if (!customPropertyValue) {
        node.style.setProperty(CUSTOM_PROPERTY_NAME, String(this.state.ratio));
      }
    }
  }

  render() {
    const { ratio, style, ...otherProps } = this.props; // eslint-disable-line no-unused-vars

    const newStyle = {
      [CUSTOM_PROPERTY_NAME]: this.state.ratio,
      ...style
    };

    return (
      <div
        ref={node => {
          this.node = node;
        }}
        style={newStyle}
        {...otherProps}
      >
        {this.props.children}
      </div>
    );
  }
}

export default polyfill(AspectRatio);
