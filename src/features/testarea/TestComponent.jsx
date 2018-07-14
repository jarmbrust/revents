import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { incrementCounter, decrementCounter } from './testActions';

const mapState = (state) => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
}

class TestComponent extends Component {
  render() {
    const { incrementCounter, decrementCounter, data} = this.props;
    return (
      <div>
        <h1>test area</h1>
        <h3>this answer is: {data}</h3>
        <Button onClick={incrementCounter} color="green" content="Incremenet"/>
        <Button onClick={decrementCounter} color="red" content="Decrement"/>
      </div>
    )
  }
};

export default connect(mapState, actions)(TestComponent);