// @flow
import React, { Component } from 'react';

const CUSTOM_PROPERTY_NAME = '--aspect-ratio';

type Props = {
  ratio: string | number, // eslint-disable-line
  style: Object,
  children: Element<any>
};

class AspectRatio extends Component<Props> {
  static defaultProps = {
    className: 'react-aspect-ratio-placeholder',
    ratio: 1
  };

  node: ?HTMLDivElement = null;

  componentDidUpdate() {
    if (this.node) {
      const { node } = this;

      // BC for older version of React https://github.com/facebook/react/issues/6411
      // check if React support custom property AFTER
      const customPropertyValue = node.style.getPropertyValue(CUSTOM_PROPERTY_NAME);
      if (!customPropertyValue) {
        node.style.setProperty(CUSTOM_PROPERTY_NAME, `(${this.props.ratio})`);
      }
    }
  }

  setNode = (node: ?HTMLDivElement): void => {
    this.node = node;
  };

  render() {
    const {
      ratio, style, children, ...otherProps
    } = this.props; // eslint-disable-line no-unused-vars

    const newStyle = {
      ...style,
      // https://github.com/roderickhsiao/react-aspect-ratio/commit/53ec15858ae186c41e70b8c14cc5a5b6e97cb6e3
      [CUSTOM_PROPERTY_NAME]: `(${ratio})`
    };

    return ( // $FlowFixMe
      <div ref={this.setNode} style={newStyle} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default AspectRatio;
