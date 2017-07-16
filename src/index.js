// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const CUSTOM_PROPERTY_NAME = '--aspect-ratio';

class AspectRatio extends PureComponent {
  node: {
    style: Object
  };

  constructor(props: Object) {
    super(props);
    this.node;

    this.state = {
      ratio: props.ratio
    };
  }

  static defaultProps = {
    className: 'react-aspect-ratio-placeholder',
    ratio: '1/1'
  };

  static propTypes = {
    ratio: PropTypes.string.isRequired,
    children: PropTypes.node
  };

  componentDidMount() {
    this.updateAspectRatio('', this.props.ratio);
  }

  componentWillReceiveProps(nextProps: Object) {
    this.updateAspectRatio(this.props.ratio, nextProps.ratio);
  }

  updateAspectRatio = (ratio: string, nextRatio: string) => {
    if (ratio !== nextRatio) {
      this.setState(
        {
          ratio: nextRatio
        },
        () => {
          if (this.node) {
            // BC for older version of React https://github.com/facebook/react/issues/6411
            // check if React support custom property AFTER
            const customPropertyValue = this.node.style.getPropertyValue(
              CUSTOM_PROPERTY_NAME
            );
            if (!customPropertyValue) {
              this.node.style.setProperty('--aspect-ratio', nextRatio);
            }
          }
        }
      );
    }
  };

  render() {
    const { ratio, style, ...others } = this.props; // eslint-disable-line no-unused-vars
    const newStyle = Object.assign(
      { [CUSTOM_PROPERTY_NAME]: this.state.ratio },
      style
    );

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

export default AspectRatio;
