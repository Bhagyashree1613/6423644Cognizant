import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleWelcome = this.handleWelcome.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello() {
    console.log("Hello! Button clicked to increment.");
  }

  handleWelcome(message) {
    alert(`Welcome Message: ${message}`);
  }

  handleSyntheticEvent = (event) => {
    console.log("Synthetic Event Type:", event.type);
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ margin: '30px' }}>
        <h2>Counter Value: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.handleWelcome('Welcome to React Event Handling')}>
          Say Welcome
        </button>
        <br /><br />
        <button onClick={this.handleSyntheticEvent}>Synthetic Event (Click Me)</button>
      </div>
    );
  }
}

export default Counter;
