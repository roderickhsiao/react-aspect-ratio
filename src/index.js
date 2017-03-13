import React, { PureComponent } from 'react';

class AspectRatio extends PureComponent {
  constructor(props) {
    super(props);
    this.node = null;
  }

  componentDidMount() {
    // until React support CSS variables
    // https://github.com/facebook/react/issues/6411
    this.updateAspectRatio(null, this.props.ratio);
  }

  componentWillReceiveProps(nextProps) {
    this.updateAspectRatio(this.props.ratio, nextProps.ratio);
  }

  updateAspectRatio(ratio, nextRatio) {
    if (!this.node) { return; }
    if (ratio !== nextRatio) {
      this.node.style.setProperty('--aspect-ratio', nextRatio);
    }
  }
  render() {
    const { ratio, ...others } = this.props; // eslint-disable-line no-unused-vars
    return (
      <div ref={(node) => { this.node = node; }} {...others}>
        {this.props.children}
      </div>
    );
  }
}

AspectRatio.propTypes = {
  ratio: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
};

AspectRatio.defaultProps = {
  className: 'react-aspect-ratio-placeholder',
  ratio: '3/4'
};

export default AspectRatio;
