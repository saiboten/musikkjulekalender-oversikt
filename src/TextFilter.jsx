import React, { Component } from "react";

class TextFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <label htmlFor="search">Filter sanger</label>
        <input id="search" value={this.state.value} onChange={this.onChange} />
      </React.Fragment>
    );
  }
}

export default TextFilter;
