// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { polyfill } from 'react-lifecycles-compat';

const CUSTOM_PROPERTY_NAME = '--aspect-ratio';

type Props = {
  ratio: string,
  children: Object
};

class AspectRatio extends PureComponent<Props> {
  node: {
    style: Object
  };

  state: {
    ratio: string
  }

  state = {
    ratio: this.props.ratio
  }

  static defaultProps = {
    className: 'react-aspect-ratio-placeholder',
    ratio: '1/1'
  };

  static propTypes = {
    ratio: PropTypes.string.isRequired,
    children: PropTypes.node
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.ratio === prevState.ratio) {
      return null;
    }

    return this.getAspectRatio(nextProps.ratio);
  }

  getAspectRatio = (ratio: string) => ({ ratio });

  componentDidUpdate() {
    if (this.node) {
      // BC for older version of React https://github.com/facebook/react/issues/6411
      // check if React support custom property AFTER
      const customPropertyValue = this.node.style.getPropertyValue(CUSTOM_PROPERTY_NAME);
      if (!customPropertyValue) {
        this.node.style.setProperty('--aspect-ratio', this.state.ratio);
      }
    }
  }

  render() {
    const { ratio, style, ...others } = this.props; // eslint-disable-line no-unused-vars

    const newStyle = Object.assign({ [CUSTOM_PROPERTY_NAME]: this.state.ratio }, style);

    return (
      <div
        ref={node => {
          this.node = node;
        }}
        style={newStyle}
        {...others}
      >
        {this.props.children}
      </div>
    );
  }
}

export default polyfill(AspectRatio);
