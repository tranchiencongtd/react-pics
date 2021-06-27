import React, { Component } from 'react';

export class CardImage extends Component {
  constructor(props) {
    super(props);
    this.state = { numSpan: 0 };
    this.imgRef = React.createRef();
  }

  setSpans = () => {
    const height = this.imgRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({ numSpan: spans });
  };

  componentDidMount() {
    this.imgRef.current.addEventListener('load', this.setSpans);
  }

  render() {
    const { urls, alt_description } = this.props;
    return (
      <div style={{ gridRowEnd: `span ${this.state.numSpan}` }}>
        <img
          ref={this.imgRef}
          src={urls.regular}
          alt={alt_description}
        />
      </div>
    );
  }
}

export default CardImage;
