import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { captureInput } from '../actions/input.js';

class App extends Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.submitText = this.submitText.bind(this);

    this.state = {
      inputText: '',
    }
  }

  handleInput(e) {
    this.setState({ inputText: e.target.value });
  }

  submitText() {
    const { captureInput } = this.props;
    captureInput(this.state.inputText);
  }

  render() {
    return (
      <div>
        <input
          placeholder='Enter Text'
          onChange={this.handleInput}
        ></input>
        <button onClick={this.submitText}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch =>
  bindActionCreators({ captureInput }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
