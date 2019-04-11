import React, { Component } from ‘react’;

class IncrementOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  };

  handleClick = ( ) => {
    let newNumber = this.state.counter + 1
    this.setState({ counter: newNumber });
  }

  render ( ) {
    return (
      <div>
        <button onClick={this.handleClick}>
          { this.state.counter }
        </button>
      </div>
    );
  }
}

export default IncrementOne;
