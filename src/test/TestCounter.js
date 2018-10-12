import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as actions from './TestCounterActions';

export class TestCounter extends Component {
  constructor(props){
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement(){
    this.props.increment();
  }

  onDecrement(){
    this.props.decrement();
  }

  render() {
    return (
      <div className='container'>
        <h2>{this.props.counter}</h2>
        <button className="btn btn-primary btn-sm btn-mrgn" onClick={this.onIncrement}>+1</button>
        <button className="btn btn-primary btn-sm btn-mrgn" onClick={this.onDecrement}>-1</button>
      </div>
    );
  }
};

TestCounter.propTypes = {
  counter: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.testCounter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(actions.incrementCounter()),
    decrement: () => dispatch(actions.decrementCounter())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestCounter);
