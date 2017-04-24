// @flow
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AspectRatio extends PureComponent {
  node: {
    style: Object
  }

  constructor(props: Object) {
    super(props);
    this.node;
  }

  static defaultProps = {
    className: 'react-aspect-ratio-placeholder',
    ratio: '3/4'
  };

  static propTypes = {
    ratio: PropTypes.string.isRequired,
    children: PropTypes.node
  };

  componentDidMount() {
    // until React support CSS variables
    // https://github.com/facebook/react/issues/6411
    this.updateAspectRatio('', this.props.ratio);
  }

  componentWillReceiveProps(nextProps: Object) {
    this.updateAspectRatio(this.props.ratio, nextProps.ratio);
  }

  updateAspectRatio = (ratio: string, nextRatio: string) => {
    if (!this.node) {
      return;
    }
    if (ratio !== nextRatio) {
      this.node.style.setProperty('--aspect-ratio', nextRatio);
    }
  };

  render() {
    const { ratio, ...others } = this.props; // eslint-disable-line no-unused-vars
    return (
      <div
        ref={node => {
          this.node = node;
        }}
        {...others}
      >
        {this.props.children}
      </div>
    );
  }
}

export default AspectRatio;
