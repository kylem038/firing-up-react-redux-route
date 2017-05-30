import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { captureInput } from '../actions/input.js';

import Input from './input';

class App extends Component {
  constructor() {
    super();

    this.submitText = this.submitText.bind(this);
    this.handleAppText = this.handleAppText.bind(this);

    this.state = {
      inputText: 'Hey',
    }
  }

  submitText() {
    const { captureInput } = this.props;
    captureInput(this.state.inputText);
  }

  handleAppText(text) {
    this.setState({ inputText: text });
  }

  render() {
    return (
      <div>
        <Input
          zooAnimals={this.state.inputText}
          handleAppText={this.handleAppText}
        />
        <button onClick={this.submitText}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch =>
  bindActionCreators({ captureInput }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
