import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);

    this.state = {
      inputText: '',
    }
  }

  componentWillMount() {
    this.setState({ inputText: this.props.zooAnimals });
  }

  handleInput(e) {
    this.setState({ inputText: e.target.value });
    this.props.handleAppText(e.target.value);
  }


  render() {
    return (
      <div>
        <input
          placeholder='Enter Text'
          onChange={this.handleInput}
          value={this.state.inputText}
        ></input>
      </div>
    );
  }
}

export default Input;
